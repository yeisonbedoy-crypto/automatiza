import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'motion/react';
import { X, ArrowUp } from 'lucide-react';
import { LogoIcon } from './LogoIcon';
import {
  PERSONAS,
  OPEN_ASSISTANT_EVENT,
  type PersonaId,
} from '../lib/personas';

interface ChatMessage {
  role: 'user' | 'bot';
  text: string;
}

/** API same-origin: en dev lo resuelve el proxy de Vite, en prod el rewrite de Vercel. */
const CHAT_ENDPOINT = '/api/chat';

function freshId(persona: PersonaId): string {
  return `web-${persona}-${Math.random().toString(36).slice(2, 10)}-${Date.now().toString(36)}`;
}

export default function StickyAssistant() {
  const [open, setOpen] = useState(false);
  const [persona, setPersona] = useState<PersonaId>('default');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);

  const externalIdRef = useRef<string>(freshId('default'));
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const p = PERSONAS[persona];

  // Inclinación 3D del botón flotante derivada del cursor (solo puntero fino
  // y si el usuario no pide menos movimiento). En táctil queda neutralizado.
  const finePointer = useRef(
    typeof window !== 'undefined' &&
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 220, damping: 22, mass: 0.4 });
  const sy = useSpring(py, { stiffness: 220, damping: 22, mass: 0.4 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-6, 6]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [6, -6]);

  /** Arranca (o reinicia) una conversación con la persona dada. */
  const startConversation = useCallback((next: PersonaId, forceNew: boolean) => {
    setPersona((current) => {
      if (forceNew || current !== next) {
        externalIdRef.current = freshId(next);
        setMessages([{ role: 'bot', text: PERSONAS[next].opener }]);
      } else {
        setMessages((m) =>
          m.length ? m : [{ role: 'bot', text: PERSONAS[next].opener }],
        );
      }
      return next;
    });
  }, []);

  // Apertura desde los botones de los bloques (conversación nueva cada vez).
  useEffect(() => {
    function onOpen(e: Event) {
      const detail = (e as CustomEvent<{ persona: PersonaId }>).detail;
      const next = detail?.persona ?? 'default';
      startConversation(next, true);
      setOpen(true);
    }
    window.addEventListener(OPEN_ASSISTANT_EVENT, onOpen as EventListener);
    return () =>
      window.removeEventListener(OPEN_ASSISTANT_EVENT, onOpen as EventListener);
  }, [startConversation]);

  // Autoscroll al último mensaje.
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, open]);

  // Foco al abrir.
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 350);
      return () => clearTimeout(t);
    }
  }, [open]);

  function toggleFloating() {
    if (open) {
      setOpen(false);
      return;
    }
    // Botón flotante: persona por defecto (Automatiza GC).
    startConversation('default', false);
    setOpen(true);
  }

  async function send() {
    const text = input.trim();
    if (!text || busy) return;

    setInput('');
    setMessages((m) => [...m, { role: 'user', text }, { role: 'bot', text: '' }]);
    setBusy(true);

    try {
      const res = await fetch(CHAT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          externalId: externalIdRef.current,
          text,
          persona,
        }),
      });

      if (res.status === 429) {
        appendToLastBot(
          '\n\nHas escrito muy rápido. Espera un momento o háblanos directo por WhatsApp.',
        );
        return;
      }
      if (!res.ok || !res.body) throw new Error('status ' + res.status);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      for (;;) {
        const { value, done } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const parts = buffer.split('\n\n');
        buffer = parts.pop() || '';
        for (const part of parts) {
          const line = part.trim();
          if (!line.startsWith('data: ')) continue;
          const payload = JSON.parse(line.slice(6));
          if (payload.type === 'delta') appendToLastBot(payload.text);
          else if (payload.type === 'error')
            appendToLastBot('\n\nUps, algo falló. Inténtalo de nuevo.');
        }
      }
    } catch {
      appendToLastBot(
        '\n\nNo he podido conectar. Vuelve a intentarlo en un momento.',
      );
    } finally {
      setBusy(false);
    }
  }

  function appendToLastBot(chunk: string) {
    setMessages((m) => {
      const copy = m.slice();
      for (let i = copy.length - 1; i >= 0; i--) {
        if (copy[i].role === 'bot') {
          copy[i] = { role: 'bot', text: copy[i].text + chunk };
          break;
        }
      }
      return copy;
    });
  }

  function onKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <>
      {/* Botón flotante — Barrido especular */}
      <motion.button
        type="button"
        onClick={toggleFloating}
        aria-label="Abrir asistente"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        onPointerMove={(e) => {
          if (!finePointer.current) return;
          const r = e.currentTarget.getBoundingClientRect();
          px.set((e.clientX - r.left) / r.width - 0.5);
          py.set((e.clientY - r.top) / r.height - 0.5);
        }}
        onPointerLeave={() => {
          px.set(0);
          py.set(0);
        }}
        onPointerDown={(e) => {
          // En táctil: barrido inmediato como confirmación.
          if (e.pointerType !== 'mouse') {
            const el = e.currentTarget.querySelector(
              '[data-sweep]',
            ) as HTMLElement | null;
            if (el) {
              el.classList.remove('sweep-now');
              void el.offsetWidth; // reflow para reiniciar la animación
              el.classList.add('sweep-now');
            }
          }
        }}
        className="liquid-glass assistant-fab z-[60] flex items-center justify-center rounded-full"
        style={{
          position: 'fixed',
          right: 'max(1.25rem, env(safe-area-inset-right))',
          bottom: 'max(1.25rem, env(safe-area-inset-bottom))',
          width: 60,
          height: 60,
          background: 'rgba(20,20,22,0.55)',
          transformPerspective: 600,
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Respiración lentísima + barrido especular, recortados al círculo */}
        <span className="assistant-fab__breath" aria-hidden="true">
          <span data-sweep className="assistant-fab__sweep" />
        </span>

        <LogoIcon className="relative z-[2] h-7 w-auto text-white" />
        <span
          className="absolute rounded-full"
          style={{
            width: 9,
            height: 9,
            right: 11,
            top: 11,
            background: p.accent,
            boxShadow: `0 0 0 3px rgba(0,0,0,0.35)`,
            zIndex: 3,
          }}
        />
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 240, damping: 24 }}
            className="liquid-glass z-[61] flex flex-col overflow-hidden font-sans"
            style={{
              position: 'fixed',
              right: 'max(1.25rem, env(safe-area-inset-right))',
              bottom: 'calc(max(1.25rem, env(safe-area-inset-bottom)) + 72px)',
              width: 'min(384px, calc(100vw - 2rem))',
              height: 'min(560px, calc(100dvh - 8rem))',
              borderRadius: 24,
              background: 'rgba(14,14,16,0.82)',
              backdropFilter: 'blur(18px)',
              WebkitBackdropFilter: 'blur(18px)',
            }}
          >
            {/* Cabecera */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/8 border border-white/15">
                <LogoIcon className="h-4 w-auto text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[14px] font-semibold text-white truncate">
                    {p.label}
                  </span>
                  <span
                    className="inline-block rounded-full"
                    style={{
                      width: 7,
                      height: 7,
                      background: p.accent,
                      boxShadow: `0 0 8px ${p.accent}`,
                    }}
                  />
                </div>
                <p className="text-[11px] text-white/45 truncate">{p.tagline}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar"
                className="flex h-8 w-8 items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Mensajes */}
            <div
              ref={bodyRef}
              className="flex-1 overflow-y-auto px-5 py-5 flex flex-col gap-3"
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={
                    m.role === 'user'
                      ? 'self-end max-w-[85%] rounded-2xl rounded-br-md bg-white text-black px-4 py-2.5 text-[13.5px] leading-relaxed font-medium'
                      : 'self-start max-w-[88%] rounded-2xl rounded-bl-md bg-white/6 border border-white/10 text-white/90 px-4 py-2.5 text-[13.5px] leading-relaxed whitespace-pre-wrap'
                  }
                >
                  {m.text || (
                    <span className="inline-flex gap-1 py-1">
                      <Dot /> <Dot d={0.15} /> <Dot d={0.3} />
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="px-4 pb-4 pt-2">
              <div className="flex items-end gap-2 rounded-2xl bg-white/6 border border-white/12 px-3 py-2 focus-within:border-white/25 transition-colors">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  rows={1}
                  placeholder={p.placeholder}
                  className="flex-1 resize-none bg-transparent text-[13.5px] text-white placeholder:text-white/35 outline-none max-h-28 py-1.5"
                />
                <button
                  type="button"
                  onClick={send}
                  disabled={busy || !input.trim()}
                  aria-label="Enviar"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-opacity disabled:opacity-30"
                  style={{ background: p.accent }}
                >
                  <ArrowUp className="h-4 w-4 text-black" />
                </button>
              </div>
              <p className="mt-2 text-center text-[10px] text-white/25">
                Demo en vivo · Automatiza GC
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Dot({ d = 0 }: { d?: number }) {
  return (
    <motion.span
      className="inline-block rounded-full bg-white/40"
      style={{ width: 5, height: 5 }}
      animate={{ opacity: [0.25, 1, 0.25] }}
      transition={{ duration: 1, repeat: Infinity, delay: d }}
    />
  );
}

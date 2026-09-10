/**
 * Sistema de diseño "agencia" — verde esmeralda, fiel a las plantillas 10/10.
 * Componentes reutilizables SOLO para las 5 páginas internas
 * (Servicios, Proyectos, Ecosistema, Presupuesto, Contacto).
 * No toca la home, el Navbar ni el Footer globales.
 */
import type { ReactNode, ComponentType, CSSProperties } from 'react';
import FadeIn from './FadeIn';
import SeamlessVideo from './SeamlessVideo';
import { ArrowRight, Rocket } from 'lucide-react';

export const ACCENT = '#22C55E';
export const ACCENT_LIGHT = '#4ADE80';

/** Fondo animado (vídeo, como /precios) + glows verdes y haz de luz diagonal. */
export function AgencyBackground() {
  return (
    <div className="fixed inset-0 z-0 bg-[#070B09]">
      {/* Vídeo animado en bucle (mismo que /precios) */}
      <SeamlessVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_32bReXqxPyXQZz4TWBrBwLmVgCp/hf_20260506_204312_b409e85b-c9ad-4e16-9875-10bdc8d63bcb.mp4"
        containerClassName="absolute inset-0 h-full w-full overflow-hidden"
        videoClassName="absolute inset-0 h-full w-full object-cover"
      />
      {/* Capa oscura para contraste */}
      <div className="absolute inset-0 bg-[#070B09]/82" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(55% 45% at 88% -5%, rgba(34,197,94,0.18) 0%, transparent 60%),' +
            'radial-gradient(45% 40% at 2% 25%, rgba(34,197,94,0.10) 0%, transparent 55%),' +
            'radial-gradient(60% 50% at 50% 110%, rgba(34,197,94,0.10) 0%, transparent 60%)',
        }}
      />
      {/* Haz de luz diagonal sutil */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            'linear-gradient(115deg, transparent 40%, rgba(34,197,94,0.05) 50%, transparent 60%)',
        }}
      />
      {/* Grid tenue */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),' +
            'linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
    </div>
  );
}

/** Etiqueta pequeña en mayúsculas verde encima del titular. */
export function SectionLabel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`text-[11px] font-bold tracking-[0.34em] uppercase ${className}`}
      style={{ color: ACCENT }}
    >
      {children}
    </p>
  );
}

/** Tile con icono de línea verde, borde y glow (patrón repetido en todas las plantillas). */
export function IconTile({
  Icon,
  size = 'md',
}: {
  Icon: ComponentType<{ className?: string; style?: CSSProperties }>;
  size?: 'sm' | 'md' | 'lg';
}) {
  const dims = size === 'lg' ? 'w-14 h-14' : size === 'sm' ? 'w-9 h-9' : 'w-12 h-12';
  const icon = size === 'lg' ? 'w-6 h-6' : size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';
  return (
    <div
      className={`${dims} rounded-xl flex items-center justify-center shrink-0`}
      style={{
        background: 'rgba(34,197,94,0.10)',
        border: '1px solid rgba(34,197,94,0.35)',
        boxShadow: '0 0 24px rgba(34,197,94,0.15), inset 0 0 16px rgba(34,197,94,0.06)',
      }}
    >
      <Icon className={icon} style={{ color: ACCENT_LIGHT } as CSSProperties} />
    </div>
  );
}

/** Botón verde sólido (CTA principal). */
export function GreenButton({
  children,
  href,
  onClick,
  type = 'button',
  className = '',
  external = false,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  external?: boolean;
}) {
  const cls =
    `inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-[#04140B] transition-all duration-300 hover:scale-[1.03] ${className}`;
  const style = {
    background: `linear-gradient(180deg, ${ACCENT_LIGHT} 0%, ${ACCENT} 100%)`,
    boxShadow: '0 0 24px rgba(34,197,94,0.35)',
  } as CSSProperties;
  if (href) {
    return (
      <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className={cls} style={style}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls} style={style}>
      {children}
    </button>
  );
}

/** Botón contorno verde (CTA secundaria). */
export function GhostButton({
  children,
  href,
  className = '',
  external = false,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-[rgba(34,197,94,0.10)] ${className}`}
      style={{ color: ACCENT_LIGHT, border: `1px solid rgba(34,197,94,0.45)` }}
    >
      {children}
    </a>
  );
}

/** Franja de sellos de confianza (Confidencialidad, Enfoque, etc.) — repetida en las plantillas. */
export function TrustStrip({
  items,
}: {
  items: { Icon: ComponentType<{ className?: string; style?: CSSProperties }>; label: string; sub?: string }[];
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((it, i) => (
        <div
          key={i}
          className="flex items-center gap-3 rounded-xl px-4 py-3.5 border"
          style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(34,197,94,0.15)' }}
        >
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: 'rgba(34,197,94,0.10)', border: '1px solid rgba(34,197,94,0.3)' }}
          >
            <it.Icon className="w-4 h-4" style={{ color: ACCENT_LIGHT }} />
          </div>
          <div className="min-w-0">
            <p className="text-[12px] font-bold text-white tracking-tight leading-tight">{it.label}</p>
            {it.sub && <p className="text-[10.5px] text-white/40 leading-tight mt-0.5">{it.sub}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}

/** Banner CTA inferior con cohete verde + botón (patrón común a todas las plantillas). */
export function CtaBanner({
  eyebrow,
  title,
  buttonLabel = 'Solicitar Presupuesto',
  buttonHref = '/presupuesto',
}: {
  eyebrow: string;
  title: ReactNode;
  buttonLabel?: string;
  buttonHref?: string;
}) {
  return (
    <FadeIn immediate>
      <div
        className="relative rounded-2xl overflow-hidden px-6 py-7 md:px-10 md:py-8 flex flex-col md:flex-row items-center gap-6 border"
        style={{
          background: 'linear-gradient(120deg, rgba(34,197,94,0.12) 0%, rgba(255,255,255,0.02) 60%)',
          borderColor: 'rgba(34,197,94,0.25)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(40% 120% at 0% 50%, rgba(34,197,94,0.18) 0%, transparent 60%)' }}
        />
        <div className="relative z-10 flex-1">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase mb-1.5" style={{ color: ACCENT }}>{eyebrow}</p>
          <p className="text-base md:text-lg font-semibold text-white/85 leading-snug">{title}</p>
        </div>
        <GreenButton href={buttonHref} className="relative z-10 whitespace-nowrap">
          {buttonLabel} <ArrowRight className="w-4 h-4" />
        </GreenButton>
      </div>
    </FadeIn>
  );
}

/** Cita del fundador reutilizable. */
export function FounderQuote({ quote, withPhoto = false }: { quote: string; withPhoto?: boolean }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-5xl leading-none font-serif" style={{ color: ACCENT }}>“</div>
      <p className="text-lg md:text-xl font-semibold text-white/85 leading-relaxed italic -mt-6">{quote}</p>
      <div className="flex items-center gap-3 mt-1">
        {withPhoto && (
          <img
            src="/founder.jpg"
            alt="Alexander Medina"
            className="w-11 h-11 rounded-full object-cover grayscale-[0.15] border"
            style={{ borderColor: 'rgba(34,197,94,0.4)' }}
          />
        )}
        <div>
          <p className="text-[13px] font-bold text-white">Alexander Medina</p>
          <p className="text-[11px]" style={{ color: ACCENT }}>Fundador · AutomatizaGC</p>
        </div>
      </div>
    </div>
  );
}

import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Brain, Globe, Zap } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import AnimatedHeading from '../components/AnimatedHeading';
import FadeIn from '../components/FadeIn';
import SeamlessVideo from '../components/SeamlessVideo';
import TiltedCard from '../components/TiltedCard';
import { HoverBorderGradient } from '../components/ui/hover-border-gradient';

const EASE_OUT: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

// ─── Pillar data ─────────────────────────────────────────────────────────────

interface Pilar {
  index: string;
  title: string;
  icon: ReactNode;
  description: string;
  meta: string;
  featured?: boolean;
  wide?: boolean;
}

const PILARES: Pilar[] = [
  {
    index: "01",
    title: "OMNIPRESENCIA",
    icon: <Globe className="w-5 h-5 text-white/50" />,
    description:
      "WhatsApp, Instagram y Email cubiertos en paralelo. Un solo agente que opera los tres canales a la vez, sin perder contexto ni velocidad de respuesta.",
    meta: "3 Canales · 24/7",
  },
  {
    index: "02 — El Cerebro",
    title: "INTELIGENCIA CENTRAL",
    icon: <Brain className="w-5 h-5 text-blue-300" />,
    description:
      "El Jefe orquesta cada agente, audita cada proceso y toma decisiones complejas en tiempo real. Un cerebro digital que coordina toda tu operación sin intervención manual.",
    meta: "Coordinación · Decisión · Auditoría",
    featured: true,
  },
  {
    index: "03",
    title: "ESCALA INFINITA",
    icon: <Zap className="w-5 h-5 text-white/50" />,
    description:
      "Sin límite de mensajes, sin límite de clientes. El sistema crece contigo sin añadir fricción operativa. Más volumen, mismo equipo.",
    meta: "∞ Capacidad · Sin fricción",
    wide: true,
  },
];

// ─── Nav items for this page ──────────────────────────────────────────────────

const MISION_NAV_ITEMS = [
  { name: "MANIFIESTO", href: "#manifiesto" },
  { name: "PILARES",    href: "#pilares" },
  { name: "ÚNETE",      href: "#evolucion" },
  { name: "PRECIOS",    href: "/precios" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Mision() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden flex flex-col font-sans selection:bg-white/20 selection:text-white bg-[#0A0B0E]">

      {/* Fixed background video */}
      <div className="fixed inset-0 z-0">
        <SeamlessVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_32bReXqxPyXQZz4TWBrBwLmVgCp/hf_20260505_203452_a0ca140a-f02c-4ce5-bb97-f7259e5f37ef.mp4"
          containerClassName="absolute inset-0 h-full w-full overflow-hidden"
          videoClassName="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-[#0A0B0E]/55" />
      </div>

      <Navbar navItems={MISION_NAV_ITEMS} logoHref="/" />

      {/* ── Hero + Manifiesto ─────────────────────────────────── */}
      <section id="manifiesto" className="relative z-10 w-full px-6 md:px-12 lg:px-16 pt-28 md:pt-32 pb-14 md:pb-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16">

          {/* Left — título */}
          <div className="lg:w-[42%] shrink-0 flex flex-col justify-start">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE_OUT }}
              className="text-[10px] font-medium tracking-[0.25em] uppercase text-white/40 mb-5 block"
            >
              Manifiesto · Automatiza
            </motion.span>

            <AnimatedHeading
              as="h1"
              text={"TRASCENDER\nEN EL TIEMPO."}
              variant="blur"
              className="text-[clamp(2.5rem,4.5vw,5rem)] font-black uppercase tracking-tight leading-[0.92] pb-3 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent mb-6"
              initialDelay={120}
              highlights={{ "TRASCENDER": "oklch(80% 0.16 68)" }}
            />

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55, ease: EASE_OUT }}
              className="text-xs font-light tracking-[0.2em] uppercase text-white/40 leading-relaxed max-w-xs"
            >
              Transformamos empresas en ecosistemas autónomos orquestados por inteligencia artificial
            </motion.p>
          </div>

          {/* Right — manifiesto */}
          <FadeIn delay={300} className="flex-1">
            <div className="liquid-glass border border-white/10 rounded-2xl p-8 md:p-10 bg-white/5 backdrop-blur-xl">
              <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-white/35 mb-7 block">
                Manifiesto de la Autonomía
              </span>
              <p className="text-base md:text-lg text-gray-300 leading-[1.7] mb-5">
                Vivimos en la era donde la atención humana es el recurso más escaso. Cada mensaje sin responder, cada correo sin clasificar, cada venta perdida en la espera — todo eso es fricción que frena el crecimiento.
              </p>
              <p className="text-base md:text-lg text-gray-300 leading-[1.7] mb-5">
                Automatiza nace para eliminar esa fricción. No con herramientas que añaden complejidad, sino con agentes que piensan, clasifican y ejecutan como parte de tu equipo. WhatsApp, Instagram, Email — tres canales que nunca duermen, coordinados por{" "}
                <span className="text-white font-medium">El Jefe</span>.
              </p>
              <p className="text-base md:text-lg text-gray-300 leading-[1.7]">
                La empresa del futuro no crece contratando más personas. Crece desplegando inteligencia que opera en paralelo, 24/7, sin fricción ni fatiga. Eso es un ecosistema líquido.
              </p>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* ── Tres Pilares ──────────────────────────────────────────── */}
      <section id="pilares" className="relative z-10 w-full px-6 md:px-12 lg:px-16 py-14 md:py-20">
        <div className="max-w-7xl mx-auto">

          <FadeIn>
            <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-white/35 mb-4 block">
              Pilares del Sistema
            </span>
          </FadeIn>

          <AnimatedHeading
            text="Tres fuerzas, un sistema."
            className="text-[clamp(1.875rem,3.5vw+0.5rem,3.25rem)] font-black uppercase tracking-tight leading-[0.95] pb-2 text-white mb-10 md:mb-14"
            initialDelay={0}
            wordDelay={50}
          />

          {/* Bento grid: two top cards + one full-width bottom */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">

            {/* OMNIPRESENCIA */}
            <FadeIn delay={100}>
              <TiltedCard>
                <div className="liquid-glass glass-hover p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl h-full min-h-[260px] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-7">
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                        <Globe className="w-5 h-5 text-white/50" />
                      </div>
                      <span className="text-[10px] font-medium tracking-widest uppercase text-white/35">01</span>
                    </div>
                    <h3 className="text-[clamp(1.5rem,2.5vw,2.25rem)] font-black uppercase tracking-tight text-white leading-[0.95] pb-2 mb-2">
                      Omni<br />presencia
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      WhatsApp, Instagram y Email cubiertos en paralelo. Un solo agente que opera los tres canales a la vez, sin perder contexto ni velocidad de respuesta.
                    </p>
                  </div>
                  <div className="mt-8 pt-5 border-t border-white/10">
                    <span className="text-[10px] tracking-widest uppercase text-white/25">3 Canales · 24/7</span>
                  </div>
                </div>
              </TiltedCard>
            </FadeIn>

            {/* INTELIGENCIA CENTRAL — featured */}
            <FadeIn delay={200}>
              <TiltedCard>
                <div className="liquid-glass glass-hover p-8 rounded-2xl border border-blue-400/25 bg-blue-950/20 backdrop-blur-xl h-full min-h-[260px] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-7">
                      <div className="p-2.5 rounded-lg bg-blue-400/10 border border-blue-400/20">
                        <Brain className="w-5 h-5 text-blue-300" />
                      </div>
                      <span className="text-[10px] font-medium tracking-widest uppercase text-blue-300/50">02 — El Cerebro</span>
                    </div>
                    <h3 className="text-[clamp(1.5rem,2.5vw,2.25rem)] font-black uppercase tracking-tight text-white leading-[0.95] pb-2 mb-2">
                      Inteligencia<br />Central
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      El Jefe orquesta cada agente, audita cada proceso y toma decisiones complejas en tiempo real. Un cerebro digital que coordina toda tu operación sin intervención manual.
                    </p>
                  </div>
                  <div className="mt-8 pt-5 border-t border-blue-400/15">
                    <span className="text-[10px] tracking-widest uppercase text-blue-300/30">Coordinación · Decisión · Auditoría</span>
                  </div>
                </div>
              </TiltedCard>
            </FadeIn>

          </div>

          {/* ESCALA INFINITA — full width */}
          <FadeIn delay={300}>
            <TiltedCard>
              <div className="liquid-glass glass-hover p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 shrink-0">
                      <Zap className="w-5 h-5 text-white/50" />
                    </div>
                    <div>
                      <span className="text-[10px] font-medium tracking-widest uppercase text-white/35 block mb-1">03</span>
                      <h3 className="text-[clamp(1.5rem,2.5vw,2.25rem)] font-black uppercase tracking-tight text-white leading-[0.95] pb-2">
                        Escala Infinita
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-400 text-base leading-relaxed lg:max-w-xl">
                    Sin límite de mensajes, sin límite de clientes. El sistema crece contigo sin añadir fricción operativa. Más volumen, mismo equipo humano.
                  </p>
                  <div className="shrink-0 text-left lg:text-right">
                    <span className="text-4xl font-black text-white leading-none block">∞</span>
                    <span className="text-[10px] tracking-widest uppercase text-white/25 block mt-1">Capacidad</span>
                  </div>
                </div>
              </div>
            </TiltedCard>
          </FadeIn>

        </div>
      </section>

      {/* ── CTA Final ─────────────────────────────────────────────── */}
      <section id="evolucion" className="relative z-10 w-full px-6 md:px-12 lg:px-16 py-14 md:py-20 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto flex flex-col items-start gap-10">

          <FadeIn>
            <AnimatedHeading
              text={"¿Listo para\nla evolución?"}
              className="text-[clamp(2.5rem,5vw+0.5rem,4.5rem)] font-black uppercase tracking-tight leading-[0.95] pb-3 text-white max-w-2xl"
              highlights={{ "evolución?": "oklch(78% 0.14 68)" }}
              initialDelay={0}
              wordDelay={45}
            />
          </FadeIn>

          <FadeIn delay={200}>
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="text-white font-semibold text-xs uppercase tracking-widest bg-white/10"
            >
              UNIRSE A LA EVOLUCIÓN
            </HoverBorderGradient>
          </FadeIn>

        </div>
      </section>

    </main>
  );
}

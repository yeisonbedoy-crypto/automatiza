import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Sections';
import { LogoIcon } from '../components/LogoIcon';
import FadeIn from '../components/FadeIn';
import AnimatedHeading from '../components/AnimatedHeading';
import { BRANDS, BrandLogo } from '../data/brands';
import {
  AgencyBackground, SectionLabel, FounderQuote, ACCENT, ACCENT_LIGHT,
} from '../components/agency';
import { Check, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { name: "INICIO",     href: "/" },
  { name: "SERVICIOS",  href: "/servicios" },
  { name: "NFC",        href: "/nfc" },
  { name: "PROYECTOS",  href: "/proyectos" },
  { name: "ECOSISTEMA", href: "/ecosistema" },
  { name: "PRECIOS",    href: "/precios" },
];

// Posiciones radiales (%) de cada marca alrededor del hub central.
const ANGLES = [-90, -18, 54, 126, 198];
const R = 40;
const NODES = BRANDS.map((b, i) => {
  const rad = (ANGLES[i] * Math.PI) / 180;
  return { ...b, x: 50 + R * Math.cos(rad), y: 50 + R * Math.sin(rad) };
});

const ESENCIA = [
  "Detectamos oportunidades reales",
  "Optimizamos procesos y recursos",
  "Innovamos con propósito",
  "Generamos impacto medible",
];

const STATS = [
  { num: "5+",   label: "Proyectos activos" },
  { num: "100%", label: "Visión unificada" },
  { num: "24/7", label: "Sistemas operativos" },
  { num: "1",    label: "Misma misión" },
];

export default function Ecosistema() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden flex flex-col font-sans selection:bg-[#22C55E]/25 selection:text-white">
      <AgencyBackground />
      <Navbar navItems={NAV_ITEMS} logoHref="/" />

      {/* Hero */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 pt-36 pb-8 md:pt-44">
        <div className="max-w-6xl mx-auto text-center">
          <FadeIn immediate><SectionLabel className="mb-4">Nuestro Ecosistema</SectionLabel></FadeIn>
          <AnimatedHeading
            as="h1"
            text={"Diferentes proyectos.\nUna misma visión."}
            variant="blur"
            className="text-[clamp(2.4rem,5.5vw,5rem)] font-black uppercase tracking-tight mb-6 pb-2 leading-[0.94]"
            highlights={{ "visión.": ACCENT_LIGHT }}
          />
          <FadeIn immediate delay={300}>
            <p className="text-base md:text-lg text-white/55 max-w-2xl mx-auto leading-relaxed">
              Usamos tecnología, innovación y estrategia para crear soluciones y negocios que generan impacto real.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Hub-and-spoke (desktop) */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 pb-8 hidden lg:block">
        <div className="max-w-5xl mx-auto">
          <div className="relative w-full" style={{ height: 660 }}>
            {/* Connector lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="line" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor={ACCENT} stopOpacity="0.55" />
                  <stop offset="100%" stopColor={ACCENT} stopOpacity="0.15" />
                </linearGradient>
              </defs>
              {NODES.map((n) => (
                <line key={n.id} x1="50" y1="50" x2={n.x} y2={n.y} stroke="url(#line)" strokeWidth="0.35" vectorEffect="non-scaling-stroke" />
              ))}
            </svg>

            {/* Center hub */}
            <div className="absolute" style={{ left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }}>
              <div
                className="relative w-28 h-28 rounded-3xl flex items-center justify-center"
                style={{
                  background: 'rgba(34,197,94,0.10)',
                  border: '1.5px solid rgba(34,197,94,0.45)',
                  boxShadow: '0 0 60px rgba(34,197,94,0.35), inset 0 0 30px rgba(34,197,94,0.08)',
                }}
              >
                <LogoIcon className="h-12 w-auto text-white" />
              </div>
              <p className="text-center text-[10px] font-bold tracking-[0.25em] uppercase mt-3" style={{ color: ACCENT }}>Automatiza GC</p>
            </div>

            {/* Brand nodes */}
            {NODES.map((n, i) => (
              <div
                key={n.id}
                className="absolute w-[230px]"
                style={{ left: `${n.x}%`, top: `${n.y}%`, transform: 'translate(-50%,-50%)' }}
              >
                <FadeIn immediate delay={i * 100 + 200}>
                  <a
                    href={n.href}
                    target={n.external ? "_blank" : undefined}
                    rel={n.external ? "noopener noreferrer" : undefined}
                    className="group block rounded-2xl p-4 border transition-all duration-300 hover:-translate-y-1"
                    style={{ background: 'rgba(10,14,12,0.72)', backdropFilter: 'blur(8px)', borderColor: 'rgba(34,197,94,0.22)' }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-lg flex items-center justify-center overflow-hidden shrink-0 border" style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.08)' }}>
                        <BrandLogo id={n.id} className="w-7 h-7" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1">
                          <h3 className="text-[13px] font-bold text-white tracking-tight truncate">{n.name}</h3>
                          <ArrowUpRight className="w-3.5 h-3.5 text-white/25 group-hover:text-[#4ADE80] transition-colors shrink-0" />
                        </div>
                        <p className="text-[10.5px] font-semibold truncate" style={{ color: ACCENT }}>{n.tagline}</p>
                      </div>
                    </div>
                    <p className="text-[11px] text-white/45 leading-snug mt-2.5">{n.descShort}</p>
                  </a>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand grid (mobile fallback) */}
      <section className="relative z-10 w-full px-4 md:px-8 pb-8 lg:hidden">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center mb-8">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center"
              style={{ background: 'rgba(34,197,94,0.10)', border: '1.5px solid rgba(34,197,94,0.45)', boxShadow: '0 0 50px rgba(34,197,94,0.3)' }}
            >
              <LogoIcon className="h-10 w-auto text-white" />
            </div>
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase mt-3" style={{ color: ACCENT }}>Automatiza GC</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BRANDS.map((b, i) => (
              <FadeIn key={b.id} immediate delay={i * 90}>
                <a
                  href={b.href}
                  target={b.external ? "_blank" : undefined}
                  rel={b.external ? "noopener noreferrer" : undefined}
                  className="group block rounded-2xl p-4 border"
                  style={{ background: 'rgba(255,255,255,0.028)', borderColor: 'rgba(34,197,94,0.18)' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-lg flex items-center justify-center overflow-hidden shrink-0 border" style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.08)' }}>
                      <BrandLogo id={b.id} className="w-7 h-7" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-[13px] font-bold text-white truncate">{b.name}</h3>
                      <p className="text-[10.5px] font-semibold truncate" style={{ color: ACCENT }}>{b.tagline}</p>
                    </div>
                  </div>
                  <p className="text-[11px] text-white/45 leading-snug mt-2.5">{b.descShort}</p>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Esencia + cita */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 py-14">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <FadeIn immediate>
            <div className="rounded-2xl p-8 border" style={{ background: 'rgba(255,255,255,0.028)', borderColor: 'rgba(34,197,94,0.14)' }}>
              <SectionLabel className="mb-4">Nuestra esencia</SectionLabel>
              <h2 className="text-2xl font-black uppercase tracking-tight text-white mb-6 leading-[0.95]">
                Innovar · Optimizar · <span style={{ color: ACCENT_LIGHT }}>Impactar.</span>
              </h2>
              <ul className="space-y-3.5">
                {ESENCIA.map((e) => (
                  <li key={e} className="flex items-center gap-3 text-[14px] text-white/70 font-medium">
                    <span className="w-6 h-6 rounded-md flex items-center justify-center shrink-0" style={{ background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)' }}>
                      <Check className="w-3.5 h-3.5" style={{ color: ACCENT }} />
                    </span>
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn immediate delay={150}>
            <div className="rounded-2xl p-8 border" style={{ background: 'rgba(255,255,255,0.028)', borderColor: 'rgba(34,197,94,0.14)' }}>
              <FounderQuote quote="Cada marca nace de la misma idea: usar tecnología para resolver lo que realmente importa y generar impacto real." withPhoto />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 pb-24">
        <div className="max-w-5xl mx-auto">
          <FadeIn immediate>
            <div
              className="rounded-2xl px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border"
              style={{ background: 'linear-gradient(180deg, rgba(34,197,94,0.08) 0%, rgba(255,255,255,0.01) 100%)', borderColor: 'rgba(34,197,94,0.2)' }}
            >
              {STATS.map((s, i) => (
                <div key={i}>
                  <p className="font-black leading-none mb-1.5" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.5rem)', color: ACCENT_LIGHT }}>{s.num}</p>
                  <p className="text-[11px] text-white/45 font-medium tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="relative z-10 max-w-7xl w-full px-6 md:px-12 lg:px-16 pb-12 mt-auto mx-auto">
        <Footer />
      </div>
    </main>
  );
}

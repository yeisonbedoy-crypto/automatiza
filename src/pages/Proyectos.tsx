import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Sections';
import FadeIn from '../components/FadeIn';
import AnimatedHeading from '../components/AnimatedHeading';
import { BRANDS, BrandLogo } from '../data/brands';
import {
  AgencyBackground, SectionLabel, CtaBanner, ACCENT, ACCENT_LIGHT,
} from '../components/agency';
import { ArrowRight, ExternalLink, Target, Sparkles, Gauge, Rocket } from 'lucide-react';

const NAV_ITEMS = [
  { name: "INICIO",     href: "/" },
  { name: "SERVICIOS",  href: "/servicios" },
  { name: "NFC",        href: "/nfc" },
  { name: "PROYECTOS",  href: "/proyectos" },
  { name: "ECOSISTEMA", href: "/ecosistema" },
  { name: "PRECIOS",    href: "/precios" },
];

const PILLARS = [
  { Icon: Target,   label: "Enfoque estratégico" },
  { Icon: Sparkles, label: "Innovación constante" },
  { Icon: Gauge,    label: "Orientados a resultados" },
  { Icon: Rocket,   label: "Impacto medible" },
];

export default function Proyectos() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden flex flex-col font-sans selection:bg-[#22C55E]/25 selection:text-white">
      <AgencyBackground />
      <Navbar navItems={NAV_ITEMS} logoHref="/" />

      {/* Hero */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 pt-36 pb-14 md:pt-44">
        <div className="max-w-6xl mx-auto text-center">
          <FadeIn immediate><SectionLabel className="mb-4">Nuestros Proyectos</SectionLabel></FadeIn>
          <AnimatedHeading
            as="h1"
            text={"Ideas que se convierten\nen realidad."}
            variant="blur"
            className="text-[clamp(2.4rem,5.5vw,5rem)] font-black uppercase tracking-tight mb-6 pb-2 leading-[0.94]"
            highlights={{ "realidad.": ACCENT_LIGHT }}
          />
          <FadeIn immediate delay={300}>
            <p className="text-base md:text-lg text-white/55 max-w-2xl mx-auto leading-relaxed">
              Cada proyecto nace de una idea, se construye con estrategia y tecnología, y se enfoca en generar impacto real.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Webs en vivo — galería de capturas reales */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 pb-16">
        <div className="max-w-6xl mx-auto">
          <FadeIn immediate delay={150}>
            <div className="text-center mb-10">
              <SectionLabel className="mb-2">Webs en vivo</SectionLabel>
              <h2 className="font-black uppercase tracking-tight text-white leading-[0.94]" style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.8rem)' }}>
                Proyectos que puedes <span style={{ color: ACCENT_LIGHT }}>visitar.</span>
              </h2>
              <p className="text-sm text-white/45 max-w-xl mx-auto mt-3 leading-relaxed">
                Capturas reales de plataformas que hemos diseñado y desarrollado. Haz clic para abrirlas.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BRANDS.map((b, i) => (
              <FadeIn key={b.id} immediate delay={i * 80 + 200} className="h-full">
                <a
                  href={b.href}
                  target={b.external ? "_blank" : undefined}
                  rel={b.external ? "noopener noreferrer" : undefined}
                  className="group block h-full rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1"
                  style={{ background: 'rgba(255,255,255,0.028)', borderColor: 'rgba(34,197,94,0.14)' }}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                    <img
                      src={`/showcase/${b.id}.jpg`}
                      alt={`Web de ${b.name}`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(7,11,9,0.85) 0%, transparent 55%)' }} />
                    <div
                      className="absolute top-3 right-3 w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: 'rgba(34,197,94,0.85)', color: '#04140B' }}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center overflow-hidden shrink-0 border" style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.08)' }}>
                      <BrandLogo id={b.id} className="w-6 h-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[13px] font-bold text-white tracking-tight truncate">{b.name}</p>
                      <p className="text-[11px] truncate" style={{ color: ACCENT }}>{b.tag}</p>
                    </div>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 pb-24">
        <div className="max-w-5xl mx-auto">
          <CtaBanner
            eyebrow="¿Tienes una idea o proyecto en mente?"
            title={<>Hablemos y hagámoslo realidad.</>}
          />
        </div>
      </section>

      <div className="relative z-10 max-w-7xl w-full px-6 md:px-12 lg:px-16 pb-12 mt-auto mx-auto">
        <Footer />
      </div>
    </main>
  );
}

import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Sections';
import FadeIn from '../components/FadeIn';
import AnimatedHeading from '../components/AnimatedHeading';
import {
  AgencyBackground, SectionLabel, IconTile, CtaBanner, ACCENT, ACCENT_LIGHT,
} from '../components/agency';
import {
  Rocket, Settings, Code2, Cpu, ShoppingCart, BarChart3,
  Ear, PenTool, Check,
} from 'lucide-react';

const NAV_ITEMS = [
  { name: "INICIO",     href: "/" },
  { name: "SERVICIOS",  href: "/servicios" },
  { name: "NFC",        href: "/nfc" },
  { name: "PROYECTOS",  href: "/proyectos" },
  { name: "ECOSISTEMA", href: "/ecosistema" },
  { name: "PRECIOS",    href: "/precios" },
];

const SERVICES = [
  {
    Icon: Rocket,
    title: "Estrategia Digital",
    desc: "Diseñamos tu hoja de ruta digital con análisis real de negocio y objetivos medibles.",
    items: ["Análisis de negocio", "Roadmap de crecimiento", "Planificación estratégica"],
  },
  {
    Icon: Settings,
    title: "Automatización de Procesos",
    desc: "Optimizamos, automatizamos e integramos procesos para ahorrar tiempo y recursos.",
    items: ["Automatización de tareas", "Integraciones y APIs", "Flujos inteligentes"],
  },
  {
    Icon: Code2,
    title: "Desarrollo Digital",
    desc: "Construimos webs, aplicaciones y plataformas escalables a medida de tu negocio.",
    items: ["Webs y aplicaciones", "Plataformas a medida", "E-commerce"],
  },
  {
    Icon: Cpu,
    title: "Inteligencia Artificial",
    desc: "Aplicamos IA de vanguardia para diferenciarte y tomar mejores decisiones.",
    items: ["IA aplicada a procesos", "Agentes autónomos", "Análisis de datos"],
  },
  {
    Icon: ShoppingCart,
    title: "E-Commerce y Marketplaces",
    desc: "Soluciones end-to-end para que tus ventas digitales crezcan contigo.",
    items: ["Tiendas online", "Marketplaces", "Optimización de ventas"],
  },
  {
    Icon: BarChart3,
    title: "Consultoría y Crecimiento",
    desc: "Acompañamiento experto para escalar tu negocio con estrategia y datos reales.",
    items: ["Consultoría estratégica", "Optimización de resultados", "Mentoría continua"],
  },
];

const STEPS = [
  { num: "01", Icon: Ear,    title: "Escuchamos", desc: "Entendemos tu negocio, objetivos y los problemas reales que quieres resolver." },
  { num: "02", Icon: PenTool, title: "Diseñamos", desc: "Creamos una solución personalizada con enfoque estratégico orientada a resultados." },
  { num: "03", Icon: Rocket, title: "Implementamos", desc: "Ejecutamos con precisión, acompañándote durante todo el proceso hasta el resultado." },
];

export default function Servicios() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden flex flex-col font-sans selection:bg-[#22C55E]/25 selection:text-white">
      <AgencyBackground />
      <Navbar navItems={NAV_ITEMS} logoHref="/" />

      {/* Hero */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 pt-36 pb-14 md:pt-44">
        <div className="max-w-6xl mx-auto text-center">
          <FadeIn immediate><SectionLabel className="mb-4">Nuestros Servicios</SectionLabel></FadeIn>
          <AnimatedHeading
            as="h1"
            text={"Soluciones digitales\npara negocios reales."}
            variant="blur"
            className="text-[clamp(2.4rem,5.5vw,5rem)] font-black uppercase tracking-tight mb-6 pb-2 leading-[0.94]"
            highlights={{ "para": ACCENT_LIGHT, "negocios": ACCENT_LIGHT, "reales.": ACCENT_LIGHT }}
          />
          <FadeIn immediate delay={300}>
            <p className="text-base md:text-lg text-white/55 max-w-2xl mx-auto leading-relaxed">
              Combinamos estrategia, tecnología y automatización para ayudarte a crecer, optimizar y escalar tu negocio.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services grid */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <FadeIn key={i} immediate delay={i * 70} className="h-full">
              <div
                className="group h-full rounded-2xl p-7 flex flex-col gap-4 border transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'rgba(255,255,255,0.028)', borderColor: 'rgba(34,197,94,0.14)' }}
              >
                <div className="flex-1 flex flex-col gap-3">
                  <h3 className="text-[17px] font-bold text-white tracking-tight leading-tight">{s.title}</h3>
                  <p className="text-[13px] text-white/50 leading-relaxed">{s.desc}</p>
                  <ul className="mt-auto space-y-2 pt-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                    {s.items.map(item => (
                      <li key={item} className="flex items-center gap-2.5 text-[12px] text-white/55 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: ACCENT }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Approach 01/02/03 */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 pb-20">
        <div className="max-w-5xl mx-auto">
          <FadeIn immediate>
            <div className="text-center mb-12">
              <SectionLabel className="mb-3">Nuestro enfoque</SectionLabel>
              <h2 className="font-black uppercase tracking-tight text-white leading-[0.94]" style={{ fontSize: 'clamp(1.7rem, 3.4vw, 3rem)' }}>
                PERSONALIZADO<span style={{ color: ACCENT_LIGHT }}>.</span>
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {STEPS.map((step, i) => (
              <FadeIn key={i} immediate delay={i * 120} className="h-full">
                <div
                  className="relative h-full rounded-2xl p-7 flex flex-col gap-4 border"
                  style={{ background: 'rgba(255,255,255,0.028)', borderColor: 'rgba(34,197,94,0.14)' }}
                >
                  <span className="text-5xl font-black leading-none" style={{ color: 'rgba(34,197,94,0.3)' }}>{step.num}</span>
                  <h3 className="text-xl font-black uppercase tracking-tight text-white leading-none mt-1">{step.title}</h3>
                  <p className="text-[13px] text-white/50 leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 pb-24">
        <div className="max-w-5xl mx-auto">
          <CtaBanner
            eyebrow="¿Listo para el siguiente paso?"
            title={<>Cuéntanos tu proyecto y diseñamos juntos la mejor solución para ti.</>}
          />
        </div>
      </section>

      <div className="relative z-10 max-w-7xl w-full px-6 md:px-12 lg:px-16 pb-12 mt-auto mx-auto">
        <Footer />
      </div>
    </main>
  );
}

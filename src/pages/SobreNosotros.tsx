import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import FadeIn from '../components/FadeIn';
import AnimatedHeading from '../components/AnimatedHeading';
import SeamlessVideo from '../components/SeamlessVideo';
import { Footer } from '../components/Sections';
import ShineBorder from '../components/ShineBorder';

const NAV_ITEMS = [
  { name: "INICIO",        href: "/" },
  { name: "ECOSISTEMA",    href: "/#email" },
  { name: "EL CEREBRO",   href: "/#boss", highlight: true as const },
  { name: "PRECIOS",       href: "/precios" },
  { name: "BLOG",          href: "/blog" },
];

interface Member {
  label: string;
  name: string;
  title: string;
  description: string;
  stack: string[];
  image: string;
  featured?: boolean;
}

const MEMBERS: Member[] = [
  {
    label: "01 — Full Stack & AI",
    name: "ALEXANDER",
    title: "Full Stack & AI Systems Architect",
    description:
      "Despliego backends, integro modelos de IA y construyo apps multiplataforma que escalan sin romperse. Cada pipeline y cada API que mueve tu negocio en segundo plano, lleva mi firma.",
    stack: ["Node.js", "Python", "Anthropic", "React Native", "OpenAI", "Gemini", "Cloud & DBs"],
    image: "/team/alexander.png",
    featured: true,
  },
  {
    label: "02 — Frontend & UX/UI",
    name: "YEISON",
    title: "Frontend Dev & AI Interface Designer",
    description:
      "Traduzco automatizaciones complejas en interfaces limpias e intuitivas. Si la IA es el motor, yo construyo el tablero con el que cualquiera puede conducirlo.",
    stack: ["React", "Next.js", "Tailwind CSS", "Figma", "TypeScript","Gemini","Anthropic","OpenAI"],
    image: "/team/yeison.jpeg",
  },
];

function TeamCard({ member }: { member: Member }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-full h-full cursor-pointer group"
      style={{ perspective: '1000px' }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className="w-full h-full relative transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
        style={{ 
          transformStyle: 'preserve-3d', 
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' 
        }}
      >
        {/* Front */}
        <div 
          className="w-full h-full relative rounded-2xl p-[1px]"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <ShineBorder borderWidth={1.5} duration={6} />
          <div
            className={`liquid-glass glass-hover p-8 rounded-[15px] border h-full min-h-[520px] flex flex-col justify-between backdrop-blur-xl ${
              member.featured
                ? 'border-blue-400/25 bg-blue-950/20'
                : 'border-white/10 bg-white/5'
            }`}
          >
            <div>
              <div className={`w-full aspect-[4/3] mb-8 rounded-2xl overflow-hidden border shadow-2xl relative ${member.featured ? 'border-blue-400/20 shadow-blue-900/10' : 'border-white/10'}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E]/60 via-[#0A0B0E]/10 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none"></div>
                <img src={member.image} alt={member.name} className="absolute inset-0 w-full h-full object-cover object-center filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              </div>

              <span
                className={`text-[10px] font-bold tracking-widest uppercase block mb-4 ${
                  member.featured ? 'text-blue-300/70' : 'text-white/50'
                }`}
              >
                {member.label}
              </span>
              
              <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-black uppercase tracking-tight text-white leading-[0.92] mb-3">
                {member.name}
              </h2>

              <p
                className={`text-xs font-medium tracking-widest uppercase mb-6 ${
                  member.featured ? 'text-blue-300/60' : 'text-white/35'
                }`}
              >
                {member.title}
              </p>

              <p className="text-gray-400 text-sm leading-relaxed max-w-prose">
                {member.description}
              </p>
            </div>

            <div
              className={`mt-8 pt-5 border-t flex justify-between items-center transition-colors ${
                member.featured ? 'border-blue-400/15 text-blue-300/60 group-hover:text-blue-300' : 'border-white/10 text-white/40 group-hover:text-white'
              }`}
            >
              <span className="text-[10px] font-bold tracking-widest uppercase">
                Ver Tech Stack
              </span>
              <svg className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </div>
        </div>

        {/* Back */}
        <div 
          className="w-full h-full absolute inset-0 rounded-2xl p-[1px]"
          style={{ 
            backfaceVisibility: 'hidden', 
            transform: 'rotateY(180deg)' 
          }}
        >
          <ShineBorder borderWidth={1.5} duration={6} />
          <div
            className={`liquid-glass glass-hover p-8 rounded-[15px] border h-full min-h-[520px] flex flex-col items-center justify-center text-center backdrop-blur-xl ${
              member.featured
                ? 'border-blue-400/25 bg-blue-950/20'
                : 'border-white/10 bg-white/5'
            }`}
          >
            <svg className={`w-12 h-12 mb-6 ${member.featured ? 'text-blue-400/40' : 'text-white/30'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
            </svg>
            <h3 className="text-xl font-bold uppercase tracking-widest text-white mb-2">Tech Stack</h3>
            <p className={`text-sm mb-10 ${member.featured ? 'text-blue-200/50' : 'text-white/40'}`}>{member.title}</p>
            
            <div className="flex flex-wrap justify-center gap-3 max-w-[85%]">
              {member.stack.map(tech => (
                <span
                  key={tech}
                  className={`text-sm tracking-wide px-4 py-2 rounded-xl border font-semibold transition-all hover:scale-105 backdrop-blur-md ${
                    member.featured
                      ? 'border-blue-400/60 text-white bg-blue-600/40 shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                      : 'border-white/40 text-white bg-white/20 shadow-[0_0_20px_rgba(255,255,255,0.15)]'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="absolute bottom-8 left-0 right-0 flex justify-center">
              <div className="text-[10px] uppercase tracking-widest text-white/30 flex items-center gap-2 group-hover:text-white/60 transition-colors">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" /></svg>
                Volver
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SobreNosotros() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden flex flex-col font-sans selection:bg-white/20 selection:text-white bg-[#0A0B0E]">

      {/* Fixed background video */}
      <div className="fixed inset-0 z-0">
        <SeamlessVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_32bReXqxPyXQZz4TWBrBwLmVgCp/hf_20260505_203452_a0ca140a-f02c-4ce5-bb97-f7259e5f37ef.mp4"
          containerClassName="absolute inset-0 h-full w-full overflow-hidden"
          videoClassName="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-[#0A0B0E]/35" />
      </div>

      <Navbar navItems={NAV_ITEMS} logoHref="/" />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative z-10 w-full px-6 md:px-12 lg:px-16 pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">

          <FadeIn immediate>
            <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-white/35 mb-5 block">
              Sobre Nosotros · Automatiza
            </span>
          </FadeIn>

          <AnimatedHeading
            as="h1"
            text={"DOS PERSONAS.\nUNA MÁQUINA."}
            variant="blur"
            className="text-[clamp(2.5rem,5vw,5.5rem)] font-black uppercase tracking-normal leading-[0.95] pb-3 text-white mb-6 max-w-4xl"
            initialDelay={100}
            highlights={{ "MÁQUINA.": "oklch(80% 0.16 68)" }}
          />

          <FadeIn delay={400}>
            <p className="text-base md:text-lg text-white/45 leading-relaxed max-w-xl">
              Un equipo pequeño con una sola obsesión: que ningún negocio pierda una venta por falta de atención. Construimos los agentes que trabajan cuando tú descansas.
            </p>
          </FadeIn>

        </div>
      </section>

      {/* ── Equipo ─────────────────────────────────────────────── */}
      <section className="relative z-10 w-full px-6 md:px-12 lg:px-16 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">

          <FadeIn>
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-white mb-8 text-center">
              El Equipo
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {MEMBERS.map((member, i) => (
              <FadeIn key={member.name} delay={i * 150} className="h-full">
                <TeamCard member={member} />
              </FadeIn>
            ))}
          </div>

        </div>
      </section>

      {/* ── Por qué existimos ──────────────────────────────────── */}
      <section className="relative z-10 w-full px-6 md:px-12 lg:px-16 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

            <FadeIn>
              <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-white/30 mb-5 block">
                Nuestra Historia
              </span>
              <AnimatedHeading
                text="Construido desde el problema real."
                className="text-[clamp(1.875rem,3.5vw,3.25rem)] font-black uppercase tracking-tight leading-[0.95] pb-2 text-white mb-0"
                initialDelay={0}
                wordDelay={40}
              />
            </FadeIn>

            <FadeIn delay={200}>
              <div className="liquid-glass border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-xl">
                <p className="text-base text-gray-300 leading-[1.7] mb-5">
                  Empezamos gestionando redes sociales y WhatsApp para pequeños negocios. Cada día veíamos el mismo patrón: dueños respondiendo mensajes a medianoche, leads que se enfriaban por falta de respuesta, ventas perdidas en el caos de los chats.
                </p>
                <p className="text-base text-gray-300 leading-[1.7]">
                  Automatiza nació de esa fricción. No como un producto genérico, sino como la solución que nosotros mismos necesitábamos. Cada agente que desplegamos lleva el aprendizaje de cientos de conversaciones reales.
                </p>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="relative z-10 max-w-7xl w-full px-6 md:px-12 lg:px-16 pb-12 mt-auto mx-auto">
        <Footer />
      </div>

    </main>
  );
}

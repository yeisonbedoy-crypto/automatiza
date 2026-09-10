import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Sections';
import FadeIn from '../components/FadeIn';
import AnimatedHeading from '../components/AnimatedHeading';
import {
  AgencyBackground, SectionLabel, GreenButton, GhostButton, TrustStrip, ACCENT, ACCENT_LIGHT,
} from '../components/agency';
import {
  MessageCircle, Phone, Mail, Linkedin, Clock, Zap, Shield, Users, TrendingUp, ArrowRight, Rocket,
} from 'lucide-react';

const NAV_ITEMS = [
  { name: "INICIO",     href: "/" },
  { name: "SERVICIOS",  href: "/servicios" },
  { name: "NFC",        href: "/nfc" },
  { name: "PROYECTOS",  href: "/proyectos" },
  { name: "ECOSISTEMA", href: "/ecosistema" },
  { name: "PRECIOS",    href: "/precios" },
];

const CHANNELS = [
  { Icon: MessageCircle, title: "WhatsApp", desc: "La forma más rápida de conectar. Te respondemos al momento.", action: "Escribir ahora", href: "/presupuesto", external: true },
  { Icon: Phone,         title: "Llamar",   desc: "Hablamos directamente y avanzamos más rápido en tu proyecto.", action: "+34 696 859 840", href: "tel:+34696859840", external: false },
  { Icon: Mail,          title: "Email",    desc: "Envíanos los detalles y te preparamos una propuesta.", action: "automatizagc@gmail.com", href: "mailto:automatizagc@gmail.com", external: false },
  { Icon: Linkedin,      title: "LinkedIn", desc: "Conectamos y exploramos oportunidades profesionales.", action: "Conectar ahora", href: "https://linkedin.com", external: true },
];

const TRUST = [
  { Icon: Shield,     label: "Confidencialidad", sub: "100% protegido" },
  { Icon: Zap,        label: "Respuesta rápida", sub: "Menos de 24 h" },
  { Icon: TrendingUp, label: "Soluciones reales", sub: "Diseñadas para escalar" },
  { Icon: Users,      label: "Acompañamiento", sub: "De principio a fin" },
];

export default function Contacto() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden flex flex-col font-sans selection:bg-[#22C55E]/25 selection:text-white">
      <AgencyBackground />
      <Navbar navItems={NAV_ITEMS} logoHref="/" />

      {/* Hero */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 pt-36 pb-12 md:pt-44">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn immediate><SectionLabel className="mb-4">Hablemos</SectionLabel></FadeIn>
          <AnimatedHeading
            as="h1"
            text={"Estamos listos para\nescuchar tu proyecto."}
            variant="blur"
            className="text-[clamp(2.4rem,5.5vw,5rem)] font-black uppercase tracking-tight mb-6 pb-2 leading-[0.94]"
            highlights={{ "escuchar": ACCENT_LIGHT, "tu": ACCENT_LIGHT, "proyecto.": ACCENT_LIGHT }}
          />
          <FadeIn immediate delay={300}>
            <p className="text-base md:text-lg text-white/55 max-w-xl mx-auto leading-relaxed">
              Cuéntanos tu idea o proyecto y te respondemos lo antes posible. Juntos encontraremos la mejor solución.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Channels */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 pb-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CHANNELS.map((ch, i) => (
            <FadeIn key={ch.title} immediate delay={i * 90 + 150} className="h-full">
              <div className="h-full rounded-2xl p-6 border flex flex-col gap-4" style={{ background: 'rgba(255,255,255,0.028)', borderColor: 'rgba(34,197,94,0.14)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(34,197,94,0.10)', border: '1px solid rgba(34,197,94,0.35)', boxShadow: '0 0 24px rgba(34,197,94,0.15)' }}>
                  <ch.Icon className="w-5 h-5" style={{ color: ACCENT_LIGHT }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-[15px] font-bold text-white tracking-tight mb-1.5">{ch.title}</h3>
                  <p className="text-[12px] text-white/45 leading-relaxed">{ch.desc}</p>
                </div>
                <GhostButton href={ch.href} external={ch.external} className="w-full !py-2.5 text-[12px]">
                  {ch.action}
                </GhostButton>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Compromiso strip */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 pb-12">
        <div className="max-w-5xl mx-auto">
          <FadeIn immediate delay={200}>
            <p className="text-center text-[11px] font-bold tracking-[0.24em] uppercase mb-5" style={{ color: ACCENT }}>Nuestro compromiso</p>
            <TrustStrip items={TRUST} />
          </FadeIn>
        </div>
      </section>

      {/* Availability */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 pb-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <FadeIn immediate delay={150}>
            <div className="rounded-2xl p-6 border flex items-center gap-4" style={{ background: 'rgba(255,255,255,0.028)', borderColor: 'rgba(34,197,94,0.14)' }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(34,197,94,0.10)', border: '1px solid rgba(34,197,94,0.32)' }}>
                <Clock className="w-5 h-5" style={{ color: ACCENT_LIGHT }} />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-1">Disponibilidad</p>
                <p className="text-[15px] font-bold text-white">Lunes a Viernes</p>
                <p className="text-[12px] text-white/50">09:00 – 18:00 GMT+1</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn immediate delay={230}>
            <div className="rounded-2xl p-6 border flex items-center gap-4" style={{ background: 'rgba(255,255,255,0.028)', borderColor: 'rgba(34,197,94,0.14)' }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(34,197,94,0.10)', border: '1px solid rgba(34,197,94,0.32)' }}>
                <Zap className="w-5 h-5" style={{ color: ACCENT_LIGHT }} />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-1">Tiempo de respuesta</p>
                <p className="text-[15px] font-bold" style={{ color: ACCENT_LIGHT }}>Menos de 24 horas</p>
                <p className="text-[12px] text-white/50">Nos comprometemos contigo</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Founder quote + photo */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 pb-14">
        <div className="max-w-5xl mx-auto">
          <FadeIn immediate>
            <div className="relative rounded-2xl overflow-hidden border grid grid-cols-1 md:grid-cols-2" style={{ borderColor: 'rgba(34,197,94,0.2)', background: 'rgba(255,255,255,0.02)' }}>
              {/* Text */}
              <div className="relative p-8 md:p-10 flex flex-col justify-center">
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(60% 100% at 0% 50%, rgba(34,197,94,0.12) 0%, transparent 65%)' }} />
                <div className="relative z-10">
                  <div className="text-6xl leading-none font-serif mb-2" style={{ color: ACCENT }}>“</div>
                  <p className="text-xl md:text-2xl font-bold text-white/90 leading-relaxed italic -mt-6">
                    Las mejores ideas merecen las mejores soluciones. Hagámoslo realidad.
                  </p>
                  <div className="mt-5">
                    <p className="text-[14px] font-bold text-white">Alexander Medina</p>
                    <p className="text-[12px]" style={{ color: ACCENT }}>Fundador · AutomatizaGC</p>
                    <span className="inline-block mt-2 text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1 rounded-full" style={{ color: ACCENT_LIGHT, border: '1px solid rgba(34,197,94,0.35)' }}>
                      Digital · Business · Innovation
                    </span>
                  </div>
                </div>
              </div>
              {/* Photo */}
              <div className="relative min-h-[280px] md:min-h-full">
                <img src="/founder.jpg" alt="Alexander Medina, Fundador de AutomatizaGC" className="absolute inset-0 w-full h-full object-cover grayscale-[0.12]" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(7,11,9,0.85) 0%, transparent 35%), linear-gradient(to top, rgba(7,11,9,0.5) 0%, transparent 40%)' }} />
                <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 80px rgba(34,197,94,0.12)' }} />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA rocket */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 pb-24">
        <div className="max-w-5xl mx-auto">
          <FadeIn immediate>
            <div className="relative rounded-2xl overflow-hidden px-6 py-9 md:px-12 md:py-11 text-center border" style={{ background: 'linear-gradient(120deg, rgba(34,197,94,0.14) 0%, rgba(255,255,255,0.02) 65%)', borderColor: 'rgba(34,197,94,0.25)' }}>
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(50% 120% at 50% 0%, rgba(34,197,94,0.2) 0%, transparent 60%)' }} />
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.4)', boxShadow: '0 0 30px rgba(34,197,94,0.3)' }}>
                  <Rocket className="w-6 h-6" style={{ color: ACCENT_LIGHT }} />
                </div>
                <h2 className="font-black uppercase tracking-tight text-white leading-[0.95]" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.6rem)' }}>
                  Tu proyecto es <span style={{ color: ACCENT_LIGHT }}>el siguiente.</span>
                </h2>
                <p className="text-sm text-white/55 max-w-lg">
                  Si tienes una idea, un proyecto o simplemente una duda, estamos listos para ayudarte a hacerlo realidad.
                </p>
                <GreenButton href="/presupuesto" className="mt-1">
                  Solicitar Presupuesto <ArrowRight className="w-4 h-4" />
                </GreenButton>
                <p className="text-[10px] text-white/30">Respuesta en 24 h · 100% confidencial</p>
              </div>
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

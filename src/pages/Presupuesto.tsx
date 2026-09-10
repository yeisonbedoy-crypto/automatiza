import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Sections';
import FadeIn from '../components/FadeIn';
import AnimatedHeading from '../components/AnimatedHeading';
import {
  AgencyBackground, SectionLabel, FounderQuote, TrustStrip, GreenButton, ACCENT, ACCENT_LIGHT,
} from '../components/agency';
import {
  Target, Zap, Code2, Cpu, ShoppingBag, TrendingUp, Plus, Check,
  Shield, Users, Clock, FileCheck, ArrowRight,
} from 'lucide-react';

const NAV_ITEMS = [
  { name: "INICIO",     href: "/" },
  { name: "SERVICIOS",  href: "/servicios" },
  { name: "NFC",        href: "/nfc" },
  { name: "PROYECTOS",  href: "/proyectos" },
  { name: "ECOSISTEMA", href: "/ecosistema" },
  { name: "PRECIOS",    href: "/precios" },
];

const BENEFITS = [
  { Icon: Target,    title: "Análisis personalizado", desc: "Estudiamos tu caso en profundidad para darte la solución más efectiva." },
  { Icon: FileCheck, title: "Propuesta a medida", desc: "Recibes una propuesta clara y adaptada a tus necesidades reales." },
  { Icon: Zap,       title: "Respuesta rápida", desc: "Nos comprometemos a responderte en menos de 24 horas." },
  { Icon: Shield,    title: "Confidencialidad total", desc: "Tu información y proyecto están protegidos en todo momento." },
  { Icon: Users,     title: "Acompañamiento real", desc: "Te acompañamos desde la propuesta hasta los resultados." },
];

const SERVICE_OPTIONS = [
  { Icon: Target,      label: "Estrategia Digital" },
  { Icon: Zap,         label: "Automatización" },
  { Icon: Code2,       label: "Desarrollo Web / App" },
  { Icon: Cpu,         label: "Inteligencia Artificial" },
  { Icon: ShoppingBag, label: "E-Commerce" },
  { Icon: TrendingUp,  label: "Consultoría" },
  { Icon: Plus,        label: "Otro" },
];

const BUDGET_OPTIONS = ["Menos de 1.000€", "1.000€ – 5.000€", "5.000€ – 15.000€", "Más de 15.000€", "No lo tengo definido"];
const START_OPTIONS = ["Lo antes posible", "En 1 mes", "En 2-3 meses", "Sin urgencia"];

const TRUST = [
  { Icon: Shield,     label: "Confidencialidad", sub: "100% protegido" },
  { Icon: Target,     label: "Enfoque personal", sub: "Solución a medida" },
  { Icon: Check,      label: "Compromiso real", sub: "De principio a fin" },
  { Icon: TrendingUp, label: "Orientado a resultados", sub: "Impacto medible" },
];

type FormState = {
  nombre: string; email: string; whatsapp: string;
  servicios: string[]; descripcion: string; presupuesto: string; inicio: string;
};

const INPUT_CLASS =
  "w-full bg-white/[0.04] border border-white/[0.12] rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#22C55E]/50 focus:bg-white/[0.06] transition-all duration-200";
const LABEL_CLASS = "block text-[11px] font-bold tracking-[0.2em] uppercase text-white/40 mb-2.5";

export default function Presupuesto() {
  const [form, setForm] = useState<FormState>({
    nombre: '', email: '', whatsapp: '', servicios: [], descripcion: '', presupuesto: '', inicio: '',
  });
  const [serviciosError, setServiciosError] = useState(false);
  const [sent, setSent] = useState(false);

  const LEAD_EMAIL = 'automatizagc@gmail.com';

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const toggleServicio = (label: string) => {
    setServiciosError(false);
    setForm(prev => ({
      ...prev,
      servicios: prev.servicios.includes(label) ? prev.servicios.filter(s => s !== label) : [...prev.servicios, label],
    }));
  };

  const setField = (name: keyof FormState, value: string) =>
    setForm(prev => ({ ...prev, [name]: prev[name] === value ? '' : value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (form.servicios.length === 0) { setServiciosError(true); return; }

    // 1) Envío por email (FormSubmit) — en segundo plano, para no perder el lead
    fetch(`https://formsubmit.co/ajax/${LEAD_EMAIL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        _subject: `Nueva solicitud de presupuesto — ${form.nombre || 'sin nombre'}`,
        _template: 'table',
        Nombre: form.nombre,
        Email: form.email,
        Teléfono: form.whatsapp || '—',
        'Servicios de interés': form.servicios.join(', '),
        Proyecto: form.descripcion,
        'Presupuesto aproximado': form.presupuesto || '—',
        'Inicio deseado': form.inicio || '—',
      }),
    }).catch(() => {});

    // 2) WhatsApp (síncrono, dentro del gesto del click para evitar bloqueo de pop-ups)
    const lines = [
      `*Nueva solicitud de presupuesto — AutomatizaGC*`, ``,
      `👤 *Nombre:* ${form.nombre}`,
      `📧 *Email:* ${form.email}`,
      form.whatsapp ? `📱 *Teléfono:* ${form.whatsapp}` : '', ``,
      `🎯 *Servicios de interés:* ${form.servicios.join(', ')}`, ``,
      `📝 *Proyecto:*`, form.descripcion, ``,
      form.presupuesto ? `💶 *Presupuesto aproximado:* ${form.presupuesto}` : '',
      form.inicio ? `📅 *Inicio deseado:* ${form.inicio}` : '',
    ].filter(Boolean);
    window.open(`https://wa.me/34696859840?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener,noreferrer');

    setSent(true);
  };

  const chipCls = (active: boolean) =>
    ["px-3.5 py-2 rounded-lg text-[12px] font-medium border transition-all duration-200",
     active ? "text-white" : "text-white/55 hover:text-white/80"].join(" ");
  const chipStyle = (active: boolean) => active
    ? { borderColor: 'rgba(34,197,94,0.6)', background: 'rgba(34,197,94,0.16)', boxShadow: '0 0 14px rgba(34,197,94,0.14)' }
    : { borderColor: 'rgba(255,255,255,0.10)', background: 'rgba(255,255,255,0.03)' };

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden flex flex-col font-sans selection:bg-[#22C55E]/25 selection:text-white">
      <AgencyBackground />
      <Navbar navItems={NAV_ITEMS} logoHref="/" />

      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 pt-36 pb-20 md:pt-44">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">
            <FadeIn immediate><SectionLabel className="mb-4">Solicita tu propuesta</SectionLabel></FadeIn>
            <AnimatedHeading
              as="h1"
              text={"Cuéntanos tu proyecto.\nTe proponemos la mejor solución."}
              variant="blur"
              className="text-[clamp(1.8rem,4.5vw,4.3rem)] font-black uppercase tracking-tight mb-4 pb-2 leading-[0.94]"
              highlights={{ "mejor": ACCENT_LIGHT, "solución.": ACCENT_LIGHT }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Left: benefits vertical list + quote */}
            <div className="flex flex-col gap-6 lg:sticky lg:top-28">
              <FadeIn immediate delay={100}>
                <p className="text-[11px] font-bold tracking-[0.22em] uppercase" style={{ color: ACCENT }}>
                  ¿Qué obtienes al enviar tu solicitud?
                </p>
              </FadeIn>
              <div className="flex flex-col gap-3">
                {BENEFITS.map((b, i) => (
                  <FadeIn key={i} immediate delay={160 + i * 70}>
                    <div className="rounded-xl p-4 border" style={{ background: 'rgba(255,255,255,0.028)', borderColor: 'rgba(34,197,94,0.12)' }}>
                      <h3 className="text-[13.5px] font-bold text-white tracking-tight leading-tight">{b.title}</h3>
                      <p className="text-[12px] text-white/45 leading-relaxed mt-1">{b.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
              <FadeIn immediate delay={560}>
                <div className="rounded-2xl p-6 border" style={{ background: 'rgba(255,255,255,0.028)', borderColor: 'rgba(34,197,94,0.14)' }}>
                  <FounderQuote quote="Cada gran proyecto empieza con una conversación. Cuéntame el tuyo." withPhoto />
                </div>
              </FadeIn>
            </div>

            {/* Right: form */}
            <FadeIn immediate delay={200}>
              <div
                className="relative rounded-2xl overflow-hidden p-7 md:p-8 border"
                style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.06) 0%, rgba(255,255,255,0.02) 60%)', borderColor: 'rgba(34,197,94,0.22)' }}
              >
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase mb-6" style={{ color: ACCENT }}>Cuéntanos sobre tu proyecto</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={LABEL_CLASS}>Nombre completo</label>
                      <input name="nombre" type="text" required placeholder="Tu nombre" value={form.nombre} onChange={handleChange} className={INPUT_CLASS} />
                    </div>
                    <div>
                      <label className={LABEL_CLASS}>Email</label>
                      <input name="email" type="email" required placeholder="tu@email.com" value={form.email} onChange={handleChange} className={INPUT_CLASS} />
                    </div>
                  </div>

                  <div>
                    <label className={LABEL_CLASS}>WhatsApp / Teléfono</label>
                    <input name="whatsapp" type="tel" placeholder="+34 000 000 000" value={form.whatsapp} onChange={handleChange} className={INPUT_CLASS} />
                  </div>

                  {/* Servicios — visibles */}
                  <div>
                    <label className={LABEL_CLASS}>
                      ¿Qué necesitas? <span className="text-white/25 normal-case tracking-normal font-medium">· elige uno o varios</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {SERVICE_OPTIONS.map(({ Icon, label }) => {
                        const active = form.servicios.includes(label);
                        return (
                          <button
                            type="button" key={label} onClick={() => toggleServicio(label)} aria-pressed={active}
                            className="relative flex flex-col items-start gap-2 p-3 rounded-xl border text-left transition-all duration-200"
                            style={active
                              ? { borderColor: 'rgba(34,197,94,0.6)', background: 'rgba(34,197,94,0.14)', boxShadow: '0 0 18px rgba(34,197,94,0.14)' }
                              : { borderColor: 'rgba(255,255,255,0.10)', background: 'rgba(255,255,255,0.03)' }}
                          >
                            <span className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors duration-200"
                              style={active ? { background: ACCENT, color: '#04140B' } : { background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)' }}>
                              {active ? <Check className="w-3.5 h-3.5" /> : <Icon className="w-3.5 h-3.5" />}
                            </span>
                            <span className="text-[11.5px] font-semibold leading-tight tracking-tight" style={{ color: active ? '#fff' : 'rgba(255,255,255,0.6)' }}>{label}</span>
                          </button>
                        );
                      })}
                    </div>
                    {serviciosError && <p className="text-[11px] text-red-300/80 mt-2 font-medium">Selecciona al menos un servicio.</p>}
                  </div>

                  <div>
                    <label className={LABEL_CLASS}>Describe tu proyecto</label>
                    <textarea name="descripcion" required rows={4}
                      placeholder="Cuéntanos sobre tu negocio, qué problema quieres resolver y qué resultado buscas..."
                      value={form.descripcion} onChange={handleChange} className={INPUT_CLASS + " resize-none"} />
                  </div>

                  <div>
                    <label className={LABEL_CLASS}>Presupuesto aproximado <span className="text-white/25 normal-case tracking-normal font-medium">· opcional</span></label>
                    <div className="flex flex-wrap gap-2">
                      {BUDGET_OPTIONS.map(opt => (
                        <button type="button" key={opt} onClick={() => setField('presupuesto', opt)} className={chipCls(form.presupuesto === opt)} style={chipStyle(form.presupuesto === opt)}>{opt}</button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className={LABEL_CLASS}>¿Cuándo empezar? <span className="text-white/25 normal-case tracking-normal font-medium">· opcional</span></label>
                    <div className="flex flex-wrap gap-2">
                      {START_OPTIONS.map(opt => (
                        <button type="button" key={opt} onClick={() => setField('inicio', opt)} className={chipCls(form.inicio === opt)} style={chipStyle(form.inicio === opt)}>{opt}</button>
                      ))}
                    </div>
                  </div>

                  <GreenButton type="submit" className="w-full py-4">
                    Enviar Solicitud <ArrowRight className="w-4 h-4" />
                  </GreenButton>
                  {sent && (
                    <div className="flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-[12px] font-semibold" style={{ background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.4)', color: ACCENT_LIGHT }}>
                      <Check className="w-4 h-4" /> ¡Solicitud enviada! Te responderemos en menos de 24 h.
                    </div>
                  )}
                  <p className="text-center text-[10px] text-white/25 tracking-wide">Sin coste · Sin compromiso · Respuesta en 24 h</p>
                </form>
              </div>
            </FadeIn>
          </div>

          {/* Trust strip — solo texto */}
          <div className="max-w-6xl mx-auto mt-14">
            <FadeIn immediate delay={200}>
              <p className="text-center text-[11px] font-bold tracking-[0.24em] uppercase mb-5" style={{ color: ACCENT }}>Tu proyecto en buenas manos</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {TRUST.map((it, i) => (
                  <div key={i} className="rounded-xl px-4 py-4 border text-center" style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(34,197,94,0.15)' }}>
                    <p className="text-[13px] font-bold text-white tracking-tight leading-tight">{it.label}</p>
                    <p className="text-[11px] text-white/40 mt-1">{it.sub}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <div className="relative z-10 max-w-7xl w-full px-6 md:px-12 lg:px-16 pb-12 mt-auto mx-auto">
        <Footer />
      </div>
    </main>
  );
}

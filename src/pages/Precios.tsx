import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Sections';
import SeamlessVideo from '../components/SeamlessVideo';
import FadeIn from '../components/FadeIn';
import ShineBorder from '../components/ShineBorder';
import TiltedCard from '../components/TiltedCard';

const NAV_ITEMS = [
  { name: "INICIO",        href: "/" },
  { name: "ECOSISTEMA",    href: "/#story" },
  { name: "EL CEREBRO",   href: "/#boss", highlight: true as const },
  { name: "ASESORAMIENTO", href: "/#asesoramiento" },
  { name: "BLOG",          href: "/blog" },
];

const ACCENT = 'oklch(62% 0.18 245)';

const STARTER_FEATURES = [
  'IA Comercial activa 24/7 en un canal',
  'Landing page + 2-3 páginas web incluidas',
  'SEO básico: metas, sitemap y Google indexado',
  'Captación y calificación automática de leads',
  'Respuestas inteligentes sin intervención humana',
  'Activación guiada en 48 horas',
];

const GROWTH_FEATURES = [
  'IA Comercial 24/7 en todos los canales',
  'Web multipágina + SEO local y sectorial',
  'Google Analytics y conversiones integradas',
  'Cierre automático de ventas y seguimiento',
  'Reportes semanales de conversión y retorno',
  'Soporte prioritario y optimización mensual',
];

const AUTOPILOT_FEATURES = [
  'Todo lo incluido en Growth',
  'Agentes ilimitados por canal',
  'Web personalizada + SEO técnico avanzado',
  'Estrategia de contenidos y posicionamiento',
  'Integraciones CRM y ERP a medida',
  'Gestor de cuenta dedicado',
  'Auditoría mensual de conversión + SLA 99.9%',
];

const STARTER_NOT_INCLUDED = [
  'Canales múltiples (WhatsApp, Instagram y email)',
  'Cierre automático de ventas y seguimiento',
  'Reportes semanales de conversión',
];

const GROWTH_NOT_INCLUDED = [
  'Agentes ilimitados por canal',
  'Integraciones CRM y ERP a medida',
  'Gestor de cuenta dedicado + SLA 99.9%',
];

const WITHOUT = [
  'Leads que no responden a tiempo se van con la competencia',
  'Horas perdidas en mensajes repetitivos cada semana',
  'Sin métricas claras: no sabes qué canal convierte',
  'Vacaciones imposibles — el negocio depende de ti',
];

const WITH = [
  'Captación automática activa las 24h, los 7 días',
  'Cero tiempo en tareas repetitivas, cero leads perdidos',
  'Dashboard con métricas de conversión en tiempo real',
  'El negocio funciona aunque estés desconectado',
];

export default function Precios() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden flex flex-col font-sans selection:bg-white/20 selection:text-white">

      {/* Fixed video base */}
      <div className="fixed inset-0 z-0">
        <SeamlessVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_32bReXqxPyXQZz4TWBrBwLmVgCp/hf_20260506_204312_b409e85b-c9ad-4e16-9875-10bdc8d63bcb.mp4"
          containerClassName="absolute inset-0 h-full w-full overflow-hidden"
          videoClassName="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0A0B0E]/82" />
      </div>

      <Navbar navItems={NAV_ITEMS} logoHref="/" />

      {/* ── 1. RESULTADO ──────────────────────────────────────── */}
      <section className="relative z-10 w-full flex flex-col items-center text-center px-4 pt-32 pb-10 md:pt-44 md:pb-14">
        <FadeIn immediate>
          <p className="text-[11px] font-medium tracking-[0.28em] uppercase text-white/30 mb-7">
            Planes y Precios
          </p>
          <h1
            className="font-black uppercase text-[#F8F9FA] mb-7 max-w-4xl mx-auto"
            style={{
              fontSize: 'clamp(2.25rem, 6vw, 4.5rem)',
              lineHeight: 0.9,
              letterSpacing: '-0.05em',
            }}
          >
            Tu negocio,<br />funcionando mientras duermes
          </h1>
          <p className="text-base text-white/40 max-w-md mx-auto leading-relaxed">
            Sin letra pequeña, sin sorpresas.
          </p>
        </FadeIn>
      </section>

      {/* ── 3. PLANES ────────────────────────────────────────── */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 pb-28 md:pb-36">
        <div className="max-w-6xl mx-auto">

          {/* Row: Starter / Growth / Autopilot */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch pt-5 mb-6">

            {/* STARTER */}
            <FadeIn immediate delay={100} className="h-full">
              <div className="relative rounded-2xl h-full w-full card-static cursor-pointer p-[1px]">
                <ShineBorder borderWidth={1} duration={6} />
                <div className="liquid-glass p-7 rounded-[15px] border border-white/10 flex flex-col h-full w-full" style={{ background: 'rgba(255,255,255,0.13)' }}>
                  <div className="text-center mb-5">
                    <p className="text-[10px] font-medium tracking-[0.28em] uppercase text-white/50 mb-3">Starter</p>
                    <h3 className="text-lg font-semibold text-white leading-snug mb-2">Deja de perder<br />leads al instante</h3>
                    <p className="text-sm text-white/40 leading-relaxed">Un agente activo 24/7 y una web que capta desde el primer día. Sin esperas, sin fricción.</p>
                  </div>
                  <div className="text-center mb-5">
                    <p className="text-4xl font-bold text-white tabular-nums">399<span className="text-2xl font-medium text-white/50">€</span></p>
                    <p className="text-[11px] text-white/30 mt-1 tracking-wide">al mes, sin permanencia</p>
                  </div>
                  <div className="h-px bg-white/10 mb-5" />
                  <ul className="flex flex-col gap-2.5 mb-4">
                    {STARTER_FEATURES.map(f => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-white/65 leading-snug">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 shrink-0 mt-0.5 text-white/70">
                          <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="h-px bg-white/6 mb-4" />
                  <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/30 mb-3">No incluye</p>
                  <ul className="flex flex-col gap-2 flex-1 mb-6">
                    {STARTER_NOT_INCLUDED.map(f => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-white/25 leading-snug">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 shrink-0 mt-0.5 text-white/20">
                          <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.75.75 0 1 1 1.06 1.06L9.06 8l3.22 3.22a.75.75 0 1 1-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 0 1-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button type="button" className="liquid-glass border border-white/15 text-white/80 px-6 py-2.5 rounded-lg font-medium text-sm w-full transition-all duration-300 hover:border-white/30 hover:text-white">
                    Empezar ahora
                  </button>
                </div>
              </div>
            </FadeIn>

            {/* GROWTH — Dominant */}
            <FadeIn immediate delay={200} className="h-full">
              <div className="relative rounded-2xl h-full w-full card-static cursor-pointer p-[1px]">
                <ShineBorder borderWidth={1} duration={5} />
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                  <span className="text-[10px] font-semibold tracking-[0.18em] uppercase px-3 py-1 rounded-full bg-gray-900 text-white whitespace-nowrap">
                    Más Elegido
                  </span>
                </div>
                <div className="liquid-glass p-7 rounded-[15px] border border-white/15 flex flex-col h-full w-full" style={{ background: 'rgba(255,255,255,0.13)' }}>
                  <div className="text-center mb-5 mt-1">
                    <p className="text-[10px] font-medium tracking-[0.28em] uppercase text-white/50 mb-3">Growth</p>
                    <h3 className="text-lg font-semibold text-white leading-snug mb-2">Todos tus canales,<br />un solo motor</h3>
                    <p className="text-sm text-white/40 leading-relaxed">WhatsApp, Instagram y email unificados. Tu web optimizada para convertir. Cada lead seguido y cerrado solo.</p>
                  </div>
                  <div className="text-center mb-5">
                    <p className="text-4xl font-bold text-white tabular-nums">699<span className="text-2xl font-medium text-white/50">€</span></p>
                    <p className="text-[11px] text-white/30 mt-1 tracking-wide">al mes, sin permanencia</p>
                  </div>
                  <div className="h-px bg-white/10 mb-5" />
                  <ul className="flex flex-col gap-2.5 mb-4">
                    {GROWTH_FEATURES.map(f => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-white/70 leading-snug">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 shrink-0 mt-0.5 text-white/80">
                          <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="h-px bg-white/6 mb-4" />
                  <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/30 mb-3">No incluye</p>
                  <ul className="flex flex-col gap-2 flex-1 mb-6">
                    {GROWTH_NOT_INCLUDED.map(f => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-white/25 leading-snug">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 shrink-0 mt-0.5 text-white/20">
                          <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.75.75 0 1 1 1.06 1.06L9.06 8l3.22 3.22a.75.75 0 1 1-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 0 1-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button type="button" className="bg-white text-black px-6 py-2.5 rounded-lg font-semibold text-sm w-full transition-colors duration-200 hover:bg-gray-100">
                    Automatizar mi negocio
                  </button>
                </div>
              </div>
            </FadeIn>

            {/* AUTOPILOT */}
            <FadeIn immediate delay={300} className="h-full">
              <div className="relative rounded-2xl h-full w-full card-static cursor-pointer p-[1px]">
                <ShineBorder borderWidth={1} duration={7} />
                <div className="liquid-glass p-7 rounded-[15px] border border-white/10 flex flex-col h-full w-full" style={{ background: 'rgba(255,255,255,0.13)' }}>
                  <div className="text-center mb-5">
                    <p className="text-[10px] font-medium tracking-[0.28em] uppercase text-white/50 mb-3">Autopilot</p>
                    <h3 className="text-lg font-semibold text-white leading-snug mb-2">Tu negocio<br />funciona. Sin ti.</h3>
                    <p className="text-sm text-white/40 leading-relaxed">Agentes ilimitados, CRM integrado y web personalizada con SEO técnico avanzado. Escala sin fricción, factura sin tocar nada.</p>
                  </div>
                  <div className="text-center mb-5">
                    <p className="text-4xl font-bold text-white tabular-nums">1.200<span className="text-2xl font-medium text-white/50">€</span></p>
                    <p className="text-[11px] text-white/30 mt-1 tracking-wide">al mes, sin permanencia</p>
                  </div>
                  <div className="h-px bg-white/10 mb-5" />
                  <ul className="flex flex-col gap-2.5 flex-1 mb-6">
                    {AUTOPILOT_FEATURES.map(f => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-white/65 leading-snug">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 shrink-0 mt-0.5 text-white/70">
                          <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button type="button" className="liquid-glass border border-white/15 text-white/80 px-6 py-2.5 rounded-lg font-medium text-sm w-full transition-all duration-300 hover:border-white/30 hover:text-white">
                    Escalar mi negocio
                  </button>
                </div>
              </div>
            </FadeIn>

          </div>

          {/* Enterprise — premium full-width */}
          <FadeIn immediate delay={420}>
            <div
              className="relative rounded-2xl overflow-hidden p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-20"
              style={{
                background: 'linear-gradient(125deg, oklch(7% 0.012 265 / 0.97) 0%, oklch(9% 0.022 50 / 0.92) 100%)',
                border: '1px solid oklch(78% 0.07 65 / 0.14)',
                boxShadow: '0 0 60px oklch(55% 0.08 50 / 0.07), inset 0 1px 0 oklch(78% 0.07 65 / 0.12)',
              }}
            >
              {/* Warm glow — right edge */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 90% 50%, oklch(55% 0.07 50 / 0.09) 0%, transparent 60%)' }}
              />

              {/* SVG illustration — diamond crystal */}
              <svg
                viewBox="0 0 200 190"
                fill="none"
                className="absolute right-6 top-1/2 -translate-y-1/2 w-52 h-52 pointer-events-none"
                style={{ opacity: 0.055 }}
                aria-hidden="true"
              >
                <polygon points="100,8 182,72 100,178 18,72" stroke="white" strokeWidth="1.2"/>
                <polygon points="100,8 182,72 100,72 18,72" stroke="white" strokeWidth="0.7" strokeOpacity="0.6"/>
                <line x1="18" y1="72" x2="100" y2="178" stroke="white" strokeWidth="0.7" strokeOpacity="0.5"/>
                <line x1="182" y1="72" x2="100" y2="178" stroke="white" strokeWidth="0.7" strokeOpacity="0.5"/>
                <line x1="100" y1="8" x2="100" y2="72" stroke="white" strokeWidth="0.7" strokeOpacity="0.5"/>
                <line x1="18" y1="72" x2="100" y2="72" stroke="white" strokeWidth="0.5" strokeOpacity="0.4"/>
                <line x1="182" y1="72" x2="100" y2="72" stroke="white" strokeWidth="0.5" strokeOpacity="0.4"/>
                <circle cx="100" cy="8" r="2.5" fill="white"/>
                <circle cx="182" cy="72" r="2.5" fill="white"/>
                <circle cx="100" cy="178" r="2.5" fill="white"/>
                <circle cx="18" cy="72" r="2.5" fill="white"/>
                <circle cx="100" cy="72" r="2" fill="white" fillOpacity="0.6"/>
              </svg>

              {/* Content */}
              <div className="flex-1 min-w-0 relative">
                <p
                  className="text-[10px] font-medium tracking-[0.32em] uppercase mb-3"
                  style={{ color: 'oklch(75% 0.07 60 / 0.7)' }}
                >
                  Enterprise
                </p>
                <h3
                  className="font-black uppercase text-[#F5F0E8] mb-4"
                  style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
                    lineHeight: 0.9,
                    letterSpacing: '-0.04em',
                  }}
                >
                  Arquitectura<br />sin techo
                </h3>
                <p className="text-sm leading-relaxed max-w-sm" style={{ color: 'oklch(80% 0.01 265 / 0.38)' }}>
                  Para operaciones que exigen escala absoluta. Web enterprise, SEO de autoridad y acompañamiento dedicado.
                </p>
              </div>

              {/* Right — price hidden + CTA */}
              <div className="shrink-0 relative flex flex-col items-start md:items-end gap-3">
                <div className="flex items-center gap-2 mb-1">
                  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" style={{ color: 'oklch(75% 0.07 60 / 0.5)' }} aria-hidden="true">
                    <rect x="3" y="7" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" stroke="currentColor" strokeWidth="1.2"/>
                  </svg>
                  <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: 'oklch(75% 0.07 60 / 0.45)' }}>
                    Precio bajo consulta
                  </span>
                </div>
                <button
                  type="button"
                  className="relative px-7 py-2.5 rounded-lg font-medium text-sm whitespace-nowrap transition-all duration-300"
                  style={{
                    background: 'oklch(78% 0.07 60 / 0.1)',
                    border: '1px solid oklch(78% 0.07 60 / 0.3)',
                    color: 'oklch(85% 0.05 55)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'oklch(78% 0.07 60 / 0.18)';
                    (e.currentTarget as HTMLButtonElement).style.borderColor = 'oklch(78% 0.07 60 / 0.5)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'oklch(78% 0.07 60 / 0.1)';
                    (e.currentTarget as HTMLButtonElement).style.borderColor = 'oklch(78% 0.07 60 / 0.3)';
                  }}
                >
                  Solicitar acceso
                </button>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* ── 4. ROI + GARANTÍA ────────────────────────────────── */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 pb-28 md:pb-36">
        <div className="max-w-6xl mx-auto">

          <FadeIn immediate>
            <p className="text-[11px] font-medium tracking-[0.28em] uppercase text-white/25 mb-5 text-center">
              Retorno sobre la inversión
            </p>
            <h2
              className="font-black uppercase text-[#F8F9FA] mb-12 text-center"
              style={{
                fontSize: 'clamp(1.875rem, 4vw, 3.25rem)',
                lineHeight: 0.92,
                letterSpacing: '-0.04em',
              }}
            >
              ¿Cuánto cuesta<br />no automatizar?
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">

            {/* Sin sistema */}
            <FadeIn immediate delay={120} className="h-full">
              <TiltedCard rotateAmplitude={8} scaleOnHover={1.02}>
                <div className="liquid-glass rounded-2xl p-8 flex flex-col h-full w-full border border-white/8 overflow-hidden relative">
                  {/* Illustration: scattered disconnected nodes */}
                  <svg
                    viewBox="0 0 160 130"
                    fill="none"
                    className="absolute bottom-0 right-0 w-44 h-36 opacity-[0.055] pointer-events-none"
                    aria-hidden="true"
                  >
                    <circle cx="24" cy="65" r="7" stroke="white" strokeWidth="1.5"/>
                    <circle cx="80" cy="18" r="7" stroke="white" strokeWidth="1.5"/>
                    <circle cx="136" cy="65" r="7" stroke="white" strokeWidth="1.5"/>
                    <circle cx="80" cy="112" r="7" stroke="white" strokeWidth="1.5"/>
                    <line x1="31" y1="61" x2="50" y2="44" stroke="white" strokeWidth="1" strokeDasharray="4 5"/>
                    <line x1="62" y1="30" x2="73" y2="22" stroke="white" strokeWidth="1" strokeDasharray="4 5"/>
                    <line x1="87" y1="18" x2="112" y2="42" stroke="white" strokeWidth="1" strokeDasharray="4 5"/>
                    <line x1="126" y1="58" x2="132" y2="62" stroke="white" strokeWidth="1" strokeDasharray="4 5"/>
                    <line x1="130" y1="72" x2="108" y2="95" stroke="white" strokeWidth="1" strokeDasharray="4 5"/>
                    <line x1="94" y1="108" x2="87" y2="112" stroke="white" strokeWidth="1" strokeDasharray="4 5"/>
                    <line x1="73" y1="112" x2="42" y2="94" stroke="white" strokeWidth="1" strokeDasharray="4 5"/>
                    <g transform="translate(54,41)">
                      <line x1="-5" y1="-5" x2="5" y2="5" stroke="white" strokeWidth="1.2"/>
                      <line x1="5" y1="-5" x2="-5" y2="5" stroke="white" strokeWidth="1.2"/>
                    </g>
                    <g transform="translate(113,96)">
                      <line x1="-5" y1="-5" x2="5" y2="5" stroke="white" strokeWidth="1.2"/>
                      <line x1="5" y1="-5" x2="-5" y2="5" stroke="white" strokeWidth="1.2"/>
                    </g>
                    <g transform="translate(38,92)">
                      <line x1="-4" y1="-4" x2="4" y2="4" stroke="white" strokeWidth="1"/>
                      <line x1="4" y1="-4" x2="-4" y2="4" stroke="white" strokeWidth="1"/>
                    </g>
                  </svg>
                  {/* Icon */}
                  <div className="mb-5">
                    <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9 text-white/30" aria-hidden="true">
                      <rect x="1" y="1" width="34" height="34" rx="8" stroke="currentColor" strokeWidth="1.2"/>
                      <line x1="11" y1="11" x2="25" y2="25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <line x1="25" y1="11" x2="11" y2="25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <p className="text-[10px] font-semibold tracking-[0.28em] uppercase text-white mb-4">
                    Sin nuestro sistema
                  </p>
                  <ul className="space-y-3.5 flex-1">
                    {WITHOUT.map(item => (
                      <li key={item} className="flex items-start gap-3 text-sm text-white/40 leading-snug">
                        <span className="mt-0.5 text-white/20 font-light shrink-0 leading-none text-base">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltedCard>
            </FadeIn>

            {/* Con sistema */}
            <FadeIn immediate delay={200} className="h-full">
              <TiltedCard rotateAmplitude={8} scaleOnHover={1.02}>
                <div className="liquid-glass rounded-2xl p-8 flex flex-col h-full w-full border border-white/12 overflow-hidden relative">
                  {/* Illustration: connected hub with inbound arrows */}
                  <svg
                    viewBox="0 0 160 130"
                    fill="none"
                    className="absolute bottom-0 right-0 w-44 h-36 opacity-[0.06] pointer-events-none"
                    aria-hidden="true"
                  >
                    <circle cx="80" cy="65" r="12" stroke="white" strokeWidth="1.5"/>
                    <circle cx="24" cy="65" r="6" stroke="white" strokeWidth="1.2"/>
                    <circle cx="80" cy="14" r="6" stroke="white" strokeWidth="1.2"/>
                    <circle cx="136" cy="65" r="6" stroke="white" strokeWidth="1.2"/>
                    <circle cx="80" cy="116" r="6" stroke="white" strokeWidth="1.2"/>
                    <line x1="30" y1="65" x2="68" y2="65" stroke="white" strokeWidth="1"/>
                    <line x1="80" y1="20" x2="80" y2="53" stroke="white" strokeWidth="1"/>
                    <line x1="130" y1="65" x2="92" y2="65" stroke="white" strokeWidth="1"/>
                    <line x1="80" y1="110" x2="80" y2="77" stroke="white" strokeWidth="1"/>
                    <path d="M64 61 L68 65 L64 69" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M84 26 L80 20 L76 26" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M96 61 L92 65 L96 69" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M76 104 L80 110 L84 104" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M73 65 L78 71 L87 57" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {/* Icon */}
                  <div className="mb-5">
                    <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9 text-white/40" aria-hidden="true">
                      <rect x="1" y="1" width="34" height="34" rx="8" stroke="currentColor" strokeWidth="1.2"/>
                      <path d="M11 18 L16 23 L25 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-[10px] font-semibold tracking-[0.28em] uppercase text-white mb-4">
                    Con nuestro sistema
                  </p>
                  <ul className="space-y-3.5 flex-1">
                    {WITH.map(item => (
                      <li key={item} className="flex items-start gap-3 text-sm text-white/65 leading-snug">
                        <svg className="mt-0.5 w-3.5 h-3.5 shrink-0 text-white/70" viewBox="0 0 14 14" fill="none">
                          <path d="M2.5 7.5l3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltedCard>
            </FadeIn>

          </div>

          {/* Math note */}
          <FadeIn immediate delay={280}>
            <p className="text-sm text-white/35 leading-relaxed text-center mb-5 max-w-2xl mx-auto">
              Si pierdes 3 clientes por semana a 120€ cada uno, estás perdiendo{' '}
              <span className="text-white/65 font-medium">1.440€ al mes</span>{' '}
              solo en leads sin respuesta. El sistema se paga solo en el primer mes.
            </p>
          </FadeIn>

          {/* Garantía — tarjeta propia */}
          <FadeIn immediate delay={360}>
            <TiltedCard rotateAmplitude={5} scaleOnHover={1.01}>
              <div className="liquid-glass rounded-2xl border border-white/10 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-14 w-full overflow-hidden relative">
                {/* Illustration: shield */}
                <svg
                  viewBox="0 0 140 140"
                  fill="none"
                  className="absolute right-0 top-0 w-52 h-52 opacity-[0.045] pointer-events-none"
                  aria-hidden="true"
                >
                  <path d="M70 8 L118 28 L118 78 Q118 114 70 130 Q22 114 22 78 L22 28 Z" stroke="white" strokeWidth="1.5"/>
                  <path d="M70 22 L104 38 L104 76 Q104 104 70 116 Q36 104 36 76 L36 38 Z" stroke="white" strokeWidth="0.8" strokeOpacity="0.6"/>
                  <path d="M50 72 L63 86 L90 58" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {/* Icon */}
                <div className="shrink-0">
                  <svg viewBox="0 0 48 54" fill="none" className="w-12 h-12 text-white/35" aria-hidden="true">
                    <path d="M24 3 L42 11 L42 31 Q42 44 24 50 Q6 44 6 31 L6 11 Z" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M15 27 L21 34 L33 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-medium tracking-[0.28em] uppercase text-white mb-2">Compromiso total</p>
                  <h3
                    className="font-black uppercase text-[#F8F9FA] mb-3"
                    style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', lineHeight: 0.92, letterSpacing: '-0.03em' }}
                  >
                    Garantía operativa<br />90 días
                  </h3>
                  <p className="text-sm text-white/45 leading-relaxed max-w-lg">
                    Si no reducimos tu carga operativa o aumentamos tus leads, trabajamos gratis hasta lograrlo. Sin excusas. Sin letra pequeña.
                  </p>
                </div>
              </div>
            </TiltedCard>
          </FadeIn>

        </div>
      </section>

      {/* Footer */}
      <div className="relative z-10 max-w-7xl w-full px-6 md:px-12 lg:px-16 pb-12 mt-auto mx-auto">
        <Footer />
      </div>

    </main>
  );
}

import FadeIn from '../components/FadeIn';
import { useState } from 'react';
import { NfcBackground, NfcNavbar, NfcEyebrow, NfcIconTile, NfcCard, NfcCtaBanner, NfcFooter, NFC_PALETTE } from '../components/nfc';
import { PRODUCTS, USE_CASES, FAQS } from '../data/nfcProducts';
import { ZONAS } from '../data/nfcZonas';
import { OrderForm } from '../components/NfcOrderForm';
import { FaqItem } from '../components/NfcFaqItem';
import {
  Wifi, Check, CircleDollarSign, Smartphone, Truck,
  Star, Instagram, UtensilsCrossed, MapPin, Cpu,
  Link2, RefreshCw,
} from 'lucide-react';

const STEPS = [
  { num: "01", title: "Acercas el móvil",       desc: "Sin apps ni cámara: solo acercar el teléfono a la tarjeta o placa.", Icon: Smartphone },
  { num: "02", title: "Se abre tu enlace",      desc: "El destino que hayas elegido se abre al instante — reseña, redes, carta o contacto.", Icon: Link2 },
  { num: "03", title: "Cambias cuando quieras", desc: "Actualiza el destino desde tu móvil, gratis, cuando lo necesites.", Icon: RefreshCw },
];

const WHY = [
  { Icon: CircleDollarSign, title: "Pago único",           desc: "Sin suscripción ni cuotas mensuales: pagas una vez y es tuyo." },
  { Icon: MapPin,           title: "Hecho en Gran Canaria", desc: "Diseñamos, configuramos y enviamos desde aquí, con soporte cercano en español." },
  { Icon: Truck,            title: "Envío rápido",          desc: "3-5 días en Gran Canaria, y a todas las islas y la península." },
  { Icon: Cpu,              title: "Integrable con IA",     desc: "Conecta tu NFC con los agentes de IA de AutomatizaGC para automatizar lo que pasa después de cada toque." },
];

const TRUST_BADGES = [
  { Icon: CircleDollarSign, label: "Pago único, sin cuotas" },
  { Icon: Smartphone,       label: "Sin apps para tu cliente" },
  { Icon: Truck,            label: "Hecho y enviado desde Gran Canaria" },
];

const NAV_ITEMS = [
  { name: "INICIO",     href: "/" },
  { name: "SERVICIOS",  href: "/servicios" },
  { name: "NFC",        href: "/nfc" },
  { name: "PROYECTOS",  href: "/proyectos" },
  { name: "ECOSISTEMA", href: "/ecosistema" },
  { name: "PRECIOS",    href: "/precios" },
];

const HEADING_STYLE = { fontFamily: 'var(--nfc-display)', fontWeight: 700, color: 'var(--nfc-ink)' } as const;

const LANDING_FAQS = [
  ...FAQS,
  { q: "¿Dónde está NFC Canarias?", a: "Estamos en Gran Canaria, en Vecindario (Santa Lucía de Tirajana). Diseñamos, configuramos y enviamos cada pedido desde aquí." },
  { q: "¿Hacéis entregas en toda Gran Canaria?", a: "Sí. Enviamos a Las Palmas de Gran Canaria, Telde, Santa Lucía de Tirajana, San Bartolomé de Tirajana, Maspalomas, Arucas y el resto de la isla en 3-5 días laborables." },
];

export default function Nfc() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden flex flex-col font-sans">
      <NfcBackground />
      <NfcNavbar navItems={NAV_ITEMS} logoHref="/" />

      {/* Hero */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 pt-36 pb-16 md:pt-44">
        {/* Mano — asoma desde arriba del todo, detrás de la navbar fija */}
        <img
          src="/nfc/hero/hand-tap.webp"
          alt=""
          aria-hidden="true"
          className="hidden lg:block absolute z-20 top-[90px] pointer-events-none select-none left-[calc(50%-60px)] -translate-x-1/2 w-[680px] xl:w-[820px]"
        />

        <div className="relative z-30 lg:flex lg:items-start lg:justify-between lg:gap-8">
          <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
            <FadeIn immediate><NfcEyebrow className="mb-5">NFC Canarias</NfcEyebrow></FadeIn>
            <FadeIn immediate delay={100}>
              <h1 className="uppercase leading-[0.98] mb-5" style={{ ...HEADING_STYLE, fontSize: 'clamp(2rem,4.6vw,3.2rem)' }}>
                Tu chip NFC{' '}
                <span className="inline-block px-1.5 rounded-md" style={{ background: 'var(--nfc-yellow)' }}>todo-en-uno</span>.
              </h1>
            </FadeIn>
            <FadeIn immediate delay={200}>
              <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: 'var(--nfc-ink2)' }}>
                Reseñas de Google, redes sociales, carta digital y contacto — todo en un solo
                toque del móvil. Sin apps para tu cliente, sin suscripción.
              </p>
            </FadeIn>
            <FadeIn immediate delay={250}>
              <a href="#como-funciona" className="inline-block font-bold text-sm underline underline-offset-4" style={{ color: 'var(--nfc-ink)' }}>
                Ver cómo funciona
              </a>
            </FadeIn>
          </div>

          {/* Cobertura — encaja en el hueco a la derecha de la mano en desktop; en móvil se apila bajo el H1 */}
          <div className="max-w-[260px] mx-auto lg:mx-0 mt-8 lg:mt-0 text-center lg:text-right shrink-0">
            <FadeIn immediate><NfcEyebrow className="mb-5">Dónde estamos</NfcEyebrow></FadeIn>
            <FadeIn immediate delay={100}>
              <p className="leading-[0.98]" style={{ ...HEADING_STYLE, fontSize: 'clamp(2rem,4.6vw,3.2rem)' }}>
                De Gran Canaria a toda España.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Composición visual */}
        <FadeIn immediate delay={300}>
          <div className="relative max-w-3xl mx-auto mt-12 mb-8 px-2 md:px-6">
            {/* Tarjeta izquierda, asomando */}
            <div className="hidden lg:block absolute left-0 top-2 w-48 -rotate-6 z-20">
              <NfcCard tabColor="var(--nfc-lavender)" shadow="sm" className="p-5">
                <div className="flex items-center gap-2 mb-2.5">
                  <div className="w-7 h-7 rounded-full border-[2px] flex items-center justify-center shrink-0" style={{ background: 'var(--nfc-yellow)', borderColor: 'var(--nfc-border)' }}>
                    <Star className="w-3.5 h-3.5" style={{ color: 'var(--nfc-ink)' }} />
                  </div>
                  <span className="font-mono text-[9px] font-bold uppercase tracking-wide" style={{ color: 'var(--nfc-ink3)' }}>Un solo toque</span>
                </div>
                <p className="text-[13px] font-bold leading-snug" style={{ color: 'var(--nfc-ink)' }}>Reseñas de Google al instante</p>
              </NfcCard>
            </div>

            {/* Tarjeta central */}
            <div
              className="relative z-10 max-w-sm mx-auto -mt-10 rounded-[28px] border-[2.5px] p-8 flex flex-col items-center gap-6"
              style={{ borderColor: 'var(--nfc-border)', background: 'var(--nfc-yellow)', boxShadow: '9px 9px 0 var(--nfc-border)' }}
            >
              <div
                className="w-full max-w-[240px] aspect-[16/10] rounded-[20px] border-[2.5px] flex flex-col justify-between p-6"
                style={{ borderColor: 'var(--nfc-border)', background: 'var(--nfc-ink)', boxShadow: '5px 5px 0 var(--nfc-border)' }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/80">NFC Canarias</span>
                  <Wifi className="w-5 h-5 -rotate-90" style={{ color: 'var(--nfc-yellow)' }} />
                </div>
                <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/50">Toca aquí</span>
              </div>
              <a
                href="#pedido"
                className="nfc-press w-full text-center rounded-2xl font-bold text-sm border-[2.5px] px-7 py-3.5"
                style={{ background: 'var(--nfc-paper)', color: 'var(--nfc-ink)', borderColor: 'var(--nfc-border)', boxShadow: '4px 4px 0 var(--nfc-border)' }}
              >
                Pide la tuya
              </a>
            </div>

            {/* Tarjeta derecha, asomando */}
            <div className="hidden lg:block absolute right-0 top-10 w-48 rotate-6 z-20">
              <NfcCard tabColor="var(--nfc-green)" shadow="sm" className="p-5">
                <p className="font-mono text-[9px] font-bold uppercase tracking-wide mb-2.5" style={{ color: 'var(--nfc-ink3)' }}>Todo en un toque</p>
                <div className="flex flex-wrap gap-1.5">
                  {[Star, Instagram, UtensilsCrossed, Wifi].map((Ic, idx) => (
                    <div key={idx} className="w-7 h-7 rounded-lg border-[2px] flex items-center justify-center" style={{ background: 'var(--nfc-paper)', borderColor: 'var(--nfc-border)' }}>
                      <Ic className="w-3.5 h-3.5" style={{ color: 'var(--nfc-ink)' }} />
                    </div>
                  ))}
                </div>
              </NfcCard>
            </div>
          </div>
        </FadeIn>

        {/* Franja de confianza */}
        <FadeIn immediate delay={400}>
          <div
            className="max-w-4xl mx-auto mt-4 rounded-[24px] border-[2.5px] px-6 py-5 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4"
            style={{ borderColor: 'var(--nfc-border)', background: 'var(--nfc-paper)', boxShadow: '5px 5px 0 var(--nfc-border)' }}
          >
            <p className="font-bold text-[15px] text-center md:text-left" style={{ color: 'var(--nfc-ink)' }}>
              Sin apps. Sin suscripción.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {TRUST_BADGES.map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-2 rounded-full border-[2px] px-3 py-1.5" style={{ borderColor: 'var(--nfc-border)' }}>
                  <Icon className="w-3.5 h-3.5" style={{ color: 'var(--nfc-ink)' }} />
                  <span className="font-mono text-[10px] uppercase tracking-wide" style={{ color: 'var(--nfc-ink2)' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Selector de producto */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 py-16" id="productos">
        <div className="max-w-[96rem] mx-auto">
          <div className="text-center mb-12">
            <NfcEyebrow className="mb-4">Elige tu formato</NfcEyebrow>
            <h2 style={{ ...HEADING_STYLE, fontSize: 'clamp(1.8rem,3.4vw,2.8rem)' }}>
              Un pago único. Para siempre tuyo.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 pt-3">
            {PRODUCTS.map((p) => {
              const color = p.color;
              return (
                <a key={p.name} href={`/nfc/${p.slug}`} className="block h-full transition-transform duration-200 ease-out hover:-translate-y-1.5">
                <NfcCard tabColor={color} shadow={p.featured ? 'lg' : 'md'} className="overflow-hidden flex flex-col">
                  {/* Cabecera visual */}
                  <div className="relative w-full aspect-square shrink-0 overflow-hidden" style={{ background: color }}>
                    <img
                      src={p.image}
                      alt={`${p.name} — tarjeta NFC Gran Canaria`}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    {p.featured && (
                      <span
                        className="absolute top-3 right-3 font-mono text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full border-[2px]"
                        style={{ background: 'var(--nfc-paper)', borderColor: 'var(--nfc-border)', color: 'var(--nfc-ink)' }}
                      >
                        Más pedido
                      </span>
                    )}
                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl border-[2.5px] flex items-center justify-center" style={{ background: 'var(--nfc-paper)', borderColor: 'var(--nfc-border)' }}>
                      <p.Icon className="w-4.5 h-4.5" style={{ color: 'var(--nfc-ink)' }} />
                    </div>
                  </div>
                  {/* Contenido */}
                  <div className="p-4 flex flex-col gap-2.5 flex-1">
                    <h3 className="text-base font-bold leading-tight" style={{ color }}>{p.name}</h3>
                    <p className="text-[12px] leading-relaxed" style={{ color: 'var(--nfc-ink2)' }}>{p.desc}</p>
                    <ul className="space-y-1.5">
                      {p.items.map(item => (
                        <li key={item} className="flex items-start gap-2 text-[11px] leading-snug" style={{ color: 'var(--nfc-ink2)' }}>
                          <Check className="w-3 h-3 shrink-0 mt-0.5" style={{ color: 'var(--nfc-ink)' }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto flex items-center justify-between gap-2 pt-3 border-t-[2px]" style={{ borderColor: 'var(--nfc-divider)' }}>
                      <p className="font-mono text-lg font-bold" style={{ color: 'var(--nfc-ink)' }}>{p.price}</p>
                      <span
                        className="nfc-press inline-flex items-center justify-center gap-2 rounded-2xl font-bold border-[2.5px] text-[12px] px-3.5 py-2"
                        style={{ background: 'var(--nfc-accent)', color: 'var(--nfc-ink)', borderColor: 'var(--nfc-border)', boxShadow: '4px 4px 0 var(--nfc-border)' }}
                      >
                        Elegir
                      </span>
                    </div>
                    <p className="text-[10px] font-mono uppercase tracking-wide" style={{ color: 'var(--nfc-ink3)' }}>Precio orientativo, a confirmar</p>
                  </div>
                </NfcCard>
                </a>
              );
            })}
          </div>
          <div className="mt-10">
            <NfcCtaBanner
              eyebrow="¿Ya tienes claro cuál quieres?"
              title="Resérvala hoy y la tendrás lista para tu negocio en pocos días."
              buttonLabel="Pide la tuya"
              buttonHref="#pedido"
            />
          </div>
        </div>
      </section>

      {/* Derivaciones de uso */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 py-16" style={{ background: 'var(--nfc-warm)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <NfcEyebrow className="mb-4">Un solo toque, muchos destinos</NfcEyebrow>
            <h2 style={{ ...HEADING_STYLE, fontSize: 'clamp(1.8rem,3.4vw,2.8rem)' }}>
              Todo lo que puede hacer tu NFC.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-3">
            {USE_CASES.map(({ Icon, title, desc }, i) => {
              const color = NFC_PALETTE[i % NFC_PALETTE.length];
              return (
                <NfcCard key={title} tabColor={color} className="p-6 flex flex-col gap-3">
                  <NfcIconTile Icon={Icon} color={color} />
                  <h3 className="text-[15px] font-bold" style={{ color: 'var(--nfc-ink)' }}>{title}</h3>
                  <p className="text-[12.5px] leading-relaxed" style={{ color: 'var(--nfc-ink2)' }}>{desc}</p>
                </NfcCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cómo funciona — diagrama de flujo en zigzag, tipo "plano técnico" */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 py-16" id="como-funciona">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <NfcEyebrow className="mb-4">Sin apps, sin complicaciones</NfcEyebrow>
            <h2 style={{ ...HEADING_STYLE, fontSize: 'clamp(1.8rem,3.4vw,2.8rem)' }}>
              Cómo funciona.
            </h2>
          </div>

          <div
            className="relative rounded-[28px] border-[2.5px] overflow-hidden p-8 py-14 md:p-14"
            style={{ borderColor: 'var(--nfc-border)', background: 'var(--nfc-warm)', boxShadow: '8px 8px 0 var(--nfc-border)' }}
          >
            {/* Cuadrícula tipo plano técnico */}
            <div
              className="absolute inset-0 opacity-[0.35] pointer-events-none"
              style={{
                backgroundImage: 'linear-gradient(var(--nfc-divider) 1px, transparent 1px), linear-gradient(90deg, var(--nfc-divider) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />
            {/* Marcas de esquina tipo "plano" */}
            {['top-4 left-4', 'top-4 right-4', 'bottom-4 left-4', 'bottom-4 right-4'].map(pos => (
              <div key={pos} className={`absolute ${pos} w-3 h-3 rounded-full border-[2px]`} style={{ borderColor: 'var(--nfc-border)' }} />
            ))}

            {/* Conectores curvos (decorativos, solo desktop) */}
            <svg className="absolute inset-0 w-full h-full hidden md:block" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M 74 20 C 74 32, 26 34, 26 46" fill="none" stroke="var(--nfc-border)" strokeWidth="0.5" />
              <path d="M 26 56 C 26 68, 74 70, 74 82" fill="none" stroke="var(--nfc-border)" strokeWidth="0.5" />
              <circle cx="74" cy="20" r="1" fill="var(--nfc-border)" />
              <circle cx="26" cy="46" r="1" fill="var(--nfc-border)" />
              <circle cx="26" cy="56" r="1" fill="var(--nfc-border)" />
              <circle cx="74" cy="82" r="1" fill="var(--nfc-border)" />
            </svg>

            {/* Nodos en zigzag */}
            <div className="relative flex flex-col gap-14 md:gap-20 max-w-md mx-auto">
              {STEPS.map((s, i) => {
                const color = NFC_PALETTE[i % NFC_PALETTE.length];
                const rightAligned = i % 2 === 0;
                return (
                  <div key={s.num} className={`flex flex-col gap-2 w-[82%] sm:w-[75%] ${rightAligned ? 'self-end items-end text-right' : 'self-start items-start text-left'}`}>
                    <div
                      className="inline-flex items-center gap-3 rounded-full border-[2.5px] pl-2.5 pr-5 py-2.5"
                      style={{ background: color, borderColor: 'var(--nfc-border)', boxShadow: '4px 4px 0 var(--nfc-border)' }}
                    >
                      <div className="w-9 h-9 rounded-full border-[2px] flex items-center justify-center shrink-0" style={{ background: 'var(--nfc-paper)', borderColor: 'var(--nfc-border)' }}>
                        <s.Icon className="w-4 h-4" style={{ color: 'var(--nfc-ink)' }} />
                      </div>
                      <span className="font-mono text-[10px] font-bold" style={{ color: 'var(--nfc-ink)' }}>{s.num}</span>
                      <span className="font-bold text-[14px] md:text-[15px]" style={{ color: 'var(--nfc-ink)' }}>{s.title}</span>
                    </div>
                    <p className="text-[12px] leading-relaxed px-1" style={{ color: 'var(--nfc-ink2)' }}>{s.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Por qué NFC Canarias */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 py-16" style={{ background: 'var(--nfc-warm)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <NfcEyebrow className="mb-4">Por qué NFC Canarias</NfcEyebrow>
            <h2 style={{ ...HEADING_STYLE, fontSize: 'clamp(1.8rem,3.4vw,2.8rem)' }}>
              Hecho aquí. Pensado para negocios reales.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-3">
            {WHY.map(({ Icon, title, desc }, i) => {
              const color = NFC_PALETTE[i % NFC_PALETTE.length];
              return (
                <NfcCard key={title} tabColor={color} className="p-6 flex flex-col gap-3">
                  <NfcIconTile Icon={Icon} color={color} size="sm" />
                  <h3 className="text-[14px] font-bold" style={{ color: 'var(--nfc-ink)' }}>{title}</h3>
                  <p className="text-[12px] leading-relaxed" style={{ color: 'var(--nfc-ink2)' }}>{desc}</p>
                </NfcCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cobertura */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <NfcEyebrow className="mb-4">Dónde estamos</NfcEyebrow>
          <h2 className="mb-5" style={{ ...HEADING_STYLE, fontSize: 'clamp(1.8rem,3.4vw,2.8rem)' }}>
            De Gran Canaria a toda España.
          </h2>
          <p className="text-[14px] md:text-base leading-relaxed" style={{ color: 'var(--nfc-ink2)' }}>
            Diseñamos y preparamos cada pedido en Gran Canaria, desde Vecindario (Santa Lucía de
            Tirajana), y damos servicio a negocios de Las Palmas de Gran Canaria, Telde, Santa
            Lucía de Tirajana, San Bartolomé de Tirajana, Maspalomas, Arucas y el resto de la
            isla. Enviamos también al resto de Canarias (Tenerife, Lanzarote, Fuerteventura, La
            Palma, La Gomera, El Hierro) y a toda España peninsular.
          </p>
          <p className="text-[14px] md:text-base leading-relaxed mt-4" style={{ color: 'var(--nfc-ink2)' }}>
            En Gran Canaria trabajamos con restaurantes y cafeterías que quieren su carta siempre
            actualizada, alojamientos turísticos que comparten el WiFi sin escribirlo a mano,
            peluquerías, comercios locales e inmobiliarias que necesitan más reseñas de Google, y
            cualquier negocio que quiera compartir sus redes y su contacto en un solo toque.
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-5">
            {ZONAS.map(z => (
              <a key={z.slug} href={`/nfc/${z.slug}`} className="font-bold text-sm underline underline-offset-4" style={{ color: 'var(--nfc-ink)' }}>
                Tarjeta NFC en {z.isla}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 py-16" style={{ background: 'var(--nfc-warm)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <NfcEyebrow className="mb-4">Preguntas frecuentes</NfcEyebrow>
            <h2 style={{ ...HEADING_STYLE, fontSize: 'clamp(1.8rem,3.4vw,2.8rem)' }}>
              Resolvemos tus dudas.
            </h2>
          </div>
          <NfcCard tabColor="var(--nfc-tan)" className="px-6 md:px-8">
            {LANDING_FAQS.map((f, i) => (
              <FaqItem key={f.q} q={f.q} a={f.a} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} id={`faq-answer-${i}`} />
            ))}
          </NfcCard>
        </div>
      </section>

      {/* Formulario de pedido */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 py-16" id="pedido">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <NfcEyebrow className="mb-4">Pide la tuya</NfcEyebrow>
            <h2 style={{ ...HEADING_STYLE, fontSize: 'clamp(1.8rem,3.4vw,2.8rem)' }}>
              Cuéntanos sobre tu negocio.
            </h2>
          </div>
          <OrderForm />
        </div>
      </section>

      <div className="relative z-10 max-w-7xl w-full px-4 md:px-8 lg:px-16 pb-12 mt-auto mx-auto">
        <NfcFooter />
      </div>
    </main>
  );
}

import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Sections';
import FadeIn from '../components/FadeIn';
import { NfcBackground, NfcEyebrow, NfcButton, NfcGhostButton } from '../components/nfc';
import { Wifi, Check, CircleDollarSign, Smartphone, Truck } from 'lucide-react';

const PRODUCTS = [
  {
    name: "Tarjeta NFC",
    price: "19€",
    desc: "Tarjeta individual, tamaño de visita, para ti o cada miembro de tu equipo.",
    items: ["1 tarjeta NFC personalizada", "Enlace configurable (reseñas, redes, contacto)", "Envío en 3-5 días en Gran Canaria"],
    featured: false,
  },
  {
    name: "Placa de Mostrador",
    price: "39€",
    desc: "Placa de sobremesa para el mostrador, visible para cada cliente que pasa por caja.",
    items: ["1 placa NFC de mostrador", "Diseño a juego con tu marca", "Ideal para pedir reseñas en el momento del pago"],
    featured: true,
  },
  {
    name: "Pack Negocio",
    price: "89€",
    desc: "Todo lo que necesita tu negocio: placa de mostrador + 3 tarjetas para el equipo.",
    items: ["1 placa + 3 tarjetas NFC", "Todos los enlaces configurables desde el móvil", "Soporte prioritario por WhatsApp"],
    featured: false,
  },
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

export default function Nfc() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden flex flex-col font-sans">
      <NfcBackground />
      <Navbar navItems={NAV_ITEMS} logoHref="/" />

      {/* Hero */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 pt-36 pb-16 md:pt-44">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <FadeIn immediate><NfcEyebrow className="mb-4">NFC Canarias</NfcEyebrow></FadeIn>
            <FadeIn immediate delay={100}>
              <h1
                className="italic leading-[1.02] mb-6"
                style={{ fontFamily: 'var(--nfc-serif)', color: 'var(--nfc-ink)', fontSize: 'clamp(2.4rem,5vw,4.4rem)' }}
              >
                Tu tarjeta NFC<br />todo-en-uno.
              </h1>
            </FadeIn>
            <FadeIn immediate delay={200}>
              <p className="text-base md:text-lg leading-relaxed max-w-lg mb-8" style={{ color: 'var(--nfc-ink2)' }}>
                Reseñas de Google, redes sociales, carta digital y contacto — todo en un solo
                toque del móvil. Sin apps para tu cliente, sin suscripción. Hecha en Gran
                Canaria, enviada a toda Canarias y España.
              </p>
            </FadeIn>
            <FadeIn immediate delay={300} className="flex flex-wrap gap-3">
              <NfcButton href="#pedido">Pide la tuya</NfcButton>
              <NfcGhostButton href="#como-funciona">Cómo funciona</NfcGhostButton>
            </FadeIn>
          </div>
          <FadeIn immediate delay={200}>
            <div
              className="relative rounded-2xl overflow-hidden border aspect-[4/5] flex items-center justify-center p-10"
              style={{ borderColor: 'var(--nfc-line)', background: 'linear-gradient(155deg, #FFFDF8 0%, var(--nfc-paper) 60%)', boxShadow: '8px 8px 0 var(--nfc-accent)' }}
            >
              <div
                className="w-full max-w-[260px] aspect-[16/10] rounded-2xl border flex flex-col justify-between p-6"
                style={{ borderColor: 'var(--nfc-line)', background: 'var(--nfc-ink)', boxShadow: '4px 4px 0 var(--nfc-accent)' }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/70">NFC Canarias</span>
                  <Wifi className="w-5 h-5 -rotate-90" style={{ color: 'var(--nfc-accent)' }} />
                </div>
                <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/40">Toca aquí</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Franja de confianza */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 pb-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-4">
          {TRUST_BADGES.map(({ Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5">
              <Icon className="w-4 h-4" style={{ color: 'var(--nfc-accent)' }} />
              <span className="font-mono text-[11px] tracking-wide uppercase" style={{ color: 'var(--nfc-ink2)' }}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Selector de producto */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 py-16" id="productos">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <NfcEyebrow className="mb-3">Elige tu formato</NfcEyebrow>
            <h2 className="italic" style={{ fontFamily: 'var(--nfc-serif)', color: 'var(--nfc-ink)', fontSize: 'clamp(1.8rem,3.4vw,2.8rem)' }}>
              Un pago único. Para siempre tuyo.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => (
              <div
                key={p.name}
                className="rounded-2xl p-7 flex flex-col gap-4 border"
                style={{
                  borderColor: p.featured ? 'var(--nfc-accent)' : 'var(--nfc-line)',
                  background: 'var(--nfc-paper)',
                  boxShadow: p.featured ? '5px 5px 0 var(--nfc-accent)' : '3px 3px 0 var(--nfc-line)',
                }}
              >
                {p.featured && (
                  <span
                    className="font-mono text-[10px] tracking-[0.15em] uppercase self-start px-2.5 py-1 rounded-full"
                    style={{ background: 'var(--nfc-accent)', color: 'var(--nfc-paper)' }}
                  >
                    Más pedido
                  </span>
                )}
                <h3 className="text-xl font-bold" style={{ color: 'var(--nfc-ink)' }}>{p.name}</h3>
                <p className="font-mono text-2xl" style={{ color: 'var(--nfc-accent)' }}>{p.price}</p>
                <p className="text-[13px] leading-relaxed" style={{ color: 'var(--nfc-ink2)' }}>{p.desc}</p>
                <ul className="mt-auto space-y-2 pt-4 border-t" style={{ borderColor: 'var(--nfc-line)' }}>
                  {p.items.map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-[12px]" style={{ color: 'var(--nfc-ink2)' }}>
                      <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: 'var(--nfc-accent)' }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-[10px] font-mono uppercase tracking-wide" style={{ color: 'var(--nfc-ink3)' }}>Precio orientativo, a confirmar</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative z-10 max-w-7xl w-full px-6 md:px-12 lg:px-16 pb-12 mt-auto mx-auto">
        <Footer />
      </div>
    </main>
  );
}

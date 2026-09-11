import FadeIn from '../components/FadeIn';
import { useState, useEffect } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { NfcBackground, NfcNavbar, NfcEyebrow, NfcButton, NfcIconTile, NfcCard, NfcCtaBanner, NfcFooter, NFC_PALETTE } from '../components/nfc';
import {
  Wifi, Check, CircleDollarSign, Smartphone, Truck,
  Star, IdCard, UtensilsCrossed, Instagram, MessageCircle, MapPin, Cpu, ChevronDown,
  CreditCard, MonitorSmartphone, Layers, Tag, LayoutGrid, Link2, RefreshCw,
} from 'lucide-react';

const FAQS = [
  { q: "¿Funciona con cualquier móvil?", a: "Sí. Funciona con iPhone 7 o superior y con prácticamente cualquier Android de los últimos años. No hace falta instalar ninguna app para usarlo, solo para configurarlo." },
  { q: "¿Necesita batería o cargarse?", a: "No. La tecnología NFC es pasiva: no lleva batería ni necesita cargarse nunca." },
  { q: "¿Puedo cambiar el enlace después?", a: "Sí, cuando quieras y gratis, desde la app gratuita NFC Tools, sin volver a comprar nada." },
  { q: "¿Cuánto tarda el envío?", a: "3-5 días laborables en Gran Canaria. Al resto de Canarias y a la península, entre 4 y 7 días." },
  { q: "¿Necesita que el negocio tenga wifi o conexión?", a: "No. El teléfono del cliente necesita conexión para abrir el enlace, pero la tarjeta o placa no necesita electricidad ni wifi propio." },
  { q: "¿Tiene garantía?", a: "Sí, 12 meses de garantía por defectos de fabricación. Si el chip falla, lo reponemos sin coste." },
];

type NfcFormState = { nombre: string; negocio: string; isla: string; whatsapp: string; producto: string; mensaje: string };

const ISLAS = ["Gran Canaria", "Tenerife", "Lanzarote", "Fuerteventura", "La Palma", "La Gomera", "El Hierro", "Península / resto de España"];

const NFC_INPUT_CLASS = "w-full rounded-xl px-4 py-3 text-sm border-[2px] focus:outline-none";
const NFC_INPUT_STYLE = { borderColor: 'var(--nfc-border)', background: 'var(--nfc-paper)', color: 'var(--nfc-ink)' };
const NFC_LABEL_CLASS = "block font-mono text-[10px] tracking-[0.15em] uppercase mb-2";

function OrderForm({ preselected }: { preselected: string | null }) {
  const [form, setForm] = useState<NfcFormState>({ nombre: '', negocio: '', isla: 'Gran Canaria', whatsapp: '', producto: preselected ?? PRODUCTS[0].name, mensaje: '' });
  const [sent, setSent] = useState(false);
  const LEAD_EMAIL = 'automatizagc@gmail.com';

  useEffect(() => {
    if (preselected) setForm(prev => ({ ...prev, producto: preselected }));
  }, [preselected]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    fetch(`https://formsubmit.co/ajax/${LEAD_EMAIL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        _subject: `Nuevo pedido NFC Canarias — ${form.nombre || 'sin nombre'}`,
        _template: 'table',
        Nombre: form.nombre,
        Negocio: form.negocio || '—',
        Isla: form.isla,
        WhatsApp: form.whatsapp || '—',
        'Producto de interés': form.producto,
        Mensaje: form.mensaje || '—',
      }),
    }).catch(() => {});

    const lines = [
      `*Nuevo pedido NFC Canarias*`, ``,
      `👤 *Nombre:* ${form.nombre}`,
      form.negocio ? `🏪 *Negocio:* ${form.negocio}` : '',
      `📍 *Isla:* ${form.isla}`,
      form.whatsapp ? `📱 *WhatsApp:* ${form.whatsapp}` : '', ``,
      `🎯 *Producto:* ${form.producto}`, ``,
      form.mensaje ? `📝 *Mensaje:*\n${form.mensaje}` : '',
    ].filter(Boolean);
    window.open(`https://wa.me/34696859840?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener,noreferrer');

    setSent(true);
  };

  if (sent) {
    return (
      <NfcCard tabColor="var(--nfc-green)" className="p-8 text-center">
        <p className="text-lg font-bold mb-2" style={{ color: 'var(--nfc-ink)' }}>¡Pedido recibido!</p>
        <p className="text-[13px]" style={{ color: 'var(--nfc-ink2)' }}>Te escribimos por WhatsApp en menos de 24h para confirmar los detalles.</p>
      </NfcCard>
    );
  }

  return (
    <NfcCard tabColor="var(--nfc-yellow)" shadow="lg" className="p-7 md:p-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="nfc-nombre" className={NFC_LABEL_CLASS} style={{ color: 'var(--nfc-ink3)' }}>Nombre</label>
            <input id="nfc-nombre" name="nombre" type="text" required value={form.nombre} onChange={handleChange} placeholder="Tu nombre" className={NFC_INPUT_CLASS} style={NFC_INPUT_STYLE} />
          </div>
          <div>
            <label htmlFor="nfc-negocio" className={NFC_LABEL_CLASS} style={{ color: 'var(--nfc-ink3)' }}>Negocio</label>
            <input id="nfc-negocio" name="negocio" type="text" value={form.negocio} onChange={handleChange} placeholder="Nombre de tu negocio" className={NFC_INPUT_CLASS} style={NFC_INPUT_STYLE} />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="nfc-isla" className={NFC_LABEL_CLASS} style={{ color: 'var(--nfc-ink3)' }}>Isla / ubicación</label>
            <select id="nfc-isla" name="isla" value={form.isla} onChange={handleChange} className={NFC_INPUT_CLASS} style={NFC_INPUT_STYLE}>
              {ISLAS.map(i => <option key={i} value={i}>{i}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="nfc-whatsapp" className={NFC_LABEL_CLASS} style={{ color: 'var(--nfc-ink3)' }}>WhatsApp</label>
            <input id="nfc-whatsapp" name="whatsapp" type="tel" value={form.whatsapp} onChange={handleChange} placeholder="+34 000 000 000" className={NFC_INPUT_CLASS} style={NFC_INPUT_STYLE} />
          </div>
        </div>
        <div>
          <label htmlFor="nfc-producto" className={NFC_LABEL_CLASS} style={{ color: 'var(--nfc-ink3)' }}>Producto de interés</label>
          <select id="nfc-producto" name="producto" value={form.producto} onChange={handleChange} className={NFC_INPUT_CLASS} style={NFC_INPUT_STYLE}>
            {PRODUCTS.map(p => <option key={p.name} value={p.name}>{p.name} — {p.price}</option>)}
            <option value="No lo sé todavía">No lo sé todavía</option>
          </select>
        </div>
        <div>
          <label htmlFor="nfc-mensaje" className={NFC_LABEL_CLASS} style={{ color: 'var(--nfc-ink3)' }}>
            Mensaje <span className="normal-case font-sans" style={{ color: 'var(--nfc-ink3)' }}>(opcional)</span>
          </label>
          <textarea id="nfc-mensaje" name="mensaje" rows={3} value={form.mensaje} onChange={handleChange} placeholder="Cuéntanos algo más sobre tu negocio o pedido" className={`${NFC_INPUT_CLASS} resize-none`} style={NFC_INPUT_STYLE} />
        </div>
        <NfcButton type="submit" className="w-full justify-center">Enviar pedido</NfcButton>
      </form>
    </NfcCard>
  );
}

function FaqItem({ q, a, isOpen, onToggle, id }: { q: string; a: string; isOpen: boolean; onToggle: () => void; id: string }) {
  return (
    <div className="border-b-[2px] last:border-b-0" style={{ borderColor: 'var(--nfc-divider)' }}>
      <button type="button" onClick={onToggle} aria-expanded={isOpen} aria-controls={id} className="w-full flex items-center justify-between gap-4 py-5 text-left">
        <span className="text-[14px] md:text-[15px] font-bold" style={{ color: 'var(--nfc-ink)' }}>{q}</span>
        <ChevronDown
          className="w-5 h-5 shrink-0 transition-transform duration-200"
          style={{ color: 'var(--nfc-ink)', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>
      {isOpen && <p id={id} className="text-[13px] leading-relaxed pb-5 pr-8" style={{ color: 'var(--nfc-ink2)' }}>{a}</p>}
    </div>
  );
}

const USE_CASES = [
  { Icon: Star,             title: "Reseñas de Google",         desc: "Un toque lleva directo a dejar una reseña en Google, sin buscar ni escribir el nombre del negocio." },
  { Icon: IdCard,           title: "Tarjeta de visita digital", desc: "Comparte tu contacto, cargo y redes al instante, sin quedarte sin tarjetas de papel." },
  { Icon: UtensilsCrossed,  title: "Carta o menú digital",      desc: "Perfecto para bares y restaurantes: la carta siempre actualizada, sin reimprimir." },
  { Icon: Instagram,        title: "Redes sociales",            desc: "Lleva a tu Instagram, Facebook o TikTok en un toque, sin que el cliente tenga que buscarte." },
  { Icon: Wifi,             title: "WiFi del local",            desc: "Comparte la contraseña del WiFi sin que nadie tenga que preguntarla ni teclearla." },
  { Icon: MessageCircle,    title: "Contacto directo",          desc: "Abre WhatsApp o una ficha de contacto lista para guardar, sin pedir el número." },
];

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

const PRODUCTS = [
  {
    name: "Tag NFC",
    price: "12€",
    desc: "El punto de partida: una pegatina NFC discreta para pegar donde haga falta.",
    items: ["1 tag NFC adhesivo", "Enlace configurable", "Ideal para probar antes de pedir más"],
    featured: false,
    Icon: Tag,
  },
  {
    name: "Tarjeta NFC",
    price: "19€",
    desc: "Tarjeta individual, tamaño de visita, para ti o cada miembro de tu equipo.",
    items: ["1 tarjeta NFC personalizada", "Enlace configurable (reseñas, redes, contacto)", "Envío en 3-5 días en Gran Canaria"],
    featured: false,
    Icon: CreditCard,
  },
  {
    name: "Placa de Mostrador",
    price: "39€",
    desc: "Placa de sobremesa para el mostrador, visible para cada cliente que pasa por caja.",
    items: ["1 placa NFC de mostrador", "Diseño a juego con tu marca", "Ideal para pedir reseñas en el momento del pago"],
    featured: true,
    Icon: MonitorSmartphone,
  },
  {
    name: "Expositor Multi-Enlace",
    price: "69€",
    desc: "Expositor de sobremesa con varios puntos de toque a la vez, cada uno con su propio destino.",
    items: ["1 expositor con 3 zonas de toque", "Reseñas, redes y contacto por separado", "Pensado para mostradores con mucho tráfico"],
    featured: false,
    Icon: LayoutGrid,
  },
  {
    name: "Pack Negocio",
    price: "89€",
    desc: "Todo lo que necesita tu negocio: placa de mostrador + 3 tarjetas para el equipo.",
    items: ["1 placa + 3 tarjetas NFC", "Todos los enlaces configurables desde el móvil", "Soporte prioritario por WhatsApp"],
    featured: false,
    Icon: Layers,
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

const HEADING_STYLE = { fontFamily: 'var(--nfc-display)', fontWeight: 700, color: 'var(--nfc-ink)' } as const;

export default function Nfc() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

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

        <div className="relative z-30 max-w-3xl mx-auto text-center">
          <FadeIn immediate><NfcEyebrow className="mb-5">NFC Canarias</NfcEyebrow></FadeIn>
          <FadeIn immediate delay={100}>
            <h1 className="uppercase leading-[0.98] mb-5" style={{ ...HEADING_STYLE, fontSize: 'clamp(2rem,4.6vw,3.2rem)' }}>
              Tu tarjeta NFC{' '}
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
                onClick={() => setSelectedProduct(null)}
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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <NfcEyebrow className="mb-4">Elige tu formato</NfcEyebrow>
            <h2 style={{ ...HEADING_STYLE, fontSize: 'clamp(1.8rem,3.4vw,2.8rem)' }}>
              Un pago único. Para siempre tuyo.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 pt-3">
            {PRODUCTS.map((p, i) => {
              const color = NFC_PALETTE[i % NFC_PALETTE.length];
              return (
                <NfcCard key={p.name} tabColor={color} shadow={p.featured ? 'lg' : 'md'} className="overflow-hidden flex flex-col">
                  {/* Cabecera visual */}
                  <div className="relative w-full aspect-[4/3] flex items-center justify-center shrink-0" style={{ background: color }}>
                    {p.featured && (
                      <span
                        className="absolute top-3 right-3 font-mono text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full border-[2px]"
                        style={{ background: 'var(--nfc-paper)', borderColor: 'var(--nfc-border)', color: 'var(--nfc-ink)' }}
                      >
                        Más pedido
                      </span>
                    )}
                    <div className="w-14 h-14 rounded-2xl border-[2.5px] flex items-center justify-center" style={{ background: 'var(--nfc-paper)', borderColor: 'var(--nfc-border)' }}>
                      <p.Icon className="w-6 h-6" style={{ color: 'var(--nfc-ink)' }} />
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
                      <NfcButton href="#pedido" onClick={() => setSelectedProduct(p.name)} className="text-[12px] px-3.5 py-2">Elegir</NfcButton>
                    </div>
                    <p className="text-[10px] font-mono uppercase tracking-wide" style={{ color: 'var(--nfc-ink3)' }}>Precio orientativo, a confirmar</p>
                  </div>
                </NfcCard>
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
            Diseñamos y preparamos cada pedido en Gran Canaria, y damos servicio a negocios de
            Las Palmas de Gran Canaria, Telde, Santa Lucía de Tirajana, San Bartolomé de
            Tirajana, Maspalomas, Arucas y el resto de la isla. Enviamos también al resto de
            Canarias (Tenerife, Lanzarote, Fuerteventura, La Palma, La Gomera, El Hierro) y a
            toda España peninsular.
          </p>
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
            {FAQS.map((f, i) => (
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
          <OrderForm preselected={selectedProduct} />
        </div>
      </section>

      <div className="relative z-10 max-w-7xl w-full px-4 md:px-8 lg:px-16 pb-12 mt-auto mx-auto">
        <NfcFooter />
      </div>
    </main>
  );
}

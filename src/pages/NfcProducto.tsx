import { useState } from 'react';
import { ChevronLeft, Check } from 'lucide-react';
import { NfcBackground, NfcNavbar, NfcEyebrow, NfcButton, NfcIconTile, NfcCard, NfcFooter, NFC_PALETTE } from '../components/nfc';
import { OrderForm } from '../components/NfcOrderForm';
import { FaqItem } from '../components/NfcFaqItem';
import { PRODUCTS, NFC_COLOR_OPTIONS, USE_CASES, FAQS } from '../data/nfcProducts';

const NAV_ITEMS = [
  { name: "INICIO",     href: "/" },
  { name: "SERVICIOS",  href: "/servicios" },
  { name: "NFC",        href: "/nfc" },
  { name: "PROYECTOS",  href: "/proyectos" },
  { name: "ECOSISTEMA", href: "/ecosistema" },
  { name: "PRECIOS",    href: "/precios" },
];

const HEADING_STYLE = { fontFamily: 'var(--nfc-display)', fontWeight: 700, color: 'var(--nfc-ink)' } as const;

const USE_CASE_TITLES_FOR_PRODUCT_PAGE = ["Reseñas de Google", "Tarjeta de visita digital", "Redes sociales"];

function getSlugFromPath(): string {
  const path = window.location.pathname.replace(/\/+$/, '');
  return path.split('/').pop() ?? '';
}

export default function NfcProducto() {
  const slug = getSlugFromPath();
  const product = PRODUCTS.find(p => p.slug === slug) ?? PRODUCTS[0];
  const [color, setColor] = useState(NFC_COLOR_OPTIONS[0].name);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const relatedUseCases = USE_CASES.filter(u => USE_CASE_TITLES_FOR_PRODUCT_PAGE.includes(u.title));

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden flex flex-col font-sans">
      <NfcBackground />
      <NfcNavbar navItems={NAV_ITEMS} logoHref="/" />

      {/* Cabecera de producto */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 pt-32 pb-16 md:pt-40">
        <div className="max-w-6xl mx-auto">
          <a
            href="/nfc#productos"
            className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-widest mb-8"
            style={{ color: 'var(--nfc-ink2)' }}
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            Todos los formatos
          </a>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Foto */}
            <NfcCard tabColor={product.color} shadow="lg" className="overflow-hidden">
              <div className="relative w-full aspect-[4/3]" style={{ background: product.color }}>
                <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
                {product.featured && (
                  <span
                    className="absolute top-4 right-4 font-mono text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full border-[2px]"
                    style={{ background: 'var(--nfc-paper)', borderColor: 'var(--nfc-border)', color: 'var(--nfc-ink)' }}
                  >
                    Más pedido
                  </span>
                )}
              </div>
            </NfcCard>

            {/* Info */}
            <div>
              <NfcEyebrow className="mb-4">NFC Canarias</NfcEyebrow>
              <h1 className="mb-4" style={{ ...HEADING_STYLE, fontSize: 'clamp(1.9rem,3.6vw,2.6rem)' }}>{product.name}</h1>
              <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--nfc-ink2)' }}>{product.desc}</p>

              <ul className="space-y-2 mb-6">
                {product.items.map(item => (
                  <li key={item} className="flex items-start gap-2 text-[13px] leading-snug" style={{ color: 'var(--nfc-ink2)' }}>
                    <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--nfc-ink)' }} />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="font-mono text-3xl font-bold mb-6" style={{ color: 'var(--nfc-ink)' }}>{product.price}</p>

              <div className="mb-7">
                <p className="font-mono text-[10px] tracking-[0.15em] uppercase mb-3" style={{ color: 'var(--nfc-ink3)' }}>Color</p>
                <div className="flex flex-wrap gap-2.5">
                  {NFC_COLOR_OPTIONS.map(c => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setColor(c.name)}
                      aria-label={c.name}
                      aria-pressed={color === c.name}
                      className="w-9 h-9 rounded-full border-[2.5px]"
                      style={{
                        background: c.hex,
                        borderColor: 'var(--nfc-border)',
                        boxShadow: color === c.name ? '3px 3px 0 var(--nfc-border)' : 'none',
                        transform: color === c.name ? 'translate(-1px,-1px)' : 'none',
                      }}
                    />
                  ))}
                </div>
                <p className="text-[11px] mt-3" style={{ color: 'var(--nfc-ink3)' }}>
                  Se fabrica en el color que elijas. Foto de referencia en el color de fábrica.
                </p>
              </div>

              <NfcButton href="#pedido" className="w-full sm:w-auto justify-center">Pedir este formato</NfcButton>
            </div>
          </div>
        </div>
      </section>

      {/* Para qué sirve */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 py-16" style={{ background: 'var(--nfc-warm)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <NfcEyebrow className="mb-4">Para qué sirve</NfcEyebrow>
            <h2 style={{ ...HEADING_STYLE, fontSize: 'clamp(1.6rem,3vw,2.2rem)' }}>Un toque, muchos destinos.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedUseCases.map(({ Icon, title, desc }, i) => {
              const tileColor = NFC_PALETTE[i % NFC_PALETTE.length];
              return (
                <NfcCard key={title} tabColor={tileColor} className="p-6 flex flex-col gap-3">
                  <NfcIconTile Icon={Icon} color={tileColor} />
                  <h3 className="text-[15px] font-bold" style={{ color: 'var(--nfc-ink)' }}>{title}</h3>
                  <p className="text-[12.5px] leading-relaxed" style={{ color: 'var(--nfc-ink2)' }}>{desc}</p>
                </NfcCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 py-16">
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
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 py-16" style={{ background: 'var(--nfc-warm)' }} id="pedido">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <NfcEyebrow className="mb-4">Pide la tuya</NfcEyebrow>
            <h2 style={{ ...HEADING_STYLE, fontSize: 'clamp(1.8rem,3.4vw,2.8rem)' }}>Cuéntanos sobre tu negocio.</h2>
          </div>
          <OrderForm preselected={product.name} presetColor={color} />
        </div>
      </section>

      <div className="relative z-10 max-w-7xl w-full px-4 md:px-8 lg:px-16 pb-12 mt-auto mx-auto">
        <NfcFooter />
      </div>
    </main>
  );
}

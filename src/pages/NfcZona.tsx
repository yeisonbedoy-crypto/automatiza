import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { NfcBackground, NfcNavbar, NfcEyebrow, NfcButton, NfcIconTile, NfcCard, NfcFooter, NFC_PALETTE } from '../components/nfc';
import { OrderForm } from '../components/NfcOrderForm';
import { FaqItem } from '../components/NfcFaqItem';
import { ZONAS } from '../data/nfcZonas';
import { USE_CASES, FAQS } from '../data/nfcProducts';

const NAV_ITEMS = [
  { name: "INICIO",     href: "/" },
  { name: "SERVICIOS",  href: "/servicios" },
  { name: "NFC",        href: "/nfc" },
  { name: "PROYECTOS",  href: "/proyectos" },
  { name: "ECOSISTEMA", href: "/ecosistema" },
  { name: "PRECIOS",    href: "/precios" },
];

const HEADING_STYLE = { fontFamily: 'var(--nfc-display)', fontWeight: 700, color: 'var(--nfc-ink)' } as const;

function getSlugFromPath(): string {
  const path = window.location.pathname.replace(/\/+$/, '');
  return path.split('/').pop() ?? '';
}

export default function NfcZona() {
  const slug = getSlugFromPath();
  const zona = ZONAS.find(z => z.slug === slug) ?? ZONAS[0];
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const orderedUseCases = zona.useCaseTitles
    .map(title => USE_CASES.find(u => u.title === title))
    .filter((u): u is (typeof USE_CASES)[number] => Boolean(u));

  const otrasZonas = ZONAS.filter(z => z.slug !== zona.slug);

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden flex flex-col font-sans">
      <NfcBackground />
      <NfcNavbar navItems={NAV_ITEMS} logoHref="/" />

      {/* Hero de zona */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 pt-32 pb-16 md:pt-40">
        <div className="max-w-2xl mx-auto text-center">
          <NfcEyebrow className="mb-5">NFC Canarias</NfcEyebrow>
          <h1 className="uppercase leading-[0.98] mb-5" style={{ ...HEADING_STYLE, fontSize: 'clamp(2rem,4.6vw,3.2rem)' }}>
            Tarjeta y placa NFC en {zona.isla}.
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-7" style={{ color: 'var(--nfc-ink2)' }}>
            {zona.intro}
          </p>
          <NfcButton href="/nfc#productos">Ver todos los formatos</NfcButton>
        </div>
      </section>

      {/* Para qué sirve, reordenado por zona */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 py-16" style={{ background: 'var(--nfc-warm)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <NfcEyebrow className="mb-4">Un solo toque, muchos destinos</NfcEyebrow>
            <h2 style={{ ...HEADING_STYLE, fontSize: 'clamp(1.8rem,3.4vw,2.8rem)' }}>
              Todo lo que puede hacer tu NFC en {zona.isla}.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-3">
            {orderedUseCases.map(({ Icon, title, desc }, i) => {
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

      {/* Dónde llegamos en la isla */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <NfcEyebrow className="mb-4">Dónde estamos</NfcEyebrow>
          <h2 className="mb-5" style={{ ...HEADING_STYLE, fontSize: 'clamp(1.8rem,3.4vw,2.8rem)' }}>
            Llegamos a toda {zona.isla}.
          </h2>
          <p className="text-[14px] md:text-base leading-relaxed mb-6" style={{ color: 'var(--nfc-ink2)' }}>
            Diseñamos y preparamos cada pedido en Gran Canaria y lo enviamos a {zona.isla} en 4-7 días laborables.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {zona.localidades.map(loc => (
              <span
                key={loc}
                className="inline-flex items-center gap-1.5 rounded-full border-[2px] px-3.5 py-2 font-mono text-[11px] uppercase tracking-wide"
                style={{ borderColor: 'var(--nfc-border)', color: 'var(--nfc-ink2)' }}
              >
                <MapPin className="w-3 h-3" style={{ color: 'var(--nfc-ink)' }} />
                {loc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ, generales para cualquier isla */}
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
              Cuéntanos sobre tu negocio en {zona.isla}.
            </h2>
          </div>
          <OrderForm presetIsla={zona.isla} />
        </div>
      </section>

      {/* Otras islas — enlazado interno */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono text-[11px] uppercase tracking-widest mb-4" style={{ color: 'var(--nfc-ink3)' }}>
            También enviamos a
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {otrasZonas.map(z => (
              <a key={z.slug} href={`/nfc/${z.slug}`} className="font-bold text-sm underline underline-offset-4" style={{ color: 'var(--nfc-ink)' }}>
                {z.isla}
              </a>
            ))}
            <a href="/nfc" className="font-bold text-sm underline underline-offset-4" style={{ color: 'var(--nfc-ink)' }}>
              Gran Canaria (sede)
            </a>
          </div>
        </div>
      </section>

      <div className="relative z-10 max-w-7xl w-full px-4 md:px-8 lg:px-16 pb-12 mt-auto mx-auto">
        <NfcFooter />
      </div>
    </main>
  );
}

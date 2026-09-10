import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Sections';
import FadeIn from '../components/FadeIn';
import { NfcBackground, NfcEyebrow, NfcButton, NfcGhostButton } from '../components/nfc';
import { Wifi } from 'lucide-react';

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

      <div className="relative z-10 max-w-7xl w-full px-6 md:px-12 lg:px-16 pb-12 mt-auto mx-auto">
        <Footer />
      </div>
    </main>
  );
}

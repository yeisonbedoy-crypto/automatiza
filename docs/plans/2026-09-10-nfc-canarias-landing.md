# NFC Canarias Landing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship `/nfc`, a self-contained landing page for the new "NFC Canarias" product line (NFC cards/plaques for Google reviews, social links, digital menu, WiFi, contact), with a distinct light/editorial visual identity and real SEO plumbing (static per-page `<title>`/meta/OG/JSON-LD, sitemap, robots.txt), reachable from every page's nav.

**Architecture:** A new page-scoped design system (`src/components/nfc.tsx`, same pattern as the existing `agency.tsx`) powers a new page component (`src/pages/Nfc.tsx`), built up section by section. Because this project has no client-side router (every nav link is a plain `<a href>` causing a full page load, and `main.tsx` just picks a component by `window.location.pathname`), `/nfc` gets its own static HTML entry (`nfc/index.html`) via Vite's multi-page build, giving it real crawlable `<title>`/meta/OG/JSON-LD without needing SSR. A `vercel.json` rewrite maps the clean `/nfc` URL to that static file in production.

**Tech Stack:** React 19 + TypeScript, Tailwind v4 (`@tailwindcss/vite`), Vite 6 multi-page build, `lucide-react` icons, `motion/react` (via existing `FadeIn`), `formsubmit.co` for lead email (no backend), plain CSS custom properties for the new color/type tokens.

**Spec:** `docs/plans/2026-09-10-nfc-canarias-landing-design.md`

## Global Constraints

- Do not modify the existing dark/green visual system (`agency.tsx`, `Sections.tsx`, home page). The NFC page is additive only.
- Reuse the existing global `Navbar` (dark, liquid-glass) and `Footer` unchanged — only the body between them gets the new light system.
- No new backend/cart/payment — lead capture only, via the same `formsubmit.co` pattern already used in `src/pages/Presupuesto.tsx`.
- This project has **no git repository initialized** (`git status` fails with "not a git repository"). Skip all commit steps below. If the user initializes git later, commit after each completed task using its "Files touched" list.
- No automated test framework exists (`npm run lint` = `tsc --noEmit` only). Verification per task uses `npm run lint`, `npm run build`, and manual checks against the dev server (already running at `http://localhost:3000`) or the built `dist/` output — not unit tests.
- Do not fabricate social proof: do not present unrelated existing client logos as if they were NFC Canarias customers (the spec's "trust strip" wording is corrected in Task 4 below to use factual claim badges instead).
- Real product photos, final pricing and supplier info are pending from the user — placeholder copy/pricing used here is realistic and clearly marked "orientativo" in the UI, not fake TODOs.

---

### Task 1: NFC page-scoped design system

**Files:**
- Create: `src/components/nfc.tsx`

**Interfaces:**
- Produces: `NfcBackground(): JSX.Element`, `NfcEyebrow({ children, className? }): JSX.Element`, `NfcButton({ children, href?, onClick?, type?, className?, external? }): JSX.Element`, `NfcGhostButton({ children, href?, className? }): JSX.Element`, `NfcIconTile({ Icon, size? }): JSX.Element` — all consumed by `src/pages/Nfc.tsx` starting Task 2.
- Consumes: nothing new (uses existing `.noise-overlay` CSS class already defined in `src/index.css`).

- [ ] **Step 1: Create `src/components/nfc.tsx`**

```tsx
/**
 * Sistema de diseño "NFC Canarias" — editorial, papel claro, acento ámbar.
 * Componentes reutilizables SOLO para la página /nfc (mismo patrón que agency.tsx
 * para Servicios/Proyectos/Ecosistema/Presupuesto). No toca el resto del sitio.
 */
import type { ReactNode, ComponentType, CSSProperties } from 'react';

/** Colores de marca en JS, para casos que no puedan usar var(--nfc-*) de nfc/index.html. */
export const NFC_PAPER = '#FAF6EF';
export const NFC_INK = '#1B1A17';
export const NFC_INK2 = '#4A4740';
export const NFC_INK3 = '#8C877D';
export const NFC_ACCENT = '#D98F2B';
export const NFC_LINE = 'rgba(27,26,23,0.12)';

/** Fondo sólido color papel + textura de grano muy sutil (reutiliza .noise-overlay). */
export function NfcBackground() {
  return (
    <div className="fixed inset-0 z-0" style={{ background: 'var(--nfc-paper)' }}>
      <div className="absolute inset-0 noise-overlay opacity-[0.035]" />
    </div>
  );
}

/** Etiqueta pequeña en mayúsculas, mono, color acento. */
export function NfcEyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`font-mono text-[11px] font-medium tracking-[0.25em] uppercase ${className}`}
      style={{ color: 'var(--nfc-accent)' }}
    >
      {children}
    </p>
  );
}

/** Botón sólido ámbar con sombra offset dura (CTA principal). */
export function NfcButton({
  children,
  href,
  onClick,
  type = 'button',
  className = '',
  external = false,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  external?: boolean;
}) {
  const cls =
    `inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-transform duration-200 hover:-translate-y-0.5 ${className}`;
  const style: CSSProperties = {
    background: 'var(--nfc-accent)',
    color: 'var(--nfc-paper)',
    boxShadow: '3px 3px 0 var(--nfc-ink)',
  };
  if (href) {
    return (
      <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className={cls} style={style}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls} style={style}>
      {children}
    </button>
  );
}

/** Botón contorno (CTA secundaria). */
export function NfcGhostButton({ children, href, className = '' }: { children: ReactNode; href?: string; className?: string }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm border transition-colors duration-200 ${className}`}
      style={{ borderColor: 'var(--nfc-ink)', color: 'var(--nfc-ink)' }}
    >
      {children}
    </a>
  );
}

/** Tile con icono, borde y fondo ámbar muy suave (patrón repetido en las secciones de grid). */
export function NfcIconTile({
  Icon,
  size = 'md',
}: {
  Icon: ComponentType<{ className?: string; style?: CSSProperties }>;
  size?: 'sm' | 'md' | 'lg';
}) {
  const dims = size === 'lg' ? 'w-14 h-14' : size === 'sm' ? 'w-9 h-9' : 'w-12 h-12';
  const icon = size === 'lg' ? 'w-6 h-6' : size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';
  return (
    <div
      className={`${dims} rounded-xl flex items-center justify-center shrink-0`}
      style={{ background: 'rgba(217,143,43,0.10)', border: '1px solid rgba(217,143,43,0.35)' }}
    >
      <Icon className={icon} style={{ color: 'var(--nfc-accent)' } as CSSProperties} />
    </div>
  );
}
```

- [ ] **Step 2: Type-check**

Run: `npm run lint`
Expected: exits 0, no TypeScript errors. (The file has no importers yet — that's fine, `tsc --noEmit` checks the file on its own merits, not usage.)

---

### Task 2: Routing plumbing, static SEO head, and Hero section

**Files:**
- Create: `nfc/index.html`
- Create: `src/pages/Nfc.tsx`
- Modify: `vite.config.ts`
- Modify: `vercel.json`
- Modify: `src/main.tsx`

**Interfaces:**
- Consumes: `NfcBackground`, `NfcEyebrow`, `NfcButton`, `NfcGhostButton` from `src/components/nfc.tsx` (Task 1); `Navbar` from `src/components/Navbar.tsx`; `Footer` from `src/components/Sections.tsx`; `FadeIn` from `src/components/FadeIn.tsx`.
- Produces: `export default function Nfc(): JSX.Element` in `src/pages/Nfc.tsx`, registered in `main.tsx`'s routing table — consumed by Tasks 4-7, which append more JSX to this file.

- [ ] **Step 1: Create the static HTML entry `nfc/index.html`**

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <title>Tarjeta NFC Gran Canaria | NFC Canarias — reseñas, redes y contacto en un toque</title>
    <meta name="description" content="Tarjetas y placas NFC todo-en-uno hechas en Gran Canaria: reseñas de Google, redes sociales, carta digital y contacto en un solo toque. Sin apps, sin suscripción. Envíos a toda Canarias y España." />
    <link rel="canonical" href="https://automatizagc.xyz/nfc" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="shortcut icon" href="/favicon.svg" />

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="NFC Canarias" />
    <meta property="og:title" content="Tarjeta NFC Gran Canaria | NFC Canarias" />
    <meta property="og:description" content="Reseñas de Google, redes sociales, carta digital y contacto en un solo toque. Sin apps, sin suscripción. Hecho en Gran Canaria." />
    <meta property="og:url" content="https://automatizagc.xyz/nfc" />
    <meta property="og:image" content="https://automatizagc.xyz/hero-poster.webp" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Tarjeta NFC Gran Canaria | NFC Canarias" />
    <meta name="twitter:description" content="Reseñas de Google, redes sociales, carta digital y contacto en un solo toque. Sin apps, sin suscripción." />
    <meta name="twitter:image" content="https://automatizagc.xyz/hero-poster.webp" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@1,400;1,500;1,600&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />

    <style>
      :root {
        --nfc-paper: #FAF6EF;
        --nfc-warm: #F3ECE0;
        --nfc-ink: #1B1A17;
        --nfc-ink2: #4A4740;
        --nfc-ink3: #8C877D;
        --nfc-accent: #D98F2B;
        --nfc-line: rgba(27, 26, 23, 0.12);
        --nfc-serif: 'Fraunces', ui-serif, Georgia, serif;
      }
    </style>

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "NFC Canarias",
      "url": "https://automatizagc.xyz/nfc",
      "logo": "https://automatizagc.xyz/favicon.svg",
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Gran Canaria" },
        { "@type": "AdministrativeArea", "name": "Canarias" },
        { "@type": "Country", "name": "España" }
      ],
      "parentOrganization": { "@type": "Organization", "name": "AutomatizaGC", "url": "https://automatizagc.xyz" }
    }
    </script>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "NFC Canarias — Tarjeta y Placa NFC todo-en-uno",
      "description": "Tarjetas y placas NFC configurables para reseñas de Google, redes sociales, carta digital, WiFi y contacto, sin apps para el cliente final y sin suscripción.",
      "brand": { "@type": "Brand", "name": "NFC Canarias" },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "EUR",
        "lowPrice": "19",
        "highPrice": "89",
        "offerCount": "3",
        "areaServed": "ES"
      }
    }
    </script>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Funciona con cualquier móvil?",
          "acceptedAnswer": { "@type": "Answer", "text": "Sí. Funciona con iPhone 7 o superior y con prácticamente cualquier Android de los últimos años. No hace falta instalar ninguna app para usarlo, solo para configurarlo." }
        },
        {
          "@type": "Question",
          "name": "¿Necesita batería o cargarse?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. La tecnología NFC es pasiva: no lleva batería ni necesita cargarse nunca." }
        },
        {
          "@type": "Question",
          "name": "¿Puedo cambiar el enlace después?",
          "acceptedAnswer": { "@type": "Answer", "text": "Sí, cuando quieras y gratis, desde la app gratuita NFC Tools, sin volver a comprar nada." }
        },
        {
          "@type": "Question",
          "name": "¿Cuánto tarda el envío?",
          "acceptedAnswer": { "@type": "Answer", "text": "3-5 días laborables en Gran Canaria. Al resto de Canarias y a la península, entre 4 y 7 días." }
        },
        {
          "@type": "Question",
          "name": "¿Necesita que el negocio tenga wifi o conexión?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. El teléfono del cliente necesita conexión para abrir el enlace, pero la tarjeta o placa no necesita electricidad ni wifi propio." }
        },
        {
          "@type": "Question",
          "name": "¿Tiene garantía?",
          "acceptedAnswer": { "@type": "Answer", "text": "Sí, 12 meses de garantía por defectos de fabricación. Si el chip falla, lo reponemos sin coste." }
        }
      ]
    }
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 2: Create `src/pages/Nfc.tsx` with the Hero section**

```tsx
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
```

(The product mock in the hero is a drawn placeholder, not a real product photo — no real NFC Canarias photography exists yet. Task 7's summary flags this for the user to swap.)

- [ ] **Step 3: Wire the multi-page build in `vite.config.ts`**

Find:
```ts
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
```

Replace with:
```ts
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          nfc: path.resolve(__dirname, 'nfc/index.html'),
        },
      },
    },
```

- [ ] **Step 4: Add the `/nfc` rewrite in `vercel.json`, before the catch-all**

Find:
```json
{
  "rewrites": [
    { "source": "/api/chat", "destination": "https://ggenccaztvpmcnqqzlpw.supabase.co/functions/v1/chat" },
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

Replace with:
```json
{
  "rewrites": [
    { "source": "/api/chat", "destination": "https://ggenccaztvpmcnqqzlpw.supabase.co/functions/v1/chat" },
    { "source": "/nfc(/)?", "destination": "/nfc/index.html" },
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

- [ ] **Step 5: Register the route in `src/main.tsx`**

Find:
```tsx
import Servicios from './pages/Servicios.tsx';
import Proyectos from './pages/Proyectos.tsx';
import Ecosistema from './pages/Ecosistema.tsx';
import Presupuesto from './pages/Presupuesto.tsx';
import Contacto from './pages/Contacto.tsx';
import StickyAssistant from './components/StickyAssistant.tsx';
```

Replace with:
```tsx
import Servicios from './pages/Servicios.tsx';
import Proyectos from './pages/Proyectos.tsx';
import Ecosistema from './pages/Ecosistema.tsx';
import Presupuesto from './pages/Presupuesto.tsx';
import Contacto from './pages/Contacto.tsx';
import Nfc from './pages/Nfc.tsx';
import StickyAssistant from './components/StickyAssistant.tsx';
```

Find:
```tsx
  path === '/presupuesto'             ? Presupuesto        :
  path === '/contacto'                ? Contacto           :
  App;
```

Replace with:
```tsx
  path === '/presupuesto'             ? Presupuesto        :
  path === '/contacto'                ? Contacto           :
  path === '/nfc'                     ? Nfc                :
  App;
```

- [ ] **Step 6: Verify the build produces both HTML entries**

Run: `npm run build`
Expected: exits 0, and `dist/index.html` and `dist/nfc/index.html` both exist. Confirm with:
`ls dist/nfc/index.html`

- [ ] **Step 7: Verify the page renders in dev**

The dev server is already running at `http://localhost:3000` (restarts automatically on `vite.config.ts` changes). Open `http://localhost:3000/nfc/` (trailing slash — the Vite dev server serves nested HTML entries by directory index; the trailing-slash-free `/nfc` clean URL only works after the `vercel.json` rewrite, i.e. in a production/`vercel dev` build) and confirm:
- The dark liquid-glass navbar renders at the top with an "NFC" link
- The hero renders on a warm off-white background with the italic serif headline and the two CTA buttons
- No console errors

---

### Task 3: NFC nav link on every other page

**Files:**
- Modify: `src/components/Navbar.tsx`
- Modify: `src/pages/Servicios.tsx`
- Modify: `src/pages/Proyectos.tsx`
- Modify: `src/pages/Ecosistema.tsx`
- Modify: `src/pages/Presupuesto.tsx`
- Modify: `src/pages/Contacto.tsx`
- Modify: `src/pages/Precios.tsx`
- Modify: `src/pages/SobreNosotros.tsx`

**Interfaces:** none (data-only change to existing `NAV_ITEMS`/`LANDING_NAV_ITEMS` arrays).

- [ ] **Step 1: `src/components/Navbar.tsx`**

Find:
```tsx
const LANDING_NAV_ITEMS: NavItem[] = [
  { name: "INICIO",     href: "/" },
  { name: "SERVICIOS",  href: "/servicios" },
  { name: "PROYECTOS",  href: "/proyectos" },
  { name: "ECOSISTEMA", href: "/ecosistema" },
  { name: "PRECIOS",    href: "/precios" },
];
```

Replace with:
```tsx
const LANDING_NAV_ITEMS: NavItem[] = [
  { name: "INICIO",     href: "/" },
  { name: "SERVICIOS",  href: "/servicios" },
  { name: "NFC",        href: "/nfc" },
  { name: "PROYECTOS",  href: "/proyectos" },
  { name: "ECOSISTEMA", href: "/ecosistema" },
  { name: "PRECIOS",    href: "/precios" },
];
```

- [ ] **Step 2: `src/pages/Servicios.tsx`, `src/pages/Proyectos.tsx`, `src/pages/Ecosistema.tsx`, `src/pages/Presupuesto.tsx`, `src/pages/Contacto.tsx`**

All five currently contain this exact block — apply the same find/replace to each file:

Find:
```tsx
const NAV_ITEMS = [
  { name: "INICIO",     href: "/" },
  { name: "SERVICIOS",  href: "/servicios" },
  { name: "PROYECTOS",  href: "/proyectos" },
  { name: "ECOSISTEMA", href: "/ecosistema" },
  { name: "PRECIOS",    href: "/precios" },
];
```

Replace with:
```tsx
const NAV_ITEMS = [
  { name: "INICIO",     href: "/" },
  { name: "SERVICIOS",  href: "/servicios" },
  { name: "NFC",        href: "/nfc" },
  { name: "PROYECTOS",  href: "/proyectos" },
  { name: "ECOSISTEMA", href: "/ecosistema" },
  { name: "PRECIOS",    href: "/precios" },
];
```

- [ ] **Step 3: `src/pages/Precios.tsx`**

Find:
```tsx
const NAV_ITEMS = [
  { name: "INICIO",        href: "/" },
  { name: "ECOSISTEMA",    href: "/#email" },
  { name: "EL CEREBRO",   href: "/#boss", highlight: true as const },
  { name: "BLOG",          href: "/blog" },
];
```

Replace with:
```tsx
const NAV_ITEMS = [
  { name: "INICIO",        href: "/" },
  { name: "ECOSISTEMA",    href: "/#email" },
  { name: "EL CEREBRO",   href: "/#boss", highlight: true as const },
  { name: "NFC",           href: "/nfc" },
  { name: "BLOG",          href: "/blog" },
];
```

- [ ] **Step 4: `src/pages/SobreNosotros.tsx`**

Find:
```tsx
const NAV_ITEMS = [
  { name: "INICIO",        href: "/" },
  { name: "ECOSISTEMA",    href: "/#email" },
  { name: "EL CEREBRO",   href: "/#boss", highlight: true as const },
  { name: "PRECIOS",       href: "/precios" },
  { name: "BLOG",          href: "/blog" },
];
```

Replace with:
```tsx
const NAV_ITEMS = [
  { name: "INICIO",        href: "/" },
  { name: "ECOSISTEMA",    href: "/#email" },
  { name: "EL CEREBRO",   href: "/#boss", highlight: true as const },
  { name: "NFC",           href: "/nfc" },
  { name: "PRECIOS",       href: "/precios" },
  { name: "BLOG",          href: "/blog" },
];
```

- [ ] **Step 5: Verify**

Run: `npm run lint`
Expected: exits 0.

Then confirm every file now has an NFC entry:
Run: `grep -rl '"NFC"' src/components/Navbar.tsx src/pages/Servicios.tsx src/pages/Proyectos.tsx src/pages/Ecosistema.tsx src/pages/Presupuesto.tsx src/pages/Contacto.tsx src/pages/Precios.tsx src/pages/SobreNosotros.tsx`
Expected: all 8 file paths printed.

---

### Task 4: Trust bar and product selector

**Files:**
- Modify: `src/pages/Nfc.tsx`

**Interfaces:**
- Consumes: `NfcEyebrow` from `src/components/nfc.tsx` (Task 1, already imported); `Check`, `CircleDollarSign`, `Smartphone`, `Truck` from `lucide-react`.
- Produces: `PRODUCTS` array (`{ name: string; price: string; desc: string; items: string[]; featured: boolean }[]`), consumed by Task 7's order form `<select>`.

- [ ] **Step 1: Add imports and the `PRODUCTS` data array**

Find:
```tsx
import { NfcBackground, NfcEyebrow, NfcButton, NfcGhostButton } from '../components/nfc';
import { Wifi } from 'lucide-react';
```

Replace with:
```tsx
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
```

- [ ] **Step 2: Insert the trust bar and product selector between the Hero and the Footer**

Find:
```tsx
      </section>

      <div className="relative z-10 max-w-7xl w-full px-6 md:px-12 lg:px-16 pb-12 mt-auto mx-auto">
        <Footer />
      </div>
```

Replace with:
```tsx
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
```

- [ ] **Step 3: Verify**

Run: `npm run lint`
Expected: exits 0.

Open `http://localhost:3000/nfc/` and confirm the trust badges render under the hero, and the three product cards render below, with the middle one ("Placa de Mostrador") visually highlighted (accent border + "Más pedido" tag).

---

### Task 5: Use cases, how-it-works, and why-us sections

**Files:**
- Modify: `src/pages/Nfc.tsx`

**Interfaces:**
- Consumes: `NfcIconTile` from `src/components/nfc.tsx`; `Star, IdCard, UtensilsCrossed, Instagram, Wifi, MessageCircle, MapPin, Cpu` from `lucide-react` (`Wifi` already imported in Task 2).

- [ ] **Step 1: Add imports and data arrays**

Find:
```tsx
import { NfcBackground, NfcEyebrow, NfcButton, NfcGhostButton } from '../components/nfc';
import { Wifi, Check, CircleDollarSign, Smartphone, Truck } from 'lucide-react';
```

Replace with:
```tsx
import { NfcBackground, NfcEyebrow, NfcButton, NfcGhostButton, NfcIconTile } from '../components/nfc';
import {
  Wifi, Check, CircleDollarSign, Smartphone, Truck,
  Star, IdCard, UtensilsCrossed, Instagram, MessageCircle, MapPin, Cpu,
} from 'lucide-react';

const USE_CASES = [
  { Icon: Star,             title: "Reseñas de Google",         desc: "Un toque lleva directo a dejar una reseña en Google, sin buscar ni escribir el nombre del negocio." },
  { Icon: IdCard,           title: "Tarjeta de visita digital", desc: "Comparte tu contacto, cargo y redes al instante, sin quedarte sin tarjetas de papel." },
  { Icon: UtensilsCrossed,  title: "Carta o menú digital",      desc: "Perfecto para bares y restaurantes: la carta siempre actualizada, sin reimprimir." },
  { Icon: Instagram,        title: "Redes sociales",            desc: "Lleva a tu Instagram, Facebook o TikTok en un toque, sin que el cliente tenga que buscarte." },
  { Icon: Wifi,             title: "WiFi del local",            desc: "Comparte la contraseña del WiFi sin que nadie tenga que preguntarla ni teclearla." },
  { Icon: MessageCircle,    title: "Contacto directo",          desc: "Abre WhatsApp o una ficha de contacto lista para guardar, sin pedir el número." },
];

const STEPS = [
  { num: "01", title: "Acercas el móvil",       desc: "Sin apps ni cámara: solo acercar el teléfono a la tarjeta o placa." },
  { num: "02", title: "Se abre tu enlace",      desc: "El destino que hayas elegido se abre al instante — reseña, redes, carta o contacto." },
  { num: "03", title: "Cambias cuando quieras", desc: "Actualiza el destino desde tu móvil, gratis, cuando lo necesites." },
];

const WHY = [
  { Icon: CircleDollarSign, title: "Pago único",           desc: "Sin suscripción ni cuotas mensuales: pagas una vez y es tuyo." },
  { Icon: MapPin,           title: "Hecho en Gran Canaria", desc: "Diseñamos, configuramos y enviamos desde aquí, con soporte cercano en español." },
  { Icon: Truck,            title: "Envío rápido",          desc: "3-5 días en Gran Canaria, y a todas las islas y la península." },
  { Icon: Cpu,              title: "Integrable con IA",     desc: "Conecta tu NFC con los agentes de IA de AutomatizaGC para automatizar lo que pasa después de cada toque." },
];
```

- [ ] **Step 2: Insert the three sections after the product selector**

Find:
```tsx
      </section>

      <div className="relative z-10 max-w-7xl w-full px-6 md:px-12 lg:px-16 pb-12 mt-auto mx-auto">
        <Footer />
      </div>
```

Replace with:
```tsx
      </section>

      {/* Derivaciones de uso */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 py-16" style={{ background: 'var(--nfc-warm)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <NfcEyebrow className="mb-3">Un solo toque, muchos destinos</NfcEyebrow>
            <h2 className="italic" style={{ fontFamily: 'var(--nfc-serif)', color: 'var(--nfc-ink)', fontSize: 'clamp(1.8rem,3.4vw,2.8rem)' }}>
              Todo lo que puede hacer tu NFC.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {USE_CASES.map(({ Icon, title, desc }) => (
              <div key={title} className="rounded-2xl p-6 flex flex-col gap-3 border" style={{ borderColor: 'var(--nfc-line)', background: 'var(--nfc-paper)' }}>
                <NfcIconTile Icon={Icon} />
                <h3 className="text-[15px] font-bold" style={{ color: 'var(--nfc-ink)' }}>{title}</h3>
                <p className="text-[12.5px] leading-relaxed" style={{ color: 'var(--nfc-ink2)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 py-16" id="como-funciona">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <NfcEyebrow className="mb-3">Sin apps, sin complicaciones</NfcEyebrow>
            <h2 className="italic" style={{ fontFamily: 'var(--nfc-serif)', color: 'var(--nfc-ink)', fontSize: 'clamp(1.8rem,3.4vw,2.8rem)' }}>
              Cómo funciona.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STEPS.map((s) => (
              <div key={s.num} className="rounded-2xl p-7 border flex flex-col gap-3" style={{ borderColor: 'var(--nfc-line)', background: 'var(--nfc-paper)' }}>
                <span className="font-mono text-4xl" style={{ color: 'var(--nfc-accent)' }}>{s.num}</span>
                <h3 className="text-lg font-bold" style={{ color: 'var(--nfc-ink)' }}>{s.title}</h3>
                <p className="text-[13px] leading-relaxed" style={{ color: 'var(--nfc-ink2)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué NFC Canarias */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 py-16" style={{ background: 'var(--nfc-warm)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <NfcEyebrow className="mb-3">Por qué NFC Canarias</NfcEyebrow>
            <h2 className="italic" style={{ fontFamily: 'var(--nfc-serif)', color: 'var(--nfc-ink)', fontSize: 'clamp(1.8rem,3.4vw,2.8rem)' }}>
              Hecho aquí. Pensado para negocios reales.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY.map(({ Icon, title, desc }) => (
              <div key={title} className="rounded-2xl p-6 flex flex-col gap-3 border" style={{ borderColor: 'var(--nfc-line)', background: 'var(--nfc-paper)' }}>
                <NfcIconTile Icon={Icon} size="sm" />
                <h3 className="text-[14px] font-bold" style={{ color: 'var(--nfc-ink)' }}>{title}</h3>
                <p className="text-[12px] leading-relaxed" style={{ color: 'var(--nfc-ink2)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative z-10 max-w-7xl w-full px-6 md:px-12 lg:px-16 pb-12 mt-auto mx-auto">
        <Footer />
      </div>
```

- [ ] **Step 3: Verify**

Run: `npm run lint`
Expected: exits 0.

Open `http://localhost:3000/nfc/` and confirm, in order after the product cards: a 6-item use-case grid on a slightly deeper warm background, a 3-step "01/02/03" row, and a 4-item "why us" grid.

---

### Task 6: Coverage block and FAQ accordion

**Files:**
- Modify: `src/pages/Nfc.tsx`

**Interfaces:**
- Consumes: `useState` from `react`; `ChevronDown` from `lucide-react`.
- Produces: local `FaqItem` component and `openFaq` state, private to this file.

The FAQ text below is byte-for-byte the same as the `FAQPage` JSON-LD already written into `nfc/index.html` in Task 2 — keep them in sync if either is edited later.

- [ ] **Step 1: Add imports and data**

Find:
```tsx
import { NfcBackground, NfcEyebrow, NfcButton, NfcGhostButton, NfcIconTile } from '../components/nfc';
```

Replace with:
```tsx
import { useState } from 'react';
import { NfcBackground, NfcEyebrow, NfcButton, NfcGhostButton, NfcIconTile } from '../components/nfc';
```

Find:
```tsx
  Star, IdCard, UtensilsCrossed, Instagram, MessageCircle, MapPin, Cpu,
} from 'lucide-react';
```

Replace with:
```tsx
  Star, IdCard, UtensilsCrossed, Instagram, MessageCircle, MapPin, Cpu, ChevronDown,
} from 'lucide-react';

const FAQS = [
  { q: "¿Funciona con cualquier móvil?", a: "Sí. Funciona con iPhone 7 o superior y con prácticamente cualquier Android de los últimos años. No hace falta instalar ninguna app para usarlo, solo para configurarlo." },
  { q: "¿Necesita batería o cargarse?", a: "No. La tecnología NFC es pasiva: no lleva batería ni necesita cargarse nunca." },
  { q: "¿Puedo cambiar el enlace después?", a: "Sí, cuando quieras y gratis, desde la app gratuita NFC Tools, sin volver a comprar nada." },
  { q: "¿Cuánto tarda el envío?", a: "3-5 días laborables en Gran Canaria. Al resto de Canarias y a la península, entre 4 y 7 días." },
  { q: "¿Necesita que el negocio tenga wifi o conexión?", a: "No. El teléfono del cliente necesita conexión para abrir el enlace, pero la tarjeta o placa no necesita electricidad ni wifi propio." },
  { q: "¿Tiene garantía?", a: "Sí, 12 meses de garantía por defectos de fabricación. Si el chip falla, lo reponemos sin coste." },
];

function FaqItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b" style={{ borderColor: 'var(--nfc-line)' }}>
      <button type="button" onClick={onToggle} aria-expanded={isOpen} className="w-full flex items-center justify-between gap-4 py-5 text-left">
        <span className="text-[14px] md:text-[15px] font-bold" style={{ color: 'var(--nfc-ink)' }}>{q}</span>
        <ChevronDown
          className="w-4 h-4 shrink-0 transition-transform duration-200"
          style={{ color: 'var(--nfc-accent)', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>
      {isOpen && <p className="text-[13px] leading-relaxed pb-5 pr-8" style={{ color: 'var(--nfc-ink2)' }}>{a}</p>}
    </div>
  );
}
```

- [ ] **Step 2: Add `openFaq` state inside the component**

Find:
```tsx
export default function Nfc() {
  return (
```

Replace with:
```tsx
export default function Nfc() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
```

- [ ] **Step 3: Insert the coverage and FAQ sections after "Por qué NFC Canarias"**

Find:
```tsx
      </section>

      <div className="relative z-10 max-w-7xl w-full px-6 md:px-12 lg:px-16 pb-12 mt-auto mx-auto">
        <Footer />
      </div>
```

Replace with:
```tsx
      </section>

      {/* Cobertura */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <NfcEyebrow className="mb-3">Dónde estamos</NfcEyebrow>
          <h2 className="italic mb-5" style={{ fontFamily: 'var(--nfc-serif)', color: 'var(--nfc-ink)', fontSize: 'clamp(1.8rem,3.4vw,2.8rem)' }}>
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
            <NfcEyebrow className="mb-3">Preguntas frecuentes</NfcEyebrow>
            <h2 className="italic" style={{ fontFamily: 'var(--nfc-serif)', color: 'var(--nfc-ink)', fontSize: 'clamp(1.8rem,3.4vw,2.8rem)' }}>
              Resolvemos tus dudas.
            </h2>
          </div>
          <div>
            {FAQS.map((f, i) => (
              <FaqItem key={f.q} q={f.q} a={f.a} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
            ))}
          </div>
        </div>
      </section>

      <div className="relative z-10 max-w-7xl w-full px-6 md:px-12 lg:px-16 pb-12 mt-auto mx-auto">
        <Footer />
      </div>
```

- [ ] **Step 4: Verify**

Run: `npm run lint`
Expected: exits 0.

Open `http://localhost:3000/nfc/`, scroll to the FAQ, click a question and confirm it expands/collapses and the chevron rotates; confirm the first question is expanded by default.

---

### Task 7: Order form, sitemap, robots.txt, and final verification

**Files:**
- Modify: `src/pages/Nfc.tsx`
- Create: `public/sitemap.xml`
- Create: `public/robots.txt`

**Interfaces:**
- Consumes: `PRODUCTS` from Task 4 (for the product `<select>`); `NfcButton` from Task 1/2.
- Produces: nothing consumed further — this is the last task.

- [ ] **Step 1: Add form imports, types, and the `OrderForm` + `FaqItem`-style local component**

Find:
```tsx
import { useState } from 'react';
```

Replace with:
```tsx
import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
```

Find:
```tsx
function FaqItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
```

Insert immediately **before** that line:
```tsx
type NfcFormState = { nombre: string; negocio: string; isla: string; whatsapp: string; producto: string; mensaje: string };

const ISLAS = ["Gran Canaria", "Tenerife", "Lanzarote", "Fuerteventura", "La Palma", "La Gomera", "El Hierro", "Península / resto de España"];

const NFC_INPUT_CLASS = "w-full rounded-lg px-4 py-3 text-sm border focus:outline-none";
const NFC_INPUT_STYLE = { borderColor: 'var(--nfc-line)', background: 'var(--nfc-paper)', color: 'var(--nfc-ink)' };
const NFC_LABEL_CLASS = "block font-mono text-[10px] tracking-[0.15em] uppercase mb-2";

function OrderForm() {
  const [form, setForm] = useState<NfcFormState>({ nombre: '', negocio: '', isla: 'Gran Canaria', whatsapp: '', producto: PRODUCTS[0].name, mensaje: '' });
  const [sent, setSent] = useState(false);
  const LEAD_EMAIL = 'automatizagc@gmail.com';

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
      <div className="rounded-2xl p-8 text-center border" style={{ borderColor: 'var(--nfc-accent)', background: 'var(--nfc-paper)' }}>
        <p className="text-lg font-bold mb-2" style={{ color: 'var(--nfc-ink)' }}>¡Pedido recibido!</p>
        <p className="text-[13px]" style={{ color: 'var(--nfc-ink2)' }}>Te escribimos por WhatsApp en menos de 24h para confirmar los detalles.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-2xl p-7 md:p-8 border" style={{ borderColor: 'var(--nfc-line)', background: 'var(--nfc-paper)', boxShadow: '5px 5px 0 var(--nfc-accent)' }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={NFC_LABEL_CLASS} style={{ color: 'var(--nfc-ink3)' }}>Nombre</label>
          <input name="nombre" type="text" required value={form.nombre} onChange={handleChange} placeholder="Tu nombre" className={NFC_INPUT_CLASS} style={NFC_INPUT_STYLE} />
        </div>
        <div>
          <label className={NFC_LABEL_CLASS} style={{ color: 'var(--nfc-ink3)' }}>Negocio</label>
          <input name="negocio" type="text" value={form.negocio} onChange={handleChange} placeholder="Nombre de tu negocio" className={NFC_INPUT_CLASS} style={NFC_INPUT_STYLE} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={NFC_LABEL_CLASS} style={{ color: 'var(--nfc-ink3)' }}>Isla / ubicación</label>
          <select name="isla" value={form.isla} onChange={handleChange} className={NFC_INPUT_CLASS} style={NFC_INPUT_STYLE}>
            {ISLAS.map(i => <option key={i} value={i}>{i}</option>)}
          </select>
        </div>
        <div>
          <label className={NFC_LABEL_CLASS} style={{ color: 'var(--nfc-ink3)' }}>WhatsApp</label>
          <input name="whatsapp" type="tel" value={form.whatsapp} onChange={handleChange} placeholder="+34 000 000 000" className={NFC_INPUT_CLASS} style={NFC_INPUT_STYLE} />
        </div>
      </div>
      <div>
        <label className={NFC_LABEL_CLASS} style={{ color: 'var(--nfc-ink3)' }}>Producto de interés</label>
        <select name="producto" value={form.producto} onChange={handleChange} className={NFC_INPUT_CLASS} style={NFC_INPUT_STYLE}>
          {PRODUCTS.map(p => <option key={p.name} value={p.name}>{p.name} — {p.price}</option>)}
          <option value="No lo sé todavía">No lo sé todavía</option>
        </select>
      </div>
      <div>
        <label className={NFC_LABEL_CLASS} style={{ color: 'var(--nfc-ink3)' }}>
          Mensaje <span className="normal-case font-sans" style={{ color: 'var(--nfc-ink3)' }}>(opcional)</span>
        </label>
        <textarea name="mensaje" rows={3} value={form.mensaje} onChange={handleChange} placeholder="Cuéntanos algo más sobre tu negocio o pedido" className={`${NFC_INPUT_CLASS} resize-none`} style={NFC_INPUT_STYLE} />
      </div>
      <NfcButton type="submit" className="w-full justify-center">Enviar pedido</NfcButton>
    </form>
  );
}

```

- [ ] **Step 2: Insert the order form section before the Footer**

Find:
```tsx
      </section>

      <div className="relative z-10 max-w-7xl w-full px-6 md:px-12 lg:px-16 pb-12 mt-auto mx-auto">
        <Footer />
      </div>
```

Replace with:
```tsx
      </section>

      {/* Formulario de pedido */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 py-16" id="pedido">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <NfcEyebrow className="mb-3">Pide la tuya</NfcEyebrow>
            <h2 className="italic" style={{ fontFamily: 'var(--nfc-serif)', color: 'var(--nfc-ink)', fontSize: 'clamp(1.8rem,3.4vw,2.8rem)' }}>
              Cuéntanos sobre tu negocio.
            </h2>
          </div>
          <OrderForm />
        </div>
      </section>

      <div className="relative z-10 max-w-7xl w-full px-6 md:px-12 lg:px-16 pb-12 mt-auto mx-auto">
        <Footer />
      </div>
```

Note: this find/replace matches the block right after the FAQ section (the last occurrence of that exact snippet in the file after Task 6). If the tool reports the string as non-unique, target the final occurrence — it is the only one still followed by nothing else in the file.

- [ ] **Step 3: Create `public/sitemap.xml`**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://automatizagc.xyz/</loc><priority>1.0</priority></url>
  <url><loc>https://automatizagc.xyz/nfc</loc><priority>0.9</priority></url>
  <url><loc>https://automatizagc.xyz/servicios</loc><priority>0.8</priority></url>
  <url><loc>https://automatizagc.xyz/proyectos</loc><priority>0.6</priority></url>
  <url><loc>https://automatizagc.xyz/ecosistema</loc><priority>0.6</priority></url>
  <url><loc>https://automatizagc.xyz/precios</loc><priority>0.7</priority></url>
  <url><loc>https://automatizagc.xyz/presupuesto</loc><priority>0.5</priority></url>
  <url><loc>https://automatizagc.xyz/contacto</loc><priority>0.5</priority></url>
  <url><loc>https://automatizagc.xyz/sobre-nosotros</loc><priority>0.5</priority></url>
  <url><loc>https://automatizagc.xyz/blog</loc><priority>0.5</priority></url>
</urlset>
```

- [ ] **Step 4: Create `public/robots.txt`**

```
User-agent: *
Allow: /

Sitemap: https://automatizagc.xyz/sitemap.xml
```

- [ ] **Step 5: Full verification**

Run: `npm run lint`
Expected: exits 0.

Run: `npm run build`
Expected: exits 0. Confirm `dist/nfc/index.html`, `dist/sitemap.xml` and `dist/robots.txt` all exist:
`ls dist/nfc/index.html dist/sitemap.xml dist/robots.txt`

Open `http://localhost:3000/nfc/` in a browser and walk the full page top to bottom:
- Hero, trust badges, 3 product cards, 6 use-case cards, 3 steps, 4 "why us" cards, coverage
  paragraph, FAQ accordion, order form, footer — all present, no layout breaks at 400px width
  (resize the window or use device toolbar) and at desktop width
- Fill the order form and submit; confirm a WhatsApp Web/app tab opens with a pre-filled
  message and the on-page confirmation state ("¡Pedido recibido!") replaces the form
- Click the "NFC" nav link from at least one other page (e.g. `/servicios`) and confirm it
  navigates to `/nfc`

View source (or `curl http://localhost:3000/nfc/`) is not representative of production
metadata in dev mode (Vite serves the raw `nfc/index.html`, which already has the final
`<title>`/meta/JSON-LD — confirm those tags are present verbatim in that response).

---

## Summary of what's still a placeholder after this plan

- Hero product visual is a drawn CSS mock, not a real photo — swap in a real NFC card/plaque
  photo (and update the `og:image`/`twitter:image` in `nfc/index.html` to a dedicated image)
  once available.
- The 3 product prices and their descriptions are realistic estimates, marked "orientativo"
  in the UI — replace with confirmed pricing.
- The trust bar uses factual claim badges, not customer logos, since no NFC Canarias
  customers exist yet — replace with real client logos once available.

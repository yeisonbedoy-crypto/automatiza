# NFC Canarias — Páginas de Zona por Isla Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add 3 indexable SEO landing pages — `/nfc/tenerife`, `/nfc/lanzarote`, `/nfc/fuerteventura` — each honestly differentiated (real localities, reordered real use-cases by each island's known economic character) without fabricating local presence or duplicating the product catalog.

**Architecture:** Mirrors the pattern already built for product pages: a shared data module (`src/data/nfcZonas.ts`), one reusable self-contained page component (`src/pages/NfcZona.tsx`) that derives its slug from `window.location.pathname`, 3 static HTML entries for SEO, and routing wired through `vite.config.ts` (build + dev redirect), `main.tsx`, and `vercel.json` — all from the start, unlike last time where `vercel.json`/`sitemap.xml` gaps were caught only in final review.

**Tech Stack:** React 19 + TypeScript, Vite 6 multi-page build, Tailwind CSS v4, no client-side router (manual `window.location.pathname` matching), Vercel static hosting with `vercel.json` rewrites.

**Spec:** `docs/superpowers/specs/2026-09-13-nfc-zone-pages-design.md`

## Global Constraints

- No fabricated local offices, staff, customers, or reviews for any island — none exist yet.
- No repeating the full product catalog (names/descriptions/items) on zone pages — link to `/nfc#productos` instead, to avoid near-duplicate content across 4+ URLs.
- Shipping honesty: reuse the existing FAQ fact verbatim ("4-7 días laborables" to the rest of the Canary Islands) — never invent per-island delivery times.
- Zone differentiation must come from real, verifiable facts only: real locality names, and a reordering of the existing 6 `USE_CASES` (not new copy) reflecting each island's well-known tourism/business character.
- This repo has no test framework (`package.json` has no jest/vitest). Verification per task is `npm run build` (must succeed) + `npm run lint` (`tsc --noEmit`) compared against the current, exact baseline of 7 pre-existing errors:
  - `src/components/SeamlessVideo.tsx:9,10` — `TS2503 Cannot find namespace 'React'` (2 errors, unrelated to JSX `key` props)
  - `src/pages/Blog.tsx:329` — `TS2322` "Property 'key' does not exist" (1 error)
  - `src/pages/Nfc.tsx:272,359,398` — `TS2322` "Property 'key' does not exist" (3 errors)
  - `src/pages/NfcProducto.tsx:132` — `TS2322` "Property 'key' does not exist" (1 error)

  All the `TS2322` ones are the same known, accepted class: this project is missing `@types/react`/`@types/react-dom`, so passing `key` to a custom component (never to a native intrinsic element) inside `.map()` is flagged as a phantom prop-type error. New code that maps custom components (like `NfcCard`) with a `key` will add more instances of this exact class — expected, not a regression. Only a genuinely new TS error *code*, or an error in a file that had none before, is a real problem.
- Route derivation lesson already learned once: never add per-slug literal `path === '/nfc/<slug>'` comparisons in `main.tsx`. Use a single check derived from the data array (`ZONAS.some(z => \`/nfc/${z.slug}\` === path)`), matching how the product-page fix wave corrected this for `PRODUCTS`.
- `vercel.json` and `public/sitemap.xml` must be updated in the SAME task that adds the routes, not as a follow-up fix — this was a real gap caught only in the previous plan's final review.
- Work happens in the existing worktree at `E:\TrabajosWeb\automatiza-gc\.worktrees\nfc-canarias-landing` on branch `nfc-canarias-landing`. Never touch `master`.
- Dev server for manual verification runs via `npm run dev -- --port 3001` and is checked with `curl -s -o /dev/null -w "%{http_code}\n" <url>` plus `curl -s <url> | grep '<title>'` — no real browser is available in this environment.

---

### Task 1: Create the shared zone data module

**Files:**
- Create: `src/data/nfcZonas.ts`

**Interfaces:**
- Produces: `export type NfcZona = { slug: string; isla: string; localidades: string[]; useCaseTitles: string[]; intro: string }`, `export const ZONAS: NfcZona[]` (3 entries: tenerife, lanzarote, fuerteventura).
- Consumes: nothing (pure data file, no imports needed).

- [ ] **Step 1: Create the data module**

Create `src/data/nfcZonas.ts` with this exact content:

```ts
export type NfcZona = {
  slug: string;
  isla: string;
  localidades: string[];
  useCaseTitles: string[];
  intro: string;
};

export const ZONAS: NfcZona[] = [
  {
    slug: "tenerife",
    isla: "Tenerife",
    localidades: ["Santa Cruz de Tenerife", "San Cristóbal de La Laguna", "Puerto de la Cruz", "Adeje", "Los Cristianos", "Arona"],
    useCaseTitles: ["Reseñas de Google", "Carta o menú digital", "Tarjeta de visita digital", "Redes sociales", "Contacto directo", "WiFi del local"],
    intro: "La isla con más peso hostelero y turístico de Canarias: ideal para reseñas de Google y cartas digitales que no se reimprimen nunca.",
  },
  {
    slug: "lanzarote",
    isla: "Lanzarote",
    localidades: ["Arrecife", "Puerto del Carmen", "Playa Blanca", "Costa Teguise", "Teguise"],
    useCaseTitles: ["Redes sociales", "Tarjeta de visita digital", "Reseñas de Google", "Contacto directo", "Carta o menú digital", "WiFi del local"],
    intro: "Con un tejido de comercio turístico y artesanal muy activo: perfecto para llevar a tu Instagram o tu ficha de contacto en un solo toque.",
  },
  {
    slug: "fuerteventura",
    isla: "Fuerteventura",
    localidades: ["Puerto del Rosario", "Corralejo", "Costa Calma", "Morro Jable", "Gran Tarajal"],
    useCaseTitles: ["Redes sociales", "WiFi del local", "Reseñas de Google", "Tarjeta de visita digital", "Contacto directo", "Carta o menú digital"],
    intro: "Turismo de playa y de surf durante todo el año: útil para compartir el WiFi de un hostal o las redes de una escuela de surf sin escribir nada a mano.",
  },
];
```

`isla` values ("Tenerife", "Lanzarote", "Fuerteventura") must match EXACTLY the corresponding entries in the `ISLAS` array in `src/components/NfcOrderForm.tsx:16` (`["Gran Canaria", "Tenerife", "Lanzarote", "Fuerteventura", "La Palma", "La Gomera", "El Hierro", "Península / resto de España"]`) — they already do, this is just a note for verification. `useCaseTitles` values must match EXACTLY the `title` field of entries in `USE_CASES` in `src/data/nfcProducts.ts:90-97` (they are simply reordered, never reworded): "Reseñas de Google", "Tarjeta de visita digital", "Carta o menú digital", "Redes sociales", "WiFi del local", "Contacto directo".

- [ ] **Step 2: Build and lint to verify**

Run: `npm run build`
Expected: succeeds. This file isn't imported anywhere yet, so it won't appear in any bundle — that's expected, not an error.

Run: `npm run lint`
Expected: exactly the same 7 pre-existing errors listed in Global Constraints, in the same 4 files, same line numbers. This file has no JSX and no `.map()` with `key`, so it should add zero new lint output.

- [ ] **Step 3: Commit**

```bash
git add src/data/nfcZonas.ts
git commit -m "$(cat <<'EOF'
Add shared zone data module for the 3 island pages

ZONAS holds the honest, real content that differentiates each island
page: real localities already known to be served, and a reordering of
the existing USE_CASES (no new copy) reflecting each island's
well-known tourism/business character. No fabricated local presence.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 2: Add `presetIsla` to `OrderForm`

**Files:**
- Modify: `src/components/NfcOrderForm.tsx:23` (function signature), `src/components/NfcOrderForm.tsx:27` (initial state), `src/components/NfcOrderForm.tsx:36-42` (add a third `useEffect`)

**Interfaces:**
- Produces: `OrderForm`'s prop type becomes `{ preselected?: string | null; presetColor?: string; presetIsla?: string }`. Consumed by Task 3's `NfcZona.tsx`.
- Consumes: nothing new — no other file needs to change for this task, since existing call sites (`src/pages/Nfc.tsx:413` and `src/pages/NfcProducto.tsx`) don't pass `presetIsla` and keep defaulting to `'Gran Canaria'`.

- [ ] **Step 1: Update the function signature**

In `src/components/NfcOrderForm.tsx`, change line 23 from:

```tsx
export function OrderForm({ preselected = null, presetColor }: { preselected?: string | null; presetColor?: string }) {
```

to:

```tsx
export function OrderForm({ preselected = null, presetColor, presetIsla }: { preselected?: string | null; presetColor?: string; presetIsla?: string }) {
```

- [ ] **Step 2: Use `presetIsla` for the initial state**

Change line 27 from:

```tsx
    isla: 'Gran Canaria',
```

to:

```tsx
    isla: presetIsla ?? 'Gran Canaria',
```

- [ ] **Step 3: Add a sync effect for `presetIsla`**

Immediately after the existing `presetColor` effect (after line 42, `}, [presetColor]);`), add:

```tsx
  useEffect(() => {
    if (presetIsla) setForm(prev => ({ ...prev, isla: presetIsla }));
  }, [presetIsla]);
```

- [ ] **Step 4: Build and lint to verify**

Run: `npm run build`
Expected: succeeds.

Run: `npm run lint`
Expected: same 7-error baseline from Global Constraints — this change adds no new `.map()`/`key` usage, so it should not add any new lint output.

- [ ] **Step 5: Manually verify the existing call sites still work**

```bash
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3001/nfc/
```

Expected: `200` (if the dev server isn't running, start it in the background first: `npm run dev -- --port 3001 > /tmp/nfc-dev.log 2>&1 &` then `disown`, wait a few seconds).

- [ ] **Step 6: Commit**

```bash
git add src/components/NfcOrderForm.tsx
git commit -m "$(cat <<'EOF'
Add presetIsla prop to OrderForm

Mirrors the existing preselected/presetColor pattern so the upcoming
zone pages can preselect their own island in the order form's "Isla /
ubicación" dropdown. Existing call sites are unaffected — they don't
pass this prop, so they keep defaulting to "Gran Canaria".

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 3: Build the reusable `src/pages/NfcZona.tsx` page

**Files:**
- Create: `src/pages/NfcZona.tsx`

**Interfaces:**
- Consumes: `ZONAS` from `../data/nfcZonas` (Task 1); `OrderForm` from `../components/NfcOrderForm` with its new `presetIsla` prop (Task 2); `USE_CASES, FAQS` from `../data/nfcProducts` (already exist, unchanged); `NfcBackground, NfcNavbar, NfcEyebrow, NfcButton, NfcIconTile, NfcCard, NfcFooter, NFC_PALETTE` from `../components/nfc` (already exist, unchanged).
- Produces: `export default function NfcZona()` — a self-contained page component with no props, reading its slug from `window.location.pathname`. Consumed by `main.tsx` in Task 5.

- [ ] **Step 1: Create `src/pages/NfcZona.tsx`**

```tsx
import { Check, MapPin } from 'lucide-react';
import { NfcBackground, NfcNavbar, NfcEyebrow, NfcButton, NfcIconTile, NfcCard, NfcFooter, NFC_PALETTE } from '../components/nfc';
import { OrderForm } from '../components/NfcOrderForm';
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
          <NfcCard tabColor="var(--nfc-tan)" className="p-7 md:p-8">
            <ul className="space-y-4">
              {FAQS.map(f => (
                <li key={f.q} className="flex items-start gap-3">
                  <Check className="w-4 h-4 shrink-0 mt-1" style={{ color: 'var(--nfc-ink)' }} />
                  <p className="text-[13.5px] leading-relaxed" style={{ color: 'var(--nfc-ink2)' }}>
                    <span className="font-bold" style={{ color: 'var(--nfc-ink)' }}>{f.q}</span> {f.a}
                  </p>
                </li>
              ))}
            </ul>
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
```

- [ ] **Step 2: Build and lint to verify**

Run: `npm run build`
Expected: succeeds. `NfcZona.tsx` is not yet imported by any route, so it won't appear in `dist/`, but the overall build must still succeed.

Run: `npm run lint`
Expected: same 7-error baseline PLUS one new instance of the same known "key"-on-custom-component class, at the `<NfcCard key={title}>` call inside `orderedUseCases.map(...)` — this is expected (same pattern as `NfcProducto.tsx:132`), not a regression. No other new error should appear (the `<span key={loc}>` and `<li key={f.q}>` and `<a key={z.slug}>` calls are all native intrinsic elements, which this project's degraded JSX typing does NOT flag — confirmed by every prior task in this codebase that used the same pattern).

- [ ] **Step 3: Commit**

```bash
git add src/pages/NfcZona.tsx
git commit -m "$(cat <<'EOF'
Add reusable NfcZona page component

Self-contained page (reads its own slug from window.location.pathname,
same pattern as NfcProducto.tsx) rendering one island's hero, its
reordered real use-cases, its real served localities, the general FAQ,
and an embedded order form preselecting that island. Links to
/nfc#productos instead of duplicating the product catalog, and
cross-links the other 2 zone pages plus the Gran Canaria hub. Not yet
wired to any route.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 4: Create the 3 static HTML entries for SEO

**Files:**
- Create: `nfc/tenerife/index.html`
- Create: `nfc/lanzarote/index.html`
- Create: `nfc/fuerteventura/index.html`

**Interfaces:**
- Produces: 3 static HTML files, each with the same `:root` CSS variables, font links, and `<script type="module" src="/src/main.tsx">` bootstrap already used by every other `/nfc/*` entry, plus a distinct `<title>`, meta description, canonical URL, `Organization` JSON-LD (verbatim identical to `nfc/index.html`'s), and a `Service` JSON-LD specific to that island (no `LocalBusiness`, no `AggregateRating`/`Review` — no physical presence or reviews exist to claim). Consumed by Task 5's Vite config and Vercel rewrites.

- [ ] **Step 1: Create `nfc/tenerife/index.html`**

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <title>Tarjeta NFC Tenerife | NFC Canarias — reseñas, redes y contacto en un toque</title>
    <meta name="description" content="Tarjetas y placas NFC todo-en-uno enviadas a toda Tenerife: reseñas de Google, redes sociales, carta digital y contacto en un solo toque. Sin apps, sin suscripción. Hechas en Gran Canaria, envío en 4-7 días." />
    <link rel="canonical" href="https://automatizagc.xyz/nfc/tenerife" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="shortcut icon" href="/favicon.svg" />

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="NFC Canarias" />
    <meta property="og:title" content="Tarjeta NFC Tenerife | NFC Canarias" />
    <meta property="og:description" content="Tarjetas y placas NFC todo-en-uno enviadas a toda Tenerife: reseñas de Google, redes sociales, carta digital y contacto en un solo toque." />
    <meta property="og:url" content="https://automatizagc.xyz/nfc/tenerife" />
    <meta property="og:image" content="https://automatizagc.xyz/founder.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Tarjeta NFC Tenerife | NFC Canarias" />
    <meta name="twitter:description" content="Reseñas de Google, redes sociales, carta digital y contacto en un solo toque, enviado a toda Tenerife." />
    <meta name="twitter:image" content="https://automatizagc.xyz/founder.jpg" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />

    <style>
      :root {
        --nfc-paper: #FFFDF8;
        --nfc-warm: #F5F0E6;
        --nfc-ink: #111111;
        --nfc-ink2: #3A3A3A;
        --nfc-ink3: #767672;
        --nfc-border: #111111;
        --nfc-divider: rgba(17, 17, 17, 0.15);
        --nfc-accent: #E8B923;
        --nfc-yellow: #E8B923;
        --nfc-green: #4A9B4E;
        --nfc-salmon: #F2857A;
        --nfc-lavender: #9B8FD9;
        --nfc-tan: #C9A876;
        --nfc-display: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
        --font-sans: 'DM Sans', ui-sans-serif, system-ui, sans-serif;
        --font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
      }
      .nfc-press { transition: transform .12s ease, box-shadow .12s ease; }
      .nfc-press:active { transform: translate(4px, 4px); box-shadow: none !important; }
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
      "@type": "Service",
      "name": "Tarjetas y placas NFC para negocios en Tenerife",
      "description": "Venta y envío de tarjetas y placas NFC configurables para reseñas de Google, redes sociales, carta digital y contacto, sin apps para el cliente final y sin suscripción.",
      "provider": { "@type": "Organization", "name": "NFC Canarias", "url": "https://automatizagc.xyz/nfc" },
      "areaServed": { "@type": "AdministrativeArea", "name": "Tenerife" },
      "url": "https://automatizagc.xyz/nfc/tenerife"
    }
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 2: Create `nfc/lanzarote/index.html`**

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <title>Tarjeta NFC Lanzarote | NFC Canarias — reseñas, redes y contacto en un toque</title>
    <meta name="description" content="Tarjetas y placas NFC todo-en-uno enviadas a toda Lanzarote: reseñas de Google, redes sociales, carta digital y contacto en un solo toque. Sin apps, sin suscripción. Hechas en Gran Canaria, envío en 4-7 días." />
    <link rel="canonical" href="https://automatizagc.xyz/nfc/lanzarote" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="shortcut icon" href="/favicon.svg" />

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="NFC Canarias" />
    <meta property="og:title" content="Tarjeta NFC Lanzarote | NFC Canarias" />
    <meta property="og:description" content="Tarjetas y placas NFC todo-en-uno enviadas a toda Lanzarote: reseñas de Google, redes sociales, carta digital y contacto en un solo toque." />
    <meta property="og:url" content="https://automatizagc.xyz/nfc/lanzarote" />
    <meta property="og:image" content="https://automatizagc.xyz/founder.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Tarjeta NFC Lanzarote | NFC Canarias" />
    <meta name="twitter:description" content="Reseñas de Google, redes sociales, carta digital y contacto en un solo toque, enviado a toda Lanzarote." />
    <meta name="twitter:image" content="https://automatizagc.xyz/founder.jpg" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />

    <style>
      :root {
        --nfc-paper: #FFFDF8;
        --nfc-warm: #F5F0E6;
        --nfc-ink: #111111;
        --nfc-ink2: #3A3A3A;
        --nfc-ink3: #767672;
        --nfc-border: #111111;
        --nfc-divider: rgba(17, 17, 17, 0.15);
        --nfc-accent: #E8B923;
        --nfc-yellow: #E8B923;
        --nfc-green: #4A9B4E;
        --nfc-salmon: #F2857A;
        --nfc-lavender: #9B8FD9;
        --nfc-tan: #C9A876;
        --nfc-display: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
        --font-sans: 'DM Sans', ui-sans-serif, system-ui, sans-serif;
        --font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
      }
      .nfc-press { transition: transform .12s ease, box-shadow .12s ease; }
      .nfc-press:active { transform: translate(4px, 4px); box-shadow: none !important; }
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
      "@type": "Service",
      "name": "Tarjetas y placas NFC para negocios en Lanzarote",
      "description": "Venta y envío de tarjetas y placas NFC configurables para reseñas de Google, redes sociales, carta digital y contacto, sin apps para el cliente final y sin suscripción.",
      "provider": { "@type": "Organization", "name": "NFC Canarias", "url": "https://automatizagc.xyz/nfc" },
      "areaServed": { "@type": "AdministrativeArea", "name": "Lanzarote" },
      "url": "https://automatizagc.xyz/nfc/lanzarote"
    }
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 3: Create `nfc/fuerteventura/index.html`**

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <title>Tarjeta NFC Fuerteventura | NFC Canarias — reseñas, redes y contacto en un toque</title>
    <meta name="description" content="Tarjetas y placas NFC todo-en-uno enviadas a toda Fuerteventura: reseñas de Google, redes sociales, carta digital y contacto en un solo toque. Sin apps, sin suscripción. Hechas en Gran Canaria, envío en 4-7 días." />
    <link rel="canonical" href="https://automatizagc.xyz/nfc/fuerteventura" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="shortcut icon" href="/favicon.svg" />

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="NFC Canarias" />
    <meta property="og:title" content="Tarjeta NFC Fuerteventura | NFC Canarias" />
    <meta property="og:description" content="Tarjetas y placas NFC todo-en-uno enviadas a toda Fuerteventura: reseñas de Google, redes sociales, carta digital y contacto en un solo toque." />
    <meta property="og:url" content="https://automatizagc.xyz/nfc/fuerteventura" />
    <meta property="og:image" content="https://automatizagc.xyz/founder.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Tarjeta NFC Fuerteventura | NFC Canarias" />
    <meta name="twitter:description" content="Reseñas de Google, redes sociales, carta digital y contacto en un solo toque, enviado a toda Fuerteventura." />
    <meta name="twitter:image" content="https://automatizagc.xyz/founder.jpg" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />

    <style>
      :root {
        --nfc-paper: #FFFDF8;
        --nfc-warm: #F5F0E6;
        --nfc-ink: #111111;
        --nfc-ink2: #3A3A3A;
        --nfc-ink3: #767672;
        --nfc-border: #111111;
        --nfc-divider: rgba(17, 17, 17, 0.15);
        --nfc-accent: #E8B923;
        --nfc-yellow: #E8B923;
        --nfc-green: #4A9B4E;
        --nfc-salmon: #F2857A;
        --nfc-lavender: #9B8FD9;
        --nfc-tan: #C9A876;
        --nfc-display: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
        --font-sans: 'DM Sans', ui-sans-serif, system-ui, sans-serif;
        --font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
      }
      .nfc-press { transition: transform .12s ease, box-shadow .12s ease; }
      .nfc-press:active { transform: translate(4px, 4px); box-shadow: none !important; }
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
      "@type": "Service",
      "name": "Tarjetas y placas NFC para negocios en Fuerteventura",
      "description": "Venta y envío de tarjetas y placas NFC configurables para reseñas de Google, redes sociales, carta digital y contacto, sin apps para el cliente final y sin suscripción.",
      "provider": { "@type": "Organization", "name": "NFC Canarias", "url": "https://automatizagc.xyz/nfc" },
      "areaServed": { "@type": "AdministrativeArea", "name": "Fuerteventura" },
      "url": "https://automatizagc.xyz/nfc/fuerteventura"
    }
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 4: Verify each file has a distinct, correct title**

```bash
for f in tenerife lanzarote fuerteventura; do
  echo "$f:"; grep '<title>' "nfc/$f/index.html"
done
```

Expected: 3 different `<title>` lines, one per island.

- [ ] **Step 5: Commit**

```bash
git add nfc/tenerife nfc/lanzarote nfc/fuerteventura
git commit -m "$(cat <<'EOF'
Add static HTML entries for the 3 island zone pages

Mirrors nfc/index.html's structure (fonts, CSS variables, Organization
JSON-LD) with a per-island <title>, meta description, canonical URL,
and a Service JSON-LD naming that island as areaServed — no
LocalBusiness (no physical presence exists) and no fabricated
AggregateRating/Review. Not yet wired into the Vite build or routing.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 5: Wire routing, sitemap, and internal links from `/nfc`

**Files:**
- Modify: `vite.config.ts`
- Modify: `src/main.tsx`
- Modify: `vercel.json`
- Modify: `public/sitemap.xml`
- Modify: `src/pages/Nfc.tsx` (add island links to the Cobertura section)

**Interfaces:**
- Consumes: `NfcZona` default export from `../pages/NfcZona` (Task 3); `ZONAS` from `../data/nfcZonas` (Task 1); the 3 HTML files from Task 4.

- [ ] **Step 1: Update `vite.config.ts`**

Replace the whole file with:

```ts
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

/**
 * Solo en dev: /nfc y las páginas de producto/zona (sin barra final)
 * reciben el index.html raíz vía el fallback SPA de Vite, sin las
 * variables CSS de su propio index.html. En producción vercel.json ya
 * normaliza esto con una rewrite; aquí replicamos lo mismo para que la
 * versión con y sin barra se comporten igual en local.
 */
const NFC_DEV_REDIRECT_ROUTES = [
  '/nfc',
  '/nfc/tag-nfc',
  '/nfc/tarjeta-nfc',
  '/nfc/placa-mostrador',
  '/nfc/expositor-multi-enlace',
  '/nfc/pack-negocio',
  '/nfc/tenerife',
  '/nfc/lanzarote',
  '/nfc/fuerteventura',
];

function nfcTrailingSlashDevRedirect() {
  return {
    name: 'nfc-trailing-slash-dev-redirect',
    configureServer(server: import('vite').ViteDevServer) {
      server.middlewares.use((req, res, next) => {
        if (req.url && NFC_DEV_REDIRECT_ROUTES.includes(req.url)) {
          res.statusCode = 302;
          res.setHeader('Location', `${req.url}/`);
          res.end();
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), nfcTrailingSlashDevRedirect()],
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
          nfcTagNfc: path.resolve(__dirname, 'nfc/tag-nfc/index.html'),
          nfcTarjetaNfc: path.resolve(__dirname, 'nfc/tarjeta-nfc/index.html'),
          nfcPlacaMostrador: path.resolve(__dirname, 'nfc/placa-mostrador/index.html'),
          nfcExpositorMultiEnlace: path.resolve(__dirname, 'nfc/expositor-multi-enlace/index.html'),
          nfcPackNegocio: path.resolve(__dirname, 'nfc/pack-negocio/index.html'),
          nfcTenerife: path.resolve(__dirname, 'nfc/tenerife/index.html'),
          nfcLanzarote: path.resolve(__dirname, 'nfc/lanzarote/index.html'),
          nfcFuerteventura: path.resolve(__dirname, 'nfc/fuerteventura/index.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Proxy same-origin al backend Canario (ya desplegado en Vercel).
      // El navegador habla con su mismo origen: cero CORS en dev/tunel.
      proxy: {
        '/api/chat': {
          target: 'https://ggenccaztvpmcnqqzlpw.supabase.co',
          changeOrigin: true,
          secure: true,
          rewrite: (p: string) => p.replace(/^\/api\/chat/, '/functions/v1/chat'),
        },
      },
    },
  };
});
```

- [ ] **Step 2: Update `src/main.tsx`**

Add an import for `NfcZona` and `ZONAS` alongside the existing `NfcProducto`/`PRODUCTS` imports:

```tsx
import Nfc from './pages/Nfc.tsx';
import NfcProducto from './pages/NfcProducto.tsx';
import NfcZona from './pages/NfcZona.tsx';
import { PRODUCTS } from './data/nfcProducts';
import { ZONAS } from './data/nfcZonas';
```

Add one new branch to the `path === ... ? ... :` ternary chain, immediately after the `PRODUCTS.some(...)` line and before the final `App` fallback:

```tsx
  path === '/nfc'                     ? Nfc                :
  PRODUCTS.some(p => `/nfc/${p.slug}` === path) ? NfcProducto :
  ZONAS.some(z => `/nfc/${z.slug}` === path) ? NfcZona :
  App;
```

- [ ] **Step 3: Update `vercel.json`**

Replace the whole file with:

```json
{
  "rewrites": [
    { "source": "/api/chat", "destination": "https://ggenccaztvpmcnqqzlpw.supabase.co/functions/v1/chat" },
    { "source": "/nfc(/)?", "destination": "/nfc/index.html" },
    { "source": "/nfc/tag-nfc(/)?", "destination": "/nfc/tag-nfc/index.html" },
    { "source": "/nfc/tarjeta-nfc(/)?", "destination": "/nfc/tarjeta-nfc/index.html" },
    { "source": "/nfc/placa-mostrador(/)?", "destination": "/nfc/placa-mostrador/index.html" },
    { "source": "/nfc/expositor-multi-enlace(/)?", "destination": "/nfc/expositor-multi-enlace/index.html" },
    { "source": "/nfc/pack-negocio(/)?", "destination": "/nfc/pack-negocio/index.html" },
    { "source": "/nfc/tenerife(/)?", "destination": "/nfc/tenerife/index.html" },
    { "source": "/nfc/lanzarote(/)?", "destination": "/nfc/lanzarote/index.html" },
    { "source": "/nfc/fuerteventura(/)?", "destination": "/nfc/fuerteventura/index.html" },
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

- [ ] **Step 4: Update `public/sitemap.xml`**

Add 3 lines after the existing `/nfc/pack-negocio` line and before the `/servicios` line:

```xml
  <url><loc>https://automatizagc.xyz/nfc/tenerife</loc><priority>0.8</priority></url>
  <url><loc>https://automatizagc.xyz/nfc/lanzarote</loc><priority>0.8</priority></url>
  <url><loc>https://automatizagc.xyz/nfc/fuerteventura</loc><priority>0.8</priority></url>
```

- [ ] **Step 5: Add island links to `/nfc`'s Cobertura section**

In `src/pages/Nfc.tsx`, the Cobertura section currently reads (around line 370-385):

```tsx
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
```

Add an import for `ZONAS` near the top of `src/pages/Nfc.tsx`, alongside the existing `../data/nfcProducts` import:

```tsx
import { ZONAS } from '../data/nfcZonas';
```

Then add a row of links right after the closing `</p>` and before `</div>`:

```tsx
          <p className="text-[14px] md:text-base leading-relaxed" style={{ color: 'var(--nfc-ink2)' }}>
            Diseñamos y preparamos cada pedido en Gran Canaria, y damos servicio a negocios de
            Las Palmas de Gran Canaria, Telde, Santa Lucía de Tirajana, San Bartolomé de
            Tirajana, Maspalomas, Arucas y el resto de la isla. Enviamos también al resto de
            Canarias (Tenerife, Lanzarote, Fuerteventura, La Palma, La Gomera, El Hierro) y a
            toda España peninsular.
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-5">
            {ZONAS.map(z => (
              <a key={z.slug} href={`/nfc/${z.slug}`} className="font-bold text-sm underline underline-offset-4" style={{ color: 'var(--nfc-ink)' }}>
                Tarjeta NFC en {z.isla}
              </a>
            ))}
          </div>
```

- [ ] **Step 6: Build and verify the full route set**

Run: `npm run build`
Expected: succeeds, and `dist/` now contains `dist/nfc/tenerife/index.html`, `dist/nfc/lanzarote/index.html`, `dist/nfc/fuerteventura/index.html` in addition to everything from before. Verify with:

```bash
ls dist/nfc/tenerife/index.html dist/nfc/lanzarote/index.html dist/nfc/fuerteventura/index.html
```

Run: `npm run lint`
Expected: same baseline as after Task 3 (7 original + 1 from `NfcZona.tsx`'s `NfcCard` map = 8 total). The `<a key={z.slug}>` map added to `Nfc.tsx` in this task is a native intrinsic element, so it should add zero new errors there — if `Nfc.tsx`'s error count changed, read the new list and confirm every line is the known class before treating it as fine.

- [ ] **Step 7: Manually verify every route in dev**

With the dev server running on port 3001:

```bash
for slug in "" tag-nfc tarjeta-nfc placa-mostrador expositor-multi-enlace pack-negocio tenerife lanzarote fuerteventura; do
  url="http://localhost:3001/nfc/${slug:+$slug/}"
  code=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  title=$(curl -s "$url" | grep -o '<title>[^<]*' | sed 's/<title>//')
  echo "$url -> $code | $title"
done
```

Expected: all 9 return `200`, each with a distinct, correct `<title>`.

- [ ] **Step 8: Commit**

```bash
git add vite.config.ts src/main.tsx vercel.json public/sitemap.xml src/pages/Nfc.tsx
git commit -m "$(cat <<'EOF'
Wire the 3 island pages into build, dev server, production routing, and internal links

Adds the 3 new HTML entries to Vite's rollupOptions.input and the dev
trailing-slash redirect list, adds the ZONAS-derived main.tsx route
check (never repeating the per-slug literal-comparison mistake from
the product pages), adds the 3 vercel.json rewrites and 3 sitemap.xml
entries in the same commit as the routes (not as a later fix), and
links all 3 island pages from /nfc's Cobertura section so they're not
orphaned.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
EOF
)"
```

---

## Post-plan note for the executor

After Task 5 lands, tell the user which 3 URLs to check on the dev server (e.g. `http://localhost:3001/nfc/tenerife/`) and wait for their visual confirmation before considering this feature done — every visual change this whole project has required the user's own look at the running page, and this plan does not change that.

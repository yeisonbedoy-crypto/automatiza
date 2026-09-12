# NFC Canarias — Páginas de Producto Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Give each of the 5 NFC Canarias products its own indexable sales page at `/nfc/<slug>`, with an honest color selector and an embedded order form, without fabricating any content the reference design implied (no 3D configurator, no cart, no invented specs).

**Architecture:** Extract the product/color/FAQ/use-case data that today lives inline inside `src/pages/Nfc.tsx` into a shared `src/data/nfcProducts.ts` module, and extract the existing `OrderForm` into its own `src/components/NfcOrderForm.tsx` (adding a `color` field). Build one reusable `src/pages/NfcProducto.tsx` page component that reads its own slug from `window.location.pathname` (same self-contained pattern every other page in `src/pages/` already uses) and renders the matching product. Wire 5 new static HTML entries + Vite build inputs + `main.tsx` routes + Vercel rewrites, mirroring exactly how `/nfc` itself is already wired.

**Tech Stack:** React 19 + TypeScript, Vite 6 multi-page build (`rollupOptions.input`), Tailwind CSS v4, no client-side router (manual `window.location.pathname` matching), Vercel static hosting with `vercel.json` rewrites.

**Spec:** `docs/superpowers/specs/2026-09-12-nfc-product-pages-design.md`

## Global Constraints

- No fabricated dimensions, materials, or chip specs — omit entirely, do not invent numbers.
- No 3D configurator, no cart/checkout UI, no dynamically-calculated delivery dates. Shipping timing text must come verbatim from the existing FAQ content (3-5 días Gran Canaria, 4-7 días resto).
- The color selector changes what color is *ordered*, never what the photo shows — no fake live-preview re-render. It must carry the honest caption: "Se fabrica en el color que elijas. Foto de referencia en el color de fábrica."
- The 7 real color options (name → swatch hex) are fixed: Verde `#4A9B4E`, Rojo `#D64545`, Azul `#4C63D2`, Beige `#C9A876`, Negro `#111111`, Blanco `#FFFDF8`, Plata `#B8B8B8`.
- This repo has no test framework (`package.json` has no jest/vitest — verified). Verification per task is: `npm run build` (must succeed) + `npm run lint` (`tsc --noEmit`) compared against the known TS baseline of exactly 7 pre-existing errors (2 in `SeamlessVideo.tsx`, 1 in `Blog.tsx`, 4 in `Nfc.tsx`, all "Property 'key' does not exist" — caused by this project missing `@types/react`/`@types/react-dom`, a known accepted limitation). New code that adds another `.map()` with a `key` prop will add more instances of this *same* error class — that is expected and NOT a regression to fix; only a genuinely new error class (a different TS error code, or an error in a file that had none before) counts as a real problem.
- Work happens in the existing worktree at `E:\TrabajosWeb\automatiza-gc\.worktrees\nfc-canarias-landing` on branch `nfc-canarias-landing`. Never touch `master`/the main checkout.
- Dev server for manual verification runs via `npm run dev -- --port 3001` (already the convention used all session) and is checked with `curl -s -o /dev/null -w "%{http_code}\n" <url>` plus `curl -s <url> | grep '<title>'` for title checks — a real browser is not available in this environment.

---

### Task 1: Extract shared product/content data into `src/data/nfcProducts.ts`

**Files:**
- Create: `src/data/nfcProducts.ts`
- Modify: `src/pages/Nfc.tsx:1-9` (imports), `src/pages/Nfc.tsx:11-18` (delete local `FAQS`), `src/pages/Nfc.tsx:140-147` (delete local `USE_CASES`), `src/pages/Nfc.tsx:162-213` (delete local `PRODUCTS`)

**Interfaces:**
- Produces: `export type NfcProduct = { slug: string; name: string; price: string; desc: string; items: string[]; featured: boolean; Icon: LucideIcon; image: string; color: string }`, `export const PRODUCTS: NfcProduct[]` (5 entries, same content as today plus `slug`), `export type NfcColorOption = { name: string; hex: string }`, `export const NFC_COLOR_OPTIONS: NfcColorOption[]` (7 entries), `export const USE_CASES: { Icon: LucideIcon; title: string; desc: string }[]` (6 entries, same content as today), `export const FAQS: { q: string; a: string }[]` (6 entries, same content as today).
- Consumes (from `src/components/nfc.tsx`, already exported): `NFC_SALMON`, `NFC_LAVENDER`, `NFC_BLUE`, `NFC_TAN`, `NFC_YELLOW`.

- [ ] **Step 1: Create the data module**

Create `src/data/nfcProducts.ts` with this exact content:

```ts
import type { LucideIcon } from 'lucide-react';
import {
  CreditCard, MonitorSmartphone, Layers, Tag, LayoutGrid,
  Star, IdCard, UtensilsCrossed, Instagram, Wifi, MessageCircle,
} from 'lucide-react';
import { NFC_SALMON, NFC_LAVENDER, NFC_BLUE, NFC_TAN, NFC_YELLOW } from '../components/nfc';

export type NfcProduct = {
  slug: string;
  name: string;
  price: string;
  desc: string;
  items: string[];
  featured: boolean;
  Icon: LucideIcon;
  image: string;
  color: string;
};

export const PRODUCTS: NfcProduct[] = [
  {
    slug: "tag-nfc",
    name: "Tag NFC",
    price: "12€",
    desc: "El punto de partida: una pegatina NFC discreta para pegar donde haga falta.",
    items: ["1 tag NFC adhesivo", "Enlace configurable", "Ideal para probar antes de pedir más"],
    featured: false,
    Icon: Tag,
    image: "/nfc/productos/tag-nfc.webp",
    color: NFC_SALMON,
  },
  {
    slug: "tarjeta-nfc",
    name: "Tarjeta NFC",
    price: "19€",
    desc: "Tarjeta individual, tamaño de visita, para ti o cada miembro de tu equipo.",
    items: ["1 tarjeta NFC personalizada", "Enlace configurable (reseñas, redes, contacto)", "Envío en 3-5 días en Gran Canaria"],
    featured: false,
    Icon: CreditCard,
    image: "/nfc/productos/tarjeta-nfc.webp",
    color: NFC_LAVENDER,
  },
  {
    slug: "placa-mostrador",
    name: "Placa de Mostrador",
    price: "39€",
    desc: "Placa de sobremesa para el mostrador, visible para cada cliente que pasa por caja.",
    items: ["1 placa NFC de mostrador", "Diseño a juego con tu marca", "Ideal para pedir reseñas en el momento del pago"],
    featured: true,
    Icon: MonitorSmartphone,
    image: "/nfc/productos/placa-mostrador.webp",
    color: NFC_BLUE,
  },
  {
    slug: "expositor-multi-enlace",
    name: "Expositor Multi-Enlace",
    price: "69€",
    desc: "Expositor de sobremesa con varios puntos de toque a la vez, cada uno con su propio destino.",
    items: ["1 expositor con 3 zonas de toque", "Reseñas, redes y contacto por separado", "Pensado para mostradores con mucho tráfico"],
    featured: false,
    Icon: LayoutGrid,
    image: "/nfc/productos/expositor-multi-enlace.webp",
    color: NFC_TAN,
  },
  {
    slug: "pack-negocio",
    name: "Pack Negocio",
    price: "89€",
    desc: "Todo lo que necesita tu negocio: placa de mostrador + 3 tarjetas para el equipo.",
    items: ["1 placa + 3 tarjetas NFC", "Todos los enlaces configurables desde el móvil", "Soporte prioritario por WhatsApp"],
    featured: false,
    Icon: Layers,
    image: "/nfc/productos/pack-negocio.webp",
    color: NFC_YELLOW,
  },
];

export type NfcColorOption = { name: string; hex: string };

export const NFC_COLOR_OPTIONS: NfcColorOption[] = [
  { name: "Verde",  hex: "#4A9B4E" },
  { name: "Rojo",   hex: "#D64545" },
  { name: "Azul",   hex: "#4C63D2" },
  { name: "Beige",  hex: "#C9A876" },
  { name: "Negro",  hex: "#111111" },
  { name: "Blanco", hex: "#FFFDF8" },
  { name: "Plata",  hex: "#B8B8B8" },
];

export const USE_CASES: { Icon: LucideIcon; title: string; desc: string }[] = [
  { Icon: Star,             title: "Reseñas de Google",         desc: "Un toque lleva directo a dejar una reseña en Google, sin buscar ni escribir el nombre del negocio." },
  { Icon: IdCard,           title: "Tarjeta de visita digital", desc: "Comparte tu contacto, cargo y redes al instante, sin quedarte sin tarjetas de papel." },
  { Icon: UtensilsCrossed,  title: "Carta o menú digital",      desc: "Perfecto para bares y restaurantes: la carta siempre actualizada, sin reimprimir." },
  { Icon: Instagram,        title: "Redes sociales",            desc: "Lleva a tu Instagram, Facebook o TikTok en un toque, sin que el cliente tenga que buscarte." },
  { Icon: Wifi,             title: "WiFi del local",            desc: "Comparte la contraseña del WiFi sin que nadie tenga que preguntarla ni teclearla." },
  { Icon: MessageCircle,    title: "Contacto directo",          desc: "Abre WhatsApp o una ficha de contacto lista para guardar, sin pedir el número." },
];

export const FAQS: { q: string; a: string }[] = [
  { q: "¿Funciona con cualquier móvil?", a: "Sí. Funciona con iPhone 7 o superior y con prácticamente cualquier Android de los últimos años. No hace falta instalar ninguna app para usarlo, solo para configurarlo." },
  { q: "¿Necesita batería o cargarse?", a: "No. La tecnología NFC es pasiva: no lleva batería ni necesita cargarse nunca." },
  { q: "¿Puedo cambiar el enlace después?", a: "Sí, cuando quieras y gratis, desde la app gratuita NFC Tools, sin volver a comprar nada." },
  { q: "¿Cuánto tarda el envío?", a: "3-5 días laborables en Gran Canaria. Al resto de Canarias y a la península, entre 4 y 7 días." },
  { q: "¿Necesita que el negocio tenga wifi o conexión?", a: "No. El teléfono del cliente necesita conexión para abrir el enlace, pero la tarjeta o placa no necesita electricidad ni wifi propio." },
  { q: "¿Tiene garantía?", a: "Sí, 12 meses de garantía por defectos de fabricación. Si el chip falla, lo reponemos sin coste." },
];
```

- [ ] **Step 2: Update `src/pages/Nfc.tsx` to consume the new module instead of defining this content locally**

In `src/pages/Nfc.tsx`, replace the import block at the top (lines 1-9) with:

```tsx
import FadeIn from '../components/FadeIn';
import { useState, useEffect } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { NfcBackground, NfcNavbar, NfcEyebrow, NfcButton, NfcIconTile, NfcCard, NfcCtaBanner, NfcFooter, NFC_PALETTE } from '../components/nfc';
import { PRODUCTS, USE_CASES, FAQS } from '../data/nfcProducts';
import {
  Wifi, Check, CircleDollarSign, Smartphone, Truck,
  Star, Instagram, UtensilsCrossed, MapPin, Cpu, ChevronDown,
  Link2, RefreshCw,
} from 'lucide-react';
```

(`NFC_SALMON, NFC_LAVENDER, NFC_BLUE, NFC_TAN, NFC_YELLOW` are dropped from this import — they're only used inside the now-deleted local `PRODUCTS` array. `IdCard, CreditCard, MonitorSmartphone, Layers, Tag, LayoutGrid, MessageCircle` are dropped from the lucide-react import for the same reason — they were only used by the local `PRODUCTS`/`USE_CASES` arrays being deleted here.)

Delete the local `const FAQS = [...]` block (original lines 11-18).

Delete the local `const USE_CASES = [...]` block (original lines 140-147).

Delete the local `const PRODUCTS = [...]` block (original lines 162-213).

- [ ] **Step 3: Build and lint to verify nothing broke**

Run: `npm run build`
Expected: succeeds, same output files as before (`dist/index.html`, `dist/nfc/index.html`, JS/CSS bundles), no new errors.

Run: `npm run lint`
Expected: exactly the same 7 pre-existing errors as the baseline captured in Global Constraints (line numbers for the `Nfc.tsx` ones may shift slightly since lines were deleted, but there must still be exactly 4 "key" errors in `Nfc.tsx`, 1 in `Blog.tsx`, 2 in `SeamlessVideo.tsx` — no new error, no new file).

- [ ] **Step 4: Manually verify `/nfc` still renders identically**

With the dev server running (`npm run dev -- --port 3001` in the background if not already running), run:

```bash
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3001/nfc/
```

Expected: `200`.

- [ ] **Step 5: Commit**

```bash
git add src/data/nfcProducts.ts src/pages/Nfc.tsx
git commit -m "$(cat <<'EOF'
Extract product/FAQ/use-case data into shared src/data/nfcProducts.ts

Pulls PRODUCTS (now with a slug per product), USE_CASES, and FAQS out
of Nfc.tsx into a shared module, and adds NFC_COLOR_OPTIONS (the 7
real color/finish choices). Needed so the upcoming per-product pages
can reuse this content instead of duplicating it.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 2: Extract `OrderForm` into `src/components/NfcOrderForm.tsx` with a real color field

**Files:**
- Create: `src/components/NfcOrderForm.tsx`
- Modify: `src/pages/Nfc.tsx` (remove the local `OrderForm` function and its supporting constants, import the extracted one)

**Interfaces:**
- Consumes: `PRODUCTS` and `NFC_COLOR_OPTIONS` from `../data/nfcProducts` (produced by Task 1), `NfcCard` and `NfcButton` from `./nfc`.
- Produces: `export type NfcFormState = { nombre: string; negocio: string; isla: string; whatsapp: string; producto: string; color: string; mensaje: string }`, `export function OrderForm({ preselected, presetColor }: { preselected?: string | null; presetColor?: string })`. Both `preselected` and `presetColor` are optional — Task 5 will call this with no props at all from the generic `/nfc#pedido` form, and Task 3 will call it with both set from a product page.

- [ ] **Step 1: Create `src/components/NfcOrderForm.tsx`**

```tsx
import { useState, useEffect } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { NfcCard, NfcButton } from './nfc';
import { PRODUCTS, NFC_COLOR_OPTIONS } from '../data/nfcProducts';

export type NfcFormState = {
  nombre: string;
  negocio: string;
  isla: string;
  whatsapp: string;
  producto: string;
  color: string;
  mensaje: string;
};

const ISLAS = ["Gran Canaria", "Tenerife", "Lanzarote", "Fuerteventura", "La Palma", "La Gomera", "El Hierro", "Península / resto de España"];
const NFC_COLOR_NO_PREFERENCE = "Sin preferencia";

const NFC_INPUT_CLASS = "w-full rounded-xl px-4 py-3 text-sm border-[2px] focus:outline-none";
const NFC_INPUT_STYLE = { borderColor: 'var(--nfc-border)', background: 'var(--nfc-paper)', color: 'var(--nfc-ink)' };
const NFC_LABEL_CLASS = "block font-mono text-[10px] tracking-[0.15em] uppercase mb-2";

export function OrderForm({ preselected = null, presetColor }: { preselected?: string | null; presetColor?: string }) {
  const [form, setForm] = useState<NfcFormState>({
    nombre: '',
    negocio: '',
    isla: 'Gran Canaria',
    whatsapp: '',
    producto: preselected ?? PRODUCTS[0].name,
    color: presetColor ?? NFC_COLOR_NO_PREFERENCE,
    mensaje: '',
  });
  const [sent, setSent] = useState(false);
  const LEAD_EMAIL = 'automatizagc@gmail.com';

  useEffect(() => {
    if (preselected) setForm(prev => ({ ...prev, producto: preselected }));
  }, [preselected]);

  useEffect(() => {
    if (presetColor) setForm(prev => ({ ...prev, color: presetColor }));
  }, [presetColor]);

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
        Color: form.color,
        Mensaje: form.mensaje || '—',
      }),
    }).catch(() => {});

    const lines = [
      `*Nuevo pedido NFC Canarias*`, ``,
      `👤 *Nombre:* ${form.nombre}`,
      form.negocio ? `🏪 *Negocio:* ${form.negocio}` : '',
      `📍 *Isla:* ${form.isla}`,
      form.whatsapp ? `📱 *WhatsApp:* ${form.whatsapp}` : '', ``,
      `🎯 *Producto:* ${form.producto}`,
      `🎨 *Color:* ${form.color}`, ``,
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="nfc-producto" className={NFC_LABEL_CLASS} style={{ color: 'var(--nfc-ink3)' }}>Producto de interés</label>
            <select id="nfc-producto" name="producto" value={form.producto} onChange={handleChange} className={NFC_INPUT_CLASS} style={NFC_INPUT_STYLE}>
              {PRODUCTS.map(p => <option key={p.name} value={p.name}>{p.name} — {p.price}</option>)}
              <option value="No lo sé todavía">No lo sé todavía</option>
            </select>
          </div>
          <div>
            <label htmlFor="nfc-color" className={NFC_LABEL_CLASS} style={{ color: 'var(--nfc-ink3)' }}>Color</label>
            <select id="nfc-color" name="color" value={form.color} onChange={handleChange} className={NFC_INPUT_CLASS} style={NFC_INPUT_STYLE}>
              <option value={NFC_COLOR_NO_PREFERENCE}>{NFC_COLOR_NO_PREFERENCE}</option>
              {NFC_COLOR_OPTIONS.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
            </select>
          </div>
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
```

- [ ] **Step 2: Update `src/pages/Nfc.tsx` to use the extracted `OrderForm`**

In `src/pages/Nfc.tsx`:

Change the `useState, useEffect` import to just `useState` — `useEffect` was only used inside the local `OrderForm` being deleted in this step, and nothing else in this file calls it:

```tsx
import { useState } from 'react';
```

Delete the `import type { ChangeEvent, FormEvent } from 'react';` line entirely — those types were only used in the local `OrderForm`'s event handler signatures, which this step deletes.

Add the new import (near the top, alongside the `../data/nfcProducts` import added in Task 1):

```tsx
import { OrderForm } from '../components/NfcOrderForm';
```

Delete the local `type NfcFormState = ...` line, the local `const ISLAS = [...]` line, the local `const NFC_INPUT_CLASS`/`NFC_INPUT_STYLE`/`NFC_LABEL_CLASS` lines, and the entire local `function OrderForm({ preselected }: ...) { ... }` block (this is everything from the original `type NfcFormState` line through the closing `}` of the old `OrderForm` function — roughly the old lines 20-123).

Leave the call site `<OrderForm preselected={selectedProduct} />` near the bottom of the file exactly as it is for now — `selectedProduct` state still exists at this point in the plan and this still type-checks against the new `OrderForm`'s optional `preselected` prop. (Task 5 removes `selectedProduct` entirely once the product-grid CTA changes to a real link.)

- [ ] **Step 3: Build and lint to verify**

Run: `npm run build`
Expected: succeeds.

Run: `npm run lint`
Expected: same 7-error baseline as Task 1 (no new error class). `NfcOrderForm.tsx` will likely add 2 more instances of the same "key" error class (the `ISLAS.map`/`PRODUCTS.map`/`NFC_COLOR_OPTIONS.map` calls) — per Global Constraints, more instances of the *same* class is expected, not a regression.

- [ ] **Step 4: Manually verify the form still renders with the new color field**

```bash
curl -s http://localhost:3001/nfc/ -o /dev/null -w "%{http_code}\n"
```

Expected: `200`. (Full interactive verification of the new "Color" dropdown happens visually once product pages exist and this session's user checks the running dev server, as has been the pattern all session.)

- [ ] **Step 5: Commit**

```bash
git add src/components/NfcOrderForm.tsx src/pages/Nfc.tsx
git commit -m "$(cat <<'EOF'
Extract OrderForm into its own component and add a real color field

Moves OrderForm out of Nfc.tsx into src/components/NfcOrderForm.tsx so
the upcoming per-product pages can embed it directly. Adds a "Color"
select (the 7 real finish options plus "Sin preferencia") and a
presetColor prop, and includes the chosen color in both the
FormSubmit payload and the WhatsApp message.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 3: Build the reusable `src/pages/NfcProducto.tsx` page

**Files:**
- Create: `src/pages/NfcProducto.tsx`

**Interfaces:**
- Consumes: `PRODUCTS`, `NFC_COLOR_OPTIONS`, `USE_CASES`, `FAQS` from `../data/nfcProducts` (Task 1); `OrderForm` from `../components/NfcOrderForm` (Task 2); `NfcBackground, NfcNavbar, NfcEyebrow, NfcButton, NfcIconTile, NfcCard, NfcFooter, NFC_PALETTE` from `../components/nfc` (already exist).
- Produces: `export default function NfcProducto()` — a self-contained page component with no props, reading its slug from `window.location.pathname`. Consumed by `main.tsx` in Task 5.

- [ ] **Step 1: Create `src/pages/NfcProducto.tsx`**

```tsx
import { useState } from 'react';
import { ChevronLeft, Check } from 'lucide-react';
import { NfcBackground, NfcNavbar, NfcEyebrow, NfcButton, NfcIconTile, NfcCard, NfcFooter, NFC_PALETTE } from '../components/nfc';
import { OrderForm } from '../components/NfcOrderForm';
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
const COMPAT_FAQ_QUESTIONS = [
  "¿Funciona con cualquier móvil?",
  "¿Necesita batería o cargarse?",
  "¿Puedo cambiar el enlace después?",
  "¿Cuánto tarda el envío?",
  "¿Tiene garantía?",
];

function getSlugFromPath(): string {
  const path = window.location.pathname.replace(/\/+$/, '');
  return path.split('/').pop() ?? '';
}

export default function NfcProducto() {
  const slug = getSlugFromPath();
  const product = PRODUCTS.find(p => p.slug === slug) ?? PRODUCTS[0];
  const [color, setColor] = useState(NFC_COLOR_OPTIONS[0].name);

  const relatedUseCases = USE_CASES.filter(u => USE_CASE_TITLES_FOR_PRODUCT_PAGE.includes(u.title));
  const compatFaqs = FAQS.filter(f => COMPAT_FAQ_QUESTIONS.includes(f.q));

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

      {/* Compatibilidad y garantía */}
      <section className="relative z-10 w-full px-4 md:px-8 lg:px-16 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <NfcEyebrow className="mb-4">Compatibilidad y garantía</NfcEyebrow>
            <h2 style={{ ...HEADING_STYLE, fontSize: 'clamp(1.6rem,3vw,2.2rem)' }}>Todo lo que necesitas saber.</h2>
          </div>
          <NfcCard tabColor="var(--nfc-tan)" className="p-7 md:p-8">
            <ul className="space-y-4">
              {compatFaqs.map(f => (
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
```

- [ ] **Step 2: Build and lint to verify**

Run: `npm run build`
Expected: succeeds. (`NfcProducto.tsx` is not wired into any route yet, so it won't appear in `dist/` output as its own HTML — that happens in Task 5 — but it must still compile cleanly as an unreferenced-but-valid module. If Vite's build fails because the file is never imported anywhere, temporarily confirm compilation with `npx tsc --noEmit src/pages/NfcProducto.tsx --jsx react-jsx --esModuleInterop --skipLibCheck --moduleResolution bundler` instead, and rely on the full `npm run lint` in Step 3 as the real check once this file exists.)

Run: `npm run lint`
Expected: same 7-error baseline as before this task started, since `NfcProducto.tsx` is not yet imported by any entry point compiled into the app graph. (`tsc --noEmit` on this project type-checks the whole `src/` tree regardless of whether a file is imported, so its own `.map()` calls with `key` will also surface the same known error class — still not a regression per Global Constraints.)

- [ ] **Step 3: Commit**

```bash
git add src/pages/NfcProducto.tsx
git commit -m "$(cat <<'EOF'
Add reusable NfcProducto page component

Self-contained page (reads its own slug from window.location.pathname,
same pattern as every other page in src/pages/) rendering one
product's photo, description, honest color selector, "para qué sirve"
and "compatibilidad y garantía" sections (reusing real FAQ/use-case
content, no invented specs), and an embedded order form preselecting
the product and chosen color. Not yet wired to any route.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 4: Create the 5 static HTML entries for SEO

**Files:**
- Create: `nfc/tag-nfc/index.html`
- Create: `nfc/tarjeta-nfc/index.html`
- Create: `nfc/placa-mostrador/index.html`
- Create: `nfc/expositor-multi-enlace/index.html`
- Create: `nfc/pack-negocio/index.html`

**Interfaces:**
- Produces: 5 static HTML files, each self-contained (same `:root` CSS variables and font links as `nfc/index.html`, same `<script type="module" src="/src/main.tsx">` bootstrap), each with a distinct `<title>`, meta description, canonical URL, and `Product` JSON-LD. Consumed by Task 5's Vite config (as build inputs) and Vercel rewrites.

- [ ] **Step 1: Create `nfc/tag-nfc/index.html`**

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <title>Tag NFC 12€ | NFC Canarias — pegatina NFC para tu negocio</title>
    <meta name="description" content="Tag NFC adhesivo desde 12€, hecho en Gran Canaria. Configúralo para reseñas de Google, redes sociales o contacto. Sin apps para tu cliente, sin suscripción." />
    <link rel="canonical" href="https://automatizagc.xyz/nfc/tag-nfc" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="shortcut icon" href="/favicon.svg" />

    <meta property="og:type" content="product" />
    <meta property="og:site_name" content="NFC Canarias" />
    <meta property="og:title" content="Tag NFC 12€ | NFC Canarias" />
    <meta property="og:description" content="Tag NFC adhesivo desde 12€, hecho en Gran Canaria. Configúralo para reseñas de Google, redes sociales o contacto." />
    <meta property="og:url" content="https://automatizagc.xyz/nfc/tag-nfc" />
    <meta property="og:image" content="https://automatizagc.xyz/nfc/productos/tag-nfc.webp" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Tag NFC 12€ | NFC Canarias" />
    <meta name="twitter:description" content="Tag NFC adhesivo desde 12€, hecho en Gran Canaria. Sin apps, sin suscripción." />
    <meta name="twitter:image" content="https://automatizagc.xyz/nfc/productos/tag-nfc.webp" />

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
      "@type": "Product",
      "name": "Tag NFC",
      "description": "El punto de partida: una pegatina NFC discreta para pegar donde haga falta.",
      "brand": { "@type": "Brand", "name": "NFC Canarias" },
      "offers": {
        "@type": "Offer",
        "price": "12.00",
        "priceCurrency": "EUR",
        "url": "https://automatizagc.xyz/nfc/tag-nfc",
        "availability": "https://schema.org/InStock"
      }
    }
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 2: Create `nfc/tarjeta-nfc/index.html`**

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <title>Tarjeta NFC 19€ | NFC Canarias — tarjeta de visita todo-en-uno</title>
    <meta name="description" content="Tarjeta NFC individual, tamaño de visita, desde 19€. Comparte reseñas, redes o contacto en un toque. Hecha en Gran Canaria, envíos a toda España." />
    <link rel="canonical" href="https://automatizagc.xyz/nfc/tarjeta-nfc" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="shortcut icon" href="/favicon.svg" />

    <meta property="og:type" content="product" />
    <meta property="og:site_name" content="NFC Canarias" />
    <meta property="og:title" content="Tarjeta NFC 19€ | NFC Canarias" />
    <meta property="og:description" content="Tarjeta NFC individual, tamaño de visita, desde 19€. Comparte reseñas, redes o contacto en un toque." />
    <meta property="og:url" content="https://automatizagc.xyz/nfc/tarjeta-nfc" />
    <meta property="og:image" content="https://automatizagc.xyz/nfc/productos/tarjeta-nfc.webp" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Tarjeta NFC 19€ | NFC Canarias" />
    <meta name="twitter:description" content="Tarjeta NFC individual, tamaño de visita, desde 19€. Hecha en Gran Canaria." />
    <meta name="twitter:image" content="https://automatizagc.xyz/nfc/productos/tarjeta-nfc.webp" />

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
      "@type": "Product",
      "name": "Tarjeta NFC",
      "description": "Tarjeta individual, tamaño de visita, para ti o cada miembro de tu equipo.",
      "brand": { "@type": "Brand", "name": "NFC Canarias" },
      "offers": {
        "@type": "Offer",
        "price": "19.00",
        "priceCurrency": "EUR",
        "url": "https://automatizagc.xyz/nfc/tarjeta-nfc",
        "availability": "https://schema.org/InStock"
      }
    }
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 3: Create `nfc/placa-mostrador/index.html`**

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <title>Placa NFC de Mostrador 39€ | NFC Canarias</title>
    <meta name="description" content="Placa NFC de sobremesa desde 39€, ideal para pedir reseñas de Google en el momento del pago. Hecha en Gran Canaria, sin apps ni suscripción." />
    <link rel="canonical" href="https://automatizagc.xyz/nfc/placa-mostrador" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="shortcut icon" href="/favicon.svg" />

    <meta property="og:type" content="product" />
    <meta property="og:site_name" content="NFC Canarias" />
    <meta property="og:title" content="Placa NFC de Mostrador 39€ | NFC Canarias" />
    <meta property="og:description" content="Placa NFC de sobremesa desde 39€, ideal para pedir reseñas de Google en el momento del pago." />
    <meta property="og:url" content="https://automatizagc.xyz/nfc/placa-mostrador" />
    <meta property="og:image" content="https://automatizagc.xyz/nfc/productos/placa-mostrador.webp" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Placa NFC de Mostrador 39€ | NFC Canarias" />
    <meta name="twitter:description" content="Placa NFC de sobremesa desde 39€. Hecha en Gran Canaria." />
    <meta name="twitter:image" content="https://automatizagc.xyz/nfc/productos/placa-mostrador.webp" />

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
      "@type": "Product",
      "name": "Placa de Mostrador",
      "description": "Placa de sobremesa para el mostrador, visible para cada cliente que pasa por caja.",
      "brand": { "@type": "Brand", "name": "NFC Canarias" },
      "offers": {
        "@type": "Offer",
        "price": "39.00",
        "priceCurrency": "EUR",
        "url": "https://automatizagc.xyz/nfc/placa-mostrador",
        "availability": "https://schema.org/InStock"
      }
    }
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 4: Create `nfc/expositor-multi-enlace/index.html`**

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <title>Expositor NFC Multi-Enlace 69€ | NFC Canarias</title>
    <meta name="description" content="Expositor NFC de sobremesa con 3 zonas de toque independientes desde 69€: reseñas, redes y contacto por separado. Hecho en Gran Canaria." />
    <link rel="canonical" href="https://automatizagc.xyz/nfc/expositor-multi-enlace" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="shortcut icon" href="/favicon.svg" />

    <meta property="og:type" content="product" />
    <meta property="og:site_name" content="NFC Canarias" />
    <meta property="og:title" content="Expositor NFC Multi-Enlace 69€ | NFC Canarias" />
    <meta property="og:description" content="Expositor NFC de sobremesa con 3 zonas de toque independientes desde 69€: reseñas, redes y contacto por separado." />
    <meta property="og:url" content="https://automatizagc.xyz/nfc/expositor-multi-enlace" />
    <meta property="og:image" content="https://automatizagc.xyz/nfc/productos/expositor-multi-enlace.webp" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Expositor NFC Multi-Enlace 69€ | NFC Canarias" />
    <meta name="twitter:description" content="Expositor NFC de sobremesa con 3 zonas de toque independientes desde 69€." />
    <meta name="twitter:image" content="https://automatizagc.xyz/nfc/productos/expositor-multi-enlace.webp" />

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
      "@type": "Product",
      "name": "Expositor Multi-Enlace",
      "description": "Expositor de sobremesa con varios puntos de toque a la vez, cada uno con su propio destino.",
      "brand": { "@type": "Brand", "name": "NFC Canarias" },
      "offers": {
        "@type": "Offer",
        "price": "69.00",
        "priceCurrency": "EUR",
        "url": "https://automatizagc.xyz/nfc/expositor-multi-enlace",
        "availability": "https://schema.org/InStock"
      }
    }
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 5: Create `nfc/pack-negocio/index.html`**

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <title>Pack Negocio NFC 89€ | NFC Canarias — placa + 3 tarjetas</title>
    <meta name="description" content="Pack completo para tu negocio: 1 placa de mostrador + 3 tarjetas NFC por 89€. Todo configurable desde el móvil. Hecho en Gran Canaria." />
    <link rel="canonical" href="https://automatizagc.xyz/nfc/pack-negocio" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="shortcut icon" href="/favicon.svg" />

    <meta property="og:type" content="product" />
    <meta property="og:site_name" content="NFC Canarias" />
    <meta property="og:title" content="Pack Negocio NFC 89€ | NFC Canarias" />
    <meta property="og:description" content="Pack completo para tu negocio: 1 placa de mostrador + 3 tarjetas NFC por 89€." />
    <meta property="og:url" content="https://automatizagc.xyz/nfc/pack-negocio" />
    <meta property="og:image" content="https://automatizagc.xyz/nfc/productos/pack-negocio.webp" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Pack Negocio NFC 89€ | NFC Canarias" />
    <meta name="twitter:description" content="Pack completo para tu negocio: 1 placa de mostrador + 3 tarjetas NFC por 89€." />
    <meta name="twitter:image" content="https://automatizagc.xyz/nfc/productos/pack-negocio.webp" />

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
      "@type": "Product",
      "name": "Pack Negocio",
      "description": "Todo lo que necesita tu negocio: placa de mostrador + 3 tarjetas para el equipo.",
      "brand": { "@type": "Brand", "name": "NFC Canarias" },
      "offers": {
        "@type": "Offer",
        "price": "89.00",
        "priceCurrency": "EUR",
        "url": "https://automatizagc.xyz/nfc/pack-negocio",
        "availability": "https://schema.org/InStock"
      }
    }
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 6: Verify each file has a distinct, correct title**

```bash
for f in tag-nfc tarjeta-nfc placa-mostrador expositor-multi-enlace pack-negocio; do
  echo "$f:"; grep '<title>' "nfc/$f/index.html"
done
```

Expected: 5 different `<title>` lines, matching the products above.

- [ ] **Step 7: Commit**

```bash
git add nfc/tag-nfc nfc/tarjeta-nfc nfc/placa-mostrador nfc/expositor-multi-enlace nfc/pack-negocio
git commit -m "$(cat <<'EOF'
Add static HTML entries for the 5 product pages

Mirrors nfc/index.html's structure (fonts, CSS variables,
Organization JSON-LD) with a per-product <title>, meta description,
canonical URL, and Product JSON-LD (real price, no fabricated ratings
or reviews). Not yet wired into the Vite build or routing.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 5: Wire routing — Vite build, dev redirect, `main.tsx`, Vercel rewrites, and the product-grid CTA

**Files:**
- Modify: `vite.config.ts`
- Modify: `src/main.tsx`
- Modify: `vercel.json`
- Modify: `src/pages/Nfc.tsx` (product-grid CTA + remove now-dead `selectedProduct` state)

**Interfaces:**
- Consumes: `NfcProducto` default export from `../pages/NfcProducto` (Task 3); the 5 HTML files from Task 4; `p.slug` on each `NfcProduct` (Task 1).

- [ ] **Step 1: Update `vite.config.ts`**

Replace the whole file with:

```ts
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

/**
 * Solo en dev: /nfc y las páginas de producto (sin barra final) reciben el
 * index.html raíz vía el fallback SPA de Vite, sin las variables CSS de su
 * propio index.html. En producción vercel.json ya normaliza esto con una
 * rewrite; aquí replicamos lo mismo para que la versión con y sin barra se
 * comporten igual en local.
 */
const NFC_DEV_REDIRECT_ROUTES = [
  '/nfc',
  '/nfc/tag-nfc',
  '/nfc/tarjeta-nfc',
  '/nfc/placa-mostrador',
  '/nfc/expositor-multi-enlace',
  '/nfc/pack-negocio',
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

Add an import for `NfcProducto` alongside the existing `Nfc` import:

```tsx
import Nfc from './pages/Nfc.tsx';
import NfcProducto from './pages/NfcProducto.tsx';
```

Add 5 new branches to the `path === ... ? ... :` ternary chain, immediately after the existing `path === '/nfc' ? Nfc :` line and before the final `App` fallback:

```tsx
  path === '/nfc'                        ? Nfc          :
  path === '/nfc/tag-nfc'                ? NfcProducto  :
  path === '/nfc/tarjeta-nfc'            ? NfcProducto  :
  path === '/nfc/placa-mostrador'        ? NfcProducto  :
  path === '/nfc/expositor-multi-enlace' ? NfcProducto  :
  path === '/nfc/pack-negocio'           ? NfcProducto  :
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
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

(Without this, every one of the 5 new URLs would fall through to the catch-all `/(.*)` rule and serve the generic site `index.html` instead of the product page — this file was missed in the original design spec and is being corrected here.)

- [ ] **Step 4: Update the product-grid CTA in `src/pages/Nfc.tsx` and remove the now-dead `selectedProduct` state**

Change the button `onClick={() => setSelectedProduct(p.name)}` (in the product cards grid) so the "Elegir" button links straight to the product's own page instead of scrolling to the shared form:

```tsx
<NfcButton href={`/nfc/${p.slug}`} className="text-[12px] px-3.5 py-2">Elegir</NfcButton>
```

(Was: `<NfcButton href="#pedido" onClick={() => setSelectedProduct(p.name)} className="text-[12px] px-3.5 py-2">Elegir</NfcButton>`.)

In the hero's central-card CTA, remove the now-meaningless reset — change:

```tsx
<a
  href="#pedido"
  onClick={() => setSelectedProduct(null)}
  className="nfc-press w-full text-center rounded-2xl font-bold text-sm border-[2.5px] px-7 py-3.5"
  style={{ background: 'var(--nfc-paper)', color: 'var(--nfc-ink)', borderColor: 'var(--nfc-border)', boxShadow: '4px 4px 0 var(--nfc-border)' }}
>
  Pide la tuya
</a>
```

to:

```tsx
<a
  href="#pedido"
  className="nfc-press w-full text-center rounded-2xl font-bold text-sm border-[2.5px] px-7 py-3.5"
  style={{ background: 'var(--nfc-paper)', color: 'var(--nfc-ink)', borderColor: 'var(--nfc-border)', boxShadow: '4px 4px 0 var(--nfc-border)' }}
>
  Pide la tuya
</a>
```

Remove the now-unused state declaration `const [selectedProduct, setSelectedProduct] = useState<string | null>(null);` from inside `export default function Nfc() { ... }`.

Change the form call site near the bottom of the file from:

```tsx
<OrderForm preselected={selectedProduct} />
```

to:

```tsx
<OrderForm />
```

- [ ] **Step 5: Build and verify the full route set**

Run: `npm run build`
Expected: succeeds, and `dist/` now contains `dist/index.html`, `dist/nfc/index.html`, `dist/nfc/tag-nfc/index.html`, `dist/nfc/tarjeta-nfc/index.html`, `dist/nfc/placa-mostrador/index.html`, `dist/nfc/expositor-multi-enlace/index.html`, `dist/nfc/pack-negocio/index.html`. Verify with:

```bash
ls dist/nfc/*/index.html dist/nfc/index.html
```

Run: `npm run lint`
Expected: same 7-error baseline as before (`Nfc.tsx`'s error count should actually drop by one, since removing `selectedProduct` removes one JSX call site that had a spurious `key`-adjacent prop-shape issue only if applicable — if the count differs from 7, read the new list and confirm every line is one of the known "key"/`SeamlessVideo`/`Blog.tsx` errors, not a new class, before treating it as fine).

- [ ] **Step 6: Manually verify every route in dev**

With the dev server running on port 3001:

```bash
for slug in "" tag-nfc tarjeta-nfc placa-mostrador expositor-multi-enlace pack-negocio; do
  url="http://localhost:3001/nfc/${slug:+$slug/}"
  code=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  title=$(curl -s "$url" | grep -o '<title>[^<]*' | sed 's/<title>//')
  echo "$url -> $code | $title"
done
```

Expected: all 6 return `200`, each with a distinct, correct `<title>` matching the product (the bare `/nfc/` row shows the existing NFC Canarias hub title).

- [ ] **Step 7: Commit**

```bash
git add vite.config.ts src/main.tsx vercel.json src/pages/Nfc.tsx
git commit -m "$(cat <<'EOF'
Wire the 5 product pages into build, dev server, and production routing

Adds the 5 new HTML entries to Vite's rollupOptions.input, generalizes
the dev trailing-slash redirect to cover all 6 /nfc routes, adds
matching main.tsx path checks, and adds the missing vercel.json
rewrites (without these the new URLs would silently fall through to
the generic site index.html in production). The "Elegir" button on
each product card in the /nfc grid now links to that product's own
page instead of scrolling to the shared form, so the now-unreachable
selectedProduct state is removed.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
EOF
)"
```

---

## Post-plan note for the executor

After Task 5 lands, tell the user which 5 URLs to check on the dev server (e.g. `http://localhost:3001/nfc/tag-nfc/`) and wait for their visual confirmation before considering this feature done — every visual change this whole session has required the user's own look at the running page, and this plan does not change that.

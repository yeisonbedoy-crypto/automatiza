# NFC Canarias — Landing de servicio — Diseño

Fecha: 2026-09-10
Estado: Aprobado por el usuario (dirección visual, modelo de negocio, alcance y flujo de pedido confirmados en brainstorming)

## Objetivo

Crear una landing de servicio para la nueva línea de producto físico **NFC Canarias**
(tarjetas/placas NFC todo-en-uno: reseñas de Google, tarjeta de visita digital, carta/menú
digital, redes sociales, WiFi, ficha de contacto). Posicionarla en SEO principalmente para
Gran Canaria, con alcance declarado a todas las islas y España, sirviendo de página hub para
futuras landings locales por isla.

Inspiración de marca: allin-studio.com (Tap To Connect) — adaptada, no clonada: paleta y
tipografías propias, misma familia de patrones (editorial, papel claro, tipografía serif
itálica + mono, sombras offset duras).

Restricción: no se toca el diseño oscuro/verde existente del resto del sitio. Es un sistema
visual propio, igual que `agency.tsx` lo es para Servicios/Proyectos/Ecosistema/Presupuesto.

## Decisiones (validadas con el usuario)

1. Modelo de negocio: producto físico NFC con gestión completa (fabricación/config/envío),
   con posibilidad futura de integrarlo con los agentes de IA del ecosistema AutomatizaGC.
2. Dirección visual: sub-marca propia clara/editorial, distinta del resto del sitio.
3. Alcance de esta entrega: **una** landing pilar (`/nfc`), contenido centrado en Gran
   Canaria, mencionando Canarias y España como alcance — pensada para que en el futuro
   cuelguen de ella landings locales por isla (`/nfc-tenerife`, etc., fuera de alcance ahora).
4. Naming: **NFC Canarias**.
5. Flujo de pedido: formulario tipo `/presupuesto` (sin carrito ni pasarela de pago). Checkout
   real queda para una fase futura, no incluida aquí.
6. Contenido real (fotos, precios, proveedores) pendiente del usuario — se construye con copy
   y precios de ejemplo realistas, fácilmente sustituibles sin rehacer estructura.
7. Gancho principal: tarjeta/placa NFC todo-en-uno (no solo reseñas).

## Sistema visual — tokens propios (`src/components/nfc.tsx`)

```
--nfc-paper : #FAF6EF   (fondo cálido, no blanco puro)
--nfc-ink   : #1B1A17   (texto principal)
--nfc-ink2  : #4A4740   (texto secundario)
--nfc-ink3  : #8C877D   (texto terciario / meta)
--nfc-accent: #D98F2B   (ámbar terracota — acento de marca, CTAs, subrayados)
--nfc-line  : rgba(27,26,23,0.12)  (bordes)
```

Tipografías (Google Fonts, cargadas solo en `nfc/index.html`, con `preconnect`):
- **Fraunces** (italic, 400/500/600) — titulares editoriales
- **DM Sans** (400/500/600) — cuerpo
- **JetBrains Mono** (500) — eyebrows, precios, etiquetas de producto

Patrones visuales:
- Sombra offset dura: `box-shadow: 4px 4px 0 var(--nfc-accent)` en cards/botones destacados
- Bordes redondeados suaves (`rounded-xl`/`rounded-2xl`), mucho whitespace
- Sin glassmorphism ni vídeo de fondo en esta sección — fondo sólido `--nfc-paper` con textura
  de grano sutil opcional (reutilizar `.noise-overlay` ya existente en `index.css`, a muy baja
  opacidad)

Componentes nuevos en `src/components/nfc.tsx` (mismo patrón que `agency.tsx`):
- `NfcEyebrow` — etiqueta mono en mayúsculas, color acento
- `NfcButton` (solid, sombra offset) y `NfcGhostButton` (contorno)
- `NfcIconTile` — icono en tile con borde/acento claro
- `NfcCtaBanner` — banner CTA final, variante clara del `CtaBanner` de `agency.tsx`

El `Navbar` (oscuro, liquid-glass) y el `Footer` global se reutilizan sin cambios — dan
continuidad de marca en la navegación aunque el cuerpo de la página sea claro.

## Estructura de página (`src/pages/Nfc.tsx`)

1. **Hero** — H1 con keyword natural ("Tu tarjeta NFC todo-en-uno. Hecha en Gran Canaria."),
   subtítulo (reseñas, redes, carta y contacto en un solo toque, sin apps para el cliente),
   imagen/mockup de producto, CTAs "Pide la tuya" (ancla a formulario) y "Cómo funciona"
   (ancla a sección 5).
2. **Franja de confianza** — 4-5 logos de negocios de Gran Canaria (reutilizar
   `public/logos/*` ya existentes: Bapu, Zanga, Outlet) bajo el título "Negocios de Gran
   Canaria que ya confían en nosotros".
3. **Selector de producto** — 3 tarjetas: *Tarjeta NFC* (~19€, un perfil), *Placa de
   Mostrador* (~39€, mayor alcance/visibilidad), *Pack Negocio* (~89€, varias tarjetas +
   placa). Precios marcados como orientativos, a confirmar.
4. **Derivaciones de uso** — grid de 6: reseñas de Google (Star), tarjeta de visita digital
   (IdCard), carta/menú digital (UtensilsCrossed), redes sociales (Instagram), WiFi (Wifi),
   ficha de contacto/WhatsApp (MessageCircle).
5. **Cómo funciona** — 3 pasos numerados: 01 Acercas el móvil · 02 Se abre tu enlace al
   instante · 03 Cambias el destino cuando quieras (vía app gratuita NFC Tools). Sin
   suscripción, sin apps para quien lo usa.
6. **Por qué NFC Canarias** — sin suscripción / pago único, hecho y enviado desde Gran
   Canaria, soporte en español, integrable con los agentes de IA de AutomatizaGC.
7. **Cobertura** — bloque de contenido localizado: "Servimos negocios en Las Palmas de Gran
   Canaria, Telde, Santa Lucía de Tirajana, San Bartolomé de Tirajana, Maspalomas... y
   enviamos a toda Canarias y España."
8. **FAQ** — acordeón, 6 preguntas (compatibilidad iPhone/Android, necesita batería, puedo
   cambiar el enlace, cuánto tarda el envío, funciona sin internet el negocio, garantía).
9. **Formulario de pedido** — nombre, negocio, isla/ciudad, WhatsApp, producto de interés
   (select), mensaje. Envío vía `formsubmit.co/ajax/<email>` (mismo patrón que
   `Presupuesto.tsx`, sin backend nuevo).
10. **Footer** global existente.

## SEO técnico

El sitio es una SPA 100% client-side (routing por `window.location.pathname` en `main.tsx`,
sin React Router; toda navegación es `<a href>` con recarga completa de página — no hay
`pushState`). Eso significa que se puede dar a `/nfc` una entrada HTML estática propia sin
tocar el routing existente:

- **`nfc/index.html`** (nuevo, sibling de `index.html`): head propio con `<title>`, `<meta
  name="description">`, `canonical`, Open Graph y Twitter Card, preconnect + `<link>` de
  Fraunces/DM Sans/JetBrains Mono, y JSON-LD estático:
  - `Organization` (nombre, url, sameAs si aplica) con `areaServed`: Gran Canaria, Canarias,
    España
  - `Product` (NFC Canarias, oferta/rango de precio orientativo, `AggregateOffer`)
  - `FAQPage` con las 6 preguntas de la sección FAQ
  - Body idéntico a `index.html`: `<div id="root"></div>` + `<script type="module"
    src="/src/main.tsx">`
- **`vite.config.ts`**: `build.rollupOptions.input` con dos entradas (`main: 'index.html'`,
  `nfc: 'nfc/index.html'`)
- **`vercel.json`**: nueva regla `{ "source": "/nfc(/)?", "destination": "/nfc/index.html" }`
  insertada **antes** del catch-all `"/(.*)" -> "/index.html"` (el orden importa en Vercel)
- **`public/sitemap.xml`** (nuevo — no existe hoy para todo el sitio): incluye `/`, `/nfc` y
  el resto de rutas actuales
- **`public/robots.txt`** (nuevo): `Allow: /` + referencia al sitemap
- `main.tsx`: se añade `path === '/nfc' ? Nfc : ...` a la cadena existente, e import de
  `Nfc.tsx` — igual que el resto de páginas

Fuera de alcance (no se toca en esta entrega): SSR/prerender para el resto del sitio,
checkout con pago, páginas locales por isla, ficha de Google Business Profile (recomendable
pero es gestión externa, no código).

## Integración de navegación

Se añade el enlace `{ name: "NFC", href: "/nfc" }` al array de navegación en los 8 puntos
donde hoy se define (`Navbar.tsx` default + `Servicios.tsx`, `Proyectos.tsx`,
`Ecosistema.tsx`, `Presupuesto.tsx`, `Contacto.tsx`, `Precios.tsx`, `SobreNosotros.tsx`), y el
propio `Nfc.tsx` define su versión del mismo array. Así el enlace es alcanzable desde
cualquier página del sitio, lo que también ayuda al enlazado interno para SEO.

## Archivos nuevos

- `nfc/index.html`
- `src/pages/Nfc.tsx`
- `src/components/nfc.tsx`
- `public/sitemap.xml`
- `public/robots.txt`

## Archivos modificados

- `vite.config.ts` (multi-entry build)
- `vercel.json` (rewrite `/nfc`)
- `src/main.tsx` (import + ruta `/nfc`)
- `src/components/Navbar.tsx` + los 7 archivos de páginas listados arriba (enlace NFC en nav)

## Contenido placeholder — pendiente del usuario

Precios de los 3 packs, fotos/renders de producto reales, nombre exacto de proveedor (si se
menciona), y logos reales de clientes NFC (de momento se reutilizan los logos existentes del
sitio como prueba social genérica). Todo el copy de FAQ, cobertura y "por qué nosotros" es
redactado ahora y queda fácilmente editable.

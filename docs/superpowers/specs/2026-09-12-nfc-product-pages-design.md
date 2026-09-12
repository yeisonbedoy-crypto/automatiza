# NFC Canarias — páginas individuales de producto

Fecha: 2026-09-12
Rama: `nfc-canarias-landing` (worktree aislado, sin mergear a `master`)
Estado: aprobado por el usuario en chat, pendiente de plan de implementación

## 1. Objetivo

Hoy `/nfc` muestra los 5 productos como cards en una grilla, cada una con un
botón "Elegir" que hace scroll al formulario de pedido genérico dentro de la
misma página. El objetivo es dar a cada producto su propia página de venta
(inspirada en capturas de un e-commerce real tipo allin-studio), con URL
propia indexable, para reforzar el posicionamiento SEO de cola larga
(ej. "placa NFC mostrador Gran Canaria") y dar más contexto de compra antes
del formulario.

## 2. No-objetivos explícitos (regla anti-fabricación)

Esta regla se ha mantenido durante toda la sesión y aplica aquí con la misma
fuerza:

- **No** se fabrican dimensiones, materiales ni tipo de chip por producto —
  no tenemos esos datos reales. Se omiten por completo.
- **No** se construye un configurador 3D (drag-to-rotate, zoom) — no existen
  modelos 3D, solo una foto de fábrica por producto.
- **No** se muestra un carrito, totales de pedido, ni fechas de entrega
  dinámicas/calculadas ("Get it by Fri 25 Sep") — el pedido real se cierra
  por WhatsApp/formulario, no hay checkout. Los plazos de envío que se
  muestran son los genéricos ya existentes en las FAQ (3-5 días Gran
  Canaria, 4-7 días resto).
- **No** se simula que el selector de color re-renderiza la foto del
  producto — solo tenemos una foto en el color de fábrica. El selector de
  color es honesto: cambia qué color se pide, no lo que se ve.
- **No** se inventan reviews, ratings ni rankings (regla ya aplicada en el
  resto de la landing).

## 3. Estructura de datos compartida

Se extrae el array `PRODUCTS` (hoy definido dentro de `src/pages/Nfc.tsx`)
a un módulo nuevo `src/data/nfcProducts.ts`, añadiendo un campo `slug` a
cada producto:

```ts
export type NfcProduct = {
  slug: string;         // "tag-nfc" | "tarjeta-nfc" | "placa-mostrador" | "expositor-multi-enlace" | "pack-negocio"
  name: string;
  price: string;
  desc: string;
  items: string[];
  featured: boolean;
  Icon: LucideIcon;
  image: string;
  color: string;        // color de marca de la card (hex), ya existente
};

export const PRODUCTS: NfcProduct[] = [ ... ];

export const NFC_COLOR_OPTIONS = [
  { name: "Verde",  hex: "#4A9B4E" },
  { name: "Rojo",   hex: "#D64545" },
  { name: "Azul",   hex: "#4C63D2" },
  { name: "Beige",  hex: "#C9A876" },
  { name: "Negro",  hex: "#111111" },
  { name: "Blanco", hex: "#FFFDF8" },
  { name: "Plata",  hex: "#B8B8B8" },
];
```

Los hex de `NFC_COLOR_OPTIONS` son solo para pintar el swatch (círculo de
color en el selector); no tienen que coincidir con la paleta de marca de la
landing porque representan un color real de fabricación, no un token de
diseño.

`src/pages/Nfc.tsx` importa `PRODUCTS` desde el nuevo módulo en vez de
definirlo inline. Las 5 páginas de producto nuevas hacen lo mismo.

## 4. Rutas y build

Se añaden 5 rutas nuevas, todas bajo `/nfc/<slug>`:

- `/nfc/tag-nfc`
- `/nfc/tarjeta-nfc`
- `/nfc/placa-mostrador`
- `/nfc/expositor-multi-enlace`
- `/nfc/pack-negocio`

Cada una necesita: (a) una entrada Vite propia para SEO estático, (b) una
ruta en `main.tsx`, (c) el mismo tratamiento de barra final que ya existe
para `/nfc`.

### 4.1 Archivos HTML

Se crea `nfc/<slug>/index.html` por cada producto, clonando el patrón de
`nfc/index.html`: mismos `<link>` de fuentes, mismas variables CSS
`:root`, pero con:
- `<title>` y meta description específicos del producto (usando su nombre,
  precio y descripción real de `PRODUCTS`).
- `<link rel="canonical" href="https://automatizagc.xyz/nfc/<slug>">`.
- JSON-LD `Product` con `name`, `description`, `offers.price` (usando el
  precio real), `brand: "NFC Canarias"` — sin `AggregateRating` ni
  `Review` (no hay reviews reales).
- Sin bloque `FAQPage` propio (se deja el de `/nfc`, evita JSON-LD
  duplicado con el mismo contenido en 6 URLs).

### 4.2 `vite.config.ts`

`build.rollupOptions.input` gana 5 entradas más, una por slug, apuntando a
`nfc/<slug>/index.html`.

El plugin `nfcTrailingSlashDevRedirect` se generaliza de "si la URL es
exactamente `/nfc`" a una lista de rutas conocidas (`/nfc` + las 5 rutas de
producto), redirigiendo `<ruta>` → `<ruta>/` en dev, igual que hoy.

### 4.3 `main.tsx`

Se añaden 5 imports (`NfcTagNfc`, `NfcTarjetaNfc`, etc. — o un único
componente `NfcProducto` parametrizado, ver §5) y 5 comparaciones de
`path` análogas a la de `/nfc` ya existente.

## 5. Componente de página de producto

En vez de 5 componentes casi idénticos, se crea un único componente
`src/pages/NfcProducto.tsx`, sin props, que deriva su propio slug leyendo
`window.location.pathname` (mismo patrón self-contained que ya usan el
resto de páginas de `src/pages/`, incluida `Nfc.tsx`) y busca el producto
correspondiente en `PRODUCTS` con `.find(p => p.slug === slug)`. Si el
slug no coincide con ningún producto, no debería ocurrir en producción
(las 5 rutas están fijadas explícitamente en `main.tsx`, cada una
renderizando `<NfcProducto />`), así que no hace falta una pantalla de
error 404 dedicada para esta iteración.

### Anatomía de la página (de arriba abajo)

1. **Navbar** — reutiliza `NfcNavbar` (mismo `navItems` que `/nfc`).
2. **Volver** — enlace "← Todos los formatos" a `/nfc#productos`.
3. **Cabecera de producto** — layout a dos columnas (foto | info), similar
   al de la referencia:
   - Columna foto: la imagen ya existente de `PRODUCTS[].image`, dentro de
     un `NfcCard` grande con el color del producto como `tabColor`. Sin
     miniaturas de galería (solo hay una foto).
   - Columna info: eyebrow con el nombre de categoría, `<h1>` con el
     nombre del producto, descripción (`desc`), precio grande, selector de
     color (§6), botón CTA "Pedir este formato" que hace scroll al
     formulario embebido (§7).
4. **Qué incluye** — lista `items` del producto (ya existe el contenido,
   solo cambia el layout a algo más protagonista que en la card pequeña).
5. **Para qué sirve** — reutiliza 3-4 entradas de `FEATURES` (ya definidas
   en `Nfc.tsx`), las más relevantes en general (reseñas, redes, tarjeta de
   contacto) — mismo contenido honesto que ya se usa en `/nfc`.
6. **Compatibilidad y garantía** — reutiliza el texto ya existente en
   `FAQS`: funciona con iPhone 7+/Android reciente sin apps, es pasivo (sin
   batería), cambio de enlace gratis desde la app, 12 meses de garantía,
   plazos de envío genéricos.
7. **Formulario de pedido** — `OrderForm` embebido con `preselected` =
   nombre del producto y `presetColor` = color elegido en el selector.
8. **Footer** — reutiliza `NfcFooter`.

## 6. Selector de color

Debajo del precio, 7 swatches circulares (uno por `NFC_COLOR_OPTIONS`),
con borde grueso neo-brutalista y un check/anillo cuando está
seleccionado (mismo lenguaje visual que el resto de `/nfc`). Estado local
`useState<string>` en `NfcProducto`, inicializado al primer color
("Verde"). Debajo del selector, una nota pequeña y honesta: *"Se fabrica
en el color que elijas. Foto de referencia en el color de fábrica."*

## 7. Cambios en `OrderForm` / formulario de pedido

- `NfcFormState` gana un campo `color: string`.
- `OrderForm` gana una prop opcional `presetColor?: string`, con el mismo
  patrón de `useEffect` que ya existe para `preselected`.
- Se añade un `<select>` de color al formulario con una primera opción
  fija "Sin preferencia" seguida de las 7 `NFC_COLOR_OPTIONS`. El valor
  inicial es `presetColor` si se recibe (llegando desde una página de
  producto, donde ya se eligió un swatch), o "Sin preferencia" en el
  formulario genérico de `/nfc#pedido`.
- El payload a FormSubmit y el mensaje de WhatsApp incluyen la línea de
  color (`🎨 *Color:* ${form.color}`), igual que ya incluyen producto.

## 8. Cambios en `/nfc` (listado)

- El botón "Elegir" de cada card en la grilla de productos deja de hacer
  `href="#pedido"` + `setSelectedProduct` y pasa a ser un enlace real a
  `/nfc/<slug>`.
- El formulario genérico de `/nfc#pedido` se mantiene tal cual (para quien
  llega sin tener claro el producto, o para el tráfico que aterriza
  directo en `/nfc`).

## 9. Archivos afectados (resumen)

- Nuevo: `src/data/nfcProducts.ts`
- Nuevo: `src/pages/NfcProducto.tsx`
- Nuevo: `nfc/tag-nfc/index.html`, `nfc/tarjeta-nfc/index.html`,
  `nfc/placa-mostrador/index.html`, `nfc/expositor-multi-enlace/index.html`,
  `nfc/pack-negocio/index.html`
- Editado: `src/pages/Nfc.tsx` (importa `PRODUCTS` desde el nuevo módulo,
  cambia el CTA "Elegir", `OrderForm`/`NfcFormState` ganan color)
- Editado: `vite.config.ts` (5 entradas nuevas de build, redirect
  generalizado)
- Editado: `src/main.tsx` (5 rutas nuevas)

## 10. Verificación

- `npm run build` limpio (sin nuevas clases de error TS más allá de la
  base conocida de 7).
- Cada una de las 6 URLs de `/nfc/*` responde 200 en dev y sirve su propio
  `<title>` (verificable con `curl -s <url> | grep '<title>'`).
- El botón "Elegir" de cada card navega al slug correcto.
- Enviar el formulario desde una página de producto entrega el producto y
  color correctos en el mensaje de WhatsApp generado (revisar el string
  antes de abrir la ventana, sin necesidad de enviar un WhatsApp real).

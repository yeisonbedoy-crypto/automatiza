# NFC Canarias — páginas de zona por isla

Fecha: 2026-09-13
Rama: `nfc-canarias-landing` (worktree aislado, sin mergear a `master`)
Estado: aprobado por el usuario en chat, pendiente de plan de implementación

## 1. Objetivo

`/nfc` es hoy la landing pilar, centrada en Gran Canaria (sede real del
negocio). El spec original del proyecto
(`docs/plans/2026-09-10-nfc-canarias-landing-design.md:26-28`) ya dejaba
anotado que en el futuro colgarían de ella landings locales por isla. El
objetivo de este trabajo es construir la primera tanda: **3 páginas de
isla** (`/nfc/tenerife`, `/nfc/lanzarote`, `/nfc/fuerteventura`), elegidas
por ser las de mayor población y oportunidad de negocio de Canarias tras
Gran Canaria, para capturar búsquedas de cola larga tipo "tarjeta NFC
Tenerife".

Fuera de alcance de este documento (tarea separada, más acotada, ya
anotada para después): reforzar el SEO/contenido de `/nfc` en sí misma
como referente de Gran Canaria.

## 2. El riesgo real: páginas "doorway" y contenido duplicado

Google penaliza páginas que solo cambian el nombre del lugar sobre el
mismo contenido genérico ("doorway pages"), y también penaliza el
contenido duplicado entre páginas del mismo sitio. Como hoy no existen
clientes, socios ni presencia física reales en estas 3 islas, esta
sección fija las reglas que evitan ambos problemas sin fabricar nada:

- **No** se inventan oficinas, equipo local, clientes ni reseñas en
  ninguna isla.
- **No** se repite el catálogo completo de productos (con sus
  descripciones e items) en cada página de isla — eso crearía contenido
  casi idéntico en 4 URLs (`/nfc` + 3 zonas). Las páginas de zona
  **enlazan** a `/nfc#productos` para ver el catálogo completo, en vez de
  duplicarlo.
- **Sí** se usa contenido real y verificable para diferenciar cada
  página:
  - Localidades reales de cada isla en la sección de cobertura (mismo
    patrón que ya existe para los municipios de Gran Canaria).
  - Un orden distinto de `USE_CASES` (contenido ya real y existente, solo
    reordenado) según el sector económico predominante y públicamente
    conocido de cada isla — no una afirmación sobre clientes que no
    existen, sino una decisión editorial honesta de qué destacar primero:
    - Tenerife: mayor peso hostelero/turístico de Canarias → reseñas de
      Google y carta digital primero.
    - Lanzarote: fuerte comercio turístico/artesanal → redes sociales y
      tarjeta de contacto primero.
    - Fuerteventura: turismo de playa/surf → redes sociales y WiFi del
      local primero (relevante para hostales y escuelas de surf).
  - El mismo texto honesto de plazos de envío ya usado en la FAQ (4-7
    días laborables a "resto de Canarias") — sin inventar plazos
    distintos por isla, porque no los hay.
  - `<title>`/meta description/H1 propios por isla, con su nombre real.

## 3. Estructura de datos

Nuevo módulo `src/data/nfcZonas.ts`:

```ts
export type NfcZona = {
  slug: string;             // "tenerife" | "lanzarote" | "fuerteventura"
  isla: string;              // "Tenerife" — debe coincidir EXACTAMENTE con
                              // una entrada de ISLAS en NfcOrderForm.tsx,
                              // para que el <select> de isla del formulario
                              // pueda preseleccionarla
  localidades: string[];     // localidades reales de esa isla
  useCaseTitles: string[];   // los 6 títulos de USE_CASES, reordenados
                              // (mismo contenido de src/data/nfcProducts.ts,
                              // sin reescribir ni fabricar nada nuevo)
  intro: string;             // 1-2 frases honestas específicas de la isla
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

`useCaseTitles` reordena exactamente los 6 títulos ya existentes en
`USE_CASES` (`src/data/nfcProducts.ts:90-97`): "Reseñas de Google",
"Tarjeta de visita digital", "Carta o menú digital", "Redes sociales",
"WiFi del local", "Contacto directo". La página de zona hace
`useCaseTitles.map(title => USE_CASES.find(u => u.title === title))`
para pintar los 6 en ese orden — mismo contenido, orden distinto, cero
texto nuevo inventado por caso de uso.

## 4. Página de zona

Nuevo componente único `src/pages/NfcZona.tsx` (mismo patrón
self-contained que `NfcProducto.tsx`: sin props, deriva su propio slug de
`window.location.pathname`, busca en `ZONAS`).

### Anatomía

1. **Navbar** (`NfcNavbar`, mismo `navItems` que el resto de `/nfc`).
2. **Hero de zona**: eyebrow "NFC Canarias", `<h1>` tipo "Tarjeta y placa
   NFC en {isla}.", el párrafo `intro` de esa zona, CTA "Ver todos los
   formatos" → `/nfc#productos` (enlace, no duplica el catálogo).
3. **Para qué sirve**: los 6 `USE_CASES` reordenados según
   `useCaseTitles` — mismo componente/estilo que ya se usa en `/nfc` y en
   `NfcProducto.tsx`.
4. **Dónde llegamos en {isla}**: lista de `localidades` reales, mismo
   tratamiento visual que la sección "Cobertura" de `/nfc`
   (`src/pages/Nfc.tsx:370-385`), más una frase honesta de plazos (4-7
   días laborables, texto ya existente en `FAQS`).
5. **FAQ**: reutiliza las 6 `FAQS` completas tal cual existen hoy — son
   generales (compatibilidad, batería, cambiar enlace, envío, garantía),
   válidas para cualquier isla sin cambios.
6. **Formulario de pedido**: `OrderForm` embebido con `presetIsla={zona.isla}`
   (campo nuevo, ver §5) para que el desplegable de isla llegue
   preseleccionado, igual que las páginas de producto preseleccionan
   producto y color.
7. **Otras islas**: bloque pequeño con enlaces a las otras 2 páginas de
   zona + enlace a `/nfc`, para enlazado interno.
8. **Footer** (`NfcFooter`).

## 5. Cambio en `OrderForm`

`src/components/NfcOrderForm.tsx` gana una prop opcional `presetIsla?:
string`, con el mismo patrón `useEffect` que ya usan `preselected` y
`presetColor`:

```ts
export function OrderForm({
  preselected = null,
  presetColor,
  presetIsla,
}: {
  preselected?: string | null;
  presetColor?: string;
  presetIsla?: string;
}) { ... }
```

El valor inicial de `form.isla` pasa de `'Gran Canaria'` fijo a
`presetIsla ?? 'Gran Canaria'`. Los call sites existentes en `Nfc.tsx` y
`NfcProducto.tsx` no cambian (no pasan `presetIsla`, así que siguen
usando "Gran Canaria" por defecto).

## 6. Enlazado interno desde `/nfc`

Sin páginas huérfanas: se añaden enlaces a las 3 páginas de zona desde:
- La sección "Cobertura" de `/nfc` (`src/pages/Nfc.tsx:370-385`), que ya
  menciona Tenerife/Lanzarote/Fuerteventura en texto plano — se
  convierten esos 3 nombres (o se añade una fila de 3 botones/enlaces
  debajo del párrafo) en enlaces reales a `/nfc/tenerife`,
  `/nfc/lanzarote`, `/nfc/fuerteventura`.
- El footer compartido (`NfcFooter`, `src/components/nfc.tsx`) puede
  opcionalmente listar las 3 islas bajo el bloque "NFC Canarias" — a
  decidir en el plan de implementación, no bloqueante para el spec.

## 7. Rutas y build (mismo patrón que las páginas de producto, con la lección ya aprendida)

- 3 archivos `nfc/tenerife/index.html`, `nfc/lanzarote/index.html`,
  `nfc/fuerteventura/index.html`, con `<title>`/meta description/canonical
  propios, el mismo `Organization` JSON-LD verbatim que ya existe en
  `nfc/index.html`, y un JSON-LD `Service` propio por isla (nombre del
  servicio, `provider: Organization`, `areaServed` = esa isla) — **sin**
  `LocalBusiness` (implicaría una sede física que no existe) y **sin**
  `AggregateRating`/`Review`.
- `vite.config.ts`: 3 entradas más en `rollupOptions.input`, y las 3
  rutas añadidas a la lista de redirect de barra final en dev
  (`NFC_DEV_REDIRECT_ROUTES` o el nombre que tenga en ese momento).
- `src/main.tsx`: import de `NfcZona` y el check derivado de datos —
  **no** repetir el error ya corregido una vez con los productos
  (comparaciones literales por cada slug); usar directamente:
  ```tsx
  ZONAS.some(z => `/nfc/${z.slug}` === path) ? NfcZona :
  ```
- `vercel.json`: 3 rewrites nuevas (`/nfc/tenerife(/)?` →
  `/nfc/tenerife/index.html`, etc.) **añadidas desde el principio**, no
  como corrección posterior — es exactamente el fallo que se detectó y
  corrigió en la revisión final del trabajo anterior.
- `public/sitemap.xml`: 3 URLs nuevas desde el principio, mismo motivo.

## 8. Verificación

- `npm run build` limpio, `dist/` con las 3 páginas nuevas.
- `npm run lint` sin nuevas clases de error TS más allá del baseline
  conocido (a confirmar el número exacto en el momento del plan, ya que
  ha ido bajando con cada refactor).
- Las 9 rutas bajo `/nfc/*` (el hub `/nfc`, las 5 páginas de producto ya
  existentes, y las 3 páginas de zona nuevas) responden 200 en dev, cada
  una con su propio `<title>` distinto.
- Los 3 enlaces nuevos desde `/nfc` (sección Cobertura) apuntan a las
  URLs correctas.
- El formulario de pedido embebido en cada página de zona trae la isla
  correcta preseleccionada.

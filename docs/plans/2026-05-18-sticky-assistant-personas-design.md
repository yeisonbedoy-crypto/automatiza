# Sticky Assistant con personas por bloque — Diseño

Fecha: 2026-05-18
Estado: Aprobado por el usuario

## Objetivo

Añadir un botón sticky de chat con IA a la landing de Automatiza GC que despliega
el agente Canario, manteniendo coherencia total con el diseño existente. El sticky
adopta una "personalidad" distinta según desde dónde se invoque:

- Botón `#email` ("Simular un correo") → persona `email`
- Botón `#whatsapp` ("Chatea conmigo ahora") → persona `whatsapp`
- Botón `#instagram` ("Mándame un MD de prueba") → persona `instagram`
- Botón `#boss` ("Audita tu empresa gratis") → persona `boss`
- Botón flotante solo (sin bloque) → persona `default` (Canario / Automatiza GC)

Restricción dura: **el diseño existente es intocable**. Solo se añade.

## Decisiones (validadas con el usuario)

1. La personalidad vive en el **backend** (parámetro `persona` en `/api/chat`).
2. El correo usa el **mismo panel de chat** con persona `email` + mensaje de apertura.
3. **Conversación nueva** al invocar desde un bloque distinto (sessionId por persona).
4. Alcance: el chat va solo en **nuestra landing** (no en webs de clientes — futuro).
   No se modifica el CORS del backend; se usa proxy same-origin.

## Arquitectura

### Backend (`automatiza-gc-backend`, ya desplegado)

- `lib/prompts.ts`: mantener `CANARIO_SYSTEM_PROMPT` como base compartida. Añadir
  `PERSONA_FRAGMENTS: Record<Persona, string>` con el fragmento de cada persona.
- `lib/canario.ts`: `CanarioRequest` gana `persona?: Persona`. `buildSystemPrompt`
  concatena base + fragmento de persona + knowledge + sector.
- `api/chat.ts`: lee `persona` del body, lo pasa a `chatStream`. Default = `default`
  (comportamiento idéntico al actual; no rompe nada).

Personas: `default`, `whatsapp`, `instagram`, `email`, `boss`.

### Frontend (`automatiza-gc`)

- `src/lib/personas.ts`: catálogo de personas (id, nombre visible, color de acento,
  mensaje de apertura).
- `src/components/StickyAssistant.tsx`: botón flotante (usa `LogoIcon`) + panel de
  chat. Estética `liquid-glass` + borde tipo `HoverBorderGradient`, `motion/react`,
  Inter, sin emojis en el chrome (regla premium). Header con color de acento por
  persona. Streaming SSE igual que `test-chat.html`. `sessionId` por persona en
  `localStorage` (`automatiza_chat_<persona>`).
- `src/App.tsx`: montar `<StickyAssistant/>`.
- `src/components/Sections.tsx`: añadir solo `onClick` a los 4 botones de bloque
  (sin cambiar markup ni clases). Comunicación vía evento global / contexto ligero.
- `vite.config.ts`: `server.proxy['/api/chat']` → backend.
- `vercel.json`: rewrite `/api/chat` → backend ANTES del catch-all SPA.

Proxy same-origin → cero CORS en dev, túnel y producción, sin tocar el backend.

## Voces de las personas

- `default`: Canario / Automatiza GC (vende la agencia). Apertura: saludo cálido.
- `whatsapp`: comercial cercano, cierra ventas, agenda. Apertura: demo en vivo.
- `instagram`: social, desenfadada, ventas por DM, comunidad.
- `email`: formal, ejecutivo, ordenado, sobrio. Apertura: pide correo de ejemplo.
- `boss`: estratega senior, visión global, auditoría.

Todas heredan las reglas de identidad de la base (no revela que es Claude, tuteo,
handoff a WhatsApp, no usar "montar", etc.).

## Archivos modificados

Backend: `lib/prompts.ts`, `lib/canario.ts`, `api/chat.ts` (+ redeploy Vercel).
Frontend: `src/components/StickyAssistant.tsx` (nuevo), `src/lib/personas.ts`
(nuevo), `src/components/Sections.tsx` (onClick), `src/App.tsx`, `vite.config.ts`,
`vercel.json`.

Ningún cambio visual a lo existente.

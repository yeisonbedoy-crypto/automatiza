# Precios Copy Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reescribir el copy de las tarjetas de precios con enfoque en dolor eliminado + generación automática de ingresos, añadiendo web page creation por plan.

**Architecture:** Cambios únicamente en `src/pages/Precios.tsx` — se actualizan los arrays de datos (STARTER_FEATURES, GROWTH_FEATURES, AUTOPILOT_FEATURES y sus NOT_INCLUDED) y los textos h3/p de cada tarjeta. No se toca JSX estructural ni estilos.

**Tech Stack:** React, TypeScript, Tailwind CSS

---

### Task 1: Actualizar arrays de features

**Files:**
- Modify: `src/pages/Precios.tsx:18-54`

- [ ] **Step 1: Reemplazar STARTER_FEATURES**

```typescript
const STARTER_FEATURES = [
  'IA Comercial activa 24/7 en un canal',
  'Landing page + 2-3 páginas web incluidas',
  'SEO básico: metas, sitemap y Google indexado',
  'Captación y calificación automática de leads',
  'Respuestas inteligentes sin intervención humana',
  'Activación guiada en 48 horas',
];
```

- [ ] **Step 2: Reemplazar GROWTH_FEATURES**

```typescript
const GROWTH_FEATURES = [
  'IA Comercial 24/7 en todos los canales',
  'Web multipágina + SEO local y sectorial',
  'Google Analytics y conversiones integradas',
  'Cierre automático de ventas y seguimiento',
  'Reportes semanales de conversión y retorno',
  'Soporte prioritario y optimización mensual',
];
```

- [ ] **Step 3: Reemplazar AUTOPILOT_FEATURES**

```typescript
const AUTOPILOT_FEATURES = [
  'Todo lo incluido en Growth',
  'Agentes ilimitados por canal',
  'Web personalizada + SEO técnico avanzado',
  'Estrategia de contenidos y posicionamiento',
  'Integraciones CRM y ERP a medida',
  'Gestor de cuenta dedicado',
  'Auditoría mensual de conversión + SLA 99.9%',
];
```

- [ ] **Step 4: Commit**

```bash
git add src/pages/Precios.tsx
git commit -m "feat(precios): actualizar features con web por plan y copy de ingresos"
```

---

### Task 2: Actualizar títulos y descripciones de tarjetas

**Files:**
- Modify: `src/pages/Precios.tsx:121-123` (Starter h3/p)
- Modify: `src/pages/Precios.tsx:170-172` (Growth h3/p)
- Modify: `src/pages/Precios.tsx:214-216` (Autopilot h3/p)
- Modify: `src/pages/Precios.tsx:296-299` (Enterprise h3/p)

- [ ] **Step 1: Actualizar tarjeta Starter**

Reemplazar el bloque `h3` + `p` del Starter (líneas ~121-123):
```tsx
<h3 className="text-lg font-semibold text-white leading-snug mb-2">Deja de perder<br />leads al instante</h3>
<p className="text-sm text-white/40 leading-relaxed">Un agente activo 24/7 y una web que capta desde el primer día. Sin esperas, sin fricción.</p>
```

- [ ] **Step 2: Actualizar tarjeta Growth**

Reemplazar el bloque `h3` + `p` del Growth (líneas ~171-172):
```tsx
<h3 className="text-lg font-semibold text-white leading-snug mb-2">Todos tus canales,<br />un solo motor</h3>
<p className="text-sm text-white/40 leading-relaxed">WhatsApp, Instagram y email unificados. Tu web optimizada para convertir. Cada lead seguido y cerrado solo.</p>
```

- [ ] **Step 3: Actualizar tarjeta Autopilot**

Reemplazar el bloque `h3` + `p` del Autopilot (líneas ~215-216):
```tsx
<h3 className="text-lg font-semibold text-white leading-snug mb-2">Tu negocio<br />funciona. Sin ti.</h3>
<p className="text-sm text-white/40 leading-relaxed">Agentes ilimitados, CRM integrado y web personalizada con SEO técnico avanzado. Escala sin fricción, factura sin tocar nada.</p>
```

- [ ] **Step 4: Actualizar tarjeta Enterprise**

Reemplazar el bloque `h3` + `p` del Enterprise (líneas ~295-299):
```tsx
<h3
  className="font-black uppercase text-[#F5F0E8] mb-4"
  style={{
    fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
    lineHeight: 0.9,
    letterSpacing: '-0.04em',
  }}
>
  Arquitectura<br />sin techo
</h3>
<p className="text-sm leading-relaxed max-w-sm" style={{ color: 'oklch(80% 0.01 265 / 0.38)' }}>
  Para operaciones que exigen escala absoluta. Web enterprise, SEO de autoridad y acompañamiento dedicado.
</p>
```

- [ ] **Step 5: Commit**

```bash
git add src/pages/Precios.tsx
git commit -m "feat(precios): títulos hook con enfoque dolor eliminado en las 4 tarjetas"
```

# Spec: Rediseño de copy — Página de Precios

**Fecha:** 2026-05-14
**Enfoque:** Reducción de fricción operativa + generación automática de ingresos
**Estilo de título:** Dolor eliminado (corto, con hook)

---

## Objetivo

Reescribir el copy de las 4 tarjetas de precios (Starter, Growth, Autopilot, Enterprise) con:
1. Títulos gancho cortos orientados al dolor que desaparece
2. Descripciones centradas en fricción operativa y generación automática de ingresos
3. Creación de página web incluida en cada plan, escalando de básica a personalizada

---

## Cambios por plan

### Starter — 399€/mes

**Título:** `Deja de perder leads al instante`
**Descripción:** `Un agente activo 24/7 y una web que capta desde el primer día. Sin esperas, sin fricción.`

**Features (incluye):**
- IA Comercial activa 24/7 en un canal
- Landing page + 2-3 páginas web incluidas
- SEO básico: metas, sitemap y Google indexado
- Captación y calificación automática de leads
- Respuestas inteligentes sin intervención humana
- Activación guiada en 48 horas

**No incluye:** (sin cambios)
- Canales múltiples (WhatsApp, Instagram y email)
- Cierre automático de ventas y seguimiento
- Reportes semanales de conversión

---

### Growth — 699€/mes

**Título:** `Todos tus canales, un solo motor`
**Descripción:** `WhatsApp, Instagram y email unificados. Tu web optimizada para convertir. Cada lead seguido y cerrado solo.`

**Features (incluye):**
- IA Comercial 24/7 en todos los canales
- Web multipágina + SEO local y sectorial
- Google Analytics y conversiones integradas
- Cierre automático de ventas y seguimiento
- Reportes semanales de conversión y retorno
- Soporte prioritario y optimización mensual

**No incluye:** (sin cambios)
- Agentes ilimitados por canal
- Integraciones CRM y ERP a medida
- Gestor de cuenta dedicado + SLA 99.9%

---

### Autopilot — 1.200€/mes

**Título:** `Tu negocio funciona. Sin ti.`
**Descripción:** `Agentes ilimitados, CRM integrado y web personalizada con SEO técnico avanzado. Escala sin fricción, factura sin tocar nada.`

**Features (incluye):**
- Todo lo incluido en Growth
- Agentes ilimitados por canal
- Web personalizada + SEO técnico avanzado
- Estrategia de contenidos y posicionamiento
- Integraciones CRM y ERP a medida
- Gestor de cuenta dedicado
- Auditoría mensual de conversión + SLA 99.9%

*(Sin sección "No incluye" — plan completo)*

---

### Enterprise — Precio bajo consulta

**Título:** `Arquitectura sin techo`
**Descripción:** `Para operaciones que exigen escala absoluta. Web enterprise, SEO de autoridad y acompañamiento dedicado.`

*(El resto del layout Enterprise no cambia)*

---

## Notas de implementación

- Solo cambian los arrays de datos y los textos `h3`/`p` dentro de cada tarjeta
- No se modifica estructura JSX ni estilos
- El feature de web se inserta en posición 2 de cada array (tras el primer item de IA)

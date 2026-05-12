# Contexto del Proyecto: Automatiza

Este documento sirve como "Cerebro Central" o archivo de contexto. Está diseñado para que cualquier IA (como Gemini, Claude, ChatGPT, etc.) pueda leerlo y entender de inmediato quiénes somos, qué hacemos y cómo está construido nuestro proyecto a nivel técnico.

---

## 🏢 1. Contexto de Negocio: ¿Quiénes Somos y Qué Hacemos?

**Nombre de la Empresa / Proyecto:** Automatiza
**Nuestra Misión:** Transformar la manera en que las empresas gestionan su comunicación digital. Buscamos liberar el tiempo de los dueños de negocios y equipos de trabajo mediante la automatización inteligente de tareas repetitivas de gestión, atención al cliente y ventas, generando un impacto directo en la productividad y escalabilidad.

### 💼 Servicios que Ofrecemos
Nos especializamos en la integración de agentes de Inteligencia Artificial en los principales canales de comunicación:

1. **Gestión de WhatsApp (Ventas y Soporte):** 
   - Agentes de IA capaces de chatear de forma natural.
   - Resolución de dudas instantánea, agendamiento de citas y cierre de ventas "en caliente".
2. **Automatización en Instagram (Engagement y DMs):**
   - Respuesta automática 24/7 a comentarios e historias.
   - Embudos de conversión en Mensajes Directos (DMs) para monetizar la audiencia guiando al usuario hasta el carrito de compra.
3. **Gestión de Correos Electrónicos:**
   - Clasificación inteligente de la bandeja de entrada según contexto.
   - Redacción de respuestas autónomas, precisas y empáticas sin intervención manual.
4. **"El Jefe" (Inteligencia Centralizada):**
   - Un sistema cognitivo de alto nivel que orquesta las operaciones de la empresa.
   - Coordina a los demás sub-agentes, audita procesos y toma decisiones basadas en datos en tiempo real.

---

## 🛠️ 2. Contexto Técnico: Arquitectura y Stack

Nuestro proyecto es una Landing Page moderna, altamente interactiva y de aspecto "Premium", diseñada para deslumbrar ("wow effect") y generar confianza tecnológica a primera vista.

### 📚 Stack Tecnológico Principal
- **Framework:** React 19 (con TypeScript).
- **Bundler / Entorno:** Vite.
- **Estilos:** Tailwind CSS v4.0 + CSS puro (Vanilla CSS).
- **Iconografía:** `lucide-react`.
- **Animaciones:** `motion/react` (Framer Motion).

### 🎨 Diseño y Estética ("Liquid Glass")
El diseño visual es crítico para nuestra identidad. No usamos diseños planos o básicos. Las claves de nuestra UI/UX son:
- **Liquid Glass (Glassmorphism):** Uso extensivo de fondos semitransparentes (`bg-white/10`, `bg-white/20`), desenfoques (`backdrop-blur-md`), bordes sutiles brillantes y sombras profundas para dar volumen.
- **Videos Fluidos y Avatares:** Uso de videos MP4 con fondo fundido (máscaras CSS) para integrar avatares de IA en la página sin que parezcan videos cuadrados. Utilizamos un componente propio `SeamlessVideo` para garantizar bucles (loops) perfectos y fluidos.
- **Efectos 3D y Dinámicos:** Implementamos tarjetas que reaccionan al ratón inclinándose (`TiltedCard` de React Bits) y botones con bordes de luz rotatoria (`HoverBorderGradient` de Aceternity / Shadcn).
- **Tipografía y Jerarquía:** Textos limpios, en su mayoría sin remates (sans-serif), uso de mayúsculas con espaciado amplio (`tracking-widest`) para subtítulos, y títulos enormes y compactos (`tracking-tighter`, `leading-tight`) que se animan letra a letra o palabra a palabra (`AnimatedHeading`).

### 📂 Estructura Clave del Proyecto
- `src/App.tsx`: Enrutamiento y layout base (Navbar, Footer, etc.).
- `src/components/Sections.tsx`: El núcleo de la Landing Page. Aquí residen todas las secciones (Story, WhatsApp, Instagram, Boss, Investing/Plan, Advisory).
- `src/components/SeamlessVideo.tsx`: Gestor avanzado de videos en loop sin parpadeos.
- `src/components/TiltedCard.tsx`: Tarjetas interactivas 3D que reaccionan al mouse.
- `src/components/ui/hover-border-gradient.tsx`: Componente de botón con borde degradado dinámico (efecto de luz rotatoria).
- `src/index.css`: Variables base y utilidades CSS que complementan a Tailwind (por ejemplo, la clase base `.liquid-glass`).

---

## 🤖 3. Instrucciones para la IA Asistente

Si eres una IA leyendo este archivo para ayudar en el desarrollo, **debes adherirte estrictamente a estas reglas**:

1. **Mantén el Estilo Premium:** Cualquier nuevo componente que crees debe sentirse costoso y vanguardista. NUNCA uses botones genéricos de colores planos. Aplica siempre transparencias, bordes luminosos sutiles y transiciones suaves (`transition-all duration-300`).
2. **Prioriza "Framer Motion":** Para cualquier animación de entrada, scroll o interacción, utiliza componentes envueltos en `motion` y mantén la consistencia de las curvas de animación.
3. **Consistencia de Tailwind:** Usa Tailwind v4.0. Si necesitas clases complejas (como gradientes radiales excéntricos o máscaras de recorte avanzado), combínalas con estilos inline `style={{...}}` de forma controlada o amplía las clases genéricas.
4. **Respeta la Tipografía:** Los títulos principales siempre deben imponer autoridad y modernidad (grandes, compactos y en negrita). Los subtítulos descriptivos deben ser sutiles.
5. **Typescript:** Tipa correctamente las props de los nuevos componentes. Si adaptas código de librerías externas que usan JavaScript puro, conviértelas a TSX definiendo interfaces claras.

*Fin del documento de contexto.*

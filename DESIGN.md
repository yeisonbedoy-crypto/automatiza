---
name: Automatiza
description: AI automation agency that deploys agents for WhatsApp, Instagram, and email — working 24/7 so clients don't have to.
colors:
  jet: "#0A0B0E"
  cloud-white: "#F8F9FA"
  thermal-concrete: "#94999E"
  thermal-concrete-mid: "#B5B9BD"
  thermal-concrete-light: "#D1D4D7"
  command-slate: "#2A2F37"
  command-slate-mid: "#414751"
  command-slate-light: "#585E6A"
  warm-sepia-cream: "#F5F0EA"
  warm-espresso: "#201A15"
  whatsapp-green: "#25D366"
  instagram-magenta: "#E1306C"
typography:
  display:
    fontFamily: '"Helvetica Regular", ui-sans-serif, system-ui, sans-serif'
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.05em"
  body:
    fontFamily: '"Helvetica Regular", ui-sans-serif, system-ui, sans-serif'
    fontSize: "clamp(0.875rem, 1.5vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: '"Helvetica Regular", ui-sans-serif, system-ui, sans-serif'
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.1em"
rounded:
  full: "9999px"
  3xl: "24px"
  2xl: "16px"
  xl: "12px"
  lg: "8px"
spacing:
  section-y: "96px"
  card: "32px"
  card-sm: "24px"
  gap: "32px"
components:
  button-primary:
    backgroundColor: "{colors.cloud-white}"
    textColor: "{colors.jet}"
    rounded: "{rounded.lg}"
    padding: "10px 24px"
  button-primary-hover:
    backgroundColor: "#E8E9EA"
    textColor: "{colors.jet}"
    rounded: "{rounded.lg}"
    padding: "10px 24px"
  button-glass:
    backgroundColor: "#FFFFFF02"
    textColor: "{colors.cloud-white}"
    rounded: "{rounded.lg}"
    padding: "10px 24px"
  button-cta-lg:
    backgroundColor: "{colors.cloud-white}"
    textColor: "{colors.jet}"
    rounded: "{rounded.lg}"
    padding: "12px 32px"
  nav-link:
    textColor: "#FFFFFFB3"
    typography: "{typography.label}"
    rounded: "{rounded.lg}"
    padding: "0"
---

# Design System: Automatiza

## 1. Overview

**Creative North Star: "The Autonomous Night"**

The AI works while the client sleeps. This design system is built around that promise: premium darkness as the product's ambient state, and light as a signal — not decoration. The base canvas is near-black jet. Every section that follows introduces its own environment: thermal concrete for the workhorse email agents, warm sepia for social commerce, a cold command slate for the orchestrating intelligence. The visitor scrolls through scenes, not a scroll.

Typography dominates. Display type is compressed to 0.9 line-height, uppercased, tracked tight — it fills the frame like a title card. There is no clutter around it. The agents in the videos are the product; the design creates the stage they perform on.

Glass surfaces (`.liquid-glass`) serve as interface architecture: they float over scene backgrounds without rupturing them. They are the technology made visible — transparent, reflective, containing depth. They glow when touched. They never decorate.

**Key Characteristics:**
- Dark is the default; light enters only as scene-specific context or direct CTA signal
- Every scroll section changes color environment — each is a distinct, named scene
- Typography-first hierarchy: scale and weight do the work, not color or decoration
- Liquid glass is structural, never cosmetic
- The AI avatar videos are primary content; the UI frames and amplifies them, never competes

## 2. Colors: The Scene Palette

A cinematic system: the base is dark, and each content section introduces its own color environment. Brand accent colors belong to their channels (WhatsApp green, Instagram magenta), not to the global palette.

### Primary
- **Jet** (#0A0B0E): The base canvas. Background of the hero, Investing, and Advisory sections. Near-black with a trace of blue — television-caliber darkness, not a void.
- **Cloud White** (#F8F9FA): Primary CTA and text. The only high-contrast signal against jet. Used on the primary button, navbar CTA, and high-emphasis body copy. Its rarity against the dark background is the point.

### Neutral
- **Thermal Concrete** (#94999E): The darkest stop in the robot-gray gradient. Used in Story and WhatsApp section backgrounds — industrial, grounded, materially authoritative.
- **Thermal Concrete Mid** (#B5B9BD): Mid-gradient stop. Provides tonal lift within concrete scenes.
- **Thermal Concrete Light** (#D1D4D7): Lightest concrete stop. The fade-to-light bottom of Story/WhatsApp gradients.
- **Command Slate** (#2A2F37): Deep background in the Boss section. A charcoal-slate that reads as authoritative without going full black.
- **Command Slate Mid** (#414751): Mid-tone in the Boss section gradient.
- **Command Slate Light** (#585E6A): Lighter boss-scene gray, used for subtle gradient transitions.
- **Warm Sepia Cream** (#F5F0EA): Instagram section highlight. The warmth of an analog photograph — organic contrast to the digital agents in that scene.
- **Warm Espresso** (#201A15): Instagram section dark anchor. Grounds the sepia scene without bleeding into the jet base.

### Secondary (Channel Accents — contextual only)
- **WhatsApp Green** (#25D366): Used exclusively in WhatsApp-context elements (button tints, icon accents). Never as a global brand color.
- **Instagram Magenta** (#E1306C): Used as the glow source in the Instagram section background. Never global.

### Named Rules
**The Scene Change Rule.** Each section owns its color environment. Thermal concrete, warm sepia, and command slate are scene-specific backgrounds — never mix them. The hero and closing sections return to jet.

**The Channel Color Rule.** WhatsApp green and Instagram magenta are channel signals, not brand colors. They appear only inside their own sections, at low opacity tints (10–35%). A green button outside the WhatsApp section is forbidden.

## 3. Typography

**Display Font:** Helvetica Regular (custom-loaded), with ui-sans-serif, system-ui, sans-serif fallback.
**Body Font:** Same family — this is a single-font system.

**Character:** One font, no ornament. The system derives hierarchy entirely from weight contrast (400 → 900), scale (xs → 5xl), and case (mixed → ALL CAPS). The restraint is the signature. Reading Automatiza should feel like reading a brief from someone who has already done the thinking for you.

### Hierarchy
- **Display** (weight 900, clamp(1.875rem → 3rem), line-height 0.9, tracking −0.05em): Section headlines and hero H1. Always uppercase. The compressed leading creates a typographic block that behaves like a visual object.
- **Title** (weight 700, 1.25rem → 1.5rem, line-height 1.4): Card headings and subheadings within sections.
- **Body** (weight 400, clamp(0.875rem → 1.25rem), line-height 1.625): Section descriptive paragraphs. Max line length 65ch (enforced via `max-w-lg` / `max-w-xl`). Color: text-gray-300 on dark scenes; text-gray-800 on concrete scenes.
- **Label** (weight 500, 0.75rem, tracking 0.1em, UPPERCASE): Section eyebrow labels above headlines. Always uppercase, always muted (white/60 or gray-700/80 depending on scene).
- **Micro** (weight 300–400, 0.625rem–0.75rem, tracking 0.2em, UPPERCASE): Taglines, legal, footer metadata. The quietest voice in the system.

### Named Rules
**The One Weight Rule.** Display type is exclusively font-black (900). Everything else is 400–700. The jump from body to display is violent on purpose — that contrast IS the hierarchy.

**The Uppercase Compression Rule.** Display type is always uppercased and tracking-tighter. This is not stylistic; it makes the type block read as a single graphic unit at hero scale. Body copy is never uppercased.

## 4. Elevation

Elevation is scene-relative. Light scenes (Thermal Concrete backgrounds) use shadow-heavy card surfaces because the background has tonal lift to push against. Dark scenes (Jet and Command Slate backgrounds) use glass-only elevation, because shadows on black lose their contrast and glass luminosity provides the depth instead.

The `.liquid-glass` class is the primary elevation mechanism across all scenes: backdrop-filter blur (4px), near-transparent background (rgba 255,255,255,0.01), and a pseudo-element that paints a gradient border from full white at top/bottom edges to transparent at midpoints. This creates the appearance of catching ambient light from above and below — structural refraction, not decoration.

### Shadow Vocabulary
- **Card ambient (concrete scenes)** (`box-shadow: 0 8px 32px rgba(0,0,0,0.15)`): Used on `.liquid-glass` cards in Story and WhatsApp sections. Soft diffuse drop on the light-gray background.
- **Card ambient (dark scenes)** (`box-shadow: 0 8px 32px rgba(0,0,0,0.30)`): Used in Boss section cards. Deeper opacity, same geometry — darkness needs more contrast.
- **Glass hover glow** (`box-shadow: 0 0 25px rgba(255,255,255,0.15), inset 0 1px 2px rgba(255,255,255,0.3)`): The active state of all `.glass-hover` elements. The component literally lights up from within on hover.
- **Glass inset highlight** (`box-shadow: inset 0 1px 1px rgba(255,255,255,0.1)`): Passive state of `.liquid-glass`. Faint edge shimmer at rest.

### Named Rules
**The Stage Lighting Rule.** Shadows serve scene logic, not element hierarchy. A card in a dark scene gets a heavier drop shadow than the same card in a light scene — not because it's more important, but because the stage demands it.

**The Glass Hover Invariant.** Every `.glass-hover` element responds to pointer interaction with the white glow pulse plus a −4px translateY lift. This is universal and non-negotiable. A glass surface that doesn't respond to touch breaks the "luminous and contained" promise.

## 5. Components

### Navbar
The navbar is the first surface the user encounters. It floats (fixed position) over the hero video — a liquid glass pill anchored to the viewport top. Never opaque, never solid-colored.
- **Shape:** Rounded corners (12px, rounded-xl)
- **Background:** `.liquid-glass` — backdrop-blur-md, no fill
- **Border:** border-white/20 at rest
- **Logo:** "AUTOMATIZA" in text-xl font-medium — the wordmark IS the logo
- **Nav links:** text-xs, uppercase, tracking-wider, white/70 → white on hover, 200ms transition
- **CTA:** `button-primary` style (cloud-white bg, jet text, rounded-lg, px-6 py-2)

### Buttons

**Primary Button** — The decisive action. Cloud white against darkness.
- **Shape:** Rounded corners (8px, rounded-lg)
- **Background:** Cloud White (#F8F9FA)
- **Text:** Jet (#0A0B0E), text-sm, font-medium
- **Hover:** background #E8E9EA, 200ms duration
- **Padding:** px-6 py-2.5 (standard), px-8 py-3 (large CTA)

**Ghost Button / Glass Button** — Secondary action within a scene.
- **Shape:** Rounded corners (8px, rounded-lg)
- **Background:** `.liquid-glass` with border border-white/20
- **Text:** Cloud White, same size as primary
- **Hover:** `.glass-hover` — white glow pulse, −4px lift, 400ms cubic-bezier(0.4,0,0.2,1)

**HoverBorderGradient Button** — In-section interactive CTAs. Rotating light-border effect.
- **Shape:** Fully rounded (rounded-full)
- **Border:** Animated white radial gradient rotating around the perimeter (3s cycle)
- **Background:** Translucent fill matching scene (white/10–20 on dark, white/20–30 on concrete)
- **Text:** Scene-appropriate (white on dark, gray-900 on concrete)
- **Hover:** Border glow intensifies; internal background lightens

### Liquid Glass Card (Signature Component)
Every content card in the system. The glass surface that makes content feel contained, not plastered.
- **Shape:** Rounded corners (16px, rounded-2xl)
- **Background:** `.liquid-glass` with scene-relative fill: bg-white/20 on concrete scenes, bg-white/5 on dark scenes
- **Border:** border-white/40 (concrete scenes) or border-white/10 (dark scenes)
- **Shadow:** Scene-relative (see Elevation section)
- **Internal Padding:** 32px (p-8)
- **Hover:** `.glass-hover` — glow pulse + −4px lift
- **TiltedCard wrapper:** Adds a subtle 3D tilt tracking the cursor — the card plane responds to pointer position

### Navigation Section Labels (Overline)
The text-sm uppercase labels that appear above every section headline.
- text-sm, font-medium, tracking-widest, uppercase
- Color: white/60 on dark scenes, gray-700/80 on concrete scenes, blue-400/80 in Boss section
- They are scene-tinted, not globally consistent — this is intentional

### Tagline Pill
The small floating label in the hero corner ("Menos gestión, más visión.").
- `.liquid-glass` surface, border border-white/10, rounded-lg
- text-[10px]–text-xs, font-light, tracking-[0.2em], uppercase, white/70
- No interactive state — it is ambient

## 6. Do's and Don'ts

### Do:
- **Do** use uppercase and tracking-tighter for all display headlines (0.9 line-height, −0.05em tracking). This is the typographic identity.
- **Do** change the color environment between sections. Each section earns its own background. Monotony is the enemy.
- **Do** apply `.glass-hover` (glow + translateY(−4px)) to every interactive glass surface. The luminous response IS the component feel.
- **Do** respect the scene when choosing card fill opacity: bg-white/20 on light concrete scenes, bg-white/5 on dark scenes.
- **Do** keep WhatsApp green (#25D366) and Instagram magenta (#E1306C) contained to their own sections.
- **Do** use `max-w-lg` or `max-w-xl` on body paragraphs to enforce the 65ch line-length limit. Long lines on dark backgrounds are unreadable.
- **Do** let the AI agent videos be primary content. Design frames them; never overlap, clip, or compete with the video subject.
- **Do** use linear gradient masks (`linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)`) on video containers so agent figures fade into the scene rather than cutting hard.

### Don't:
- **Don't** use chatbot-bubble iconography — floating green chat bubbles, WhatsApp-green everywhere, call-center aesthetic. This is explicitly prohibited in PRODUCT.md and represents the exact anti-reference.
- **Don't** use corporate stock imagery, handshake photos, or flat blue-gray palettes. This is the "corporativo aburrido" anti-reference from PRODUCT.md.
- **Don't** use gradient text (`background-clip: text`). Single solid color for all text.
- **Don't** use decorative glassmorphism — glass surfaces must contain content or define structure. No glass panels that exist purely for visual effect.
- **Don't** use side-stripe borders (`border-left` > 1px as an accent). Rewrite with full borders or background tints.
- **Don't** use bounce or elastic easing. All motion uses ease-out curves (cubic-bezier(0.4, 0, 0.2, 1) or steeper). The system is fluid, not playful.
- **Don't** apply the same background to consecutive sections. The Scene Change Rule is absolute.
- **Don't** use WhatsApp green or Instagram magenta as global brand accent colors. They are channel signals, contextual only.
- **Don't** use pure `#000000` or `#FFFFFF` in the design system. Jet (#0A0B0E) and Cloud White (#F8F9FA) carry the tinted black and white roles.
- **Don't** use cards with identical size, icon, heading, and text repeated in a grid without variation in weight, emphasis, or scale. Identical card grids are the SaaS landing-page cliché this system refuses.

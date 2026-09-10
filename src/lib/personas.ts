/**
 * Catálogo de personas del asistente sticky.
 *
 * `id` viaja al backend en el body de /api/chat (campo `persona`). El backend
 * elige la voz; mientras no se redespliegue, ignora el campo y responde como
 * `default` (sin romper nada). El `opener` se muestra localmente como primer
 * mensaje del bot para enmarcar la demo sin gastar una llamada al backend.
 */

export type PersonaId = 'default' | 'whatsapp' | 'instagram' | 'email' | 'boss';

export interface Persona {
  id: PersonaId;
  /** Nombre visible en la cabecera del panel. */
  label: string;
  /** Subtítulo corto bajo el nombre. */
  tagline: string;
  /** Color de acento (punto de estado, botón enviar, foco). */
  accent: string;
  /** Primer mensaje del bot (local, no se envía al backend). */
  opener: string;
  /** Placeholder del input. */
  placeholder: string;
}

export const PERSONAS: Record<PersonaId, Persona> = {
  default: {
    id: 'default',
    label: 'Canario',
    tagline: 'Asistente de Automatiza GC',
    accent: '#E5E7EB',
    opener:
      '¡Hola! Soy Canario, de Automatiza GC. Dime a qué te dedicas y te enseño al momento qué te quitaría de encima — sin rollos y sin compromiso.',
    placeholder: 'Escríbeme tu consulta…',
  },
  whatsapp: {
    id: 'whatsapp',
    label: 'Agente de WhatsApp',
    tagline: 'Atiende, agenda y cierra · 24/7',
    accent: '#25D366',
    opener:
      'Soy el WhatsApp de tu negocio currando. Escríbeme como si fueras un cliente tuyo —una reserva, un precio, una duda— y mira cómo lo cojo, lo cierro y te lo dejo listo.',
    placeholder: 'Escríbeme como un cliente…',
  },
  instagram: {
    id: 'instagram',
    label: 'Agente de Instagram',
    tagline: 'DMs que monetizan · 24/7',
    accent: '#E1306C',
    opener:
      '¡Ey! 🔥 Soy tu DM de Instagram, abierto 24/7. Escríbeme como si acabaras de ver tu storie y te picara algo — verás cómo llevo la charla hasta la venta sin frenar.',
    placeholder: 'Mándame un DM de prueba…',
  },
  email: {
    id: 'email',
    label: 'Agente de Correo',
    tagline: 'Clasifica, prioriza y responde',
    accent: '#E8743B',
    opener:
      'Soy el agente que ordena tu bandeja. Pégame un correo real —una reclamación, una consulta, un proveedor— y te digo cómo lo clasifico, con qué prioridad, y te dejo la respuesta lista para enviar en tu nombre.',
    placeholder: 'Pega aquí un correo de ejemplo…',
  },
  boss: {
    id: 'boss',
    label: 'El Jefe',
    tagline: 'Cerebro central · audita y decide',
    accent: 'oklch(72% 0.18 220)',
    opener:
      'Soy El Jefe: veo toda tu operación de un vistazo. Dame sector, tamaño de equipo y dónde se te va más el tiempo, y te suelto sin rodeos qué automatizo primero y qué ganas con ello.',
    placeholder: 'Cuéntame de tu empresa…',
  },
};

/** Evento global para abrir el sticky desde los botones de los bloques. */
export const OPEN_ASSISTANT_EVENT = 'automatiza:open-assistant';

export function openAssistant(persona: PersonaId): void {
  window.dispatchEvent(
    new CustomEvent<{ persona: PersonaId }>(OPEN_ASSISTANT_EVENT, {
      detail: { persona },
    }),
  );
}

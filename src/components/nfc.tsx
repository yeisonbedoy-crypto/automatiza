/**
 * Sistema de diseño "NFC Canarias" — editorial, papel claro, acento ámbar.
 * Componentes reutilizables SOLO para la página /nfc (mismo patrón que agency.tsx
 * para Servicios/Proyectos/Ecosistema/Presupuesto). No toca el resto del sitio.
 */
import type { ReactNode, ComponentType, CSSProperties } from 'react';

/** Colores de marca en JS, para casos que no puedan usar var(--nfc-*) de nfc/index.html. */
export const NFC_PAPER = '#FAF6EF';
export const NFC_INK = '#1B1A17';
export const NFC_INK2 = '#4A4740';
export const NFC_INK3 = '#8C877D';
export const NFC_ACCENT = '#D98F2B';
export const NFC_LINE = 'rgba(27,26,23,0.12)';

/** Fondo sólido color papel + textura de grano muy sutil (reutiliza .noise-overlay). */
export function NfcBackground() {
  return (
    <div className="fixed inset-0 z-0" style={{ background: 'var(--nfc-paper)' }}>
      <div className="absolute inset-0 noise-overlay opacity-[0.035]" />
    </div>
  );
}

/** Etiqueta pequeña en mayúsculas, mono, color acento. */
export function NfcEyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`font-mono text-[11px] font-medium tracking-[0.25em] uppercase ${className}`}
      style={{ color: 'var(--nfc-accent)' }}
    >
      {children}
    </p>
  );
}

/** Botón sólido ámbar con sombra offset dura (CTA principal). */
export function NfcButton({
  children,
  href,
  onClick,
  type = 'button',
  className = '',
  external = false,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  external?: boolean;
}) {
  const cls =
    `inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-transform duration-200 hover:-translate-y-0.5 ${className}`;
  const style: CSSProperties = {
    background: 'var(--nfc-accent)',
    color: 'var(--nfc-paper)',
    boxShadow: '3px 3px 0 var(--nfc-ink)',
  };
  if (href) {
    return (
      <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className={cls} style={style}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls} style={style}>
      {children}
    </button>
  );
}

/** Botón contorno (CTA secundaria). */
export function NfcGhostButton({ children, href, className = '' }: { children: ReactNode; href?: string; className?: string }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm border transition-colors duration-200 ${className}`}
      style={{ borderColor: 'var(--nfc-ink)', color: 'var(--nfc-ink)' }}
    >
      {children}
    </a>
  );
}

/** Tile con icono, borde y fondo ámbar muy suave (patrón repetido en las secciones de grid). */
export function NfcIconTile({
  Icon,
  size = 'md',
}: {
  Icon: ComponentType<{ className?: string; style?: CSSProperties }>;
  size?: 'sm' | 'md' | 'lg';
}) {
  const dims = size === 'lg' ? 'w-14 h-14' : size === 'sm' ? 'w-9 h-9' : 'w-12 h-12';
  const icon = size === 'lg' ? 'w-6 h-6' : size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';
  return (
    <div
      className={`${dims} rounded-xl flex items-center justify-center shrink-0`}
      style={{ background: 'rgba(217,143,43,0.10)', border: '1px solid rgba(217,143,43,0.35)' }}
    >
      <Icon className={icon} style={{ color: 'var(--nfc-accent)' } as CSSProperties} />
    </div>
  );
}

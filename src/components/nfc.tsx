/**
 * Sistema de diseño "NFC Canarias" — neo-brutalismo: bordes negros gruesos,
 * sombras duras desplazadas, esquinas redondeadas y paleta de color plana.
 * Componentes reutilizables SOLO para la página /nfc (mismo patrón que agency.tsx
 * para Servicios/Proyectos/Ecosistema/Presupuesto). No toca el resto del sitio.
 */
import type { ReactNode, ComponentType, CSSProperties } from 'react';

/** Colores de marca en JS, para casos que no puedan usar var(--nfc-*) de nfc/index.html. */
export const NFC_PAPER = '#FFFDF8';
export const NFC_WARM = '#F5F0E6';
export const NFC_INK = '#111111';
export const NFC_INK2 = '#3A3A3A';
export const NFC_INK3 = '#767672';
export const NFC_BORDER = '#111111';
export const NFC_ACCENT = '#E8B923';
export const NFC_YELLOW = '#E8B923';
export const NFC_GREEN = '#4A9B4E';
export const NFC_SALMON = '#F2857A';
export const NFC_LAVENDER = '#9B8FD9';
export const NFC_TAN = '#C9A876';

/** Paleta rotativa usada para etiquetas y tiles de icono en tarjetas repetidas. */
export const NFC_PALETTE = [NFC_YELLOW, NFC_GREEN, NFC_SALMON, NFC_LAVENDER, NFC_TAN];

/** Colores claros → icono oscuro; colores saturados → icono blanco (como en la referencia). */
const NFC_LIGHT_TONES = new Set([NFC_YELLOW, NFC_TAN]);

/** Fondo sólido color papel, plano — sin textura, look limpio neo-brutalista. */
export function NfcBackground() {
  return <div className="fixed inset-0 z-0" style={{ background: `var(--nfc-paper, ${NFC_PAPER})` }} />;
}

/** Etiqueta pequeña tipo "pastilla" — mono, negrita, fondo de color con borde negro. */
export function NfcEyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-block font-mono text-[11px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full border-[2.5px] ${className}`}
      style={{ borderColor: `var(--nfc-border, ${NFC_BORDER})`, background: `var(--nfc-accent, ${NFC_ACCENT})`, color: `var(--nfc-ink, ${NFC_INK})` }}
    >
      {children}
    </span>
  );
}

/** Botón sólido con sombra offset dura y efecto de "hundirse" al pulsar (CTA principal). */
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
    `nfc-press inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm border-[2.5px] ${className}`;
  const style: CSSProperties = {
    background: `var(--nfc-accent, ${NFC_ACCENT})`,
    color: `var(--nfc-ink, ${NFC_INK})`,
    borderColor: `var(--nfc-border, ${NFC_BORDER})`,
    boxShadow: `4px 4px 0 var(--nfc-border, ${NFC_BORDER})`,
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

/** Botón contorno con el mismo tratamiento de borde/sombra (CTA secundaria). */
export function NfcGhostButton({ children, href, className = '' }: { children: ReactNode; href?: string; className?: string }) {
  return (
    <a
      href={href}
      className={`nfc-press inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm border-[2.5px] ${className}`}
      style={{
        background: `var(--nfc-paper, ${NFC_PAPER})`,
        color: `var(--nfc-ink, ${NFC_INK})`,
        borderColor: `var(--nfc-border, ${NFC_BORDER})`,
        boxShadow: `4px 4px 0 var(--nfc-border, ${NFC_BORDER})`,
      }}
    >
      {children}
    </a>
  );
}

/** Tile cuadrado de icono: color plano de fondo + borde negro (patrón de las tarjetas). */
export function NfcIconTile({
  Icon,
  color = NFC_YELLOW,
  size = 'md',
}: {
  Icon: ComponentType<{ className?: string; style?: CSSProperties }>;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
}) {
  const dims = size === 'lg' ? 'w-14 h-14' : size === 'sm' ? 'w-9 h-9' : 'w-12 h-12';
  const icon = size === 'lg' ? 'w-6 h-6' : size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';
  const iconColor = NFC_LIGHT_TONES.has(color) ? NFC_INK : '#FFFFFF';
  return (
    <div
      className={`${dims} rounded-xl border-[2.5px] flex items-center justify-center shrink-0`}
      style={{ background: color, borderColor: `var(--nfc-border, ${NFC_BORDER})` }}
    >
      <Icon className={icon} style={{ color: iconColor } as CSSProperties} />
    </div>
  );
}

/**
 * Tarjeta neo-brutalista tipo "carpeta": una capa de color entera asoma detrás,
 * desplazada arriba a la izquierda (como el lomo de una carpeta), y la tarjeta
 * papel va delante con su propio borde negro y sombra dura hacia abajo-derecha.
 */
export function NfcCard({
  children,
  tabColor,
  shadow = 'md',
  className = '',
}: {
  children: ReactNode;
  tabColor: string;
  shadow?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  const offset = shadow === 'lg' ? '7px 7px 0' : shadow === 'sm' ? '3px 3px 0' : '5px 5px 0';
  return (
    <div className="relative h-full">
      <div
        className="absolute inset-0 rounded-[20px] border-[2.5px]"
        style={{
          background: tabColor,
          borderColor: `var(--nfc-border, ${NFC_BORDER})`,
          transform: 'translate(-7px, -7px)',
        }}
      />
      <div
        className={`relative h-full rounded-[20px] border-[2.5px] ${className}`}
        style={{
          borderColor: `var(--nfc-border, ${NFC_BORDER})`,
          background: `var(--nfc-paper, ${NFC_PAPER})`,
          boxShadow: `${offset} var(--nfc-border, ${NFC_BORDER})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

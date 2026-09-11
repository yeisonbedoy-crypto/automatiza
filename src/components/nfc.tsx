/**
 * Sistema de diseño "NFC Canarias" — neo-brutalismo: bordes negros gruesos,
 * sombras duras desplazadas, esquinas redondeadas y paleta de color plana.
 * Componentes reutilizables SOLO para la página /nfc (mismo patrón que agency.tsx
 * para Servicios/Proyectos/Ecosistema/Presupuesto). No toca el resto del sitio.
 */
import { useState } from 'react';
import type { ReactNode, ComponentType, CSSProperties } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Menu, X } from 'lucide-react';
import { LogoIcon } from './LogoIcon';

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
export const NFC_DISPLAY_FALLBACK = "'Space Grotesk', ui-sans-serif, system-ui, sans-serif";

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
      <a href={href} onClick={onClick} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className={cls} style={style}>
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

/** Franja de CTA a media página: fondo de color plano, borde negro y sombra dura. */
export function NfcCtaBanner({
  eyebrow,
  title,
  buttonLabel = 'Pide la tuya',
  buttonHref = '#pedido',
  background = NFC_SALMON,
}: {
  eyebrow: string;
  title: ReactNode;
  buttonLabel?: string;
  buttonHref?: string;
  background?: string;
}) {
  return (
    <div
      className="rounded-[24px] px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-center gap-6 border-[2.5px]"
      style={{
        background,
        borderColor: `var(--nfc-border, ${NFC_BORDER})`,
        boxShadow: `6px 6px 0 var(--nfc-border, ${NFC_BORDER})`,
      }}
    >
      <div className="flex-1 text-center md:text-left">
        <p className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase mb-2" style={{ color: NFC_INK }}>{eyebrow}</p>
        <p className="text-lg md:text-xl font-bold leading-snug" style={{ fontFamily: `var(--nfc-display, ${NFC_DISPLAY_FALLBACK})`, color: NFC_INK }}>
          {title}
        </p>
      </div>
      <NfcButton href={buttonHref} className="whitespace-nowrap shrink-0">{buttonLabel}</NfcButton>
    </div>
  );
}

const NFC_FOOTER_LINK_STYLE = { color: `var(--nfc-ink2, ${NFC_INK2})` };
const NFC_FOOTER_HEADING_CLASS = "font-mono text-[10px] uppercase tracking-[0.2em] font-bold mb-4";

/** Footer propio de /nfc, mismo lenguaje visual que el resto de la página. */
export function NfcFooter() {
  return (
    <footer
      className="w-full rounded-[28px] border-[2.5px] p-6 md:p-10 mt-16 md:mt-24"
      style={{
        borderColor: `var(--nfc-border, ${NFC_BORDER})`,
        background: `var(--nfc-paper, ${NFC_PAPER})`,
        boxShadow: `7px 7px 0 var(--nfc-border, ${NFC_BORDER})`,
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-10">
        {/* Marca */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-2.5 mb-4">
            <span style={{ color: `var(--nfc-ink, ${NFC_INK})` }}>
              <LogoIcon className="h-9 w-auto" />
            </span>
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: `var(--nfc-ink3, ${NFC_INK3})` }}>NFC Canarias</span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs" style={NFC_FOOTER_LINK_STYLE}>
            Un producto de AutomatizaGC — tarjetas y placas NFC hechas en Gran Canaria, enviadas a toda Canarias y España.
          </p>
        </div>

        {/* Enlaces */}
        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h4 className={NFC_FOOTER_HEADING_CLASS} style={{ color: `var(--nfc-ink, ${NFC_INK})` }}>Sitio</h4>
            <ul className="text-[13px] space-y-2.5">
              <li><a href="/" className="hover:underline" style={NFC_FOOTER_LINK_STYLE}>Inicio</a></li>
              <li><a href="/servicios" className="hover:underline" style={NFC_FOOTER_LINK_STYLE}>Servicios</a></li>
              <li><a href="/precios" className="hover:underline" style={NFC_FOOTER_LINK_STYLE}>Precios</a></li>
              <li><a href="/contacto" className="hover:underline" style={NFC_FOOTER_LINK_STYLE}>Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className={NFC_FOOTER_HEADING_CLASS} style={{ color: `var(--nfc-ink, ${NFC_INK})` }}>NFC Canarias</h4>
            <ul className="text-[13px] space-y-2.5">
              <li><a href="#productos" className="hover:underline" style={NFC_FOOTER_LINK_STYLE}>Productos</a></li>
              <li><a href="#como-funciona" className="hover:underline" style={NFC_FOOTER_LINK_STYLE}>Cómo funciona</a></li>
              <li><a href="#pedido" className="hover:underline" style={NFC_FOOTER_LINK_STYLE}>Pide la tuya</a></li>
            </ul>
          </div>
          <div>
            <h4 className={NFC_FOOTER_HEADING_CLASS} style={{ color: `var(--nfc-ink, ${NFC_INK})` }}>Legal</h4>
            <ul className="text-[13px] space-y-2.5">
              <li><a href="mailto:automatizagc@gmail.com" className="hover:underline" style={NFC_FOOTER_LINK_STYLE}>automatizagc@gmail.com</a></li>
              <li><a href="/politica-de-privacidad" className="hover:underline" style={NFC_FOOTER_LINK_STYLE}>Política de privacidad</a></li>
              <li><a href="/terminos" className="hover:underline" style={NFC_FOOTER_LINK_STYLE}>Términos de servicio</a></li>
              <li><a href="/eliminacion-datos" className="hover:underline" style={NFC_FOOTER_LINK_STYLE}>Eliminación de datos</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-6 border-t-[2px] flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderColor: `var(--nfc-divider, rgba(17,17,17,0.15))` }}>
        <p className="font-mono text-[10px] uppercase tracking-widest" style={{ color: `var(--nfc-ink3, ${NFC_INK3})` }}>
          © 2026 NFC Canarias · AutomatizaGC. Todos los derechos reservados.
        </p>
        <a
          href="https://www.instagram.com/automatiza.gc"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram @automatiza.gc"
          className="w-9 h-9 rounded-full border-[2px] flex items-center justify-center shrink-0"
          style={{ borderColor: `var(--nfc-border, ${NFC_BORDER})`, color: `var(--nfc-ink, ${NFC_INK})` }}
        >
          <Instagram size={15} />
        </a>
      </div>
    </footer>
  );
}

interface NfcNavItem {
  name: string;
  href: string;
}

/** Barra de navegación propia de /nfc, mismo lenguaje visual que el resto de la página. */
export function NfcNavbar({ navItems, logoHref = '/' }: { navItems: NfcNavItem[]; logoHref?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-6 px-4 md:px-8 lg:px-16 pointer-events-none">
      <div
        className="rounded-2xl border-[2.5px] px-5 py-3 flex items-center justify-between pointer-events-auto max-w-7xl mx-auto"
        style={{
          borderColor: `var(--nfc-border, ${NFC_BORDER})`,
          background: `var(--nfc-paper, ${NFC_PAPER})`,
          boxShadow: `5px 5px 0 var(--nfc-border, ${NFC_BORDER})`,
        }}
      >
        <a href={logoHref} className="shrink-0" style={{ color: `var(--nfc-ink, ${NFC_INK})` }}>
          <LogoIcon className="h-8 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-7">
          {navItems.map(item => (
            <a
              key={item.name}
              href={item.href}
              className="font-mono text-[11px] font-bold uppercase tracking-widest transition-colors duration-200"
              style={{ color: `var(--nfc-ink2, ${NFC_INK2})` }}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href="/presupuesto"
            target="_blank"
            rel="noopener noreferrer"
            className="nfc-press hidden sm:inline-flex items-center rounded-full border-[2px] px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-widest"
            style={{
              background: `var(--nfc-accent, ${NFC_ACCENT})`,
              color: `var(--nfc-ink, ${NFC_INK})`,
              borderColor: `var(--nfc-border, ${NFC_BORDER})`,
              boxShadow: `3px 3px 0 var(--nfc-border, ${NFC_BORDER})`,
            }}
          >
            Activa tu IA
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-9 h-9 rounded-lg border-[2px] flex items-center justify-center"
            style={{ borderColor: `var(--nfc-border, ${NFC_BORDER})` }}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-4 h-4" style={{ color: NFC_INK }} /> : <Menu className="w-4 h-4" style={{ color: NFC_INK }} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            style={{
              originY: 0,
              borderColor: `var(--nfc-border, ${NFC_BORDER})`,
              background: `var(--nfc-paper, ${NFC_PAPER})`,
              boxShadow: `5px 5px 0 var(--nfc-border, ${NFC_BORDER})`,
            }}
            className="pointer-events-auto mt-2 rounded-2xl border-[2.5px] overflow-hidden max-w-7xl mx-auto md:hidden"
          >
            <div className="px-5 pt-2 pb-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center py-3.5 font-mono text-[12px] font-bold uppercase tracking-widest border-b-[2px] last:border-b-0"
                  style={{ color: `var(--nfc-ink2, ${NFC_INK2})`, borderColor: `var(--nfc-divider, rgba(17,17,17,0.15))` }}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/presupuesto"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 sm:hidden inline-flex items-center justify-center w-full rounded-full border-[2px] px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-widest"
                style={{
                  background: `var(--nfc-accent, ${NFC_ACCENT})`,
                  color: `var(--nfc-ink, ${NFC_INK})`,
                  borderColor: `var(--nfc-border, ${NFC_BORDER})`,
                }}
              >
                Activa tu IA
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

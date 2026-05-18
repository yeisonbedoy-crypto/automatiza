import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HoverBorderGradient } from './ui/hover-border-gradient';
import { LogoIcon } from './LogoIcon';

interface NavItem {
  name: string;
  href: string;
  highlight?: boolean;
}

const LANDING_NAV_ITEMS: NavItem[] = [
  { name: "ECOSISTEMA",  href: "#email" },
  { name: "EL CEREBRO", href: "#boss", highlight: true },
  { name: "MÉTODO",  href: "#asesoramiento" },
  { name: "PRECIOS",    href: "/precios" },
  { name: "BLOG",       href: "/blog" },
];

interface NavbarProps {
  navItems?: NavItem[];
  logoHref?: string;
}

export function Navbar({ navItems = LANDING_NAV_ITEMS, logoHref }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = () => {
    setIsMenuOpen(false);
    if (logoHref) {
      window.location.href = logoHref;
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-6 px-6 md:px-12 lg:px-16 pointer-events-none">
      {/* Main bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="liquid-glass rounded-xl px-5 py-3 flex items-center justify-between border border-white/20 pointer-events-auto max-w-7xl mx-auto backdrop-blur-md"
        style={{ background: 'rgba(10,11,14,0.50)' }}
      >
        {/* Logo */}
        <button
          type="button"
          onClick={handleLogoClick}
          className="text-white cursor-pointer hover:text-white/80 transition-colors duration-300 shrink-0"
        >
          <LogoIcon className="h-9 w-auto" />
        </button>

        {/* Nav links — desktop only */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={[
                "text-[11px] font-medium uppercase tracking-widest transition-colors duration-200",
                item.highlight
                  ? "text-blue-300/70 hover:text-blue-300 hover:[filter:drop-shadow(0_0_8px_rgba(147,197,253,0.7))]"
                  : "text-white/70 hover:text-white",
              ].join(" ")}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right side: CTA + hamburger */}
        <div className="flex items-center gap-2.5">
          <div className="hidden sm:block">
            <HoverBorderGradient
              containerClassName="rounded-full cursor-pointer"
              as="button"
              onClick={() => window.open('https://wa.me/34696859840', '_blank', 'noopener,noreferrer')}
              className="text-white font-semibold text-[11px] uppercase tracking-widest bg-white/10 cursor-pointer"
            >
              ACTIVA TU IA
            </HoverBorderGradient>
          </div>

          {/* Hamburger — visible only below md */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-[5px] rounded-lg"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
          >
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.22 }}
              className="w-5 h-[2px] bg-white rounded-full block"
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.15 }}
              className="w-5 h-[2px] bg-white rounded-full block origin-center"
            />
            <motion.span
              animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.22 }}
              className="w-5 h-[2px] bg-white rounded-full block"
            />
          </button>
        </div>
      </motion.div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            style={{ originY: 0, background: 'rgba(10,11,14,0.50)' }}
            className="pointer-events-auto mt-2 liquid-glass rounded-xl border border-white/20 overflow-hidden max-w-7xl mx-auto md:hidden backdrop-blur-md"
          >
            <div className="px-6 pt-2 pb-4">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 + 0.05, duration: 0.2 }}
                  onClick={() => setIsMenuOpen(false)}
                  className={[
                    "flex items-center py-3.5 text-sm font-medium uppercase tracking-widest transition-colors duration-200",
                    i < navItems.length - 1 ? "border-b border-white/10" : "",
                    item.highlight
                      ? "text-blue-300/70 hover:text-blue-300"
                      : "text-white/70 hover:text-white",
                  ].join(" ")}
                >
                  {item.name}
                </motion.a>
              ))}

              {/* CTA — only on xs, hidden on sm+ (CTA shows in main bar from sm) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navItems.length * 0.04 + 0.1 }}
                className="mt-4 sm:hidden"
              >
                <HoverBorderGradient
                  containerClassName="rounded-full w-full cursor-pointer"
                  as="button"
                  onClick={() => window.open('https://wa.me/34696859840', '_blank', 'noopener,noreferrer')}
                  className="text-white font-semibold text-[11px] uppercase tracking-widest bg-white/10 w-full justify-center cursor-pointer"
                >
                  ACTIVA TU IA
                </HoverBorderGradient>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

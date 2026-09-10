import { LogoIcon } from '../components/LogoIcon';

export type Brand = {
  id: string;
  tag: string;
  name: string;
  tagline: string;
  descLong: string;
  descShort: string;
  color: string;
  href: string;
  external: boolean;
};

// Datos fieles a cada web real (verificados en producción).
export const BRANDS: Brand[] = [
  {
    id: 'auditwaste',
    tag: 'SOSTENIBILIDAD',
    name: 'AuditWaste',
    tagline: 'Tech For A Cleaner Future',
    descLong:
      'Software para medir y reducir el desperdicio alimentario y cumplir la Ley 1/2025. Tecnología con impacto real y medible.',
    descShort:
      'Software para reducir el desperdicio alimentario y cumplir la Ley 1/2025.',
    color: 'oklch(72% 0.20 142)',
    href: 'https://auditwaste-qa-temp.vercel.app',
    external: true,
  },
  {
    id: 'bapu',
    tag: 'HOSTELERÍA',
    name: 'Bapu',
    tagline: 'Tecnología que te respalda',
    descLong:
      'Gestión de incidencias y mantenimiento para cadenas hoteleras. Menos fricción operativa, más control.',
    descShort:
      'Gestión de incidencias y mantenimiento para cadenas hoteleras.',
    color: 'oklch(70% 0.19 45)',
    href: 'https://bapu.help/hotel',
    external: true,
  },
  {
    id: 'automatizagc',
    tag: 'AUTOMATION',
    name: 'AutomatizaGC',
    tagline: 'Digital · Automation · Technology',
    descLong:
      'Desarrollamos webs, soluciones digitales y automatizaciones a medida que transforman procesos y generan resultados.',
    descShort:
      'Desarrollo de webs, soluciones digitales y automatizaciones a medida.',
    color: 'oklch(72% 0.18 220)',
    href: '/',
    external: false,
  },
  {
    id: 'outlet',
    tag: 'E-COMMERCE',
    name: 'Outlet Sports Store',
    tagline: 'Viste los colores que te definen',
    descLong:
      'Tienda online de camisetas de fútbol: clubes, selecciones y clásicas retro. E-commerce a medida.',
    descShort:
      'Tienda online de camisetas de fútbol: clubes, selecciones y retro.',
    color: 'oklch(65% 0.20 20)',
    href: 'https://commerce-seven-ashen-81.vercel.app/',
    external: true,
  },
  {
    id: 'zanga',
    tag: 'GAMING',
    name: 'Zanga',
    tagline: 'La Mesa Canaria',
    descLong:
      'El juego de cartas canario, ahora online. La baraja canaria en partidas 2 contra 2 con tu gente.',
    descShort:
      'El juego de cartas canario online. La baraja canaria, 2 contra 2.',
    color: 'oklch(82% 0.16 88)',
    href: 'https://zanga.website',
    external: true,
  },
];

/** Renderiza el logo real de cada marca (imagen, SVG propio o recreación fiel). */
export function BrandLogo({ id, className = 'w-8 h-8' }: { id: string; className?: string }) {
  switch (id) {
    case 'auditwaste':
      return <img src="/logos/auditwaste-brand.webp" alt="AuditWaste" className={`${className} object-contain`} />;
    case 'bapu':
      return <img src="/logos/bapu.png" alt="Bapu" className={`${className} object-contain`} />;
    case 'zanga':
      return <img src="/logos/zanga.png" alt="Zanga" className={`${className} object-contain rounded-md`} />;
    case 'automatizagc':
      return <LogoIcon className={`${className} text-white`} />;
    case 'outlet':
      return <img src="/logos/outlet.png" alt="Outlet Sports Store" className={`${className} object-contain`} />;
    default:
      return null;
  }
}

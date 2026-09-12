import type { LucideIcon } from 'lucide-react';
import {
  CreditCard, MonitorSmartphone, Layers, Tag, LayoutGrid,
  Star, IdCard, UtensilsCrossed, Instagram, Wifi, MessageCircle,
} from 'lucide-react';
import { NFC_SALMON, NFC_LAVENDER, NFC_BLUE, NFC_TAN, NFC_YELLOW } from '../components/nfc';

export type NfcProduct = {
  slug: string;
  name: string;
  price: string;
  desc: string;
  items: string[];
  featured: boolean;
  Icon: LucideIcon;
  image: string;
  color: string;
};

export const PRODUCTS: NfcProduct[] = [
  {
    slug: "tag-nfc",
    name: "Tag NFC",
    price: "12€",
    desc: "El punto de partida: una pegatina NFC discreta para pegar donde haga falta.",
    items: ["1 tag NFC adhesivo", "Enlace configurable", "Ideal para probar antes de pedir más"],
    featured: false,
    Icon: Tag,
    image: "/nfc/productos/tag-nfc.webp",
    color: NFC_SALMON,
  },
  {
    slug: "tarjeta-nfc",
    name: "Tarjeta NFC",
    price: "19€",
    desc: "Tarjeta individual, tamaño de visita, para ti o cada miembro de tu equipo.",
    items: ["1 tarjeta NFC personalizada", "Enlace configurable (reseñas, redes, contacto)", "Envío en 3-5 días en Gran Canaria"],
    featured: false,
    Icon: CreditCard,
    image: "/nfc/productos/tarjeta-nfc.webp",
    color: NFC_LAVENDER,
  },
  {
    slug: "placa-mostrador",
    name: "Placa de Mostrador",
    price: "39€",
    desc: "Placa de sobremesa para el mostrador, visible para cada cliente que pasa por caja.",
    items: ["1 placa NFC de mostrador", "Diseño a juego con tu marca", "Ideal para pedir reseñas en el momento del pago"],
    featured: true,
    Icon: MonitorSmartphone,
    image: "/nfc/productos/placa-mostrador.webp",
    color: NFC_BLUE,
  },
  {
    slug: "expositor-multi-enlace",
    name: "Expositor Multi-Enlace",
    price: "69€",
    desc: "Expositor de sobremesa con varios puntos de toque a la vez, cada uno con su propio destino.",
    items: ["1 expositor con 3 zonas de toque", "Reseñas, redes y contacto por separado", "Pensado para mostradores con mucho tráfico"],
    featured: false,
    Icon: LayoutGrid,
    image: "/nfc/productos/expositor-multi-enlace.webp",
    color: NFC_TAN,
  },
  {
    slug: "pack-negocio",
    name: "Pack Negocio",
    price: "89€",
    desc: "Todo lo que necesita tu negocio: placa de mostrador + 3 tarjetas para el equipo.",
    items: ["1 placa + 3 tarjetas NFC", "Todos los enlaces configurables desde el móvil", "Soporte prioritario por WhatsApp"],
    featured: false,
    Icon: Layers,
    image: "/nfc/productos/pack-negocio.webp",
    color: NFC_YELLOW,
  },
];

export type NfcColorOption = { name: string; hex: string };

export const NFC_COLOR_OPTIONS: NfcColorOption[] = [
  { name: "Verde",  hex: "#4A9B4E" },
  { name: "Rojo",   hex: "#D64545" },
  { name: "Azul",   hex: "#4C63D2" },
  { name: "Beige",  hex: "#C9A876" },
  { name: "Negro",  hex: "#111111" },
  { name: "Blanco", hex: "#FFFDF8" },
  { name: "Plata",  hex: "#B8B8B8" },
];

export const USE_CASES: { Icon: LucideIcon; title: string; desc: string }[] = [
  { Icon: Star,             title: "Reseñas de Google",         desc: "Un toque lleva directo a dejar una reseña en Google, sin buscar ni escribir el nombre del negocio." },
  { Icon: IdCard,           title: "Tarjeta de visita digital", desc: "Comparte tu contacto, cargo y redes al instante, sin quedarte sin tarjetas de papel." },
  { Icon: UtensilsCrossed,  title: "Carta o menú digital",      desc: "Perfecto para bares y restaurantes: la carta siempre actualizada, sin reimprimir." },
  { Icon: Instagram,        title: "Redes sociales",            desc: "Lleva a tu Instagram, Facebook o TikTok en un toque, sin que el cliente tenga que buscarte." },
  { Icon: Wifi,             title: "WiFi del local",            desc: "Comparte la contraseña del WiFi sin que nadie tenga que preguntarla ni teclearla." },
  { Icon: MessageCircle,    title: "Contacto directo",          desc: "Abre WhatsApp o una ficha de contacto lista para guardar, sin pedir el número." },
];

export const FAQS: { q: string; a: string }[] = [
  { q: "¿Funciona con cualquier móvil?", a: "Sí. Funciona con iPhone 7 o superior y con prácticamente cualquier Android de los últimos años. No hace falta instalar ninguna app para usarlo, solo para configurarlo." },
  { q: "¿Necesita batería o cargarse?", a: "No. La tecnología NFC es pasiva: no lleva batería ni necesita cargarse nunca." },
  { q: "¿Puedo cambiar el enlace después?", a: "Sí, cuando quieras y gratis, desde la app gratuita NFC Tools, sin volver a comprar nada." },
  { q: "¿Cuánto tarda el envío?", a: "3-5 días laborables en Gran Canaria. Al resto de Canarias y a la península, entre 4 y 7 días." },
  { q: "¿Necesita que el negocio tenga wifi o conexión?", a: "No. El teléfono del cliente necesita conexión para abrir el enlace, pero la tarjeta o placa no necesita electricidad ni wifi propio." },
  { q: "¿Tiene garantía?", a: "Sí, 12 meses de garantía por defectos de fabricación. Si el chip falla, lo reponemos sin coste." },
];

export type NfcZona = {
  slug: string;
  isla: string;
  localidades: string[];
  useCaseTitles: string[];
  intro: string;
};

export const ZONAS: NfcZona[] = [
  {
    slug: "tenerife",
    isla: "Tenerife",
    localidades: ["Santa Cruz de Tenerife", "San Cristóbal de La Laguna", "Puerto de la Cruz", "Adeje", "Los Cristianos", "Arona"],
    useCaseTitles: ["Reseñas de Google", "Carta o menú digital", "Tarjeta de visita digital", "Redes sociales", "Contacto directo", "WiFi del local"],
    intro: "La isla con más peso hostelero y turístico de Canarias: ideal para reseñas de Google y cartas digitales que no se reimprimen nunca.",
  },
  {
    slug: "lanzarote",
    isla: "Lanzarote",
    localidades: ["Arrecife", "Puerto del Carmen", "Playa Blanca", "Costa Teguise", "Teguise"],
    useCaseTitles: ["Redes sociales", "Tarjeta de visita digital", "Reseñas de Google", "Contacto directo", "Carta o menú digital", "WiFi del local"],
    intro: "Con un tejido de comercio turístico y artesanal muy activo: perfecto para llevar a tu Instagram o tu ficha de contacto en un solo toque.",
  },
  {
    slug: "fuerteventura",
    isla: "Fuerteventura",
    localidades: ["Puerto del Rosario", "Corralejo", "Costa Calma", "Morro Jable", "Gran Tarajal"],
    useCaseTitles: ["Redes sociales", "WiFi del local", "Reseñas de Google", "Tarjeta de visita digital", "Contacto directo", "Carta o menú digital"],
    intro: "Turismo de playa y de surf durante todo el año: útil para compartir el WiFi de un hostal o las redes de una escuela de surf sin escribir nada a mano.",
  },
];

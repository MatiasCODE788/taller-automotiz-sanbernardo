/**
 * Datos reales del negocio. Es la ÚNICA fuente de verdad: navbar, contacto,
 * footer, SEO y datos estructurados leen desde aquí.
 *
 * Regla del proyecto: no se inventa información. Lo que aún no se conoce
 * queda en `null` y la interfaz lo oculta o lo muestra como pendiente.
 */

export const site = {
  name: "Automotriz San Bernardo",
  tagline: "Mecánica integral",
  owner: "Andrés Guajardo",
  yearsOfExperience: 12,

  address: {
    street: "Barros Arana 1944",
    locality: "San Bernardo",
    region: "Región Metropolitana",
    country: "CL",
    full: "Barros Arana 1944, San Bernardo, Chile",
  },

  phone: {
    display: "+56 9 8808 4151",
    tel: "+56988084151",
    whatsappNumber: "56988084151",
  },

  /** Mensaje predefinido para los botones generales de WhatsApp. */
  defaultWhatsappMessage:
    "Hola, quisiera consultar por un servicio para mi vehículo en Automotriz San Bernardo.",

  /** Zona horaria usada para calcular "abierto / cerrado" en vivo. */
  timeZone: "America/Santiago",

  /**
   * Horario. `day` sigue la convención de JavaScript (0 = domingo … 6 = sábado).
   * `opens`/`closes` en formato 24 h "HH:MM"; `null` = cerrado.
   */
  hours: [
    { day: 1, label: "Lunes", opens: "09:30", closes: "19:00" },
    { day: 2, label: "Martes", opens: "09:30", closes: "19:00" },
    { day: 3, label: "Miércoles", opens: "09:30", closes: "19:00" },
    { day: 4, label: "Jueves", opens: "09:30", closes: "19:00" },
    { day: 5, label: "Viernes", opens: "09:30", closes: "19:00" },
    { day: 6, label: "Sábado", opens: "09:30", closes: "13:00" },
    { day: 0, label: "Domingo", opens: null, closes: null },
  ] as const satisfies readonly DayHours[],

  /**
   * Redes sociales. PENDIENTES: mientras el valor sea `null` los enlaces
   * NO se muestran en ninguna parte del sitio. Al recibir las URL reales,
   * pégalas aquí (ej. "https://www.instagram.com/usuario") y aparecerán solos.
   */
  social: {
    instagram: null as string | null,
    facebook: null as string | null,
  },

  /**
   * Enlace a la ficha de Google del negocio. Mientras no se tenga la URL
   * oficial de la ficha (o de "escribir una reseña"), se usa una búsqueda en
   * Google Maps con el nombre y la dirección reales.
   */
  googleBusinessUrl: null as string | null,
} as const;

export type DayHours = {
  day: number;
  label: string;
  opens: string | null;
  closes: string | null;
};

/* ------------------------------ Helpers ------------------------------ */

/** Enlace de WhatsApp con mensaje predefinido (URL-encoded). */
export function whatsappUrl(message: string = site.defaultWhatsappMessage): string {
  return `https://wa.me/${site.phone.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Enlace para llamar por teléfono. */
export const telUrl = `tel:${site.phone.tel}`;

const mapsQuery = encodeURIComponent(`${site.name}, ${site.address.full}`);

/** Abre la ubicación en Google Maps (búsqueda por nombre y dirección). */
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

/** Mapa embebido sin API key. */
export const mapsEmbedUrl = `https://www.google.com/maps?q=${mapsQuery}&hl=es&z=17&output=embed`;

/** Ficha de Google (oficial si existe; si no, búsqueda en Maps). */
export const googleListingUrl = site.googleBusinessUrl ?? mapsUrl;

/** Redes sociales realmente disponibles (se filtran las pendientes). */
export function availableSocials() {
  const list: { id: "instagram" | "facebook"; label: string; href: string }[] = [];
  if (site.social.instagram) list.push({ id: "instagram", label: "Instagram", href: site.social.instagram });
  if (site.social.facebook) list.push({ id: "facebook", label: "Facebook", href: site.social.facebook });
  return list;
}

/** Texto corto de horario para meta descriptions y resúmenes. */
export const hoursSummary = "Lunes a viernes 09:30–19:00 · Sábado 09:30–13:00 · Domingo cerrado";

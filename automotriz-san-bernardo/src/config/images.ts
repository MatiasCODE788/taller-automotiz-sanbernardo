/**
 * Fotografías reales del taller.
 *
 * ┌─ CÓMO AGREGAR FOTOS ───────────────────────────────────────────────┐
 * │ 1. Copia las imágenes dentro de /public/images/ (hero, about,      │
 * │    gallery).                                                       │
 * │ 2. Regístralas aquí. Next.js las optimiza (WebP/AVIF, tamaños      │
 * │    responsive y carga diferida) automáticamente.                   │
 * │ 3. Guarda: el hero, "Nosotros" y la galería se actualizan solos.   │
 * └────────────────────────────────────────────────────────────────────┘
 *
 * Mientras las listas estén vacías, el sitio muestra espacios de reserva
 * elegantes. NO se usan fotos de terceros ni imágenes de stock.
 *
 * `width` y `height` son las dimensiones reales del archivo (en píxeles);
 * evitan saltos de diseño al cargar.
 */

export type Photo = {
  /** Ruta pública, ej. "/images/gallery/trabajo-01.jpg" */
  src: string;
  /** Texto alternativo: describe lo que SE VE, sin inventar el trabajo realizado. */
  alt: string;
  width: number;
  height: number;
};

/** Fotografía panorámica del taller para el hero. Ej: { src: "/images/hero/taller.jpg", alt: "...", width: 2400, height: 1200 } */
export const heroPhoto: Photo | null = null;

/** Fotografías de las instalaciones para la sección "Nosotros" (recomendado: 2 o 3). */
export const aboutPhotos: Photo[] = [];

/** Fotografías de vehículos y trabajos para la galería. */
export const galleryPhotos: Photo[] = [];

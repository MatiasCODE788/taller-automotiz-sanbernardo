/**
 * Reseñas de Google.
 *
 * ┌─ IMPORTANTE ────────────────────────────────────────────────────────┐
 * │ Solo agrega reseñas AUTÉNTICAS copiadas de la ficha de Google del    │
 * │ negocio (nombre, puntuación y texto reales). Nunca inventes datos.   │
 * └─────────────────────────────────────────────────────────────────────┘
 *
 * Mientras la lista esté vacía, la sección muestra un estado provisional
 * con un enlace a la ficha del negocio.
 */

export type Review = {
  /** Nombre tal como aparece en Google. */
  author: string;
  /** Puntuación real de 1 a 5. */
  rating: 1 | 2 | 3 | 4 | 5;
  /** Texto de la reseña. */
  text: string;
  /** Fecha relativa o exacta como la muestra Google, ej. "hace 2 meses". */
  date?: string;
  /** Enlace directo a la reseña (opcional). */
  url?: string;
};

export const reviews: Review[] = [];

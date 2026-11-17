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
  excerpt?: boolean;
  /** Fecha relativa o exacta como la muestra Google, ej. "hace 2 meses". */
  date?: string;
  /** Enlace directo a la reseña (opcional). */
  url?: string;
};

export const reviews: Review[] = [
  {
    author: "Cecilia Margarita Serrano Carmona",
    rating: 5,
    text: "Excelente lugar para llevar tu auto a reparar.",
    excerpt: true,
  },
  {
    author: "Félix Carmona",
    rating: 5,
    text: "Saben lo que hacen! Excelente experiencia, llegué después de una mala experiencia en otro taller, y después de unos días salió con todo resuelto. 100% recomendado si quieres solucionar tu problema y no pagar de más.",
  },
  {
    author: "Marcelo Cadiz",
    rating: 5,
    text: "Excelente Servicio te mantienen informado por medio de llamadas y videos, transparentes en la compra de repuestos, muy profesionales. 100% Recomendados!!!",
  },
];

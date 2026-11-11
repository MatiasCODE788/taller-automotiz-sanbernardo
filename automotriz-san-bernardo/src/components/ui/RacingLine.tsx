/**
 * Detalle gráfico tomado del logotipo: línea roja con tres cortes
 * inclinados al final. Se usa como marca de apertura de cada sección.
 */
export function RacingLine({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 120 8"
      className={`h-2 w-24 text-brand ${className}`}
      fill="currentColor"
    >
      <rect x="0" y="3" width="86" height="2" />
      <path d="M94 0h5l-4 8h-5zM102 0h5l-4 8h-5zM110 0h5l-4 8h-5z" />
    </svg>
  );
}

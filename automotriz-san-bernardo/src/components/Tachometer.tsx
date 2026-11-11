/**
 * Tacómetro decorativo del hero. Se dibuja con SVG (sin imágenes externas) y
 * usa el rojo de marca en la zona de revoluciones altas, igual que el arco
 * rojo del logotipo. Al cargar, la aguja hace el barrido de arranque de un
 * tablero real y queda en ralentí (ver `.needle` en globals.css).
 *
 * Los valores se redondean para que servidor y navegador generen exactamente
 * el mismo SVG (evita avisos de hidratación).
 */

const CX = 300;
const CY = 300;
const MAX = 8; // x1000 rpm
const START = -135; // grados, 0 = arriba
const SWEEP = 270;

const angle = (value: number) => START + (value / MAX) * SWEEP;
const point = (deg: number, r: number) => {
  const rad = (deg * Math.PI) / 180;
  return { x: +(CX + r * Math.sin(rad)).toFixed(2), y: +(CY - r * Math.cos(rad)).toFixed(2) };
};
const arc = (from: number, to: number, r: number) => {
  const a = point(angle(from), r);
  const b = point(angle(to), r);
  return `M ${a.x} ${a.y} A ${r} ${r} 0 ${(to - from) / MAX > 0.5 ? 1 : 0} 1 ${b.x} ${b.y}`;
};

export function Tachometer({ className = "" }: { className?: string }) {
  const ticks = Array.from({ length: MAX * 4 + 1 }, (_, i) => i / 4);

  return (
    <svg viewBox="0 0 600 600" className={className} aria-hidden="true" focusable="false" fill="none">
      {/* Arcos base y zona roja */}
      <path d={arc(0, 7, 287)} stroke="#C8CDD4" strokeOpacity="0.35" strokeWidth="1.5" />
      <path d={arc(7, 8, 287)} stroke="#C91E2D" strokeWidth="9" strokeLinecap="butt" />

      {/* Marcas */}
      {ticks.map((t) => {
        const major = Number.isInteger(t);
        const half = !major && t % 0.5 === 0;
        const a = angle(t);
        const p1 = point(a, 270);
        const p2 = point(a, major ? 238 : half ? 252 : 259);
        const red = t >= 7;
        return (
          <line
            key={t}
            x1={p1.x}
            y1={p1.y}
            x2={p2.x}
            y2={p2.y}
            stroke={red ? "#C91E2D" : "#C8CDD4"}
            strokeOpacity={major ? 0.9 : 0.5}
            strokeWidth={major ? 3 : 1.5}
          />
        );
      })}

      {/* Números */}
      {Array.from({ length: MAX + 1 }, (_, i) => i).map((n) => {
        const p = point(angle(n), 205);
        return (
          <text
            key={n}
            x={p.x}
            y={p.y}
            fill={n >= 7 ? "#F0525F" : "#C8CDD4"}
            fillOpacity="0.85"
            fontSize="30"
            fontWeight="700"
            fontStyle="italic"
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="inherit"
          >
            {n}
          </text>
        );
      })}

      {/* Aro interior */}
      <circle cx={CX} cy={CY} r="150" stroke="#C8CDD4" strokeOpacity="0.14" strokeWidth="1" />

      {/* Rótulo del tablero: referencia a la ubicación */}
      <text
        x={CX}
        y="408"
        fill="#C8CDD4"
        fillOpacity="0.8"
        fontSize="19"
        fontWeight="700"
        letterSpacing="5"
        textAnchor="middle"
        fontFamily="inherit"
      >
        SAN BERNARDO
      </text>
      <text
        x={CX}
        y="434"
        fill="#C8CDD4"
        fillOpacity="0.5"
        fontSize="13"
        fontWeight="600"
        letterSpacing="6"
        textAnchor="middle"
        fontFamily="inherit"
      >
        CHILE
      </text>

      {/* Aguja (el rectángulo invisible fija el centro de rotación) */}
      <g className="needle">
        <rect width="600" height="600" fill="none" />
        <path d="M 296 300 L 300 70 L 304 300 Z" fill="#C91E2D" />
        <path d="M 297 300 L 300 330 L 303 300 Z" fill="#C91E2D" fillOpacity="0.7" />
      </g>

      {/* Eje central */}
      <circle cx={CX} cy={CY} r="20" fill="#15181E" stroke="#C8CDD4" strokeOpacity="0.6" strokeWidth="2" />
      <circle cx={CX} cy={CY} r="7" fill="#C91E2D" />
    </svg>
  );
}

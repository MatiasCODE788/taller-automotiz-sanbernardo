"use client";

import { useEffect, useState } from "react";
import { getOpenState, type OpenState } from "@/lib/hours";
import { cn } from "@/lib/cn";

/**
 * Indica si el taller está abierto ahora, según el horario real y la hora de
 * Santiago de Chile. Se calcula en el navegador (tras montar) para que el
 * resultado sea siempre actual y no haya diferencias de hidratación.
 */
export function OpenStatus({ className }: { className?: string }) {
  const [state, setState] = useState<OpenState | null>(null);

  useEffect(() => {
    const update = () => setState(getOpenState());
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  // Reserva el espacio para que la página no se mueva al aparecer el estado.
  if (!state) return <p className={cn("min-h-6", className)} aria-hidden="true" />;

  return (
    <p className={cn("flex items-center gap-2.5 text-sm", className)} role="status">
      <span
        aria-hidden="true"
        className={cn("h-2.5 w-2.5 shrink-0 rounded-full", state.isOpen ? "bg-emerald-400" : "bg-brand-light")}
      />
      <span className="font-semibold text-paper">{state.label}</span>
      {state.detail ? <span className="text-silver">{state.detail}</span> : null}
    </p>
  );
}

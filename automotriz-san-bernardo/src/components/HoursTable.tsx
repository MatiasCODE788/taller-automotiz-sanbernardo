"use client";

import { useEffect, useState } from "react";
import { site } from "@/config/site";
import { getOpenState } from "@/lib/hours";
import { cn } from "@/lib/cn";

/** Tabla de horarios; resalta el día de hoy (hora de Santiago) una vez montada. */
export function HoursTable() {
  const [today, setToday] = useState<number | null>(null);

  useEffect(() => {
    setToday(getOpenState().today);
  }, []);

  return (
    <table className="w-full text-left text-[0.95rem]">
      <caption className="sr-only">Horario de atención</caption>
      <tbody>
        {site.hours.map((h) => {
          const isToday = today === h.day;
          return (
            <tr key={h.day} className={cn("border-b border-white/10", isToday && "bg-white/5")} aria-current={isToday ? "date" : undefined}>
              <th scope="row" className={cn("py-3 pl-3 pr-4 font-medium", isToday ? "text-paper" : "text-silver")}>
                {h.label}
              </th>
              <td className={cn("py-3 pr-3 text-right tabular-nums", isToday ? "font-semibold text-paper" : "text-silver")}>
                {h.opens && h.closes ? `${h.opens} a ${h.closes}` : "Cerrado"}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

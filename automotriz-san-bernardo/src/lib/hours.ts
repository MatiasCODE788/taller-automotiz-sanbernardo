import { site } from "@/config/site";

const WEEKDAY: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

/** Día de la semana y minutos transcurridos, siempre en la hora de Santiago de Chile. */
function getSantiagoNow(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: site.timeZone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "0";
  return {
    day: WEEKDAY[get("weekday")] ?? 0,
    minutes: parseInt(get("hour"), 10) * 60 + parseInt(get("minute"), 10),
  };
}

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

export type OpenState = {
  isOpen: boolean;
  label: string;
  detail: string;
  /** Día de hoy (0 = domingo) según la hora de Santiago. */
  today: number;
};

/** Calcula si el taller está abierto en este momento según el horario real. */
export function getOpenState(date: Date = new Date()): OpenState {
  const { day, minutes } = getSantiagoNow(date);
  const today = site.hours.find((h) => h.day === day);

  if (today?.opens && today.closes) {
    const opens = toMinutes(today.opens);
    const closes = toMinutes(today.closes);
    if (minutes >= opens && minutes < closes) {
      return { isOpen: true, label: "Abierto ahora", detail: `Cierra a las ${today.closes}`, today: day };
    }
    if (minutes < opens) {
      return { isOpen: false, label: "Cerrado ahora", detail: `Abre hoy a las ${today.opens}`, today: day };
    }
  }

  for (let i = 1; i <= 7; i++) {
    const next = site.hours.find((h) => h.day === (day + i) % 7);
    if (next?.opens) {
      const when = i === 1 ? "mañana" : `el ${next.label.toLowerCase()}`;
      return { isOpen: false, label: "Cerrado ahora", detail: `Abre ${when} a las ${next.opens}`, today: day };
    }
  }
  return { isOpen: false, label: "Cerrado ahora", detail: "", today: day };
}

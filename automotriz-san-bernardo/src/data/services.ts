import {
  Wrench,
  Zap,
  Cog,
  Stethoscope,
  ScanLine,
  CalendarCheck,
  Disc3,
  Axis3d,
  CarFront,
  Droplets,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  /** Mensaje de WhatsApp específico para este servicio. */
  whatsappMessage: string;
};

const ask = (topic: string) =>
  `Hola, quisiera consultar por ${topic} en Automotriz San Bernardo.`;

/** Los 10 servicios reales del taller. Las descripciones son generales y no prometen resultados. */
export const services: Service[] = [
  {
    id: "mecanica-general",
    title: "Mecánica general",
    description: "Revisión, mantenimiento y reparación de los sistemas mecánicos del vehículo.",
    icon: Wrench,
    whatsappMessage: ask("mecánica general"),
  },
  {
    id: "electricidad",
    title: "Electricidad automotriz",
    description: "Revisión de circuitos y componentes eléctricos y electrónicos del vehículo.",
    icon: Zap,
    whatsappMessage: ask("electricidad automotriz"),
  },
  {
    id: "cajas-automaticas",
    title: "Cajas automáticas",
    description: "Mantención y reparación de transmisiones automáticas.",
    icon: Cog,
    whatsappMessage: ask("la mantención o reparación de mi caja automática"),
  },
  {
    id: "diagnostico",
    title: "Diagnóstico automotriz",
    description: "Evaluación del vehículo para identificar el origen de una falla antes de intervenir.",
    icon: Stethoscope,
    whatsappMessage: ask("un diagnóstico automotriz"),
  },
  {
    id: "escaner",
    title: "Diagnóstico con escáner",
    description: "Lectura de los sistemas electrónicos del vehículo con equipo de diagnóstico.",
    icon: ScanLine,
    whatsappMessage: ask("un diagnóstico con escáner"),
  },
  {
    id: "mantenciones",
    title: "Mantenciones por kilometraje",
    description: "Mantención periódica según el kilometraje y las indicaciones de cada vehículo.",
    icon: CalendarCheck,
    whatsappMessage: ask("la mantención por kilometraje de mi vehículo"),
  },
  {
    id: "frenos",
    title: "Mantenimiento de frenos",
    description: "Revisión y mantenimiento del sistema de frenos.",
    icon: Disc3,
    whatsappMessage: ask("el mantenimiento de frenos"),
  },
  {
    id: "tren-delantero",
    title: "Tren delantero",
    description: "Reparación y mantenimiento de suspensión y dirección del eje delantero.",
    icon: Axis3d,
    whatsappMessage: ask("la reparación o mantenimiento del tren delantero"),
  },
  {
    id: "todas-las-marcas",
    title: "Todas las marcas",
    description: "Atención de vehículos de cualquier marca.",
    icon: CarFront,
    whatsappMessage: ask("el servicio para mi vehículo (indicaré marca y modelo)"),
  },
  {
    id: "dialisis",
    title: "Diálisis de transmisión automática",
    description: "Mantenimiento preventivo del fluido de la caja automática con equipo especializado.",
    icon: Droplets,
    whatsappMessage: ask("la diálisis de mi caja automática"),
  },
];

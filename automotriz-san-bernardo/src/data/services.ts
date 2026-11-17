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
    title: "Mecánica integral",
    description: "Las fugas, los ruidos y el consumo de aceite orientan la revisión del motor. El alcance de un ajuste depende del desgaste y de las mediciones de sus componentes. Cuéntanos desde cuándo aparece el síntoma y si cambia con la temperatura.",
    icon: Wrench,
    whatsappMessage: ask("mecánica integral"),
  },
  {
    id: "electricidad",
    title: "Electricidad automotriz",
    description: "Un arranque débil puede relacionarse con la batería, la alimentación del motor de partida o sus conexiones. Si falla un accesorio, la revisión se concentra en su circuito: alimentación, fusibles y retorno a masa.",
    icon: Zap,
    whatsappMessage: ask("electricidad automotriz"),
  },
  {
    id: "cajas-automaticas",
    title: "Cajas automáticas",
    description: "Una demora al pasar de P a D o un golpe al cambiar de marcha son datos útiles para el diagnóstico. Revisamos el estado del aceite y contamos con un escáner específico de transmisión. Indícanos en qué marcha sucede y si ocurre con la caja fría o caliente.",
    icon: Cog,
    whatsappMessage: ask("la mantención o reparación de mi caja automática"),
  },
  {
    id: "diagnostico",
    title: "Diagnóstico automotriz",
    description: "¿La falla aparece en frío, en caliente o al acelerar? Ese dato ayuda a reproducir el síntoma y orientar las pruebas. Contrastamos lo que ocurre en el vehículo con los indicios mecánicos o eléctricos antes de definir una reparación.",
    icon: Stethoscope,
    whatsappMessage: ask("un diagnóstico automotriz"),
  },
  {
    id: "escaner",
    title: "Escáner avanzado multimarca",
    description: "El escáner consulta los códigos de falla almacenados en los módulos electrónicos. Cuando el modelo lo permite, los datos en vivo ayudan a interpretar esas alertas. Un código orienta la revisión; por sí solo no identifica qué pieza debe cambiarse. Indícanos marca, modelo y año para confirmar cobertura.",
    icon: ScanLine,
    whatsappMessage: ask("un diagnóstico con escáner"),
  },
  {
    id: "mantenciones",
    title: "Mantenciones por kilometraje",
    description: "El plan del fabricante indica qué aceites, filtros y fluidos corresponde revisar o sustituir según kilometraje y tiempo de uso. Con el kilometraje actual y los antecedentes de la última mantención podemos orientar qué trabajos están pendientes.",
    icon: CalendarCheck,
    whatsappMessage: ask("la mantención por kilometraje de mi vehículo"),
  },
  {
    id: "frenos",
    title: "Mantenimiento de frenos",
    description: "El desgaste de pastillas y discos, el estado del líquido y las posibles fugas aportan información distinta sobre el frenado. La rectificación de un disco depende de su estado y de que el espesor final respete el mínimo indicado por el fabricante.",
    icon: Disc3,
    whatsappMessage: ask("el mantenimiento de frenos"),
  },
  {
    id: "tren-delantero",
    title: "Tren delantero",
    description: "Rótulas, bujes y terminales de dirección pueden presentar holguras que se manifiestan como golpes o imprecisión al conducir. Indicar si el ruido aparece al doblar, frenar o pasar un bache ayuda a localizar el conjunto que requiere revisión.",
    icon: Axis3d,
    whatsappMessage: ask("la reparación o mantenimiento del tren delantero"),
  },
  {
    id: "todas-las-marcas",
    title: "Atención multimarca",
    description: "Servicio de mecánica multimarca.",
    icon: CarFront,
    whatsappMessage: ask("el servicio para mi vehículo (indicaré marca y modelo)"),
  },
  {
    id: "dialisis",
    title: "Diálisis de transmisión automática",
    description: "La SmartSafe ATF601 renueva el fluido mediante un intercambio de volúmenes equivalentes y permite observar presión y temperatura durante el proceso. Antes de la mantención revisamos el aceite y la especificación que corresponde a tu transmisión.",
    icon: Droplets,
    whatsappMessage: ask("la diálisis de mi caja automática"),
  },
];

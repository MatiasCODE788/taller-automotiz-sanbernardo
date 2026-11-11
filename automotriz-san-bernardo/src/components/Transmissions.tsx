import { Cog, Info } from "lucide-react";
import { services } from "@/data/services";
import { whatsappUrl } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { RacingLine } from "@/components/ui/RacingLine";
import { WhatsAppIcon } from "@/components/ui/Icons";

const dialysis = services.find((s) => s.id === "dialisis")!;

const reasons = [
  "Llegó el kilometraje de mantención que indica el fabricante.",
  "No sabes cuándo se renovó por última vez el fluido de la caja.",
  "Compraste un vehículo usado y quieres partir con un mantenimiento al día.",
  "Notas un comportamiento irregular en los cambios y quieres que revisemos tu caso.",
];

export function Transmissions() {
  return (
    <section
      id="especialidades"
      aria-labelledby="especialidades-title"
      className="relative isolate scroll-mt-16 overflow-hidden bg-navy py-24 sm:py-32"
    >
      <Cog
        aria-hidden="true"
        strokeWidth={0.4}
        className="absolute -right-32 -top-24 -z-10 h-[34rem] w-[34rem] text-silver/[0.06] lg:-right-40 lg:-top-32 lg:h-[46rem] lg:w-[46rem]"
      />

      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <RacingLine className="mb-6" />
          <h2 id="especialidades-title" className="font-display text-balance text-[clamp(1.6rem,3.5vw,2.75rem)] text-paper">
            Mantenimiento preventivo de cajas automáticas mediante diálisis.
          </h2>

          <div className="mt-8 max-w-2xl space-y-5 text-pretty text-lg leading-relaxed text-silver">
            <p>
              La caja automática funciona con un fluido que lubrica, ayuda a refrigerar y permite el accionamiento
              de sus componentes. Con el uso, ese fluido se desgasta y acumula residuos.
            </p>
            <p>
              La diálisis es un procedimiento de mantenimiento preventivo: un equipo especializado se conecta al
              circuito de la transmisión y renueva el fluido de forma controlada. En general permite renovar una
              mayor proporción del fluido que un cambio tradicional por drenaje.
            </p>
            <p>
              Trabajamos con tecnología especializada para este servicio, y atendemos cada vehículo según sus
              especificaciones de fluido y de mantención.
            </p>
          </div>

          <div className="mt-10">
            <Button href={whatsappUrl(dialysis.whatsappMessage)} external size="lg" icon={<WhatsAppIcon size={20} />}>
              Consultar por diálisis
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5 lg:pt-3">
          <h3 className="text-xl font-bold text-paper">Cuándo conviene consultar</h3>
          <ul className="mt-5">
            {reasons.map((reason) => (
              <li key={reason} className="border-t border-white/15 py-4 text-pretty leading-relaxed text-silver">
                {reason}
              </li>
            ))}
          </ul>

          <p className="mt-6 flex gap-3 border-t border-white/15 pt-6 text-sm leading-relaxed text-silver/80">
            <Info size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-brand-light" />
            <span>
              Es un mantenimiento preventivo: no reemplaza la reparación de una caja que ya presenta fallas. El
              procedimiento y el fluido adecuados dependen de cada vehículo.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

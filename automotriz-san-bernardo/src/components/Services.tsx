import { Plus } from "lucide-react";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

const groups = [
  {
    title: "Revisar una falla",
    intro: "Un testigo encendido, un arranque intermitente o una pérdida de potencia son pistas distintas. El diagnóstico combina lo que notas al conducir con la revisión del sistema afectado y, cuando corresponde, la lectura electrónica.",
    ids: ["diagnostico", "escaner", "electricidad"],
  },
  {
    title: "Mantener o reparar",
    intro: "El kilometraje y el historial orientan la mantención preventiva. Para una reparación, también importa cómo aparece el síntoma: una vibración al frenar se investiga de forma distinta a un golpe al pasar por un desnivel.",
    ids: ["mantenciones", "mecanica-general", "frenos", "tren-delantero"],
  },
  {
    title: "Cuidar la caja automática",
    intro: "El aceite de la transmisión lubrica componentes y ayuda a disipar calor. Su especificación y el intervalo de cambio dependen de la caja. Si hay tirones o demora al seleccionar una marcha, conviene consultar por diagnóstico.",
    ids: ["cajas-automaticas", "dialisis"],
  },
];

export function Services() {
  return (
    <section id="servicios" aria-labelledby="servicios-title" className="surface-light scroll-mt-16 bg-paper py-14 text-graphite sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading id="servicios-title" tone="light" title="¿Qué necesita tu vehículo?" />
          <p className="text-sm text-graphite/75">Servicio técnico multimarca.</p>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-graphite/20">
          {groups.map(({ title, intro, ids }) => (
            <article data-reveal key={title} className="border-t-2 border-graphite pt-5 lg:px-6 lg:first:pl-0 lg:last:pr-0">
              <h3 className="text-xl font-bold tracking-tight">{title}</h3>
              <p className="mt-2 mb-5 max-w-prose text-sm leading-relaxed text-graphite/75">{intro}</p>
              {ids.map((id) => {
                const service = services.find((item) => item.id === id);
                if (!service) return null;
                const Icon = service.icon;
                return (
                  <details key={id} name={ids[0]} open={id === ids[0]} className="group border-t border-graphite/15">
                    <summary className="flex cursor-pointer list-none items-center gap-3 py-4 text-sm font-semibold hover:text-brand group-open:text-brand [&::-webkit-details-marker]:hidden">
                      <Icon size={18} aria-hidden="true" className="shrink-0" />
                      {service.title}
                      <Plus size={16} aria-hidden="true" className="ml-auto shrink-0 group-open:rotate-45" />
                    </summary>
                    <p className="pb-4 pl-[1.875rem] text-sm leading-relaxed text-graphite/75">{service.description}</p>
                    {id === "dialisis" && (
                      <a href="#especialidades" className="mb-4 ml-[1.875rem] inline-block text-sm font-semibold text-brand underline underline-offset-4">Conocer la mantención con SmartSafe</a>
                    )}
                  </details>
                );
              })}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

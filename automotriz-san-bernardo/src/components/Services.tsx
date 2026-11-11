import { services } from "@/data/services";
import { whatsappUrl } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppIcon } from "@/components/ui/Icons";

export function Services() {
  return (
    <section id="servicios" aria-labelledby="servicios-title" className="surface-light scroll-mt-16 bg-paper py-24 text-graphite sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="servicios-title"
          tone="light"
          title="Todo lo que tu vehículo necesita, en un solo taller"
          intro="Diez servicios de mecánica integral. Escríbenos por WhatsApp y consulta por el que necesitas."
        />

        <ul className="mt-16 grid gap-x-20 md:grid-cols-2">
          {services.map(({ id, title, description, icon: Icon, whatsappMessage }) => (
            <li key={id} className="group flex gap-5 border-t border-graphite/15 py-7">
              <span
                aria-hidden="true"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[3px] bg-navy text-paper transition-colors duration-200 group-hover:bg-brand"
              >
                <Icon size={22} strokeWidth={1.75} />
              </span>
              <div className="min-w-0">
                <h3 className="text-lg font-bold leading-snug">{title}</h3>
                <p className="mt-1.5 text-pretty leading-relaxed text-graphite/70">{description}</p>
                <a
                  href={whatsappUrl(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Consultar por WhatsApp: ${title}`}
                  className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-brand underline-offset-4 hover:underline"
                >
                  <WhatsAppIcon size={16} />
                  Consultar por WhatsApp
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

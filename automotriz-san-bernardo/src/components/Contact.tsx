import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { availableSocials, mapsEmbedUrl, mapsUrl, site, telUrl, whatsappUrl } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { SocialIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HoursTable } from "@/components/HoursTable";
import { OpenStatus } from "@/components/OpenStatus";

export function Contact() {
  // Solo se muestran las redes con URL real (las pendientes quedan ocultas).
  const socials = availableSocials();

  return (
    <section id="contacto" aria-labelledby="contacto-title" className="scroll-mt-16 bg-graphite py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="contacto-title"
          title="Visítanos o escríbenos para agendar tu hora"
          intro="Respondemos por WhatsApp y por teléfono. También puedes pasar directamente al taller en el horario de atención."
        />

        <div className="mt-16 grid gap-14 lg:grid-cols-12">
          <div className="space-y-10 lg:col-span-5">
            <div data-reveal className="space-y-6">
              <div className="flex gap-4">
                <MapPin size={22} aria-hidden="true" className="mt-0.5 shrink-0 text-brand-light" />
                <address className="not-italic">
                  <p className="font-bold text-paper">Dirección</p>
                  <p className="mt-1 text-silver">{site.address.full}</p>
                </address>
              </div>
              <div className="flex gap-4">
                <Phone size={22} aria-hidden="true" className="mt-0.5 shrink-0 text-brand-light" />
                <div>
                  <p className="font-bold text-paper">Teléfono y WhatsApp</p>
                  <a href={telUrl} className="mt-1 inline-block text-lg font-semibold text-silver underline-offset-4 hover:text-white hover:underline">
                    {site.phone.display}
                  </a>
                </div>
              </div>
            </div>

            <div data-reveal className="flex flex-col gap-3 sm:flex-row">
              <Button href={whatsappUrl()} external size="lg" icon={<WhatsAppIcon size={20} />}>
                Escribir por WhatsApp
              </Button>
              <Button href={mapsUrl} external variant="outline" size="lg" icon={<Navigation size={18} aria-hidden="true" />}>
                Cómo llegar
              </Button>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-3">
                <Clock size={22} aria-hidden="true" className="shrink-0 text-brand-light" />
                <h3 className="font-bold text-paper">Horario de atención</h3>
              </div>
              <OpenStatus className="mb-4" />
              <HoursTable />
            </div>

            {socials.length > 0 ? (
              <div>
                <p className="mb-3 font-bold text-paper">Síguenos</p>
                <ul className="flex flex-wrap gap-2">
                  {socials.map((s) => (
                    <li key={s.id}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${site.name} en ${s.label}`}
                        className="inline-flex min-h-12 items-center gap-2 rounded-md border border-white/20 bg-white/5 py-1.5 pl-1.5 pr-3 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
                      >
                        <span className={`social-mark social-mark-${s.id}`}><SocialIcon network={s.id} size={24} /></span>
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          <div data-reveal className="lg:col-span-7">
            <div className="h-full min-h-[22rem] overflow-hidden rounded-[3px] border border-white/10 bg-navy lg:min-h-[34rem]">
              <iframe
                title={`Mapa de ubicación de ${site.name}`}
                src={mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-full min-h-[22rem] w-full border-0 lg:min-h-[34rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

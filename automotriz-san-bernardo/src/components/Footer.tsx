import Image from "next/image";
import { navLinks } from "@/config/navigation";
import { availableSocials, hoursSummary, site, telUrl, whatsappUrl } from "@/config/site";
import { SocialIcon } from "@/components/ui/Icons";

export function Footer() {
  const socials = availableSocials();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-graphite pb-24 pt-16 md:pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Image
              src="/images/brand/logo.png"
              alt={`${site.name} — ${site.tagline}`}
              width={1400}
              height={403}
              sizes="240px"
              className="h-16 w-auto"
              loading="lazy"
            />
            <p className="mt-5 max-w-xs text-pretty leading-relaxed text-silver">
              Taller de mecánica integral en San Bernardo. {site.yearsOfExperience} años de trayectoria, atendido por su propio dueño.
            </p>
          </div>

          <nav aria-label="Pie de página" className="lg:col-span-2">
            <h2 className="font-bold text-paper">Navegación</h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-silver transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="font-bold text-paper">Horario</h2>
            <ul className="mt-4 space-y-2.5 text-silver">
              <li>Lunes a viernes: 09:30 a 19:00</li>
              <li>Sábado: 09:30 a 13:00</li>
              <li>Domingo: cerrado</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-bold text-paper">Contacto</h2>
            <address className="mt-4 space-y-2.5 not-italic text-silver">
              <p>{site.address.full}</p>
              <p>
                <a href={telUrl} className="hover:text-white">
                  {site.phone.display}
                </a>
              </p>
              <p>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Escribir por WhatsApp
                </a>
              </p>
            </address>
            {socials.length > 0 ? (
              <ul className="mt-5 flex flex-wrap gap-2">
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
            ) : null}
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-sm text-silver/80">
          <p>
            © {year} {site.name}. Todos los derechos reservados.
          </p>
          <p className="sr-only">{hoursSummary}</p>
        </div>
      </div>
    </footer>
  );
}

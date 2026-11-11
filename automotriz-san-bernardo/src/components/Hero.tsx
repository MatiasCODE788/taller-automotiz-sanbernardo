import Image from "next/image";
import { MapPin } from "lucide-react";
import { heroPhoto } from "@/config/images";
import { mapsUrl, site, whatsappUrl } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/Motion";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { Tachometer } from "@/components/Tachometer";

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-graphite">
      {/* Fondo: fotografía real del taller si existe; si no, el tacómetro de marca. */}
      {heroPhoto ? (
        <>
          <Image
            src={heroPhoto.src}
            alt={heroPhoto.alt}
            fill
            sizes="100vw"
            quality={80}
            className="-z-20 object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-graphite via-graphite/80 to-graphite/20" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-graphite via-transparent to-graphite/50" />
        </>
      ) : (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20"
            style={{ background: "radial-gradient(60% 70% at 78% 50%, rgb(16 38 75 / 0.75), transparent 70%)" }}
          />
          <Tachometer className="absolute -right-[30%] top-1/2 -z-10 w-[min(130vw,900px)] -translate-y-1/2 opacity-25 sm:-right-[16%] sm:opacity-60 lg:-right-[16%] lg:opacity-100" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-graphite via-graphite/70 to-transparent lg:via-graphite/40" />
        </>
      )}

      <div className="mx-auto flex w-full max-w-7xl flex-1 items-center px-5 pb-16 pt-32 sm:px-8">
        <div className="max-w-5xl">
          <FadeIn delay={0.1}>
            <h1
              id="hero-title"
              className="font-display text-balance text-[clamp(2.15rem,6.4vw,5.25rem)] text-paper"
            >
              Tu vehículo en manos de expertos.
            </h1>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-silver sm:text-xl">
              12 años de trayectoria en mecánica integral, electricidad automotriz y transmisiones automáticas.
              Atención personalizada para vehículos de todas las marcas.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={whatsappUrl()} external size="lg" icon={<WhatsAppIcon size={20} />}>
              Agendar por WhatsApp
            </Button>
            <Button href="#servicios" variant="outline" size="lg">
              Explorar servicios
            </Button>
          </FadeIn>
        </div>
      </div>

      {/* Datos reales del taller y referencia a la ubicación */}
      <FadeIn delay={0.6}>
        <div className="border-t border-white/10 bg-graphite/70 backdrop-blur-sm">
          <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-y-5 px-5 py-5 sm:px-8 lg:grid-cols-4">
            <div className="pr-4">
              <dt className="text-sm text-silver/80">Trayectoria</dt>
              <dd className="mt-0.5 font-semibold text-paper">{site.yearsOfExperience} años establecido</dd>
            </div>
            <div className="border-l border-white/10 pl-5 pr-4">
              <dt className="text-sm text-silver/80">Atención</dt>
              <dd className="mt-0.5 font-semibold text-paper">Atendido por su dueño</dd>
            </div>
            <div className="pr-4 lg:border-l lg:border-white/10 lg:pl-5">
              <dt className="text-sm text-silver/80">Vehículos</dt>
              <dd className="mt-0.5 font-semibold text-paper">Todas las marcas</dd>
            </div>
            <div className="border-l border-white/10 pl-5">
              <dt className="text-sm text-silver/80">Ubicación</dt>
              <dd className="mt-0.5">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-1.5 font-semibold text-paper underline-offset-4 hover:text-brand-light hover:underline"
                >
                  <MapPin size={16} aria-hidden="true" className="mt-1 shrink-0 text-brand-light" />
                  {site.address.street}, {site.address.locality}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </FadeIn>
    </section>
  );
}

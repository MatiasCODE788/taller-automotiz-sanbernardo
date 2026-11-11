import Image from "next/image";
import { Camera } from "lucide-react";
import { aboutPhotos } from "@/config/images";
import { site } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="nosotros" aria-labelledby="nosotros-title" className="scroll-mt-16 bg-graphite py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-6">
          <SectionHeading
            id="nosotros-title"
            title={`${site.yearsOfExperience} años de trayectoria, con el dueño al frente del taller`}
          />

          <div className="mt-8 max-w-xl space-y-5 text-pretty text-lg leading-relaxed text-silver">
            <p>
              {site.name} lleva {site.yearsOfExperience} años establecida en {site.address.street}, {site.address.locality}.
              Es un taller atendido por su propio dueño y trabaja con vehículos de todas las marcas.
            </p>
            <p>
              El responsable y jefe de taller es {site.owner}, quien atiende el negocio personalmente.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-4 border-l-2 border-brand pl-5">
            <div>
              <p className="text-lg font-bold text-paper">{site.owner}</p>
              <p className="text-silver">Responsable y jefe de taller</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          {aboutPhotos.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {aboutPhotos.slice(0, 3).map((photo, i) => (
                <div
                  key={photo.src}
                  className={`relative overflow-hidden rounded-[3px] bg-navy ${i === 0 ? "col-span-2 aspect-[16/10]" : "aspect-[4/3]"}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:gap-4" aria-label="Espacio reservado para fotografías de las instalaciones">
              <div className="placeholder-hatch col-span-2 flex aspect-[16/10] flex-col items-center justify-center gap-3 rounded-[3px] border border-white/10 bg-navy/40 text-silver/70">
                <Camera size={28} strokeWidth={1.5} aria-hidden="true" />
                <p className="text-sm">Fotografías de las instalaciones</p>
              </div>
              <div className="placeholder-hatch aspect-[4/3] rounded-[3px] border border-white/10 bg-navy/40" />
              <div className="placeholder-hatch aspect-[4/3] rounded-[3px] border border-white/10 bg-navy/40" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

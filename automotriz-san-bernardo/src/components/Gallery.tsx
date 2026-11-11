"use client";

import Image from "next/image";
import { useState } from "react";
import { Camera, Expand } from "lucide-react";
import { galleryPhotos } from "@/config/images";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Lightbox } from "@/components/Lightbox";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const hasPhotos = galleryPhotos.length > 0;

  return (
    <section id="trabajos" aria-labelledby="trabajos-title" className="surface-light scroll-mt-16 bg-paper py-24 text-graphite sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="trabajos-title"
          tone="light"
          title="Vehículos que han pasado por el taller"
          intro={hasPhotos ? "Fotografías reales de nuestras instalaciones y de los vehículos atendidos. Toca una imagen para ampliarla." : undefined}
        />

        {hasPhotos ? (
          <ul className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {galleryPhotos.map((photo, i) => (
              <li key={photo.src} className="mb-4 break-inside-avoid">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Ampliar imagen ${i + 1} de ${galleryPhotos.length}: ${photo.alt}`}
                  className="group relative block w-full overflow-hidden rounded-[3px] bg-graphite/10"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    quality={75}
                    loading={i < 3 ? "eager" : "lazy"}
                    className="h-auto w-full transition duration-500 group-hover:scale-[1.03]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute bottom-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-[3px] bg-graphite/80 text-paper opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100"
                  >
                    <Expand size={16} />
                  </span>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            <div className="placeholder-hatch-dark col-span-full flex min-h-64 flex-col py-12 items-center justify-center gap-3 rounded-[3px] border border-graphite/15 bg-graphite/[0.03] px-6 text-center text-graphite/70">
              <Camera size={30} strokeWidth={1.5} aria-hidden="true" />
              <p className="max-w-md text-pretty">
                Aquí se mostrarán fotografías reales de los vehículos atendidos en el taller.
              </p>
              {process.env.NODE_ENV === "development" ? (
                <p className="text-sm text-graphite/50">
                  Para agregarlas, edita <code className="rounded bg-graphite/10 px-1.5 py-0.5">src/config/images.ts</code>.
                </p>
              ) : null}
            </div>
          </div>
        )}
      </div>

      {hasPhotos ? <Lightbox photos={galleryPhotos} index={active} onClose={() => setActive(null)} onChange={setActive} /> : null}
    </section>
  );
}

import Image from "next/image";
import { ArrowDownRight, MapPin } from "lucide-react";
import { heroPhoto } from "@/config/images";
import { availableSocials, mapsUrl, site, whatsappUrl } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { SocialIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { Tachometer } from "@/components/Tachometer";

const brands = ["Chevrolet", "Chery", "Citroën", "Ford", "GWM", "Honda", "Hyundai", "Kia", "Mazda", "Mitsubishi", "Nissan", "Peugeot", "Renault", "Suzuki", "Toyota", "Volkswagen"];

function BrandLabel({ brand }: { brand: string }) {
  const slug = brand === "GWM" ? "great-wall" : brand.toLowerCase().replace("ë", "e");
  return (
    <span className="inline-flex items-center gap-2">
      <span className="inline-flex h-9 w-12 shrink-0 items-center justify-center rounded bg-white p-1">
        <Image src={`/images/marcas/${slug}.png`} alt="" width={80} height={48} unoptimized className="h-full w-full object-contain" />
      </span>
      {brand}
    </span>
  );
}

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="bg-graphite pt-[4.25rem]">
      <div className="relative isolate grid overflow-hidden border-y border-white/15 lg:min-h-[min(74svh,44rem)] lg:grid-cols-[5fr_7fr]">
        <div className="order-2 flex flex-col justify-center px-5 py-8 sm:px-8 lg:order-1 lg:py-16 lg:pl-[max(2rem,calc((100vw-76rem)/2))]">
          <h1 id="hero-title" className="font-display max-w-md text-[clamp(1.65rem,3vw,2.25rem)] text-paper">
            Mecánica integral <span className="block text-silver">en San Bernardo</span>
          </h1>
          <p className="mt-6 max-w-xs border-l-2 border-brand pl-4 leading-relaxed text-silver">
            {site.yearsOfExperience} años de trayectoria. Taller atendido por su dueño.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-5">
            <Button href={whatsappUrl()} external icon={<WhatsAppIcon size={18} />}>Agendar hora</Button>
            <a href="#servicios" className="inline-flex items-center gap-1 py-2 text-sm font-semibold hover:underline">
              Ver servicios <ArrowDownRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="mt-7 max-w-md border-t border-white/15 pt-4">
            <p className="text-sm font-medium text-silver">Síguenos y conoce cómo trabajamos en el taller.</p>
            <ul aria-label="Redes sociales del taller" className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
              {availableSocials().map(({ id, label, href }) => (
                <li key={id}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-paper hover:underline">
                    <span className={`social-mark social-mark-${id}`}><SocialIcon network={id} size={21} /></span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative order-1 aspect-[4/3] bg-brand lg:order-2 lg:aspect-auto lg:[clip-path:polygon(10%_0,100%_0,100%_100%,0_100%)]">
          <div className="absolute inset-0 overflow-hidden bg-navy lg:[clip-path:polygon(calc(10%_+_6px)_0,100%_0,100%_100%,6px_100%)]">
            {heroPhoto ? (
              <Image src={heroPhoto.src} alt={heroPhoto.alt} fill sizes="(min-width: 1024px) 59vw, 100vw"
                className="object-cover" loading="eager" fetchPriority="high" />
            ) : <Tachometer className="h-full w-full" />}
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap items-baseline justify-between gap-x-8 gap-y-2 px-5 py-4 text-sm text-silver sm:px-8">
        <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white hover:underline">
          <MapPin size={16} aria-hidden="true" className="text-brand-light" />{site.address.street}, {site.address.locality}
        </a>
      </div>
      <div className="border-t-4 border-brand bg-navy text-paper">
        <details className="group mx-auto max-w-7xl px-5 sm:px-8">
          <summary className="flex cursor-pointer list-none flex-wrap items-center justify-between gap-5 py-6 sm:py-8 [&::-webkit-details-marker]:hidden">
            <span className="grid gap-2">
              <span className="font-display text-2xl sm:text-3xl">Atención multimarca</span>
              <span className="mt-1 flex flex-wrap gap-x-4 gap-y-2 text-sm text-paper group-open:hidden">
                {brands.slice(0, 5).map((brand) => <BrandLabel key={brand} brand={brand} />)}
              </span>
            </span>
            <span className="inline-flex min-h-11 items-center gap-4 rounded-[3px] bg-paper px-4 text-sm font-bold text-graphite">
              <span className="group-open:hidden">Ver las {brands.length} marcas</span>
              <span className="hidden group-open:inline">Ocultar lista</span>
              <span aria-hidden="true" className="text-xl text-brand group-open:rotate-45">+</span>
            </span>
          </summary>
          <ul className="grid grid-cols-2 gap-x-6 border-t border-white/25 pt-2 sm:grid-cols-4">
            {brands.map((brand) => (
              <li key={brand} className="border-b border-white/15 py-3 font-medium"><BrandLabel brand={brand} /></li>
            ))}
          </ul>
          <p className="py-5 text-sm text-silver">¿Buscas otra marca? Consulta por tu modelo y el servicio que necesitas.</p>
        </details>
      </div>
    </section>
  );
}

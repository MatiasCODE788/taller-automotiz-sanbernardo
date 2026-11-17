import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { whatsappUrl } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { RacingLine } from "@/components/ui/RacingLine";
import { WhatsAppIcon } from "@/components/ui/Icons";

export function Transmissions() {
  return (
    <section id="especialidades" aria-labelledby="especialidades-title" className="scroll-mt-16 border-y border-white/10 bg-navy py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
        <div data-reveal>
          <RacingLine className="mb-6" />
          <h2 id="especialidades-title" className="font-display max-w-xl text-balance text-[clamp(1.5rem,2.8vw,2.15rem)] text-paper">
            Servicio de diálisis para cajas automáticas
          </h2>
          <div className="mt-7 max-w-xl divide-y divide-white/20 border-y border-white/20">
            <div className="py-5">
              <h3 className="font-bold text-paper">Cambio de aceite de transmisión en el taller</h3>
              <p className="mt-2 leading-relaxed text-silver">Primero revisamos el estado del aceite de tu caja. Cuando corresponde renovarlo, usamos la SmartSafe ATF601 para realizar el recambio de fluido según las especificaciones de tu vehículo.</p>
            </div>
            <div className="py-5">
              <h3 className="font-bold text-paper">Diagnóstico de la transmisión</h3>
              <p className="mt-2 leading-relaxed text-silver">Si notas cambios bruscos o aparece una alerta de la caja, cuéntanos cuándo ocurre. Contamos con un escáner específico para revisar la transmisión.</p>
            </div>
          </div>
          <div className="mt-7">
            <Button href={whatsappUrl("Hola, quisiera cotizar el servicio de diálisis de caja automática con la SmartSafe ATF601. Mi vehículo es: ")} external icon={<WhatsAppIcon size={18} />}>
              Cotizar diálisis por WhatsApp
            </Button>
          </div>
        </div>
        <div className="isolate min-w-0 overflow-hidden rounded-md border border-white/15 bg-[#141b25] shadow-xl">
          <div data-reveal="machine" className="relative isolate aspect-[6/5] overflow-hidden bg-graphite sm:aspect-[3/2]">
            <Image src="/images/services/atf601-lateral.jpeg" alt="" fill sizes="(min-width: 1280px) 580px, (min-width: 1024px) 46vw, 94vw" className="-z-30 scale-110 object-cover opacity-35 blur-xl" />
            <div className="absolute -top-[21%] left-1/2 -z-20 aspect-[3/4] h-[120%] -translate-x-[36%] [mask-image:linear-gradient(to_right,transparent,black_5%,black_75%,transparent)]">
              <Image src="/images/services/atf601-lateral.jpeg" alt="Vista frontal y lateral de la SmartSafe ATF601 del taller" fill sizes="(min-width: 1280px) 380px, (min-width: 1024px) 30vw, 74vw" className="object-contain" />
            </div>
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-[#141b25] via-transparent to-black/10" />
            <div className="absolute inset-x-0 bottom-0 px-6 pb-4 sm:px-8">
              <span className="block text-3xl font-extrabold italic tracking-tight text-white sm:text-4xl">SmartSafe</span>
              <span className="mt-1 block text-sm font-semibold tracking-wide text-paper">Modelo ATF601</span>
            </div>
          </div>
          <div className="px-6 pb-6 sm:px-8">
            <dl className="grid gap-4 border-l-2 border-brand pl-4 text-sm leading-relaxed sm:grid-cols-2">
              <div><dt className="font-bold text-white">Recambio de aceite</dt><dd className="mt-1 text-silver">Reemplaza el fluido usado por un volumen equivalente de fluido nuevo.</dd></div>
              <div><dt className="font-bold text-white">Control del proceso</dt><dd className="mt-1 text-silver">Muestra la presión y la temperatura del fluido durante el servicio.</dd></div>
            </dl>
            <a href="https://www.smartsafe.com.uy/categorias/aceites-y-fluidos/atf-601" target="_blank" rel="noopener noreferrer" className="mt-5 flex items-center justify-between gap-3 border-t border-white/20 pt-4 text-sm font-semibold text-paper hover:text-brand-light">
              Leer la ficha técnica en SmartSafe <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Phone } from "lucide-react";
import { site, telUrl, whatsappUrl } from "@/config/site";
import { WhatsAppIcon } from "@/components/ui/Icons";

/** Barra fija inferior en celulares: acceso inmediato a llamar y a WhatsApp. */
export function MobileActionBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-graphite/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden"
      role="region"
      aria-label="Contacto rápido"
    >
      <div className="grid grid-cols-2 gap-3">
        <a
          href={telUrl}
          aria-label={`Llamar al ${site.phone.display}`}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-[3px] border border-silver/40 text-sm font-bold uppercase tracking-[0.07em] text-paper"
        >
          <Phone size={18} aria-hidden="true" />
          Llamar
        </a>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-[3px] bg-brand text-sm font-bold uppercase tracking-[0.07em] text-white"
        >
          <WhatsAppIcon size={18} />
          WhatsApp
        </a>
      </div>
    </div>
  );
}

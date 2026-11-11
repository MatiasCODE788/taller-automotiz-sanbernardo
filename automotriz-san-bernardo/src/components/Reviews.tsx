import { ExternalLink, MessageSquareQuote, Star } from "lucide-react";
import { reviews } from "@/data/reviews";
import { googleListingUrl } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

function Stars({ rating }: { rating: number }) {
  return (
    <p className="flex items-center gap-0.5" role="img" aria-label={`${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={18}
          aria-hidden="true"
          className={i < rating ? "fill-amber-400 text-amber-400" : "text-silver/40"}
        />
      ))}
    </p>
  );
}

export function Reviews() {
  const hasReviews = reviews.length > 0;

  return (
    <section id="resenas" aria-labelledby="resenas-title" className="scroll-mt-16 bg-navy py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="resenas-title"
          title="Lo que dicen nuestros clientes en Google"
          intro={hasReviews ? "Opiniones reales publicadas en la ficha del taller." : undefined}
        />

        {hasReviews ? (
          <>
            <ul className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <li key={`${r.author}-${r.date ?? ""}`} className="border-t border-white/15 pt-6">
                  <Stars rating={r.rating} />
                  <blockquote className="mt-4 text-pretty leading-relaxed text-paper">{r.text}</blockquote>
                  <p className="mt-5 font-semibold text-paper">{r.author}</p>
                  <p className="text-sm text-silver">
                    Reseña de Google{r.date ? ` · ${r.date}` : ""}
                    {r.url ? (
                      <>
                        {" "}
                        <a href={r.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">
                          Ver original
                        </a>
                      </>
                    ) : null}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-14">
              <Button href={googleListingUrl} external variant="outline" icon={<ExternalLink size={16} aria-hidden="true" />}>
                Ver todas en Google
              </Button>
            </div>
          </>
        ) : (
          <div className="mt-14 flex flex-col gap-8 border-t border-white/15 pt-10 md:flex-row md:items-center md:justify-between">
            <div className="flex max-w-2xl gap-5">
              <MessageSquareQuote size={36} strokeWidth={1.5} aria-hidden="true" className="mt-1 shrink-0 text-silver/60" />
              <p className="text-pretty text-lg leading-relaxed text-silver">
                Las reseñas de nuestros clientes se mostrarán en esta sección. Mientras tanto, puedes ver la ficha del
                taller en Google Maps.
              </p>
            </div>
            <Button
              href={googleListingUrl}
              external
              variant="outline"
              size="lg"
              icon={<ExternalLink size={16} aria-hidden="true" />}
              className="shrink-0"
            >
              Ver ficha en Google
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

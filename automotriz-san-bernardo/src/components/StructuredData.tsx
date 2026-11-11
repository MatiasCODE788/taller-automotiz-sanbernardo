import { availableSocials, site } from "@/config/site";
import { services } from "@/data/services";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/**
 * Datos estructurados (JSON-LD) para SEO local: ayudan a Google a entender que
 * es un taller mecánico en San Bernardo, con su dirección, teléfono y horario reales.
 */
export function StructuredData() {
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const data = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: site.name,
    description:
      "Taller de mecánica integral en San Bernardo: mecánica general, electricidad automotriz, cajas automáticas, diagnóstico con escáner, frenos y tren delantero.",
    url: siteUrl,
    image: `${siteUrl}/og.png`,
    logo: `${siteUrl}/images/brand/logo.png`,
    telephone: site.phone.tel,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    areaServed: { "@type": "City", name: site.address.locality },
    openingHoursSpecification: site.hours
      .filter((h) => h.opens && h.closes)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: dayNames[h.day],
        opens: h.opens,
        closes: h.closes,
      })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title },
      })),
    },
    ...(availableSocials().length > 0 ? { sameAs: availableSocials().map((s) => s.href) } : {}),
  };

  return (
    <script
      type="application/ld+json"
      // Se escapa "<" para evitar cierres accidentales de la etiqueta <script>.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

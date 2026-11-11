import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/config/site";
import { StructuredData } from "@/components/StructuredData";
import "./globals.css";

/**
 * Archivo (variable, eje de ancho + cursiva), licencia SIL OFL.
 * Se sirve desde /src/fonts: no depende de Google Fonts ni de internet al compilar.
 */
const archivo = localFont({
  src: [
    { path: "../fonts/Archivo-wdth-normal.woff2", style: "normal", weight: "100 900" },
    { path: "../fonts/Archivo-wdth-italic.woff2", style: "italic", weight: "100 900" },
  ],
  variable: "--font-archivo",
  display: "swap",
  declarations: [{ prop: "font-stretch", value: "62% 125%" }],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const description =
  "Taller mecánico en San Bernardo con 12 años de trayectoria: mecánica general, electricidad automotriz, cajas automáticas, diagnóstico con escáner, frenos y tren delantero. Todas las marcas. Barros Arana 1944.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} | Taller mecánico en San Bernardo`,
    template: `%s | ${site.name}`,
  },
  description,
  keywords: [
    "taller mecánico San Bernardo",
    "mecánica automotriz San Bernardo",
    "electricidad automotriz",
    "cajas automáticas",
    "diálisis de transmisión automática",
    "diagnóstico con escáner",
    "frenos",
    "tren delantero",
    "Automotriz San Bernardo",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "/",
    siteName: site.name,
    title: `${site.name} | Taller mecánico en San Bernardo`,
    description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${site.name} — ${site.tagline}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Taller mecánico en San Bernardo`,
    description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#15181E",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CL" className={archivo.variable}>
      <body className="font-sans">
        <a
          href="#contenido"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-[3px] bg-brand px-4 py-3 font-bold text-white transition focus:translate-y-0"
        >
          Saltar al contenido
        </a>
        {children}
        <StructuredData />
      </body>
    </html>
  );
}

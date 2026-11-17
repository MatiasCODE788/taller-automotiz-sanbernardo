import { galleryPhotos } from "@/config/images";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { MobileActionBar } from "@/components/MobileActionBar";
import { Navbar } from "@/components/Navbar";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { Transmissions } from "@/components/Transmissions";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <ScrollReveal />
        <Hero />
        <Services />
        <Transmissions />
        <About />
        {galleryPhotos.length > 0 && <Gallery />}
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}

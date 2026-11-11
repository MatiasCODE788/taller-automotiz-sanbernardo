import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-graphite px-6 text-center">
      <h1 className="font-display text-[clamp(2rem,6vw,4rem)] text-paper">Página no encontrada</h1>
      <p className="max-w-md text-silver">La dirección que buscas no existe. Vuelve al inicio para ver nuestros servicios.</p>
      <Button href="/" size="lg">
        Volver al inicio
      </Button>
    </main>
  );
}

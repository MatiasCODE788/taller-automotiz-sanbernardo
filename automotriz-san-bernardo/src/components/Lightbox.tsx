"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Photo } from "@/config/images";

type LightboxProps = {
  photos: Photo[];
  /** Índice de la foto abierta, o `null` si está cerrado. */
  index: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
};

/** Visor ampliado: teclado (← → Esc), foco inicial en "Cerrar" y bloqueo del scroll de fondo. */
export function Lightbox({ photos, index, onClose, onChange }: LightboxProps) {
  const reduce = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const isOpen = index !== null;
  const total = photos.length;

  useEffect(() => {
    if (!isOpen) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [isOpen]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % total);
      if (e.key === "ArrowLeft") onChange((index - 1 + total) % total);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, total, onClose, onChange]);

  const photo = index !== null ? photos[index] : null;

  return (
    <AnimatePresence>
      {photo && index !== null ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Galería de trabajos"
          className="fixed inset-0 z-[60] flex flex-col bg-graphite/95 backdrop-blur-sm"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <div className="flex items-center justify-between px-5 py-4 text-silver">
            <p className="text-sm tabular-nums" aria-live="polite">
              {index + 1} de {total}
            </p>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Cerrar imagen ampliada"
              className="inline-flex h-11 w-11 items-center justify-center rounded-[3px] border border-white/20 text-paper transition hover:bg-white/10"
            >
              <X size={22} aria-hidden="true" />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-16" onClick={(e) => e.stopPropagation()}>
            <Image
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="100vw"
              quality={85}
              className="max-h-full w-auto max-w-full rounded-[3px] object-contain"
              loading="eager"
            />

            {total > 1 ? (
              <>
                <button
                  type="button"
                  onClick={() => onChange((index - 1 + total) % total)}
                  aria-label="Imagen anterior"
                  className="absolute left-2 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-[3px] bg-graphite/70 text-paper transition hover:bg-brand sm:left-4"
                >
                  <ChevronLeft size={24} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => onChange((index + 1) % total)}
                  aria-label="Imagen siguiente"
                  className="absolute right-2 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-[3px] bg-graphite/70 text-paper transition hover:bg-brand sm:right-4"
                >
                  <ChevronRight size={24} aria-hidden="true" />
                </button>
              </>
            ) : null}
          </div>

          <p className="px-5 py-4 text-center text-sm text-silver" onClick={(e) => e.stopPropagation()}>
            {photo.alt}
          </p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

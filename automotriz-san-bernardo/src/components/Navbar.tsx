"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { navLinks } from "@/config/navigation";
import { site, telUrl, whatsappUrl } from "@/config/site";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/Icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquea el scroll del fondo y permite cerrar con Escape mientras el menú está abierto.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open ? "border-b border-white/10 bg-graphite/95 backdrop-blur-md" : "border-b border-transparent bg-transparent",
      )}
    >
      <nav aria-label="Principal" className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#inicio" onClick={close} aria-label={`${site.name} — ir al inicio`} className="shrink-0">
          <Image
            src="/images/brand/logo.png"
            alt={`${site.name} — ${site.tagline}`}
            width={1400}
            height={403}
            sizes="180px"
            className="h-14 w-auto"
            loading="eager"
          />
        </a>

        {/* Escritorio */}
        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-silver transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <Button href={whatsappUrl()} external size="md">
              Agendar hora
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[3px] border border-white/15 text-paper transition hover:bg-white/10 lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Móvil y tablet */}
      <AnimatePresence>
        {open ? (
          <motion.div
            id="menu-movil"
            className="fixed inset-x-0 bottom-0 top-[4.25rem] overflow-y-auto bg-graphite lg:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="mx-auto max-w-7xl px-5 pt-4 sm:px-8">
              {navLinks.map((link) => (
                <li key={link.href} className="border-b border-white/10">
                  <a
                    href={link.href}
                    onClick={close}
                    className="font-display block py-4 text-2xl text-paper transition-colors hover:text-brand-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 sm:px-8">
              <Button href={whatsappUrl()} external size="lg" icon={<WhatsAppIcon size={20} />} onClick={close}>
                Agendar hora
              </Button>
              <Button href={telUrl} variant="outline" size="lg" icon={<Phone size={18} aria-hidden="true" />} onClick={close}>
                Llamar {site.phone.display}
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

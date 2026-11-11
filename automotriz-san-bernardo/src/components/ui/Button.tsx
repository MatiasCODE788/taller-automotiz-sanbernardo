import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "outline-dark";
type Size = "md" | "lg";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  /** Abre en una pestaña nueva (WhatsApp, Maps, redes). */
  external?: boolean;
  icon?: ReactNode;
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
};

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:brightness-110 active:brightness-95",
  outline: "border border-silver/40 text-paper hover:border-silver hover:bg-white/10",
  "outline-dark": "border border-graphite/30 text-graphite hover:border-graphite hover:bg-graphite hover:text-paper",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[0.8rem]",
  lg: "h-14 px-7 text-[0.85rem]",
};

/** Enlace con apariencia de botón. Sirve para anclas internas, WhatsApp, teléfono y mapas. */
export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  icon,
  className,
  ariaLabel,
  onClick,
}: ButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "inline-flex items-center justify-center gap-2.5 rounded-[3px] font-bold uppercase tracking-[0.07em] whitespace-nowrap transition duration-200",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {icon}
      {children}
    </a>
  );
}

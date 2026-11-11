import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { RacingLine } from "./RacingLine";

type SectionHeadingProps = {
  id?: string;
  title: ReactNode;
  intro?: ReactNode;
  /** `dark` para fondos oscuros, `light` para fondos claros. */
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeading({ id, title, intro, tone = "dark", className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <RacingLine className="mb-6" />
      <h2
        id={id}
        className={cn(
          "font-display text-balance text-[clamp(1.6rem,3.5vw,2.75rem)]",
          tone === "dark" ? "text-paper" : "text-graphite",
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p className={cn("mt-5 max-w-2xl text-pretty text-lg leading-relaxed", tone === "dark" ? "text-silver" : "text-graphite/75")}>
          {intro}
        </p>
      ) : null}
    </div>
  );
}

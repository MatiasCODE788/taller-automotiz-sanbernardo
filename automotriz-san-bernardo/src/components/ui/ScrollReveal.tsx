"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches || !("IntersectionObserver" in window)) return;

    const animations = new Set<Animation>();
    const observer = new IntersectionObserver((entries) => {
      const entering = entries.filter((entry) => entry.isIntersecting);
      entering.forEach(({ target }, index) => {
        observer.unobserve(target);
        if (reduced.matches || target.matches(":focus-within") || !target.animate) return;
        const machine = target.getAttribute("data-reveal") === "machine";
        const animation = target.animate(
          machine ? [
            { clipPath: "inset(0 0 72% 0)", opacity: 0.35 },
            { clipPath: "inset(0)", opacity: 1 },
          ] : [{ opacity: 0, transform: "translateY(12px)" }, { opacity: 1, transform: "translateY(0)" }],
          { duration: machine ? 800 : 420, delay: Math.min(index, 3) * 55, easing: "ease-out", fill: "backwards" },
        );
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      });
    }, { threshold: 0.02 });

    document.querySelectorAll("#contenido [data-reveal]").forEach((element) => {
      if (!element.parentElement?.closest("[data-reveal]")) observer.observe(element);
    });
    function stopAnimations() {
      for (const animation of animations) animation.cancel();
      animations.clear();
    }
    reduced.addEventListener("change", stopAnimations);
    return () => {
      observer.disconnect();
      stopAnimations();
      reduced.removeEventListener("change", stopAnimations);
    };
  }, []);
  return null;
}

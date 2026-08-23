import { useEffect } from "react";
import Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function scrollToTopImmediate() {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate: true, force: true });
  } else if (typeof window !== "undefined") {
    window.scrollTo(0, 0);
  }
}

export function scrollToSection(id?: string) {
  if (typeof window === "undefined") return;
  const target = id ? document.getElementById(id) : null;
  if (!id || !target) {
    if (lenisInstance) lenisInstance.scrollTo(0, { duration: 1.2 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  if (lenisInstance) lenisInstance.scrollTo(target, { offset: -64, duration: 1.2 });
  else window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 64, behavior: "smooth" });
}

export function SmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // Respect native momentum scrolling on touch devices.
      syncTouch: false,
      touchMultiplier: 1,
    });
    lenisInstance = lenis;

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  return null;
}

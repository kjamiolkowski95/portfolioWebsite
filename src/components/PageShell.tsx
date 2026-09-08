import { Outlet, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useLayoutEffect } from "react";
import { Nav } from "@/components/Nav";
import { scrollToTopImmediate } from "@/lib/smooth-scroll";

export function PageShell() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Reset scroll synchronously before the browser paints the incoming route,
  // so a new page never appears mid-scroll for a frame.
  const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;
  useIsoLayoutEffect(() => {
    scrollToTopImmediate();
  }, [pathname]);

  return (
    <>
      <Nav />
      <main className="pt-[57px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            onAnimationStart={() => scrollToTopImmediate()}
            >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="border-t border-line">
        <p className="label mx-auto max-w-[1920px] px-5 py-8 text-muted-foreground md:px-10">
          © 2026 KAMIL JAMIOLKOWSKI
        </p>
      </footer>
    </>
  );
}

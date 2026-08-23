import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Pill({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "label inline-flex items-center rounded-full border border-foreground/45 bg-background/70 px-3 py-1 leading-none text-foreground backdrop-blur-md",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function CornerMarks() {
  const base = "pointer-events-none absolute h-4 w-4 border-foreground/40 z-[3]";
  return (
    <>
      <span className={cn(base, "left-4 top-4 border-l border-t md:left-6 md:top-6")} />
      <span className={cn(base, "right-4 top-4 border-r border-t md:right-6 md:top-6")} />
      <span className={cn(base, "bottom-4 left-4 border-b border-l md:bottom-6 md:left-6")} />
      <span className={cn(base, "bottom-4 right-4 border-b border-r md:bottom-6 md:right-6")} />
    </>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ n, children }: { n: string; children: ReactNode }) {
  return (
    <div className="label flex items-center gap-4 text-muted-foreground">
      <span className="text-accent">{n}</span>
      <span>{children}</span>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}

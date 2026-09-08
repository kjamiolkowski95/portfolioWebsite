import { Link } from "@tanstack/react-router";
import type { CaseStudy } from "@/lib/case-studies";
import { Pill } from "@/components/ui-kit";

export function CoverCard({ study, priority }: { study: CaseStudy; priority?: boolean }) {
  return (
    <Link
      to="/work/$slug"
      params={{ slug: study.slug }}
      className="group relative block aspect-[4/3] w-full overflow-hidden bg-surface"
    >
      <img
        src={study.cover}
        alt={`${study.title} cover art`}
        width={1200}
        height={900}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
      />

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/80 via-black/10 to-black/25" />

      <div className="pointer-events-none absolute inset-0 z-[3] flex flex-col justify-between p-5 md:p-7">
        <div className="flex items-start justify-between">
          <span className="label text-white/80">{study.index}</span>
          <div className="flex flex-wrap justify-end gap-2">
            <Pill className="border-white/50 bg-black/55 text-white">{study.platform}</Pill>
            <Pill className="border-white/50 bg-black/55 text-white">{study.year}</Pill>
            <Pill className="border-white/50 bg-black/55 text-white">{study.tools}</Pill>
          </div>
        </div>

        <div className="transition-opacity duration-[350ms] md:opacity-0 md:group-hover:opacity-100">
          <h3 className="display text-3xl text-white md:text-4xl">{study.title}</h3>
        </div>
      </div>
    </Link>
  );
}

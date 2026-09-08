import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { getCaseStudy, getNextCaseStudy } from "@/lib/case-studies";
import { preloadImage } from "@/lib/image-preload";
import { CornerMarks, Pill, Reveal, SectionLabel } from "@/components/ui-kit";

export const Route = createFileRoute("/work/$slug")({
  loader: async ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    // Decode the hero art before the route commits, so the incoming page paints
    // its final image on the first frame instead of flashing/blank-swapping.
    await preloadImage(study.cover);
    return { study };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Case study unavailable" }, { name: "robots", content: "noindex" }],
      };
    }
    const { study } = loaderData;
    const title = `${study.title} — Game UI Case Study | Kamil Jamiolkowski`;
    return {
      meta: [
        { title },
        { name: "description", content: study.tagline },
        { property: "og:title", content: title },
        { property: "og:description", content: study.tagline },
      ],
    };
  },
  component: CaseStudyPage,
});

const textIn = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
};

function CaseStudyPage() {
  const { study } = Route.useLoaderData();
  const next = getNextCaseStudy(study.slug);

  return (
    <article>
      {/* Hero — space reserved via fixed aspect so nothing reflows on load. */}
      <section className="grain relative aspect-[4/5] w-full overflow-hidden border-b border-line md:aspect-[16/8]">
        <img
          key={study.cover}
          src={study.cover}
          alt={`${study.title} key art`}
          width={1200}
          height={900}
          decoding="sync"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/85 via-black/30 to-black/50" />
        <CornerMarks />

        <motion.div
          className="absolute inset-x-0 bottom-0 z-[3] mx-auto max-w-[1920px] p-5 md:p-10"
          initial="initial"
          animate="animate"
          transition={{ delayChildren: 0.55, staggerChildren: 0.07 }}
        >
          <motion.h1
            variants={textIn}
            className="display text-[13vw] leading-[0.88] text-white md:text-[7vw]"
          >
            {study.title}
          </motion.h1>
          <motion.div variants={textIn} className="mt-6 flex flex-wrap gap-2">
            <Pill className="border-white/50 bg-black/55 text-white">{study.platform}</Pill>
            <Pill className="border-white/50 bg-black/55 text-white">{study.year}</Pill>
            <Pill className="border-white/50 bg-black/55 text-white">{study.tools}</Pill>
            <Pill className="border-white/50 bg-black/55 text-white">{study.role}</Pill>
          </motion.div>
        </motion.div>
      </section>

      {/* Quick facts */}
      <section className="mx-auto grid max-w-[1920px] grid-cols-2 border-b border-line md:grid-cols-4">
        {[
          ["Role", study.role],
          ["Type", study.platform],
          ["Tools", study.tools],
          ["Duration", study.duration],
        ].map(([label, value], i) => (
          <div
            key={label}
            className={`border-line px-5 py-6 md:px-8 ${i % 2 === 0 ? "border-r" : ""} ${
              i < 2 ? "border-b md:border-b-0" : ""
            } md:border-r md:last:border-r-0`}
          >
            <p className="label text-muted-foreground">{label}</p>
            <p className="mt-2 font-mono text-sm text-foreground">{value}</p>
          </div>
        ))}
      </section>

      {/* 01 Overview + 02 Challenge — two columns on desktop */}
      <section className="mx-auto max-w-[1920px] px-5 py-14 md:px-10 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <Reveal>
            <SectionLabel n="01">Overview</SectionLabel>
            <p className="display mt-8 text-2xl md:text-3xl">{study.category}</p>
            <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted-foreground">
              {study.tagline}
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <SectionLabel n="02">Challenge</SectionLabel>
            <p className="display mt-8 text-2xl md:text-3xl">{study.challenge}</p>
            <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted-foreground">
              {study.challengeDetail}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 03 Visual showcase */}
      <section className="mx-auto max-w-[1920px] border-t border-line px-5 py-14 md:px-10 md:py-20">
        <Reveal>
          <SectionLabel n="03">Visual Showcase</SectionLabel>
        </Reveal>
        <div className="mt-10 space-y-14 md:space-y-24">
          {study.shots.map((shot, i) => (
            <Reveal key={i}>
              <figure>
                <div className="w-full overflow-hidden bg-surface">
                  <img
                    src={shot.src}
                    alt={shot.caption}
                    loading="lazy"
                    className="block h-auto w-full"
                  />
                </div>
                <figcaption className="label mt-3 text-muted-foreground">{shot.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 04 Approach + 05 Art Direction — two columns on desktop */}
      <section className="mx-auto max-w-[1920px] border-t border-line px-5 py-14 md:px-10 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <Reveal>
            <SectionLabel n="04">Approach</SectionLabel>
            <p className="display mt-8 text-2xl md:text-3xl">{study.approach}</p>
            <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted-foreground">
              {study.approachDetail}
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <SectionLabel n="05">Art Direction</SectionLabel>
            <p className="display mt-8 text-2xl md:text-3xl">{study.artDirectionTitle}</p>
            <p className="mt-4 max-w-prose whitespace-pre-wrap text-sm leading-relaxed text-muted-foreground">
              {study.artDirection}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 06 Snapshots */}
      {study.process && (
        <section className="mx-auto max-w-[1920px] border-t border-line px-5 py-14 md:px-10 md:py-20">
          <Reveal>
            <SectionLabel n="06">Snapshots</SectionLabel>
          </Reveal>
          <div
            className={`mt-8 grid grid-cols-1 gap-px bg-line ${
              study.process.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"
            }`}
          >
            {study.process.map((p, i) => (
              <Reveal key={i} delay={i * 0.06} className="bg-background">
                <div className="w-full overflow-hidden bg-surface">
                  <img
                    src={p.src}
                    alt={p.caption}
                    loading="lazy"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <p className="label px-3 py-3 text-muted-foreground">{p.caption}</p>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* 07 Summary */}
      <section className="mx-auto max-w-[1920px] border-t border-line px-5 py-14 md:px-10 md:py-20">
        <Reveal>
          <SectionLabel n="07">Summary</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="display mt-8 text-2xl md:text-3xl">{study.summaryTitle}</p>
          <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted-foreground">
            {study.summary}
          </p>
        </Reveal>
      </section>

      {/* Credits */}
      <section className="mx-auto max-w-[1920px] border-t border-line px-5 py-10 md:px-10">
        <p className="label text-center text-muted-foreground">{study.credits}</p>
      </section>

      {/* Next project */}
      <Link
        to="/work/$slug"
        params={{ slug: next.slug }}
        className="group mx-auto block max-w-[1920px] border-t border-line px-5 py-16 transition-colors duration-300 hover:bg-surface md:px-10 md:py-24"
      >
        <p className="label text-muted-foreground">Next project</p>
        <p className="display mt-4 text-[12vw] leading-[0.9] md:text-[6vw]">{next.title}</p>
      </Link>

      <nav className="mx-auto max-w-[1920px] border-t border-line px-5 py-8 md:px-10">
        <Link to="/" className="label text-muted-foreground hover:text-foreground">
          ← Back to home page
        </Link>
      </nav>
    </article>
  );
}

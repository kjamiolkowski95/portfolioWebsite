import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { caseStudies } from "@/lib/case-studies";
import { CoverCard } from "@/components/CoverCard";
import { CornerMarks, Reveal, SectionLabel } from "@/components/ui-kit";
import heroArt from "@/assets/hero-abstract.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kamil Jamiolkowski — UX/UI Designer for Games" },
      {
        name: "description",
        content:
          "Game UI and UX design portfolio: HUDs, menus and interface systems for survival, RPG, racing and horror titles.",
      },
      { property: "og:title", content: "Kamil Jamiolkowski — UX/UI Designer for Games" },
      {
        property: "og:description",
        content: "Selected game interface work: HUDs, menus and in-world UI systems.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      <section className="grain relative flex min-h-[78vh] items-end overflow-hidden border-b border-line pb-12 pt-32 md:min-h-[86vh] md:pb-16">
        <img
          src={heroArt}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1280}
          className="hero-art pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-background via-background/55 to-background/10" />
        <CornerMarks />
        <div className="relative z-[3] mx-auto w-full max-w-[1920px] px-5 md:px-10">
          <motion.p
            className="label text-accent"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Portfolio
          </motion.p>
          <motion.h1
            className="display mt-6 text-[15vw] leading-[0.86] md:text-[10.5vw]"
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            Kamil
            <br />
            Jamiolkowski
          </motion.h1>
          <motion.div
            className="mt-8 flex flex-col gap-4 border-t border-line pt-5 md:flex-row md:items-end md:justify-between"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="label text-foreground">Game UX/UI Designer</p>
            <p className="max-w-md text-sm text-muted-foreground">
              7+ years of experience in UI art direction, HUD design, and menu architecture across AAA, AA, and mobile games. Based in Poland.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="work" className="scroll-mt-16 mx-auto max-w-[1920px] px-5 py-14 md:px-10 md:py-20">
        <Reveal>
          <SectionLabel n="01">Selected Work</SectionLabel>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-px bg-line md:grid-cols-2">
          {caseStudies.map((study, i) => (
            <Reveal key={study.slug} delay={(i % 2) * 0.08} className="bg-background">
              <CoverCard study={study} priority={i < 2} />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="about" className="scroll-mt-16 mx-auto max-w-[1920px] border-t border-line px-5 py-14 md:px-10 md:py-20">
        <Reveal>
          <SectionLabel n="02">About me</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed md:text-2xl">
            Throughout my career, I've had the opportunity to work on major titles as well as support smaller studios.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            When designing interfaces, my top priority is preserving immersion. I value close collaboration with both Art Directors and UI programmers, always looking for solutions that stay true to the overall vision, are realistic to implement, and, above all, are useful to the player.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["INTERFACE DESIGN", "Information architecture, flows, logic"],
            ["PLAYER EXPERIENCE", "Playtesting, comprehension, clarity"],
            ["VISUAL SYSTEMS", "Design language, consistency, scale"],
            ["PLATFORM ADAPTATION", "PC, console, safe zones, input methods"],
          ].map(([t, d]) => (
            <div key={t} className="bg-background px-5 py-8">
              <p className="display text-xl">{t}</p>
              <p className="mt-3 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-16 mx-auto max-w-[1920px] border-t border-line px-5 py-14 md:px-10 md:py-20"
      >
        <Reveal>
          <SectionLabel n="03">Contact</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-8 max-w-2xl text-lg md:text-2xl">
            Available for contract as well as full-time projects.
          </p>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-px bg-line sm:grid-cols-2">
          {[
            {
              label: "Email",
              value: "kamil.jamiolkowski@gmail.com",
              href: "mailto:kamil.jamiolkowski@gmail.com",
              external: false,
            },
            {
              label: "LinkedIn",
              value: "Kamil Jamiolkowski",
              href: "https://www.linkedin.com/in/kamil-jamiolkowski/",
              external: true,
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                // Allow manual text selection: don't follow the link when the
                // user finished a drag-select instead of a clean click.
                if (window.getSelection()?.toString()) {
                  e.preventDefault();
                }
              }}
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group flex items-start justify-between gap-4 bg-background px-5 py-8 transition-colors duration-300 hover:bg-surface"
            >
              <span className="min-w-0">
                <p className="label text-muted-foreground">{item.label}</p>
                <p
                  className="mt-3 break-words font-mono text-sm text-foreground select-text"
                  style={{ cursor: "text" }}
                >
                  {item.value}
                </p>
              </span>
              {item.external && (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-colors duration-300 group-hover:text-accent"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H8M17 7v9" />
                </svg>
              )}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

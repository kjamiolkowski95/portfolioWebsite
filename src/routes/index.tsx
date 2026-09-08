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
      <section className="grain relative flex min-h-[78vh] items-end overflow-hidden border-b border-line px-5 pb-12 pt-32 md:min-h-[86vh] md:px-10 md:pb-16">
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
        <div className="relative z-[3] w-full">
          <motion.p
            className="label text-accent"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Portfolio — 
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
            <p className="label text-foreground">UX/UI Designer — Games</p>
            <p className="max-w-md text-sm text-muted-foreground">
              Interface systems, HUDs and menu architecture built to stay inside the fiction. Based
              in Warsaw, working with studios worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="work" className="scroll-mt-16 px-5 py-14 md:px-10 md:py-20">
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

      <section id="about" className="scroll-mt-16 border-t border-line px-5 py-14 md:px-10 md:py-20">
        <Reveal>
          <SectionLabel n="02">About</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed md:text-2xl">
            I design interfaces for games — HUDs, menus, and the in-world panels players never think
            of as UI. Eight years across survival, RPG, racing and horror titles, mostly embedded
            with small teams alongside art direction.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            My working rule is simple: the interface should sound like the world it lives in. That
            usually means fewer elements, harder contrast, and typography that carries the tone
            before a single label is read.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["HUD Systems", "Diegetic and non-diegetic readouts, alert hierarchies."],
            ["Menu Architecture", "Loadouts, maps, settings, controller-first flows."],
            ["UX Research", "Playtest instrumentation, comprehension testing."],
            ["UI Art Direction", "Type systems, iconography, motion language."],
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
        className="scroll-mt-16 border-t border-line px-5 py-14 md:px-10 md:py-20"
      >
        <Reveal>
          <SectionLabel n="03">Contact</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-8 max-w-2xl text-lg md:text-2xl">
            Currently taking on one project per quarter — contract or embedded with your team.
          </p>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-px bg-line sm:grid-cols-3">
          {[
            ["Email", "kamil@jamiolkowski.studio", "mailto:kamil@jamiolkowski.studio"],
            ["ArtStation", "artstation.com/kamilj", "https://artstation.com"],
            ["LinkedIn", "linkedin.com/in/kamilj", "https://linkedin.com"],
          ].map(([label, value, href]) => (
            <a
              key={label}
              href={href}
              className="group bg-background px-5 py-8 transition-colors duration-300 hover:bg-surface"
            >
              <p className="label text-muted-foreground">{label}</p>
              <p className="mt-3 break-words font-mono text-sm text-foreground">{value}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

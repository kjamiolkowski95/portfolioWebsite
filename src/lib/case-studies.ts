import biotech1 from "@/assets/work/biotech-1.jpg";
import biotech2 from "@/assets/work/biotech-2.jpg";
import biotech3 from "@/assets/work/biotech-3.jpg";
import biotech4 from "@/assets/work/biotech-4.jpg";
import biotech5 from "@/assets/work/biotech-5.jpg";
import biotech6 from "@/assets/work/biotech-6.jpg";
import ice1 from "@/assets/work/ice-1.jpg";
import ice2 from "@/assets/work/ice-2.jpg";
import ice3 from "@/assets/work/ice-3.jpg";
import ice4 from "@/assets/work/ice-4.jpg";
import ice5 from "@/assets/work/ice-5.jpg";
import ice6 from "@/assets/work/ice-6.jpg";
import iceThumb from "@/assets/work/ice-thumb.png.asset.json";
import iceNew1 from "@/assets/work/ice-new-1.png.asset.json";
import iceNew2 from "@/assets/work/ice-new-2.png.asset.json";
import iceNew3 from "@/assets/work/ice-new-3.png.asset.json";
import iceNew4 from "@/assets/work/ice-new-4.jpg.asset.json";
import iceNew5 from "@/assets/work/ice-new-5.jpg.asset.json";
import sanc1 from "@/assets/work/sanc-1.jpg";
import sanc2 from "@/assets/work/sanc-2.png";
import sanc3 from "@/assets/work/sanc-3.png";
import sanc4 from "@/assets/work/sanc-4.png";
import sanc5 from "@/assets/work/sanc-5.png";
import sanc6 from "@/assets/work/sanc-6.png";
import sancThumb from "@/assets/work/sanc-thumb.png.asset.json";
import sancNew1 from "@/assets/work/sanc-new-1.png.asset.json";
import sancNew2 from "@/assets/work/sanc-new-2.png.asset.json";
import sancNew3 from "@/assets/work/sanc-new-3.png.asset.json";
import sancNew4 from "@/assets/work/sanc-new-4.png.asset.json";
import sancNew5 from "@/assets/work/sanc-new-5.png.asset.json";
import bfmThumb from "@/assets/work/battlefield-thumb.png.asset.json";
import bf1 from "@/assets/work/bf-1.png.asset.json";
import bf2 from "@/assets/work/bf-2.png.asset.json";
import bf3 from "@/assets/work/bf-3.png.asset.json";
import bf4 from "@/assets/work/bf-4.png.asset.json";
import bf5 from "@/assets/work/bf-5.png.asset.json";
import fsThumb from "@/assets/work/forever-skies-thumb.png.asset.json";
import fs1 from "@/assets/work/forever-1.png.asset.json";
import fs2 from "@/assets/work/forever-2.png.asset.json";
import fs3 from "@/assets/work/forever-3.png.asset.json";
import fs4 from "@/assets/work/forever-4.png.asset.json";
import aaaThumb from "@/assets/work/aaa-thumb.png.asset.json";
import aaa4 from "@/assets/work/aaa-4.png.asset.json";
import aaa5 from "@/assets/work/aaa-5.png.asset.json";
import aaa6 from "@/assets/work/aaa-6.png.asset.json";
import aaa1 from "@/assets/work/aaa-1.png.asset.json";
import aaa2 from "@/assets/work/aaa-2.png.asset.json";
import aaa3 from "@/assets/work/aaa-3.png.asset.json";
import dust1 from "@/assets/work/dust-1.jpg";
import dust2 from "@/assets/work/dust-2.jpg";
import dust3 from "@/assets/work/dust-3.jpg";
import dust4 from "@/assets/work/dust-4.jpg";
import dust5 from "@/assets/work/dust-5.jpg";
import dust6 from "@/assets/work/dust-6.jpg";

export type CaseStudy = {
  slug: string;
  index: string;
  title: string;
  tagline: string;
  cover: string;
  platform: string;
  year: string;
  category: string;
  role: string;
  tools: string;
  duration: string;
  artDirectionTitle: string;
  artDirection: string;
  challenge: string;
  challengeDetail: string;
  approach: string;
  approachDetail: string;
  summaryTitle: string;
  summary: string;
  credits: string;
  shots: { src: string; caption: string }[];
  process?: { src: string; caption: string }[];
};

const caseStudiesUnordered: CaseStudy[] = [
  {
    slug: "biotech-corp",
    index: "01",
    title: "BioTech Corp",
    tagline: "BioTech Corp is a personal project in which I explored a retro-futuristic direction. I focused on portraying a database of a fictional biotech corporation, viewed through an interface built to resemble a CRT display. The project draws on iconic sci-fi films from the late 80s and early 90s, and the visual language reflects that era's take on technology.",
    cover: biotech1,
    platform: "Personal",
    year: "2026",
    category: "The Premise",
    role: "UI/UX Designer, Art Director",
    tools: "Figma",
    duration: "Self-initiated",
    artDirectionTitle: "Dehumanization by Design",
    artDirection:
      "In this fictional world, people seen through the corporation's eyes are assets. I wanted to focus on the pseudo-realistic visualizations and hardware framing, finding a bridge between realism and dehumanization. Alongside the already mentioned Blade Runner and Cyberpunk references mentioned earlier, I also drew on Weyland-Yutani from the \"Alien\" film universe, particularly its rather clinical approach to corporate branding.",
    challenge: "The human and the machine",
    challengeDetail:
      "I worked from the premise that once the player interacts with the machine, they're looking at an old but still-functioning computer screen, something that's been running long past its lifespan. I applied a monochromatic palette and styled the interface to look intentionally outdated to better sell the illusion.",
    approach: "Tone & Influences",
    approachDetail:
      "Going into this project, I asked myself: what if the original Blade Runner met Cyberpunk 2077? What kind of effect could that produce? Following that concept, I then designed everything to feel crude and unrefined, leaning into rough edges and visible seams to emphasize the abstraction and grotesqueness of the world.",
    summaryTitle: "Closing Thoughts",
    summary:
      "BioTech Corporation was, at its core, an exploration of how much information can be communicated within constraints dictated by the logic of the world and the technology within it. Holding that assumption across every screen, keeping the outdated hardware, and the corporate coldness consistent with each other, was the real challenge. It's a small project, but it taught me how far a visual language can be pushed.",
    credits: "SELF-INITIATED PROJECT",
    shots: [
      { src: biotech2, caption: "DATABASE FETCHING SCREEN" },
      { src: biotech3, caption: "SPLASH SCREEN" },
      { src: biotech4, caption: "IDENTIFICATION RECORD" },
      { src: biotech5, caption: "BIO-SCAN IN PROGRESS" },
    ],
    process: [
      { src: biotech1, caption: "CRT hardware frame" },
      { src: biotech6, caption: "Updating the asset" },
      { src: biotech3, caption: "Terminal state" },
    ],
  },
  {
    slug: "project-ice",
    index: "02",
    title: "Project: ICE",
    tagline:
      "Project: ICE takes place in a frozen wasteland where a small group of survivors holds out in a converted underground seed bank. Supplies occasionally turn up scattered across the ice, and a select group of searchers (prospectors, essentially) are sent out to find them and bring them back. They're the only thing keeping the community alive.",
    cover: iceThumb.url,
    platform: "Personal",
    year: "2024",
    category: "Setting & Premise",
    role: "UI/UX Designer, Game Designer",
    tools: "Figma",
    duration: "Ongoing",
    artDirectionTitle: "Colder than the world outside",
    artDirection:
      "The UI leans monochromatic, with color reserved for state indicators such as health, warmth or danger. Everything else stays desaturated on purpose, in step with the icy, realistic environments and atmospheric lighting the game is built around. The interface is meant to match the feeling of isolation and practicality.",
    challenge: "Constraints & Ownership",
    challengeDetail:
      "Working on a self-initiated project means every decision is mine to make and justify. There's no creative director to push back, no stakeholder to set the bar. On one hand it could be freeing, but it also means holding myself to that same rigor on my own. The story was still forming as I designed around it: survival, isolation, and what's left of a person after both. I had to build the interface without a finished narrative to lean on.",
    approach: "Building from the Ground Up",
    approachDetail:
      "Pre-production covered three fronts. First, the world itself, where I had to work out how warmth, resources, weather, and wildlife would interact. Second, visual direction, in which I leaned heavily on the Nordic landscape photography, field survival gear, and brutalist architecture. Third, HUD and menu mockups, testing how much information the player needs against the stark environment.",
    summaryTitle: "Outcome & Reflection",
    summary:
      "Project: ICE is still ongoing, with the story and interface developing in parallel. The core constraint continues to show through every mockup so far and to guide the remaining screens.",
    credits: "SELF-INITIATED PROJECT",
    shots: [
      { src: iceNew1.url, caption: "HUD CARRYING OXYGEN, HEALTH, COLD AND STORM WARNINGS" },
      { src: iceNew2.url, caption: "BIO PARAMETERS AND VITALS ON A HANDHELD TABLET" },
      { src: iceNew3.url, caption: "DIEGETIC NAVIGATION - HOLOGRAPHIC WRIST MAP " },
    ],
    process: [
      { src: iceNew4.url, caption: "CONCEPT SHEET, ENVIRONMENT AND CHARACTER DESIGN EXPLORATION" },
      { src: iceNew5.url, caption: "REFERENCE BOARD - TOPOGRAPHY, ARCHITECTURE AND THE FACILITY" },
    ],
  },
  {
    slug: "sancticide",
    index: "03",
    title: "Sancticide",
    tagline:
      "Sancticide is a dark post-apocalyptic fantasy RPG for PC, adapted from Michał Gołkowski's \"Komornik\" novels. It's set in a world on the brink of annihilation. My job as UI/UX Team Lead was to take that existing world and turn it into a working interface, leading the team from early exploration to production-ready assets in Unreal Engine 5.",
    cover: sancThumb.url,
    platform: "PC",
    year: "2024",
    category: "Setting & Scope",
    role: "UI/UX Team Lead",
    tools: "Figma, Unreal Engine 5",
    duration: "Full production cycle",
    artDirectionTitle: "Visual Language & Typography",
    artDirection:
      "The UI runs on a dark palette (near-black panels, worn leather browns, and stone greys, with gold and amber accents), which aids to the world flavor. Typography leans serif and ornate to resemble an illuminated manuscript. Iconography stays tactile: swords, axes, parchment-style borders.",
    challenge: "Constraints & Complexity",
    challengeDetail:
      "Adapting an existing literary IP has its own challenges. The visual language had to feel like it belonged to a world readers already knew from the books, while making sense under gameplay conditions. Sancticide is also mechanically dense (skill trees, inventory, quest tracking, combat HUD) and all of it had to hold together as one coherent system.",
    approach: "Process & Execution",
    approachDetail:
      "I started with reference work to build moodboards and held alignment sessions with the Art Director to land on a shared tone. Once we agreed on \"dark, ornate, weathered\", I moved onto wireframing core player flows and led design on every primary system: health and stamina, skill trees, inventory, quest logs, and map overlays. I also prepared and optimized 2D assets for Unreal Engine 5 and ran cross-functional syncs with developers, 3D artists, and narrative designers.",
    summaryTitle: "A Costly Lesson",
    summary:
      "Sancticide didn't land well at launch. The game's mechanics needed more polish than the studio's timeline and resources could support. It was a hard outcome to sit with, given how much work and time the whole team put into it. But it was also one of the more useful lessons of my career. Sometimes ambition outpaces capacity.",
    credits: "UI/UX TEAM LEAD AT RED SQUARE GAMES",
    shots: [
      { src: sancNew1.url, caption: "HUD" },
      { src: sancNew2.url, caption: "INVENTORY SCREEN" },
      { src: sancNew3.url, caption: "MAIN MENU" },
    ],
    process: [
      { src: sancNew4.url, caption: "MAP" },
      { src: sancNew5.url, caption: "ABILITY WHEEL" },
    ],
  },
  {
    slug: "battlefield-mobile",
    index: "04",
    title: "Battlefield Mobile",
    tagline:
      "In this project, I worked on Warheroes, a monetization feature for Battlefield Mobile. The scope covered stakeholder requirements, user behavior analysis, feature logic, and final UI design.",
    cover: bfmThumb.url,
    platform: "Mobile",
    year: "2023",
    category: "Features & Scope",
    role: "UI/UX Designer",
    tools: "Figma",
    duration: "Feature cycle",
    artDirectionTitle: "Visual Language",
    artDirection:
      "Visual direction followed Battlefield Mobile's existing design system: high contrast, military-coded, kinetic. Reward moments within Warheroes received elevated treatment relative to the base UI, to signal achievement at the point of payoff.",
    challenge: "Motivate Without Alienating",
    challengeDetail:
      "Monetization features must drive spending without punishing free-to-play users. Mishandled, this damages both retention and revenue. Warheroes required a reward structure achievable through play alone. Paid progress had to accelerate outcomes without gating them.",
    approach: "Process",
    approachDetail:
      "First, I defined feature logic. To do that, I collected KPIs and requirements from stakeholders and mapped them against user behavior data to identify drop-off points and effective reward triggers. The result was a two-track structure: a free path tied to milestones, and a premium path offering cosmetic and time-based advantages without locking core content. I then built the full UI for the feature: milestone tracker, reward previews, purchase flow and confirmation states.",
    summaryTitle: "Outcome",
    summary:
      "Warheroes launched within the planned release window. The project gave me direct experience balancing business requirements against player experience within an existing monetization system.",
    credits: "UX/UI DESIGNER AT DRAGONS' LAKE FOR EA",
    shots: [
      { src: bf2.url, caption: "HERO LOADOUT" },
      { src: bf3.url, caption: "HERO-SPECIFIC CURRENCY" },
      { src: bf5.url, caption: "ITEMS SHOP" },
    ],
    process: [
      { src: bf1.url, caption: "SPLASH SCREEN" },
      { src: bf4.url, caption: "REWARDS" },
    ],
  },
  {
    slug: "forever-skies",
    index: "05",
    title: "Forever Skies",
    tagline: "Forever Skies is a first-person survival game set on a post-apocalyptic, ecologically ruined Earth. Players build, upgrade, and fly a high-tech airship, scavenging resources and crafting tools while searching for a cure to save humanity. I was a solo UI and UX Designer at Far From Home, working on the game's full interface.\u00a0",
    cover: fsThumb.url,
    platform: "PC",
    year: "2023",
    category: "SETTING & ROLE",
    role: "UI/UX Designer",
    tools: "Figma, Unreal Engine",
    duration: "Full production cycle",
    artDirectionTitle: "VISUAL LANGUAGE",
    artDirection:
      "The interface uses two palette layers: the primary palette forms the HUD's structural chrome, while the secondary palette carries state information (critical, neutral, active). Typography and iconography follow a clinical, technical register, consistent with hardware built for survival. The overall tone reads as functional equipment that has seen use.",
    challenge: "NO ROOM FOR ERROR",
    challengeDetail:
      "There were various constraints from the start of the project. The HUD was embedded directly inside the player character's helmet. Every element had to fit within a framed view without causing visual overload. Full localization support added a further constraint, since text expansion can increase UI element size by 30–40%. The airship management system also needed to share this same visual space.",
    approach: "PROCESS",
    approachDetail:
      "I built a moodboard from sci-fi cinema, real military HUD systems and existing survival games, which I then presented this to the producer and Art Director to find a tone. The primary color and typeface were already set when I joined the project. I proposed and refined a secondary color palette to add hierarchy to the display. The primary palette reads as interface chrome. The secondary palette communicates state. Additionally, localization had to be taken into account. Every component included text expansion buffers, and any layout at risk of breaking under longer strings was flagged before implementation.",
    summaryTitle: "OUTCOME",
    summary:
      "Forever Skies went on to a warm reception from players following release. The interface received specific mentions in early press coverage of the game's visual identity. This was the first project of this scale I worked on and it taught me a great deal.",
    credits: "LEAD UI/UX DESIGNER AT FAR FROM HOME",
    shots: [
      { src: fs1.url, caption: "HELMET HUD" },
      { src: fs2.url, caption: "SCANNER" },
      { src: fs3.url, caption: "BLUEPRINTS SELECTION" },
      { src: fs4.url, caption: "RESEARCH STATION UI" },
    ],
  },
  {
    slug: "the-dust",
    index: "06",
    title: "AAA FPS (UNANNOUNCED)",
    tagline: "I worked on this unannounced AAA FPS, combining dark fantasy mysticism with '80s action cinema, for over a year. It was being built in Unreal Engine 5, in partnership with a first-party studio owned by a big publisher. As Lead UI Designer, I owned the full UI roadmap: visual language, design system and screen work, from pre-production through early production stages. Sadly, the project was cancelled during early production when the partner studio closed as part of a broader restructuring. The cancellation was unrelated to the UI team's output.",
    cover: aaaThumb.url,
    platform: "PC/ Console",
    year: "2025 - 2026",
    category: "PROJECT & ROLE",
    role: "Lead UI Designer",
    tools: "Figma",
    duration: "2025 - 2026",
    artDirectionTitle: "HEAVY BUT FUNCTIONAL",
    artDirection:
      "The visual direction combined two references: dark fantasy mysticism and '80s action cinema, which was rather unorthodox. Typography and iconography stayed heavy and functional. The colors were bold, matching the overall direction. Occult and mystical motifs were applied throughout in-game systems. ",
    challenge: "CONSTRAINTS",
    challengeDetail:
      "The project required coordination between two studios in different time zones, with no in-person contact. Alignment depended on weekly calls with the Art Directors covering progress, feedback, and brainstorming, plus messaging tools for day-to-day communication. Every UI decision had to be documented clearly enough to be reviewed and understood by both parties.",
    approach: "PROCESS",
    approachDetail:
      "Early production covered three areas. First, a UI pipeline for cross-studio work: file structures, naming conventions, and a review schedule. Second, a design system defining visual rules for typography, iconography, and color. Third, iteration on core screens: early HUD layouts and menu flows, tested and revised across multiple rounds of internal and partner-studio feedback. Exploration volume was high. A large number of UI concepts were prototyped and reviewed before the team converged on a direction.",
    summaryTitle: "WHAT REMAINS",
    summary:
      "The game was cancelled before release; the interface work did not go to market. What remains: a UI pipeline built for cross-studio production, a design system built from the ground up, and a body of prototypes produced under real production constraints. The project confirmed a working method and taught me a lot about collaboration between two distant teams.",
    credits: "LEAD UI DESIGNER AT GRIP STUDIOS",
    shots: [
      { src: aaa4.url, caption: "MAXIMUM DENSITY OF UI ELEMENTS" },
      { src: aaa5.url, caption: "DEFAULT INTERFACE LAYOUT" },
      { src: aaa6.url, caption: "LOW HEALTH EFFECT" },
    ],
    process: [
      { src: aaa1.url, caption: "UI EXPLORATION EXAMPLE" },
      { src: aaa2.url, caption: "UI EXPLORATION EXAMPLE" },
      { src: aaa3.url, caption: "UI EXPLORATION EXAMPLE" },
    ],
  },
];

const ORDER = [
  "the-dust",
  "biotech-corp",
  "sancticide",
  "project-ice",
  "battlefield-mobile",
  "forever-skies",
];

export const caseStudies: CaseStudy[] = ORDER.map(
  (slug, i) => {
    const study = caseStudiesUnordered.find((c) => c.slug === slug)!;
    return { ...study, index: String(i + 1).padStart(2, "0") };
  },
);



export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);

export const getNextCaseStudy = (slug: string): CaseStudy => {
  const i = caseStudies.findIndex((c) => c.slug === slug);
  return caseStudies[(i + 1) % caseStudies.length] ?? caseStudies[0]!;
};

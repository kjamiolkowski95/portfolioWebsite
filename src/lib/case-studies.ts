import biotech1 from "@/assets/work/biotech-1.jpg";
import biotech2 from "@/assets/work/biotech-2.jpg";
import biotech3 from "@/assets/work/biotech-3.jpg";
import biotech4 from "@/assets/work/biotech-4.jpg";
import biotech5 from "@/assets/work/biotech-5.jpg";
import biotech6 from "@/assets/work/biotech-6.jpg";
import iceThumb from "@/assets/work/ice-thumb.png";
import ice1 from "@/assets/work/ice-1.jpg";
import ice2 from "@/assets/work/ice-2.jpg";
import ice3 from "@/assets/work/ice-3.jpg";
import ice4 from "@/assets/work/ice-4.jpg";
import ice5 from "@/assets/work/ice-5.jpg";
import ice6 from "@/assets/work/ice-6.jpg";
import sanc1 from "@/assets/work/sanc-1.jpg";
import sanc2 from "@/assets/work/sanc-2.png";
import sanc3 from "@/assets/work/sanc-3.png";
import sanc4 from "@/assets/work/sanc-4.png";
import sanc5 from "@/assets/work/sanc-5.png";
import sanc6 from "@/assets/work/sanc-6.png";
import bfm1 from "@/assets/work/bfm-1.jpg";
import bfm2 from "@/assets/work/bfm-2.jpg";
import bfm3 from "@/assets/work/bfm-3.jpg";
import bfm4 from "@/assets/work/bfm-4.jpg";
import bfm5 from "@/assets/work/bfm-5.jpg";
import bfm6 from "@/assets/work/bfm-6.jpg";
import fs1 from "@/assets/work/fs-1.jpg";
import fs2 from "@/assets/work/fs-2.jpg";
import fs3 from "@/assets/work/fs-3.jpg";
import fs4 from "@/assets/work/fs-4.jpg";
import fs5 from "@/assets/work/fs-5.jpg";
import fs6 from "@/assets/work/fs-6.jpg";
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
  type: string;
  year: string;
  genre: string;
  role: string;
  tools: string;
  duration: string;
  overviewTitle: string;
  overview: string;
  artDirectionTitle: string;
  artDirection: string;
  challenge: string;
  challengeDetail: string;
  approach: string;
  approachDetail: string;
  credits: string;
  shots: { src: string; caption: string }[];
  process?: { src: string; caption: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "biotech-corp",
    index: "01",
    title: "BioTech Corp",
    tagline: "A corporate biotech database from a future that never left the 1990s.",
    cover: biotech1,
    platform: "Personal",
    year: "2026",
    category: "Game / Concept",
    role: "UI/UX Designer, Art Director",
    tools: "Figma",
    duration: "Self-initiated",
    artDirectionTitle: "Retrofuturism, distilled to one colour",
    artDirection:
      "The aesthetic draws from a specific intersection of retrofuturism: dystopian corporate fiction where biological data is processed through outdated hardware. Key references include:\nBlade Runner (1982)\nAmber and orange terminal glow, grid overlays, scan-line aesthetics. The Voight-Kampff machine as a design reference for biological assessment UI.\nAlien / Aliens\nWeyland-Yutani corporation terminal UI: green or amber on black, dot-matrix typography, utilitarian layouts that feel institutionally indifferent.\nCyberpunk 2077\nThe concept of a corporate database that catalogs and quantifies humans as assets.",
    challenge: "Build a fully realised visual language from scratch and never break the illusion.",
    challengeDetail:
      "BioTech Corporation is a self-initiated project built to demonstrate UI design and art direction skills within a fictional world. The premise: a corporate biotech database system from an alternate future that never left the 1990s.",
    approach: "Hierarchy built entirely through brightness, inside one piece of fictional hardware.",
    approachDetail:
      "The project was executed as a series of high-fidelity static compositions, with full attention to rendering quality: glows, scan artifacts, hardware framing, and illustration all handled in-tool. All screens created in Figma.",
    credits: "Self-initiated project — concept, art direction and interface design by Kamil Jamiolkowski",
    shots: [
      { src: biotech2, caption: "Login — concentric reticle between logo and biometric scanner." },
      { src: biotech3, caption: "Database search terminal, DOS boot sequence rendered faithfully." },
      { src: biotech4, caption: "Identification record — the human as a database entry." },
      { src: biotech5, caption: "Bio-scan in progress, wireframe subject and vitals strip." },
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
    tagline: "The game is set in a harsh, frozen wasteland where a small group of survivors has taken refuge in an underground seed bank, now their shelter. For decades, they have struggled to endure the relentless forces of nature, fending off wild animals, diseases, and starvation."
    "Mysteriously, supplies occasionally emerge in scattered locations across the icy landscape. A select group of searchers is tasked with finding these vital resources and returning them to the base. As the sole lifeline for survival, these prospectors are held in high regard and are essential to the community's survival.",
    cover: iceThumb,
    type: "Personal",
    year: "2024",
    genre: "Survival",
    role: "UI/UX Designer, Game Designer",
    tools: "Figma",
    duration: "Ongoing",
    overviewTitle: "Story",
    overview: "We play as a Seeker who loses his companion and gets badly injured during a supply run. With his supplies destroyed, he knows he won’t make it back to the bunker." 
    "As he lies dying in the snow, he notices fresh human footprints. That shouldn’t be possible, no one else is supposed to be outside." 
    "He wakes up later in the infirmary, alive and heavily bandaged. The medic tells him he was found unconscious and suffering from severe hypothermia just before reaching the bunker. Somehow, he survived. But the footprints remain unexplained.",
    artDirectionTitle: "Colder than the world outside",
    artDirection:
      "The game features realistic and immersive graphics that bring the icy island landscape to life, complemented by detailed character models and carefully designed environments. Atmospheric lighting and dynamic weather effects further enhance the sense of immersion, creating a believable and engaging world.",
    challenge: "Challenge",
    challengeDetail:
      "Personal projects give me full ownership of every design decision. Without stakeholders or a creative director to guide the work, I have to challenge and justify my own decisions. This pushes me to think more critically and strengthens my design instincts."
      "The game is heavily story-driven, and the narrative is still in its early stages. I’m building a story around survival, mystery, and human resilience, with the goal of making the narrative an important part of the gameplay and overall experience.",
    approach: "Approach",
    approachDetail:
      "Pre-production covered three fronts: story structure and gameplay loop, visual direction through reference work, and early HUD and menu mockups that test information density against the stark environment. Only once the survival systems held up did the interface start taking shape around them.",
    credits: "Self-initiated project — game design, narrative and interface design by me",
    shots: [
      { src: ice3, caption: "Early HUD concept, exploration" },
      { src: ice4, caption: "Example of a diegetic interface." },
      { src: ice5, caption: "Example of a diegetic interface." },
    ],
    process: [
      { src: ice1, caption: "Moodboard" },
      { src: ice2, caption: "Screen study"},
      { src: ice6 caption: "HUD layering"},
    ],
  },
  {
    slug: "sancticide",
    index: "03",
    title: "Sancticide",
    tagline: "UI systems for a dark post-apocalyptic fantasy RPG built on an existing book IP.",
    cover: sanc1,
    platform: "PC",
    year: "2024",
    category: "Action RPG",
    role: "UI/UX Team Lead",
    tools: "Unreal Engine 5",
    duration: "Full production cycle",
    artDirectionTitle: "An artefact of a known world",
    artDirection:
      "Dark, ornate, weathered — but readable under gameplay pressure. The tone was agreed with the Art Director through thematic moodboards and alignment sessions before any wireframe existed, so the interface reads as an artefact of a world fans already knew from the books rather than a layer bolted on top of it.",
    challenge: "Adapting an existing literary IP is harder than starting from scratch.",
    challengeDetail:
      "The visual language had to belong to an established narrative universe while staying legible and responsive in real gameplay. On top of that, Sancticide is mechanically complex — skill trees, inventory, quest tracking, combat HUD — and all of it had to cohere into one design language without overwhelming the player.",
    approach: "Deep reference work first, then every core system wireframed, prototyped and iterated.",
    approachDetail:
      "I led design of all primary UI systems: health and stamina, skill trees, inventory, quest logs and map overlays. Each went through wireframe, prototype, stakeholder review and iteration before high-fidelity production, and I prepared and optimised every 2D asset for Unreal Engine 5 so fidelity and runtime performance held across target hardware. The UI shipped on schedule across all milestones, with internal playtests recording average task completion under eight seconds on core menu interactions.",
    credits: "UI/UX team lead — in collaboration with the Art Director, developers, 3D artists and narrative design",
    shots: [
      { src: sanc2, caption: "Core menu architecture — ornate but readable." },
      { src: sanc3, caption: "Skill tree, progression legible at a glance." },
      { src: sanc4, caption: "Inventory management system." },
      { src: sanc5, caption: "Quest log and map overlay states." },
    ],
    process: [
      { src: sanc6, caption: "Exploration" },
      { src: sanc3, caption: "System design" },
      { src: sanc4, caption: "Production" },
    ],
  },
  {
    slug: "battlefield-mobile",
    index: "04",
    title: "Battlefield Mobile",
    tagline: "Warheroes — a live-service progression and monetisation feature.",
    cover: bfm1,
    platform: "Mobile",
    year: "2023",
    category: "Live Service FPS",
    role: "UI/UX Designer",
    tools: "Proprietary",
    duration: "Feature cycle",
    artDirectionTitle: "Elevated reward moments",
    artDirection:
      "The feature follows Battlefield Mobile's existing design language — high contrast, military-coded, kinetic — while the reward moments themselves get a deliberately elevated treatment so achievement reads as a distinct beat rather than another panel in the same visual register.",
    challenge: "Motivate spending without making free-to-play players feel worked against.",
    challengeDetail:
      "Get that balance wrong in a live-service feature and you damage retention and revenue at the same time. For Warheroes the milestone reward structure had to feel genuinely achievable through play, with the paid path accelerating progress rather than gating it.",
    approach: "Feature logic defined against real behaviour data before any visual design.",
    approachDetail:
      "I gathered KPIs and business requirements from stakeholders, then mapped them against user behaviour data to find where players dropped off and which reward triggers actually sustained play. The resulting structure ran two parallel tracks: a free-to-earn path tied to in-game milestones and a premium track offering cosmetic and time-based advantages without locking core content. From there I built the full UI — milestone tracker, reward previews, purchase flows and confirmation states. The feature launched within its planned release window.",
    credits: "In collaboration with the Battlefield Mobile UI/UX, monetisation and production teams",
    shots: [
      { src: bfm2, caption: "Warheroes milestone tracker." },
      { src: bfm3, caption: "Reward preview — free and premium tracks side by side." },
      { src: bfm4, caption: "Purchase flow." },
      { src: bfm5, caption: "Confirmation and reward moment treatment." },
    ],
    process: [
      { src: bfm6, caption: "Feature logic" },
      { src: bfm3, caption: "Layout" },
      { src: bfm5, caption: "Final" },
    ],
  },
  {
    slug: "forever-skies",
    index: "05",
    title: "Forever Skies",
    tagline: "A full survival HUD embedded inside the player's helmet.",
    cover: fs1,
    platform: "PC",
    year: "2023",
    category: "Survival",
    role: "Lead UI/UX Designer",
    tools: "Unreal Engine",
    duration: "Full production cycle",
    artDirectionTitle: "Real technology under real stress",
    artDirection:
      "Clinical, functional, slightly worn — the look of real technology under real stress, agreed with the producer and Art Director from a moodboard of sci-fi cinema, military HUD systems and first-person survival games. The primary colour and typeface were already set when I joined; I proposed and refined a secondary palette so the primary reads as interface chrome while the secondary communicates state: critical, neutral, active.",
    challenge: "Helmet-integrated UI sounds immersive; in practice it is a minefield.",
    challengeDetail:
      "Health, oxygen, airship telemetry and threat indicators all had to coexist in a single framed view without overloading the player mid-crisis — while supporting full localisation, where text expansion alone pushes elements 30–40%, and surfacing the airship management system in the same visual space.",
    approach: "A strict ten-second hierarchy, with localisation built into the system from day one.",
    approachDetail:
      "Only information the player needs to survive in the next ten seconds occupies prime visual real estate; everything else is demoted or summoned. Every component was built with text-expansion buffers and any layout that would break on longer strings was flagged before implementation. The helmet HUD shipped without major structural revision, localisation testing passed across four languages without layout breaks, and the interface was singled out in early press coverage of the game's visual identity.",
    credits: "Lead UI/UX Designer at Far From Home — with the game producer and Art Director",
    shots: [
      { src: fs2, caption: "Helmet HUD — survival readouts inside a single framed view." },
      { src: fs3, caption: "Airship telemetry surfaced in the same visual space." },
      { src: fs4, caption: "Secondary palette carrying state: critical, neutral, active." },
      { src: fs5, caption: "Management screens under localisation constraints." },
    ],
    process: [
      { src: fs6, caption: "Moodboard" },
      { src: fs3, caption: "Hierarchy" },
      { src: fs2, caption: "Shipped HUD" },
    ],
  },
  {
    slug: "the-dust",
    index: "06",
    title: "The Dust",
    tagline: "Logo, main menu and HUD for a fictional sci-fi FPS.",
    cover: dust1,
    platform: "PC / Console",
    year: "2022",
    category: "Sci-fi FPS",
    role: "UI/UX Designer",
    tools: "Concept",
    duration: "Self-initiated",
    artDirectionTitle: "Sleek lines, transparent surfaces",
    artDirection:
      "Orbitron set the tone — futuristic and geometric enough to carry the sci-fi premise — paired with a near-monochromatic palette of black, white and shades of blue. Sleek lines, transparent surfaces and motion do the work that colour usually would, following a moodboard drawn from Halo, Battlefield and Call of Duty.",
    challenge: "Make a menu that looks futuristic without becoming hard to use.",
    challengeDetail:
      "Sci-fi interface tropes reward spectacle, but the same menu had to stay comfortable to navigate on both PC and console, where input models and reading distances differ sharply.",
    approach: "Research, sketch, wireframe, then test the usability before adding the shine.",
    approachDetail:
      "I researched military and sci-fi interfaces across film, games and real hardware, sketched competing concepts and shared them for feedback, then built low-fidelity wireframes and prototypes to test navigation across devices. Only after the flow held up did the transparency, linework and animation go on top.",
    credits: "Self-initiated project — logo, main menu and HUD by Kamil Jamiolkowski",
    shots: [
      { src: dust2, caption: "Main menu — sleek linework and transparent surfaces." },
      { src: dust3, caption: "Logo and identity study." },
      { src: dust4, caption: "In-game HUD layout." },
      { src: dust5, caption: "Secondary menu states." },
    ],
    process: [
      { src: dust6, caption: "Moodboard" },
      { src: dust4, caption: "Wireframe" },
      { src: dust2, caption: "Final" },
    ],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);

export const getNextCaseStudy = (slug: string): CaseStudy => {
  const i = caseStudies.findIndex((c) => c.slug === slug);
  return caseStudies[(i + 1) % caseStudies.length] ?? caseStudies[0]!;
};

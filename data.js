/* =========================================================================
   Adewariz — central project & profile data
   Single source of truth for the homepage work grid + "more work" list.
   Case-study prose lives in each /projects/<slug>.html page (static, for SEO
   and no-JS access). To add a project: add a record here + an HTML page.
   Every field below is grounded in code, deployments or your own brief.
   ========================================================================= */

const PROFILE = {
  name: "Abdulwarith Adewariz",
  fullName: "Abdulwarith Aderibigbe Adewariz",
  first: "Abdulwarith",
  role: "Software Developer",
  positioning: "Software Developer · Full-Stack Development · AI-Powered Applications",
  location: "Kaduna, Nigeria",
  locationFull: "Based in Kaduna · studying in Ilorin",
  studyCity: "Ilorin, Nigeria",
  email: "abdulwarithadewariz@gmail.com",
  github: "https://github.com/abdulwarithadewariz-ux",
  githubHandle: "abdulwarithadewariz-ux",
  whatsapp: "https://wa.link/xkqug4",
  available: "Open to internships, remote roles & collaborations",
};

/* Contact methods — only real, verified destinations. */
const CONTACTS = [
  { n: "Email", h: PROFILE.email, u: "mailto:" + PROFILE.email + "?subject=Hello%20Abdulwarith", i: "mail", c: "#4d8bff" },
  { n: "GitHub", h: PROFILE.githubHandle, u: PROFILE.github, i: "github", c: "#f0ede6" },
  { n: "WhatsApp", h: "Chat with me", u: PROFILE.whatsapp, i: "whatsapp", c: "#25d366" },
  { n: "Instagram", h: "@adewarizx18", u: "https://www.instagram.com/adewarizx18/", i: "instagram", c: "#e1306c" },
  { n: "TikTok", h: "@adewarizx", u: "https://www.tiktok.com/@adewarizx", i: "tiktok", c: "#69c9d0" },
  { n: "X", h: "@adewarizjersey", u: "https://x.com/adewarizjersey", i: "x", c: "#f0ede6" },
];

/* ---------------------------------------------------------------------- */
/* FEATURED / CASE-STUDY PROJECTS                                          */
/* status: live | in-progress | concept | in-development | paused             */
/* Honest status only: "live" = publicly reachable URL, "in-progress" =        */
/* shipped code but no public URL yet, "updates in progress" = concept work.   */
/* ---------------------------------------------------------------------- */
const PROJECTS = [
  {
    slug: "machora",
    title: "Machora",
    tagline: "Football, elevated.",
    blurb:
      "A full-stack football platform — live scores, match centres, head-to-head history, lineups, tables and news — that stays honest about the data behind every number.",
    category: "Full-stack web app",
    status: "live",
    statusNote: "Live · in active development",
    accent: "#c8f542",
    accent2: "#8fd400",
    featured: 1,
    order: 1,
    kind: "app",
    stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind", "Prisma", "PostgreSQL", "Auth.js"],
    data: ["API-Football", "football-data.org", "TheSportsDB", "BBC/ESPN RSS"],
    live: "https://machora-fc.vercel.app",
    repo: null,
    caseRef: "projects/machora.html",
    img: "assets/img/machora-home.jpg",
    imgAlt:
      "Machora home screen showing a match timeline with upcoming Premier League and Primera Division fixtures",
  },
  {
    slug: "deenly",
    title: "Deenly",
    tagline: "Your companion on the path.",
    blurb:
      "An Islamic lifestyle progressive web app — prayer times, adhan notifications, Qur'an reading and audio, qibla, duas, hadith and worship tracking — installable and usable offline.",
    category: "Progressive web app",
    status: "live",
    statusNote: "Live · in active development",
    accent: "#2fbd84",
    accent2: "#e9c887",
    featured: 1,
    order: 2,
    kind: "app",
    stack: ["FastAPI", "Python", "SQLAlchemy", "Vanilla JS", "PWA", "Web Push"],
    data: ["AlQuran Cloud", "AlAdhan", "OpenStreetMap", "Flutterwave"],
    live: "https://deenly002.vercel.app",
    repo: null,
    caseRef: "projects/deenly.html",
    img: "assets/img/deenly-auth.jpg",
    imgAlt: "Deenly registration screen with Google sign-in and email form on a dark green theme",
  },
  {
    slug: "dopamind",
    title: "Dopamind",
    tagline: "An AI-powered study studio.",
    blurb:
      "A study command centre — courses, notes, tasks, AI flashcards and quizzes, a focus timer with XP, and study groups with invite codes.",
    category: "Web app · AI",
    status: "in-progress",
    statusNote: "In progress",
    accent: "#8b5cf6",
    accent2: "#c084fc",
    featured: 0,
    order: 3,
    kind: "app ai",
    stack: ["Flask", "Python", "SQLite", "Vanilla JS"],
    data: ["xAI Grok API", "pypdf", "YouTube transcripts"],
    live: null,
    repo: PROFILE.github + "/Dopamind",
    caseRef: "projects/dopamind.html",
    img: null,
    imgAlt: "",
  },
  {
    slug: "echo-world",
    title: "Echo World",
    tagline: "An interactive world that remembers.",
    blurb:
      "A game-design concept built on a world that reacts to player decisions — reactive characters, branching narratives and reputation systems.",
    category: "Game design · Concept",
    status: "concept",
    statusNote: "Updates in progress",
    accent: "#a78bfa",
    accent2: "#7c6bf5",
    featured: 0,
    order: 4,
    kind: "concept game",
    stack: [],
    data: [],
    live: null,
    repo: null,
    caseRef: "projects/echo-world.html",
    img: null,
    imgAlt: "",
  },
  {
    slug: "reality-lens",
    title: "Reality Lens",
    tagline: "Turn what you see into what you understand.",
    blurb:
      "A camera-first discovery and learning concept — point your phone at the world and get recognition, explanation, translation and follow-up questions.",
    category: "Mobile · AI concept",
    status: "concept",
    statusNote: "Updates in progress",
    accent: "#22d3ee",
    accent2: "#06b6d4",
    featured: 0,
    order: 5,
    kind: "concept ai",
    stack: [],
    data: [],
    live: null,
    repo: null,
    caseRef: "projects/reality-lens.html",
    img: null,
    imgAlt: "",
  },
  {
    slug: "future-you",
    title: "Future You",
    tagline: "Explore your possibilities.",
    blurb:
      "A personal-planning concept — set goals, simulate scenarios and watch progress over time, with AI-assisted suggestions. Reflection, not prediction.",
    category: "Planning tool · Concept",
    status: "concept",
    statusNote: "Updates in progress",
    accent: "#f59e0b",
    accent2: "#fbbf24",
    featured: 0,
    order: 6,
    kind: "concept ai",
    stack: [],
    data: [],
    live: null,
    repo: null,
    caseRef: "projects/future-you.html",
    img: null,
    imgAlt: "",
  },
];

/* Smaller but genuine work — shown compactly, honestly scoped. */
const MORE_WORK = [
  {
    title: "Alpine Drift",
    kind: "3D racing game",
    d: "A procedural 3D racing and drifting game — generated track, AI opponents, drift/boost mechanics, three camera modes and JSON settings with corruption recovery.",
    tags: ["Python", "Ursina", "Panda3D"],
  },
  {
    title: "3D Ball Sort",
    kind: "Puzzle game",
    d: "A 3D ball-sorting puzzle with eight levels, level selection, settings and stats, built around capacity-limited tubes.",
    tags: ["Python", "Panda3D"],
  },
  {
    title: "Space Shooter",
    kind: "2D arcade game",
    d: "A 2D shooter with enemies, collisions, escalating difficulty and a game-over screen, packaged as a standalone Windows executable.",
    tags: ["Python", "Pygame"],
  },
  {
    title: "NEXTLEVEL TECH Store",
    kind: "E-commerce",
    d: "An online store for gaming gear, PCs and accessories — product catalogue, order enquiries and a manual bank-transfer checkout with an admin dashboard.",
    tags: ["Flask", "Python", "SQLite"],
  },
];

/* ---------------------------------------------------------------------- */
/* SKILLS — grouped honestly. `level` reflects depth of real use:          */
/* shipped = used in a deployed/working project · learning · explored      */
/* ---------------------------------------------------------------------- */
const SKILLS = [
  {
    group: "Languages",
    items: [
      { n: "Python", level: "shipped", note: "FastAPI, Flask, game logic" },
      { n: "JavaScript", level: "shipped", note: "SPA logic, Service Workers, PWA" },
      { n: "TypeScript", level: "shipped", note: "Typed Next.js app code" },
      { n: "SQL", level: "shipped", note: "SQLite & PostgreSQL modelling" },
      { n: "Java", level: "learning", note: "Object-oriented programming" },
    ],
  },
  {
    group: "Frontend",
    items: [
      { n: "HTML & CSS", level: "shipped", note: "Responsive, accessible layouts" },
      { n: "React 19", level: "shipped", note: "Component architecture" },
      { n: "Next.js 15", level: "shipped", note: "App Router, routing, data loading" },
      { n: "Tailwind CSS", level: "shipped", note: "Design tokens & utility styling" },
    ],
  },
  {
    group: "Backend & data",
    items: [
      { n: "FastAPI", level: "shipped", note: "REST APIs, auth, payments, webhooks" },
      { n: "Flask", level: "shipped", note: "Server-rendered apps & APIs" },
      { n: "SQLAlchemy & Prisma", level: "shipped", note: "ORMs over SQLite/PostgreSQL" },
      { n: "REST API design", level: "shipped", note: "Versioning, caching, error states" },
    ],
  },
  {
    group: "Auth, payments & push",
    items: [
      { n: "JWT & session auth", level: "shipped", note: "HS256 tokens, scrypt hashing" },
      { n: "OAuth 2.0", level: "shipped", note: "Google sign-in, CSRF-safe flows" },
      { n: "Flutterwave", level: "shipped", note: "Checkout, webhooks, verification" },
      { n: "Web Push (VAPID)", level: "shipped", note: "Adhan & match notifications" },
    ],
  },
  {
    group: "AI & integrations",
    items: [
      { n: "LLM APIs", level: "shipped", note: "OpenAI / Anthropic / Gemini, xAI Grok" },
      { n: "Football data APIs", level: "shipped", note: "API-Football, football-data.org" },
      { n: "Maps & geo", level: "shipped", note: "Nominatim, Overpass, qibla maths" },
      { n: "Vector & embeddings", level: "explored", note: "Experiments only" },
    ],
  },
  {
    group: "Tooling & platforms",
    items: [
      { n: "Git & GitHub", level: "shipped", note: "Version control & CI publish" },
      { n: "Vercel", level: "shipped", note: "Deploys, env vars, edge config" },
      { n: "Supabase & Neon", level: "shipped", note: "Managed PostgreSQL" },
      { n: "Docker", level: "learning", note: "Containerising services" },
    ],
  },
];

/* How I actually work — each step grounded in a real project. */
const APPROACH = [
  {
    k: "01",
    t: "Start from a real problem",
    d: "Machora began as a frustration: football apps bury the data source and quietly show 0 for stats they never received. Deenly began with scattered Islamic tools that never worked together. I define the user problem before writing code.",
  },
  {
    k: "02",
    t: "Design the data flow first",
    d: "Before UI, I map where every number comes from. Machora bridges three providers (API-Football, football-data.org, TheSportsDB) behind one typed client with an in-memory cache and honest fallback states.",
  },
  {
    k: "03",
    t: "Build the spine, then the skin",
    d: "I stand up auth, database models and the core API routes early so the hard integration risks surface first. Machora's 12 Prisma models and Deenly's JWT + payment gate were built before any visual polish.",
  },
  {
    k: "04",
    t: "Fail honestly, never fabricate",
    d: "If a provider is down or a key is missing, the interface says so. Machora shows 'data source not connected' instead of inventing a 0–0 score; Deenly labels offline content clearly. Trust is a feature.",
  },
  {
    k: "05",
    t: "Test the flows that matter",
    d: "I write end-to-end tests around the risky paths — Deenly ships a TestClient suite covering its community submit → review → publish → notify workflow and permission boundaries; Machora has local E2E and DB-verification scripts.",
  },
  {
    k: "06",
    t: "Ship, watch, iterate",
    d: "Both flagship apps deploy to Vercel. I read real behaviour, then iterate — Machora's notification poller is deliberately opt-in to protect a free-tier API quota; Deenly's audio was reworked across versions to remove gaps between verses.",
  },
];

const EDUCATION = [
  {
    stage: "Now",
    school: "Al-Hikmah University",
    detail: "B.Sc. Computer Science · Ilorin",
  },
  { stage: "Senior sec.", school: "Iqra College", detail: "SS2 – SS3 · Ilorin" },
  { stage: "Secondary", school: "Great Panaf School", detail: "JSS1 – SS1 · Kaduna" },
  { stage: "Primary", school: "Hallmark International School", detail: "Primary 1 – 5" },
];

const INTERESTS = [
  { t: "Junior software developer roles", d: "Entry-level and junior positions where I can contribute to shipped products from day one." },
  { t: "Software engineering roles", d: "Full-stack product work where I can own features end to end." },
  { t: "Internships & practical experience", d: "Learning directly from engineers more experienced than me." },
  { t: "AI-powered applications", d: "Combining LLM APIs with real product workflows, not demos." },
  { t: "Product engineering", d: "Owning the whole path — data model, interface, deployment — not just one layer." },
  { t: "Remote & collaborative work", d: "Comfortable shipping asynchronously with distributed teams." },
];

/* Tech marquee strip */
const MARQUEE = [
  "Python", "FastAPI", "JavaScript", "TypeScript", "React", "Next.js",
  "PostgreSQL", "Prisma", "Tailwind", "PWA", "Web Push", "OAuth",
  "REST APIs", "LLM APIs", "Git", "Vercel",
];

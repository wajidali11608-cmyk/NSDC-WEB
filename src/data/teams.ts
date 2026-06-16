export type Member = {
  name: string;
  role: string;
  lead?: boolean;
  year?: string;
  bio?: string;
  skills?: string[];
  links?: { label: string; href: string }[];
};

export type Project = {
  title: string;
  year: string;
  type: string;
  blurb: string;
};

export type Team = {
  slug: string;
  num: string;
  name: string;
  tagline: string;
  mission: string;
  brief: string;
  manifesto: string;
  accent: "cyan" | "violet" | "acid" | "cream";
  focusAreas: string[];
  stack: string[];
  rituals: { title: string; when: string; about: string }[];
  projects: Project[];
  members: Member[];
};

export const TEAMS: Team[] = [
  {
    slug: "core",
    num: "01",
    name: "Core",
    tagline: "The directional council.",
    mission:
      "We hold the lab's center of gravity — vision, governance, and the discipline of saying no.",
    brief:
      "Core is the editorial board. We set the season's theme, allocate budget, mediate between teams, and protect the lab's autonomy from anyone who'd rather we be polite.",
    manifesto:
      "Direction is a craft. We do not chair meetings; we draft the constitution that lets every other team move faster than they thought they could.",
    accent: "cream",
    focusAreas: ["Vision", "Governance", "Strategy", "Council Relations", "Budget"],
    stack: ["Notion", "Linear", "Figma", "Loom", "Email"],
    rituals: [
      { title: "Council", when: "Monday 18:00", about: "Strategic sync across all six divisions." },
      { title: "Open Office", when: "Friday 16:00", about: "Drop-in hours for any member of the lab." },
      { title: "Quarterly Review", when: "End of term", about: "Retrospective, manifesto revisions, succession." },
    ],
    projects: [
      { title: "Vol. 02 — Kinetic Systems", year: "2025", type: "Season Manifesto", blurb: "The 90-page season brief that anchors all work this year." },
      { title: "Lab Constitution v3", year: "2025", type: "Document", blurb: "Refactored membership, voting and dissolution rules." },
      { title: "Alumni Network", year: "2024", type: "Initiative", blurb: "Connecting past members to current research lines." },
    ],
    members: [
      { name: "Aarav Khan", role: "President", lead: true, year: "Final Year", bio: "Architect of the season's editorial direction. Reads more journals than sleeps.", skills: ["Strategy", "Editorial", "Type"], links: [{ label: "Read", href: "#" }] },
      { name: "Mira Choi", role: "Vice President", lead: true, year: "Final Year", bio: "Operational spine of the lab. Knows where every file lives.", skills: ["Ops", "Facilitation"], links: [{ label: "Read", href: "#" }] },
      { name: "Lucas Vane", role: "General Secretary", year: "Third Year", bio: "Minutes, motions, and the institutional memory.", skills: ["Writing", "Comms"] },
      { name: "Isha Gupta", role: "Treasurer", year: "Third Year", bio: "Quietly responsible for the fact that we eat.", skills: ["Finance", "Sponsorship"] },
    ],
  },
  {
    slug: "tech",
    num: "02",
    name: "Tech",
    tagline: "Engineers and shader poets.",
    mission:
      "We build the infrastructure that holds everything else up — from the lab's site to the renderers behind our exhibitions.",
    brief:
      "Tech ships. We maintain the public web surface, the internal tooling, and the experimental graphics stack that the Media team paints with. We obsess over performance budgets and accessibility regressions.",
    manifesto:
      "If it does not load in under one second on a mid-tier Android, we do not ship it. Beauty without performance is theater.",
    accent: "cyan",
    focusAreas: ["Web", "WebGL", "Tooling", "DevOps", "Accessibility"],
    stack: ["TypeScript", "React", "Three.js", "GLSL", "Bun", "Cloudflare", "Postgres"],
    rituals: [
      { title: "Standup", when: "Tue & Thu 17:30", about: "Twenty minutes. Cameras off. Blockers only." },
      { title: "Shader Club", when: "Saturday 11:00", about: "Open lab where we trade fragment shaders." },
      { title: "Perf Review", when: "Monthly", about: "We dissect a slow page until it isn't." },
    ],
    projects: [
      { title: "nsdc-jhsc.in v3", year: "2025", type: "Web", blurb: "The site you are reading. Built on TanStack Start, sub-second TTFB." },
      { title: "Mosaic", year: "2025", type: "Generative", blurb: "WebGL playground for procedural posters used across the lab." },
      { title: "Pulse", year: "2024", type: "Tooling", blurb: "Internal CMS for events and member onboarding." },
    ],
    members: [
      { name: "Sarah Malik", role: "Tech Lead", lead: true, year: "Final Year", bio: "Owns the build pipeline and the team's calm.", skills: ["TS", "Architecture", "GLSL"], links: [{ label: "GitHub", href: "#" }] },
      { name: "Devansh Roy", role: "Backend Engineer", year: "Third Year", bio: "Wrote the auth layer over a single weekend, twice.", skills: ["Node", "Postgres", "Edge"] },
      { name: "Priya Nair", role: "Frontend Engineer", year: "Third Year", bio: "Motion specialist. Lives in Framer Motion.", skills: ["React", "Motion", "CSS"] },
      { name: "Omar Siddiqui", role: "WebGL Engineer", year: "Second Year", bio: "Translates art-team poetry into fragment shaders.", skills: ["Three.js", "GLSL"] },
      { name: "Tanvi Shah", role: "DevOps", year: "Second Year", bio: "Keeps the previews preview-ing.", skills: ["CI", "Cloudflare", "Observability"] },
    ],
  },
  {
    slug: "data-science",
    num: "03",
    name: "Data Science",
    tagline: "Models, notebooks, signal.",
    mission:
      "We treat data as a material and statistics as a craft. We ship reproducible notebooks and small, weird models.",
    brief:
      "Data Science runs the lab's research pipeline. We collaborate with the Content team on data journalism, train embedding models for the search inside Pulse, and publish open-source datasets twice a term.",
    manifesto:
      "A model that cannot be explained to a first-year is a model that is hiding. We publish the notebook.",
    accent: "violet",
    focusAreas: ["ML Research", "NLP", "Computer Vision", "Data Viz", "Reproducibility"],
    stack: ["Python", "PyTorch", "DuckDB", "Polars", "Observable", "JupyterLab"],
    rituals: [
      { title: "Paper Club", when: "Wednesday 19:00", about: "We read one paper, slowly." },
      { title: "Notebook Review", when: "Friday 15:00", about: "Peer-review of one notebook per week." },
      { title: "Open Data Drop", when: "Twice a term", about: "We release a dataset with documentation." },
    ],
    projects: [
      { title: "Campus Acoustics", year: "2025", type: "Dataset", blurb: "10,000 ambient recordings from the campus, fully annotated." },
      { title: "Tiny-T5", year: "2025", type: "Model", blurb: "A 60M-param T5 fine-tuned on the lab's own writing." },
      { title: "Atlas of Type", year: "2024", type: "Viz", blurb: "Embedding visualization of 4,000 display typefaces." },
    ],
    members: [
      { name: "Aditya Verma", role: "DS Lead", lead: true, year: "Final Year", bio: "Writes embeddings the way other people write essays.", skills: ["PyTorch", "RAG", "Eval"] },
      { name: "Zara Hussain", role: "ML Research", year: "Third Year", bio: "Fine-tunes everything that will let her.", skills: ["LLMs", "Fine-tuning"] },
      { name: "Karan Mehta", role: "NLP Researcher", year: "Third Year", bio: "Tokenization apologist. Genuinely.", skills: ["NLP", "Linguistics"] },
      { name: "Nikita Bose", role: "Data Viz", year: "Second Year", bio: "Treats Observable like a sketchbook.", skills: ["D3", "Observable"] },
    ],
  },
  {
    slug: "media",
    num: "04",
    name: "Media",
    tagline: "Cameras, color, motion.",
    mission:
      "We document the lab and produce its visual archive — film, photography, sound, and the occasional zine.",
    brief:
      "Media translates research into images. We run a working color lab, a small podcast, and the lab's YouTube channel. Every event leaves with a film and a print.",
    manifesto:
      "If it wasn't filmed, it didn't happen. If it was filmed badly, it shouldn't have.",
    accent: "cream",
    focusAreas: ["Film", "Photography", "Sound Design", "Color", "Archive"],
    stack: ["DaVinci", "Ableton", "Capture One", "Premiere", "Sony FX3"],
    rituals: [
      { title: "Color Night", when: "Tuesday 20:00", about: "We grade footage on the calibrated monitor." },
      { title: "Field Day", when: "Last Sunday", about: "Whole team out shooting one prompt." },
      { title: "Listening Room", when: "Thursday 21:00", about: "Lights out. Speakers on. One album." },
    ],
    projects: [
      { title: "Field Notes Vol. 02", year: "2025", type: "Film Series", blurb: "Twelve short documentaries from inside the lab." },
      { title: "On Type", year: "2025", type: "Podcast", blurb: "Six-episode conversation series with type designers." },
      { title: "Annual Print", year: "2024", type: "Zine", blurb: "120-page risograph annual covering the season." },
    ],
    members: [
      { name: "Leo Thompson", role: "Media Head", lead: true, year: "Final Year", bio: "Has stronger opinions about LUTs than is reasonable.", skills: ["Direction", "Color"] },
      { name: "Sana Iqbal", role: "Photography Lead", year: "Third Year", bio: "Shoots medium format on principle.", skills: ["Editorial", "Documentary"] },
      { name: "Rohan Das", role: "Video", year: "Third Year", bio: "DP and editor in one body, often.", skills: ["Cinematography", "Edit"] },
      { name: "Avni Sharma", role: "Sound", year: "Second Year", bio: "Builds the lab's score, one foley at a time.", skills: ["Mix", "Score"] },
    ],
  },
  {
    slug: "content",
    num: "05",
    name: "Content",
    tagline: "Words that earn their pixels.",
    mission:
      "We are the lab's editorial conscience. We write the manifestos, the captions, and the long form that holds the season together.",
    brief:
      "Content runs the lab's editorial pipeline — the season brief, the website's copy, the magazine. We commission writing from members across every team and edit it back to honesty.",
    manifesto:
      "Edit until it embarrasses you slightly. Then publish. Then revise.",
    accent: "cream",
    focusAreas: ["Long-form", "Editorial", "Research", "Copy", "Translation"],
    stack: ["iA Writer", "Notion", "Are.na", "Hemingway", "Pen and paper"],
    rituals: [
      { title: "Read-around", when: "Monday 20:00", about: "We read one another's drafts out loud." },
      { title: "Slush Day", when: "Friday 17:00", about: "We review every submission to the magazine." },
      { title: "Library Hours", when: "Wednesday afternoon", about: "We physically go to the library. Together." },
    ],
    projects: [
      { title: "Annual Magazine 02", year: "2025", type: "Print", blurb: "180 pages. 24 contributors. One central thesis." },
      { title: "Field Glossary", year: "2025", type: "Web", blurb: "A growing glossary of the lab's working vocabulary." },
      { title: "Letters from the Lab", year: "2024", type: "Newsletter", blurb: "Bi-weekly dispatch to 2,800 readers." },
    ],
    members: [
      { name: "Anaya Joshi", role: "Content Head", lead: true, year: "Final Year", bio: "Editor of the season. Famously kind, famously strict.", skills: ["Editorial", "Long-form"] },
      { name: "Vikram Singh", role: "Long-form", year: "Third Year", bio: "Writes 4,000-word essays on small things.", skills: ["Essays", "Criticism"] },
      { name: "Riya Sen", role: "Editorial", year: "Second Year", bio: "Line-editor of choice across the lab.", skills: ["Copy", "Style"] },
      { name: "Kabir Ahmed", role: "Research", year: "Second Year", bio: "Has a folder of citations larger than his hard drive can hold.", skills: ["Research", "Footnotes"] },
    ],
  },
  {
    slug: "social-media",
    num: "06",
    name: "Social Media",
    tagline: "The lab's public antenna.",
    mission:
      "We translate the work into rhythm — posts, reels, threads — without losing the texture of what was actually made.",
    brief:
      "Social runs the public channels and the community on Discord. We build the lab's posting calendar in lockstep with Content and Media, and we measure ourselves on quality of attention, not quantity of likes.",
    manifesto:
      "We refuse to post for the algorithm. We post for the person who will discover the lab six months from now and stay.",
    accent: "acid",
    focusAreas: ["Strategy", "Reels", "Community", "Threads", "Analytics"],
    stack: ["Figma", "CapCut", "Later", "Discord", "Plausible"],
    rituals: [
      { title: "Calendar Sync", when: "Monday 19:00", about: "Weekly planning with Media and Content." },
      { title: "Reel Lab", when: "Wednesday 18:00", about: "We cut three reels in two hours." },
      { title: "Community Night", when: "Thursday 21:00", about: "Open hangout on the Discord voice channel." },
    ],
    projects: [
      { title: "Field Reels", year: "2025", type: "Series", blurb: "Weekly short-form documentary cuts on Instagram." },
      { title: "Discord Garden", year: "2025", type: "Community", blurb: "Curated channels for typography, ML, film and music." },
      { title: "Behind the Lab", year: "2024", type: "Series", blurb: "Twelve-part backstage series across platforms." },
    ],
    members: [
      { name: "Sia Solano", role: "Social Lead", lead: true, year: "Final Year", bio: "Runs the editorial calendar and the room.", skills: ["Strategy", "Direction"] },
      { name: "Aryan Kapoor", role: "Strategy", year: "Third Year", bio: "Reads the analytics so the rest of us don't have to.", skills: ["Analytics", "Planning"] },
      { name: "Maya Rahman", role: "Design", year: "Second Year", bio: "Owns the look and feel of every post.", skills: ["Design", "Motion"] },
      { name: "Ishan Verma", role: "Community", year: "Second Year", bio: "Knows every regular in the Discord by name.", skills: ["Community", "Moderation"] },
    ],
  },
];

export const getTeam = (slug: string) => TEAMS.find((t) => t.slug === slug);

import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Field Notes — NSDC × JHSC" },
      {
        name: "description",
        content:
          "Workshops, exhibitions, drops and research talks from NSDC × JHSC. Vol. 02 — Kinetic Systems.",
      },
      { property: "og:title", content: "Field Notes — NSDC × JHSC" },
      {
        property: "og:description",
        content: "Workshops, exhibitions, drops and research talks from the lab.",
      },
    ],
  }),
  component: EventsPage,
});

const UPCOMING = [
  {
    n: "01",
    date: "12 · 04 · 26",
    day: "Sat",
    title: "The Hacker Collective",
    type: "Hackathon",
    division: "Tech × Data Science",
    loc: "Main Hall · 18:00 → 22:00",
    desc: "48 hours of uninterrupted neural-net training, type experiments and caffeine. Open to non-members under invite.",
    cta: "Register",
  },
  {
    n: "02",
    date: "15 · 04 · 26",
    day: "Tue",
    title: "Design Systems Forum",
    type: "Talk",
    division: "Tech",
    loc: "Virtual · 14:00 → 16:30",
    desc: "Open studio session on building tokens, variants and motion primitives at the scale of a real product team.",
    cta: "RSVP",
  },
  {
    n: "03",
    date: "22 · 04 · 26",
    day: "Tue",
    title: "Aesthetic Anarchy",
    type: "Exhibition",
    division: "Media × Content",
    loc: "Basement Gallery · All Day",
    desc: "A one-night exhibition of student work — kinetic identities, shaders, glitch, printed matter and field recordings.",
    cta: "Add to calendar",
  },
];

const PAST = [
  { n: "012", title: "Kinetic Identity v2", tag: "Typography", date: "OCT 2025", team: "Tech" },
  { n: "011", title: "Generative Flora", tag: "Algorithmic Art", date: "SEP 2025", team: "Media" },
  { n: "010", title: "Glitch Soundscapes", tag: "Audio · Visual", date: "AUG 2025", team: "Media × Tech" },
  { n: "009", title: "Tiny-T5 Release", tag: "ML · NLP", date: "AUG 2025", team: "Data Science" },
  { n: "008", title: "Neural Cartography", tag: "Data Viz", date: "JUL 2025", team: "Data Science" },
  { n: "007", title: "Spatial Type Studies", tag: "WebGL", date: "JUN 2025", team: "Tech" },
  { n: "006", title: "Council of Pixels", tag: "Exhibition", date: "MAY 2025", team: "All" },
  { n: "005", title: "Letters from the Lab #08", tag: "Newsletter", date: "APR 2025", team: "Content" },
];

function EventsPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative pt-36 lg:pt-48 px-6 lg:px-12 pb-20 overflow-hidden">
        <div className="aurora opacity-50" />
        <div className="noise" />
        <div className="relative z-10 grid grid-cols-12 gap-4 items-end">
          <div className="col-span-12 lg:col-span-9 animate-rise">
            <div className="flex items-center gap-3 mb-8 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse-dot" />
              <span>¶ 02 / Field Notes</span>
              <span className="opacity-40">/</span>
              <span>All operations run in public</span>
            </div>
            <h1 className="font-serif text-[15vw] lg:text-[11vw] leading-[0.88] tracking-tighter">
              Calendar of<br />
              <span className="serif-italic gradient-text">experiments.</span>
            </h1>
          </div>
          <div className="hidden lg:block col-span-3 text-right">
            <p className="font-serif serif-italic text-cream/70 text-lg leading-snug">
              Tickets are free.<br />
              Doors are honest.<br />
              Snacks are usually fine.
            </p>
          </div>
        </div>
      </section>

      {/* UPCOMING — editorial cards */}
      <section className="px-6 lg:px-12 py-16 border-t hairline-strong">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50 mb-3">
              ¶ Upcoming
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl tracking-tighter">
              On the <span className="serif-italic">horizon</span>.
            </h2>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50">
            {UPCOMING.length} scheduled · Spring 26
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-line">
          {UPCOMING.map((e) => (
            <article
              key={e.n}
              className="group bg-ink p-8 lg:p-10 hover:bg-ink-2 transition-colors duration-500 relative overflow-hidden flex flex-col"
            >
              <div className="flex justify-between items-start mb-10 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50">
                <span>E·{e.n} / {String(UPCOMING.length).padStart(2, "0")}</span>
                <span className="text-cyan">{e.type}</span>
              </div>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-serif text-5xl lg:text-6xl tracking-tighter leading-none">
                  {e.date.split(" · ")[0]}
                </span>
                <span className="font-serif serif-italic text-cream/60 text-xl">
                  {e.day} · {e.date.split(" · ").slice(1).join("/")}
                </span>
              </div>

              <h3 className="font-serif text-3xl lg:text-4xl tracking-tighter leading-[0.95] mb-3">
                {e.title}
              </h3>
              <p className="text-sm text-cream/70 leading-relaxed mb-6 text-pretty flex-1">
                {e.desc}
              </p>
              <div className="border-t hairline pt-4 mt-auto">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/60 mb-3">
                  {e.division} · {e.loc}
                </div>
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream text-ink font-mono text-[10px] uppercase tracking-[0.2em] hover:bg-cyan transition-colors">
                  {e.cta} <span>→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="px-6 lg:px-12 py-24 border-t hairline-strong">
        <div className="grid grid-cols-12 gap-4 mb-12">
          <div className="col-span-12 lg:col-span-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50 mb-3">
              ¶ Archive
            </div>
            <h2 className="font-serif text-5xl lg:text-7xl tracking-tighter leading-[0.9]">
              Past<br />
              <span className="serif-italic gradient-text">operations</span>.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="font-serif text-lg lg:text-xl text-cream/70 leading-relaxed text-pretty">
              The lab keeps a public record. Hover any row for the team that
              led it. Click for the field write-up.
            </p>
          </div>
        </div>

        <ul className="divide-y hairline-strong">
          {PAST.map((p) => (
            <li
              key={p.n}
              className="group grid grid-cols-12 gap-3 items-baseline py-6 lg:py-8 hover:bg-ink-2/40 transition-colors px-2 cursor-pointer"
            >
              <span className="col-span-2 lg:col-span-1 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/40">
                {p.n}
              </span>
              <h3 className="col-span-10 lg:col-span-6 font-serif text-2xl lg:text-4xl tracking-tighter leading-none group-hover:translate-x-2 group-hover:text-cyan transition-all duration-500">
                {p.title}
              </h3>
              <span className="col-span-6 lg:col-span-2 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/60">
                {p.team}
              </span>
              <span className="col-span-6 lg:col-span-2 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/60 text-right">
                {p.tag}
              </span>
              <span className="hidden lg:block col-span-1 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/40 text-right">
                {p.date}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="relative px-6 lg:px-12 py-28 border-t hairline-strong overflow-hidden">
        <div className="aurora opacity-25" />
        <div className="relative z-10 grid grid-cols-12 gap-4 items-end">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="font-serif text-5xl lg:text-7xl tracking-tighter leading-[0.95]">
              Want to host with the lab,<br />
              or <span className="serif-italic text-cyan">just show up</span>?
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:col-start-10 flex flex-col gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-between px-5 py-3.5 rounded-full bg-cyan text-ink font-mono text-[11px] uppercase tracking-[0.18em]"
            >
              Propose a collab <span>→</span>
            </Link>
            <Link
              to="/teams"
              className="inline-flex items-center justify-between px-5 py-3.5 rounded-full border hairline-strong font-mono text-[11px] uppercase tracking-[0.18em] hover:bg-cream/5 transition-colors"
            >
              Find a team <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

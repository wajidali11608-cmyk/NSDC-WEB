import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { TEAMS } from "@/data/teams";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NSDC × JHSC — Digital Research Lab" },
      {
        name: "description",
        content:
          "Student-led digital research lab at Jai Hind College. Six divisions, one season, building at the intersection of design, code and the absurd.",
      },
      { property: "og:title", content: "NSDC × JHSC — Digital Research Lab" },
      {
        property: "og:description",
        content:
          "Six divisions, one season. Building at the intersection of design, code and the absurd.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Index,
});

const STATS = [
  { n: "01", label: "Researchers", value: "142", sub: "Across six divisions" },
  { n: "02", label: "Live Projects", value: "12", sub: "Open-source where we can" },
  { n: "03", label: "Sessions / Yr", value: "48", sub: "Workshops · talks · drops" },
  { n: "04", label: "Vol.", value: "02", sub: "Kinetic Systems — 25/26" },
];

const OPS = [
  { id: "001", title: "Kinetic Identity v2", tag: "Typography", date: "Oct 2025", team: "Tech" },
  { id: "002", title: "Generative Flora", tag: "Algorithmic Art", date: "Sep 2025", team: "Media" },
  { id: "003", title: "Tiny-T5 Release", tag: "ML / NLP", date: "Sep 2025", team: "Data Science" },
  { id: "004", title: "Field Notes Vol. 02", tag: "Film Series", date: "Aug 2025", team: "Media" },
  { id: "005", title: "Spatial Type Studies", tag: "WebGL", date: "Jul 2025", team: "Tech" },
];

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[100svh] pt-32 lg:pt-40 px-6 lg:px-12 pb-16 overflow-hidden flex flex-col justify-between">
        <div className="aurora" />
        <div className="noise" />
        <div className="absolute inset-0 grid-lines opacity-[0.15]" />

        <div className="relative z-10 grid grid-cols-12 gap-4 animate-rise-slow">
          <div className="col-span-12 lg:col-span-11">
            <div className="flex items-center gap-3 mb-8 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse-dot" />
              <span>Vol. 02 — Kinetic Systems</span>
              <span className="opacity-40">/</span>
              <span>Mumbai, IN</span>
              <span className="opacity-40">/</span>
              <span>Session 25/26 — Open</span>
            </div>
            <h1 className="font-serif tracking-[-0.04em] leading-[0.85] text-[19vw] lg:text-[13vw]">
              A digital
              <br />
              <span className="serif-italic gradient-text">research lab</span>
              <br />
              <span className="outline-text">in disguise.</span>
            </h1>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-12 gap-4 mt-12 lg:mt-0 items-end">
          <div className="col-span-12 lg:col-span-5">
            <p className="font-serif text-xl lg:text-2xl leading-snug text-pretty text-cream/80">
              We are <span className="text-cream">NSDC × JHSC</span> — a
              student-led collective at Jai Hind College, building at the
              intersection of design, code and the deliberately absurd. Six
              divisions. One season. No clients.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:col-start-7 flex flex-col gap-3">
            <Link
              to="/teams"
              className="group flex items-center justify-between px-5 py-4 rounded-2xl glass hover:bg-cream hover:text-ink transition-all"
            >
              <span className="font-serif text-xl">Meet the collective</span>
              <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              to="/contact"
              className="group flex items-center justify-between px-5 py-4 rounded-2xl glass hover:bg-cyan hover:text-ink transition-all"
            >
              <span className="font-serif text-xl">Apply 25/26</span>
              <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          <div className="hidden lg:flex col-span-3 col-start-10 justify-end">
            <div className="vertical-text font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50 flex items-center gap-4">
              <span>Scroll to enter the lab</span>
              <span className="w-px h-16 bg-cream/30" />
              <span>↓</span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="grid grid-cols-2 lg:grid-cols-4 border-y hairline-strong">
        {STATS.map((s, i, arr) => (
          <div
            key={s.n}
            className={`relative p-6 lg:p-10 ${i < arr.length - 1 && (i + 1) % (typeof window !== "undefined" && window.innerWidth >= 1024 ? 4 : 2) !== 0 ? "border-r hairline-strong" : ""} ${i < 2 ? "border-b lg:border-b-0 hairline-strong" : ""} ${i % 2 === 0 ? "border-r hairline-strong lg:border-r" : ""}`}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/40 mb-6 flex justify-between">
              <span>¶ {s.n}</span>
              <span>{s.label}</span>
            </div>
            <div className={`font-serif text-6xl lg:text-7xl leading-none tracking-tighter ${i === 1 ? "text-cyan" : ""}`}>
              {s.value}
            </div>
            <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/60">
              {s.sub}
            </div>
          </div>
        ))}
      </section>

      {/* MANIFESTO PULL-QUOTE */}
      <section className="relative px-6 lg:px-12 py-32 lg:py-40 overflow-hidden">
        <div className="aurora opacity-20" />
        <div className="relative z-10 grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-3 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50">
            ¶ 01 / Manifesto
          </div>
          <div className="col-span-12 lg:col-span-9">
            <p className="font-serif text-3xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
              We study type, train models, glitch sound, and ship things
              that <span className="serif-italic gradient-text">probably shouldn't exist</span>.
              The best work happens when{" "}
              <span className="outline-text-cyan">discipline</span> meets <span className="serif-italic">noise</span>.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50">
              <span>— The Council</span>
              <span className="opacity-40">/</span>
              <span>Drafted June 2024</span>
              <Link to="/teams/core" className="link-underline text-cyan ml-auto">
                Read the council page →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED EXPERIMENT — image */}
      <section className="px-6 lg:px-12 pb-32">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 relative">
            <div className="absolute -top-4 lg:-top-6 -left-2 z-10 px-3 py-1.5 rounded-full glass font-mono text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse-dot" />
              Current Experiment · Neural Graphics
            </div>
            <div className="relative overflow-hidden rounded-2xl border hairline-strong">
              <img
                src={heroImg}
                alt="Neon geometric installation rendered by the lab"
                width={1280}
                height={1600}
                className="w-full aspect-[5/6] lg:aspect-[16/10] object-cover grayscale-[20%] contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-ink via-ink/20 to-transparent" />
              <div className="absolute bottom-6 lg:bottom-10 left-6 lg:left-10 right-6 lg:right-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                <div className="max-w-md">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/70 mb-2">
                    EXP·011 — Tech × Media
                  </div>
                  <h3 className="font-serif text-3xl lg:text-5xl tracking-tighter leading-[0.95]">
                    Lightforms in <span className="serif-italic text-cyan">six</span> dimensions.
                  </h3>
                </div>
                <Link
                  to="/events"
                  className="self-start inline-flex items-center gap-2 px-5 py-3 rounded-full bg-cream text-ink font-mono text-[11px] uppercase tracking-[0.18em] hover:bg-cyan transition-colors"
                >
                  See field notes →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVISIONS PREVIEW */}
      <section className="px-6 lg:px-12 py-24 border-t hairline-strong">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50 mb-3">
              ¶ 03 / The Collective
            </div>
            <h2 className="font-serif text-5xl lg:text-7xl tracking-tighter leading-[0.9]">
              Six <span className="serif-italic">divisions</span>.<br />
              One <span className="text-cyan">lab</span>.
            </h2>
          </div>
          <Link to="/teams" className="hidden md:inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] link-underline">
            All divisions →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
          {TEAMS.map((t) => (
            <Link
              key={t.slug}
              to="/teams/$slug"
              params={{ slug: t.slug }}
              className="group bg-ink p-8 lg:p-10 hover:bg-ink-2 transition-colors relative overflow-hidden min-h-[280px] flex flex-col justify-between"
            >
              <div className="flex justify-between items-start font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50">
                <span>¶ {t.num}</span>
                <span>{t.members.length} members</span>
              </div>
              <div>
                <h3 className="font-serif text-4xl lg:text-5xl tracking-tighter leading-[0.95] mb-3">
                  {t.name}
                </h3>
                <p className="text-sm text-cream/70 leading-relaxed max-w-xs text-pretty">
                  {t.tagline}
                </p>
                <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50 group-hover:text-cyan flex items-center gap-2 transition-colors">
                  Enter division <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* RECENT OPS */}
      <section className="px-6 lg:px-12 py-24 border-t hairline-strong">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50 mb-3">
              ¶ 04 / Recent operations
            </div>
            <h2 className="font-serif text-5xl lg:text-6xl tracking-tighter">
              What we <span className="serif-italic">shipped</span> lately.
            </h2>
          </div>
          <Link to="/events" className="hidden md:inline font-mono text-[11px] uppercase tracking-[0.18em] link-underline">
            Full field log →
          </Link>
        </div>

        <ul className="divide-y hairline-strong">
          {OPS.map((op) => (
            <li
              key={op.id}
              className="group grid grid-cols-12 gap-3 items-baseline py-6 lg:py-8 hover:bg-ink-2/40 transition-colors px-2 cursor-pointer"
            >
              <span className="col-span-2 lg:col-span-1 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/40">
                {op.id}
              </span>
              <h3 className="col-span-10 lg:col-span-6 font-serif text-2xl lg:text-4xl tracking-tighter leading-none group-hover:translate-x-2 group-hover:text-cyan transition-all duration-500">
                {op.title}
              </h3>
              <span className="col-span-6 lg:col-span-2 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/60">
                {op.team}
              </span>
              <span className="col-span-6 lg:col-span-2 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/60 text-right">
                {op.tag}
              </span>
              <span className="hidden lg:block col-span-1 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/40 text-right">
                {op.date}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="relative px-6 lg:px-12 py-32 border-t hairline-strong overflow-hidden">
        <div className="aurora opacity-30" />
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50 mb-6">
            ¶ Open Call · Session 25/26
          </div>
          <h2 className="font-serif text-[14vw] lg:text-[8vw] leading-[0.9] tracking-tighter">
            Make <span className="serif-italic gradient-text">noise</span><br />
            with us.
          </h2>
          <p className="mt-8 max-w-lg mx-auto font-serif text-lg text-cream/70 text-pretty">
            We accept applications across all six divisions year-round. Read a
            division page, find your people, and send us a signal.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-cyan text-ink font-mono text-[11px] uppercase tracking-[0.18em] hover:bg-cream transition-colors"
            >
              Initiate contact <span>→</span>
            </Link>
            <Link
              to="/teams"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border hairline-strong font-mono text-[11px] uppercase tracking-[0.18em] hover:bg-cream/5 transition-colors"
            >
              Browse divisions
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

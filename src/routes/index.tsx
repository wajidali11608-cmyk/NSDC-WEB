import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { TEAMS } from "@/data/teams";
import heroImg from "@/assets/hero.jpg";
import { useState, useEffect, useRef } from "react";

export const Route = createFileRoute("/")(  {
  head: () => ({
    meta: [
      { title: "NSDC-JHSC" },
      {
        name: "description",
        content:
          "Student-led society at Jamia Hamdard University. All teams, one mission, building the future of code and design.",
      },
      { property: "og:title", content: "NSDC-JHSC — Digital Tech Club" },
      {
        property: "og:description",
        content:
          "Nine teams, one mission. Building at the intersection of design, code and the future.",
      },

      { property: "og:image", content: heroImg },
    ],
  }),
  component: Index,
});

const STATS = [
  { n: "01", label: "Builders", value: "150+", sub: "Active members" },
  { n: "02", label: "Projects", value: "12", sub: "Live technical lines" },
  { n: "03", label: "Freq.", value: "48", sub: "Annual sync count" },
  { n: "04", label: "Vol.", value: "02", sub: "Kinetic Systems — 26/27" },
];

function NeuralExperimentCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [loss, setLoss] = useState(0.0124);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Fluctuating render loss telemetry
  useEffect(() => {
    const interval = setInterval(() => {
      setLoss(Number((0.0115 + Math.random() * 0.002).toFixed(4)));
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Set spotlight CSS variables
    card.style.setProperty("--spotlight-x", `${x}px`);
    card.style.setProperty("--spotlight-y", `${y}px`);
    
    setCoords({ x: Math.round(x), y: Math.round(y) });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="neural-card-container relative overflow-hidden rounded-2xl border hairline-strong bg-ink-2"
    >
      {/* Telemetry HUD overlays */}
      <div className="neural-scan-line" />
      <div className="neural-lens-grid" />
      <div className="neural-spotlight" />
      <div className="bracket-tl" />
      <div className="bracket-tr" />
      <div className="bracket-bl" />
      <div className="bracket-br" />

      {/* Structured top header panel (eliminates overlap completely) */}
      <div className="flex items-center justify-between px-6 py-4 border-b hairline bg-ink/40 z-10 relative pointer-events-none select-none">
        <div className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.3em] text-cream">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse-dot" />
          <span>Current Experiment</span>
          <span className="opacity-30">//</span>
          <span className="text-cyan">Neural Graphics</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 font-mono text-[9px] uppercase tracking-[0.2em] text-cream/40">
          <span>LOC: DL-28.61</span>
          <span>//</span>
          <span>MODEL: NEURAL-MESH-V2</span>
        </div>
      </div>

      {/* Interactive image container */}
      <div className="relative overflow-hidden w-full aspect-[5/6] lg:aspect-[16/10] bg-ink">
        {/* Top Hover Coordinates */}
        <div className="absolute top-4 left-6 right-6 flex justify-between z-10 pointer-events-none select-none">
          <span className="telemetry-item">
            COORDS: {isHovered ? `${coords.x},${coords.y}` : "NULL"}
          </span>
          <span className="telemetry-item">
            LOSS: {loss} // FPS: 60
          </span>
        </div>

        <img
          src={heroImg}
          alt="Neon geometric installation rendered by the lab"
          width={1280}
          height={1600}
          className="neural-img w-full h-full object-cover grayscale-[20%] contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-ink via-ink/20 to-transparent pointer-events-none" />

        <div className="absolute bottom-6 lg:bottom-10 left-6 lg:left-10 right-6 lg:right-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 z-10">
          <div className="max-w-md pointer-events-none select-none">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/70">
                EXP·011 — Tech × Media
              </span>
              <span className="hidden sm:inline telemetry-item opacity-30">//</span>
              <span className="hidden sm:inline telemetry-item">SAMPLING: 2048SPP</span>
            </div>
            <h3 className="font-serif text-3xl lg:text-5xl tracking-tighter leading-[0.95]">
              Lightforms in <span className="serif-italic text-cyan">six</span> dimensions.
            </h3>
          </div>
          <Link
            to="/events"
            className="self-start inline-flex items-center gap-2 px-5 py-3 rounded-full bg-cream text-ink font-mono text-[11px] uppercase tracking-[0.18em] hover:bg-cyan hover:shadow-[0_0_15px_rgba(110,240,255,0.4)] transition-all duration-300 active:scale-95 relative z-20"
          >
            See field notes →
          </Link>
        </div>
      </div>
    </div>
  );
}

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[100svh] pt-32 lg:pt-40 px-4 sm:px-6 lg:px-12 pb-16 overflow-hidden flex flex-col justify-between">
        <div className="aurora" />
        <div className="noise" />
        <div className="absolute inset-0 grid-lines opacity-[0.15]" />

        <div className="relative z-10">
          {/* Top metadata */}
          <div className="hero-meta hidden sm:flex items-center gap-3 mb-10 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse-dot" />
            <span>Vol. 02 — Kinetic Systems</span>
            <span className="opacity-40">/</span>
            <span>New Delhi, IN</span>
            <span className="opacity-40">/</span>
            <span>Session 26/27 — Open</span>
          </div>

          {/* Hero Title — elegant staggered reveal */}
          <h1 className="font-serif leading-[0.88] tracking-[-0.05em] sm:tracking-[-0.04em]">
            <span className="hero-line block text-[15.5vw] sm:text-[14vw] lg:text-[12vw] text-cream/90">
              Architecting
            </span>
            <span className="hero-line block text-[17.5vw] sm:text-[16vw] lg:text-[13.5vw]">
              <span className="serif-italic hero-gradient-text">the future</span>
            </span>
            <span className="hero-line block text-[15vw] sm:text-[13vw] lg:text-[10.5vw] text-cream/35">
              in silence.
            </span>
          </h1>
        </div>

        {/* Bottom info row */}
        <div className="relative z-10 grid grid-cols-12 gap-4 mt-12 lg:mt-0 items-end hero-meta-2">
          <div className="col-span-12 lg:col-span-5">
            <p className="font-serif text-xl lg:text-2xl leading-snug text-pretty text-cream/80">
              We are <span className="text-cream">NSDC-JHSC</span> — a
              student-led society at Jamia Hamdard University. We build at the
              intersection of design, code, and the future. Nine
              teams. One mission. No compromise.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:col-start-7 flex flex-col gap-3">
            <Link
              to="/teams"
              className="group flex items-center justify-between px-5 py-4 rounded-2xl glass hover:bg-cyan/10 hover:text-cyan hover:border-cyan/50 transition-all duration-300"
            >
              <span className="font-serif text-xl underline-offset-4 group-hover:underline">Meet the teams</span>
              <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link
              to="/contact"
              className="group flex items-center justify-between px-5 py-4 rounded-2xl glass hover:bg-cyan/10 hover:text-cyan hover:border-cyan/50 transition-all duration-300"
            >
              <span className="font-serif text-xl underline-offset-4 group-hover:underline">Join 26/27</span>
              <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          <div className="hidden lg:flex col-span-3 col-start-10 justify-end">
            <div className="vertical-text font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50 flex items-center gap-4">
              <span>Scroll to enter the lab</span>
              <span className="w-px h-16 bg-cream/30 relative overflow-hidden">
                <span className="absolute inset-0 w-full bg-cyan/60 scroll-indicator-line" />
              </span>
              <span>↓</span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="grid grid-cols-2 lg:grid-cols-4 border-y hairline-strong">
        {STATS.map((s, i) => (
          <div
            key={s.n}
            className={`relative p-6 lg:p-10 ${i % 2 === 0 ? "border-r hairline-strong" : ""} lg:border-r lg:last:border-r-0 ${i < 2 ? "border-b lg:border-b-0 hairline-strong" : ""}`}
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
      <section className="relative px-6 lg:px-12 pt-48 lg:pt-60 pb-32 lg:pb-40 overflow-hidden">
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
              <span>Ratified June 2024</span>

              <Link to="/teams" className="link-underline text-cyan ml-auto">
                Read the collective →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED EXPERIMENT — image */}
      <section className="px-6 lg:px-12 pt-16 lg:pt-24 pb-32">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <NeuralExperimentCard />
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
              Nine <span className="serif-italic">divisions</span>.<br />
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
          {[
            {
              id: "01",
              title: "Git & GitHub Foundation",
              t: "Tech",
              s: "Completed",
            },
            {
              id: "02",
              title: "Python with Libraries Series",
              t: "Tech × Data Science",
              s: "Completed",
            },
            {
              id: "03",
              title: "Brainhack Ideathon",
              t: "Data Science × Tech",
              s: "Completed",
            },
          ].map((op) => (
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
                {op.t}
              </span>
              <span className="col-span-6 lg:col-span-2 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/60 text-right">
                {op.s}
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
            ¶ Open Call · Session 26/27
          </div>
          <h2 className="font-serif text-[11vw] sm:text-[12vw] lg:text-[8vw] leading-[0.9] tracking-tighter">
            Make <span className="serif-italic gradient-text">noise</span><br />
            with us.
          </h2>
          <p className="mt-8 max-w-lg mx-auto font-serif text-lg text-cream/70 text-pretty">
            We accept applications across all nine divisions year-round. Read a
            division page, find your people, and send us a signal.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-cyan text-ink font-mono text-[11px] uppercase tracking-[0.18em] border border-transparent hover:bg-ink hover:text-cyan hover:border-cyan transition-all duration-300 active:scale-95 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-ink group-hover:bg-cyan animate-pulse-dot" />
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

import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { TEAMS } from "@/data/teams";

export const Route = createFileRoute("/teams/")(
  {
    component: TeamsIndex,
  }
);

const accentBg: Record<string, string> = {
  cyan: "bg-cyan",
  violet: "bg-violet",
  acid: "bg-acid",
  cream: "bg-cream",
};

const accentText: Record<string, string> = {
  cyan: "text-cyan",
  violet: "text-violet",
  acid: "text-acid",
  cream: "text-cream",
};

const accentBorder: Record<string, string> = {
  cyan: "border-cyan/30",
  violet: "border-violet/30",
  acid: "border-acid/30",
  cream: "border-cream/30",
};

const accentGlow: Record<string, string> = {
  cyan: "shadow-[0_0_40px_rgba(34,211,238,0.15)]",
  violet: "shadow-[0_0_40px_rgba(167,139,250,0.15)]",
  acid: "shadow-[0_0_40px_rgba(217,249,157,0.15)]",
  cream: "shadow-[0_0_40px_rgba(255,253,244,0.1)]",
};

function TeamsIndex() {
  return (
    <SiteLayout>
      {/* ═══════════════════════════════════════════════════
          HERO — Massive typographic statement
      ═══════════════════════════════════════════════════ */}
      <section className="relative pt-36 lg:pt-48 px-6 lg:px-12 pb-20 overflow-hidden">
        <div className="aurora opacity-50" />
        <div className="noise" />
        <div className="relative z-10 grid grid-cols-12 gap-4 items-end">
          <div className="col-span-12 lg:col-span-9 animate-rise">
            <div className="flex items-center gap-3 mb-8 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse-dot" />
              <span>¶ 03 / The Collective</span>
              <span className="opacity-40">/</span>
              <span>{TEAMS.length} Active Divisions</span>
            </div>
            <h1 className="font-serif text-[15vw] lg:text-[11vw] leading-[0.88] tracking-tighter">
              The
              <br />
              <span className="serif-italic gradient-text">Collective.</span>
            </h1>
          </div>
          <div className="hidden lg:block col-span-3 text-right">
            <p className="font-serif serif-italic text-cream/70 text-lg leading-snug">
              Specialized guilds.
              <br />
              Decentralized logic.
              <br />
              Shared vision.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          BRIDGE — Section intro with editorial tension 
      ═══════════════════════════════════════════════════ */}
      <section className="px-6 lg:px-12 py-16 border-t hairline-strong">
        <div className="grid grid-cols-12 gap-4 items-end">
          <div className="col-span-12 lg:col-span-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/40 mb-3">
              ¶ Active Guilds
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl tracking-tighter leading-[0.95]">
              Nine <span className="serif-italic text-cyan">divisions</span>,
              <br />
              one signal.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="font-serif text-base lg:text-lg text-cream/50 leading-relaxed text-pretty">
              Each guild operates with full autonomy — its own stack, rituals,
              and culture. Together they form the architecture of the society.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          DIVISIONS — Full-width editorial rows 
          (Awwwards-level: each team = a full-width row)
      ═══════════════════════════════════════════════════ */}
      <section className="border-t hairline-strong">
        {TEAMS.map((t, idx) => (
          <Link
            key={t.slug}
            to="/teams/$slug"
            params={{ slug: t.slug }}
            className="group relative block border-b hairline-strong transition-all duration-700 hover:bg-ink-2/60 overflow-hidden"
          >
            {/* Localized accent glow on hover */}
            <div
              className={`absolute top-0 right-0 w-[40%] h-full blur-[120px] opacity-0 group-hover:opacity-10 transition-opacity duration-1000 pointer-events-none ${accentBg[t.accent]}`}
            />

            <div className="relative z-10 grid grid-cols-12 gap-4 px-6 lg:px-12 py-10 lg:py-14 items-center">
              {/* Column 1: Oversized Number */}
              <div className="col-span-2 lg:col-span-1">
                <span
                  className={`font-serif text-5xl lg:text-7xl tracking-tighter leading-none opacity-20 group-hover:opacity-80 transition-all duration-700 ${accentText[t.accent]}`}
                >
                  {t.num}
                </span>
              </div>

              {/* Column 2: Team Name + Tagline */}
              <div className="col-span-10 lg:col-span-4">
                <h2 className="font-serif text-3xl lg:text-5xl tracking-tighter leading-none mb-2 group-hover:translate-x-2 transition-transform duration-500">
                  {t.name}
                </h2>
                <p className="font-serif serif-italic text-base lg:text-lg text-cream/40 group-hover:text-cream/70 transition-colors duration-500 leading-tight">
                  {t.tagline}
                </p>
              </div>

              {/* Column 3: Defining Keyword — oversized italic essence */}
              <div className="hidden lg:flex col-span-3 items-center justify-center overflow-hidden">
                <span className="font-serif serif-italic text-3xl tracking-tight text-cream/10 group-hover:text-cream/30 transition-all duration-700 group-hover:tracking-normal whitespace-nowrap">
                  {t.focusAreas[0]}
                </span>
              </div>

              {/* Column 4: Member Count — bold oversized metric */}
              <div className="hidden lg:flex col-span-2 items-center justify-center">
                <div className="text-center">
                  <span className={`font-serif text-4xl lg:text-5xl tracking-tighter leading-none opacity-30 group-hover:opacity-100 transition-all duration-700 ${accentText[t.accent]}`}>
                    {String(t.members.length).padStart(2, "0")}
                  </span>
                  <div className="font-mono text-[7px] uppercase tracking-[0.4em] text-cream/20 mt-1 group-hover:text-cream/40 transition-colors duration-500">
                    Members
                  </div>
                </div>
              </div>

              {/* Column 5: Kinetic Data-Link — Extraordinary Navigation */}
              <div className="hidden lg:flex col-span-2 justify-end items-center">
                <div
                  className={`relative h-11 px-6 rounded-full border border-white/10 flex items-center justify-center transition-all duration-700 group-hover:w-[180px] overflow-hidden ${t.accent === "cyan"
                      ? "hover:border-cyan"
                      : t.accent === "violet"
                        ? "hover:border-violet"
                        : t.accent === "acid"
                          ? "hover:border-acid"
                          : "hover:border-cream"
                    }`}
                >
                  {/* Liquid fill background */}
                  <div
                    className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out ${t.accent === "cyan"
                        ? "bg-cyan"
                        : t.accent === "violet"
                          ? "bg-violet"
                          : t.accent === "acid"
                            ? "bg-acid"
                            : "bg-cream"
                      }`}
                  />

                  <div className="relative z-10 flex items-center gap-2">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-cream/30 group-hover:text-ink transition-colors duration-500 whitespace-nowrap">
                      OPEN_DIVISION
                    </span>
                    <span className="text-xl text-cream/20 group-hover:text-ink group-hover:translate-x-1 transition-all duration-500">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Left accent bar — grows on hover */}
            <div
              className={`absolute left-0 top-0 bottom-0 w-[2px] group-hover:w-[4px] transition-all duration-500 ${accentBg[t.accent]} opacity-0 group-hover:opacity-100`}
            />
          </Link>
        ))}
      </section>

      {/* ═══════════════════════════════════════════════════
          CTA — Centered, confident, minimal
      ═══════════════════════════════════════════════════ */}
      <section className="relative px-6 lg:px-12 py-40 overflow-hidden">
        <div className="aurora opacity-15 blur-[100px]" />
        <div className="noise" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-5xl lg:text-[9vw] tracking-tighter leading-[0.88] mb-16">
            Ready to <br className="lg:hidden" />
            <span className="serif-italic gradient-text">contribute?</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-cyan text-ink font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-cream transition-all duration-500"
            >
              Apply now →
            </Link>
            <Link
              to="/events"
              className="w-full sm:w-auto px-10 py-5 rounded-full border border-white/10 font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-white/5 transition-all duration-500 text-cream/40"
            >
              See schedule
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

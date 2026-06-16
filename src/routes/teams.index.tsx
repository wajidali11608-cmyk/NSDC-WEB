import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { TEAMS } from "@/data/teams";

export const Route = createFileRoute("/teams/")({
  component: TeamsIndex,
});

const accentMap = {
  cyan: "text-cyan",
  violet: "text-violet",
  acid: "text-acid",
  cream: "text-cream",
} as const;

const bgAccentMap = {
  cyan: "group-hover:bg-cyan group-hover:text-ink",
  violet: "group-hover:bg-violet group-hover:text-ink",
  acid: "group-hover:bg-acid group-hover:text-ink",
  cream: "group-hover:bg-cream group-hover:text-ink",
} as const;

function TeamsIndex() {
  const totalMembers = TEAMS.reduce((acc, t) => acc + t.members.length, 0);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative pt-36 lg:pt-48 px-6 lg:px-12 pb-20 overflow-hidden">
        <div className="aurora opacity-50" />
        <div className="noise" />
        <div className="relative z-10 grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-10 animate-rise">
            <div className="flex items-center gap-4 mb-8 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50">
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse-dot" />
              <span>¶ 03 / Collective</span>
              <span className="opacity-40">/</span>
              <span>{TEAMS.length} divisions · {totalMembers} researchers</span>
            </div>
            <h1 className="font-serif text-[15vw] lg:text-[10vw] leading-[0.88] tracking-tighter">
              The people<br />
              <span className="serif-italic gradient-text">behind the noise.</span>
            </h1>
          </div>

          <div
            className="col-span-12 lg:col-span-7 lg:col-start-4 mt-10 animate-rise"
            style={{ animationDelay: "200ms" }}
          >
            <p className="font-serif text-xl lg:text-2xl leading-snug text-pretty text-cream/85">
              Six divisions, one lab. Each team ships independently and on its own
              cadence — together, they make the season. Click through to read a
              division's manifesto, see its current projects and meet its
              researchers.
            </p>
          </div>
        </div>
      </section>

      {/* DIVISIONS LIST */}
      <section className="border-t hairline-strong">
        {TEAMS.map((t, i) => (
          <Link
            key={t.slug}
            to="/teams/$slug"
            params={{ slug: t.slug }}
            className="group relative block border-b hairline-strong px-6 lg:px-12 py-10 lg:py-14 transition-colors duration-500 hover:bg-ink-2"
          >
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-2 lg:col-span-1 font-mono text-xs text-cream/40">
                ¶ {t.num}
              </div>

              <div className="col-span-10 lg:col-span-5 flex items-baseline gap-4">
                <h2
                  className={`font-serif text-5xl lg:text-7xl tracking-tighter transition-transform duration-500 group-hover:translate-x-3 ${accentMap[t.accent]}`}
                >
                  {t.name}
                </h2>
                <span className="hidden md:inline font-serif text-xl serif-italic text-cream/40">
                  — {t.tagline}
                </span>
              </div>

              <div className="hidden lg:block col-span-4 text-cream/60 text-sm leading-relaxed text-pretty">
                {t.mission}
              </div>

              <div className="col-span-12 lg:col-span-2 flex items-center justify-between lg:justify-end gap-4 mt-4 lg:mt-0">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/40">
                  {t.members.length} members
                </span>
                <span
                  className={`grid place-items-center w-11 h-11 rounded-full border hairline-strong transition-colors duration-500 ${bgAccentMap[t.accent]}`}
                >
                  →
                </span>
              </div>
            </div>

            <div className="md:hidden mt-4 text-cream/60 text-sm leading-relaxed">
              {t.mission}
            </div>

            <span
              className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-cream/[0.02] to-transparent transition-all duration-700 group-hover:w-full pointer-events-none"
              aria-hidden
            />
            <span className="absolute bottom-0 left-0 h-px w-0 bg-cyan transition-all duration-700 group-hover:w-full" />
            {i === 0 && <span className="sr-only">first division</span>}
          </Link>
        ))}
      </section>

      {/* FOOTNOTE / CTA */}
      <section className="px-6 lg:px-12 py-32 grid grid-cols-12 gap-4 border-t hairline-strong relative">
        <div className="col-span-12 lg:col-span-5">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50 mb-6 block">
            ¶ Open Call
          </span>
          <h2 className="font-serif text-5xl lg:text-7xl tracking-tighter leading-[0.95]">
            Want to join<br />
            a <span className="serif-italic text-cyan">division</span>?
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-6 lg:col-start-7 flex flex-col justify-end">
          <p className="font-serif text-lg lg:text-xl leading-relaxed text-cream/80 mb-8 text-pretty">
            Applications for Session 25/26 are open across all six divisions.
            You don't need a CV — you need a portfolio, a recent obsession, and
            roughly four hours a week.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan text-ink font-mono text-[11px] uppercase tracking-[0.18em] hover:bg-cream transition-colors"
            >
              Apply now <span>→</span>
            </Link>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border hairline-strong font-mono text-[11px] uppercase tracking-[0.18em] hover:bg-cream/5 transition-colors"
            >
              See upcoming events
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

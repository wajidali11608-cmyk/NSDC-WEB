import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { TEAMS, getTeam, type Member } from "@/data/teams";

export const Route = createFileRoute("/teams/$slug")({
  head: ({ params }) => {
    const t = getTeam(params.slug);
    const title = t ? `${t.name} — The Collective · NSDC × JHSC` : "Team — NSDC × JHSC";
    const desc = t ? `${t.tagline} ${t.mission}` : "A division of NSDC × JHSC.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  loader: ({ params }) => {
    const team = getTeam(params.slug);
    if (!team) throw notFound();
    return { team };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <section className="pt-40 px-6 lg:px-12 pb-32 min-h-[60vh] flex flex-col items-start gap-6">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/40">404 / Division</span>
        <h1 className="font-serif text-6xl lg:text-8xl tracking-tighter">No such division.</h1>
        <Link to="/teams" className="font-mono text-xs uppercase tracking-[0.3em] text-cyan link-underline">
          ← Back to collective
        </Link>
      </section>
    </SiteLayout>
  ),
  component: TeamDetail,
});

const accentText = {
  cyan: "text-cyan",
  violet: "text-violet",
  acid: "text-acid",
  cream: "text-cream",
} as const;

const accentBg = {
  cyan: "bg-cyan text-ink",
  violet: "bg-violet text-ink",
  acid: "bg-acid text-ink",
  cream: "bg-cream text-ink",
} as const;

const accentBorder = {
  cyan: "border-cyan/40",
  violet: "border-violet/40",
  acid: "border-acid/40",
  cream: "border-cream/40",
} as const;

function MemberCard({ m, idx, accent }: { m: Member; idx: number; accent: keyof typeof accentText }) {
  const initials = m.name.split(" ").map((p) => p[0]).slice(0, 2).join("");
  return (
    <article className="group relative">
      <div className="relative aspect-[4/5] overflow-hidden bg-ink-2 border hairline-strong">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute inset-0 grid place-items-center">
          <span className={`font-serif text-[10rem] leading-none ${accentText[accent]} opacity-10 group-hover:opacity-30 transition-opacity duration-700`}>
            {initials}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />

        <div className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50">
          M·{String(idx + 1).padStart(2, "0")}
        </div>
        {m.lead && (
          <div className={`absolute top-3 right-3 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.3em] rounded-full ${accentBg[accent]}`}>
            Lead
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
          <div className="font-serif text-2xl lg:text-3xl tracking-tight leading-none">
            {m.name}
          </div>
          <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/60">
            {m.role}{m.year ? ` · ${m.year}` : ""}
          </div>
        </div>

        {/* Hover reveal panel */}
        <div className="absolute inset-0 glass opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col p-5">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50">
            M·{String(idx + 1).padStart(2, "0")} / Profile
          </div>
          <div className="mt-3 font-serif text-2xl leading-tight">{m.name}</div>
          <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/60">
            {m.role}
          </div>
          {m.bio && (
            <p className="mt-4 text-sm leading-relaxed text-cream/80 text-pretty">
              {m.bio}
            </p>
          )}
          <div className="mt-auto">
            {m.skills && (
              <div className="flex flex-wrap gap-1.5">
                {m.skills.map((s) => (
                  <span key={s} className={`px-2 py-0.5 border ${accentBorder[accent]} rounded-full font-mono text-[9px] uppercase tracking-[0.2em]`}>
                    {s}
                  </span>
                ))}
              </div>
            )}
            {m.links && m.links.length > 0 && (
              <div className="mt-3 flex gap-3 font-mono text-[10px] uppercase tracking-[0.3em]">
                {m.links.map((l) => (
                  <a key={l.label} href={l.href} className={`${accentText[accent]} link-underline`}>
                    {l.label} ↗
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function TeamDetail() {
  const { team } = Route.useLoaderData();
  const leads = team.members.filter((m) => m.lead);
  const others = team.members.filter((m) => !m.lead);

  const idx = TEAMS.findIndex((t) => t.slug === team.slug);
  const prev = TEAMS[(idx - 1 + TEAMS.length) % TEAMS.length];
  const next = TEAMS[(idx + 1) % TEAMS.length];

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative pt-36 lg:pt-48 px-6 lg:px-12 pb-20 overflow-hidden">
        <div className="aurora opacity-40" />
        <div className="noise" />

        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-10 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50">
            <Link to="/teams" className="link-underline">Collective</Link>
            <span className="opacity-40">/</span>
            <span>Division {team.num}</span>
            <span className="opacity-40">/</span>
            <span className={accentText[team.accent]}>{team.name}</span>
          </div>

          <div className="grid grid-cols-12 gap-4 items-end">
            <div className="col-span-12 lg:col-span-9 animate-rise">
              <h1 className={`font-serif text-[18vw] lg:text-[13vw] leading-[0.85] tracking-tighter ${accentText[team.accent]}`}>
                {team.name}.
              </h1>
            </div>
            <div className="hidden lg:flex col-span-3 justify-end">
              <div className="vertical-text font-mono text-[10px] uppercase tracking-[0.3em] text-cream/40">
                ¶ {team.num} · {team.members.length} researchers · est. 2024
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 mt-12">
            <div className="col-span-12 lg:col-span-7 animate-rise" style={{ animationDelay: "150ms" }}>
              <p className="font-serif text-2xl lg:text-3xl leading-snug text-pretty">
                <span className="serif-italic text-cream/60">{team.tagline}</span>{" "}
                {team.mission}
              </p>
            </div>

            <div className="col-span-12 lg:col-span-4 lg:col-start-9 glass-soft rounded-2xl p-6 animate-rise" style={{ animationDelay: "300ms" }}>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50 mb-4">
                ¶ Focus areas
              </div>
              <div className="flex flex-wrap gap-2">
                {team.focusAreas.map((f) => (
                  <span key={f} className={`px-3 py-1.5 rounded-full border ${accentBorder[team.accent]} font-mono text-[10px] uppercase tracking-[0.2em] ${accentText[team.accent]}`}>
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO + STATS */}
      <section className="px-6 lg:px-12 py-24 border-t hairline-strong grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-3 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50">
          ¶ Manifesto
        </div>
        <div className="col-span-12 lg:col-span-7">
          <blockquote className="font-serif text-3xl lg:text-5xl leading-tight tracking-tight text-balance">
            <span className={`${accentText[team.accent]} mr-2`}>"</span>
            {team.manifesto}
            <span className={`${accentText[team.accent]} ml-2`}>"</span>
          </blockquote>
          <p className="mt-10 text-base lg:text-lg leading-relaxed text-cream/75 max-w-2xl text-pretty">
            {team.brief}
          </p>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="grid grid-cols-2 lg:grid-cols-4 border-y hairline-strong">
        {[
          { label: "Members", value: String(team.members.length).padStart(2, "0") },
          { label: "Live Projects", value: String(team.projects.length).padStart(2, "0") },
          { label: "Rituals / Week", value: String(team.rituals.length).padStart(2, "0") },
          { label: "Division", value: team.num },
        ].map((s, i, arr) => (
          <div
            key={s.label}
            className={`p-6 lg:p-10 ${i < arr.length - 1 ? "lg:border-r hairline-strong" : ""} ${i < 2 ? "border-b lg:border-b-0 hairline-strong" : ""} ${i % 2 === 0 ? "border-r hairline-strong lg:border-r" : ""}`}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/40 mb-6">
              {s.label}
            </div>
            <div className={`font-serif text-6xl lg:text-7xl leading-none tracking-tighter ${i === 1 ? accentText[team.accent] : ""}`}>
              {s.value}
            </div>
          </div>
        ))}
      </section>

      {/* RITUALS + STACK */}
      <section className="px-6 lg:px-12 py-24 grid grid-cols-12 gap-6 border-b hairline-strong">
        <div className="col-span-12 lg:col-span-7">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50 mb-6">
            ¶ Rituals
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl tracking-tighter mb-10">
            How we <span className="serif-italic">show up</span>.
          </h2>
          <ul className="divide-y hairline">
            {team.rituals.map((r) => (
              <li key={r.title} className="py-5 grid grid-cols-12 gap-3 items-baseline">
                <span className={`col-span-12 md:col-span-3 font-serif text-2xl ${accentText[team.accent]}`}>
                  {r.title}
                </span>
                <span className="col-span-6 md:col-span-3 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/60">
                  {r.when}
                </span>
                <span className="col-span-12 md:col-span-6 text-sm text-cream/75 leading-relaxed">
                  {r.about}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-12 lg:col-span-4 lg:col-start-9">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50 mb-6">
            ¶ Stack
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl tracking-tighter mb-10">
            What we <span className="serif-italic">use</span>.
          </h2>
          <div className="glass-soft rounded-2xl p-6">
            <ul className="space-y-3 font-mono text-sm">
              {team.stack.map((s, i) => (
                <li key={s} className="flex items-baseline justify-between gap-4 border-b hairline pb-2 last:border-0">
                  <span className="text-cream/40 text-[10px] uppercase tracking-[0.3em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-cream flex-1 mx-4">{s}</span>
                  <span className={`w-1.5 h-1.5 rounded-full ${accentBg[team.accent]}`} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="px-6 lg:px-12 py-24 border-b hairline-strong">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50 mb-3">
              ¶ Live & recent
            </div>
            <h2 className="font-serif text-5xl lg:text-6xl tracking-tighter">
              Projects in <span className="serif-italic">motion</span>.
            </h2>
          </div>
          <span className="hidden md:inline font-mono text-[10px] uppercase tracking-[0.3em] text-cream/40">
            {team.projects.length} active
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
          {team.projects.map((p, i) => (
            <article
              key={p.title}
              className="group bg-ink p-8 lg:p-10 hover:bg-ink-2 transition-colors duration-500 relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-12 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50">
                <span>P·{String(i + 1).padStart(2, "0")}</span>
                <span className={accentText[team.accent]}>{p.type}</span>
              </div>
              <h3 className="font-serif text-3xl lg:text-4xl tracking-tighter leading-[0.95] mb-4">
                {p.title}
              </h3>
              <p className="text-sm text-cream/70 leading-relaxed mb-8 text-pretty">
                {p.blurb}
              </p>
              <div className="pt-4 border-t hairline flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-cream/60">
                <span>{p.year}</span>
                <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PEOPLE */}
      <section className="px-6 lg:px-12 py-24 border-b hairline-strong">
        <div className="grid grid-cols-12 gap-4 mb-12 items-end">
          <div className="col-span-12 lg:col-span-7">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50 mb-3">
              ¶ Roster
            </div>
            <h2 className="font-serif text-5xl lg:text-7xl tracking-tighter leading-[0.9]">
              The{" "}
              <span className={`serif-italic ${accentText[team.accent]}`}>{team.name}</span>{" "}
              team.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 text-cream/60 text-sm leading-relaxed">
            Hover any card for bio, skills and channels. Leads are highlighted.
          </div>
        </div>

        {leads.length > 0 && (
          <div className="mb-10">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/40 mb-4">
              ¶ Leads
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {leads.map((m, i) => (
                <MemberCard key={m.name} m={m} idx={i} accent={team.accent} />
              ))}
            </div>
          </div>
        )}

        {others.length > 0 && (
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/40 mb-4">
              ¶ Researchers
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
              {others.map((m, i) => (
                <MemberCard key={m.name} m={m} idx={leads.length + i} accent={team.accent} />
              ))}
            </div>
          </div>
        )}
      </section>

      {/* PREV / NEXT */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b hairline-strong">
        <Link
          to="/teams/$slug"
          params={{ slug: prev.slug }}
          className="group p-8 lg:p-12 border-b md:border-b-0 md:border-r hairline-strong hover:bg-ink-2 transition-colors"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/40 mb-4">
            ← Previous division
          </div>
          <div className={`font-serif text-4xl lg:text-5xl tracking-tighter ${accentText[prev.accent]} group-hover:-translate-x-2 transition-transform duration-500`}>
            {prev.name}
          </div>
          <div className="mt-2 font-serif serif-italic text-cream/60">{prev.tagline}</div>
        </Link>
        <Link
          to="/teams/$slug"
          params={{ slug: next.slug }}
          className="group p-8 lg:p-12 text-right hover:bg-ink-2 transition-colors"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/40 mb-4">
            Next division →
          </div>
          <div className={`font-serif text-4xl lg:text-5xl tracking-tighter ${accentText[next.accent]} group-hover:translate-x-2 transition-transform duration-500`}>
            {next.name}
          </div>
          <div className="mt-2 font-serif serif-italic text-cream/60">{next.tagline}</div>
        </Link>
      </section>
    </SiteLayout>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — NSDC × JHSC" },
      {
        name: "description",
        content:
          "Workshops, hackathons, exhibitions and research talks hosted by NSDC-JHSC.",
      },
      { property: "og:title", content: "Events — NSDC × JHSC" },
      {
        property: "og:description",
        content:
          "Workshops, hackathons, exhibitions and research talks hosted by NSDC-JHSC.",
      },
    ],
  }),
  component: EventsPage,
});

const UPCOMING = [
  {
    n: "01",
    date: "12.04.25",
    title: "The Hacker Collective",
    type: "Hackathon",
    loc: "Main Hall / 18:00 → 22:00",
    desc: "48 hours of uninterrupted neural net training, type experiments and caffeine.",
  },
  {
    n: "02",
    date: "15.04.25",
    title: "Design Systems Forum",
    type: "Talk",
    loc: "Virtual / 14:00 → 16:30",
    desc: "Open studio session on building tokens, variants and motion primitives at scale.",
  },
  {
    n: "03",
    date: "22.04.25",
    title: "Aesthetic Anarchy",
    type: "Exhibition",
    loc: "Basement Gallery / All Day",
    desc: "A one-night exhibition of student work — kinetic identities, shaders, glitch.",
  },
];

const PAST = [
  { n: "001", title: "Kinetic Identity V2", tag: "Typography", date: "OCT 2024" },
  { n: "002", title: "Generative Flora", tag: "Algorithmic Art", date: "SEP 2024" },
  { n: "003", title: "Glitch Soundscapes", tag: "Audio-Visual", date: "AUG 2024" },
  { n: "004", title: "Neural Cartography", tag: "Data Science", date: "JUL 2024" },
  { n: "005", title: "Spatial Type Studies", tag: "WebGL", date: "JUN 2024" },
  { n: "006", title: "Council of Pixels", tag: "Exhibition", date: "MAY 2024" },
];

function EventsPage() {
  return (
    <SiteLayout>
      {/* HEADER */}
      <section className="pt-32 lg:pt-40 px-6 lg:px-12 pb-16 lg:pb-24">
        <div className="grid grid-cols-12 gap-4 items-end">
          <div className="col-span-12 lg:col-span-9 animate-rise">
            <span className="text-[10px] uppercase tracking-[0.4em] opacity-50 mb-6 block">
              ¶ 02 / Laboratory
            </span>
            <h1 className="font-display font-extrabold text-[18vw] lg:text-[12vw] leading-[0.85] uppercase tracking-tighter">
              The <span className="outline-text">Calendar</span>
            </h1>
          </div>
          <div className="hidden lg:block col-span-3 text-right text-xs uppercase tracking-widest opacity-60">
            <p>
              All operations <br />
              run in public.
            </p>
          </div>
        </div>
      </section>

      {/* UPCOMING — editorial cards */}
      <section className="px-6 lg:px-12 py-16 border-t border-brand-line">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-2xl lg:text-3xl font-display font-bold uppercase tracking-tight">
            Upcoming
          </h2>
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-50">
            {UPCOMING.length} scheduled
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-brand-line">
          {UPCOMING.map((e) => (
            <article
              key={e.n}
              className="group bg-brand-bg p-8 lg:p-10 hover:bg-brand-accent transition-colors duration-500 cursor-pointer relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-12 text-[10px] uppercase tracking-widest opacity-70 group-hover:opacity-100">
                <span>[ {e.n} / 03 ]</span>
                <span>{e.type}</span>
              </div>
              <div className="font-display text-4xl lg:text-5xl font-bold mb-6 leading-none">
                {e.date}
              </div>
              <h3 className="font-display text-2xl lg:text-3xl font-bold uppercase tracking-tight mb-4">
                {e.title}
              </h3>
              <p className="text-sm leading-relaxed opacity-80 mb-8">{e.desc}</p>
              <div className="border-t border-brand-fg/30 pt-4 flex justify-between items-center text-[10px] uppercase tracking-widest">
                <span>{e.loc}</span>
                <span className="text-lg group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TIMELINE — past */}
      <section className="px-6 lg:px-12 py-32 border-t border-brand-line">
        <div className="grid grid-cols-12 gap-4 mb-12">
          <div className="col-span-12 lg:col-span-3">
            <span className="text-[10px] uppercase tracking-[0.4em] opacity-50">
              ¶ Archive
            </span>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2 className="text-3xl lg:text-5xl font-display font-bold uppercase tracking-tighter">
              Past Operations
            </h2>
          </div>
        </div>

        <div className="space-y-px bg-brand-line">
          {PAST.map((p) => (
            <div
              key={p.n}
              className="group bg-brand-bg py-8 lg:py-10 flex flex-col md:flex-row md:items-center justify-between hover:bg-[#141414] transition-colors px-4 cursor-pointer"
            >
              <div className="flex items-center gap-8">
                <span className="text-xs opacity-40 font-mono">{p.n}</span>
                <h3 className="text-2xl lg:text-3xl font-display font-bold uppercase group-hover:pl-4 group-hover:text-brand-accent transition-all duration-500">
                  {p.title}
                </h3>
              </div>
              <div className="flex items-center gap-6 lg:gap-12 mt-4 md:mt-0">
                <span className="text-[10px] border border-brand-fg/20 px-3 py-1 uppercase tracking-widest">
                  {p.tag}
                </span>
                <span className="text-[10px] opacity-60 uppercase tracking-widest">
                  {p.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

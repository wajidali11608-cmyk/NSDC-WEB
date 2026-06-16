import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NSDC × JHSC — Digital Research Lab" },
      {
        name: "description",
        content:
          "Student-led collective at Jamia Hamdard pushing the edges of design, code and generative systems.",
      },
      { property: "og:title", content: "NSDC × JHSC — Digital Research Lab" },
      {
        property: "og:description",
        content:
          "Student-led collective pushing the edges of design, code and generative systems.",
      },
    ],
  }),
  component: Index,
});

type Stat = {
  n: string;
  label: string;
  value?: string;
  sub?: string;
  accent?: boolean;
  address?: string;
};

const STATS: Stat[] = [
  { n: "01", label: "Members", value: "142", sub: "Active Researchers" },
  { n: "02", label: "Projects", value: "12", sub: "Open Source Nodes", accent: true },
  { n: "03", label: "Status", value: "RUN", sub: "Server Stability 98%" },
  {
    n: "04",
    label: "Location",
    address: "Jamia Hamdard\nDigital Research Lab\nBlock C / 404",
  },
];

const OPS = [
  { id: "001", title: "Kinetic Identity V2", tag: "Typography", date: "Oct 2024" },
  { id: "002", title: "Generative Flora", tag: "Algorithmic Art", date: "Sep 2024" },
  { id: "003", title: "Glitch Soundscapes", tag: "Audio-Visual", date: "Aug 2024" },
  { id: "004", title: "Neural Cartography", tag: "Data Science", date: "Jul 2024" },
  { id: "005", title: "Spatial Type Studies", tag: "WebGL", date: "Jun 2024" },
] as const;

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative pt-32 lg:pt-40 px-6 lg:px-12 pb-24">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-9 animate-rise">
            <h1 className="font-display font-extrabold text-[18vw] lg:text-[14vw] leading-[0.85] uppercase tracking-tighter mb-8">
              Visual <br />
              <span className="outline-text">Anarchy</span>
            </h1>
          </div>

          <div className="hidden lg:flex col-span-1 col-start-12 justify-end">
            <div className="vertical-text flex items-center gap-4 py-4">
              <span className="text-[10px] uppercase tracking-[0.3em] opacity-40">
                Established 2024
              </span>
              <div className="h-24 w-px bg-brand-fg/20" />
              <span className="text-xs font-bold">VOL. 01 / SS</span>
            </div>
          </div>

          <div
            className="col-span-12 lg:col-span-8 lg:col-start-3 relative animate-rise"
            style={{ animationDelay: "150ms" }}
          >
            <div className="absolute -top-6 lg:-top-8 -left-2 lg:-left-6 z-10 bg-brand-accent text-white px-4 py-2 text-[10px] uppercase tracking-widest">
              <span className="inline-block size-1.5 bg-white rounded-full mr-2 animate-pulse-dot align-middle" />
              Current Experiment: Neural Graphics
            </div>
            <img
              src={heroImg}
              alt="Geometric neon light sculpture in a dark room"
              width={1280}
              height={1600}
              className="w-full aspect-[4/5] object-cover outline outline-1 -outline-offset-1 outline-white/10 grayscale contrast-125"
            />
            <div className="absolute bottom-6 lg:bottom-8 right-6 lg:right-8 max-w-xs text-right bg-brand-bg/70 backdrop-blur-sm p-4">
              <p className="text-sm leading-relaxed mb-4">
                Pushing the boundaries of digital expression through rigorous
                experimentation and collective failure.
              </p>
              <Link
                to="/teams"
                className="inline-block border border-brand-fg px-6 py-2 hover:bg-brand-fg hover:text-brand-bg transition-all text-xs uppercase tracking-widest"
              >
                View the Manifesto →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DATA STRIP */}
      <section className="border-t border-brand-line">
        <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-brand-line">
          {STATS.map((s, i) => (
            <div
              key={s.n}
              className={`p-6 lg:p-8 ${i < STATS.length - 1 ? "border-r border-brand-line" : ""} ${
                i < 2 ? "border-b lg:border-b-0 border-brand-line" : ""
              }`}
            >
              <span className="text-xs opacity-50 block mb-6 lg:mb-8 uppercase tracking-widest">
                {s.n} / {s.label}
              </span>
              {s.value && (
                <>
                  <div
                    className={`text-5xl lg:text-6xl font-display font-bold ${s.accent ? "text-brand-accent" : ""}`}
                  >
                    {s.value}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest mt-2 block opacity-70">
                    {s.sub}
                  </span>
                </>
              )}
              {s.address && (
                <div className="text-base lg:text-xl font-bold leading-tight uppercase whitespace-pre-line">
                  {s.address}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="px-6 lg:px-12 py-32 grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-3">
          <span className="text-[10px] uppercase tracking-[0.4em] opacity-50">
            ¶ 01 / Manifesto
          </span>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <p className="font-display text-3xl lg:text-5xl leading-tight tracking-tight text-balance">
            We are <span className="text-brand-accent">NSDC-JHSC</span> — a
            research lab disguised as a student club. We study type, train
            models, glitch sound, and ship things that should not exist. We
            believe the best work happens when{" "}
            <span className="outline-text">discipline</span> meets{" "}
            <span className="italic">noise</span>.
          </p>
        </div>
      </section>

      {/* RECENT OPERATIONS */}
      <section className="px-6 lg:px-12 py-32 border-t border-brand-line">
        <div className="flex justify-between items-end mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-display font-bold uppercase tracking-tighter">
            Recent Operations
          </h2>
          <Link
            to="/events"
            className="hidden md:inline text-[10px] uppercase tracking-[0.4em] mb-2 hover:text-brand-accent transition-colors"
          >
            → Full Archive
          </Link>
        </div>

        <div className="space-y-px bg-brand-line">
          {OPS.map((op) => (
            <div
              key={op.id}
              className="group bg-brand-bg py-8 lg:py-10 flex flex-col md:flex-row md:items-center justify-between hover:bg-[#141414] transition-colors px-4 cursor-pointer"
            >
              <div className="flex items-center gap-8">
                <span className="text-xs opacity-40 font-mono">{op.id}</span>
                <h3 className="text-2xl lg:text-3xl font-display font-bold uppercase group-hover:pl-4 group-hover:text-brand-accent transition-all duration-500">
                  {op.title}
                </h3>
              </div>
              <div className="flex items-center gap-6 lg:gap-12 mt-4 md:mt-0">
                <span className="text-[10px] border border-brand-fg/20 px-3 py-1 uppercase tracking-widest">
                  {op.tag}
                </span>
                <span className="text-[10px] opacity-60 uppercase tracking-widest">
                  {op.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-12 py-32 border-t border-brand-line">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2 text-center">
            <h2 className="font-display font-extrabold text-[14vw] lg:text-[10vw] leading-[0.9] uppercase tracking-tighter">
              Join the <br />
              <span className="text-brand-accent">Collective.</span>
            </h2>
            <Link
              to="/contact"
              className="inline-block mt-8 border border-brand-fg px-8 py-3 hover:bg-brand-accent hover:border-brand-accent hover:text-white transition-all text-xs uppercase tracking-[0.3em]"
            >
              Initiate Contact →
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/teams")({
  head: () => ({
    meta: [
      { title: "Teams — NSDC × JHSC" },
      {
        name: "description",
        content:
          "The collective: Tech, Data Science, Media, Content, Social Media and Core teams of NSDC-JHSC.",
      },
      { property: "og:title", content: "Teams — NSDC × JHSC" },
      {
        property: "og:description",
        content:
          "The collective: Tech, Data Science, Media, Content, Social Media and Core teams.",
      },
    ],
  }),
  component: TeamsPage,
});

type Member = { name: string; role: string; lead?: boolean };

type Team = {
  n: string;
  name: string;
  brief: string;
  members: Member[];
};

const TEAMS: Team[] = [
  {
    n: "01",
    name: "Core",
    brief:
      "The directional council — vision, strategy and the constitution of the lab.",
    members: [
      { name: "Aarav Khan", role: "President", lead: true },
      { name: "Mira Choi", role: "Vice President", lead: true },
      { name: "Lucas Vane", role: "General Secretary" },
      { name: "Isha Gupta", role: "Treasurer" },
    ],
  },
  {
    n: "02",
    name: "Tech",
    brief:
      "Engineers and shader-poets. We build the infrastructure that holds everything up.",
    members: [
      { name: "Sarah Malik", role: "Tech Lead", lead: true },
      { name: "Devansh Roy", role: "Backend" },
      { name: "Priya Nair", role: "Frontend" },
      { name: "Omar Siddiqui", role: "WebGL" },
      { name: "Tanvi Shah", role: "DevOps" },
    ],
  },
  {
    n: "03",
    name: "Data Science",
    brief:
      "Models, notebooks, and the search for signal. Applied ML and statistical storytelling.",
    members: [
      { name: "Aditya Verma", role: "DS Lead", lead: true },
      { name: "Zara Hussain", role: "ML Research" },
      { name: "Karan Mehta", role: "NLP" },
      { name: "Nikita Bose", role: "Analytics" },
    ],
  },
  {
    n: "04",
    name: "Media",
    brief:
      "Cameras, color, and motion. We document the lab and produce its visual archive.",
    members: [
      { name: "Leo Thompson", role: "Media Head", lead: true },
      { name: "Sana Iqbal", role: "Photography" },
      { name: "Rohan Das", role: "Video" },
      { name: "Avni Sharma", role: "Sound" },
    ],
  },
  {
    n: "05",
    name: "Content",
    brief:
      "Writers, editors and ghosts of the manifesto. Words that earn their pixels.",
    members: [
      { name: "Anaya Joshi", role: "Content Head", lead: true },
      { name: "Vikram Singh", role: "Long-form" },
      { name: "Riya Sen", role: "Editorial" },
      { name: "Kabir Ahmed", role: "Research" },
    ],
  },
  {
    n: "06",
    name: "Social Media",
    brief:
      "The public-facing antenna. We translate research into rhythm — posts, reels, threads.",
    members: [
      { name: "Sia Solano", role: "Social Lead", lead: true },
      { name: "Aryan Kapoor", role: "Strategy" },
      { name: "Maya Rahman", role: "Design" },
      { name: "Ishan Verma", role: "Community" },
    ],
  },
];

function MemberCard({ m, idx }: { m: Member; idx: number }) {
  // pseudo-portrait: gradient block with monogram, brutalist style
  const initials = m.name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
  return (
    <div className="group relative">
      <div className="relative aspect-[4/5] bg-[#141414] overflow-hidden outline outline-1 -outline-offset-1 outline-white/10">
        {/* monogram portrait surrogate */}
        <div className="absolute inset-0 grid place-items-center font-display text-[8rem] font-extrabold text-brand-fg/5 group-hover:text-brand-accent/30 transition-colors duration-700">
          {initials}
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-bg via-transparent to-transparent" />
        {/* hover reveal */}
        <div className="absolute inset-0 bg-brand-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-end p-4">
          <span className="text-[10px] uppercase tracking-widest text-white/70 mb-1">
            → Read profile
          </span>
          <span className="font-display font-bold text-xl text-white">
            {m.name}
          </span>
        </div>
        {/* corner index */}
        <div className="absolute top-3 left-3 text-[10px] font-mono opacity-50">
          {String(idx + 1).padStart(2, "0")}
        </div>
        {m.lead && (
          <div className="absolute top-3 right-3 bg-brand-accent text-white px-2 py-0.5 text-[9px] uppercase tracking-widest">
            Lead
          </div>
        )}
      </div>
      <div className="pt-4 flex justify-between items-baseline">
        <span className="font-display font-bold uppercase tracking-tight">
          {m.name}
        </span>
        <span className="text-[10px] uppercase tracking-widest opacity-60">
          {m.role}
        </span>
      </div>
    </div>
  );
}

function TeamSection({ team }: { team: Team }) {
  return (
    <section className="px-6 lg:px-12 py-24 border-t border-brand-line">
      <div className="grid grid-cols-12 gap-4 mb-12 items-end">
        <div className="col-span-12 lg:col-span-4">
          <span className="text-[10px] uppercase tracking-[0.4em] opacity-50 mb-4 block">
            ¶ {team.n} / Division
          </span>
          <h2 className="font-display font-extrabold text-6xl lg:text-8xl uppercase tracking-tighter leading-none">
            {team.name}
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-6 lg:col-start-7">
          <p className="text-base lg:text-lg leading-relaxed text-balance opacity-80">
            {team.brief}
          </p>
          <div className="mt-4 text-[10px] uppercase tracking-widest opacity-50">
            {team.members.length} active members
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
        {team.members.map((m, i) => (
          <MemberCard key={m.name} m={m} idx={i} />
        ))}
      </div>
    </section>
  );
}

function TeamsPage() {
  return (
    <SiteLayout>
      <section className="pt-32 lg:pt-40 px-6 lg:px-12 pb-16">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-10 animate-rise">
            <span className="text-[10px] uppercase tracking-[0.4em] opacity-50 mb-6 block">
              ¶ 03 / Archives
            </span>
            <h1 className="font-display font-extrabold text-[18vw] lg:text-[12vw] leading-[0.85] uppercase tracking-tighter">
              The <br />
              <span className="outline-text">Collective</span>
            </h1>
          </div>
        </div>
        <p className="mt-8 max-w-xl text-sm uppercase tracking-widest opacity-70 leading-loose">
          Six divisions. One lab. Each cell ships independently —
          together we make noise that the council can hear.
        </p>
      </section>

      {TEAMS.map((t) => (
        <TeamSection key={t.n} team={t} />
      ))}
    </SiteLayout>
  );
}

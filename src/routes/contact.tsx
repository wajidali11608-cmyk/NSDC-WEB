import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useState } from "react";
import { TEAMS } from "@/data/teams";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Signal — NSDC-JHSC" },
      {
        name: "description",
        content:
          "Apply to join, propose a collab, or send a signal to NSDC-JHSC. We answer within seven days.",
      },
      { property: "og:title", content: "Signal — NSDC-JHSC" },
      {
        property: "og:description",
        content: "Apply, collaborate or send the lab a signal.",
      },
    ],
  }),
  component: ContactPage,
});

function Field({
  n,
  label,
  children,
}: {
  n: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block group">
      <div className="flex items-baseline justify-between mb-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/60 group-focus-within:text-cyan transition-colors">
          {label}
        </span>
        <span className="font-mono text-[10px] text-cream/30">{n}</span>
      </div>
      {children}
    </label>
  );
}

const inputCls =
  "w-full bg-transparent border-b hairline-strong py-3 text-base focus:outline-none focus:border-cyan transition-colors placeholder:text-cream/30 font-serif";

function CustomSelect({
  n,
  label,
  options,
  value,
  onChange,
  placeholder,
}: {
  n: string;
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) {
  const [open, setOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div className="relative group mb-10" onMouseMove={handleMouseMove}>
      {/* Label section matching Field component */}
      <div className="flex items-baseline justify-between mb-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/60 group-focus-within:text-cyan transition-colors">
          {label}
        </span>
        <span className="font-mono text-[10px] text-cream/30">{n}</span>
      </div>

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-full text-left bg-white/[0.01] border-b py-6 text-3xl lg:text-4xl flex justify-between items-center group/btn transition-all duration-1000 relative overflow-hidden ${open ? "border-cyan" : "hairline-strong hover:bg-white/[0.03]"}`}
      >
        <span className={`font-serif tracking-tighter transition-all duration-1000 relative z-10 ${value ? "text-cream" : "text-cream/10 italic"}`}>
          {value || placeholder}
        </span>

        {/* Deconstructed Toggle */}
        <div className="relative w-8 h-8 grid place-items-center z-10">
          <div className={`absolute w-4 h-[1px] bg-cyan transition-all duration-1000 ${open ? "rotate-45 translate-x-3 translate-y-3 opacity-0" : ""}`} />
          <div className={`absolute w-4 h-[1px] bg-cyan transition-all duration-1000 ${open ? "-rotate-45 -translate-x-3 -translate-y-3 opacity-0" : ""}`} />

          {/* Open State Geometry */}
          <div className={`absolute w-full h-[1.5px] bg-cyan transition-all duration-1000 ${open ? "scale-x-125 opacity-100" : "scale-x-0 opacity-0"}`} />
          <div className={`absolute top-0 right-0 font-mono text-[8px] text-cyan transition-all duration-1000 ${open ? "opacity-100 translate-y-[-12px]" : "opacity-0"}`}>[ SHIFT ]</div>
        </div>

        {/* Lens Flare Logic */}
        <div
          className="absolute inset-0 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-1000 pointer-events-none"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}% ${mousePos.y}%, rgba(110, 240, 255, 0.4), transparent 60%)`
          }}
        />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-[60] bg-[#050510]/60 backdrop-blur-md transition-all duration-1000 animate-fade-in" onClick={() => setOpen(false)} />
          <div className="absolute z-[70] top-full left-0 right-0 glass-strong border-x border-b border-cyan/40 overflow-hidden animate-rise origin-top shadow-[0_50px_120px_rgba(0,0,0,0.9)] mt-[2px]">
            <div className="noise opacity-40 pointer-events-none mix-blend-overlay" />

            {/* Header Readout */}
            <div className="px-6 py-2 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
              <span className="font-mono text-[7px] text-cream/30 tracking-[0.4em]">INITIATING_ARCHIVE_UPLINK</span>
              <span className="font-mono text-[7px] text-cyan/60 animate-pulse">● LIVE_SIGNAL</span>
            </div>

            <div className="p-1 max-h-[400px] overflow-y-auto scrollbar-hide relative z-10">
              {options.map((opt, i) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    onChange(opt);
                    setOpen(false);
                  }}
                  className={`w-full text-left px-8 py-6 transition-all duration-700 overflow-hidden group/opt flex items-center gap-10 relative ${value === opt ? "bg-cyan text-ink" : "text-cream/40 hover:text-cyan hover:bg-white/[0.04]"
                    }`}
                >
                  {/* Coordinate Indexing */}
                  <div className="flex flex-col items-center">
                    <span className={`font-mono text-[9px] mb-1 leading-none ${value === opt ? "text-ink" : "text-cyan/60"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`font-mono text-[6px] opacity-40 tracking-tighter ${value === opt ? "text-ink" : ""}`}>
                      [72.{i + 4}, 0{i + 1}]
                    </span>
                  </div>

                  {/* Liquid Elastic Typography */}
                  <span className={`font-serif text-3xl tracking-tight transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/opt:scale-x-[1.08] group-hover/opt:translate-x-4 group-hover/opt:italic`}>
                    {opt}
                  </span>

                  {value === opt && (
                    <div className="ml-auto flex items-center gap-4">
                      <span className="font-mono text-[8px] animate-pulse">SELECTED</span>
                      <div className="w-2.5 h-2.5 rounded-full bg-ink" />
                    </div>
                  )}

                  {/* Side Selection Bar */}
                  <div className={`absolute left-0 top-0 bottom-0 w-[3px] bg-cyan scale-y-0 group-hover/opt:scale-y-100 transition-transform duration-700 origin-bottom ${value === opt ? "hidden" : ""}`} />
                </button>
              ))}
            </div>

            {/* Global Benchmark Footer */}
            <div className="bg-cyan/5 h-10 w-full flex items-center overflow-hidden border-t border-white/5 relative">
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050510] to-transparent z-20 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050510] to-transparent z-20 pointer-events-none" />
              <div className="animate-marquee-slow whitespace-nowrap font-mono text-[7px] uppercase tracking-[0.8em] text-cyan/30">
                SYSTEM_ID: NSDC-JHSC // ARCHIVE_INTAKE_SESSION // TRANSMISSION_STABLE // COORDINATE_SET_{n.split('.')[0]} // UPLINK_CORE_STBY //&nbsp;
              </div>
              <div className="animate-marquee-slow whitespace-nowrap font-mono text-[7px] uppercase tracking-[0.8em] text-cyan/30">
                SYSTEM_ID: NSDC-JHSC // ARCHIVE_INTAKE_SESSION // TRANSMISSION_STABLE // COORDINATE_SET_{n.split('.')[0]} // UPLINK_CORE_STBY //&nbsp;
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [intent, setIntent] = useState("Apply 26/27");
  const [division, setDivision] = useState("");
  const [year, setYear] = useState("");

  const applyTeams = TEAMS.filter(t => t.slug !== "core").map(t => t.name);
  const years = ["First Year", "Second Year", "Third Year", "Final Year"];

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
              <span>¶ 04 / Signal</span>
              <span className="opacity-40">/</span>
              <span>Mean reply time · 3.2 days</span>
            </div>
            <h1 className="font-serif text-[15vw] lg:text-[11vw] leading-[0.88] tracking-tighter">
              Initialize
              <br />
              <span className="serif-italic gradient-text">uplink.</span>
            </h1>
          </div>
          <div className="hidden lg:block col-span-3 text-right">
            <p className="font-serif serif-italic text-cream/70 text-lg leading-snug">
              Applications open.<br />
              Signals encrypted.<br />
              Doors are honest.
            </p>
          </div>
        </div>
      </section>

      {/* INFO STRIP */}
      <section className="grid grid-cols-1 lg:grid-cols-3 border-y hairline-strong">
        {[
          { n: "01", label: "Email", value: "lab@nsdc-jhsc.in", sub: "All inquiries · 7-day reply" },
          { n: "02", label: "HQ", value: "Jamia Hamdard University", sub: "New Delhi, India" },
          { n: "03", label: "Hours", value: "Mon — Fri", sub: "10:00 → 18:00 IST" },
        ].map((c, i) => (
          <div
            key={c.n}
            className={`p-6 lg:p-10 ${i < 2 ? "border-b lg:border-b-0 lg:border-r hairline-strong" : ""}`}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/40 mb-6">
              ¶ {c.n} · {c.label}
            </div>
            <div className="font-serif text-3xl lg:text-4xl tracking-tighter leading-none">
              {c.value}
            </div>
            <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/60">
              {c.sub}
            </div>
          </div>
        ))}
      </section>

      {/* FORM + MAP */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="px-6 lg:px-12 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r hairline-strong"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50 mb-3">
            ¶ Transmission form
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl tracking-tighter mb-12">
            Tell us why<br />
            you're <span className="serif-italic text-cyan">here</span>.
          </h2>

          <div className="mb-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/60 mb-3">Priority</div>
            <div className="flex flex-wrap gap-2">
              {["Apply 26/27", "Collaborate", "Sponsor", "Other"].map((opt) => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setIntent(opt)}
                  className={`px-4 py-2 rounded-full font-mono text-[10px] uppercase tracking-[0.2em] border hairline-strong transition-colors ${intent === opt ? "bg-cyan text-ink border-cyan" : "hover:bg-cream/5"
                    }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Field n="1.1" label="Identity">
              <input required type="text" placeholder="Your name" className={inputCls} />
            </Field>
            <Field n="1.2" label="Uplink">
              <input required type="email" placeholder="you@domain.io" className={inputCls} />
            </Field>
          </div>

          {intent === "Apply 26/27" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <CustomSelect
                n="2.1"
                label="Division"
                options={applyTeams}
                value={division}
                onChange={setDivision}
                placeholder="Select division"
              />
              <CustomSelect
                n="2.2"
                label="Year of Study"
                options={years}
                value={year}
                onChange={setYear}
                placeholder="Select year"
              />
            </div>
          )}

          <div className="mb-10">
            <Field n="3.1" label="The signal">
              <textarea
                required
                rows={5}
                placeholder="A few honest sentences about what you want to make with us."
                className={inputCls + " resize-none"}
              />
            </Field>
          </div>

          <button
            type="submit"
            disabled={submitted}
            className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-cyan text-ink font-mono text-[11px] uppercase tracking-[0.18em] hover:bg-cream transition-colors disabled:opacity-80"
          >
            {submitted ? "Uplink established ✓" : "Commit payload"}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </form>

        {/* MAP */}
        <div className="relative min-h-[480px] lg:min-h-full bg-ink-2 overflow-hidden">
          <iframe
            title="NSDC-JHSC location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=77.245%2C28.510%2C77.258%2C28.517&layer=mapnik&marker=28.5133%2C77.2514"
            className="absolute inset-0 w-full h-full grayscale contrast-125 invert opacity-60"
            loading="lazy"
          />
          <div className="absolute inset-0 pointer-events-none mix-blend-overlay bg-cyan/15" />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-ink via-transparent to-transparent" />

          <div className="absolute top-6 left-6 right-6 flex justify-between items-start font-mono text-[10px] uppercase tracking-[0.3em] pointer-events-none">
            <span className="px-2 py-1 rounded-full glass">28.5133° N · 77.2514° E</span>
            <span className="px-2 py-1 rounded-full bg-cyan text-ink flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-ink animate-pulse-dot" />
              Live
            </span>
          </div>
          <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
            <div className="font-serif text-5xl lg:text-7xl tracking-tighter leading-[0.9] mix-blend-difference">
              Jamia Hamdard<br />
              <span className="serif-italic">University.</span>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="px-6 lg:px-12 py-24 border-t hairline-strong">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50 mb-3">
              ¶ Frequencies
            </div>
            <h2 className="font-serif text-5xl lg:text-6xl tracking-tighter">
              Follow the<br />
              <span className="serif-italic text-cyan">signal</span>.
            </h2>
          </div>
          <p className="font-serif text-cream/70 max-w-xs leading-relaxed">
            Six channels. We broadcast almost daily — you can mute four and
            still get the work.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-line">
          {["Instagram", "Twitter", "LinkedIn", "GitHub", "Discord", "YouTube"].map((s, i) => (
            <a
              key={s}
              href="#"
              className="group bg-ink aspect-square flex flex-col justify-between p-5 lg:p-6 hover:bg-ink-2 transition-colors relative overflow-hidden"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="font-serif text-2xl lg:text-3xl tracking-tighter leading-none group-hover:text-cyan transition-colors">
                  {s}
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50">
                  @nsdc.jhsc <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">↗</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </SiteLayout >
  );
}

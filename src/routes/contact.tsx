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

// REPLACE THIS with your deployed Google Apps Script URL (see google_sheets_setup.md)
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx0RotdSVjeyw0LrWfizqv_G41kwonNKFopTYFETfktZYj0xpYdXdCLxTwa1IG5BG9v/exec";

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [intent, setIntent] = useState("Apply 26/27");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [division, setDivision] = useState("");
  const [year, setYear] = useState("");

  const applyTeams = TEAMS.filter(t => t.slug !== "core").map(t => t.name);
  const years = ["First Year", "Second Year", "Third Year", "Final Year"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSending(true);

    const payload = {
      name,
      email,
      intent,
      division: intent === "Apply 26/27" ? division : "",
      year: intent === "Apply 26/27" ? year : "",
      message,
    };

    try {
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // no-cors always returns opaque response, so we trust it went through
      setSubmitted(true);
    } catch (err) {
      setError("Transmission failed. Check your connection and retry.");
    } finally {
      setSending(false);
    }
  };

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
            <h1 className="font-serif text-[13vw] sm:text-[15vw] lg:text-[11vw] leading-[0.88] tracking-tighter">
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
          { n: "01", label: "Email", value: "nsdcjhsc@gmail.com", sub: "All inquiries · 7-day reply" },
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
          onSubmit={handleSubmit}
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
                  disabled={sending || submitted}
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
              <input
                required
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={sending || submitted}
                className={inputCls}
              />
            </Field>
            <Field n="1.2" label="Uplink">
              <input
                required
                type="email"
                placeholder="you@domain.io"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={sending || submitted}
                className={inputCls}
              />
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={sending || submitted}
                className={inputCls + " resize-none"}
              />
            </Field>
          </div>

          {/* Error message */}
          {error && (
            <div className="mb-6 px-4 py-3 rounded-lg border border-red-500/40 bg-red-500/10 font-mono text-[11px] text-red-400 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={sending || submitted}
            className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-cyan text-ink font-mono text-[11px] uppercase tracking-[0.18em] hover:bg-cream transition-colors disabled:opacity-80"
          >
            {submitted ? (
              "Uplink established ✓"
            ) : sending ? (
              <>
                <span className="inline-block w-3 h-3 border-2 border-ink/30 border-t-ink rounded-full animate-spin" />
                Transmitting...
              </>
            ) : (
              "Commit payload"
            )}
            {!sending && !submitted && (
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            )}
          </button>

          {/* Success confirmation */}
          {submitted && (
            <div className="mt-8 p-6 rounded-lg border border-cyan/20 bg-cyan/5 animate-rise">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse-dot" />
                Signal received
              </div>
              <p className="font-serif text-cream/80 text-sm leading-relaxed">
                Your transmission has been logged. We'll review it and get back to you
                at <span className="text-cyan">{email}</span> within 7 days.
              </p>
            </div>
          )}
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
            Four channels. We broadcast almost daily — you can mute three and
            still get the work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
          {[
            {
              name: "Instagram",
              handle: "@nsdc.jhsc",
              sub: "Visual logs & events",
              href: "https://www.instagram.com/nsdc.jhsc",
              icon: (
                <svg className="w-7 h-7 transition-colors duration-500 group-hover:text-cyan text-cream/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              ),
              bgSvg: (
                <svg className="w-36 h-36 text-cream/5 group-hover:text-cyan/10 transition-colors duration-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                </svg>
              ),
            },
            {
              name: "LinkedIn",
              handle: "NSDC Jamia Hamdard",
              sub: "Professional network",
              href: "https://www.linkedin.com/company/nsdc-jamia-hamdard/",
              icon: (
                <svg className="w-7 h-7 transition-colors duration-500 group-hover:text-cyan text-cream/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              ),
              bgSvg: (
                <svg className="w-36 h-36 text-cream/5 group-hover:text-cyan/10 transition-colors duration-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                </svg>
              ),
            },
            {
              name: "GitHub",
              handle: "@nsdc-jhsc",
              sub: "Open source repositories",
              href: "https://github.com",
              icon: (
                <svg className="w-7 h-7 transition-colors duration-500 group-hover:text-cyan text-cream/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              ),
              bgSvg: (
                <svg className="w-36 h-36 text-cream/5 group-hover:text-cyan/10 transition-colors duration-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                </svg>
              ),
            },
            {
              name: "Discord",
              handle: "NSDC Community",
              sub: "Developer discord server",
              href: "https://discord.gg",
              icon: (
                <svg className="w-7 h-7 transition-colors duration-500 group-hover:text-cyan text-cream/80" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              ),
              bgSvg: (
                <svg className="w-36 h-36 text-cream/5 group-hover:text-cyan/10 transition-colors duration-700" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028z" />
                </svg>
              ),
            },
          ].map((s, i) => (
            <a
              key={s.name}
              href={s.href}
              target={s.href !== "#" ? "_blank" : undefined}
              rel={s.href !== "#" ? "noopener noreferrer" : undefined}
              className="group bg-ink min-h-[260px] lg:min-h-[290px] flex flex-col justify-between p-6 lg:p-8 hover:bg-ink-2 transition-all duration-500 relative overflow-hidden border border-transparent hover:border-cyan/30"
            >
              {/* Background watermark icon */}
              <div className="absolute -right-6 -bottom-6 pointer-events-none transform rotate-12 group-hover:scale-110 transition-transform duration-700">
                {s.bgSvg}
              </div>

              {/* Header section with index number and logo badge */}
              <div className="flex justify-between items-start relative z-10">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/40">
                  [{String(i + 1).padStart(2, "0")}]
                </span>
                
                {/* Logo Badge Container */}
                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 group-hover:border-cyan/50 group-hover:bg-cyan/10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-lg group-hover:shadow-[0_0_25px_rgba(110,240,255,0.25)]">
                  {s.icon}
                </div>
              </div>

              {/* Footer section with platform info */}
              <div className="relative z-10 mt-12">
                <div className="font-serif text-3xl lg:text-4xl tracking-tighter leading-none group-hover:text-cyan transition-colors duration-300">
                  {s.name}
                </div>
                <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-cream/70 flex items-center gap-1 group-hover:text-cream transition-colors">
                  <span>{s.handle}</span>
                  <span className="inline-block group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300 text-cyan">↗</span>
                </div>
                <div className="mt-1 font-mono text-[9px] text-cream/40 tracking-wider">
                  {s.sub}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </SiteLayout >
  );
}

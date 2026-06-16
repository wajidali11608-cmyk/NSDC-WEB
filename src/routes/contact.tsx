import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Signal — NSDC × JHSC" },
      {
        name: "description",
        content:
          "Apply to join, propose a collab, or send a signal to NSDC × JHSC. We answer within seven days.",
      },
      { property: "og:title", content: "Signal — NSDC × JHSC" },
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

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [intent, setIntent] = useState("Apply 25/26");

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative pt-36 lg:pt-48 px-6 lg:px-12 pb-20 overflow-hidden">
        <div className="aurora opacity-40" />
        <div className="noise" />
        <div className="relative z-10 grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-10 animate-rise">
            <div className="flex items-center gap-3 mb-8 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse-dot" />
              <span>¶ 04 / Signal</span>
              <span className="opacity-40">/</span>
              <span>Mean reply time · 3.2 days</span>
            </div>
            <h1 className="font-serif text-[15vw] lg:text-[11vw] leading-[0.88] tracking-tighter">
              Send a<br />
              <span className="serif-italic gradient-text">signal</span>.
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-4 mt-8 animate-rise" style={{ animationDelay: "150ms" }}>
            <p className="font-serif text-xl lg:text-2xl leading-snug text-pretty text-cream/85">
              Applications for Session 25/26 are open across every division.
              You can also reach out for collaborations, sponsorships, or just
              to tell us we are wrong.
            </p>
          </div>
        </div>
      </section>

      {/* INFO STRIP */}
      <section className="grid grid-cols-1 lg:grid-cols-3 border-y hairline-strong">
        {[
          { n: "01", label: "Email", value: "lab@nsdc-jhsc.in", sub: "All inquiries · 7-day reply" },
          { n: "02", label: "HQ", value: "Jai Hind College", sub: "Churchgate, Mumbai 400020" },
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
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/60 mb-3">Intent</div>
            <div className="flex flex-wrap gap-2">
              {["Apply 25/26", "Collaborate", "Sponsor", "Other"].map((opt) => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setIntent(opt)}
                  className={`px-4 py-2 rounded-full font-mono text-[10px] uppercase tracking-[0.2em] border hairline-strong transition-colors ${
                    intent === opt ? "bg-cyan text-ink border-cyan" : "hover:bg-cream/5"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Field n="A1" label="Identity">
              <input required type="text" placeholder="Your name" className={inputCls} />
            </Field>
            <Field n="A2" label="Uplink">
              <input required type="email" placeholder="you@domain.io" className={inputCls} />
            </Field>
          </div>

          {intent === "Apply 25/26" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Field n="B1" label="Division">
                <select className={inputCls + " appearance-none"}>
                  <option className="bg-ink">Core</option>
                  <option className="bg-ink">Tech</option>
                  <option className="bg-ink">Data Science</option>
                  <option className="bg-ink">Media</option>
                  <option className="bg-ink">Content</option>
                  <option className="bg-ink">Social Media</option>
                </select>
              </Field>
              <Field n="B2" label="Portfolio / link">
                <input type="url" placeholder="https://" className={inputCls} />
              </Field>
            </div>
          )}

          <div className="mb-10">
            <Field n="C1" label="The signal">
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
            {submitted ? "Signal received ✓" : "Transmit signal"}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </form>

        {/* MAP */}
        <div className="relative min-h-[480px] lg:min-h-full bg-ink-2 overflow-hidden">
          <iframe
            title="NSDC × JHSC location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=72.8175%2C18.9305%2C72.8295%2C18.9385&layer=mapnik&marker=18.9345%2C72.8235"
            className="absolute inset-0 w-full h-full grayscale contrast-125 invert opacity-60"
            loading="lazy"
          />
          <div className="absolute inset-0 pointer-events-none mix-blend-overlay bg-cyan/15" />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-ink via-transparent to-transparent" />

          <div className="absolute top-6 left-6 right-6 flex justify-between items-start font-mono text-[10px] uppercase tracking-[0.3em] pointer-events-none">
            <span className="px-2 py-1 rounded-full glass">18.9345° N · 72.8235° E</span>
            <span className="px-2 py-1 rounded-full bg-cyan text-ink flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-ink animate-pulse-dot" />
              Live
            </span>
          </div>
          <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
            <div className="font-serif text-5xl lg:text-7xl tracking-tighter leading-[0.9] mix-blend-difference">
              Jai Hind<br />
              <span className="serif-italic">College.</span>
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
    </SiteLayout>
  );
}

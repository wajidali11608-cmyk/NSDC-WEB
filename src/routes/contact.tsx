import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — NSDC × JHSC" },
      {
        name: "description",
        content:
          "Initiate contact with NSDC-JHSC. Inquiries, collaborations and applications.",
      },
      { property: "og:title", content: "Contact — NSDC × JHSC" },
      {
        property: "og:description",
        content:
          "Initiate contact with NSDC-JHSC. Inquiries, collaborations and applications.",
      },
    ],
  }),
  component: ContactPage,
});

function FieldLabel({ n, children }: { n: string; children: string }) {
  return (
    <div className="flex justify-between items-baseline mb-2">
      <label className="text-[10px] uppercase tracking-[0.3em] opacity-60">
        {children}
      </label>
      <span className="text-[10px] font-mono opacity-30">{n}</span>
    </div>
  );
}

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteLayout>
      <section className="pt-32 lg:pt-40 px-6 lg:px-12 pb-16">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-10 animate-rise">
            <span className="text-[10px] uppercase tracking-[0.4em] opacity-50 mb-6 block">
              ¶ 04 / Initiate
            </span>
            <h1 className="font-display font-extrabold text-[18vw] lg:text-[12vw] leading-[0.85] uppercase tracking-tighter">
              Let's <br />
              <span className="outline-text-accent">Talk.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* INFO STRIP */}
      <section className="border-t border-brand-line grid grid-cols-1 lg:grid-cols-3 border-b border-brand-line">
        {[
          { n: "01", label: "Email", value: "lab@nsdc-jhsc.in" },
          { n: "02", label: "HQ", value: "Jamia Hamdard, New Delhi" },
          { n: "03", label: "Hours", value: "Mon — Fri / 10:00 → 18:00" },
        ].map((c, i) => (
          <div
            key={c.n}
            className={`p-6 lg:p-8 ${i < 2 ? "border-b lg:border-b-0 lg:border-r border-brand-line" : ""}`}
          >
            <span className="text-xs opacity-50 block mb-6 uppercase tracking-widest">
              {c.n} / {c.label}
            </span>
            <div className="font-display text-xl lg:text-2xl font-bold uppercase tracking-tight">
              {c.value}
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
          className="px-6 lg:px-12 py-16 lg:py-24 border-b lg:border-b-0 lg:border-r border-brand-line"
        >
          <h2 className="font-display text-3xl lg:text-4xl font-bold uppercase tracking-tight mb-12">
            Transmission Form
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <FieldLabel n="A1">Identity</FieldLabel>
              <input
                required
                type="text"
                placeholder="Your name"
                className="w-full bg-transparent border-b border-brand-fg/30 py-3 text-base focus:outline-none focus:border-brand-accent transition-colors placeholder:opacity-30"
              />
            </div>
            <div>
              <FieldLabel n="A2">Uplink</FieldLabel>
              <input
                required
                type="email"
                placeholder="you@domain.io"
                className="w-full bg-transparent border-b border-brand-fg/30 py-3 text-base focus:outline-none focus:border-brand-accent transition-colors placeholder:opacity-30"
              />
            </div>
          </div>

          <div className="mb-6">
            <FieldLabel n="B1">Subject</FieldLabel>
            <input
              type="text"
              placeholder="Why are you reaching out?"
              className="w-full bg-transparent border-b border-brand-fg/30 py-3 text-base focus:outline-none focus:border-brand-accent transition-colors placeholder:opacity-30"
            />
          </div>

          <div className="mb-10">
            <FieldLabel n="C1">Transmission</FieldLabel>
            <textarea
              required
              rows={5}
              placeholder="The signal..."
              className="w-full bg-transparent border-b border-brand-fg/30 py-3 text-base focus:outline-none focus:border-brand-accent transition-colors placeholder:opacity-30 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={submitted}
            className="group inline-flex items-center gap-4 border border-brand-fg px-8 py-4 hover:bg-brand-accent hover:border-brand-accent hover:text-white transition-all text-xs uppercase tracking-[0.3em] disabled:bg-brand-accent disabled:border-brand-accent disabled:text-white"
          >
            {submitted ? "Signal Received ✓" : "Transmit Signal"}
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </form>

        {/* MAP */}
        <div className="relative min-h-[480px] lg:min-h-full bg-[#0a0a0a] overflow-hidden">
          <iframe
            title="NSDC-JHSC Location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=77.2745%2C28.5125%2C77.3045%2C28.5325&layer=mapnik&marker=28.5225%2C77.2895"
            className="absolute inset-0 w-full h-full grayscale contrast-125 invert opacity-70"
            loading="lazy"
          />
          <div className="absolute inset-0 pointer-events-none mix-blend-multiply bg-brand-accent/10" />
          <div className="absolute top-6 left-6 right-6 flex justify-between items-start text-[10px] uppercase tracking-[0.3em] pointer-events-none">
            <span>28.5225° N / 77.2895° E</span>
            <span className="bg-brand-accent text-white px-2 py-0.5">
              ● Live
            </span>
          </div>
          <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
            <div className="font-display text-3xl lg:text-4xl font-bold uppercase leading-none mix-blend-difference">
              Jamia <br />
              Hamdard
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="px-6 lg:px-12 py-24 border-t border-brand-line">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12">
          <h2 className="font-display text-4xl lg:text-6xl font-bold uppercase tracking-tighter">
            Follow the <br />
            <span className="text-brand-accent">Signal</span>
          </h2>
          <p className="text-xs uppercase tracking-widest opacity-50 max-w-xs">
            We broadcast across six channels. Pick your frequency.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-brand-line">
          {[
            "Instagram",
            "Twitter",
            "LinkedIn",
            "GitHub",
            "Discord",
            "YouTube",
          ].map((s, i) => (
            <a
              key={s}
              href="#"
              className="group bg-brand-bg aspect-square flex flex-col justify-between p-4 lg:p-6 hover:bg-brand-accent transition-colors"
            >
              <span className="text-[10px] opacity-50 font-mono">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="font-display text-xl lg:text-2xl font-bold uppercase tracking-tight">
                  {s}
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-widest opacity-70 group-hover:opacity-100">
                  → @nsdc.jhsc
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

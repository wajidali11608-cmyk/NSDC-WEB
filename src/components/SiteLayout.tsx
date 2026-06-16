import { Link, useRouterState } from "@tanstack/react-router";
import { type ReactNode, useState } from "react";

const NAV_LINKS = [
  { to: "/", label: "Index" },
  { to: "/events", label: "Laboratory" },
  { to: "/teams", label: "Archives" },
  { to: "/contact", label: "Join (25)" },
] as const;

function Marquee() {
  const items = [
    "NSDC × JHSC // DIGITAL RESEARCH LAB",
    "SESSION 24/25",
    "VOL. 01 — NEURAL GRAPHICS",
    "★",
    "BREAKING THE GRID SINCE 2024",
    "STATUS: RUNNING",
    "★",
  ];
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div className="border-y border-brand-line overflow-hidden bg-brand-bg py-3">
      <div className="animate-marquee whitespace-nowrap">
        {loop.map((t, i) => (
          <span
            key={i}
            className="mx-8 text-[10px] uppercase tracking-[0.4em] text-brand-fg/60"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-fg font-mono">
      {/* Fixed nav with mix-blend-difference */}
      <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 lg:px-12 py-6 lg:py-8 flex justify-between items-start pointer-events-none">
        <Link to="/" className="flex flex-col gap-1 pointer-events-auto">
          <span className="font-display font-bold tracking-tighter text-xl lg:text-2xl">
            NSDC—JHSC
          </span>
          <span className="text-[10px] opacity-60 uppercase tracking-widest">
            Digital Research Lab
          </span>
        </Link>

        {/* desktop nav */}
        <div className="hidden lg:flex flex-col items-end gap-3 uppercase text-[11px] tracking-widest pointer-events-auto">
          {NAV_LINKS.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`hover:text-brand-accent transition-colors ${
                  active ? "underline underline-offset-4" : ""
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden pointer-events-auto flex flex-col items-end gap-1.5 pt-2"
        >
          <span
            className={`block h-px w-8 bg-brand-fg transition-transform ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-brand-fg transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-8 bg-brand-fg transition-transform ${
              menuOpen ? "-translate-y-[5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-bg lg:hidden flex flex-col items-start justify-center px-8 gap-6 animate-rise">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMenuOpen(false)}
              className="font-display text-5xl font-bold uppercase tracking-tighter hover:text-brand-accent transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}

      <main>{children}</main>

      <Marquee />

      {/* Footer */}
      <footer className="px-6 lg:px-12 py-16 lg:py-20 border-t border-brand-line">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          <div className="max-w-md">
            <div className="font-display text-7xl lg:text-8xl font-bold mb-8 leading-none">
              NSDC
            </div>
            <p className="text-xs uppercase tracking-widest leading-loose text-brand-fg/70">
              We do not seek validation. We seek the edge of the screen. Join
              the collective to break the grid.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-4 text-[11px] uppercase tracking-widest">
            {["Instagram", "GitHub", "Discord", "LinkedIn", "Email", "YouTube"].map(
              (s) => (
                <a
                  key={s}
                  href="#"
                  className="opacity-40 hover:opacity-100 hover:text-brand-accent transition-all"
                >
                  → {s}
                </a>
              )
            )}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-brand-line flex flex-col md:flex-row justify-between gap-4 text-[10px] uppercase tracking-[0.3em] text-brand-fg/30">
          <span>© 2024 NSDC × JHSC</span>
          <span>VOL. 01 / NEURAL GRAPHICS</span>
          <span>NO RIGHTS RESERVED</span>
        </div>
      </footer>
    </div>
  );
}

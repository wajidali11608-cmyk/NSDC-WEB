import { Link, useRouterState } from "@tanstack/react-router";
import { type ReactNode, useEffect, useState } from "react";
import logo from "../assets/logo.jpg";


const NAV_LINKS = [
  { to: "/", label: "Home", num: "01" },
  { to: "/events", label: "Projects", num: "02" },
  { to: "/teams", label: "Teams", num: "03" },
  { to: "/contact", label: "Join", num: "04" },
] as const;



function Clock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      const d = new Date();
      const opts: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
      };
      setTime(d.toLocaleTimeString("en-GB", opts) + " IST");
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/50">{time}</span>;
}

function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const h = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setP(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    h();
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-px bg-line">
      <div className="h-full bg-cyan transition-[width] duration-100" style={{ width: `${p}%` }} />
    </div>
  );
}

function Marquee() {
  const items = [
    "NSDC - JHSC",
    "★",
    "BUILDING THE FUTURE",
    "★",
    "STATUS: ACTIVE",
    "★",
    "JOIN THE CLUB",
    "★",
    "ELEVATE YOUR SKILLS",
    "★",

  ];

  const loop = [...items, ...items, ...items];
  return (
    <div className="border-y hairline-strong overflow-hidden bg-ink py-4 relative">
      <div className="animate-marquee whitespace-nowrap font-serif">
        {loop.map((t, i) => (
          <span key={i} className="mx-10 text-2xl lg:text-3xl serif-italic text-cream/80">
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    h();
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <div className="min-h-screen bg-ink text-cream font-sans selection:bg-cyan selection:text-ink">
      <ScrollProgress />

      {/* Floating glass nav */}
      <header className="fixed top-4 left-4 right-4 lg:top-6 lg:left-6 lg:right-6 z-50">
        <nav
          className={`flex items-center justify-between gap-4 px-4 lg:px-6 py-3 lg:py-3.5 rounded-full transition-all duration-500 ${scrolled || menuOpen ? "glass" : "glass-soft"
            }`}
        >
          <Link to="/" className="flex items-center gap-3 group">
            <span className="relative grid place-items-center w-12 h-12 rounded-full bg-cream/5 border hairline-strong overflow-hidden transition-all duration-300">
              <img src={logo} alt="NSDC Logo" className="w-full h-full object-cover" />
              <span className="absolute inset-0 rounded-full border border-cyan/40 group-hover:scale-110 transition-transform pointer-events-none" />
            </span>


            <span className="flex flex-col leading-none">
              <span className="font-serif text-base lg:text-lg tracking-tight">
                NSDC-JHSC
              </span>
              <span className="hidden sm:inline font-mono text-[9px] uppercase tracking-[0.3em] text-cream/40 mt-1">
                Technical Club
              </span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((l) => {
              const active = pathname === l.to || (l.to !== "/" && pathname.startsWith(l.to));
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`group relative px-4 py-2 rounded-full font-mono text-[11px] uppercase tracking-[0.18em] transition-colors ${active
                    ? "text-ink bg-cream"
                    : "text-cream/70 hover:text-cream hover:bg-cream/10"
                    }`}
                >
                  <span className="opacity-50 mr-1.5">{l.num}</span>
                  {l.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden md:flex items-center gap-2">
              <Clock />
            </span>
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan text-ink font-mono text-[11px] uppercase tracking-[0.18em] border border-transparent hover:bg-ink hover:text-cyan hover:border-cyan transition-all duration-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-ink group-hover:bg-cyan animate-pulse-dot" />
              Apply 26/27
            </Link>
            <button
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden grid place-items-center w-9 h-9 rounded-full bg-cream/5 border hairline-strong"
            >
              <span className="relative w-4 h-3 flex flex-col justify-between">
                <span className={`block h-px w-full bg-cream transition-transform ${menuOpen ? "translate-y-[5px] rotate-45" : ""}`} />
                <span className={`block h-px w-full bg-cream transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-px w-full bg-cream transition-transform ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden animate-rise">
          <div className="absolute inset-0 bg-ink/95 backdrop-blur-xl" />
          <div className="relative h-full flex flex-col px-6 pt-28 pb-12">
            <div className="flex-1 flex flex-col gap-3">
              {NAV_LINKS.map((l, i) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="group flex items-baseline justify-between border-b hairline pb-4"
                >
                  <span className="font-serif text-5xl tracking-tight">
                    <span className="text-cyan font-mono text-sm mr-3">{l.num}</span>
                    {l.label}
                  </span>
                  <span className="text-cream/40">→</span>
                </Link>
              ))}
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/40 flex justify-between">
              <span>Delhi · India</span>
              <Clock />
            </div>
          </div>
        </div>
      )}

      <main className="relative">{children}</main>

      <Marquee />

      <footer className="px-6 lg:px-12 py-20 lg:py-28 border-t hairline-strong relative overflow-hidden">
        <div className="aurora opacity-30" />
        <div className="relative z-10 grid grid-cols-12 gap-6 lg:gap-10">
          <div className="col-span-12 lg:col-span-6">
            <div className="font-serif text-[18vw] lg:text-[10vw] leading-[0.85] tracking-tighter">
              Initiate<br /><span className="serif-italic gradient-text">the mission</span>.
            </div>

            <p className="mt-8 max-w-md text-sm text-cream/60 leading-relaxed text-pretty">
              We are a student-led technical club building at the intersection of design,
              code, and the future.
            </p>

          </div>

          <div className="col-span-6 lg:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/40 mb-5">Navigate</div>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="link-underline font-serif text-lg hover:text-cyan transition-colors">{l.label.toUpperCase()}</Link>
                </li>
              ))}
            </ul>

          </div>

          <div className="col-span-6 lg:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/40 mb-5">Signals</div>
            <ul className="space-y-3">

              {["Instagram", "GitHub", "LinkedIn", "Discord"].map((s) => (
                <li key={s}>
                  <a href="#" className="link-underline font-serif text-lg">{s} ↗</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/40 mb-5">HQ</div>
            <p className="font-serif text-base leading-relaxed">
              NSDC-JHSC<br />
              Jamia Hamdard University<br />
              New Delhi, India
            </p>
          </div>
        </div>

        <div className="relative z-10 mt-20 pt-8 border-t hairline flex flex-col md:flex-row justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-cream/40">
          <span>© 2024 NSDC-JHSC </span>
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse-dot" /> UPLINK ACTIVE</span>
        </div>

      </footer>
    </div>
  );
}

import { useEffect, useState } from "react";
import { usePortfolio } from "../hooks/usePortfolio";

const ITEMS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const { profile } = usePortfolio();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
        <a href="#home" className="text-lg font-semibold tracking-tight">
          {profile.shortName}
          <span className="accent-text">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {ITEMS.map((it) => (
            <li key={it.href}>
              <a
                href={it.href}
                className="text-xs font-medium tracking-widest text-muted transition-colors hover:text-text"
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((o) => !o)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-px w-5 bg-text transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-5 bg-text transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-line bg-bg px-5 pb-4 pt-2 md:hidden">
          {ITEMS.map((it) => (
            <li key={it.href}>
              <a
                href={it.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm tracking-widest text-muted hover:text-text"
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

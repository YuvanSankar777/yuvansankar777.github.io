import { useState } from "react";
import { Copy, Check, Phone } from "lucide-react";
import { usePortfolio } from "../hooks/usePortfolio";
import SocialLinks from "./SocialLinks";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export default function Footer() {
  const { profile } = usePortfolio();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.social.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <footer id="contact" className="border-t border-line bg-bg-2">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-28">
        <p className="mb-4 font-mono text-sm text-accent-2">05 · Contact</p>
        <h2 className="mb-16 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          Let&apos;s build something{" "}
          <span className="accent-text">together.</span>
        </h2>

        <div className="grid gap-12 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="hero-heading text-2xl font-bold tracking-tight"
            >
              {profile.name}
            </a>
            <p className="mt-3 text-sm text-muted">{profile.specialization}</p>
            <p className="mt-1 text-sm text-muted">{profile.location}</p>
          </div>

          {/* Navigate */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-faint">
              Navigate
            </p>
            <ul className="space-y-2.5">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-muted transition-colors hover:text-text"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach out */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-faint">
              Reach Out
            </p>
            <button
              onClick={copyEmail}
              className="group flex items-center gap-2 text-left text-muted transition-colors hover:text-text"
            >
              {profile.social.email}
              {copied ? (
                <Check size={14} className="text-accent-2" />
              ) : (
                <Copy size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
              )}
            </button>
            {profile.social.phone && (
              <a
                href={`tel:${profile.social.phone.replace(/\s/g, "")}`}
                className="mt-2.5 flex items-center gap-2 text-muted transition-colors hover:text-text"
              >
                <Phone size={14} />
                {profile.social.phone}
              </a>
            )}
            <div className="mt-6">
              <SocialLinks social={profile.social} variant="inline" />
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-2 border-t border-line pt-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </span>
          <span>Built with React, Vite, Tailwind & Framer Motion.</span>
        </div>
      </div>
    </footer>
  );
}

import { Mail, FileText, Globe } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  LeetcodeIcon,
} from "./icons";
import type { Social } from "../types/portfolio";

type IconComp = (p: { size?: number; className?: string }) => React.ReactNode;

type IconLink = {
  key: keyof Social;
  label: string;
  icon: IconComp;
  href: (v: string) => string;
};

const LINKS: IconLink[] = [
  { key: "github", label: "GitHub", icon: GithubIcon, href: (v) => v },
  { key: "linkedin", label: "LinkedIn", icon: LinkedinIcon, href: (v) => v },
  { key: "leetcode", label: "LeetCode", icon: LeetcodeIcon, href: (v) => v },
  { key: "instagram", label: "Instagram", icon: InstagramIcon, href: (v) => v },
  { key: "website", label: "Website", icon: Globe, href: (v) => v },
  { key: "resume", label: "Résumé", icon: FileText, href: (v) => v },
  { key: "email", label: "Email", icon: Mail, href: (v) => `mailto:${v}` },
];

export default function SocialLinks({
  social,
  variant = "pill",
}: {
  social: Social;
  variant?: "pill" | "inline";
}) {
  const available = LINKS.filter((l) => social[l.key]?.trim());

  if (variant === "inline") {
    return (
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {available.map(({ key, label, icon: Icon, href }) => (
          <a
            key={key}
            href={href(social[key])}
            target={key === "email" ? undefined : "_blank"}
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-text"
          >
            <Icon size={16} className="transition-colors group-hover:text-accent-2" />
            {label}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {available.map(({ key, label, icon: Icon, href }) => (
        <a
          key={key}
          href={href(social[key])}
          target={key === "email" ? undefined : "_blank"}
          rel="noreferrer"
          aria-label={label}
          className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-2 text-sm text-muted backdrop-blur transition-all hover:border-line-soft hover:text-white"
        >
          <Icon size={16} className="transition-colors group-hover:text-accent-2" />
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
}

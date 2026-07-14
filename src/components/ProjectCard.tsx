import { ArrowUpRight, Star } from "lucide-react";
import type { Project } from "../types/portfolio";

export default function ProjectCard({
  project,
  number,
}: {
  project: Project;
  number: number;
}) {
  const num = String(number).padStart(2, "0");

  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-bg-2 shadow-[0_-20px_60px_-30px_rgba(0,0,0,0.9)]">
      <div className="grid gap-0 lg:grid-cols-2">
        {/* Content */}
        <div className="flex flex-col justify-between gap-8 p-8 sm:p-10">
          <div>
            <div className="mb-6 flex items-center justify-between">
              <span className="font-mono text-sm text-faint">{num}</span>
              {project.highlight && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-2">
                  <Star size={12} className="fill-current" />
                  Featured
                </span>
              )}
            </div>

            <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {project.title}
            </h3>
            <p className="mt-1 accent-text inline-block text-sm font-medium">
              {project.subtitle}
            </p>
            <p className="mt-5 leading-relaxed text-muted">
              {project.description}
            </p>
          </div>

          <div>
            <div className="mb-6 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-line bg-surface px-2.5 py-1 text-xs text-muted"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-xs text-faint">
                {project.role} · {project.year}
              </span>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium transition-colors hover:border-transparent hover:accent-gradient hover:text-white"
                >
                  View Project
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Visual panel (fallback placeholder when no image) */}
        <div className="relative min-h-[240px] overflow-hidden border-t border-line lg:border-l lg:border-t-0">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="relative flex h-full w-full items-center justify-center bg-[radial-gradient(120%_120%_at_70%_20%,#1b1b22_0%,#0d0d10_60%)]">
              <div className="accent-gradient absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-20 blur-2xl" />
              <span className="px-6 text-center font-semibold uppercase tracking-[0.2em] text-white/10 [font-size:clamp(1.5rem,4vw,2.75rem)]">
                {project.title}
              </span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

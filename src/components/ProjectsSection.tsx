import { useMemo } from "react";
import { usePortfolio } from "../hooks/usePortfolio";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const { projects } = usePortfolio();

  // highlight:true sorted first (stable)
  const ordered = useMemo(
    () =>
      [...projects].sort(
        (a, b) => Number(b.highlight) - Number(a.highlight),
      ),
    [projects],
  );

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-5 py-24 sm:px-6 sm:py-32"
    >
      <SectionHeading
        index="04"
        title="Selected Work"
        kicker={`${projects.length} projects`}
      />

      {/* sticky-stacking cards */}
      <div className="space-y-8">
        {ordered.map((p, i) => (
          <div
            key={p.id}
            className="sticky"
            style={{ top: `${96 + i * 18}px` }}
          >
            <ProjectCard project={p} number={i + 1} />
          </div>
        ))}
      </div>
    </section>
  );
}

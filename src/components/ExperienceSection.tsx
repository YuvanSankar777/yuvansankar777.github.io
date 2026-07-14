import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { usePortfolio } from "../hooks/usePortfolio";
import SectionHeading from "./SectionHeading";

export default function ExperienceSection() {
  const { experience, publications } = usePortfolio();

  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-5 py-24 sm:px-6 sm:py-32"
    >
      <SectionHeading index="03" title="Experience & Research" />

      {/* Experience rows */}
      <div className="divide-y divide-line border-t border-line">
        {experience.map((exp, i) => (
          <motion.div
            key={exp.company + exp.role}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="grid gap-4 py-9 sm:grid-cols-[auto_1fr] sm:gap-10"
          >
            <span className="font-mono text-sm text-accent-2">
              0{i + 1}
            </span>
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  {exp.role}{" "}
                  <span className="text-muted">· {exp.company}</span>
                </h3>
                <span className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-xs text-muted">
                  {exp.period} · {exp.location}
                </span>
              </div>
              <p className="mt-3 max-w-2xl text-muted">{exp.summary}</p>
              <ul className="mt-4 space-y-2">
                {exp.highlights.slice(0, 3).map((h) => (
                  <li key={h} className="flex gap-3 text-sm text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-2" />
                    <span className="max-w-2xl">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Publications */}
      {publications.length > 0 && (
        <div className="mt-16">
          <div className="mb-6 flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-muted">
            <FileText size={16} className="text-accent-2" />
            IEEE Publications
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {publications.map((pub, i) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-xl border border-line bg-surface/50 p-6"
              >
                <div className="accent-gradient absolute inset-x-0 top-0 h-px opacity-40" />
                <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-widest text-accent-2">
                  IEEE · {pub.year}
                </span>
                <h3 className="mt-3 text-lg font-medium leading-snug">
                  {pub.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{pub.venue}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

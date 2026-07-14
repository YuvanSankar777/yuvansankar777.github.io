import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { usePortfolio } from "../hooks/usePortfolio";
import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  const { profile, education } = usePortfolio();

  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-6 sm:py-32">
      <SectionHeading index="01" title="About" kicker={profile.location} />

      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-2xl font-light leading-relaxed text-text/90 sm:text-3xl sm:leading-relaxed"
        >
          {profile.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-4"
        >
          <div className="mb-2 flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-muted">
            <GraduationCap size={16} className="text-accent-2" />
            Education
          </div>
          {education.map((e) => (
            <div
              key={e.institution}
              className="rounded-xl border border-line bg-surface/50 p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-medium leading-tight">{e.institution}</h3>
                <span className="shrink-0 font-mono text-xs text-muted">
                  {e.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted">{e.degree}</p>
              <p className="mt-2 text-sm font-medium accent-text inline-block">
                {e.score}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

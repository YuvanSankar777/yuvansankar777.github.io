import { motion } from "framer-motion";
import { usePortfolio } from "../hooks/usePortfolio";
import SectionHeading from "./SectionHeading";

export default function SkillsSection() {
  const { skills } = usePortfolio();

  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-24 sm:px-6 sm:py-32">
      <SectionHeading index="02" title="Skills & Tools" />

      <div className="divide-y divide-line border-y border-line">
        {skills.categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            className="group grid grid-cols-1 gap-3 py-7 sm:grid-cols-[auto_1fr] sm:gap-10"
          >
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-sm text-faint">
                0{i + 1}
              </span>
              <h3 className="text-xl font-medium tracking-tight sm:text-2xl">
                {cat.name}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 sm:justify-end">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line bg-surface/40 px-3.5 py-1.5 text-sm text-muted transition-colors group-hover:text-text"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

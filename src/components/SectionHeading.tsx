import { motion } from "framer-motion";

export default function SectionHeading({
  index,
  title,
  kicker,
}: {
  index: string;
  title: string;
  kicker?: string;
}) {
  return (
    <div className="mb-12 sm:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-baseline gap-4 border-b border-line pb-5"
      >
        <span className="font-mono text-sm text-accent-2">{index}</span>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h2>
        {kicker && (
          <span className="ml-auto hidden text-sm text-muted sm:block">
            {kicker}
          </span>
        )}
      </motion.div>
    </div>
  );
}

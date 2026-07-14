import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { usePortfolio } from "../hooks/usePortfolio";
import Avatar from "./Avatar";
import SocialLinks from "./SocialLinks";

export default function HeroSection() {
  const { profile } = usePortfolio();

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pt-24 pb-16"
    >
      {/* ambient background accents */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-10 h-72 w-72 rounded-full bg-accent-3/10 blur-[120px]" />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-xs font-medium uppercase tracking-[0.28em] text-muted"
      >
        {profile.role} <span className="text-faint">·</span>{" "}
        {profile.specialization}
      </motion.p>

      {/* avatar bursting up through the headline */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 -mb-8 h-52 w-52 sm:-mb-12 sm:h-64 sm:w-64"
      >
        <Avatar className="h-full w-full" />
      </motion.div>

      {/* chrome-gradient headline — clamped so it never clips */}
      <h1
        className="hero-heading relative z-10 whitespace-nowrap text-center font-bold leading-[0.9] tracking-tight"
        style={{ fontSize: "clamp(3rem, 13vw, 11rem)" }}
      >
        Hi, I&apos;m {profile.shortName}
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 max-w-xl text-center text-base leading-relaxed text-muted sm:text-lg"
      >
        {profile.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="mt-10"
      >
        <SocialLinks social={profile.social} />
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute bottom-8 hidden items-center gap-2 text-xs uppercase tracking-widest text-faint transition-colors hover:text-muted sm:flex"
      >
        <ArrowDown size={14} className="animate-bounce" />
        Scroll
      </motion.a>
    </section>
  );
}

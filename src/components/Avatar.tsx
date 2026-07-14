import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { usePortfolio } from "../hooks/usePortfolio";

export default function Avatar({ className = "" }: { className?: string }) {
  const { profile } = usePortfolio();
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  // normalized cursor position (-0.5 .. 0.5)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 18, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 120, damping: 18, mass: 0.4 });

  // layered parallax: head moves a little, tilt reads as "tracking"
  const tx = useTransform(sx, [-0.5, 0.5], [-16, 16]);
  const ty = useTransform(sy, [-0.5, 0.5], [-12, 12]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-10, 10]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [8, -8]);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  const showImage = profile.avatarSvg && !failed;

  return (
    <motion.div
      className={`relative select-none ${className}`}
      style={{ x: tx, y: ty, rotateX, rotateY, transformPerspective: 800 }}
    >
      {/* accent glow behind the avatar */}
      <div className="accent-gradient absolute inset-0 -z-10 scale-90 rounded-full opacity-30 blur-3xl" />

      {showImage ? (
        <img
          src={profile.avatarSvg}
          alt={profile.name}
          draggable={false}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, #000 78%, transparent 98%)",
            maskImage:
              "linear-gradient(to bottom, #000 78%, transparent 98%)",
          }}
          className={`h-full w-full scale-110 object-contain drop-shadow-2xl transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      ) : null}

      {/* fallback: gradient monogram (shown until a real avatar is provided) */}
      {(!showImage || !loaded) && (
        <div className="absolute inset-0 grid place-items-center">
          <div className="accent-gradient grid h-full max-h-64 w-full max-w-64 place-items-center rounded-[2rem] shadow-2xl">
            <span className="text-7xl font-bold text-white/90">
              {profile.shortName.charAt(0)}
            </span>
          </div>
        </div>
      )}
    </motion.div>
  );
}

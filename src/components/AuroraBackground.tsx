import { motion } from "framer-motion";

const AuroraBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Primary aurora blob */}
    <motion.div
      className="will-change-transform absolute -top-1/4 -right-1/4 w-[700px] h-[700px] rounded-full opacity-20"
      style={{
        background:
          "radial-gradient(circle, hsl(192 95% 55% / 0.45), hsl(260 60% 55% / 0.2), transparent 70%)",
        filter: "blur(60px)",
      }}
      animate={{
        x: [0, -80, 40, -30, 0],
        y: [0, 50, -40, 60, 0],
        scale: [1, 1.2, 0.9, 1.15, 1],
      }}
      transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Secondary aurora blob */}
    <motion.div
      className="will-change-transform absolute top-1/4 left-1/6 w-[550px] h-[550px] rounded-full opacity-12"
      style={{
        background:
          "radial-gradient(circle, hsl(220 80% 55% / 0.4), hsl(192 95% 55% / 0.15), transparent 70%)",
        filter: "blur(70px)",
      }}
      animate={{
        x: [0, 60, -50, 30, 0],
        y: [0, -40, 70, -30, 0],
        scale: [1, 0.85, 1.15, 1.05, 1],
      }}
      transition={{
        duration: 40,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 3,
      }}
    />

    {/* Deep violet accent */}
    <motion.div
      className="will-change-transform absolute bottom-1/4 right-1/4 w-[480px] h-[480px] rounded-full opacity-10"
      style={{
        background:
          "radial-gradient(circle, hsl(260 70% 50% / 0.35), hsl(220 60% 40% / 0.1), transparent 70%)",
        filter: "blur(65px)",
      }}
      animate={{
        x: [0, -40, 50, -20, 0],
        y: [0, 30, -50, 40, 0],
        rotate: [0, 10, -5, 8, 0],
      }}
      transition={{
        duration: 22,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 6,
      }}
    />

    {/* Bottom edge glow */}
    <motion.div
      className="will-change-transform absolute -bottom-1/3 left-1/3 w-[400px] h-[400px] rounded-full opacity-8"
      style={{
        background:
          "radial-gradient(circle, hsl(192 95% 55% / 0.25), transparent 70%)",
        filter: "blur(55px)",
      }}
      animate={{
        x: [0, 30, -20, 10, 0],
        y: [0, -20, 30, -15, 0],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 8,
      }}
    />

    {/* Floating particles (reduced for performance) */}
    {Array.from({ length: 5 }).map((_, i) => (
      <motion.div
        key={i}
        className="will-change-transform absolute rounded-full"
        style={{
          width: 1.5 + (i % 4),
          height: 1.5 + (i % 4),
          left: `${8 + i * 15}%`,
          top: `${15 + (i * 13) % 70}%`,
          background:
            i % 3 === 0
              ? "hsl(192 95% 55%)"
              : i % 3 === 1
              ? "hsl(260 60% 65%)"
              : "hsl(220 80% 60%)",
        }}
        animate={{
          opacity: [0, 0.7, 0],
          y: [0, -50 - i * 8, -100 - i * 12],
          x: [0, i % 2 === 0 ? 20 : -20, i % 2 === 0 ? -15 : 15],
          scale: [0.5, 1, 0.3],
        }}
        transition={{
          duration: 6 + i * 0.6,
          repeat: Infinity,
          delay: i * 1.2,
          ease: "easeOut",
        }}
      />
    ))}

    {/* Soft light streaks */}
    {Array.from({ length: 2 }).map((_, i) => (
      <motion.div
        key={`streak-${i}`}
        className="will-change-transform absolute"
        style={{
          width: 120 + i * 40,
          height: 1,
          left: `${25 + i * 25}%`,
          top: `${35 + i * 20}%`,
          background:
            "linear-gradient(90deg, transparent, hsl(192 95% 55% / 0.15), transparent)",
          borderRadius: 1,
          transform: `rotate(${-15 + i * 12}deg)`,
        }}
        animate={{
          opacity: [0, 0.4, 0],
          x: [0, 30, -10, 0],
          scaleX: [0.5, 1.2, 0.8, 0.5],
        }}
        transition={{
          duration: 10 + i * 2,
          repeat: Infinity,
          delay: i * 4,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

export default AuroraBackground;
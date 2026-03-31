import { motion } from "framer-motion";

const AuroraBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Primary aurora blob */}
    <motion.div
      className="absolute -top-1/4 -right-1/4 w-[900px] h-[900px] rounded-full opacity-25"
      style={{
        background: "radial-gradient(circle, hsl(var(--neon-cyan) / 0.5), hsl(var(--neon-violet) / 0.25), transparent 70%)",
        filter: "blur(100px)",
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
      className="absolute top-1/4 left-1/6 w-[700px] h-[700px] rounded-full opacity-20"
      style={{
        background: "radial-gradient(circle, hsl(var(--neon-blue) / 0.45), hsl(var(--neon-cyan) / 0.2), transparent 70%)",
        filter: "blur(120px)",
      }}
      animate={{
        x: [0, 60, -50, 30, 0],
        y: [0, -40, 70, -30, 0],
        scale: [1, 0.85, 1.15, 1.05, 1],
      }}
      transition={{ duration: 40, repeat: Infinity, ease: "easeInOut", delay: 3 }}
    />
    {/* Deep violet accent */}
    <motion.div
      className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-15"
      style={{
        background: "radial-gradient(circle, hsl(var(--neon-violet) / 0.4), hsl(var(--neon-blue) / 0.15), transparent 70%)",
        filter: "blur(110px)",
      }}
      animate={{
        x: [0, -40, 50, -20, 0],
        y: [0, 30, -50, 40, 0],
        rotate: [0, 10, -5, 8, 0],
      }}
      transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 6 }}
    />
    {/* Bottom edge glow */}
    <motion.div
      className="absolute -bottom-1/3 left-1/3 w-[500px] h-[500px] rounded-full opacity-15"
      style={{
        background: "radial-gradient(circle, hsl(var(--neon-cyan) / 0.3), transparent 70%)",
        filter: "blur(90px)",
      }}
      animate={{
        x: [0, 30, -20, 10, 0],
        y: [0, -20, 30, -15, 0],
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 8 }}
    />

    {/* Firefly particles */}
    {Array.from({ length: 9 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: 2 + (i % 3),
          height: 2 + (i % 3),
          left: `${10 + (i * 12)% 90}%`,
          top: `${10 + (i * 23) % 80}%`,
          background: i % 3 === 0
            ? "hsl(var(--neon-cyan))"
            : i % 3 === 1
            ? "hsl(var(--neon-violet))"
            : "hsl(var(--neon-blue))",
          boxShadow: i % 3 === 0
            ? "0 0 6px 2px hsl(var(--neon-cyan) / 0.5)"
            : i % 3 === 1
            ? "0 0 6px 2px hsl(var(--neon-violet) / 0.5)"
            : "0 0 6px 2px hsl(var(--neon-blue) / 0.5)",
        }}
        animate={{
          opacity: [0, 0.8, 0],
          y: [0, -40 - i * 6, -80 - i * 8],
          x: [0, (i % 2 === 0 ? 15 : -15), (i % 2 === 0 ? -10 : 10)],
          scale: [0.5, 1.2, 0.3],
        }}
        transition={{
          duration: 6 + i * 0.5,
          repeat: Infinity,
          delay: i * 0.8,
          ease: "easeOut",
        }}
      />
    ))}

    {/* Soft light streaks */}
    {Array.from({ length: 4 }).map((_, i) => (
      <motion.div
        key={`streak-${i}`}
        className="absolute"
        style={{
          width: 140 + i * 50,
          height: 1.5,
          left: `${15 + i * 20}%`,
          top: `${25 + i * 18}%`,
          background: `linear-gradient(90deg, transparent, hsl(var(--neon-cyan) / 0.2), transparent)`,
          borderRadius: 1,
          transform: `rotate(${-15 + i * 12}deg)`,
        }}
        animate={{
          opacity: [0, 0.5, 0],
          x: [0, 40, -15, 0],
          scaleX: [0.5, 1.3, 0.8, 0.5],
        }}
        transition={{
          duration: 8 + i * 3,
          repeat: Infinity,
          delay: i * 3.5,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

export default AuroraBackground;

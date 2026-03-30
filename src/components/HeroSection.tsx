import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.22, delayChildren: 0.4 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

const HeroSection = () => (
  <section className="relative min-h-[calc(100vh-70px)] flex items-center justify-center overflow-hidden">
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="container relative z-10 text-center px-6"
    >
      <motion.div
        variants={fadeUp}
        className="inline-flex items-center gap-2 glass-subtle px-5 py-2.5 rounded-full mb-8"
      >
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
        <span className="text-sm text-muted-foreground font-mono tracking-wide">
          9th & 10th · CBIT College
        </span>
      </motion.div>

      <motion.h1
        variants={fadeUp}
        className="text-5xl sm:text-7xl lg:text-9xl font-extrabold tracking-tighter mb-4"
      >
        <span className="text-gradient-glow">Quantum</span>
        <span className="text-foreground">Secure</span>
      </motion.h1>

      <motion.p variants={fadeUp} className="text-muted-foreground text-lg mb-2">
        by <span className="text-foreground font-medium">Digital Defence Club</span>
      </motion.p>

      <motion.p
        variants={fadeUp}
        className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-12"
      >
        Workshop on Post-Quantum Cryptography, Blockchain & Ethical Hacking
      </motion.p>

      <motion.div variants={fadeUp}>
        <motion.a
          href="#register"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="btn-glow-premium inline-block bg-primary text-primary-foreground px-10 py-4 rounded-xl text-lg font-semibold"
        >
          Register Now
        </motion.a>
      </motion.div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.2, duration: 1.2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="w-5 h-5 text-muted-foreground/50" />
      </motion.div>
    </motion.div>
  </section>
);

export default HeroSection;

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import cbitLogo from "@/assets/cbit-logo.jpg";
import ddcLogo from "@/assets/ddc-logo.png";
import ieeeCbitLogo from "@/assets/ieee-cbit-logo.jpg";
import ieeeEdSocLogo from "@/assets/ieee-edsoc-logo.png";

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


const logos = [
  { src: cbitLogo, alt: "CBIT", round: true },
  { src: ieeeCbitLogo, alt: "IEEE CBIT", round: true },
  { src: ieeeEdSocLogo, alt: "IEEE Education Society", round: false },
  { src: ddcLogo, alt: "Digital Defence Club", round: true },
];

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative flex min-h-[78vh] items-center justify-center overflow-hidden -mt-4 sm:min-h-[88vh] sm:-mt-6">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="container relative z-10 px-3 sm:px-6"
      >
        {/* Institutional Logos at top - Centered and Refined */}
        <motion.div 
          variants={fadeUp} 
          className="flex flex-wrap items-center justify-center gap-4 mb-12 sm:mb-20 md:gap-8"
        >
          {logos.map((logo, index) => (
            <div key={logo.alt} className="flex items-center gap-4 md:gap-8">
              <div
                className={`h-12 w-12 sm:h-16 sm:w-16 md:h-24 md:w-24 ${logo.round ? "rounded-full" : "rounded-xl"} glass-subtle flex items-center justify-center overflow-hidden p-1 sm:p-2 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)]`}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  decoding="async"
                  className={`w-full h-full object-contain ${logo.round ? "rounded-full" : ""}`}
                  style={logo.alt !== "Digital Defence Club" ? { mixBlendMode: "screen" } : {}}
                />
              </div>
              {index === 2 && (
                <div className="flex items-center justify-center px-2">
                  <span className="text-2xl sm:text-4xl font-extrabold text-primary animate-pulse select-none opacity-90">
                    ✕
                  </span>
                </div>
              )}
            </div>
          ))}
        </motion.div>

        <div className="text-center">

        <motion.div
          variants={fadeUp}
          className="mb-6 inline-flex items-center gap-2 rounded-full px-3 py-2 sm:mb-8 sm:px-5 sm:py-2.5 glass-subtle"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          <span className="text-xs sm:text-sm text-muted-foreground font-mono tracking-wide">
            9th & 10th · CBIT College
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mb-4 text-4xl font-extrabold leading-[0.95] tracking-tighter min-[420px]:text-5xl sm:text-7xl lg:text-9xl"
        >
          <span className="text-gradient-glow">Quantum</span>
          <span className="block text-foreground sm:inline">Secure</span>
        </motion.h1>

        <motion.p variants={fadeUp} className="mb-2 text-base text-muted-foreground sm:text-lg">
          by <span className="text-foreground font-medium">Digital Defence Club</span>
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mx-auto mb-8 max-w-xl px-2 text-sm text-muted-foreground sm:mb-12 sm:px-4 sm:text-lg"
        >
          Workshop on Post-Quantum Cryptography, Blockchain & Ethical Hacking
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mx-auto mb-8 max-w-xl rounded-lg border border-primary/30 bg-primary/10 px-3 py-2 text-xs font-medium text-primary sm:mb-12 sm:text-sm"
        >
          Note: Registration for CBIT students is closed.
        </motion.p>

        <motion.div variants={fadeUp}>
          <motion.button
            onClick={() => {
              const el = document.getElementById("register");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="btn-glow-premium inline-block rounded-xl bg-primary px-7 py-3 text-base font-semibold text-primary-foreground sm:px-10 sm:py-4 sm:text-lg"
          >
            Register
          </motion.button>
        </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1.2 }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 sm:bottom-8 sm:block"
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
};

export default HeroSection;

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
  { src: ddcLogo, alt: "Digital Defence Club", round: true },
  { src: ieeeCbitLogo, alt: "IEEE CBIT", round: true },
  { src: ieeeEdSocLogo, alt: "IEEE Education Society", round: false },
];

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden -mt-4 sm:-mt-6">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="container relative z-10 text-center px-4 sm:px-6"
      >
        {/* Institutional Logos */}
        <motion.div variants={fadeUp} className="flex items-center justify-center gap-5 sm:gap-7 md:gap-8 mb-6 sm:mb-8">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 ${logo.round ? "rounded-full" : "rounded-xl"} overflow-hidden glass-subtle flex items-center justify-center p-1.5 sm:p-2`}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`w-full h-full object-contain ${logo.round ? "rounded-full" : ""}`}
                style={{ mixBlendMode: "screen" }}
              />
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 glass-subtle px-4 sm:px-5 py-2 sm:py-2.5 rounded-full mb-6 sm:mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          <span className="text-xs sm:text-sm text-muted-foreground font-mono tracking-wide">
            9th & 10th · CBIT College
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-7xl lg:text-9xl font-extrabold tracking-tighter mb-4"
        >
          <span className="text-gradient-glow">Quantum</span>
          <span className="text-foreground">Secure</span>
        </motion.h1>

        <motion.p variants={fadeUp} className="text-muted-foreground text-base sm:text-lg mb-2">
          by <span className="text-foreground font-medium">Digital Defence Club</span>
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="text-muted-foreground text-sm sm:text-lg max-w-xl mx-auto mb-8 sm:mb-12 px-4"
        >
          Workshop on Post-Quantum Cryptography, Blockchain & Ethical Hacking
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
            className="btn-glow-premium inline-block bg-primary text-primary-foreground px-8 sm:px-10 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold"
          >
            Register
          </motion.button>
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
};

export default HeroSection;

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Lock } from "lucide-react";

const RegisterSection = () => {
  return (
    <section id="register" className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06] sm:h-[600px] sm:w-[600px]"
        style={{
          background: "radial-gradient(circle, hsl(0 80% 55%), transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div className="container max-w-lg relative z-10">
        <ScrollReveal>
          <div className="mb-8 text-center sm:mb-10">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              className="inline-block glass-subtle px-4 py-1.5 rounded-full text-xs font-mono text-destructive mb-4"
            >
              🔒 Registrations Closed
            </motion.span>
            <h2 className="text-3xl sm:text-4xl font-bold">
              <span className="text-gradient">Registration</span> Closed
            </h2>
            <p className="text-muted-foreground mt-3">Registrations are currently closed.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="glass rounded-2xl p-8 sm:p-10 flex flex-col items-center text-center gap-5">
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: false }}
              transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.1 }}
              className="rounded-full bg-destructive/10 p-5 border border-destructive/20"
            >
              <Lock className="w-10 h-10 text-destructive" />
            </motion.div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                Registrations are now closed
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
                We've reached our seat limit and registrations are no longer being accepted.
                Thank you to everyone who signed up — we look forward to seeing you at the event!
              </p>
            </div>

            <div className="w-full border-t border-border/50 pt-5 mt-1">
              <p className="text-xs text-muted-foreground/70">
                For queries, reach us via the{" "}
                <a
                  href="#contact"
                  className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
                >
                  Contact
                </a>{" "}
                section.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default RegisterSection;

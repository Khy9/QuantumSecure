import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { useState } from "react";

const RegisterSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="register" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent pointer-events-none" />
      {/* Decorative glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06] pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(192 95% 55%), transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div className="container max-w-lg relative z-10">
        <ScrollReveal>
          <div className="text-center mb-10">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block glass-subtle px-4 py-1.5 rounded-full text-xs font-mono text-primary mb-4"
            >
              ⚡ Limited Seats — Register Early
            </motion.span>
            <h2 className="text-3xl sm:text-4xl font-bold">
              <span className="text-gradient">Register</span> Now
            </h2>
            <p className="text-muted-foreground mt-3">
              Secure your spot at QuantumSecure
            </p>
          </div>
        </ScrollReveal>

        {submitted ? (
          <ScrollReveal>
            <div className="glass rounded-2xl p-10 text-center neon-glow-cyan">
              <p className="text-2xl font-bold text-primary mb-2">🎉 You're In!</p>
              <p className="text-muted-foreground">We'll send you the details shortly.</p>
            </div>
          </ScrollReveal>
        ) : (
          <ScrollReveal delay={0.15}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all duration-300"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all duration-300"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">College / Organization</label>
                <input
                  type="text"
                  required
                  placeholder="CBIT"
                  className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all duration-300"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn-glow-premium w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold text-lg"
              >
                Register Now
              </motion.button>
            </form>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
};

export default RegisterSection;

import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { Trophy, Cpu, Fingerprint, FlaskConical } from "lucide-react";

const highlights = [
  { icon: FlaskConical, title: "Hands-on Labs", desc: "Work on real security scenarios with guided lab exercises", accent: "text-primary" },
  { icon: Trophy, title: "Expert Mentorship", desc: "Learn directly from industry professionals and security researchers", accent: "text-neon-violet" },
  { icon: Cpu, title: "Live Demos", desc: "Watch real-time exploitation and defense demonstrations", accent: "text-neon-blue" },
  { icon: Fingerprint, title: "Certificates", desc: "Receive a certificate of participation upon completion", accent: "text-primary" },
];

const WorkshopHighlightsSection = () => (
  <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
    <div className="container max-w-4xl relative z-10">
      <ScrollReveal>
        <div className="mb-10 text-center sm:mb-14">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
              className="mb-4 inline-block rounded-full px-4 py-1.5 text-center text-xs font-mono text-primary glass-subtle"
          >
            ⚡ Limited Seats Available
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Workshop <span className="text-gradient">Highlights</span>
          </h2>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {highlights.map((item, i) => (
          <ScrollReveal key={item.title} delay={0.1 * i}>
            <motion.div
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass card-glow group h-full rounded-2xl p-6 sm:p-7"
            >
              <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                <item.icon className={`w-7 h-7 ${item.accent} transition-all duration-300 group-hover:drop-shadow-[0_0_10px_hsl(192,95%,55%,0.5)]`} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1.5">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WorkshopHighlightsSection;

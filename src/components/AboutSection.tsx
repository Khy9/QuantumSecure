import ScrollReveal from "./ScrollReveal";
import { Shield, Lock, Zap } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { icon: Shield, label: "Hands-on Labs", desc: "Real-world security scenarios" },
  { icon: Lock, label: "Expert Talks", desc: "Industry-leading speakers" },
  { icon: Zap, label: "Networking", desc: "Connect with professionals" },
];

const AboutSection = () => (
  <section id="about" className="relative py-16 sm:py-20 lg:py-24">
    <div className="container max-w-3xl text-center">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          About the <span className="text-gradient">Event</span>
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.15}>
        <p className="mb-12 text-base leading-relaxed text-muted-foreground sm:mb-14 sm:text-lg">
          QuantumSecure is a two-day intensive workshop designed to equip participants with cutting-edge knowledge in post-quantum cryptography, blockchain technology, and ethical hacking. Organized by the Digital Defence Club at CBIT, this event brings together security researchers, industry experts, and passionate learners.
        </p>
      </ScrollReveal>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((item, i) => (
          <ScrollReveal key={item.label} delay={0.2 + i * 0.1}>
            <motion.div
              whileHover={{ y: -6 }}
              className="glass card-glow flex h-full flex-col items-center justify-center rounded-xl p-6 text-center sm:p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground sm:text-lg">{item.label}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;

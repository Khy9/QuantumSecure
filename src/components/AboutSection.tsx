import ScrollReveal from "./ScrollReveal";
import { Shield, Lock, Zap } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { icon: Shield, label: "Hands-on Labs", desc: "Real-world security scenarios" },
  { icon: Lock, label: "Expert Talks", desc: "Industry-leading speakers" },
  { icon: Zap, label: "Networking", desc: "Connect with professionals" },
];

const AboutSection = () => (
  <section id="about" className="py-24 relative">
    <div className="container max-w-3xl text-center">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          About the <span className="text-gradient">Event</span>
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.15}>
        <p className="text-muted-foreground text-lg leading-relaxed mb-14">
          QuantumSecure is a two-day intensive workshop designed to equip participants with cutting-edge knowledge in post-quantum cryptography, blockchain technology, and ethical hacking. Organized by the Digital Defence Club at CBIT, this event brings together security researchers, industry experts, and passionate learners.
        </p>
      </ScrollReveal>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <ScrollReveal key={item.label} delay={0.2 + i * 0.1}>
            <motion.div
              whileHover={{ y: -6 }}
              className="glass rounded-xl p-8 text-center h-full flex flex-col items-center justify-center card-glow"
            >
              <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-lg">{item.label}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;

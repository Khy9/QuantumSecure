import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { Atom, Link2, Bug } from "lucide-react";

const topics = [
  {
    icon: Atom,
    title: "Post-Quantum Cryptography",
    desc: "Explore lattice-based, hash-based, and code-based cryptographic algorithms designed to resist quantum computing attacks.",
    color: "text-primary",
  },
  {
    icon: Link2,
    title: "Blockchain",
    desc: "Dive into decentralized systems, smart contract security, consensus mechanisms, and real-world blockchain applications.",
    color: "text-neon-violet",
  },
  {
    icon: Bug,
    title: "Ethical Hacking",
    desc: "Learn penetration testing, vulnerability assessment, and responsible disclosure practices through hands-on labs.",
    color: "text-neon-blue",
  },
];

const TopicsSection = () => (
  <section id="topics" className="py-24">
    <div className="container max-w-4xl">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Topics <span className="text-gradient">Covered</span>
        </h2>
      </ScrollReveal>
      <div className="space-y-6">
        {topics.map((topic, i) => (
          <ScrollReveal key={topic.title} delay={i * 0.12}>
            <motion.div
              whileHover={{ x: 6, y: -2 }}
              className="glass rounded-2xl p-6 sm:p-8 flex items-start gap-5 card-glow"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                <topic.icon className={`w-6 h-6 ${topic.color}`} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{topic.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{topic.desc}</p>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TopicsSection;

import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { Brain, Code2, ShieldCheck, KeyRound, Network, Terminal } from "lucide-react";

const skills = [
  { icon: KeyRound, title: "Post-Quantum Algorithms", desc: "Lattice-based & hash-based cryptography for the quantum era" },
  { icon: Network, title: "Blockchain Security", desc: "Smart contract auditing and DApp vulnerability patterns" },
  { icon: Terminal, title: "Penetration Testing", desc: "Real-world attack simulation and defense strategies" },
  { icon: Brain, title: "Threat Modeling", desc: "Identify and prioritize security risks systematically" },
  { icon: Code2, title: "Secure Coding", desc: "Build applications with security-first architecture" },
  { icon: ShieldCheck, title: "Incident Response", desc: "Handle breaches and vulnerabilities professionally" },
];

const WhatYoullLearnSection = () => (
  <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
    <div className="container max-w-5xl relative z-10">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          What You'll <span className="text-gradient">Learn</span>
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-muted-foreground sm:mb-14">
          Gain practical, industry-relevant skills across three pillars of modern cybersecurity
        </p>
      </ScrollReveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((skill, i) => (
          <ScrollReveal key={skill.title} delay={0.08 * i}>
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass card-glow group h-full rounded-2xl p-5 sm:p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                <skill.icon className="w-6 h-6 text-primary transition-all duration-300 group-hover:drop-shadow-[0_0_8px_hsl(192,95%,55%,0.6)]" />
              </div>
              <h3 className="font-semibold text-foreground mb-1.5">{skill.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{skill.desc}</p>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhatYoullLearnSection;

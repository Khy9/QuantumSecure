import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Users, Rocket } from "lucide-react";

const audiences = [
  { icon: GraduationCap, title: "CS & IT Students", desc: "Build a strong foundation in cybersecurity before entering the industry" },
  { icon: Briefcase, title: "Working Professionals", desc: "Upskill with post-quantum readiness and blockchain security" },
  { icon: Users, title: "Security Enthusiasts", desc: "Hands-on labs and practical exercises to sharpen your skills" },
  { icon: Rocket, title: "Aspiring Researchers", desc: "Explore cutting-edge cryptographic algorithms and threat models" },
];

const WhoShouldAttendSection = () => (
  <section className="py-24 relative">
    <div className="container max-w-4xl">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Who Should <span className="text-gradient">Attend</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-lg mx-auto mb-14">
          Whether you're a beginner or experienced, there's something for everyone
        </p>
      </ScrollReveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {audiences.map((item, i) => (
          <ScrollReveal key={item.title} delay={0.1 * i}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass rounded-2xl p-6 flex items-start gap-4 h-full card-glow group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-primary group-hover:drop-shadow-[0_0_8px_hsl(192,95%,55%,0.6)] transition-all duration-300" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhoShouldAttendSection;

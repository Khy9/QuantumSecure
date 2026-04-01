import ScrollReveal from "./ScrollReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const schedule = [
  {
    day: "Day 1 — 9th",
    events: [
      { time: "9:30 AM – 12:00 PM", title: "Registration, Inaugural & Speaker Session", desc: "Check-in, opening ceremony, and keynote speaker session" },
      { time: "12:00 PM – 1:00 PM", title: "Lunch Break", desc: "Networking & refreshments" },
      { time: "1:00 PM – 4:00 PM", title: "Post-Quantum Cryptography", desc: "Lattice-based encryption and hands-on labs" },
    ],
  },
  {
    day: "Day 2 — 10th",
    events: [
      { time: "9:30 AM – 12:00 PM", title: "Blockchain Session", desc: "Smart contract security and blockchain fundamentals" },
      { time: "12:00 PM – 1:00 PM", title: "Lunch Break", desc: "Networking & refreshments" },
      { time: "1:00 PM – 4:00 PM", title: "Ethical Hacking & Closing Session", desc: "Penetration testing, vulnerability assessment, and wind-up" },
    ],
  },
];

const AnimatedTimeline = ({ events }: { events: typeof schedule[0]["events"] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.6"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative space-y-6 pl-5 sm:pl-6">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
      <motion.div
        className="absolute left-0 top-0 w-px bg-primary"
        style={{ height: lineHeight }}
      />

      {events.map((event, ei) => (
        <motion.div
          key={event.title}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-40px" }}
          transition={{
            duration: 0.6,
            delay: ei * 0.12,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="relative"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4, delay: ei * 0.12 + 0.1, ease: "backOut" }}
            className="absolute -left-[27px] top-1 h-3 w-3 rounded-full bg-primary sm:-left-[31px] neon-glow-cyan"
          />
          <p className="text-xs font-mono text-primary mb-1">{event.time}</p>
          <h4 className="font-semibold text-foreground">{event.title}</h4>
          <p className="text-sm text-muted-foreground">{event.desc}</p>
        </motion.div>
      ))}
    </div>
  );
};

const ScheduleSection = () => (
  <section id="schedule" className="py-16 sm:py-20 lg:py-24">
    <div className="container max-w-3xl">
      <ScrollReveal>
        <h2 className="mb-10 text-center text-3xl font-bold sm:mb-12 sm:text-4xl">
          Event <span className="text-gradient">Schedule</span>
        </h2>
      </ScrollReveal>

      <div className="space-y-10 sm:space-y-12">
        {schedule.map((day, di) => (
          <div key={day.day}>
            <ScrollReveal delay={di * 0.1}>
              <h3 className="mb-6 font-mono text-lg font-bold text-primary sm:text-xl">{day.day}</h3>
            </ScrollReveal>
            <AnimatedTimeline events={day.events} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ScheduleSection;

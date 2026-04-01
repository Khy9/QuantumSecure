import ScrollReveal from "./ScrollReveal";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const DetailsSection = () => (
  <section id="details" className="relative py-16 sm:py-20 lg:py-24">
    <div className="container max-w-4xl">
      <ScrollReveal>
        <h2 className="mb-10 text-center text-3xl font-bold sm:mb-12 sm:text-4xl">
          Event <span className="text-gradient">Details</span>
        </h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <ScrollReveal delay={0.1}>
          <motion.div whileHover={{ y: -6 }} className="glass card-glow h-full rounded-2xl p-6 sm:p-8">
            <Calendar className="mb-4 h-8 w-8 text-primary sm:h-10 sm:w-10" />
            <h3 className="mb-2 text-lg font-semibold text-foreground sm:text-xl">Dates</h3>
            <p className="mb-2 text-xl font-bold text-gradient sm:text-2xl">9th & 10th</p>
            <p className="text-muted-foreground text-sm">Two full days of intensive learning and hands-on workshops</p>
          </motion.div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <motion.div whileHover={{ y: -6 }} className="glass card-glow h-full rounded-2xl p-6 sm:p-8">
            <MapPin className="mb-4 h-8 w-8 text-secondary sm:h-10 sm:w-10" />
            <h3 className="mb-2 text-lg font-semibold text-foreground sm:text-xl">Venue</h3>
            <p className="text-lg font-semibold text-foreground mb-1">CBIT College, Gandipet</p>
            <p className="text-muted-foreground text-sm mb-4">Chaitanya Bharathi Institute of Technology, Gandipet, Hyderabad, Telangana</p>
            <a
              href="https://maps.google.com/?q=CBIT+College+Gandipet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
            >
              View on Google Maps <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default DetailsSection;

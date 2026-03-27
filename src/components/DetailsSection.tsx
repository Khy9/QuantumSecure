import ScrollReveal from "./ScrollReveal";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const DetailsSection = () => (
  <section id="details" className="py-24 relative">
    <div className="container max-w-4xl">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Event <span className="text-gradient">Details</span>
        </h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ScrollReveal delay={0.1}>
          <motion.div whileHover={{ y: -6 }} className="glass rounded-2xl p-8 h-full card-glow">
            <Calendar className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Dates</h3>
            <p className="text-2xl font-bold text-gradient mb-2">9th & 10th</p>
            <p className="text-muted-foreground text-sm">Two full days of intensive learning and hands-on workshops</p>
          </motion.div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <motion.div whileHover={{ y: -6 }} className="glass rounded-2xl p-8 h-full card-glow">
            <MapPin className="w-10 h-10 text-secondary mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Venue</h3>
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

import ScrollReveal from "./ScrollReveal";
import { Phone, Mail, Instagram } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24">
    <div className="container max-w-2xl text-center">
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">
          Get in <span className="text-gradient">Touch</span>
        </h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { icon: Phone, label: "Phone", value: "+91 XXXXX XXXXX", href: "tel:+91XXXXXXXXXX" },
          { icon: Mail, label: "Email", value: "ddc@cbit.ac.in", href: "mailto:ddc@cbit.ac.in" },
          { icon: Instagram, label: "Instagram", value: "@digitaldefenceclub", href: "https://instagram.com/digitaldefenceclub" },
        ].map((item, i) => (
          <ScrollReveal key={item.label} delay={i * 0.1}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-xl p-6 card-lift block text-center"
            >
              <item.icon className="w-7 h-7 text-primary mx-auto mb-3" />
              <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
              <p className="text-sm font-medium text-foreground">{item.value}</p>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;

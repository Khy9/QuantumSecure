import ScrollReveal from "./ScrollReveal";
import { Mail, Instagram, Linkedin, Phone } from "lucide-react";

const contacts = [
  { name: "Ms. P. Kiranmaie", role: "Faculty Coordinator", phone: "+91 90323 15262" },
  { name: "Ms. Kavita Agarwal", role: "Faculty Coordinator", phone: "+91 97043 05615" },
  { name: "Khyathi Mallula", role: "Organizing Committee", phone: "+91 97048 72072" },
  { name: "Koushik Ram", role: "Organizing Committee", phone: "+91 63048 54034" },
];

const ContactSection = () => (
  <section id="contact" className="py-16 sm:py-20 lg:py-24">
    <div className="container max-w-3xl text-center">
      <ScrollReveal>
        <h2 className="mb-10 text-3xl font-bold sm:text-4xl">
          Get in <span className="text-gradient">Touch</span>
        </h2>
      </ScrollReveal>

      {/* Main contact channels */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        {[
          { icon: Linkedin, label: "LinkedIn", value: "Digital Defence Club", href: "https://www.linkedin.com/company/digital-defence-club" },
          { icon: Mail, label: "Email", value: "ccc@cbit.ac.in", href: "mailto:ccc@cbit.ac.in" },
          { icon: Instagram, label: "Instagram", value: "@ddc_cbit", href: "https://www.instagram.com/ddc_cbit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
        ].map((item, i) => (
          <ScrollReveal key={item.label} delay={i * 0.1}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass card-lift block rounded-xl p-5 text-center sm:p-6"
            >
              <item.icon className="w-7 h-7 text-primary mx-auto mb-3" />
              <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
              <p className="text-sm font-medium text-foreground">{item.value}</p>
            </a>
          </ScrollReveal>
        ))}
      </div>

      {/* Team contacts */}
      <ScrollReveal delay={0.2}>
        <h3 className="text-lg font-semibold text-foreground mb-5">
          Reach Our <span className="text-gradient">Team</span>
        </h3>
      </ScrollReveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contacts.map((c, i) => (
          <ScrollReveal key={c.name} delay={0.25 + i * 0.08}>
            <div className="glass card-lift flex items-center gap-4 rounded-xl p-4 text-left sm:p-5">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground">{c.name}</p>
                <p className="text-xs text-muted-foreground mb-0.5">{c.role}</p>
                <p className="text-xs text-primary font-mono">{c.phone}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;

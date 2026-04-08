import ScrollReveal from "@/components/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Who can attend this workshop?", a: "Anyone interested in cybersecurity, cryptography, blockchain, or ethical hacking can attend — students, professionals, and enthusiasts are all welcome." },
  { q: "Is prior knowledge required?", a: "No prior knowledge is required. The workshop is designed to accommodate beginners while also offering depth for those with experience." },
  { q: "Will certificates be provided?", a: "Yes, all participants will receive a certificate of participation upon completing the workshop." },
  { q: "What is the registration fee?", a: "The registration fee is Free" },
  { q: "How do I confirm my registration?", a: "After filling the registration form, join the whatsapp group" },
  { q: "Where is the venue?", a: "The workshop will be held at Chaitanya Bharathi Institute of Technology (CBIT), Hyderabad." },
  { q: "How can I contact for queries?", a: "You can reach us through the contact section on this website or join our WhatsApp group for quick responses." },
];

const FAQSection = () => (
  <section id="faq" className="py-16 sm:py-24">
    <div className="container px-4 sm:px-6 max-w-2xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="glass rounded-xl border border-border/30 px-5"
            >
              <AccordionTrigger className="text-sm sm:text-base text-foreground font-medium text-left py-4 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollReveal>
    </div>
  </section>
);

export default FAQSection;

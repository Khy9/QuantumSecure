import ScrollReveal from "@/components/ScrollReveal";
import cybermindspaceLogo from "@/assets/cybermindspace-logo.png";

const OutreachPartnerSection = () => (
  <section className="py-16 sm:py-24">
    <div className="container px-4 sm:px-6">
      <ScrollReveal>
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Outreach <span className="text-gradient">Partner</span>
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="glass rounded-2xl p-6 sm:p-8 max-w-md mx-auto text-center space-y-5">
          <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden bg-background/80 border border-border/30 flex items-center justify-center">
            <img
              src={cybermindspaceLogo}
              alt="CyberMindSpace"
              className="w-full h-full object-contain rounded-full"
              style={{ mixBlendMode: "screen" }}
            />
          </div>
          <h3 className="text-lg font-semibold text-foreground">CyberMindSpace</h3>
          <p className="text-sm text-muted-foreground">
            Contact us for sponsorship and outreach opportunities.
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default OutreachPartnerSection;

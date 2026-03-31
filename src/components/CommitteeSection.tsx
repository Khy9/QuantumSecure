import ScrollReveal from "@/components/ScrollReveal";
import { User, Crown, Award } from "lucide-react";

const advisoryLeft = [
  { name: "Prof. K. Krishna Veni", role: "Vice Principal-Acad., CBIT" },
  { name: "Prof. P. Ravinder Reddy", role: "Head-RSE, CBIT" },
  { name: "Prof. Umakanta Choudhary", role: "Advisor-I&L, CBIT" },
  { name: "Prof. N. V. Koteswarao", role: "Director-IQAC, CBIT" },
  { name: "Prof. B. Linga Reddy", role: "Director-SAP, CBIT" },
  { name: "Prof. A. D. Sarma", role: "Advisor R&D CBIT(A)" },
];

const advisoryRight = [
  { name: "Prof. P. V. R. Ravindra Reddy", role: "Vice Principal-Admin." },
  { name: "Prof. D. Krishna Reddy", role: "Director-R&D, CBIT" },
  { name: "Prof. Suresh Pabboju", role: "Director-AEC, CBIT" },
  { name: "Prof. P. Prabhakar Reddy", role: "Director-Acad., CBIT" },
  { name: "Prof. N. L. N. Reddy", role: "Advisor-CDC, CBIT" },
  { name: "Prof. K. Jagannadha Rao", role: "Head-Civil Engg." },
];

const MemberRow = ({ name, role }: { name: string; role: string }) => (
  <div className="flex items-center gap-3 py-2">
    <div className="w-8 h-8 rounded-full bg-muted/50 border border-border/30 flex items-center justify-center flex-shrink-0">
      <User className="w-4 h-4 text-muted-foreground" />
    </div>
    <div className="min-w-0">
      <p className="text-sm font-medium text-foreground truncate">{name}</p>
      <p className="text-xs text-muted-foreground truncate">{role}</p>
    </div>
  </div>
);

const CommitteeSection = () => (
  <section id="committee" className="py-16 sm:py-24">
    <div className="container px-4 sm:px-6">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Organizing <span className="text-gradient">Committee</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm sm:text-base">
            Meet the leadership behind QuantumSecure
          </p>
        </div>
      </ScrollReveal>

      {/* Chief Patron & Patron */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
        <ScrollReveal>
          <div className="glass rounded-2xl p-6 text-center h-full card-glow">
            <Crown className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Chief Patron</p>
            <p className="text-lg font-semibold text-foreground">Sri. N. Subash</p>
            <p className="text-sm text-muted-foreground">President, CBIT(A)</p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="glass rounded-2xl p-6 text-center h-full card-glow">
            <Award className="w-8 h-8 text-secondary mx-auto mb-3" />
            <p className="text-xs uppercase tracking-widest text-secondary font-semibold mb-2">Patron</p>
            <p className="text-lg font-semibold text-foreground">Prof. C. V. Narasimhulu</p>
            <p className="text-sm text-muted-foreground">Principal, CBIT(A)</p>
          </div>
        </ScrollReveal>
      </div>

      {/* Advisory Committee */}
      <ScrollReveal>
        <div className="glass rounded-2xl p-5 sm:p-8 max-w-5xl mx-auto">
          <h3 className="text-lg font-semibold text-foreground mb-6 text-center border-b border-border/30 pb-3">
            Advisory Committee
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0">
            <div className="space-y-0">
              {advisoryLeft.map((m) => (
                <MemberRow key={m.name} name={m.name} role={m.role} />
              ))}
            </div>
            <div className="space-y-0">
              {advisoryRight.map((m) => (
                <MemberRow key={m.name} name={m.name} role={m.role} />
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default CommitteeSection;

import ScrollReveal from "@/components/ScrollReveal";
import { User } from "lucide-react";

const committees = [
  {
    title: "Faculty Coordinators",
    members: [
      { name: "Dr. Faculty Name", role: "Professor, CSE Department" },
      { name: "Dr. Faculty Name", role: "Associate Professor, IT Department" },
    ],
  },
  {
    title: "Student Coordinators",
    members: [
      { name: "Student Name", role: "Club Lead" },
      { name: "Student Name", role: "Vice Lead" },
    ],
  },
  {
    title: "Technical Team",
    members: [
      { name: "Student Name", role: "Technical Lead" },
      { name: "Student Name", role: "Developer" },
    ],
  },
  {
    title: "Design & Media Team",
    members: [
      { name: "Student Name", role: "Design Lead" },
      { name: "Student Name", role: "Social Media" },
    ],
  },
];

const CommitteeSection = () => (
  <section id="committee" className="py-16 sm:py-24">
    <div className="container px-4 sm:px-6">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Organizing <span className="text-gradient">Committee</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm sm:text-base">
            Meet the team behind QuantumSecure
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
        {committees.map((group) => (
          <ScrollReveal key={group.title}>
            <div className="glass rounded-2xl p-5 sm:p-6 h-full">
              <h3 className="text-lg font-semibold text-foreground mb-4 border-b border-border/30 pb-2">
                {group.title}
              </h3>
              <div className="space-y-3">
                {group.members.map((member, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted border border-border/30 flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{member.name}</p>
                      <p className="text-xs text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default CommitteeSection;

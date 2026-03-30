import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DetailsSection from "@/components/DetailsSection";
import WhatYoullLearnSection from "@/components/WhatYoullLearnSection";
import TopicsSection from "@/components/TopicsSection";
import WhoShouldAttendSection from "@/components/WhoShouldAttendSection";
import WorkshopHighlightsSection from "@/components/WorkshopHighlightsSection";
import ScheduleSection from "@/components/ScheduleSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AuroraBackground from "@/components/AuroraBackground";

const Index = () => (
  <div className="min-h-screen bg-background relative">
    <div className="fixed inset-0 z-0">
      <AuroraBackground />
      <div className="absolute inset-0 grid-bg" />
    </div>
    <div className="relative z-10">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DetailsSection />
      <WhatYoullLearnSection />
      <TopicsSection />
      <WhoShouldAttendSection />
      <WorkshopHighlightsSection />
      <ScheduleSection />
      <ContactSection />
      <Footer />
    </div>
  </div>
);

export default Index;

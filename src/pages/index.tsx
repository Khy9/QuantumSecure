import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DetailsSection from "@/components/DetailsSection";
import WhatYoullLearnSection from "@/components/WhatYoullLearnSection";
import TopicsSection from "@/components/TopicsSection";
import WhoShouldAttendSection from "@/components/WhoShouldAttendSection";
import WorkshopHighlightsSection from "@/components/WorkshopHighlightsSection";
import ScheduleSection from "@/components/ScheduleSection";
import RegisterSection from "@/components/RegisterSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <DetailsSection />
    <WhatYoullLearnSection />
    <TopicsSection />
    <WhoShouldAttendSection />
    <WorkshopHighlightsSection />
    <ScheduleSection />
    <RegisterSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;

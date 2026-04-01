import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";

// Lazy load sections below the fold
const DetailsSection = lazy(() => import("@/components/DetailsSection"));
const WhatYoullLearnSection = lazy(() => import("@/components/WhatYoullLearnSection"));
const TopicsSection = lazy(() => import("@/components/TopicsSection"));
const RegisterSection = lazy(() => import("@/components/RegisterSection"));
const WhoShouldAttendSection = lazy(() => import("@/components/WhoShouldAttendSection"));
const WorkshopHighlightsSection = lazy(() => import("@/components/WorkshopHighlightsSection"));
const ScheduleSection = lazy(() => import("@/components/ScheduleSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const CommitteeSection = lazy(() => import("@/components/CommitteeSection"));
const OutreachPartnerSection = lazy(() => import("@/components/OutreachPartnerSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const Footer = lazy(() => import("@/components/Footer"));
const AuroraBackground = lazy(() => import("@/components/AuroraBackground"));

const Index = () => (
  <div className="min-h-screen bg-background relative">
    <div className="fixed inset-0 z-0">
      <Suspense fallback={null}>
        <AuroraBackground />
      </Suspense>
      <div className="absolute inset-0 grid-bg" />
    </div>
    <div className="relative z-10">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Suspense fallback={<div className="h-20" />}>
        <DetailsSection />
        <WhatYoullLearnSection />
        <TopicsSection />
        <WhoShouldAttendSection />
        <WorkshopHighlightsSection />
        <ScheduleSection />
        <RegisterSection />
        <CommitteeSection />
        <ContactSection />
        <FAQSection />
        <OutreachPartnerSection />
        <Footer />
      </Suspense>
    </div>
  </div>
);

export default Index;

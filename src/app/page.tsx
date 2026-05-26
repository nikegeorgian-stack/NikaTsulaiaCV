"use client";

import { useState } from "react";
import { LanguageProvider } from "@/hooks/useLanguage";
import { Preloader } from "@/components/Preloader";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { LanguagesSection } from "@/components/LanguagesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <LanguageProvider>
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      <ParticleBackground />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <LanguagesSection />
        <ContactSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

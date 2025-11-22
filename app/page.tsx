"use client";

import HeroSection from "../components/HeroSection";
import NewsSection from "../components/NewsSection";
import AboutSection from "../components/AboutSection";
import GamesSection from "../components/GamesSection";
import StudioSection from "../components/StudioSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <NewsSection />

      <div style={{ backgroundColor: "#0d0d0d", color: "white" }}>
        <GamesSection />
      </div>

      <div className="bg-primary text-white">
         <AboutSection />
      </div>

      <div className="bg-light">
        <StudioSection />
      </div>

      <ContactSection />
    </main>
  );
}
"use client";

import NavbarComponent from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import GamesSection from "../components/GamesSection";
import StudioSection from "../components/StudioSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <HeroSection />
      <AboutSection />
      <StudioSection />
      <GamesSection />
      <ContactSection />
      <Footer />
    </>
  );
}

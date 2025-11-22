"use client"; // Wajib karena pake Carousel interaktif

import { Carousel, Button, Container } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const slides = [
    {
      id: 1,
      image: "/images/games/persona5.jpg", // Pastikan gambar ini ada
      title: "PERSONA 5 ROYAL",
      subtitle: "Change the World. Become a Phantom Thief.",
      link: "/games/persona5",
      color: "#e60012" // Merah Persona
    },
    {
      id: 2,
      image: "/images/games/sonic.jpg",
      title: "SONIC SUPERSTARS",
      subtitle: "New Thrills. Classic Feels.",
      link: "/games/sonic",
      color: "#0066cc" // Biru Sonic
    },
    {
      id: 3,
      image: "/images/games/yakuza.jpg",
      title: "LIKE A DRAGON: INFINITE WEALTH",
      subtitle: "The Dragon Returns in Hawaii.",
      link: "/games/yakuza",
      color: "#ffd700" // Emas Yakuza
    }
  ];

  return (
    <section className="hero-slider">
      <Carousel fade interval={5000} controls={true} indicators={true}>
        {slides.map((slide) => (
          <Carousel.Item key={slide.id} style={{ height: "85vh", position: "relative" }}>
            {/* Background Image Gelap */}
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1 }}></div>
            
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              style={{ objectFit: "cover" }}
              priority={slide.id === 1}
            />

            {/* Caption Content mirip SEGA.com (Di Kiri Bawah/Tengah) */}
            <Carousel.Caption className="text-start mb-5 pb-5" style={{ zIndex: 2 }}>
              <Container>
                <h1 className="display-3 fw-bold text-uppercase" style={{ textShadow: "2px 2px 10px rgba(0,0,0,0.8)" }}>
                  {slide.title}
                </h1>
                <p className="fs-4 d-none d-md-block" style={{ textShadow: "1px 1px 5px rgba(0,0,0,0.8)" }}>
                  {slide.subtitle}
                </p>
                <Link href={slide.link}>
                  <Button 
                    size="lg" 
                    style={{ 
                      backgroundColor: slide.color, 
                      borderColor: slide.color, 
                      borderRadius: "0", /* SEGA suka kotak */
                      fontWeight: "bold",
                      padding: "10px 30px"
                    }}
                  >
                    LEARN MORE
                  </Button>
                </Link>
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}
"use client";

import { Container } from "react-bootstrap";

export default function HeroSection() {
  return (
    <section className="hero d-flex align-items-center">
      <Container className="text-center text-light">
        <h1 className="fw-bold display-4">Welcome to SEGA</h1>
        <p className="lead">Creating the Future of Entertainment Since 1960</p>
      </Container>
    </section>
  );
}

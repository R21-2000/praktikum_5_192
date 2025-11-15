"use client";

import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2 className="fw-bold mb-3">About SEGA</h2>
            <p>
              SEGA is a global leader in interactive entertainment, known for
              creating iconic gaming experiences enjoyed by millions worldwide.
              From Sonic the Hedgehog to Yakuza, our legacy continues to shape
              the industry.
            </p>
            <p>
              Founded in 1960 and headquartered in Tokyo, Japan — SEGA remains
              committed to delivering innovative entertainment across consoles,
              arcades, and digital platforms.
            </p>
          </Col>

          <Col md={6}>
            <Image
              src="/images/sega-hq.jpg"
              alt="SEGA Headquarters"
              width={600}
              height={400}
              className="rounded shadow"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

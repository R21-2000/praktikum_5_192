"use client";

import { Container, Row, Col } from "react-bootstrap";

export default function StudioSection() {
  return (
    <section id="studios" className="py-5">
      <Container>
        <h2 className="fw-bold text-center mb-4">SEGA Studios</h2>
        <Row className="text-center">
          <Col md={3}><p>Ryu Ga Gotoku Studio</p></Col>
          <Col md={3}><p>Atlus</p></Col>
          <Col md={3}><p>Creative Assembly</p></Col>
          <Col md={3}><p>Sports Interactive</p></Col>
        </Row>
      </Container>
    </section>
  );
}

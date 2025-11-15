"use client";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function ContactSection() {
  return (
    <section id="contact" className="py-5 bg-dark text-light">
      <Container>
        <h2 className="fw-bold text-center mb-4">Contact Us</h2>

        <Row>
          <Col md={6}>
            <p>SEGA Corporation HQ</p>
            <p>Tokyo, Japan</p>
            <p>Email: info@sega.com</p>
          </Col>

          <Col md={6}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control as="textarea" rows={3} placeholder="Message" />
              </Form.Group>

              <Button variant="primary">Send Message</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
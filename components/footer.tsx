"use client";

import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="py-3 bg-dark text-center text-light">
      <Container>
        <small>© {new Date().getFullYear()} SEGA Corporation. All Rights Reserved.</small>
      </Container>
    </footer>
  );
}

"use client";

import { Navbar, Nav, Container } from "react-bootstrap";
import Image from "next/image";

export default function NavbarComponent() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="py-3">
      <Container>
        <Navbar.Brand href="#">
          <Image src="/images/SEGA_logo.png" alt="SEGA" width={100} height={30} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="nav" />
        <Navbar.Collapse id="nav">
          <Nav className="ms-auto gap-3">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#games">Games</Nav.Link>
            <Nav.Link href="#studios">Studios</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

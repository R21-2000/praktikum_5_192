"use client";
import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";


export default function NavbarComponent() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand as={Link} href="/">SEGA</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#studios">Studios</Nav.Link>
            <Nav.Link href="#games">Games</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link as={Link} href="/public/images/studios/rgg.jpeg">RGG Studio</Nav.Link>
            <Nav.Link as={Link} href="/public/images/games/sonic.png">Sonic</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 );
}
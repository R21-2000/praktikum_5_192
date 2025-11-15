"use client";

import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";

const games = [
  { title: "Sonic the Hedgehog", img: "/images/sonic.png" },
  { title: "Yakuza / Like a Dragon", img: "/images/yakuza.jpg" },
  { title: "Persona 5", img: "/images/persona5.jpg" },
  { title: "Total War Series", img: "/images/totalwar.jpeg" },
];

export default function GamesSection() {
  return (
    <section id="games" className="py-5 bg-dark text-light">
      <Container>
        <h2 className="fw-bold text-center mb-4">Popular Games</h2>
        <Row>
          {games.map((g, i) => (
            <Col md={3} key={i} className="mb-4">
              <Card className="bg-secondary text-light">
                <Image
                  src={g.img}
                  alt={g.title}
                  width={400}
                  height={250}
                  className="card-img-top"
                />
                <Card.Body>
                  <Card.Title>{g.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
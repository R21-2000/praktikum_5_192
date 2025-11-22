import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";

export default function NewsSection() {
  const news = [
    { date: "NOV 22", title: "Sonic x Shadow Generations Announced!", category: "GAMES" },
    { date: "NOV 18", title: "SEGA Sammy Reports Strong Financial Growth", category: "CORPORATE" },
    { date: "OCT 30", title: "Like a Dragon: Infinite Wealth Pre-order Bonus", category: "GAMES" },
  ];

  return (
    <section className="py-5 bg-white">
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
          <h2 className="text-uppercase fw-bold text-dark" style={{ letterSpacing: "2px" }}>Latest News</h2>
          <Link href="/news" className="text-decoration-none fw-bold text-primary">VIEW ALL NEWS &rarr;</Link>
        </div>
        <Row>
          {news.map((item, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <Card className="h-100 border-0 shadow-sm hover-effect">
                <Card.Body>
                  <span className="badge bg-primary mb-2">{item.category}</span>
                  <small className="text-muted d-block mb-1">{item.date}</small>
                  <h5 className="card-title fw-bold">
                    <Link href="#" className="text-dark text-decoration-none stretched-link">
                      {item.title}
                    </Link>
                  </h5>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
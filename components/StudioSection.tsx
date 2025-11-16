import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";


export default function StudioSection() {
const studios = [
{ name: "Ryu Ga Gotoku Studio", img: "/images/studios/rgg.jpeg", link: "/studios/rgg" },
{ name: "Atlus", img: "/images/studios/atlus.jpg", link: "/studios/atlus" },
{ name: "Creative Assembly", img: "/images/studios/ca.png", link: "/studios/creative-assembly" },
{ name: "Sports Interactive", img: "/images/studios/si.jpeg", link: "/studios/sports-interactive" },
];


return (
<section id="studios" className="py-5">
<Container>
<h2 className="section-title text-center mb-4">SEGA Studios</h2>
<Row>
{studios.map((studio) => (
<Col md={3} key={studio.name} className="mb-4">
<Card className="sega-card">
<Image src={studio.img} alt={studio.name} width={400} height={300} className="card-img-top" />
<Card.Body className="text-center">
<Card.Title>{studio.name}</Card.Title>
<Link className="btn btn-primary" href={studio.link}>Visit Page</Link>
</Card.Body>
</Card>
</Col>
))}
</Row>
</Container>
</section>
);
}
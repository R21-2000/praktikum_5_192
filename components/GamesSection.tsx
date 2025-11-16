import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";


export default function GamesSection() {
const games = [
{ name: "Sonic the Hedgehog", img: "/images/games/sonic.png", link: "/games/sonic" },
{ name: "Yakuza / Like a Dragon", img: "/images/games/yakuza.jpg", link: "/games/yakuza" },
{ name: "Persona 5", img: "/images/games/persona5.jpg", link: "/games/persona5" },
{ name: "Total War Series", img: "/images/games/totalwar.jpeg", link: "/games/totalwar" },
];


return (
<section id="games" className="py-5 bg-dark">
<Container>
<h2 className="section-title text-center mb-4">Popular SEGA Games</h2>
<Row>
{games.map((game) => (
<Col md={3} key={game.name} className="mb-4">
<Card className="sega-card">
<Image src={game.img} alt={game.name} width={400} height={300} className="card-img-top" />
<Card.Body className="text-center">
<Card.Title>{game.name}</Card.Title>
<Link className="btn btn-primary" href={game.link}>Visit Page</Link>
</Card.Body>
</Card>
</Col>
))}
</Row>
</Container>
</section>
);
}
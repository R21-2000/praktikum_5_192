import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";


export default function AboutSection() {
return (
<section id="about" className="py-5">
<Container>
<Row>
<Col md={6}>
<h2 className="section-title">About SEGA</h2>
<p>
SEGA is one of the most iconic video game companies in the world,
known for creating legendary franchises enjoyed globally.
</p>
</Col>
<Col md={6}>
<Image src="/images/hero_sega.png" alt="SEGA" width={500} height={300} />
</Col>
</Row>
</Container>
</section>
);
}
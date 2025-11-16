import { Container, Form, Button } from "react-bootstrap";


export default function ContactSection() {
return (
<section id="contact" className="py-5">
<Container>
<h2 className="section-title text-center mb-4">Contact Us</h2>
<Form className="mx-auto" style={{ maxWidth: "600px" }}>
<Form.Control type="text" placeholder="Name" className="mb-3" />
<Form.Control type="email" placeholder="Email" className="mb-3" />
<Form.Control as="textarea" rows={4} placeholder="Message" className="mb-3" />
<Button variant="primary" type="submit">Send</Button>
</Form>
</Container>
</section>
);
}
import Image from "next/image";
import { Container } from "react-bootstrap";

export default function SonicPage() {
  return (
    <Container className="py-5">
      <h1 className="section-title">Sonic the Hedgehog</h1>
      <Image
        src="/images/games/sonic.jpg"
        width={800}
        height={400}
        alt="Sonic the Hedgehog"
      />
      <p className="mt-3">
        Sonic the Hedgehog adalah maskot ikonik dari SEGA, pertama kali muncul pada tahun 1991 di platform Sega Genesis.
      </p>
      <p>
        Game ini populer karena gameplay cepat, level penuh momentum, dan karakter-karakter seperti Tails dan Dr. Robotnik. Selama lebih dari 30 tahun, Sonic telah berevolusi menjadi waralaba besar yang mencakup game, komik, dan film layar lebar.
      </p>
      <p>
        Salah satu entri terbaru dalam seri ini adalah <em>Sonic Frontiers</em>, yang menampilkan eksplorasi dunia terbuka dan mekanik petualangan baru.
      </p>
    </Container>
  );
}

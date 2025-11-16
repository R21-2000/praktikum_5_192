import Image from "next/image";
import { Container } from "react-bootstrap";

export default function Persona5Page() {
  return (
    <Container className="py-5">
      <h1 className="section-title">Persona 5</h1>
      <Image
        src="/images/games/persona5.jpg"
        width={800}
        height={400}
        alt="Persona 5"
      />
      <p className="mt-3">
        <em>Persona 5</em> adalah RPG turn-based yang dikembangkan oleh Atlus dan diterbitkan di banyak wilayah oleh SEGA.
      </p>
      <p>
        Dalam cerita, pemain mengendalikan sekelompok murid sekolah menengah yang menjalani kehidupan ganda sebagai “Phantom Thieves”, mencuri keinginan orang dewasa dari dunia batin (Palaces) mereka.
      </p>
      <p>
        Persona 5 menjadi titik balik untuk seri Persona: desain visualnya stylish, musik yang membantu mood, dan sistem “confidant” membuatnya sangat populer. Game ini juga melahirkan spin-off seperti <em>Persona 5 Royal</em> dan adaptasi anime.
      </p>
    </Container>
  );
}

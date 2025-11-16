import Image from "next/image";
import { Container } from "react-bootstrap";

export default function YakuzaPage() {
  return (
    <Container className="py-5">
      <h1 className="section-title">Yakuza / Like a Dragon</h1>
      <Image
        src="/images/games/yakuza.jpg"
        width={800}
        height={400}
        alt="Yakuza / Like a Dragon"
      />
      <p className="mt-3">
        Seri <em>Yakuza</em> (di Jepang dikenal sebagai <em>Ryu Ga Gotoku</em>) pertama kali dirilis tahun 2005 oleh SEGA dan dikembangkan oleh Ryu Ga Gotoku Studio.
      </p>
      <p>
        Franchise ini menitikberatkan pada narasi kriminal, kehidupan mafia Jepang, dan konflik emosional antar karakter. Mulai dari aksi beat-em-up hingga RPG taktis, seri ini berevolusi menjadi <em>Like a Dragon</em> dengan mekanik turn-based di entri terbaru.
      </p>
      <p>
        Beberapa entri populer adalah <em>Yakuza 0</em>, prekuel yang disambut baik, serta <em>Like a Dragon: Infinite Wealth</em> yang memperluas lore protagonis seperti Ichiban Kasuga dan Kazuma Kiryu.
      </p>
    </Container>
  );
}

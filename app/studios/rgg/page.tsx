import Image from "next/image";
import { Container } from "react-bootstrap";

export default function RGGPage() {
  return (
    <Container className="py-5">
      <h1 className="section-title">Ryu Ga Gotoku Studio</h1>
      <Image
        src="/images/studios/rgg.jpEg"
        width={800}
        height={400}
        alt="Ryu Ga Gotoku Studio"
      />
      <p className="mt-3">
        Ryu Ga Gotoku Studio, juga dikenal sebagai Sega CS R&D Dept. No. 1, adalah divisi pengembangan game milik SEGA yang didirikan oleh Toshihiro Nagoshi. Studio ini secara resmi berdiri pada tahun 2011.
      </p>
      <p>
        Studio ini terkenal karena menciptakan seri **Yakuza / Like a Dragon**, sebuah franchise drama kriminal dan RPG yang sangat populer di Jepang dan internasional.
      </p>
      <p>
        Selain itu, RGG Studio juga mengerjakan game-game lain seperti **Binary Domain**, seri **Judgment**, dan kontribusi pada seri **Virtua Fighter**.
      </p>
      <p>
        Dengan pendekatan naratif yang kuat, karakter mendalam, dan dunia yang hidup, Ryu Ga Gotoku Studio telah menjadi salah satu tulang punggung kreatif SEGA modern.
      </p>
    </Container>
  );
}

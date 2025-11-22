import Image from "next/image";
import { Container } from "react-bootstrap";

export default function TotalWarPage() {
  return (
    <Container className="py-5">
      <h1 className="section-title">Total War Series</h1>
      <Image
        src="/images/games/totalwar.jpg"
        width={800}
        height={400}
        alt="Total War Series"
      />
      <p className="mt-3">
        Seri <em>Total War</em> adalah franchise strategi yang dikembangkan oleh Creative Assembly, di bawah naungan SEGA sejak studio ini diakuisisi pada 2005.
      </p>
      <p>
        Total War menggabungkan elemen strategi berbasis giliran (turn-based) pada peta kampanye dan pertarungan real-time taktis.
      </p>
      <p>
        Beberapa judul terkenalnya adalah <em>Total War: Shogun 2</em>, yang berlatar di Jepang era Sengoku, dan <em>Total War: Three Kingdoms</em> yang mengangkat era Tiga Kerajaan Tiongkok.
      </p>
    </Container>
  );
}

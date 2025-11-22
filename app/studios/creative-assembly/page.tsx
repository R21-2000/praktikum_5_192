import Image from "next/image";
import { Container } from "react-bootstrap";

export default function CASPage() {
  return (
    <Container className="py-5">
      <h1 className="section-title">Creative Assembly</h1>
      <Image
        src="/images/studios/ca.png"
        width={800}
        height={400}
        alt="Creative Assembly"
      />
      <p className="mt-3">
        Creative Assembly adalah studio pengembang asal Inggris, berdiri sejak tahun 1987 oleh Tim Ansell.Studio ini diakuisisi oleh SEGA dan menjadi salah satu pengembang strategis utama.  
      </p>
      <p>
        Mereka paling dikenal lewat seri **Total War**, sebuah franchise strategi epik yang menggabungkan strategi berbasis giliran (turn-based) dengan taktik real-time dalam pertempuran besar.  
      </p>
      <p>
        Beberapa game Total War populer dari mereka adalah *Total War: Shogun 2*, yang menggambarkan era Jepang Sengoku dengan diplomasi, pertempuran, dan karakter berpengaruh.  
      </p>
    </Container>
  );
}

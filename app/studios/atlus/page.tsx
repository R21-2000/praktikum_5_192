import Image from "next/image";
import { Container } from "react-bootstrap";

export default function AtlusPage() {
  return (
    <Container className="py-5">
      <h1 className="section-title">Atlus</h1>
      <Image
        src="/images/studios/atlus.jpg"
        width={800}
        height={400}
        alt="Atlus"
      />
      <p className="mt-3">
        Atlus adalah studio pengembang Jepang yang terkenal berkat seri RPG seperti **Persona** dan **Shin Megami Tensei**. Meskipun Atlus beroperasi independen di banyak proyek, SEGA memiliki hubungan kuat dengan Atlus, terutama dalam publikasi dan distribusi beberapa judul.  
      </p>
      <p>
        Salah satu kontribusi terbesar Atlus adalah **Persona 5**, RPG bergaya “turn-based” dengan cerita siswa sekolah menengah yang menjalani kehidupan ganda sebagai Phantom Thieves (lihat referensi 3).  
      </p>
      <p>
        Seri **Persona** adalah bagian dari waralaba lebih besar bernama **Megami Tensei**, dan Atlus dikenal karena sensitifitas naratif, desain karakter yang khas, dan mekanik “Persona” yang unik.  
      </p>
    </Container>
  );
}

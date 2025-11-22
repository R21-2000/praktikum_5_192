import Image from "next/image";

import { Container } from "react-bootstrap";

export default function SIPage() {
  return (
    <Container className="py-5">
      <h1 className="section-title">Sports Interactive</h1>
      <Image
              src="/images/studios/si.jpeg"
              width={800}
              height={400}
              alt="Ryu Ga Gotoku Studio"
            />
      <p className="mt-3">
        Sports Interactive (SI) adalah studio pengembang game simulasi olahraga yang berbasis di London, didirikan oleh saudara Paul dan Oliver Collyer.
      </p>
      <p>
        Pada tahun 2003, mereka berpisah dari penerbit sebelumnya dan menandatangani kesepakatan dengan SEGA untuk terus mengembangkan seri manajemen sepak bola mereka sebagai <strong>Football Manager</strong>.
      </p>
      <p>
        Berbasis di kampus kreatif Here East, SI telah membangun reputasi sebagai pionir simulasi manajer olahraga dengan komunitas penggemar global dan dampak budaya besar dalam industri game olahraga.
      </p>
    </Container>
  );
}

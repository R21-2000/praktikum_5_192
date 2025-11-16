import Image from "next/image";


export default function HeroSection() {
return (
<div className="text-center" style={{ position: "relative" }}>
<Image
src="/images/sega-bg.jpg"
alt="SEGA Hero"
width={1600}
height={600}
style={{ width: "100%", height: "auto" }}
/>
<h1 className="position-absolute top-50 start-50 translate-middle fw-bold text-light display-3">
Welcome to SEGA
</h1>
</div>
);
}
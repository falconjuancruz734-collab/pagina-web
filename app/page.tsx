import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { WhyCoach } from "@/components/WhyCoach";
import { About } from "@/components/About";
import { LenteAI } from "@/components/LenteAI";
import { Modalities } from "@/components/Modalities";
import { Work } from "@/components/Work";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* Carrusel de logos oculto por pedido del cliente (jul 2026).
          El componente sigue en components/LogosMarquee.tsx para reactivarlo. */}
      <Problem />
      <WhyCoach />
      <About />
      {/* Sección "Cómo trabajo" (Method) dada de baja por pedido del cliente. */}
      <Modalities />
      <LenteAI />
      <Testimonials />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}

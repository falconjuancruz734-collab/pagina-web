import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { WhyCoach } from "@/components/WhyCoach";
import { About } from "@/components/About";
import { LenteAI } from "@/components/LenteAI";
import { Modalities } from "@/components/Modalities";
import { Newsletter } from "@/components/Newsletter";
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
      {/* Las tarjetas de notas y prensa (components/Work.tsx) se
          reemplazaron por el alta al newsletter (ago 2026). */}
      <Newsletter />
      <Contact />
      <Footer />
    </main>
  );
}

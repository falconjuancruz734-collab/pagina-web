import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogosMarquee } from "@/components/LogosMarquee";
import { Problem } from "@/components/Problem";
import { About } from "@/components/About";
import { Method } from "@/components/Method";
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
      <LogosMarquee />
      <Problem />
      <About />
      <Method />
      <LenteAI />
      <Modalities />
      <Testimonials />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}

import type { Metadata } from "next";
import { Montserrat, Newsreader, Great_Vibes } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

// Serif editorial para los acentos en cursiva (hook del hero, palabras destacadas).
// Variable 200–800: da los pesos bold que Instrument Serif no tiene.
const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

// Placeholder del monograma "jcf." hasta tener el SVG de la firma real
const signature = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-signature",
});

export const metadata: Metadata = {
  title: "Juan Cruz Falcón — Sales Coach",
  description:
    "Coach de ventas para equipos comerciales. La meta de ventas ya está definida. Cómo alcanzarla, no. Acompaño a tu equipo a cumplir sus objetivos y lograr su máxima performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} ${newsreader.variable} ${signature.variable} font-sans antialiased`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}

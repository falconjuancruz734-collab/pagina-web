import type { Metadata } from "next";
import { Montserrat, Newsreader, Great_Vibes } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  // La itálica real se usa en los acentos de los títulos; sin cargarla el
  // navegador falsearía la redonda inclinándola.
  style: ["normal", "italic"],
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
  metadataBase: new URL("https://juancruzfalcon.com"),
  title: "Juan Cruz Falcón — Sales Coach",
  description:
    "Coach de ventas para equipos comerciales. La meta de ventas ya está definida. Cómo alcanzarla, no. Acompaño a tu equipo a cumplir sus objetivos y lograr su máxima performance.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: "Juan Cruz Falcón — Sales Coach",
    title: "Juan Cruz Falcón — Sales Coach",
    description:
      "Coach de ventas para equipos comerciales. Acompaño a tu equipo a cumplir sus objetivos y lograr su máxima performance.",
    images: [
      {
        url: "/thumbnail.jpg",
        width: 1200,
        height: 750,
        alt: "Juan Cruz Falcón — Sales Coach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Cruz Falcón — Sales Coach",
    description:
      "Coach de ventas para equipos comerciales. Acompaño a tu equipo a cumplir sus objetivos y lograr su máxima performance.",
    images: ["/thumbnail.jpg"],
  },
};

/* Datos estructurados: Juan como persona + el sitio. Google los usa para
   entender quién es y mostrar resultados enriquecidos. */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://juancruzfalcon.com/#juan",
      name: "Juan Cruz Falcón",
      jobTitle: "Sales Coach",
      description:
        "Coach de ventas y desarrollo de equipos comerciales. Más de 15 años liderando equipos de ventas y marketing en Hewlett Packard, Renault y GA.MA Italy. Fundador de Wyder.",
      url: "https://juancruzfalcon.com",
      email: "jcf@juancruzfalcon.com",
      sameAs: [
        "https://www.instagram.com/juancruz.falcon_",
        "https://www.linkedin.com/in/juan-cruz-falcon-1a12b668/",
      ],
      knowsAbout: [
        "Venta consultiva",
        "Coaching comercial",
        "Desarrollo de equipos de ventas",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://juancruzfalcon.com/#web",
      url: "https://juancruzfalcon.com",
      name: "Juan Cruz Falcón — Sales Coach",
      inLanguage: "es",
      publisher: { "@id": "https://juancruzfalcon.com/#juan" },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}

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
  title: "Juan Cruz Falcón — Coach de venta consultiva",
  description:
    "Coach de ventas para equipos comerciales. La meta de ventas ya está definida. Cómo alcanzarla, no. Acompaño a tu equipo a cumplir sus objetivos y lograr su máxima performance.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: "Juan Cruz Falcón — Coach de venta consultiva",
    title: "Juan Cruz Falcón — Coach de venta consultiva",
    description:
      "Coach de ventas para equipos comerciales. Acompaño a tu equipo a cumplir sus objetivos y lograr su máxima performance.",
    images: [
      {
        url: "/thumbnail.jpg",
        width: 1200,
        height: 750,
        alt: "Juan Cruz Falcón — Coach de venta consultiva",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Cruz Falcón — Coach de venta consultiva",
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
      jobTitle: "Coach de venta consultiva",
      description:
        "Coach de venta consultiva y desarrollo de equipos comerciales para empresas de Latinoamérica. Más de 15 años liderando equipos de ventas y marketing en Hewlett Packard, Renault y GA.MA Italy. Fundador de Wyder, empresa tecnológica de trade marketing con más de 200 empresas clientes.",
      url: "https://juancruzfalcon.com",
      email: "jcf@juancruzfalcon.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Buenos Aires",
        addressCountry: "AR",
      },
      sameAs: [
        "https://www.instagram.com/juancruz.falcon_",
        "https://www.linkedin.com/in/juan-cruz-falcon-1a12b668/",
      ],
      knowsAbout: [
        "Venta consultiva",
        "SPIN Selling",
        "Coaching comercial",
        "Desarrollo de equipos comerciales",
        "Negociación B2B",
        "Ventas de ciclo largo y ticket alto",
        "Gestión de objeciones",
        "Trade marketing",
      ],
      knowsLanguage: "es",
    },
    {
      "@type": "Organization",
      "@id": "https://juancruzfalcon.com/#wyder",
      name: "Wyder",
      description:
        "Empresa tecnológica de trade marketing que opera en México, Argentina, Uruguay y Centroamérica, con más de 200 empresas clientes en Latinoamérica.",
      founder: { "@id": "https://juancruzfalcon.com/#juan" },
      areaServed: ["MX", "AR", "UY", "Centroamérica"],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://juancruzfalcon.com/#servicio",
      name: "Coaching de venta consultiva para equipos comerciales",
      provider: { "@id": "https://juancruzfalcon.com/#juan" },
      serviceType: [
        "Capacitaciones en venta consultiva",
        "Sesiones de coaching comercial",
        "Acompañamiento de coaching mensual",
        "Agente comercial con IA (Lente)",
      ],
      areaServed: "Latinoamérica",
      availableLanguage: "es",
      url: "https://juancruzfalcon.com",
    },
    {
      "@type": "WebSite",
      "@id": "https://juancruzfalcon.com/#web",
      url: "https://juancruzfalcon.com",
      name: "Juan Cruz Falcón — Coach de venta consultiva",
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

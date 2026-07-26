/**
 * ─────────────────────────────────────────────────────────────
 *  CONTENIDO EDITABLE DEL SITIO
 *  Textos del doc "TEXTOS WEB JCF" (jul 2026).
 *  Todo lo marcado con [PLACEHOLDER] hay que reemplazarlo
 *  con la data real cuando esté disponible.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Juan Cruz Falcón",
  role: "Sales Coach",
  // [PLACEHOLDER] — reemplazar por el número real de WhatsApp (formato internacional, sin +)
  whatsapp: "https://wa.me/5491100000000",
  // Agenda de Juan — sin los UTM de Instagram (esta es la web, no el link-in-bio)
  calendly: "https://calendly.com/jc-falcon-/meet-con-juan-cruz-falcon",
  email: "jcf@juancruzfalcon.com",
  instagram: "https://www.instagram.com/juancruz.falcon_",
  linkedin: "https://www.linkedin.com/in/juan-cruz-falcon-1a12b668/",
};

export const hero = {
  hookLine1: "La meta de ventas",
  hookLine2: "ya está definida.",
  hookAccent: "Cómo alcanzarla",
  hookEnd: ", no.",
  title: "Coach de ventas para equipos comerciales",
  subtitle:
    "Acompaño a tu equipo a cumplir sus objetivos y lo potencio para lograr su máxima performance.",
};

/* Empresas para el carrusel de logos — wordmarks tipográficos hasta tener los SVG reales.
   Mezcla de marcas donde trabajó Juan y clientes de Lente. */
export const companies = [
  "Hewlett Packard",
  "Renault",
  "GA.MA Italy",
  "Wyder",
  "Urquiza Motos",
  "Jobly",
  "Anthea",
  "Grosomono",
];

export const problem = {
  headline: "El negocio exige resultados. Nadie trabaja cómo lograrlos.",
  paragraphs: [
    "Los directores miran el forecast. Los gerentes gestionan el número. Es su rol y es lo que exige el negocio.",
    "Pero en ese foco en el resultado, algo queda afuera: el día a día del equipo. El proceso. El método. El acompañamiento humano que determina si los objetivos se cumplen o no.",
    "No porque no quieran. Sino porque el negocio no les deja espacio para hacerlo.",
  ],
  highlight: {
    before: "Soy el socio estratégico que trabaja lo que ellos no pueden — ",
    emphasis: "el cómo, el proceso y las personas",
    after: " — para que ellos puedan enfocarse en lo que les corresponde.",
  },
};

export const about = {
  intro:
    "Soy Juan Cruz Falcón. Coach de ventas y desarrollo de equipos comerciales.",
  paragraphs: [
    "Pasé más de 15 años liderando equipos de ventas y marketing en empresas como Hewlett Packard, Renault y GA.MA Italy. Lancé productos, abrí mercados, regionalicé compañías y levanté capital. Viví de cerca lo que significa llevar un equipo a resultados — con todo lo que eso implica.",
    "Esa experiencia me llevó a fundar Wyder, empresa de trade marketing hoy operando en México, Argentina, Uruguay y Centroamérica, con más de 100 empresas clientes en Latinoamérica.",
    "Lo que aprendí en ese camino es lo que hoy llevo al coaching: que los números los mueven las personas. Y que las personas rinden mejor cuando tienen método, acompañamiento y alguien que crea en su potencial.",
  ],
  closing: "Por eso hago lo que hago.",
  brands: ["Hewlett Packard", "Renault", "GA.MA Italy", "Wyder"],
};

export const stats = [
  { value: 15, suffix: "+", label: "años liderando equipos de ventas y marketing" },
  { value: 100, suffix: "+", label: "empresas clientes en Latinoamérica" },
  { value: 4, suffix: "", label: "mercados: México, Argentina, Uruguay y Centroamérica" },
];

export const methodSteps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Antes de trabajar, entiendo. Analizo el equipo, sus perfiles, sus fortalezas y los gaps que están frenando los resultados. Defino un plan de trabajo individual y grupal.",
  },
  {
    number: "02",
    title: "Coaching comercial",
    description:
      "Trabajo con el equipo en método, técnicas y mentalidad de venta. Sesiones individuales y grupales orientadas a resultados concretos. No teoría — ejecución.",
  },
  {
    number: "03",
    title: "Lente — Tu agente comercial con IA",
    description:
      "El primer acompañamiento de coaching comercial con IA. Un asistente personalizado, disponible 24/7 para preparar reuniones, gestionar objeciones y consultar el contexto de cada cliente.",
    anchor: "#lente-ai",
  },
];

export const lente = {
  headline: "El primer acompañamiento de coaching comercial con IA.",
  intro:
    "Un asistente personalizado con el conocimiento de tu industria, tus clientes y tu metodología de venta. El coaching no termina cuando termina la sesión: Lente acompaña a tu equipo en cada interacción.",
  features: [
    "Personalizado con el conocimiento de tu industria, tus clientes y tu metodología de venta",
    "Disponible 24/7 para todo tu equipo comercial",
    "Prepara reuniones y ayuda a gestionar objeciones",
    "Consulta el contexto de cada cliente antes de cada interacción",
  ],
};

export const modalities = [
  {
    title: "Sesiones de coaching",
    tag: "Individual o grupal",
    description:
      "Para trabajar situaciones concretas, desarrollar habilidades específicas o acompañar al equipo en el día a día comercial.",
  },
  {
    title: "Capacitaciones",
    tag: "De 3 horas a 4 semanas",
    description:
      "Programas intensivos o progresivos sobre venta consultiva, adaptados a tu industria, tu equipo y tus objetivos.",
  },
  {
    title: "Acompañamiento mensual",
    tag: "Desarrollo continuo",
    description:
      "Sesiones individuales y grupales sostenidas en el tiempo, con seguimiento real de la evolución de cada vendedor.",
  },
];

/* Notas y prensa reales de Juan */
export type PressItem = {
  outlet: string;
  date: string;
  title: string;
  href: string;
  /** Imagen de portada en /public/notas (opcional) */
  image?: string;
  /** Cita del post para la portada tipográfica cuando no hay imagen (opcional) */
  excerpt?: string;
};

export const press: PressItem[] = [
  {
    outlet: "LinkedIn",
    date: "Jul 2026",
    title: "La tendencia que está frenando el crecimiento comercial de empresas de Latam",
    href: "https://www.linkedin.com/pulse/la-tendencia-que-est%C3%A1-frenando-el-crecimiento-comercial-falcon-io9if/",
    image: "/notas/tendencia-crecimiento-comercial.jpg",
  },
  {
    outlet: "LinkedIn",
    date: "Jul 2026",
    title: "Primera reunión con un posible cliente",
    href: "https://es.linkedin.com/posts/juan-cruz-falcon-1a12b668_primera-reunion-con-un-posible-cliente-activity-7486443385667493889-QRkg",
    excerpt:
      "La primera reunión no es para mostrar lo que vendés. Es para demostrar que entendés el mundo del cliente.",
  },
  {
    outlet: "El Economista",
    date: "Mar 2025",
    title: "¿Las palabras venden? Utiliza el discurso para enamorar al cliente",
    href: "https://www.eleconomista.com.mx/el-empresario/palabras-venden-utiliza-discurso-enamorar-cliente-20250324-751654.html",
    image: "/notas/palabras-venden.jpg",
  },
];

/* Testimonios reales de clientes — tomados de lenteconsulting.com */
export type Testimonial = {
  quote: string;
  name: string;
  company: string;
  sector: string;
  initials: string;
  /** Foto en /public/testimonios; si falta, se muestran las iniciales */
  photo?: string;
  /** Texto completo para el modal "Leer testimonio completo" (párrafos separados por \n\n) */
  fullQuote?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "La capacitación y acompañamiento a nuestro equipo de ventas nos lleva a mejores resultados en nuestros locales.",
    name: "Jorge Naser Urquiza",
    company: "Urquiza Motos",
    sector: "Movilidad y transporte",
    initials: "UM",
    photo: "/testimonios/jorge-naser.jpeg",
  },
  {
    quote:
      "Nos ayudó a detectar la problemática real de nuestros potenciales clientes.",
    name: "Luciano Alfonso",
    company: "Jobly",
    sector: "Staff on Demand",
    initials: "J",
    photo: "/testimonios/luciano-alfonso.jpeg",
  },
  {
    quote:
      "Lente nos complementó con técnicas de venta consultiva para transmitir de la mejor manera.",
    name: "Victoria Alfieri y Estefanía Tinto",
    company: "Anthea",
    sector: "Branding Studio",
    initials: "A",
    photo: "/testimonios/victoria-alfieri.jpg",
  },
  {
    quote:
      "Capacitándolos y asesorándolos en Venta Consultiva para lograr un diferencial de la competencia.",
    name: "Gastón Tenorio",
    company: "GA.MA Italy",
    sector: "Cuidado personal",
    initials: "GI",
    photo: "/testimonios/gaston-tenorio.jpeg",
  },
  {
    quote:
      "Lente nos acompañó para verdaderamente entender los puntos de dolor que necesitamos resolver.",
    name: "Francisco Laplume",
    company: "Grosomono",
    sector: "Agencia de publicidad",
    initials: "G",
    photo: "/testimonios/francisco-laplume.png",
  },
  {
    quote:
      "Su experiencia en venta consultiva B2B transformó el pipeline de leads y conversiones.",
    name: "Martín Bergada",
    company: "Edutec",
    sector: "Director General · Educación Tecnológica SA",
    initials: "MB",
    photo: "/testimonios/martin-bergada.jpeg",
    fullQuote:
      "Conocí a Juan Cruz Falcón en 2024, en un momento en que Educación Tecnológica SA atravesaba una situación crítica: si no cumplíamos objetivos de venta en diciembre, enero y febrero, nos quedábamos sin caja a fines de febrero de 2025. Lo convoqué para repensar nuestra propuesta de valor, y junto a él rediseñamos el enfoque comercial de Edutec hacia acompañamientos integrales de 3, 6 y 12 meses para colegios, anclados en STEAM, Robótica y Ciencias.\n\nSu experiencia en venta consultiva B2B transformó el pipeline de leads y conversiones, y en marzo de 2025 ya habíamos superado el período crítico, lo que nos permitió cumplir también los objetivos de 2026.\n\nMás allá de los resultados, destaco a la persona: Juan Cruz combina calidad humana genuina con un conocimiento profundo de la venta consultiva, una combinación poco frecuente. Como coach de ventas, lo recomiendo sin dudarlo a cualquier empresa que necesite repensar su estrategia comercial.",
  },
  {
    quote:
      "Cada conversación no solo motiva: deja aprendizajes claros y aplicables.",
    name: "Paola Chávez",
    company: "Braini",
    sector: "Founder",
    initials: "PC",
    photo: "/testimonios/paola-chavez.jpeg",
    fullQuote:
      "Tuve la oportunidad de contar con el coaching de Juan Cruz y fue una experiencia muy valiosa. Tiene un estilo asertivo y directo, siempre con la intención de ayudarte a avanzar. Es una persona que te empuja a la acción, a moverte, y no quedarte solo en ideas.\n\nPor su propia experiencia, entiende muy bien los desafíos que se presentan, lo que genera una conexión genuina y que te veas reflejado en muchas de sus recomendaciones.\n\nAdemás, tiene una capacidad muy natural para movilizar, retar y acompañar, haciendo que cada conversación no solo motive, sino que deje aprendizajes claros y aplicables. Domina la metodología y sabe cómo llevarte, paso a paso, a aterrizar lo que necesitas para avanzar.\n\nSin duda, es un coach que aporta muchísimo valor en el proceso emprendedor y estoy muy agradecida por eso.",
  },
];

export const cta = {
  headline: "¿Empezamos?",
  text: "Si tu equipo tiene la meta y le falta el cómo, hablemos. Una llamada de diagnóstico para entender tu situación y ver si podemos trabajar juntos. Sin compromiso.",
};

/* Formulario de contacto — los envíos llegan a la casilla de `site.email`
   vía FormSubmit (el primer envío dispara un mail de activación que Juan
   tiene que confirmar una única vez). */
export const contactForm = {
  fields: {
    nombre: { label: "Nombre", placeholder: "Nombre" },
    apellido: { label: "Apellido", placeholder: "Apellido" },
    correo: { label: "Correo", placeholder: "correo@empresa.com" },
    empresa: { label: "Empresa", placeholder: "Empresa" },
    mensaje: {
      label: "Breve descripción de qué buscan",
      placeholder: "Contanos brevemente qué están buscando…",
    },
  },
  submit: "Enviar consulta",
  sending: "Enviando…",
  success: {
    title: "¡Mensaje enviado!",
    text: "Gracias por escribir. Juan te va a responder a la brevedad.",
  },
  error: "No se pudo enviar el mensaje. Probá de nuevo o escribí directo a",
  subject: "Nueva consulta desde juancruzfalcon.com",
};

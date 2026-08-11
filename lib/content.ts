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
  role: "Coach de venta consultiva",
  // +54 9 11 5846-3322 — formato wa.me: internacional, sin + ni separadores
  whatsapp: "https://wa.me/5491158463322",
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
  title: "Coach de venta consultiva para equipos comerciales",
  subtitle:
    "Acompaño a tu equipo a cumplir sus objetivos y lo potencio para lograr su máxima performance.",
};

/* Empresas para el carrusel de logos — mezcla de marcas donde trabajó Juan
   y clientes de Lente. Si falta `logo` (en /public/empresas), se muestra
   el nombre como wordmark tipográfico. */
export const companies: { name: string; logo?: string }[] = [
  { name: "Hewlett Packard", logo: "/empresas/hp.png" },
  { name: "Renault", logo: "/empresas/renault.png" },
  { name: "GA.MA Italy", logo: "/empresas/gama.png" },
  { name: "Wyder", logo: "/empresas/Wyder.png" },
  { name: "Urquiza Motos", logo: "/empresas/urquiza.png" },
  { name: "Jobly", logo: "/empresas/Jobly.png" },
  { name: "Anthea", logo: "/empresas/anthea.png" },
  { name: "Grosomono", logo: "/empresas/grosomono.png" },
];

export const problem = {
  headline: "El negocio exige resultados. Nadie trabaja cómo lograrlos.",
  paragraphs: [
    "Los directores miran el P&L. Los gerentes, el número que lo componen. Es lo que exige el negocio.",
    "Pero en ese foco en el resultado, algo queda afuera: el día a día del equipo. El proceso. El método. El acompañamiento humano que determina si los objetivos se cumplen o no.",
    "No porque no quieran. Sino porque el negocio no les deja espacio para hacerlo.",
    "El resultado es predecible: cada vendedor intenta llegar a la meta a su manera, sin un camino claro. Algunos llegan. La mayoría no. La empresa termina en el 20/80. El 20% del equipo logra el 80% de las ventas.",
  ],
  highlight: {
    before: "Eso no es una estrategia. ",
    emphasis: "Es un riesgo.",
    after: "",
  },
};

export const whyCoach = {
  headlineStart: "Un equipo con método vende",
  headlineAccent: "distinto",
  paragraphs: [
    "Un coach de venta consultiva acompaña al equipo comercial, su día a día, sus procesos, sus dificultades.",
    "Y lo más importante, sostenido en el tiempo, no eventual. Esto hace que el conocimiento se asimile y se implemente en casos reales.",
  ],
  faq: [
    {
      question: "¿Por qué no alcanza con el gerente?",
      answer:
        "Porque el negocio no le da el tiempo ni el espacio para hacerlo de forma consistente. El gerente gestiona resultados — el coach trabaja las habilidades que los generan.",
    },
    {
      question: "¿Por qué externo?",
      answer:
        "Porque tiene distancia y objetividad. No está atrapado en la dinámica interna del equipo. Ve lo que desde adentro es difícil ver.",
    },
    {
      question: "¿Por qué venta consultiva específicamente?",
      answer:
        "Porque es el enfoque que más impacta en venta de productos y servicios de tickets altos, con ciclos largos, múltiples decisores, y de alto impacto para el negocio del cliente. El cliente no compra un producto. Compra la solución a un problema que a veces ni sabe articular bien.",
    },
  ],
  closing: "Un coach no reemplaza al liderazgo interno. Lo complementa.",
};

/** Texto de los CTA repartidos en la página — todos apuntan al formulario. */
export const inlineCta = {
  label: "Agendar llamada",
  problem: "¿Tu equipo tiene la meta y le falta el cómo?",
  about: "¿Querés que trabajemos juntos?",
};

export const about = {
  intro:
    "Soy Juan Cruz Falcón. Coach de venta consultiva y desarrollo de equipos comerciales.",
  paragraphs: [
    "Pasé más de 15 años liderando equipos de ventas y marketing en empresas como Hewlett Packard, Renault y GA.MA Italy. Desarrollé y lancé productos y servicios en diferentes mercados, escalé y regionalicé compañías. Viví de cerca lo que significa llevar un equipo a resultados — con todo lo que eso implica.",
    "Esa experiencia me llevó a fundar Wyder, empresa tecnológica de trade marketing hoy operando en México, Argentina, Uruguay y Centroamérica, con más de 200 empresas clientes en Latinoamérica.",
    "Crear, escalar y regionalizar una empresa te enseña algo fundamental: los resultados los logran las personas. Y las personas rinden cuando tienen método, acompañamiento y alguien que crea en su potencial.",
  ],
  closing: "Por eso hago lo que hago.",
  brands: ["Hewlett Packard", "Renault", "GA.MA Italy", "Wyder"],
};


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
    title: "Capacitaciones",
    tag: "De 3 horas a 4 semanas",
    description:
      "Programas intensivos o progresivos sobre venta consultiva, adaptados a tu industria, tu equipo y tus objetivos.",
  },
  {
    title: "Sesiones de coaching",
    tag: "Individual o grupal",
    description:
      "Para trabajar situaciones concretas, desarrollar habilidades específicas o acompañar al equipo en el día a día comercial.",
  },
  {
    title: "Acompañamiento de coaching mensual",
    tag: "Desarrollo continuo",
    description:
      "Un proceso sostenido en el tiempo: el método se afianza mes a mes y la evolución del equipo se consolida en vez de diluirse.",
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

/* Testimonios reales de clientes.
   Formato de la tarjeta: nombre → cargo → empresa con bandera. */
export type Testimonial = {
  quote: string;
  name: string;
  company: string;
  /** Cargo de la persona — si falta, la tarjeta muestra solo la empresa */
  role?: string;
  initials: string;
  /** Código ISO de 2 letras del país — se muestra como banderita en la tarjeta */
  country: string;
  /** Foto en /public/testimonios; si falta, se muestran las iniciales */
  photo?: string;
  /** Texto completo para el modal "Leer testimonio completo" (párrafos separados por \n\n) */
  fullQuote?: string;
};

/** Nombres de país para el `aria-label` de la banderita. */
export const countryNames: Record<string, string> = {
  AR: "Argentina",
  MX: "México",
  UY: "Uruguay",
  CL: "Chile",
  CO: "Colombia",
  PE: "Perú",
  DO: "República Dominicana",
  ES: "España",
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "La capacitación y acompañamiento de Juan Cruz a nuestro equipo de ventas nos lleva a mejores resultados en nuestros locales.",
    name: "Jorge Naser Urquiza",
    company: "Urquiza Motos",
    role: "Asesor Dirección | Planificación Estratégica",
    initials: "UM",
    country: "AR",
    photo: "/testimonios/jorge-naser.jpeg",
    fullQuote:
      "La capacitación y acompañamiento de Juan Cruz a nuestro equipo de ventas nos lleva a mejores resultados en nuestros locales. Nuestros vendedores están en constante aprendizaje sobre cómo vender en base a la necesidad y el contexto del cliente que viene en busca de nuestros productos. De esa manera, generando confianza, las ventas en nuestras tiendas aumentaron considerablemente.",
  },
  {
    quote:
      "Nos ayudó a detectar la problemática real de nuestros potenciales clientes.",
    name: "Luciano Alfonso",
    company: "Bravilo",
    role: "Founder",
    initials: "LA",
    country: "AR",
    photo: "/testimonios/luciano-alfonso.jpeg",
    fullQuote:
      "Cuando me contacté con Juan Cruz, Bravilo recién salía al mercado, sin ventas aún. Hoy, pocos meses después, ya contamos con más de 15 clientes trabajando y creciendo con nosotros. Nos ayudó a detectar la problemática real de nuestros potenciales clientes, y cómo diseñar la solución de tal manera que no solo resuelva el problema, sino que logre crecimiento en nuestros clientes.",
  },
  {
    quote:
      "Juan Cruz nos complementó con técnicas de venta consultiva para transmitir de la mejor manera.",
    name: "Victoria Alfieri",
    company: "Anthea Studio",
    role: "Co-founder",
    initials: "A",
    country: "AR",
    photo: "/testimonios/victoria-alfieri.jpg",
    fullQuote:
      "Estar cerca de nuestros clientes, conocerlos a nivel personal y entenderlos fue y es uno de nuestros pilares. Juan Cruz nos complementó con técnicas de venta consultiva para transmitir de la mejor manera cómo nuestro estudio ayuda a nuestros clientes a conseguir sus objetivos, a lograr lo que buscan, y a transmitir la identidad de su marca.",
  },
  {
    quote:
      "Los resultados tanto a nivel ventas como a nivel performance de nuestros vendedores son superadores.",
    name: "Gastón Tenorio",
    company: "GA.MA Italy",
    role: "Director Comercial",
    initials: "GI",
    country: "AR",
    photo: "/testimonios/gaston-tenorio.jpeg",
    fullQuote:
      "Juan Cruz acompaña a nuestro equipo de promotores y vendedores. Capacitándolos y asesorándolos en Venta Consultiva. Cómo abordar a los clientes en puntos de venta, logrando comprender lo que buscan y sus necesidades, y así lograr un diferencial de la competencia a la hora de vender en las tiendas. Los resultados tanto a nivel ventas como a nivel performance de nuestros vendedores son superadores.",
  },
  {
    quote:
      "Juan Cruz nos acompañó en los últimos 2 años para verdaderamente entender los puntos de dolor que necesitamos resolver de nuestros clientes.",
    name: "Francisco Laplume",
    company: "Grosomono",
    role: "Co-founder & CEO",
    initials: "G",
    country: "AR",
    photo: "/testimonios/francisco-laplume.png",
    fullQuote:
      "Juan Cruz nos acompañó en los últimos 2 años para verdaderamente entender los puntos de dolor que necesitamos resolver de nuestros clientes. Hoy la relación con ellos es mucho más cercana y personal, y esto genera resultados positivos en el negocio.",
  },
  {
    quote:
      "Su experiencia en venta consultiva B2B transformó el pipeline de leads y conversiones. Lo recomiendo sin dudarlo a cualquier empresa que necesite repensar su estrategia comercial.",
    name: "Martín Bergada",
    company: "Educación Tecnológica SA",
    role: "Director General",
    initials: "MB",
    country: "AR",
    photo: "/testimonios/martin-bergada.jpeg",
    fullQuote:
      "Conocí a Juan Cruz Falcón en 2024, en un momento en que Educación Tecnológica SA atravesaba una situación crítica: si no cumplíamos objetivos de venta en diciembre, enero y febrero, nos quedábamos sin caja a fines de febrero de 2025. Lo convoqué para repensar nuestra propuesta de valor, y junto a él rediseñamos el enfoque comercial de Edutec hacia acompañamientos integrales de 3, 6 y 12 meses para colegios, anclados en STEAM, Robótica y Ciencias.\n\nSu experiencia en venta consultiva B2B transformó el pipeline de leads y conversiones, y en marzo de 2025 ya habíamos superado el período crítico, lo que nos permitió cumplir también los objetivos de 2026.\n\nMás allá de los resultados, destaco a la persona: Juan Cruz combina calidad humana genuina con un conocimiento profundo de la venta consultiva, una combinación poco frecuente. Como coach de ventas, lo recomiendo sin dudarlo a cualquier empresa que necesite repensar su estrategia comercial.",
  },
  {
    quote:
      "Tiene una capacidad muy natural para movilizar, retar y acompañar: cada conversación no solo motiva, deja aprendizajes claros y aplicables.",
    name: "Paola Chávez",
    company: "Braini",
    role: "Founder",
    initials: "PC",
    country: "PE",
    photo: "/testimonios/paola-chavez.jpeg",
    fullQuote:
      "Tuve la oportunidad de contar con el coaching de Juan Cruz y fue una experiencia muy valiosa. Tiene un estilo asertivo y directo, siempre con la intención de ayudarte a avanzar. Es una persona que te empuja a la acción, a moverte, y no quedarte solo en ideas.\n\nPor su propia experiencia, entiende muy bien los desafíos que se presentan, lo que genera una conexión genuina y que te veas reflejado en muchas de sus recomendaciones.\n\nAdemás, tiene una capacidad muy natural para movilizar, retar y acompañar, haciendo que cada conversación no solo motive, sino que deje aprendizajes claros y aplicables. Domina la metodología y sabe cómo llevarte, paso a paso, a aterrizar lo que necesitas para avanzar.\n\nSin duda, es un coach que aporta muchísimo valor en el proceso emprendedor y estoy muy agradecida por eso.",
  },
  {
    quote:
      "Desde que trabajamos con él sentimos un impacto grande en ventas, que es lo que todos necesitamos.",
    name: "Nahuel Turano",
    company: "Goodly Fit",
    role: "Fundador & CEO",
    initials: "NT",
    country: "AR",
    fullQuote:
      "Tuvimos el placer de trabajar con Juan Cruz, quien nos ayudó a ordenar todo nuestro proceso comercial en cada etapa. Es una persona muy responsable que se involucra de lleno en el negocio. Nos aportó valor no solo en el proceso comercial y en las ventas, sino también en otras áreas. Desde que trabajamos con él sentimos un impacto grande en ventas, que es lo que todos necesitamos. Fue un trabajo de mucho valor. Si tienen algo que resolver en su proceso comercial, no lo duden y contáctenlo. No se van a arrepentir.",
  },
  {
    quote:
      "En Varvaros, sus orientaciones han sido una guía muy clara para mejorar nuestro modelo de negocio.",
    name: "Amaury Castillo",
    company: "Varvaros Branding SRL",
    role: "Director General",
    initials: "AC",
    country: "DO",
    fullQuote:
      "Cuando se trata de proyectos regularmente tengo muchas ideas, cada una se posa encima de otra hasta que se vuelve un tumulto. Cuando hablo con Juan y me topo con la lucidez y su coherencia en negocios, todo se vuelve más claro. En Varvaros, sus orientaciones han sido una guía muy clara para mejorar nuestro modelo de negocio. No solo por su asesoría sino por su manejo profesional y empatía.",
  },
];

export const cta = {
  headline: "¿Empezamos?",
  text: "Si tu equipo tiene la meta y le falta el cómo, hablemos.",
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

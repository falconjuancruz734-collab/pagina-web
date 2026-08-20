/**
 * ─────────────────────────────────────────────────────────────
 *  CONTENIDO EDITABLE DEL SITIO
 *  Textos del doc "TEXTOS WEB JCF" (jul 2026).
 *  Todo lo marcado con [PLACEHOLDER] hay que reemplazarlo
 *  con la data real cuando esté disponible.
 * ─────────────────────────────────────────────────────────────
 */

/* Líneas directas. La primera es la principal: alimenta el CTA del navbar,
   así el número no queda escrito en dos lugares distintos.
   `wa` va en formato wa.me: internacional, sin + ni separadores. */
export const phones = [
  {
    code: "ARG",
    country: "Argentina",
    display: "+54 9 11 5846-3322",
    wa: "https://wa.me/5491158463322",
  },
  {
    code: "MEX",
    country: "México",
    display: "+52 56 3118 6857",
    wa: "https://wa.me/525631186857",
  },
];

export const site = {
  name: "Juan Cruz Falcón",
  role: "Coach de venta consultiva",
  whatsapp: phones[0].wa,
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

/* Notas y prensa reales de Juan.
   Desde ago 2026 la sección del sitio muestra el newsletter en vez de estas
   tarjetas (ver `newsletter` arriba). Los datos y `components/Work.tsx`
   quedan para poder reactivarlas. */
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
    title:
      "La tendencia que está frenando el crecimiento comercial de empresas de Latam",
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

/* Newsletter — el alta va a Kit (ex ConvertKit), al mismo formulario que
   juan-cruz-falcon.kit.com/fac92f94df. Kit tiene doble opt-in: primero manda
   un correo de confirmación y recién ahí da de alta al suscriptor.
   La sección reemplaza a las tarjetas de notas y prensa (`press`), que
   quedan más abajo por si se reactivan. */
export const newsletter = {
  /** ID del formulario en Kit — sale del embed de la landing */
  formId: "9817644",
  text: "Cada quince días, una idea corta y aplicable sobre venta consultiva: lo que veo adentro de las empresas que acompaño.",
  placeholder: "tu@correo.com",
  submit: "Suscribirme",
  sending: "Suscribiendo…",
  legal: "Sin spam. Te podés desuscribir cuando quieras.",
  success: {
    title: "¡Casi listo!",
    text: "Te mandamos un correo para confirmar la suscripción. Confirmalo y te llega la próxima edición.",
  },
  error: "No se pudo completar la suscripción. Probá de nuevo en un momento.",
};

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
  EC: "Ecuador",
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
      "Cuando me contacté con Juan Cruz, Bravilo recién salía al mercado, sin ventas aún. Hoy, pocos meses después, ya contamos con más de 15 clientes trabajando y creciendo con nosotros.",
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
      "Juan Cruz nos complementó con técnicas de venta consultiva para transmitir de la mejor manera cómo nuestro estudio ayuda a nuestros clientes a conseguir sus objetivos, a lograr lo que buscan, y a transmitir la identidad de su marca.",
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
      "Su experiencia en venta consultiva B2B transformó el pipeline de leads y conversiones, y en marzo de 2025 ya habíamos superado el período crítico, lo que nos permitió cumplir también los objetivos de 2026.",
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
      "Tiene un estilo asertivo y directo, siempre con la intención de ayudarte a avanzar. Es una persona que te empuja a la acción, a moverte, y no quedarte solo en ideas.",
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
    photo: "/testimonios/nahuel-turano.png",
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
    photo: "/testimonios/amaury-castillo.jpeg",
    fullQuote:
      "Cuando se trata de proyectos regularmente tengo muchas ideas, cada una se posa encima de otra hasta que se vuelve un tumulto. Cuando hablo con Juan y me topo con la lucidez y su coherencia en negocios, todo se vuelve más claro. En Varvaros, sus orientaciones han sido una guía muy clara para mejorar nuestro modelo de negocio. No solo por su asesoría sino por su manejo profesional y empatía.",
  },
  {
    quote:
      "El acompañamiento de Juan Cruz para Retolia fue muy asertivo. Su asesoría y recomendaciones fueron muy prácticas, y su orientación basada 100% en experiencia.",
    name: "Juan Carlos Piñuela",
    company: "Retolia",
    role: "Founder",
    initials: "JP",
    country: "EC",
    photo: "/testimonios/juan-carlos-pinuela.jpg",
    fullQuote:
      "El acompañamiento de Juan Cruz para Retolia fue muy asertivo. Su asesoría y recomendaciones fueron muy prácticas, y su orientación basada 100% en experiencia. Nuestras sesiones, tanto a nivel individual como grupal fueron el apoyo fundamental para encontrar foco a la hora de entender el mercado, a nuestros clientes y escalar.",
  },
  {
    quote:
      "Tiene esa capacidad excepcional de ver el panorama completo. No solo te ayuda a redefinir la trayectoria de tu negocio, sino que despierta una visión clara e innovadora para llevarlo a un nivel que jamás habías imaginado.",
    name: "César Koizumi",
    company: "Modello",
    role: "Director General",
    initials: "CK",
    country: "MX",
    photo: "/testimonios/cesar-koizumi.jpg",
    fullQuote:
      "Juan Cruz (Cacu, como lo llamamos quienes lo conocemos de tiempo) tiene esa capacidad excepcional de ver el panorama completo. No solo te ayuda a redefinir la trayectoria de tu negocio, sino que despierta una visión clara e innovadora para llevarlo a un nivel que jamás habías imaginado.\n\nLo que verdaderamente diferencia a Cacu es su comprensión integral de una organización: entiende que las ventas no ocurren de forma aislada, sino que son la sinergia perfecta de cada área de la empresa trabajando con un mismo propósito.\n\nSu liderazgo y acompañamiento combinan una empatía profunda con un pragmatismo enfocado siempre en la eficiencia y en generar un impacto real desde las primeras sesiones.",
  },
  {
    quote:
      "Acompañó a más de 100 emprendedores y es el mentor con mayor calificación en cuanto a NPS, o sea, satisfacción por parte de nuestros alumnos.",
    name: "Tomás Volonte",
    company: "Novolabs Startup School",
    role: "Co-founder",
    initials: "TV",
    country: "AR",
    photo: "/testimonios/tomas-volonte.png",
    fullQuote:
      "Buenas, buenas. Por acá Tomás Volonte, uno de los fundadores de Novolabs. Novolabs es una startup school que básicamente ayuda a emprendedores a validar sus ideas de negocio, conseguir sus primeros clientes y lanzar su producto al mercado desde cero en cuatro meses.\n\nY te quiero contar un poco cómo fue trabajar con Juan Cruz, que fue uno de nuestros primeros mentores. De hecho, es el mentor más experimentado con el que contamos, además, obviamente, de mi socio y yo, que también estamos ahí como mentores.\n\nLa realidad es que Juan Cruz, o Cacu, como le decimos nosotros, trabajó con nosotros durante más de dos años. Si no me fallan los cálculos, acompañó a más de 100 emprendedores y es el mentor con mayor calificación en cuanto a NPS, o sea, satisfacción por parte de nuestros alumnos.\n\nEs muy bueno con la parte de ventas, sobre todo, y también con aterrizar la propuesta de valor. Realmente tiene la capacidad de detectar de qué forma decir lo que hay que decir para que al cliente final le interese y, obviamente, eso termine convirtiéndose, en el caso de Novolabs, en que nuestros alumnos, que eran mentorizados por Juan Cruz, aumentaran sus probabilidades de cerrar sus primeras ventas en sus proyectos.\n\nAsí que, en cuanto a la parte técnica, Juan Cruz es un crack. Sobre ventas sabe un montón. De hecho, nosotros también le consultamos muchas cosas para que nos ayude con Novolabs.\n\nY además de eso, es una excelente persona, con unos valores increíbles. Es de esas personas que nunca te van a dejar a pie. Realmente, con cada cosa que le proponés, se recontra involucra hasta el final, te responde lo que te tenga que responder, tiene mucha paciencia y, sobre todo, tiene ganas genuinas de aportar.\n\nAsí que, en ese sentido, para mí es —y ojalá siga siendo— un honor compartir con Juan Cruz, porque creo que, de los últimos dos o tres años, es una de las personas que más contento estoy de haber sumado y de haber conocido.",
  },
  {
    quote:
      "Destaco su gran capacidad para entender qué es lo que necesita el emprendedor y cuál es la verdadera traba.",
    name: "Damián Sánchez",
    company: "Novolabs Startup School",
    role: "Co-founder",
    initials: "DS",
    country: "AR",
    photo: "/testimonios/damian-sanchez.png",
    fullQuote:
      "Buenas, soy Damián, cofundador de Novolabs, una startup school que acompaña a emprendedores a validar sus ideas de negocio y conseguir sus primeros clientes. Y estoy acá para contarte mi experiencia después de haber trabajado más de dos años con Juan Cruz.\n\nJuan fue el primer mentor que tuvimos en Novolabs y estuvo presente en cinco ediciones. Por los distintos batches que fuimos abriendo ya pasaron aproximadamente 100 emprendedores.\n\nLo que destaco de Juan Cruz es, más allá del nivel de compromiso que tiene con el proyecto de Novolabs, también el compromiso que tiene con cada uno de los proyectos, su entrega, su presencia y el hecho de estar siempre ahí para lo que se necesitara.\n\nPero, más allá de eso, destaco su gran capacidad para entender qué es lo que necesita el emprendedor y cuál es la verdadera traba. Porque hay veces en las que esa traba es técnica: tiene que ver con un saber hacer, un framework, una herramienta o lo que fuera. Y en eso Juan Cruz es buenísimo, especialmente en todo lo que tiene que ver con ventas.\n\nPero también hay veces en las que la traba tiene que ver con cuestiones más emocionales, con bloqueos más mentales. Y en eso Juan Cruz tiene un don: sabe detectarlo y decir la palabra justa en el momento justo para lograr esos cambios de chip.\n\nAsí que, nada, me parece un profesional increíble. Y, más allá de ser un profesional increíble, es un gran ser humano, una gran persona: súper comprometida, súper presente en lo que hace. Sin dudas, lo recomendaría para cualquier proyecto que tenga que ver con sus dones, que tienen que ver con las ventas, pero también con un acompañamiento mucho más humano.",
  },
  {
    quote:
      "Tiene el don de quitar malezas mentales para aquellos que nos sentimos sumamente perdidos en darle estructura a la propuesta de valor para el cliente.",
    name: "Cindy Goco",
    company: "SeBusca.ADN",
    role: "Founder",
    initials: "CG",
    country: "MX",
    fullQuote:
      "Más que un testimonio, es un agradecimiento a Juan Cruz por las sesiones de coaching, fueron muy significativas para mí. Normalmente llegaba con muchas dudas, me sentía perdida y sobre todo no le encontraba ni pies ni cabeza a la propuesta de valor por ser un problema a resolver tan grande.\n\nGracias a las sesiones, me hacía ver el problema con otro enfoque. Un enfoque realista y al mismo tiempo lleno de posibilidades para resolverlo.\n\nMe encantó que pude ser yo misma a la hora de preguntar y cuestionar, y poco a poco toda la maleza con la que empezaba la reunión se iba haciendo un pequeño camino por donde caminar y continuar otra vez.\n\nSin dudarlo, recomendaría ampliamente el acompañamiento de Juan Cruz. Tiene el don de quitar malezas mentales para aquellos que nos sentimos sumamente perdidos en darle estructura a la propuesta de valor para el cliente. Para mí su acompañamiento fue un proceso sumamente valioso.",
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
  /** Se muestra mientras falte algún campo: el botón está deshabilitado */
  incomplete: "Completá todos los campos para enviar la consulta.",
  success: {
    title: "¡Mensaje enviado!",
    text: "Gracias por escribir. Juan te va a responder a la brevedad.",
  },
  error: "No se pudo enviar el mensaje. Probá de nuevo o escribí directo a",
  subject: "Nueva consulta desde juancruzfalcon.com",
};

# Contenido de la web — Juan Cruz Falcón

> Fuente original: `TEXTOS WEB JCF.docx`
> Implementación de los textos: [`lib/content.ts`](../lib/content.ts)
>
> Este documento es la **referencia única** de lo que la web tiene que decir.
> Si un texto cambia acá, tiene que cambiar en `lib/content.ts` (y viceversa).

---

## Índice

| # | Sección | Componente | Estado |
|---|---------|------------|--------|
| 1 | [Hook + Hero](#1-hook--hero) | `Hero.tsx` | ✅ Listo |
| 2 | [Logos de empresas / Carrusel](#2-logos-de-empresas--carrusel) | `LogosMarquee.tsx` | ⚠️ Faltan logos reales |
| 3 | [El problema](#3-el-problema) | `Problem.tsx` | ✅ Listo |
| 4 | [Quién soy](#4-quién-soy) | `About.tsx` | ✅ Listo |
| 5 | [Cómo trabajo](#5-cómo-trabajo) | `Method.tsx` | ✅ Listo |
| 6 | [Lente — agente comercial con IA](#6-lente--tu-agente-comercial-con-ia) | `LenteAI.tsx` | ✅ Listo |
| 7 | [Modalidades](#7-modalidades) | `Modalities.tsx` | ✅ Listo |
| 8 | [Testimonios](#8-testimonios) | `Testimonials.tsx` | ✅ 5 reales con foto |
| 9 | [Notas y prensa](#9-notas-y-prensa) | `Work.tsx` | ✅ 3 notas reales |
| 10 | [CTA final + contacto](#10-cta-final--contacto) | `Contact.tsx`, `Footer.tsx` | ⚠️ Revisar |

Al final: [pendientes abiertos](#pendientes-abiertos), [tono de voz](#tono-de-voz), [referencias visuales](#referencias-visuales), [qué tiene cada demo](#qué-tiene-cada-demo) y el [checklist de implementación](#checklist-de-implementación).

---

## 1. Hook + Hero

**Hook** (frase de apertura, arriba de todo)

> La meta de ventas ya está definida. **Cómo alcanzarla**, no.

**Título**

> Coach de ventas para equipos comerciales.

**Subtítulo**

> Acompaño a tu equipo a cumplir sus objetivos y lo potencio para lograr su máxima performance.

*Nota de diseño:* en el hook, "Cómo alcanzarla" va destacado — es el eje de todo el mensaje del sitio.

---

## 2. Logos de empresas / Carrusel

Banda de logos en loop horizontal debajo del hero, con el rótulo "Empresas que confiaron en mí". Mezcla de marcas donde trabajó Juan y clientes de Lente:

Hewlett Packard · Renault · GA.MA Italy · Wyder · Urquiza Motos · Jobly · Anthea · Grosomono

✅ **Logos reales** en `/public/empresas` (jul 2026), en escala de grises con hover a color. Única excepción: **Urquiza Motos** sigue como wordmark tipográfico hasta tener su logo — al agregarlo, solo hay que sumar `logo: "/empresas/..."` en `companies` de `lib/content.ts`.

---

## 3. El problema

**Titular**

> El negocio exige resultados. Nadie trabaja cómo lograrlos.

**Desarrollo**

Los directores miran el forecast. Los gerentes gestionan el número. Es su rol y es lo que exige el negocio.

Pero en ese foco en el resultado, algo queda afuera: el día a día del equipo. El proceso. El método. El acompañamiento humano que determina si los objetivos se cumplen o no.

No porque no quieran. Sino porque el negocio no les deja espacio para hacerlo.

**Cierre destacado**

> Soy el socio estratégico que trabaja lo que ellos no pueden — el cómo, el proceso y las personas — para que ellos puedan enfocarse en lo que les corresponde.

---

## 4. Quién soy

**Presentación**

> Soy Juan Cruz Falcón. Coach de ventas y desarrollo de equipos comerciales.

**Trayectoria**

Pasé más de 15 años liderando equipos de ventas y marketing en empresas como Hewlett Packard, Renault y GA.MA Italy. Lancé productos, abrí mercados, regionalicé compañías y levanté capital. Viví de cerca lo que significa llevar un equipo a resultados — con todo lo que eso implica.

Esa experiencia me llevó a fundar Wyder, empresa de trade marketing hoy operando en México, Argentina, Uruguay y Centroamérica, con más de 100 empresas clientes en Latinoamérica.

Lo que aprendí en ese camino es lo que hoy llevo al coaching: que los números los mueven las personas. Y que las personas rinden mejor cuando tienen método, acompañamiento y alguien que crea en su potencial.

**Cierre**

> Por eso hago lo que hago.

### Datos que se muestran como números

| Número | Etiqueta |
|--------|----------|
| 15+ | años liderando equipos de ventas y marketing |
| 100+ | empresas clientes en Latinoamérica |
| 4 | mercados: México, Argentina, Uruguay y Centroamérica |

### Marcas mencionadas

Hewlett Packard · Renault · GA.MA Italy · Wyder

---

## 5. Cómo trabajo

Tres pasos, en orden. Es el método completo.

### 01 — Diagnóstico

Antes de trabajar, entiendo. Analizo el equipo, sus perfiles, sus fortalezas y los gaps que están frenando los resultados. Defino un plan de trabajo individual y grupal.

### 02 — Coaching comercial

Trabajo con el equipo en método, técnicas y mentalidad de venta. Sesiones individuales y grupales orientadas a resultados concretos. No teoría — ejecución.

### 03 — Lente, tu agente comercial con IA

El primer acompañamiento de coaching comercial con IA. Un asistente personalizado con el conocimiento de tu industria, tus clientes y tu metodología de venta. Disponible 24/7 para preparar reuniones, gestionar objeciones y consultar el contexto de cada cliente antes de cada interacción.

*Este paso enlaza a su propia sección ampliada (`#lente-ai`).*

---

## 6. Lente — Tu agente comercial con IA

**Titular**

> El primer acompañamiento de coaching comercial con IA.

**Bajada**

Un asistente personalizado con el conocimiento de tu industria, tus clientes y tu metodología de venta. El coaching no termina cuando termina la sesión: Lente acompaña a tu equipo en cada interacción.

**Qué hace**

- Personalizado con el conocimiento de tu industria, tus clientes y tu metodología de venta
- Disponible 24/7 para todo tu equipo comercial
- Prepara reuniones y ayuda a gestionar objeciones
- Consulta el contexto de cada cliente antes de cada interacción

---

## 7. Modalidades

Tres formas de trabajar juntos.

### Capacitaciones · *De 3 horas a 4 semanas*

Programas intensivos o progresivos sobre venta consultiva, adaptados a tu industria, tu equipo y tus objetivos.

### Sesiones de coaching · *Individual o grupal*

Para trabajar situaciones concretas, desarrollar habilidades específicas o acompañar al equipo en el día a día comercial.

### Acompañamiento de coaching mensual · *Desarrollo continuo*

Un proceso sostenido en el tiempo: el método se afianza mes a mes y la evolución del equipo se consolida en vez de diluirse.

---

## 8. Testimonios

El `.docx` pide **3 testimonios** y los marca como *pendientes*.

En la web hay **5 testimonios reales tomados de lenteconsulting.com**:

| Cliente | Empresa | Sector | Frase |
|---------|---------|--------|-------|
| Jorge Naser Urquiza | Urquiza Motos | Movilidad y transporte | La capacitación y acompañamiento a nuestro equipo de ventas nos lleva a mejores resultados en nuestros locales. |
| Luciano Alfonso | Bravilo | Staff on Demand | Nos ayudó a detectar la problemática real de nuestros potenciales clientes. |
| Victoria Alfieri y Estefanía Tinto | Anthea | Branding Studio | Lente nos complementó con técnicas de venta consultiva para transmitir de la mejor manera. |
| Gastón Tenorio | GA.MA Italy | Cuidado personal | Capacitándolos y asesorándolos en Venta Consultiva para lograr un diferencial de la competencia. |
| Francisco Laplume | Grosomono | Agencia de publicidad | Lente nos acompañó para verdaderamente entender los puntos de dolor que necesitamos resolver. |

✅ Los 5 están en la web con foto y versión extendida ("Leer testimonio completo"). El `.docx` pedía 3 propios que nunca llegaron — si Juan los manda, se suman o reemplazan en `testimonials` de `lib/content.ts`.

---

## 9. Notas y prensa

✅ **Resuelta** (no estaba en el `.docx`; se completó con notas reales):

| Medio | Fecha | Título |
|-------|-------|--------|
| LinkedIn | Jul 2026 | La tendencia que está frenando el crecimiento comercial de empresas de Latam |
| LinkedIn | Jul 2026 | Primera reunión con un posible cliente |
| El Economista | Mar 2025 | ¿Las palabras venden? Utiliza el discurso para enamorar al cliente |

Las notas viven en `press` dentro de `lib/content.ts` — para sumar una nueva alcanza con agregar un item ahí (con `image` en `/public/notas` o `excerpt` para portada tipográfica).

---

## 10. CTA final + contacto

**Titular**

> ¿Empezamos?

**Texto**

Si tu equipo tiene la meta y le falta el cómo, hablemos. Una llamada de diagnóstico para entender tu situación y ver si podemos trabajar juntos. Sin compromiso.

### Datos de contacto

| Canal | Valor | Estado |
|-------|-------|--------|
| Email | `hola@juancruzfalcon.com` (según el `.docx`) | ⚠️ En la web figura `jcf@juancruzfalcon.com` — **definir cuál es el bueno** |
| WhatsApp | — | 🔴 Falta el número real (hoy hay un placeholder) |
| Instagram | [@juancruz.falcon_](https://www.instagram.com/juancruz.falcon_) | ✅ |
| LinkedIn | [Juan Cruz Falcón](https://www.linkedin.com/in/juan-cruz-falcon-1a12b668/) | ✅ |
| Lente | [lenteconsulting.com](https://lenteconsulting.com/) | ✅ |

---

## Pendientes abiertos

| # | Pendiente | Quién | Estado |
|---|-----------|-------|--------|
| 1 | Número de WhatsApp real — hoy hay un placeholder (`wa.me/5491100000000`) en `lib/content.ts` | Juan | 🔴 |
| 2 | Definir el email: el `.docx` dice `hola@`, la web usa `jcf@` (afecta al formulario, que envía vía FormSubmit a ese mail) | Juan | 🔴 |
| 3 | Activar FormSubmit: hacer un primer envío del formulario y confirmar desde la casilla | Juan | 🔴 |
| 4 | Logos reales (SVG/PNG) para el carrusel — hoy son wordmarks tipográficos | Juan / diseño | 🟡 |
| 5 | ~~Testimonios definitivos~~ — 5 reales con foto | — | ✅ |
| 6 | ~~Notas de prensa reales~~ — 3 publicadas | — | ✅ |
| 7 | ~~SVG de la firma~~ — Firma Negro/Blanco en navbar y footer | — | ✅ |
| 8 | ~~Fotos definitivas~~ — hero, standing, testimonios y thumbnail para compartir | — | ✅ |
| 9 | Al deployar: confirmar dominio (`juancruzfalcon.com` está asumido en SEO/OG) y alta en Search Console | Lautaro | 🟡 |

---

## Tono de voz

Lo que sostiene todos los textos, por si hay que escribir algo nuevo:

- **Primera persona, directo.** "Soy", "trabajo", "acompaño". Nunca "nuestro equipo de profesionales".
- **Vos, no usted.** Español rioplatense, sin neutro.
- **Frases cortas y afirmativas.** El punto separa más que la coma.
- **Contraste como recurso.** "No teoría — ejecución". "No porque no quieran. Sino porque…"
- **Sin promesas infladas.** No hay "revolucioná tus ventas" ni porcentajes de crecimiento garantizados. El diferencial es el *cómo*, no el milagro.
- **Las personas antes que el número.** El argumento central es que los números los mueven las personas.

---

## Referencias visuales

Plantillas de Envato Elements que Juan pasó como referencia de dirección de arte. **No son el diseño a copiar** — sirven para leer qué lenguaje visual le cierra: qué secciones espera ver, qué nivel de formalidad y qué tratamiento de foto y tipografía.

### 1. Mentor — Personal Development Coach

**Autor:** ThemeStarz · Bootstrap 3
🔗 [Ver en Envato](https://elements.envato.com/es/mentor-personal-development-coach-html-template-WWPEB6)

Pensada para mentores, coaches y desarrollo personal. Muy orientada a conversión: formularios de contacto y suscripción, calendarios, gráficos de progreso y CTAs repetidos.

> **Lo aplicable:** es la referencia más cercana al rubro. El uso insistente del CTA y la lógica de "agendá una llamada" coincide con el cierre `¿Empezamos?`.

### 2. Mindycoach — Therapy & Counseling

**Autor:** XpressBuddy · Bootstrap 5 · 15 páginas
🔗 [Ver en Envato](https://elements.envato.com/es/mindycoach-therapy-counseling-html-template-7EGCDVB)

Terapia y salud mental. Diseño plano, minimalista y calmo, construido para generar confianza. Incluye perfil del profesional, testimonios de clientes y sistema de reserva de citas.

> **Lo aplicable:** el tratamiento del perfil personal y el bloque de testimonios. El registro "limpio y que genera confianza" va bien con el tono de los textos.

### 3. Busing — Business Consulting

**Autor:** codecarnival · Bootstrap 5 · 11+ páginas
🔗 [Ver en Envato](https://elements.envato.com/es/busing-business-consulting-bootstrap-5-template-WF7MG54)

Agencias, consultoría y servicios financieros. Moderna, responsive, con slider, portfolio y blog.

> **Lo aplicable:** el costado más corporativo. Sirve como contrapeso al registro cálido de las dos anteriores.

### 4. Consultivo — Consulting & Investments

**Autor:** 7oroof · Bootstrap 3 · 4 homes, 34 páginas, 75 bloques
🔗 [Ver en Envato](https://elements.envato.com/es/consultivo-consulting-investments-html5-template-UCF2CJ)

Consultoría y finanzas: asesores, contadores, estudios. Elegante y corporativa, con parallax, sliders y muchas variantes de bloque.

> **Lo aplicable:** la biblioteca de bloques, para elegir cómo resolver secciones puntuales (método, modalidades, stats).

### 5. The Business — Business Consulting

**Autor:** TonaTheme · Bootstrap 3 · 20+ páginas
🔗 [Ver en Envato](https://elements.envato.com/es/the-business-business-consulting-html-template-GJ9QKB6)

Consultoría, startups y servicios financieros. Minimalista y profesional, con portfolio, blog, perfiles personales y testimonios.

> **Lo aplicable:** las variantes de galería y el bloque de perfil personal.

### Qué se lee del conjunto

Las cinco referencias se parten en dos grupos, y eso es la señal más útil:

- **Mentor y Mindycoach** — el mundo *coach / persona*: cálido, foto grande del profesional, testimonios al frente, CTA de agendar.
- **Busing, Consultivo y The Business** — el mundo *consultoría B2B*: sobrio, corporativo, orientado a servicios y credenciales.

La web de Juan vive justo en el medio: le habla a un decisor B2B (director comercial, gerente de ventas) pero el producto es una persona y su método. La lectura razonable es **estructura y sobriedad del grupo B2B, calidez y protagonismo de la foto del grupo coach**.

⚠️ Todas son plantillas Bootstrap 3/5 con Revolution Slider y jQuery. El sitio está hecho en Next.js + Tailwind + Motion: se toman **decisiones de diseño**, nunca código.

---

## Qué tiene cada demo

Recorrido real de cada demo en vivo (julio 2026).

### Mentor → `themestarz.net/html/mentor`

- **Logo = firma manuscrita.** La marca entera es la firma del coach en negro sobre blanco.
- Barra fina arriba con email + teléfono, antes del menú.
- Hero partido: texto a la izquierda, **foto del coach a sangre a la derecha**, con saludo en primera persona ("Hi, I'm Jane Doe. A Personal Mentor") y un solo CTA de texto subrayado.
- Botón flotante circular fijo (ícono calendario) que sigue el scroll.
- Cuatro cards de servicio debajo del hero.
- Bio + **tres contadores animados** (personas mentoreadas, workshops, certificaciones).
- Bloque "Your Daily Motivation Quote".
- **Método de 5 pasos numerados** en fila horizontal.
- Formulario corto (nombre + email) sobre fondo de color.
- **Calendario mensual real** para pedir turno.
- Testimonios con nombre en mayúsculas.
- Tabla de **3 paquetes de precio** (Silver / Gold / Platinum) con lista de features comparadas.
- Botón "To Top".

### Mindycoach → `html.xpressbuddy.com/mindycoach`

- **Barra de anuncio arriba de todo** con una frase + link "Book A Free Consultation".
- **Navbar flotante tipo pill con efecto vidrio**, encima del hero, con botón blanco "Book Appointment" con flecha.
- Hero con foto a sangre, degradado encima, eyebrow en chip ("Online Growth. Real Results") y firma de credenciales bajo el título.
- Card superpuesta al hero con un **lead magnet**: guía gratis a cambio del email.
- **Franja "FEATURED IN"** con logos de medios.
- Servicios en 3 cards + "See All Services".
- "Why Choose Me" con 3 bullets de valor.
- Testimonios **largos** (párrafo entero), con nombre y el tipo de proceso que hizo cada persona.
- **Formulario de reserva** con nombre, teléfono, tipo de servicio y horario.
- Blog con la fecha en bloque día/mes.
- CTA final grande a tres renglones.
- Tiene 3 homes distintas para elegir.

### Busing → `template.hasthemes.com/busing`

- **Slider de hero** con varias placas, tipografía gigante en mayúsculas sobre foto oscurecida.
- Bloque "sobre nosotros" a dos columnas.
- Servicios en **grid 3×2 con íconos**.
- Banda de **4 contadores** (proyectos activos, proyectos hechos, % clientes felices, horas).
- Portfolio en grid.
- Testimonios en carrusel.
- Blog de 3 cards con "Keep Reading".
- Banda CTA ancha: "Do you have any Projects?" + botón.
- Footer de 4 columnas con **suscripción por email**.

### Consultivo → `7oroof.com/demos/consultivo`

- Navbar con botón **"Consultation" en outline** siempre visible, más buscador.
- **Card "Get a Free Quote" superpuesta** sobre el slider, en color de acento.
- **4 cards de valor** debajo del hero (Creative Solutions, Professional Team, Diverse Approach, Detailed Reports).
- Método numerado **01 / 02 / 03 con doble título**: un eyebrow corto arriba ("We are helpers") y el título real abajo ("Advice and guides").
- Servicios en grid de 6.
- 3 planes de precio.
- Testimonios en carrusel infinito.
- Equipo con fotos.
- **Case studies con categoría** encima del título.
- Blog con categoría + fecha.
- Página **FAQs** y página de **consulta** aparte.
- Tiene una página "Elements" que es la biblioteca completa de bloques: testimonios, botones de video, clientes, acordeón, CTA, formularios, variantes de equipo, contadores, info cards, featured box, pricing.
- 4 homes distintas.

### The Business → demo caído ⚠️

El link del autor (`html.commonsupport.xyz`) ya no existe: el dominio quedó libre y hoy **redirige a una página de AliExpress**. No se pudo ver el demo.

Lo que se sabe queda de la ficha de Envato: 20+ páginas, galería en grid / masonry / ancho completo, FAQ, carreras, perfiles personales, testimonios, parallax, Google Maps con varias ubicaciones.

> Si esta referencia importa, hay que buscar el demo vivo en ThemeForest. Si no, se puede descartar: las otras cuatro ya cubren todo lo que aportaba.

---

## Checklist de implementación

Ordenado por impacto. Cada ítem dice de dónde sale y dónde va en el sitio actual.

### 🔴 Prioridad alta — cierran huecos que ya existen

- [ ] **Firma manuscrita como marca.** Mentor usa la firma del coach como logo, y es lo que le da el carácter personal a todo el sitio. Justifica el SVG de la firma que ya estaba pendiente. → `Navbar.tsx`, `Footer.tsx`
  *Ref: Mentor*

- [x] **Franja de logos "Trabajé en" / "Aparecí en".** ✅ Implementada como carrusel debajo del hero (`LogosMarquee.tsx`), reemplazó al marquee de frases. Falta cambiar los wordmarks tipográficos por los logos reales. → `LogosMarquee.tsx`
  *Ref: Mindycoach ("FEATURED IN")*

- [ ] **Resolver la sección Notas.** Sigue con 3 placeholders y links a `#`. Las cuatro referencias tienen blog o case studies reales. Dos caminos: convertirla en **franja de logos de medios** (ver punto anterior) o en **casos de clientes** con categoría + resultado. → `Work.tsx`
  *Ref: Consultivo (case studies), Mindycoach (featured in)*

- [x] **Formulario de contacto real.** Hecho (jul 2026): nombre, apellido, correo, empresa y breve descripción — los campos que pidió Juan por WhatsApp. Envía vía FormSubmit a `site.email` (`jcf@juancruzfalcon.com`). Pendiente: Juan tiene que confirmar el mail de activación de FormSubmit que le llega con el primer envío. → `Contact.tsx`
  *Ref: todas*

- [ ] **CTA persistente en scroll.** El botón del navbar ya existe, pero Mentor suma un botón flotante circular fijo y Mindycoach una barra de anuncio arriba. Al menos uno de los dos, para que "agendar" esté siempre a un clic. → `Navbar.tsx` o componente nuevo
  *Ref: Mentor, Mindycoach*

### 🟡 Prioridad media — suman fuerza comercial

- [ ] **Cards de valor superpuestas al hero.** Consultivo mete 4 cards pisando el hero; Mentor mete 4 debajo. Sirve para bajar los 3 pilares de Juan (método, acompañamiento, IA) antes de que el usuario scrollee. → entre `Hero.tsx` y `Problem.tsx`
  *Ref: Consultivo, Mentor*

- [ ] **Testimonios más largos.** Los cinco actuales son de una línea. Mindycoach usa párrafos enteros con el rol de cada persona — convencen mucho más. Pedirle a los clientes 2–3 renglones. → `Testimonials.tsx` + `content.ts`
  *Ref: Mindycoach*

- [ ] **Doble título en el método.** Consultivo pone un eyebrow corto arriba de cada paso. Encaja bien con los 3 pasos actuales: `01 · Antes de trabajar → Diagnóstico`. → `Method.tsx`
  *Ref: Consultivo*

- [ ] **Sección FAQ.** Consultivo y The Business la tienen. Responde las objeciones que hoy quedan sin contestar: cuánto dura, cuánto sale, presencial o remoto, tamaño mínimo de equipo. → sección nueva antes de `Contact.tsx`
  *Ref: Consultivo, The Business*

- [ ] **Barra fina de contacto arriba.** Mentor pone email y teléfono antes del menú. Da señal de "se puede contactar ya". → `Navbar.tsx`
  *Ref: Mentor*

- [ ] **CTA intermedio.** Busing corta a mitad de página con una banda ancha "Do you have any Projects?". El sitio hoy va de corrido hasta el cierre. Meter un corte después de Modalidades. → entre `Modalities.tsx` y `Testimonials.tsx`
  *Ref: Busing*

### 🟢 Prioridad baja — evaluar si aplican

- [ ] **Lead magnet.** Mindycoach entrega una guía gratis a cambio del email. Para Juan podría ser un diagnóstico rápido o una checklist de equipo comercial. Requiere producir el material. → decisión de Juan
  *Ref: Mindycoach*

- [ ] **Agenda / calendario embebido.** Mentor tiene calendario propio; Mindycoach, selector de día y hora. Lo más simple es embeber Calendly o similar en vez de construirlo. → `Contact.tsx`
  *Ref: Mentor, Mindycoach*

- [ ] **Botón "volver arriba".** Detalle chico, la página es larga. → `SmoothScroll.tsx` o componente nuevo
  *Ref: Mentor, Busing*

- [ ] **Newsletter en el footer.** Busing y Mindycoach lo tienen. Solo si Juan realmente va a mandar algo. → `Footer.tsx`
  *Ref: Busing*

- [ ] **Blog.** Las cuatro referencias vivas tienen blog. Es el mejor canal para el contenido que Juan ya publica en Instagram — pero es compromiso sostenido. → decisión de Juan
  *Ref: todas*

### ⛔ Descartados a propósito

| Elemento | Referencia | Por qué no |
|----------|-----------|------------|
| Tabla de precios / paquetes | Mentor, Consultivo, Busing | El servicio es a medida y la venta arranca con una llamada de diagnóstico. Publicar precios recorta la conversación. |
| Sección "Equipo" | Consultivo | Juan trabaja solo. La marca **es** él. |
| Slider de hero multi-placa | Busing, Consultivo | Un solo mensaje, más fuerte. El hook actual no necesita competencia. |
| Google Maps / ubicaciones | The Business, Mindycoach | No hay oficina que visitar. |
| Portfolio tipo galería | Busing, The Business | El trabajo no es visual. Los casos de cliente van como texto. |

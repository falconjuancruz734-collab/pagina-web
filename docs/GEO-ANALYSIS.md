# GEO — Visibilidad en asistentes de IA (jul 2026)

Auditoría de qué tan citable/recomendable es la web para ChatGPT, Claude,
Gemini y Perplexity, y qué se implementó.

**Score GEO: 78/100** (antes de los cambios: ~55)

## Qué estaba bien de entrada

| Criterio | Estado |
|---|---|
| **SSR** — los crawlers de IA no ejecutan JS | ✅ Todo el contenido está en el HTML servido (verificado con curl: bio, FAQ, modalidades, testimonios) |
| Bots de IA no bloqueados | ✅ El robots era `*: allow` |
| Estructura citable | ✅ H1→H2→H3 limpia, párrafos cortos, FAQ con headings-pregunta ("¿Por qué externo?") — el formato que los LLMs extraen mejor |
| Schema Person | 🟡 Existía, pero con 3 temas y sin entidades relacionadas |

## Qué se implementó

1. **`app/robots.ts`** — allow explícito para GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-User, PerplexityBot, Perplexity-User y Google-Extended (Gemini). Antes quedaban cubiertos por el comodín; ahora un futuro disallow general no los afecta.
2. **`public/llms.txt`** — resumen estructurado del estándar llms.txt: quién es Juan, qué hace, para quién, secciones con URLs y contacto. Es lo primero que un modelo lee para describir el sitio.
3. **JSON-LD enriquecido** (`app/layout.tsx`) — el grafo pasó de 2 a 4 entidades:
   - `Person` con **8 temas en knowsAbout** (venta consultiva, SPIN Selling, negociación B2B, ciclo largo/ticket alto, etc.), dirección Buenos Aires/AR e idioma
   - `Organization` Wyder con `founder` → Juan (entidad que valida la trayectoria)
   - `ProfessionalService` con los 4 servicios y área de servicio Latinoamérica
   - `WebSite` (ya existía)

## Lo que queda — y es lo que más pesa

El estudio de Ahrefs (dic 2025, 75k marcas): **las menciones de marca correlacionan 3x más con citas en IA que los backlinks**. Nada de esto se resuelve tocando el código:

| Acción | Impacto | Por qué |
|---|---|---|
| Publicar en LinkedIn con constancia (ya lo hace) | Alto | ChatGPT cita mucho contenido profesional indexado |
| Presencia en YouTube (charlas, clips de coaching) | Muy alto | Correlación más fuerte con citas de IA (~0.74) |
| Responder en Reddit/foros de ventas en español | Alto | Perplexity cita Reddit en ~47% de sus respuestas |
| Página de Wikipedia (a futuro, si hay notabilidad) | Muy alto | Fuente #1 de ChatGPT (~48% de citas) |
| Google Business Profile | Medio | Alimenta el grounding de Gemini |

## Verificación

- `robots.txt` → 200, 9 reglas
- `llms.txt` → 200
- JSON-LD → parsea válido, 4 nodos, knowsAbout ×8
- `tsc` sin errores

*Nota: todo asume el dominio `juancruzfalcon.com`. Si cambia, actualizar llms.txt, robots.ts, sitemap.ts y layout.tsx.*

import type { MetadataRoute } from "next";

/* Los bots de IA (ChatGPT, Claude, Perplexity, Gemini) se permiten de forma
   explícita: si mañana se agrega un disallow al comodín, los asistentes de IA
   siguen pudiendo leer y recomendar la web. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Búsqueda y navegación de ChatGPT
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      // Claude (Anthropic)
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-User", allow: "/" },
      // Perplexity
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },
      // Gemini (Google-Extended controla el acceso de los modelos de Google)
      { userAgent: "Google-Extended", allow: "/" },
      // Resto de los crawlers
      { userAgent: "*", allow: "/" },
    ],
    sitemap: "https://juancruzfalcon.com/sitemap.xml",
  };
}

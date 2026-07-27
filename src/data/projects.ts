// Hechos neutros al idioma. Título y descripción se traducen en src/i18n/ui.ts
// bajo las claves `projects.<id>.title` y `projects.<id>.description`.

export type ProjectType = "api" | "microservice" | "database" | "fullstack" | "cli" | "frontend";

export type ProjectEntry = {
  id: string;
  type: ProjectType;
  tech: string[];
  github?: string;
  demo?: string;
};

export const projects: ProjectEntry[] = [
  {
    id: "parse-ai",
    type: "microservice",
    tech: ["Java", "Spring", "Spring AI", "Docker", "Kafka", "Eureka"],
    github: "https://github.com/luiiscarlos/parse-ai",
  },
  {
    id: "academ-iq",
    type: "fullstack",
    tech: ["Java", "Spring", "PostgreSQL", "Docker", "Angular", "Typescript", "Tailwind"],
    github: "https://github.com/luiiscarlos/academ-iq-api",
  },
  {
    id: "portfolio",
    type: "frontend",
    tech: ["Astro", "React", "GSAP", "Tailwind", "TypeScript"],
    github: "https://github.com/luiiscarlos/luiiscarlos-portfolio",
    demo: "https://luisworks.dev",
  },
  {
    id: "express-proxy",
    type: "api",
    tech: ["Node.js", "Express", "Javascript"],
    github: "https://github.com/luiiscarlos/expressjs-proxy",
  },
];

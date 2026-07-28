// Hechos neutros al idioma. Título y descripción se traducen en src/i18n/ui.ts
// bajo las claves `projects.<id>.title` y `projects.<id>.description`.
//
// Para la página de detalle (/projects/<id>/):
//   - el texto largo va en `projects.<id>.detail` (array de párrafos) en ui.ts;
//   - las imágenes se dejan en public/projects/<carpeta>/ y se listan aquí en
//     `gallery`, con su alternativo en `projects.<id>.gallery-alt`, en el mismo
//     orden. Sin imágenes no se renderiza la galería.

export type ProjectType = "api" | "microservice" | "database" | "fullstack" | "cli" | "frontend";

/**
 * Cómo encuadra el carrusel las imágenes de un proyecto.
 *
 * `landscape` (por defecto) recorta a 16:9: es lo que quieren las capturas de
 * escritorio. `portrait` no recorta nada y centra la imagen sobre el fondo, que
 * es lo único aceptable con capturas de móvil — a 16:9 se verían como una
 * franja horizontal del centro de la pantalla.
 */
export type GalleryAspect = "landscape" | "portrait";

export type ProjectEntry = {
  id: string;
  type: ProjectType;
  tech: string[];
  github?: string;
  demo?: string;
  /** Rutas desde la raíz del sitio, servidas tal cual desde public/. */
  gallery?: string[];
  galleryAspect?: GalleryAspect;
};

export const projects: ProjectEntry[] = [
  {
    id: "gomur",
    type: "fullstack",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Docker", "TypeScript", "React Native", "Expo"],
    github: "https://github.com/luiiscarlos/gomur",
    // Capturas de la app móvil: 944×2048, verticales.
    galleryAspect: "portrait",
    gallery: [
      "/projects/gomur/gomur-home-page.jpeg",
      "/projects/gomur/gomur-lines-page.jpeg",
      "/projects/gomur/gomur-line-detail-page.jpeg",
      "/projects/gomur/gomur-stop-detail-page.jpeg",
      "/projects/gomur/gomur-tickets-page.jpeg",
    ],
  },
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
    // La carpeta es "academiq" y el id "academ-iq": da igual, aquí van rutas
    // completas y no se deriva ninguna del id.
    gallery: [
      "/projects/academiq/academiq-home-page.png",
      "/projects/academiq/academiq-login-dialog.png",
      "/projects/academiq/academiq-dashboard-page.png",
      "/projects/academiq/academiq-course-detail-page.png",
    ],
  },
  {
    id: "portfolio",
    type: "frontend",
    tech: ["Astro", "React", "GSAP", "Tailwind", "TypeScript"],
    github: "https://github.com/luiiscarlos/luiiscarlos-portfolio",
    demo: "https://luisworks.dev",
    gallery: [
      "/projects/portfolio/portfolio-welcome-section.png",
      "/projects/portfolio/portfolio-projects-section.png",
      "/projects/portfolio/portfolio-aboutme-section.png",
      "/projects/portfolio/portfolio-project-detail-page.png",
    ],
  },
  {
    id: "express-proxy",
    type: "api",
    tech: ["Node.js", "Express", "Javascript"],
    github: "https://github.com/luiiscarlos/expressjs-proxy",
  },
];

/** Búsqueda por id, para las rutas dinámicas del detalle. */
export function getProject(id: string): ProjectEntry | undefined {
  return projects.find((project) => project.id === id);
}

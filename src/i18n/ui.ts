import type { Lang } from "./config";

// El inglés es la referencia: el tipo del diccionario español se deriva de él,
// así que olvidar una clave (o cambiar string por array) es un error de
// `astro check`, no un fallo silencioso en tiempo de ejecución.
const en = {
  "meta.title": "Luis Carlos — Backend Developer",
  "meta.description":
    "Portfolio of Luis Carlos Caicedo Giraldo, a backend developer working with Java, Spring and PostgreSQL.",

  "a11y.skip": "Skip to content",
  "a11y.theme": "Toggle color theme",
  "a11y.language": "Change language",
  "a11y.sections": "Sections",
  "a11y.menu": "Open menu",

  "nav.about": "About",
  "nav.experience": "Experience",
  "nav.projects": "Projects",
  "nav.education": "Education",

  "hero.sentences": [
    "Backend enthusiast at heart.",
    "Music keeps my code alive.",
    "Backend first, frontend maybe.",
    "Always shipping, always learning.",
    "Learning tech like side quests.",
  ],
  "hero.tagline": "Always chasing the next cool thing to build because that's what I love.",

  "about.title": "More about",
  "about.title-accent": "me",
  "about.tab.aboutme": "About Me",
  "about.tab.skills": "Skills",
  "about.tab.resume": "Download Or View Resume",
  "about.tablist": "About me",
  "about.summary": "Professional Summary",
  "about.bio":
    "Hey, I'm Luis. Just graduated in Multiplatform Development and I'm all about building stuff that works and feels clean. I love organized code and I pick up new tech fast. Messy code? Not my thing. Backend is my zone (Java, Spring, PostgreSQL), but I've also played around with JavaScript, TypeScript, Angular, and even some React. When I'm not coding, I'm probably vibing to music, gaming, or kicking a ball on the weekend. Always up for the next cool challenge.",
  "about.experience-value": "1+ years",
  "about.languages": ["English", "Spanish"],
  "about.resume-placeholder": "Resume coming soon.",

  "experience.title": "Work",
  "experience.title-accent": "Experience",
  "experience.subtitle": "My professional journey in software development",
  "experience.parker.role": "SOFTWARE DEVELOPER",
  "experience.parker.location": "Murcia, Spain",
  "experience.parker.duration": "Apr 2025 - Present",
  "experience.parker.description": [
    "Participated in full development of features, collaborating closely with the team to meet project goals.",
    "Enhanced teamwork and adaptability skills by integrating into an established system without starting from scratch.",
    "Although I didn't hold leadership roles, my consistent contributions helped progress system updates and improvements.",
    "Gained real-world experience in a professional environment and learned how to work effectively in a collaborative setting.",
  ],

  "projects.title": "My",
  "projects.title-accent": "Projects",
  "projects.subtitle":
    "Backend solutions and system architecture projects that solve real-world problems",
  "projects.view-code": "View Code",
  "projects.live-demo": "Live Demo",
  "projects.of": "of",
  "projects.type.api": "REST API",
  "projects.type.microservice": "Microservice",
  "projects.type.database": "Database",
  "projects.type.cli": "CLI Tool",
  "projects.type.fullstack": "Full Stack",
  "projects.type.frontend": "Frontend",
  "projects.parse-ai.title": "Parse AI",
  "projects.parse-ai.description":
    "Processes and organizes large volumes of business documents by extracting key data, generating AI-powered summaries and tags, and securely storing everything in the cloud. Designed to streamline document management and improve searchability through intelligent filtering.",
  "projects.academ-iq.title": "Academ-IQ Full Stack Application",
  "projects.academ-iq.description":
    "Developed as my final degree project, this platform delivers a complete e-learning experience with a modular architecture, secure authentication, and systems for course tracking, progress management, and user interaction.",
  "projects.portfolio.title": "LuiisCarlos Portfolio",
  "projects.portfolio.description":
    "Built with Astro, React and TypeScript. I'm mainly a backend dev but had to tackle some frontend here, let's just say it was a \"fun\" challenge.",
  "projects.express-proxy.title": "Express JS Proxy Server",
  "projects.express-proxy.description":
    "A lightweight API proxy built with Express, designed to handle secure communication between AI services and clients, demonstrating backend expertise.",

  "formation.title": "Education &",
  "formation.title-accent": "Certificates",
  "formation.subtitle": "Continuous learning and professional development",
  "formation.education": "Education",
  "formation.certificates": "Certificates",
  "formation.achievements": "Key Achievements:",
  "formation.dam.degree": "Advanced Technical Program in Cross-Platform Application Development",
  "formation.dam.description":
    "This two-year program focused on software development for desktop, web, and mobile platforms. Key areas of interest included data access and enterprise systems. Throughout the course, I deepened my understanding of backend architecture, clean code practices, and advanced Java programming.",
  "formation.dam.achievements": [
    "Final project 'Academ-IQ' received the highest possible grade; it is a fullstack web application focused on tech education with user authentication, course management, and modern deployment strategies.",
    "Scored 9.5/10 on a terminal-based app project involving a custom 2D maze-solving algorithm, authentication system, and data structures like a manually implemented stack.",
    "Consistent top grades in modules related to data persistence and enterprise application integration.",
  ],
  "formation.spring-core.name": "Spring Core 5 Course",
  "formation.git-flow.name": "Professional Git and Git Flow Course",
  "formation.spring-security.name": "Spring Security Course",
  "formation.solid.name": "SOLID Principles and Design Patterns Course",

  "footer.get-in-touch": "Get in touch",
  "footer.get-in-touch-text":
    "I'm always open to discussing new opportunities and interesting projects.",
  "footer.quick-links": "Quick links",
  "footer.connect": "Connect",
  "footer.resume": "Resume",
  "footer.built-with": "Built with Astro, React & GSAP.",
} as const;

export type UIKey = keyof typeof en;

/** Mapea cada clave a `string` o `string[]` según lo que sea en inglés. */
export type Dict = {
  [K in UIKey]: (typeof en)[K] extends readonly string[] ? readonly string[] : string;
};

const es: Dict = {
  "meta.title": "Luis Carlos — Desarrollador Backend",
  "meta.description":
    "Portfolio de Luis Carlos Caicedo Giraldo, desarrollador backend con Java, Spring y PostgreSQL.",

  "a11y.skip": "Saltar al contenido",
  "a11y.theme": "Cambiar el tema de color",
  "a11y.language": "Cambiar de idioma",
  "a11y.sections": "Secciones",
  "a11y.menu": "Abrir menú",

  "nav.about": "Sobre mí",
  "nav.experience": "Experiencia",
  "nav.projects": "Proyectos",
  "nav.education": "Formación",

  "hero.sentences": [
    "Backend por vocación.",
    "La música mantiene vivo mi código.",
    "Backend primero, frontend quizá.",
    "Siempre publicando, siempre aprendiendo.",
    "Aprendo tecnología como misiones secundarias.",
  ],
  "hero.tagline": "Siempre detrás de lo próximo que construir, porque es lo que me gusta.",

  "about.title": "Más sobre",
  "about.title-accent": "mí",
  "about.tab.aboutme": "Sobre mí",
  "about.tab.skills": "Tecnologías",
  "about.tab.resume": "Ver o descargar el CV",
  "about.tablist": "Sobre mí",
  "about.summary": "Resumen profesional",
  "about.bio":
    "Hola, soy Luis. Acabo de terminar Desarrollo de Aplicaciones Multiplataforma y lo mío es construir cosas que funcionen y se sientan limpias. Me gusta el código ordenado y aprendo tecnologías rápido. ¿Código desordenado? No es lo mío. El backend es mi terreno (Java, Spring, PostgreSQL), aunque también he trasteado con JavaScript, TypeScript, Angular e incluso algo de React. Cuando no estoy programando, seguramente esté escuchando música, jugando o dándole a un balón el fin de semana. Siempre con ganas del próximo reto.",
  "about.experience-value": "1+ años",
  "about.languages": ["Inglés", "Español"],
  "about.resume-placeholder": "CV disponible próximamente.",

  "experience.title": "Experiencia",
  "experience.title-accent": "Laboral",
  "experience.subtitle": "Mi trayectoria profesional en desarrollo de software",
  "experience.parker.role": "DESARROLLADOR DE SOFTWARE",
  "experience.parker.location": "Murcia, España",
  "experience.parker.duration": "Abr 2025 - Actualidad",
  "experience.parker.description": [
    "Participé en el desarrollo completo de funcionalidades, colaborando de cerca con el equipo para cumplir los objetivos del proyecto.",
    "Mejoré mi trabajo en equipo y mi capacidad de adaptación al integrarme en un sistema ya establecido, sin partir de cero.",
    "Aunque no ocupé puestos de responsabilidad, mis aportaciones constantes ayudaron a avanzar en las mejoras y actualizaciones del sistema.",
    "Gané experiencia real en un entorno profesional y aprendí a trabajar de forma efectiva en un equipo.",
  ],

  "projects.title": "Mis",
  "projects.title-accent": "Proyectos",
  "projects.subtitle":
    "Soluciones de backend y arquitectura de sistemas que resuelven problemas reales",
  "projects.view-code": "Ver código",
  "projects.live-demo": "Ver demo",
  "projects.of": "de",
  "projects.type.api": "API REST",
  "projects.type.microservice": "Microservicios",
  "projects.type.database": "Base de datos",
  "projects.type.cli": "Herramienta CLI",
  "projects.type.fullstack": "Full Stack",
  "projects.type.frontend": "Frontend",
  "projects.parse-ai.title": "Parse AI",
  "projects.parse-ai.description":
    "Procesa y organiza grandes volúmenes de documentos empresariales: extrae los datos clave, genera resúmenes y etiquetas con IA y lo almacena todo de forma segura en la nube. Diseñado para agilizar la gestión documental y mejorar las búsquedas mediante filtrado inteligente.",
  "projects.academ-iq.title": "Academ-IQ, aplicación full stack",
  "projects.academ-iq.description":
    "Desarrollada como proyecto final de grado, esta plataforma ofrece una experiencia completa de e-learning con arquitectura modular, autenticación segura y sistemas de seguimiento de cursos, gestión del progreso e interacción entre usuarios.",
  "projects.portfolio.title": "Portfolio de LuiisCarlos",
  "projects.portfolio.description":
    "Construido con Astro, React y TypeScript. Soy sobre todo backend, pero aquí me tocó pelearme con el frontend; digamos que fue un reto «divertido».",
  "projects.express-proxy.title": "Servidor proxy con Express JS",
  "projects.express-proxy.description":
    "Un proxy de API ligero construido con Express, pensado para gestionar la comunicación segura entre servicios de IA y clientes.",

  "formation.title": "Educación y",
  "formation.title-accent": "Certificados",
  "formation.subtitle": "Aprendizaje continuo y desarrollo profesional",
  "formation.education": "Educación",
  "formation.certificates": "Certificados",
  "formation.achievements": "Logros destacados:",
  "formation.dam.degree": "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma",
  "formation.dam.description":
    "Un ciclo de dos años centrado en el desarrollo de software para escritorio, web y móvil. Entre las áreas que más me interesaron están el acceso a datos y los sistemas empresariales. Durante el ciclo profundicé en arquitectura backend, buenas prácticas de código limpio y programación avanzada en Java.",
  "formation.dam.achievements": [
    "El proyecto final 'Academ-IQ' obtuvo la máxima calificación; es una aplicación web full stack centrada en la formación tecnológica, con autenticación de usuarios, gestión de cursos y estrategias de despliegue modernas.",
    "Un 9,5/10 en un proyecto de aplicación de terminal con un algoritmo propio de resolución de laberintos en 2D, sistema de autenticación y estructuras de datos como una pila implementada a mano.",
    "Calificaciones destacadas de forma constante en los módulos de persistencia de datos e integración de aplicaciones empresariales.",
  ],
  "formation.spring-core.name": "Curso de Spring Core 5",
  "formation.git-flow.name": "Curso profesional de Git y Git Flow",
  "formation.spring-security.name": "Curso de Spring Security",
  "formation.solid.name": "Curso de principios SOLID y patrones de diseño",

  "footer.get-in-touch": "Contáctame",
  "footer.get-in-touch-text":
    "Siempre estoy abierto a hablar de nuevas oportunidades y proyectos interesantes.",
  "footer.quick-links": "Accesos rápidos",
  "footer.connect": "Conecta",
  "footer.resume": "CV",
  "footer.built-with": "Desarrollado con Astro, React y GSAP.",
};

export const ui: Record<Lang, Dict> = { en, es };

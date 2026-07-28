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
  "about.resume-view": "Open in a new tab",
  "about.resume-download": "Download PDF",
  "about.resume-preview": "Resume preview",

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

  "experience.hospital.role": "WEB DEVELOPER",
  "experience.hospital.location": "Córdoba, Spain",
  "experience.hospital.duration": "Jun 2024 - Mar 2025",
  "experience.hospital.description": [
    "Developed and maintained web applications for hospital management systems.",
    "Worked with healthcare data systems ensuring reliability and compliance with regulations.",
    "Collaborated with medical staff to understand requirements and deliver effective solutions.",
    "Improved system performance and user experience through iterative development.",
  ],

  "experience.quo.role": "JUNIOR DEVELOPER",
  "experience.quo.location": "Córdoba, Spain",
  "experience.quo.duration": "Jan 2024 - May 2024",
  "experience.quo.description": [
    "Assisted in development of telecom software solutions.",
    "Participated in code reviews and learned best practices from senior developers.",
    "Contributed to debugging and optimization of existing systems.",
    "Gained foundational experience in professional software development practices.",
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
  "projects.gomur.title": "GoMur",
  "projects.gomur.description":
    "A REST API and a mobile client for public transport in Murcia: TUM buses, the tram and the CTM intercity lines. A monorepo with a hexagonal Spring Boot backend and an Expo client, wired together over nothing but HTTP.",
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

  // Página de detalle: /projects/<id>/
  "project.details": "Details",
  "project.back": "Back to projects",
  "project.overview": "About this project",
  "project.gallery": "Gallery",
  "project.stack": "Tech stack",
  "project.links": "Links",
  "project.previous-image": "Previous image",
  "project.next-image": "Next image",
  "project.image": "Image",
  "project.go-to-image": "Go to image",
  "project.previous-project": "Previous project",
  "project.next-project": "Next project",

  // El texto largo de cada proyecto vive en `projects.<id>.detail`. Es opcional:
  // sin esa clave, el detalle muestra solo la descripción corta.
  "projects.portfolio.detail": [
    "This site is a static Astro build with React islands: only the parts that actually need JavaScript ship any. The hero hydrates on load, everything below the fold hydrates when it scrolls into view, and the education section ships no JavaScript at all.",
    "It is bilingual without a runtime i18n library. English lives at / and Spanish at /es/, both built at compile time from the same component tree, so the two versions cannot drift apart and search engines index both. Language-neutral facts live in data files, prose lives in a typed dictionary, and a mismatch between the two languages fails the type check instead of failing in the browser.",
    "The design system is a small set of semantic colour tokens defined once in CSS. Light and dark mode are the same components reading different variables, applied before the first paint so there is no flash of the wrong theme.",
    "Motion is GSAP, always scoped to the component that owns it and always reverted on unmount, and every animation sits behind a reduced-motion check.",
  ],
  "projects.portfolio.gallery-alt": [
    "Placeholder image 1",
    "Placeholder image 2",
    "Placeholder image 3",
  ],
  "projects.academ-iq.gallery-alt": [
    "Academ-IQ home page",
    "Log in dialog",
    "Dashboard",
    "Course detail page",
  ],
  "projects.gomur.gallery-alt": [
    "GoMur home screen",
    "List of lines",
    "Detail of a line",
    "Detail of a stop",
    "Tickets screen",
  ],
  "projects.gomur.detail": [
    "GoMur brings the public transport of Murcia into one place: the TUM city buses, the tram and the intercity lines run by the CTM. It is two things at once — a REST API that models the network, and a mobile app that consumes it.",
    "The repository is a monorepo with two autonomous subprojects. api/ is a Spring Boot 4.1 backend on Java 21 with PostgreSQL hosted on Supabase, built with Maven and shipped in Docker. mobile/ is an Expo client written in TypeScript with its own Node toolchain. Nothing couples them beyond HTTP: the app only knows the API's URL, so either side can be rebuilt or redeployed without touching the other.",
    "The backend follows a hexagonal architecture — ports and adapters — organised by feature rather than by layer, so the domain does not depend on the database or the web framework. A Makefile at the root is the single entry point to the whole thing: make run-api boots the backend in its dev profile and follows the logs, make run-app starts Expo and prints the QR code.",
    "The API deploys to Railway straight from the monorepo, pointing the service root at api/ so it picks up the Dockerfile from there. The app is tested on a physical iPhone through Expo Go and on the Android emulator, which keeps the whole loop free of a Mac and of a paid developer account.",
  ],

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
  "about.resume-view": "Abrir en otra pestaña",
  "about.resume-download": "Descargar PDF",
  "about.resume-preview": "Vista previa del CV",

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

  "experience.hospital.role": "DESARROLLADOR WEB",
  "experience.hospital.location": "Córdoba, España",
  "experience.hospital.duration": "Jun 2024 - Mar 2025",
  "experience.hospital.description": [
    "Desarrollé y mantuve aplicaciones web para los sistemas de gestión hospitalaria.",
    "Trabajé con sistemas de datos sanitarios, cuidando la fiabilidad y el cumplimiento de la normativa.",
    "Colaboré con el personal médico para entender los requisitos y entregar soluciones útiles.",
    "Mejoré el rendimiento del sistema y la experiencia de uso con un desarrollo iterativo.",
  ],

  "experience.quo.role": "DESARROLLADOR JUNIOR",
  "experience.quo.location": "Córdoba, España",
  "experience.quo.duration": "Ene 2024 - May 2024",
  "experience.quo.description": [
    "Colaboré en el desarrollo de soluciones software para telecomunicaciones.",
    "Participé en revisiones de código y aprendí buenas prácticas de los desarrolladores sénior.",
    "Contribuí a la depuración y optimización de sistemas ya en marcha.",
    "Adquirí la base del desarrollo de software en un entorno profesional.",
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
  "projects.gomur.title": "GoMur",
  "projects.gomur.description":
    "API REST y app móvil del transporte público de Murcia: los autobuses de TUM, el tranvía y las interurbanas del CTM. Un monorepo con backend hexagonal en Spring Boot y cliente en Expo, unidos solo por HTTP.",
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

  "project.details": "Ver detalles",
  "project.back": "Volver a proyectos",
  "project.overview": "Sobre este proyecto",
  "project.gallery": "Galería",
  "project.stack": "Tecnologías",
  "project.links": "Enlaces",
  "project.previous-image": "Imagen anterior",
  "project.next-image": "Imagen siguiente",
  "project.image": "Imagen",
  "project.go-to-image": "Ir a la imagen",
  "project.previous-project": "Proyecto anterior",
  "project.next-project": "Proyecto siguiente",

  "projects.portfolio.detail": [
    "Este sitio es un build estático de Astro con islas de React: solo envía JavaScript lo que de verdad lo necesita. El hero hidrata al cargar, todo lo que queda bajo el fold hidrata al entrar en pantalla, y la sección de formación no envía ni un byte de JavaScript.",
    "Es bilingüe sin librería de i18n en tiempo de ejecución. El inglés vive en / y el español en /es/, los dos construidos en compilación desde el mismo árbol de componentes, así que las dos versiones no pueden divergir y Google indexa ambas. Los hechos neutros al idioma viven en ficheros de datos, la prosa en un diccionario tipado, y un desajuste entre idiomas rompe el chequeo de tipos en vez de romper en el navegador.",
    "El sistema de diseño es un puñado de tokens semánticos de color declarados una sola vez en CSS. El modo claro y el oscuro son los mismos componentes leyendo variables distintas, aplicadas antes del primer pintado para que no haya destello del tema equivocado.",
    "Las animaciones son GSAP, siempre con el scope del componente que las crea y siempre revertidas al desmontar, y todas pasan por una comprobación de movimiento reducido.",
  ],
  "projects.portfolio.gallery-alt": [
    "Imagen de ejemplo 1",
    "Imagen de ejemplo 2",
    "Imagen de ejemplo 3",
  ],
  "projects.academ-iq.gallery-alt": [
    "Página de inicio de Academ-IQ",
    "Diálogo de inicio de sesión",
    "Panel principal",
    "Página de detalle de un curso",
  ],
  "projects.gomur.gallery-alt": [
    "Pantalla de inicio de GoMur",
    "Listado de líneas",
    "Detalle de una línea",
    "Detalle de una parada",
    "Pantalla de billetes",
  ],
  "projects.gomur.detail": [
    "GoMur reúne el transporte público de Murcia en un solo sitio: los autobuses urbanos de TUM, el tranvía y las líneas interurbanas del CTM. Son dos cosas a la vez: una API REST que modela la red y una app móvil que la consume.",
    "El repositorio es un monorepo con dos subproyectos autónomos. api/ es un backend de Spring Boot 4.1 sobre Java 21 con PostgreSQL alojado en Supabase, construido con Maven y empaquetado en Docker. mobile/ es un cliente en Expo escrito en TypeScript, con su propio toolchain de Node. No hay más acoplamiento que HTTP: la app solo conoce la URL de la API, así que cualquiera de los dos lados se puede reconstruir o desplegar sin tocar el otro.",
    "El backend sigue una arquitectura hexagonal — puertos y adaptadores — organizada por features y no por capas, de modo que el dominio no depende ni de la base de datos ni del framework web. Un Makefile en la raíz es el único punto de entrada a todo: make run-api levanta el backend en su perfil dev y sigue los logs, y make run-app arranca Expo y muestra el código QR.",
    "La API se despliega en Railway directamente desde el monorepo, apuntando la raíz del servicio a api/ para que detecte ahí el Dockerfile. La app se prueba en un iPhone físico con Expo Go y en el emulador de Android, lo que mantiene todo el ciclo sin necesidad de un Mac ni de una cuenta de desarrollador de pago.",
  ],

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

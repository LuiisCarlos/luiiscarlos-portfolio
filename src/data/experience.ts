// Hechos neutros al idioma. El puesto, la ubicación, las fechas y las tareas se
// traducen en src/i18n/ui.ts bajo las claves `experience.<id>.*`.

export type ExperienceEntry = {
  id: string;
  company: string;
  technologies: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "parker",
    company: "Parker Work Systems S.L.",
    technologies: ["PHP", "Javascript", "JQuery", "SQL", "HTML", "Bootstrap"],
  },
];

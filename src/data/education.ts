// Hechos neutros al idioma. Titulación, descripción, logros y nombres de los
// cursos se traducen en src/i18n/ui.ts bajo `formation.<id>.*`.

export type EducationEntry = {
  id: string;
  institution: string;
  year: string;
};

export type CertificationEntry = {
  id: string;
  issuer: string;
  year: string;
};

export const education: EducationEntry[] = [
  {
    id: "dam",
    institution: "IES José Luis Martínez Palomo",
    year: "2023 - 2025",
  },
];

export const certifications: CertificationEntry[] = [
  { id: "spring-core", issuer: "OpenWebinars", year: "2024" },
  { id: "git-flow", issuer: "OpenWebinars", year: "2025" },
  { id: "spring-security", issuer: "OpenWebinars", year: "2025" },
  { id: "solid", issuer: "OpenWebinars", year: "2025" },
];

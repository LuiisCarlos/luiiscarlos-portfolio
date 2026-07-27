import { certifications, education } from "@/data/education";
import { experience } from "@/data/experience";
import { personal } from "@/data/personal";
import { projects } from "@/data/projects";
import type { Lang } from "./config";
import { useTranslations } from "./utils";
import type { UIKey } from "./ui";

/**
 * Une los datos neutros de `src/data/` con las traducciones de `src/i18n/ui.ts`
 * y devuelve exactamente las props que espera cada sección.
 *
 * Las islas React reciben objetos planos ya resueltos: no se les puede pasar la
 * función `t` porque las props hacia una isla se serializan.
 */
export function getContent(lang: Lang) {
  const t = useTranslations(lang);

  // Las claves por id se componen en tiempo de ejecución, así que TypeScript no
  // puede validarlas contra UIKey. `as UIKey` es deliberado y está acotado aquí.
  const byId = (key: string) => t(key as UIKey) as string;
  const listById = (key: string) => t(key as UIKey) as readonly string[];

  return {
    hero: {
      name: personal.name,
      sentences: t("hero.sentences"),
      tagline: t("hero.tagline"),
    },

    about: {
      fullname: personal.fullname,
      email: personal.email,
      title: t("about.title"),
      titleAccent: t("about.title-accent"),
      tablist: t("about.tablist"),
      tabs: {
        aboutme: t("about.tab.aboutme"),
        skills: t("about.tab.skills"),
        resume: t("about.tab.resume"),
      },
      summary: t("about.summary"),
      bio: t("about.bio"),
      experienceValue: t("about.experience-value"),
      languages: t("about.languages"),
      resumePlaceholder: t("about.resume-placeholder"),
    },

    experience: {
      title: t("experience.title"),
      titleAccent: t("experience.title-accent"),
      subtitle: t("experience.subtitle"),
      entries: experience.map((entry) => ({
        id: entry.id,
        company: entry.company,
        technologies: entry.technologies,
        role: byId(`experience.${entry.id}.role`),
        location: byId(`experience.${entry.id}.location`),
        duration: byId(`experience.${entry.id}.duration`),
        description: listById(`experience.${entry.id}.description`),
      })),
    },

    projects: {
      title: t("projects.title"),
      titleAccent: t("projects.title-accent"),
      subtitle: t("projects.subtitle"),
      viewCode: t("projects.view-code"),
      liveDemo: t("projects.live-demo"),
      of: t("projects.of"),
      entries: projects.map((project) => ({
        id: project.id,
        type: project.type,
        tech: project.tech,
        github: project.github,
        demo: project.demo,
        title: byId(`projects.${project.id}.title`),
        description: byId(`projects.${project.id}.description`),
        typeLabel: byId(`projects.type.${project.type}`),
      })),
    },

    formation: {
      title: t("formation.title"),
      titleAccent: t("formation.title-accent"),
      subtitle: t("formation.subtitle"),
      educationHeading: t("formation.education"),
      certificatesHeading: t("formation.certificates"),
      achievementsHeading: t("formation.achievements"),
      education: education.map((entry) => ({
        id: entry.id,
        institution: entry.institution,
        year: entry.year,
        degree: byId(`formation.${entry.id}.degree`),
        description: byId(`formation.${entry.id}.description`),
        achievements: listById(`formation.${entry.id}.achievements`),
      })),
      certifications: certifications.map((cert) => ({
        id: cert.id,
        issuer: cert.issuer,
        year: cert.year,
        name: byId(`formation.${cert.id}.name`),
      })),
    },
  };
}

export type Content = ReturnType<typeof getContent>;

export const languages = {
  en: "English",
  es: "Español",
} as const;

export const defaultLang = "en";

export type Lang = keyof typeof languages;

/** Ruta raíz de cada idioma. El idioma por defecto no lleva prefijo. */
export const langPath: Record<Lang, string> = {
  en: "/",
  es: "/es/",
};

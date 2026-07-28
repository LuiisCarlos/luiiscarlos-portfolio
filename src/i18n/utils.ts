import { defaultLang, langPath, languages, type Lang } from "./config";
import { ui, type Dict, type UIKey } from "./ui";

/** Deduce el idioma del primer segmento de la ruta. `/es/...` → "es". */
export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split("/");
  return segment in languages ? (segment as Lang) : defaultLang;
}

/**
 * Devuelve el traductor del idioma dado. El tipo de retorno se ajusta a cada
 * clave, así que `t("hero.sentences")` es `readonly string[]` y
 * `t("hero.tagline")` es `string` sin castings.
 */
export function useTranslations(lang: Lang) {
  return function t<K extends UIKey>(key: K): Dict[K] {
    return ui[lang][key];
  };
}

/** Quita el prefijo de idioma de una ruta: `/es/projects/x` → `/projects/x`. */
export function stripLangPrefix(pathname: string): string {
  return pathname.replace(/^\/es(?=\/|$)/, "") || "/";
}

/**
 * Misma página en otro idioma. Hay que pasarle la ruta actual: con detalles de
 * proyecto ya no vale devolver siempre la portada.
 */
export function getAlternatePath(lang: Lang, pathname: string): string {
  const base = stripLangPrefix(pathname);
  return lang === defaultLang ? base : `${langPath[lang]}${base.slice(1)}`;
}

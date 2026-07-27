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

/** Ruta equivalente en el otro idioma, conservando el hash de sección. */
export function getAlternatePath(lang: Lang, hash = ""): string {
  return `${langPath[lang]}${hash}`;
}

// Datos que no dependen del idioma. Lo traducible vive en src/i18n/ui.ts.

export const personal = {
  name: "Luis Carlos",
  fullname: "Luis Carlos Caicedo Giraldo",
  email: "luisccg2003@gmail.com",
  github: "https://github.com/luiiscarlos",
  linkedin: "https://linkedin.com/in/luiiscarlos",
  // Sirve desde public/. Vacío = el enlace del footer y los botones de la
  // pestaña "Resume" no se renderizan, y se muestra el placeholder.
  resume: "/cv-luis-carlos.pdf",
} as const;

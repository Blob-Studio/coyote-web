import en from "./../locales/en";
import es from "./../locales/es";

const availableLocales = {
  en: en,
  es: es,
};

const getLocales = (locale: "en" | "es" = "en") => {
  return availableLocales[locale];
};

export default getLocales;

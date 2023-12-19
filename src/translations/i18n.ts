import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import global_en from "./en/global.json";
import global_fr from "./fr/global.json";

const resources = {
  en: {
    common: global_en,
  },
  fr: {
    common: global_fr,
  },
};

const options = {
  order: ["navigator"],
  // lookupQuerystring: "lng",
};

i18n
  .use(detector) // Registering the detection plugin
  .use(initReactI18next)
  .init({
    debug: false,
    // language resources
    resources,
    detection: options,
    fallbackLng: {
      default: ["en"],
    },
    ns: ["common"],
    defaultNS: "common",
    nonExplicitSupportedLngs: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;

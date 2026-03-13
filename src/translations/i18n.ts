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

/**
 * Ordre de détection de la langue :
 * 1. localStorage  → pour la persistance du choix utilisateur
 * 2. navigator     → langue du navigateur (fallback automatique)
 */
const detectionOptions = {
  order: ["localStorage", "navigator"],
  lookupLocalStorage: "i18nextLng",
  caches: ["localStorage"],
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    debug: false,
    resources,
    detection: detectionOptions,
    fallbackLng: {
      default: ["en"],
    },
    ns: ["common"],
    defaultNS: "common",
    nonExplicitSupportedLngs: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

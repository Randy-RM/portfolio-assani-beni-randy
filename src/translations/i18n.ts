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
 * 1. navigator     → langue actuelle du navigateur (source de vérité)
 * 2. localStorage  → fallback si navigator est indisponible
 *
 * NOTE:
 * On place `navigator` en premier pour que changer la langue du navigateur
 * soit pris en compte immédiatement au prochain chargement.
 */
const detectionOptions = {
  order: ["navigator", "localStorage"],
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

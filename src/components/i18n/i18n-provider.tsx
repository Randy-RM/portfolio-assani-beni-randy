import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../../translations/i18n";

type I18nProviderProps = {
  children: React.ReactNode;
};

/**
 * I18nProvider - Wraps children with the i18next instance.
 *
 * Nécessaire dans Astro car les React islands sont rendus sans contexte global.
 * Ce provider doit entourer tous les composants qui utilisent `useTranslation`.
 */
const I18nProvider = ({ children }: I18nProviderProps): JSX.Element => {
  React.useEffect(() => {
    const applyDocumentLanguage = (language: string) => {
      // Keep the HTML `lang` attribute aligned with the active locale.
      document.documentElement.lang = language.startsWith("fr") ? "fr" : "en";
    };

    applyDocumentLanguage(i18n.resolvedLanguage ?? i18n.language ?? "en");

    i18n.on("languageChanged", applyDocumentLanguage);

    return () => {
      i18n.off("languageChanged", applyDocumentLanguage);
    };
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default I18nProvider;

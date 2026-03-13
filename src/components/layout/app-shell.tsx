import React, { useEffect } from "react";
import { useThemeStore } from "../../store";
import "../../styles/sass/main.scss";
import I18nProvider from "../i18n/i18n-provider";
import FrontOfficeLayout from "./frontoffice-layout";

type AppShellProps = {
  children: React.ReactNode;
};

/**
 * AppShell - Composant React racine pour chaque page.
 *
 * Responsabilités :
 * - Initialisation d'i18n (via I18nProvider)
 * - Gestion du thème (dark/light) via Zustand
 * - Application de la classe de thème sur le wrapper ET sur <html>
 *   pour synchroniser avec le script anti-FOUC de BaseLayout.astro
 * - Rendu du layout (Header, Footer, Loader, Modal, etc.)
 */
const AppShellInner = ({ children }: AppShellProps): JSX.Element => {
  const themeState = useThemeStore((state) => state.themeState);

  // Synchronise la classe de thème sur <html> dès l'hydratation
  useEffect(() => {
    document.documentElement.className = `theme--${themeState}`;
  }, [themeState]);

  return (
    <div className={`theme--${themeState}`}>
      <FrontOfficeLayout>{children}</FrontOfficeLayout>
    </div>
  );
};

const AppShell = ({ children }: AppShellProps): JSX.Element => (
  <I18nProvider>
    <AppShellInner>{children}</AppShellInner>
  </I18nProvider>
);

export default AppShell;

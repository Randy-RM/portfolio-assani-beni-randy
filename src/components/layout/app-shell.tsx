import { motion } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";
import { useThemeStore } from "../../store";
import "../../styles/sass/main.scss";
import I18nProvider from "../i18n/i18n-provider";
import FrontOfficeLayout from "./frontoffice-layout";

const PAGE_LEAVE_DURATION_MS = 1000;
const PAGE_LEAVE_DURATION = `${PAGE_LEAVE_DURATION_MS}ms`;

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
  const [isLeavingPage, setIsLeavingPage] = useState<boolean>(false);

  const navigateWithTransition = useCallback(
    (nextUrl: string): void => {
      if (isLeavingPage) {
        return;
      }

      setIsLeavingPage(true);
      document.documentElement.classList.add("page-leaving");

      window.setTimeout(() => {
        window.location.href = nextUrl;
      }, PAGE_LEAVE_DURATION_MS);
    },
    [isLeavingPage],
  );

  // Synchronise la classe de thème sur <html> dès l'hydratation
  useEffect(() => {
    document.documentElement.classList.remove("theme--light", "theme--dark");
    document.documentElement.classList.add(`theme--${themeState}`);
  }, [themeState]);

  useEffect(() => {
    document.documentElement.classList.remove("page-leaving");

    const handleInternalNavigation = (event: MouseEvent): void => {
      if (event.defaultPrevented || isLeavingPage) {
        return;
      }

      if (
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target as Element | null;
      const link = target?.closest("a");

      if (!link) {
        return;
      }

      const rawHref = link.getAttribute("href");

      if (
        !rawHref ||
        rawHref.startsWith("#") ||
        rawHref.startsWith("mailto:") ||
        rawHref.startsWith("tel:") ||
        rawHref.startsWith("javascript:")
      ) {
        return;
      }

      if (link.target && link.target !== "_self") {
        return;
      }

      if (link.hasAttribute("download")) {
        return;
      }

      const nextLocation = new URL(link.href, window.location.href);

      if (nextLocation.origin !== window.location.origin) {
        return;
      }

      const currentRoute =
        window.location.pathname +
        window.location.search +
        window.location.hash;
      const nextRoute =
        nextLocation.pathname + nextLocation.search + nextLocation.hash;

      if (currentRoute === nextRoute) {
        return;
      }

      event.preventDefault();
      navigateWithTransition(nextRoute);
    };

    document.addEventListener("click", handleInternalNavigation, true);

    return () => {
      document.removeEventListener("click", handleInternalNavigation, true);
    };
  }, [isLeavingPage, navigateWithTransition]);

  return (
    <motion.div
      className={`theme--${themeState} page-transition-root`}
      style={
        { "--page-leave-duration": PAGE_LEAVE_DURATION } as React.CSSProperties
      }
      initial={false}
      animate={isLeavingPage ? { opacity: 0 } : { opacity: 1 }}
      transition={{
        duration: PAGE_LEAVE_DURATION_MS / 1000,
        ease: "easeInOut",
      }}
    >
      <FrontOfficeLayout>{children}</FrontOfficeLayout>
    </motion.div>
  );
};

const AppShell = ({ children }: AppShellProps): JSX.Element => (
  <I18nProvider>
    <AppShellInner>{children}</AppShellInner>
  </I18nProvider>
);

export default AppShell;

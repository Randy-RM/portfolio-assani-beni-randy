import * as React from "react";
import { Footer, Header, Loader, Modal, ScrollToTopButton } from "../";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "../../hooks";

const LOADER_SESSION_KEY = "loader-seen";

type FrontOfficeLayoutProps = {
  children?: React.ReactNode;
};

const FrontOfficeLayout = ({
  children,
}: FrontOfficeLayoutProps): JSX.Element => {
  // Start true so the Loader always renders on SSR (and first hydration matches).
  // useLayoutEffect then checks sessionStorage BEFORE the browser paints:
  // - first visit  → flag absent  → keep loader → animations fire after loader finishes
  // - repeat visit → flag present → skip loader  → content mounts fresh → animations fire
  const [showLoader, setShowLoader] = React.useState(true);

  useIsomorphicLayoutEffect(() => {
    if (sessionStorage.getItem(LOADER_SESSION_KEY) === "1") {
      setShowLoader(false);
    }
  }, []);

  // Après le montage du contenu (loader masqué), on attend une frame pour
  // que le navigateur ait calculé le layout, puis on rafraîchit ScrollTrigger
  // afin que les animations GSAP des éléments déjà visibles se déclenchent.
  //
  // requestAnimationFrame / cancelAnimationFrame sont des API natives du
  // navigateur (Web API), disponibles globalement comme setTimeout ou
  // console.log — elles n'ont pas besoin d'être importées.
  // requestAnimationFrame planifie un callback juste avant le prochain
  // repaint du navigateur, ce qui garantit que le DOM est à jour.
  // cancelAnimationFrame annule ce callback si le composant est démonté
  // avant son exécution (nettoyage du useEffect).
  React.useEffect(() => {
    if (!showLoader) {
      const id = requestAnimationFrame(() => ScrollTrigger.refresh());
      return () => cancelAnimationFrame(id);
    }
  }, [showLoader]);

  const handleLoaderAnimationsComplete = React.useCallback(() => {
    sessionStorage.setItem(LOADER_SESSION_KEY, "1");
    setShowLoader(false);
  }, []);

  if (showLoader) {
    return (
      <main className="bg-primary-color js-loader-screen">
        <Loader onAnimationsComplete={handleLoaderAnimationsComplete} />
      </main>
    );
  }

  return (
    <>
      <Modal />
      <Header />
      <main className="bg-primary-color font-w-light font-secondary-color">
        {children}
      </main>
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default FrontOfficeLayout;

import * as React from "react";
import { Footer, Header, Loader, Modal, ScrollToTopButton } from "../";
import { useLoaderStore } from "../../store";

type FrontOfficeLayoutProps = {
  children?: React.ReactNode;
};

const FrontOfficeLayout = ({
  children,
}: FrontOfficeLayoutProps): JSX.Element => {
  // "select" the needed state and action
  const loaderState = useLoaderStore((state) => state.isAppLoading);
  const setLoaderState = useLoaderStore((state) => state.updateLoader);

  const handleLoaderAnimationsComplete = React.useCallback(() => {
    setLoaderState(false);
  }, [setLoaderState]);

  if (loaderState) {
    return (
      <main className="bg-primary-color">
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

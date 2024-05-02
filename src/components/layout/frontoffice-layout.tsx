import * as React from "react";
import { useEffect } from "react";
import { Footer, Header, Loader, Modal, ScrollToTopButton } from "../";
import { useLoaderStore, useThemeStore } from "../../store";
import "../../styles/sass/main.scss";

type FrontOfficeLayoutProps = {
  children: JSX.Element;
};

const FrontOfficeLayout = ({
  children,
}: FrontOfficeLayoutProps): JSX.Element => {
  // "select" the needed state and action
  const themeState = useThemeStore((state) => state.themeState);
  const loaderState = useLoaderStore((state) => state.isAppLoading);
  const setLoaderState = useLoaderStore((state) => state.updateLoader);
  useEffect(() => {
    if (loaderState) {
      setTimeout(() => {
        setLoaderState(false);
      }, 2000);
    }
  }, []);

  if (loaderState) {
    return (
      <div className={`theme--${themeState}`}>
        <main className="bg-primary-color">
          <Loader />
        </main>
      </div>
    );
  }

  return (
    <>
      <div className={`theme--${themeState}`}>
        <Modal />
        <Header />
        <main className="bg-primary-color font-w-light font-secondary-color">
          {children}
        </main>
        <ScrollToTopButton />
        <Footer />
      </div>
    </>
  );
};

export default FrontOfficeLayout;

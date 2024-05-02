import * as React from "react";
import { useEffect } from "react";
import { Footer, Header, Loader, Modal, ScrollToTopButton } from "../";
import { useLoaderStore } from "../../store";
import "../../styles/sass/main.scss";

type FrontOfficeLayoutProps = {
  children: JSX.Element;
};

const FrontOfficeLayout = ({
  children,
}: FrontOfficeLayoutProps): JSX.Element => {
  // "select" the needed state and action
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
      <main className="bg-primary-color">
        <Loader />
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

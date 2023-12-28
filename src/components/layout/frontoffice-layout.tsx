import { Header, ScrollToTopButton, OnLoadScrollToTop, Footer } from "../";
import { Outlet } from "react-router-dom";

const FrontOfficeLayout = (): JSX.Element => {
  return (
    <>
      <Header />
      <>
        <Outlet />
      </>
      <ScrollToTopButton />
      <OnLoadScrollToTop />
      <Footer />
    </>
  );
};

export default FrontOfficeLayout;

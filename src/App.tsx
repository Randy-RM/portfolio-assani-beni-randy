import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, WorksPage, NotFoundPage } from "./pages";
import {
  Header,
  Footer,
  OnLoadScrollToTop,
  ScrollToTopButton,
  Loader,
} from "./components";

const App = (): JSX.Element => {
  const [isAppLoading, setIsAppLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsAppLoading(false);
    }, 3000);
  }, []);

  if (isAppLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/visit-my-works" element={<WorksPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ScrollToTopButton />
      <OnLoadScrollToTop />
      <Footer />
    </Router>
  );
};

export default App;

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, WorksPage, NotFoundPage } from "./pages";
import {
  Header,
  Footer,
  OnLoadScrollToTop,
  ScrollToTopButton,
  Loader,
  Modal,
} from "./components";
import { useEmailStatusStore } from "./store";

const App = (): JSX.Element => {
  // "select" the needed state
  const emailStatus = useEmailStatusStore((state) => state.emailStatus);
  const emailStatusMessage = useEmailStatusStore(
    (state) => state.emailStatusMessage
  );
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
      {emailStatus != "none" ? (
        <Modal
          emailStatus={emailStatus}
          emailStatusMessage={emailStatusMessage}
        />
      ) : null}
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

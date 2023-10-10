import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, WorksPage, NotFoundPage } from "./pages";
import {
  Header,
  Footer,
  OnLoadScrollToTop,
  ScrollToTopButton,
} from "./components";

const App = (): JSX.Element => {
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

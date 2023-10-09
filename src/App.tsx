import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Projects, NotFound } from "./pages";
import {
  Header,
  Footer,
  ScrollToTopEffect,
  ScrollToTopButton,
} from "./components";

const App = (): JSX.Element => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visit-my-works" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
      <ScrollToTopEffect />
    </Router>
  );
};

export default App;

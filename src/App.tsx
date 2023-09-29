import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Projects, NotFound } from "./pages";
import { Header, Footer } from "./components";

const App = (): JSX.Element => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

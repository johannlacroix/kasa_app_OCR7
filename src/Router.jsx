import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FicheLogement from "./pages/FicheLogement";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const AppRouter = () => {
  console.log("Router monté !");

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="logement/:id" element={<FicheLogement />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;

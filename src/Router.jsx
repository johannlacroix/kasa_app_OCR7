import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FicheLogement from "./pages/FicheLogement";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Gallery from "./components/Gallery/Gallery";

const AppRouter = () => {
  console.log("Router monté !");

  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Gallery />} />
          <Route path="/logement/:id" element={<FicheLogement />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="home" element={<Home />} />
          <Route path="/error" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;

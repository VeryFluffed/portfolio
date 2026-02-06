import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import { Navbar } from "@/components/navbar";
import { navLinks } from "@/data";
import Footer from "@/components/Footer";
import About from "@/pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import ProjectSlug from "@/pages/ProjectSlug";
import NotFound from "@/pages/NotFound";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar logo="Danh" className="fixed w-full" links={navLinks} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectSlug />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;

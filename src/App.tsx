import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import { Navbar } from "@/components/ui/@timeworn/navbar";
import { navLinks } from "@/data";
import Footer from "@/components/Footer";
import About from "@/pages/About";
// import About from "./pages/About";
// import Resume from "./pages/Resume";
// import Projects from "./pages/Projects";
// import GoKart from "./pages/projects/GoKart";
// import Pickleball from "./pages/projects/Pickleball";
// import Jukebox from "./pages/projects/Jukebox";
// import CyberPatriot from "./pages/projects/CyberPatriot";
// import Portfolio from "./pages/projects/Portfolio";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar
        logo="Danh"
        className="fixed w-full backdrop-blur!"
        links={navLinks}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/resume" element={<Resume />} /> */}
        {/* <Route path="/projects" element={<Projects />} /> */}

        {/* <Route path="/projects/go-kart" element={<GoKart />} />
        <Route path="/projects/pickleball" element={<Pickleball />} />
        <Route path="/projects/jukebox" element={<Jukebox />} />
        <Route path="/projects/cyberpatriot" element={<CyberPatriot />} />
        <Route path="/projects/portfolio" element={<Portfolio />} /> */}
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;

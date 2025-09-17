import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./sections/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Footer from "./sections/Footer.jsx";
import GoKart from "./pages/projects/GoKart";
import Pickleball from "./pages/projects/Pickleball";
import Jukebox from "./pages/projects/Jukebox";
import CyberPatriot from "./pages/projects/CyberPatriot";

const App = () => {
    return (
        <Router>
            {/* Navbar on all pages */}
            <Navbar />

            {/* Big stuff */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />

                <Route path="/projects/go-kart" element={<GoKart />} />
                <Route path="/projects/pickleball" element={<Pickleball />} />
                <Route path="/projects/jukebox" element={<Jukebox />} />
                <Route path="/projects/cyberpatriot" element={<CyberPatriot />} />
            </Routes>

            {/* Footer on all pages */}
            <Footer />
        </Router>
    );
};

export default App;

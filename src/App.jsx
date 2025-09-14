import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./sections/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";

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
            </Routes>
        </Router>
    );
};

export default App;

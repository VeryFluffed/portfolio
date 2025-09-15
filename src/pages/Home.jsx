import React from "react";
import "../index.css";
import Hero from "../sections/Hero.jsx";
import AboutMe from "../sections/AboutMe.jsx";
import Projects from "../sections/Projects.jsx";

const Home = () => {
    return (
        <main>
            <Hero />
            <AboutMe />
            <Projects />
        </main>
    );
};

export default Home;

{/*
    [plugin:vite:import-analysis] Missing "./client.js" specifier in "react-dom" package
    C:/Users/yctra/OneDrive/Desktop/portfolio/src/pages/Home.jsx:7:21
    6  |  import AboutMe from "../sections/AboutMe.jsx";
    7  |  import Projects from "../sections/Projects.jsx";
    8  |  import ReactDOM from "react-dom/client.js";
|                        ^
    9  |  import App from "../App.jsx";
    10 |  createRoot(document.getElementById("root")).render(
}
*/}
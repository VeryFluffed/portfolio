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
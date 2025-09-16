import React from "react";
import "../index.css";
import Hero from "../sections/Home/Hero.jsx";
import AboutMe from "../sections/Home/AboutMe.jsx";
import Projects from "../sections/Home/Projects.jsx";

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
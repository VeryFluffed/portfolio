import React from "react";
import "../index.css";
import AboutMe from "../sections/AboutMe.jsx";
import Introduction from "../sections/Introduction.jsx";
import Minecraft from "../sections/Minecraft.jsx";
import FirstProjects from "../sections/FirstProjects.jsx";
import Leader from "../sections/Leader.jsx";
import Study from "../sections/Study.jsx";
import Life from "../sections/Life.jsx";

const About = () => {
    return (
        <main>
            <Introduction />
            <Minecraft />
            <FirstProjects />
            <Leader />
            <Study />
            <Life />
        </main>
    );
};

export default About;
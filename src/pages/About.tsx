import "../index.css";
import AboutMe from "../sections/AboutMe";
import Introduction from "../sections/Introduction";
import Minecraft from "../sections/Minecraft";
import FirstProjects from "../sections/FirstProjects";
import Leader from "../sections/Leader";
import Study from "../sections/Study";
import Life from "../sections/Life";

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

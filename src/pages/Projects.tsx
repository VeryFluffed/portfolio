import { ProjectsList } from "@/components/Project";
import { projects } from "@/data";

const Projects = () => {
  return (
    <main className="main">
      <ProjectsList projects={projects} />
    </main>
  );
};

export default Projects;

import ProjectCard from "@/components/Home/ProjectCard";
import { Button } from "@/components/ui/button";
import { projects } from "@/data";
import { Link } from "react-router-dom";

export const Projects = () => {
  return (
    <section className="main">
      <div className="mb-10 grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button size="lg" asChild>
          <Link to="/projects">View All Projects →</Link>
        </Button>
      </div>
    </section>
  );
};

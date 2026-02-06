import { ProjectsList } from "@/components/Project";
import { Button } from "@/components/ui/button";
import { projects } from "@/data";
import { Link } from "react-router-dom";

export const HomeProjects = () => {
  return (
    <section className="main">
      <ProjectsList projects={projects.slice(0, 4)} />
      <div className="mt-8 flex justify-center">
        <Button size="lg" asChild>
          <Link to="/projects">View All Projects →</Link>
        </Button>
      </div>
    </section>
  );
};

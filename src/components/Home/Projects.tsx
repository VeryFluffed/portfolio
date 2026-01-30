import ProjectCard from "@/components/Home/ProjectCard";
import { Button } from "@/components/ui/button";
import { projects } from "@/data";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <section className="mb-8 sm:px-20 md:px-28 lg:px-32">
      <div className="mb-10 h-[.5px] w-full" />
      <div className="px-12">
        <div className="mb-10 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button asChild>
            <Link to="/projects">View All Projects →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

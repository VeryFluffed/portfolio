import Link from "@/components/Link";
import { Separator } from "@/components/ui/separator";
import type { Project } from "@/data";
import type { FC } from "react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link
      to={project.link}
      variant="icon"
      className="bg-accent overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-[1.02]"
    >
      <div className="flex h-60 items-center justify-center bg-black">
        {project.video ? (
          <video
            src={project.video}
            autoPlay
            loop
            muted
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-xl text-white">No Video Available</span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-1 text-base font-extrabold">{project.title}</h3>
        <p className="text-accent-foreground/60 mb-4 text-xs font-semibold uppercase">
          {project.role}
        </p>
        <Separator className="mb-4" />
        <p className="text-accent-foreground mb-6 text-xs">
          {project.description}
        </p>
        <div>
          <h4 className="mb-2 text-sm font-bold">
            Software/Languages/Frameworks
          </h4>
          <div className="flex flex-wrap gap-4">
            {project.tech.map((tech, index) => {
              const Icon = tech.icon;

              return (
                <div key={index} className="flex items-center gap-2">
                  {typeof Icon === "string" ? (
                    <img
                      src={Icon}
                      alt={tech.name}
                      className="h-6 w-6 object-contain"
                    />
                  ) : (
                    <Icon size={24} />
                  )}
                  <span className="text-sm">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;

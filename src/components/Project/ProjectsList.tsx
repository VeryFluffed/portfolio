import ProjectCard from "@/components/Project/ProjectCard";
import type { Project } from "@/data";
import { cn } from "@/lib/utils";
import type { ComponentProps, FC } from "react";

interface ProjectsListProps extends ComponentProps<"div"> {
  projects: Project[];
}

export const ProjectsList: FC<ProjectsListProps> = ({
  projects,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn("mb-10 grid gap-8 md:grid-cols-2", className)}
      {...props}
    >
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
      {children}
    </div>
  );
};

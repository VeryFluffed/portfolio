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
            <Link
              key={index}
              to={project.link}
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
                <h3 className="mb-1 text-base font-extrabold">
                  {project.title}
                </h3>
                <p className="text-accent-foreground/60 mb-4 text-xs font-semibold uppercase">
                  {project.role}
                </p>
                <hr className="mb-4 border-gray-300" />
                <p className="mb-6 text-xs text-gray-600">
                  {project.description}
                </p>
                <div>
                  <h4 className="mb-2 text-sm font-bold">
                    Software/Languages/Frameworks
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    {project.tech.map((tech, index) => (
                      <div key={index} className="flex items-center gap-2">
                        {typeof tech.icon === "string" ? (
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="h-6 w-6 object-contain"
                          />
                        ) : (
                          <tech.icon size={24} />
                        )}
                        <span className="text-sm">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
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

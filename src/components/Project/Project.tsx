import Link from "@/components/Link";
import { Markdown } from "@/components/Markdown";
import { Button } from "@/components/ui/button";
import type { Frontmatter } from "@/lib/utils";
import type { FC } from "react";

export const Project: FC<Frontmatter> = ({
  image,
  alt,
  title,
  description,
  contributions,
  collaborators,
  buttons,
  content = "",
}) => {
  return (
    <>
      <div className="flex justify-center">
        <hr className="w-4/5 border-t border-black dark:border-white" />
      </div>
      <main className="main">
        <article>
          <header>
            <Link
              to="/projects"
              className="text-foreground/60 mt-5 mb-10 inline-block text-lg"
            >
              ← Back to Projects
            </Link>
            <div className="mb-10 grid items-start gap-12 md:grid-cols-2">
              <img
                src={image}
                alt={alt}
                className="h-full w-full rounded-lg object-cover shadow-lg"
              />
              <div>
                <h1 className="mb-6 text-3xl font-bold tracking-wide">{title}</h1>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {description}
                </p>
                <div className="mb-10 grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-foreground/60 mb-3 text-sm font-semibold tracking-wider">
                      CONTRIBUTIONS
                    </h3>
                    <ul className="text-foreground/70 space-y-2">
                      {contributions.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-foreground/60 mb-3 text-sm font-semibold tracking-wider">
                      COLLABORATORS
                    </h3>
                    <ul className="text-foreground/70 space-y-2">
                      {collaborators.map((collab, index) => (
                        <li key={index}>
                          {collab.url ? (
                            <Link to={collab.url}>{collab.name}</Link>
                          ) : (
                            collab.name
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex gap-4">
                  {buttons.map((button, index) => (
                    <Button
                      key={index}
                      variant={index % 2 == 0 ? "default" : "secondary"}
                      asChild
                    >
                      <Link variant="button" to={button.url}>
                        {button.label}
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </header>
          <div className="prose">
            <Markdown>{content}</Markdown>
          </div>
        </article>
      </main>
    </>
  );
};

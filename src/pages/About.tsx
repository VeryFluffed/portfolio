import { Markdown } from "@/components/Markdown";
import { aboutText } from "@/data/about";
import { parseFrontmatter } from "@/lib/utils";

const About = () => {
  const sections = aboutText.map(parseFrontmatter);

  return (
    <main className="main">
      {sections.map((section, index) => {
        const imageFirst = index % 2 === 0;

        return (
          <section
            key={index}
            className="mb-12 flex flex-col items-center gap-8 md:flex-row"
          >
            <div
              className={`flex size-72 shrink-0 items-center justify-center ${
                imageFirst ? "md:order-first" : "md:order-last"
              }`}
            >
              <img
                className="h-full w-full rounded object-cover"
                src={section.image}
                alt={section.alt}
              />
            </div>
            <div className="typography-about flex flex-1 flex-col justify-center p-8">
              <Markdown>{section.content}</Markdown>
            </div>
          </section>
        );
      })}
    </main>
  );
};

export default About;

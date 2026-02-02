import { Markdown } from "@/components/Markdown";
import { aboutText } from "@/data/about";

interface SectionData {
  content: string;
  image: string;
  alt: string;
}

const parseFrontmatter = (text: string): SectionData => {
  const frontmatterMatch = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

  if (!frontmatterMatch || !frontmatterMatch[1] || !frontmatterMatch[2]) {
    return { content: text, image: "", alt: "" };
  }

  const frontmatter = frontmatterMatch[1];
  const content = frontmatterMatch[2];

  const imageMatch = frontmatter.match(/^image:\s*(.+)$/m);
  const altMatch = frontmatter.match(/^alt:\s*(.+)$/m);

  return {
    content: content.trim(),
    image: imageMatch && imageMatch[1] ? imageMatch[1].trim() : "",
    alt: altMatch && altMatch[1] ? altMatch[1].trim() : "",
  };
};

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
            <div className="flex flex-1 flex-col justify-center p-8">
              <Markdown>{section.content}</Markdown>
            </div>
          </section>
        );
      })}
    </main>
  );
};

export default About;

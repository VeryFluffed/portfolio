import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { parseFrontmatter, type Frontmatter } from "@/lib/utils";
import { Project } from "@/components/Project";
import NotFound from "@/pages/NotFound";

const ProjectSlug = () => {
  const { slug } = useParams<{ slug: string }>();
  const [markdownData, setMarkdownData] = useState<Frontmatter | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMarkdown = async () => {
      try {
        setLoading(true);
        const data = await import(`./projects/${slug}.md?raw`);
        setMarkdownData(parseFrontmatter(data.default));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadMarkdown();
    }
  }, [slug]);

  if (loading) {
    return <></>;
  }

  if (!markdownData) {
    return <NotFound />;
  }

  return <Project {...markdownData} />;
};

export default ProjectSlug;

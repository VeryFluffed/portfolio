import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import matter from "gray-matter";
import { collaborators, type Collaborator } from "@/data/collaborators";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface Frontmatter {
  title: string;
  description: string;
  image?: string;
  alt?: string;
  collaborators: Collaborator[];
  contributions: string[];
  buttons: { label: string; url: string }[];
  content: string;
}

export const parseFrontmatter = (markdown: string): Frontmatter => {
  const { data, content } = matter(markdown);

  const resolvedCollaborators: Collaborator[] = (data.collaborators || []).map(
    (name: string) => {
      const collab = collaborators.find(
        (collab) => collab.name.toLowerCase() === name.toLowerCase(),
      );
      return collab || { name };
    },
  );

  return {
    title: data.title || "",
    description: data.description || "",
    image: data.image,
    alt: data.alt,
    collaborators: resolvedCollaborators,
    contributions: data.contributions || [],
    buttons: data.buttons || [],
    content: content,
  };
};

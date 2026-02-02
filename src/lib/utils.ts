import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import matter from "gray-matter";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface Frontmatter {
  title: string;
  description: string;
  image?: string;
  alt?: string;
  collaborators: { name: string; url?: string }[];
  contributions: string[];
  buttons: { label: string; url: string }[];
  content: string;
}

export const parseFrontmatter = (markdown: string): Frontmatter => {
  const { data, content } = matter(markdown);

  console.log(data);

  return {
    title: data.title || "",
    description: data.description || "",
    image: data.image,
    alt: data.alt,
    collaborators: data.collaborators || [],
    contributions: data.contributions || [],
    buttons: data.buttons || [],
    content: content,
  };
};

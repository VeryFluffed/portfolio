import Link from "@/components/Link";
import type { ComponentProps, FC } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export const Markdown: FC<ComponentProps<typeof ReactMarkdown>> = ({
  children,
  components,
  ...props
}) => {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkGfm]}
      components={{
        a: ({ href, children }) => <Link href={href}>{children}</Link>,
        ...components,
      }}
      {...props}
    >
      {children}
    </ReactMarkdown>
  );
};

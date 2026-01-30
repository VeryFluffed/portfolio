import Link from "@/components/Link";
import type { ComponentProps, FC } from "react";
import ReactMarkdown from "react-markdown";

export const Markdown: FC<ComponentProps<typeof ReactMarkdown>> = ({
  children,
  components,
  ...props
}) => {
  return (
    <ReactMarkdown
      components={{
        a: ({ href, children }) => (
          <Link href={href} external>
            {children}
          </Link>
        ),
        ...components,
      }}
      {...props}
    >
      {children}
    </ReactMarkdown>
  );
};

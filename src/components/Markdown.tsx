import Link from "@/components/Link";
import type { ComponentProps, FC } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'


export const Markdown: FC<ComponentProps<typeof ReactMarkdown>> = ({
  children,
  components,
  ...props
}) => {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw, rehypeKatex]}
      remarkPlugins={[remarkGfm, remarkMath]}
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

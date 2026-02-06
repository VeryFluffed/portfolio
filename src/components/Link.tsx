import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, FC } from "react";
import { Link as ReactLink } from "react-router-dom";

const linkVariants = cva("", {
  variants: {
    variant: {
      primary: "text-blue-600 hover:underline",
      button: "",
      icon: "",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface LinkProps
  extends
    Omit<ComponentProps<"a">, "href">,
    Omit<ComponentProps<typeof ReactLink>, "to">,
    VariantProps<typeof linkVariants> {
  to?: string;
  href?: string;
  external?: boolean;
}

const Link: FC<LinkProps> = ({
  variant,
  className,
  to,
  href,
  external,
  ...props
}) => {
  className = cn(linkVariants({ variant }), className);

  const url = to || href || "";

  if (!external) {
    external = url.startsWith("http://") || url.startsWith("https://");
  }

  if (external) {
    return (
      <a
        className={className}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    );
  }

  return <ReactLink className={className} to={url} {...props} />;
};

export default Link;

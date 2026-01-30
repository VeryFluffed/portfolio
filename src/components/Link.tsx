import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, FC } from "react";
import { Link as ReactLink } from "react-router-dom";

const linkVariants = cva("", {
  variants: {
    variant: {
      primary: "text-blue-600 hover:underline",
      icon: "",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface LinkExternalProps
  extends Omit<ComponentProps<"a">, "href">, VariantProps<typeof linkVariants> {
  external: true;
  to?: string;
  href?: string;
}

interface LinkInternalProps
  extends ComponentProps<typeof ReactLink>, VariantProps<typeof linkVariants> {
  external?: false;
}

type LinkProps = LinkExternalProps | LinkInternalProps;

const Link: FC<LinkProps> = ({ external, variant, className, ...props }) => {
  className = cn(linkVariants({ variant }), className);

  if (external) {
    const { to, href, ...rest } = props as LinkExternalProps;
    return (
      <a
        className={className}
        href={to || href}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      />
    );
  }

  return (
    <ReactLink
      className={className}
      {...(props as ComponentProps<typeof ReactLink>)}
    />
  );
};

export default Link;

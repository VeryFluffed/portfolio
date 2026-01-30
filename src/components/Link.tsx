import { cn } from "@/lib/utils";
import type { ComponentProps, FC } from "react";
import { Link as ReactLink } from "react-router-dom";

interface LinkExternalProps extends Omit<ComponentProps<"a">, "href"> {
  external: true;
  to?: string;
  href?: string;
}

interface LinkInternalProps extends ComponentProps<typeof ReactLink> {
  external?: false;
}

type LinkProps = LinkExternalProps | LinkInternalProps;

const Link: FC<LinkProps> = ({ external, className, ...props }) => {
  className = cn("text-blue-600 hover:underline", className);

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

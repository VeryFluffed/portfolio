import Link from "@/components/Link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { MenuIcon, XIcon } from "lucide-react";
import {
  useState,
  useEffect,
  type FC,
  type ReactNode,
  type ComponentProps,
} from "react";

export interface NavLink extends ComponentProps<typeof Button> {
  label: ReactNode;
  href: string;
  onClick?: () => void;
}

const NavLink: FC<NavLink> = ({ label, href, onClick, ...props }) => {
  return (
    <Button asChild variant="ghost" onClick={onClick} {...props}>
      <Link variant="button" to={href}>
        {label}
      </Link>
    </Button>
  );
};

interface NavbarProps extends VariantProps<typeof navbarVariants> {
  className?: string;
  logo?: ReactNode;
  links?: NavLink[];
  actions?: ReactNode;
  children?: ReactNode;
}

const navbarVariants = cva("hidden flex-1 md:flex items-center gap-2", {
  variants: {
    align: {
      left: "justify-start",
      right: "justify-end",
    },
  },
  defaultVariants: {
    align: "right",
  },
});

export const Navbar: FC<NavbarProps> = ({
  className,
  logo,
  links,
  align,
  actions,
  children,
}) => {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={cn(
        "text-foreground pointer-events-auto sticky top-0 z-31",
        className,
      )}
    >
      <nav className="flex h-full w-full flex-col *:px-6 *:md:px-8 *:lg:px-12">
        <div className="bg-background flex h-16 items-center gap-2 border-b">
          <Link
            className="text-primary hover:text-primary/90 flex cursor-pointer items-center space-x-2 transition-colors"
            to="/"
            variant="button"
          >
            <span className="text-xl font-bold">{logo}</span>
          </Link>
          <div className={navbarVariants({ align })}>
            {links?.map((link, index) => (
              <NavLink key={index} {...link} />
            ))}
            {children}
          </div>
          <div className="flex flex-1 items-center justify-end gap-2 md:flex-initial">
            <Button
              variant="ghost"
              size="icon"
              className="relative md:hidden"
              aria-label={
                navOpen ? "Close navigation menu" : "Open navigation menu"
              }
              onClick={() => setNavOpen(!navOpen)}
            >
              <span className="sr-only">Toggle navigation menu</span>
              <MenuIcon
                className={cn(
                  "absolute transition-all duration-200",
                  navOpen ? "-rotate-45 opacity-0" : "rotate-0 opacity-100",
                )}
              />
              <XIcon
                className={cn(
                  "absolute transition-all duration-200",
                  navOpen ? "rotate-0 opacity-100" : "rotate-45 opacity-0",
                )}
              />
            </Button>
            {actions}
          </div>
        </div>
        <div
          className={cn(
            "bg-background h-[calc(100vh-4rem)] overflow-hidden transition-all duration-300 ease-in-out md:hidden",
            navOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="animate-in fade-in slide-in-from-top-4 flex flex-col py-2 duration-300">
            {links?.map((link, index) => (
              <div
                key={index}
                className="animate-in fade-in slide-in-from-top-2 duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <NavLink
                  {...link}
                  size="lg"
                  className="pl-0 text-lg"
                  onClick={() => setNavOpen(false)}
                />
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

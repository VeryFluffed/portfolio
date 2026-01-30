import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { MenuIcon, XIcon } from "lucide-react";
import { useState, useEffect, type FC, type ReactNode } from "react";
import { Link } from "react-router-dom";

export interface NavLink {
  label: ReactNode;
  href: string;
}

const NavLink: FC<NavLink> = ({ label, href }) => {
  return (
    <Button asChild variant="ghost">
      <Link to={href}>{label}</Link>
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNavOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
      <nav
        className={`flex h-auto w-full flex-col *:px-4 *:md:px-6 ${navOpen ? "bg-background fixed inset-0" : "bg-background/60"}`}
      >
        <div
          className={`flex h-16 items-center gap-2 backdrop-blur transition-all duration-300 ${isScrolled || navOpen ? "border-b" : "dark:bg-background/0 border-none backdrop-blur-none"}`}
        >
          <Link
            className="text-primary hover:text-primary/90 flex cursor-pointer items-center space-x-2 transition-colors"
            to="/"
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
        <div className="md:hidden" hidden={!navOpen}>
          <div className="flex flex-col py-2">
            {links?.map((link, index) => (
              <NavLink key={index} {...link} />
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

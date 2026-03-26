import { useEffect, useState, type FC } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export const DarkModeToggle: FC<{ className?: string }> = ({ className }) => {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      aria-label="Toggle dark mode"
      className={cn(
        "group relative flex h-8 w-8 items-center justify-center rounded-full border border-foreground/20 bg-background/60 backdrop-blur-sm transition-all duration-300 hover:border-foreground/50 hover:bg-foreground/5",
        className,
      )}
    >
      <SunIcon
        className={cn(
          "absolute h-4 w-4 transition-all duration-300",
          dark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100",
        )}
      />
      <MoonIcon
        className={cn(
          "absolute h-4 w-4 transition-all duration-300",
          dark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0",
        )}
      />
    </button>
  );
};
import Link from "@/components/Link";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { LinkedinIcon, MailIcon } from "lucide-react";
import { Markdown } from "@/components/Markdown";
import { aboutMeText } from "@/data/about";
import { useEffect, useRef, type FC } from "react";

// ─── HUD Grid Background ────────────────────────────────────────────────────
const HudGrid: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const draw = () => {
      const isDark = document.documentElement.classList.contains("dark");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Grid color: near-invisible, matches background tone
      const gridColor = isDark
        ? "rgba(100, 116, 160, 0.07)"   // dark slate blue tint
        : "rgba(160, 160, 170, 0.09)";   // light gray tint

      const cellSize = 48;
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 0.5;

      // Vertical lines
      for (let x = 0; x <= canvas.width; x += cellSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y <= canvas.height; y += cellSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Subtle crosshair dots at intersections (every 4th)
      const dotColor = isDark
        ? "rgba(100, 116, 160, 0.12)"
        : "rgba(140, 140, 155, 0.13)";
      ctx.fillStyle = dotColor;
      for (let x = 0; x <= canvas.width; x += cellSize * 4) {
        for (let y = 0; y <= canvas.height; y += cellSize * 4) {
          ctx.beginPath();
          ctx.arc(x, y, 1.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    draw();

    // Observe dark mode changes
    const observer = new MutationObserver(draw);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    window.addEventListener("resize", draw);
    return () => {
      window.removeEventListener("resize", draw);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
    />
  );
};

// ─── Decorative corner marks (like engineering drawing borders) ──────────────
const CornerMark: FC<{ position: "tl" | "tr" | "bl" | "br" }> = ({ position }) => {
  const base = "absolute z-10 w-6 h-6 opacity-20";
  const classes = {
    tl: `${base} top-6 left-6 border-t border-l`,
    tr: `${base} top-6 right-6 border-t border-r`,
    bl: `${base} bottom-6 left-6 border-b border-l`,
    br: `${base} bottom-6 right-6 border-b border-r`,
  };
  return <div className={`${classes[position]} border-foreground`} />;
};

export const AboutMe = () => {
  return (
    <>
    {/* HUD grid */}
      <HudGrid />

      {/* Corner engineering marks */}
      <CornerMark position="tl" />
      <CornerMark position="tr" />
      <CornerMark position="bl" />
      <CornerMark position="br" />
      <div className="flex justify-center">
        <hr className="w-4/5 border-t border-black dark:border-white" />
      </div>
      <section className="main flex flex-col items-center md:flex-row md:gap-12">
        <div className="flex size-72 shrink-0 items-center justify-center md:h-full">
          <img
            src="/images/profile.webp"
            alt="Picture of Danh"
            className="h-full w-full rounded object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col justify-center p-8">
          <div className="grid gap-4 not-first:mb-4 not-first:text-justify not-first:text-base not-first:leading-relaxed">
            <h2 className="font-generalsans text-center text-2xl tracking-widest md:text-start">
              HELLO, I'M DANH!
            </h2>
            <div className="typography-about">
              <Markdown>{aboutMeText}</Markdown>
            </div>
            <div className="mt-2 mb-10 flex gap-6">
              <Link variant="icon" to="mailto:danhcorps@gmail.com" external>
                <MailIcon />
              </Link>
              <Link
                variant="icon"
                to="https://www.linkedin.com/in/danh-tran-9b657a362/"
              >
                <LinkedinIcon />
              </Link>
              <Link variant="icon" to="https://github.com/VeryFluffed">
                <SiGithub />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center">
        <hr className="w-4/5 border-t border-black dark:border-white mb-10" />
      </div>
    </>
  );
};
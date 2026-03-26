import { useEffect, useRef, type FC } from "react";
import { Canvas } from "@/components/Home/Hero/Canvas";

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

// ─── Hero Section ────────────────────────────────────────────────────────────
export const Hero: FC = () => {
  return (
    <section className="relative flex h-[100dvh] w-full overflow-hidden bg-background">
      {/* HUD grid */}
      <HudGrid />

      {/* Corner engineering marks */}
      <CornerMark position="tl" />
      <CornerMark position="tr" />
      <CornerMark position="bl" />
      <CornerMark position="br" />

      {/* ── Left panel: 3D canvas ── */}
      <div className="relative z-10 h-full w-full md:w-[62%]">
        <Canvas />

        {/* Fade gradient blending into right panel */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-20 w-32 hidden md:block"
          style={{
            background:
              "linear-gradient(to right, transparent, var(--background))",
          }}
        />
      </div>

      {/* ── Right panel: typography ── */}
      <div className="absolute inset-y-0 right-0 z-20 flex w-full flex-col items-center justify-center md:w-[42%] md:items-start md:pr-16 md:pl-8">
        {/* Overlay for mobile so text is readable over the 3D */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm md:hidden" />

        <div className="relative z-10 flex flex-col items-center gap-6 px-8 text-center md:items-start md:text-left">

          {/* Small label */}
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-foreground/30" />
            <span
              className="font-mono text-[10px] tracking-[0.35em] text-foreground/40 uppercase"
            >
              Portfolio {new Date().getFullYear()}
            </span>
          </div>

          {/* Name */}
          <div>
            <h1
              className="font-timesnewroman text-[clamp(2.2rem,5vw,4rem)] font-light leading-none tracking-[0.1em] text-foreground"
            >
              DANH
            </h1>
            <h1
              className="font-timesnewroman text-[clamp(2.2rem,5vw,4rem)] font-light leading-none tracking-[0.1em] text-foreground"
            >
              TRAN
            </h1>
          </div>

          {/* Thin divider */}
          <div className="h-px w-16 bg-foreground/20" />

          {/* Subtitle */}
          <p
            className="font-generalsans text-[clamp(0.55rem,1.1vw,0.75rem)] tracking-[0.3em] text-foreground/50 uppercase"
          >
            Mechatronics Engineer Portfolio
          </p>
        </div>
      </div>
    </section>
  );
};
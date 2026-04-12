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

      const gridColor = isDark
          ? "rgba(100, 116, 160, 0.07)"
          : "rgba(255, 255, 255, 0.5)";

      const cellSize = 48;
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 0.5;

      for (let x = 0; x <= canvas.width; x += cellSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y <= canvas.height; y += cellSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

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

// ─── Decorative corner marks ─────────────────────────────────────────────────
// Animate from opacity-0 to opacity-20 (matching your original opacity-20)
const CornerMark: FC<{ position: "tl" | "tr" | "bl" | "br"; delay: string }> = ({
                                                                                  position,
                                                                                  delay,
                                                                                }) => {
  const base = "absolute z-10 w-6 h-6 border-foreground";
  const classes = {
    tl: `${base} top-6 left-6 border-t border-l`,
    tr: `${base} top-6 right-6 border-t border-r`,
    bl: `${base} bottom-6 left-6 border-b border-l`,
    br: `${base} bottom-6 right-6 border-b border-r`,
  };
  return (
      <div
          className={classes[position]}
          style={{
            opacity: 0,
            animation: "hero-corner-in 0.6s ease forwards",
            animationDelay: delay,
          }}
      />
  );
};

// ─── Hero Section ────────────────────────────────────────────────────────────
export const Hero: FC = () => {
  return (
      <>
        <style>{`
        @keyframes hero-fade-up {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero-corner-in {
          from { opacity: 0; }
          to   { opacity: 0.2; }
        }
        @keyframes hero-canvas-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes hero-line-grow {
          from { width: 0; opacity: 0; }
          to   { width: 4rem; opacity: 1; }
        }
        @keyframes hero-divider-grow {
          from { width: 0; }
          to   { width: 2rem; }
        }
        @keyframes hero-label-in {
          from { opacity: 0; letter-spacing: 0.55em; }
          to   { opacity: 1; letter-spacing: 0.35em; }
        }
        @keyframes hero-subtitle-in {
          from { opacity: 0; letter-spacing: 0.45em; }
          to   { opacity: 1; letter-spacing: 0.3em; }
        }
        @keyframes hero-breathe {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.82; }
        }
      `}</style>

        <section className="relative flex h-[100dvh] w-full overflow-hidden bg-background">
          {/* HUD grid */}
          <HudGrid />

          {/* Corner marks — animate in last, land at opacity-20 */}
          <CornerMark position="tl" delay="1.6s" />
          <CornerMark position="tr" delay="1.7s" />
          <CornerMark position="bl" delay="1.8s" />
          <CornerMark position="br" delay="1.9s" />

          {/* ── Left panel: 3D canvas ── */}
          <div
              className="relative z-10 h-full w-full md:w-[62%]"
              style={{
                opacity: 0,
                animation: "hero-canvas-in 1.2s ease forwards",
                animationDelay: "0.2s",
              }}
          >
            <Canvas />

            {/* Fade gradient — unchanged */}
            <div
                className="pointer-events-none absolute inset-y-0 right-0 z-20 w-32 hidden md:block"
                style={{
                  background: "linear-gradient(to right, transparent, var(--background))",
                }}
            />
          </div>

          {/* ── Right panel: typography ── */}
          <div className="absolute inset-y-0 right-0 z-20 flex w-full flex-col items-center justify-center md:w-[42%] md:items-start md:pr-16 md:pl-8">
            {/* Mobile overlay — unchanged */}
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm md:hidden" />

            <div className="relative z-10 flex flex-col items-center gap-6 px-8 text-center md:items-start md:text-left">

              {/* 1 — Label row: fades up first */}
              <div
                  className="flex items-center gap-3"
                  style={{
                    opacity: 0,
                    animation: "hero-fade-up 0.7s ease forwards",
                    animationDelay: "0.3s",
                  }}
              >
                {/* Short divider draws itself */}
                <div
                    style={{
                      height: "1px",
                      width: 0,
                      backgroundColor: "var(--foreground)",
                      opacity: 0.3,
                      animation: "hero-divider-grow 0.6s ease forwards",
                      animationDelay: "0.5s",
                    }}
                />
                <span
                    className="font-mono text-[10px] uppercase text-foreground/40"
                    style={{
                      opacity: 0,
                      animation: "hero-label-in 0.8s ease forwards",
                      animationDelay: "0.7s",
                      letterSpacing: "0.35em",
                    }}
                >
                Portfolio {new Date().getFullYear()}
              </span>
              </div>

              {/* 2 — Name: staggered slide-up, then breathes forever */}
              <div>
                <h1
                    className="font-timesnewroman text-[clamp(2.2rem,5vw,4rem)] font-light leading-none tracking-[0.1em] text-foreground"
                    style={{
                      opacity: 0,
                      animation:
                          "hero-fade-up 0.8s ease forwards, hero-breathe 4s ease-in-out 1.8s infinite",
                      animationDelay: "0.8s, 1.8s",
                    }}
                >
                  DANH
                </h1>
                <h1
                    className="font-timesnewroman text-[clamp(2.2rem,5vw,4rem)] font-light leading-none tracking-[0.1em] text-foreground"
                    style={{
                      opacity: 0,
                      animation:
                          "hero-fade-up 0.8s ease forwards, hero-breathe 4s ease-in-out 2.1s infinite",
                      animationDelay: "1.0s, 2.1s",
                    }}
                >
                  TRAN
                </h1>
              </div>

              {/* 3 — Center divider draws itself left → right */}
              <div
                  style={{
                    height: "1px",
                    width: 0,
                    backgroundColor: "var(--foreground)",
                    opacity: 0.2,
                    animation: "hero-line-grow 0.8s cubic-bezier(0.4,0,0.2,1) forwards",
                    animationDelay: "1.3s",
                  }}
              />

              {/* 4 — Subtitle: letter-spacing collapses in */}
              <p
                  className="font-generalsans text-[clamp(0.55rem,1.1vw,0.75rem)] uppercase text-foreground/50"
                  style={{
                    opacity: 0,
                    animation: "hero-subtitle-in 0.9s ease forwards",
                    animationDelay: "1.5s",
                    letterSpacing: "0.3em",
                  }}
              >
                Mechatronics Engineer Portfolio
              </p>
            </div>
          </div>
        </section>
      </>
  );
};
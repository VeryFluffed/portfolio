import { useEffect, useRef, type FC } from "react";

interface HudGridProps {
  /** Grid/dot color in light mode */
  gridColorLight?: string;
  dotColorLight?: string;
  /** Grid/dot color in dark mode */
  gridColorDark?: string;
  dotColorDark?: string;
}

const HudGrid: FC<HudGridProps> = ({
  gridColorLight = "rgba(160, 160, 170, 0.09)",
  dotColorLight = "rgba(140, 140, 155, 0.13)",
  gridColorDark = "rgba(100, 116, 160, 0.07)",
  dotColorDark = "rgba(100, 116, 160, 0.12)",
}) => {
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

      const cellSize = 48;
      ctx.strokeStyle = isDark ? gridColorDark : gridColorLight;
      ctx.lineWidth = 0.5;

      // Batch all grid lines into a single path — one stroke() call instead of N
      ctx.beginPath();
      for (let x = 0; x <= canvas.width; x += cellSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
      }
      for (let y = 0; y <= canvas.height; y += cellSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }
      ctx.stroke();

      // Batch all dots into a single fill() call
      ctx.fillStyle = isDark ? dotColorDark : dotColorLight;
      ctx.beginPath();
      for (let x = 0; x <= canvas.width; x += cellSize * 4) {
        for (let y = 0; y <= canvas.height; y += cellSize * 4) {
          ctx.moveTo(x + 1.2, y);
          ctx.arc(x, y, 1.2, 0, Math.PI * 2);
        }
      }
      ctx.fill();
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
  }, [gridColorLight, gridColorDark, dotColorLight, dotColorDark]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
    />
  );
};

export default HudGrid;

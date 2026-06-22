import { Canvas as ThreeCanvas } from "@react-three/fiber";
import { Suspense, type ComponentProps, type FC } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import CanvasLoader from "@/components/Home/Hero/CanvasLoader";
import { cn } from "@/lib/utils";
import { CanvasItem } from "@/components/Home/Hero/CanvasItem";
import { Engine3D } from "@/components/Home/Hero/Engine3D";
import { Clock3D } from "@/components/Home/Hero/Clock3D";

// ── Scene variants — one is picked at random on each page load ─────
const VARIANTS = ["gokart", "engine", "clock"] as const;
type Variant = (typeof VARIANTS)[number];
const SELECTED: Variant = VARIANTS[Math.floor(Math.random() * VARIANTS.length)]!;

// Go-kart model config
const GOKART = {
  name: "go-kart2",
  position: [40, 100, 50] as [number, number, number],
  scale: 10,
  mesh: true,
  phaseOffset: 0,
  rockAmplitudeX: 0.07,
  rockAmplitudeY: 0.05,
  rockSpeedX: 0.35,
  rockSpeedY: 0.28,
};

export const Canvas: FC<ComponentProps<typeof ThreeCanvas>> = ({
  className,
  children,
  ...props
}) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Per-variant camera
  const camPos: [number, number, number] =
    SELECTED === "engine" ? [2, 2, 12]
    : SELECTED === "clock"  ? [0, 0, 10]
    : [0, 0, 30];
  const fov =
    SELECTED === "engine" ? 42
    : SELECTED === "clock"  ? 48
    : 50;

  return (
    <ThreeCanvas
      className={cn("relative flex h-full w-full flex-col", className)}
      gl={{ alpha: true }}
      {...props}
    >
      <Suspense fallback={<CanvasLoader />}>
        <PerspectiveCamera makeDefault position={camPos} fov={fov} />

        {SELECTED === "engine" ? (
          <Engine3D />
        ) : SELECTED === "clock" ? (
          <Clock3D />
        ) : (
          // Go-kart GLB — hide on mobile to save bandwidth
          !isMobile && (
            <CanvasItem
              itemPath={`/models/${GOKART.name}.glb`}
              position={GOKART.position}
              scale={GOKART.scale}
              mesh={GOKART.mesh}
              phaseOffset={GOKART.phaseOffset}
              rockAmplitudeX={GOKART.rockAmplitudeX}
              rockAmplitudeY={GOKART.rockAmplitudeY}
              rockSpeedX={GOKART.rockSpeedX}
              rockSpeedY={GOKART.rockSpeedY}
            />
          )
        )}

        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 10]} intensity={0.8} />
      </Suspense>
      {children}
    </ThreeCanvas>
  );
};

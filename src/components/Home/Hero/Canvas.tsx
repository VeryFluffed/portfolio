import { Canvas as ThreeCanvas } from "@react-three/fiber";
import { Suspense, type ComponentProps, type FC } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import CanvasLoader from "@/components/Home/Hero/CanvasLoader";
import { cn } from "@/lib/utils";
import { Engine3D } from "@/components/Home/Hero/Engine3D";
import { Clock3D } from "@/components/Home/Hero/Clock3D";
import { Penguin3D } from "@/components/Home/Hero/Penguin3D";
import { Planetary3D } from "@/components/Home/Hero/Planetary3D";

// ── Scene variants — one is picked at random on each page load ─────
const VARIANTS = ["penguin", "engine", "clock", "planetary"] as const;
type Variant = (typeof VARIANTS)[number];
const SELECTED: Variant = VARIANTS[Math.floor(Math.random() * VARIANTS.length)]!;

// Per-variant camera
const CAMERA: Record<Variant, { position: [number, number, number]; fov: number }> = {
  penguin:   { position: [0, 0, 10], fov: 48 },
  engine:    { position: [2, 2, 12], fov: 42 },
  clock:     { position: [0, 0, 10], fov: 48 },
  planetary: { position: [0, 0, 10], fov: 46 },
};

const SCENES: Record<Variant, FC> = {
  penguin: Penguin3D,
  engine: Engine3D,
  clock: Clock3D,
  planetary: Planetary3D,
};

export const Canvas: FC<ComponentProps<typeof ThreeCanvas>> = ({
  className,
  children,
  ...props
}) => {
  const { position, fov } = CAMERA[SELECTED];
  const Scene = SCENES[SELECTED];

  return (
    <ThreeCanvas
      className={cn("relative flex h-full w-full flex-col", className)}
      gl={{ alpha: true }}
      {...props}
    >
      <Suspense fallback={<CanvasLoader />}>
        <PerspectiveCamera makeDefault position={position} fov={fov} />
        <Scene />
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 10]} intensity={0.8} />
      </Suspense>
      {children}
    </ThreeCanvas>
  );
};

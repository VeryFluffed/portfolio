import { Canvas as ThreeCanvas } from "@react-three/fiber";
import { Suspense, type ComponentProps, type FC } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import CanvasLoader from "@/components/Home/Hero/CanvasLoader";
import { cn } from "@/lib/utils";
import { CanvasItem } from "@/components/Home/Hero/CanvasItem";

// Models scattered across the left ~65% of the scene
// Positions tuned to feel like scattered engineering drawings
const MODELS = [
  {
    name: "JukeboxCase",
    position: [-8, 3, 0] as [number, number, number],
    scale: 45,
    mesh: true,
    phaseOffset: 0,
    rockAmplitudeX: 0.07,
    rockAmplitudeY: 0.05,
    rockSpeedX: 0.35,
    rockSpeedY: 0.28,
  },
  {
    name: "JukeboxDisc",
    position: [-3, -4, -2] as [number, number, number],
    scale: 45,
    mesh: true,
    phaseOffset: 1.2,
    rockAmplitudeX: 0.09,
    rockAmplitudeY: 0.07,
    rockSpeedX: 0.42,
    rockSpeedY: 0.33,
  },
  {
    name: "PPcase",
    position: [4, 5, -1] as [number, number, number],
    scale: 45,
    mesh: true,
    phaseOffset: 2.1,
    rockAmplitudeX: 0.06,
    rockAmplitudeY: 0.08,
    rockSpeedX: 0.38,
    rockSpeedY: 0.29,
  },
  {
    name: "PPslide",
    position: [-12, -2, -3] as [number, number, number],
    scale: 20,
    mesh: true,
    phaseOffset: 0.7,
    rockAmplitudeX: 0.05,
    rockAmplitudeY: 0.06,
    rockSpeedX: 0.31,
    rockSpeedY: 0.25,
  },
  {
    name: "penguin",
    position: [8, -3, -2] as [number, number, number],
    scale: 45,
    mesh: true,
    phaseOffset: 3.0,
    rockAmplitudeX: 0.10,
    rockAmplitudeY: 0.07,
    rockSpeedX: 0.45,
    rockSpeedY: 0.36,
  },
  {
    name: "plane",
    position: [1, 1, 1] as [number, number, number],
    scale: 0.4,
    mesh: false,
    phaseOffset: 1.8,
    rockAmplitudeX: 0.06,
    rockAmplitudeY: 0.05,
    rockSpeedX: 0.33,
    rockSpeedY: 0.27,
  },
];

export const Canvas: FC<ComponentProps<typeof ThreeCanvas>> = ({
  className,
  children,
  ...props
}) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // On mobile, show fewer/smaller models
  const visibleModels = isMobile ? MODELS.slice(0, 3) : MODELS;

  return (
    <ThreeCanvas
      className={cn("relative flex h-full w-full flex-col", className)}
      gl={{ alpha: true }}
      {...props}
    >
      <Suspense fallback={<CanvasLoader />}>
        <PerspectiveCamera makeDefault position={[0, 0, 30]} fov={50} />
        {visibleModels.map(({ name, ...modelProps }, index) => (
          <CanvasItem
            key={index}
            itemPath={`/models/${name}.glb`}
            {...modelProps}
          />
        ))}
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 10]} intensity={0.8} />
      </Suspense>
      {children}
    </ThreeCanvas>
  );
};
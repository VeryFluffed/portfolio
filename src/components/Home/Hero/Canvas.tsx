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
    name: "go-kart2",
    position: [40, 100, 50] as [number, number, number],
    scale: 10,
    mesh: true,
    phaseOffset: 0,
    rockAmplitudeX: 0.07,
    rockAmplitudeY: 0.05,
    rockSpeedX: 0.35,
    rockSpeedY: 0.28,
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
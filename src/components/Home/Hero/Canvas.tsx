import { Canvas as ThreeCanvas } from "@react-three/fiber";
import { Suspense, type ComponentProps, type FC } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { calculateSizes } from "@/components/Home/Hero/sizes";
import { useMediaQuery } from "react-responsive";
import CanvasLoader from "@/components/Home/Hero/CanvasLoader";
import { cn } from "@/lib/utils";
import { CanvasItem } from "@/components/Home/Hero/CanvasItem";

const DEFAULT_CONFIG = {
  radius: 25,
  speed: 0.4,
  rotationSpeed: 0.02,
};

const MODELS = [
  { name: "penguin", angle: 0, scaleKey: "planeScale", mesh: true },
  { name: "plane", angle: 60, scaleKey: "planeScale", mesh: false },
  {
    name: "JukeboxCase",
    angle: 120,
    scaleKey: "jukeboxScale",
    mesh: true,
  },
  {
    name: "JukeboxDisc",
    angle: 180,
    scaleKey: "jukeboxScale",
    mesh: true,
  },
  { name: "PPcase", angle: 240, scaleKey: "jukeboxScale", mesh: true },
  {
    name: "PPslide",
    angle: 300,
    scaleKey: "jukeboxScale",
    radius: 20,
    mesh: true,
  },
];

export const Canvas: FC<ComponentProps<typeof ThreeCanvas>> = ({
  className,
  children,
  ...props
}) => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <ThreeCanvas
      className={cn("relative flex h-full w-full flex-col", className)}
      {...props}
    >
      <Suspense fallback={<CanvasLoader />}>
        <PerspectiveCamera makeDefault position={[-10, -5, 25]} />
        {MODELS.map(({ name, angle, scaleKey, ...props }, index) => (
          <CanvasItem
            key={index}
            itemPath={`/models/${name}.glb`}
            scale={sizes[scaleKey as keyof typeof sizes] as number}
            {...DEFAULT_CONFIG}
            {...props}
            initialAngle={angle}
          />
        ))}
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={0.5} />
      </Suspense>
      {children}
    </ThreeCanvas>
  );
};

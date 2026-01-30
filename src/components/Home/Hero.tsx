import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import Plane from "../components/Plane.jsx";
import Penguin from "../components/Penguin.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import JukeboxCase from "../components/JukeboxCase";
import JukeboxDisc from "../components/JukeboxDisc";
import PPcase from "../components/PPcase";
import PPslide from "../components/PPslide";

const Hero = () => {
  const isSmall = useMediaQuery({ query: "(max-width: 440px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1024px)",
  });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="relative flex min-h-screen w-full flex-col bg-white">
      <div
        className={`absolute flex h-screen items-center justify-center ${isMobile ? "left-0 w-full" : "right-0 w-1/2"} `}
      >
        <div className="flex flex-col items-center justify-center gap-2 px-4">
          <p className="hero_tag text-center text-6xl font-light text-black">
            DANH CHI TRAN
          </p>
          <p className="hero_tag text-center text-2xl font-thin text-black">
            MECHATRONICS ENGINEER PORTFOLIO
          </p>
        </div>
      </div>
      <div className="absolute inset-0 h-full w-full">
        <Canvas className="relative flex h-full w-full flex-col">
          <Suspense fallback={<CanvasLoader />}>
            isSmall ?
            <PerspectiveCamera makeDefault position={[-10, -5, 25]} />
            <Penguin
              scale={sizes.planeScale}
              radius={25}
              speed={0.4}
              rotationSpeed={0.02}
              initialAngle={0}
            />
            <Plane
              scale={sizes.planeScale}
              radius={25}
              speed={0.4}
              rotationSpeed={0.02}
              initialAngle={60}
            />
            <JukeboxCase
              scale={sizes.jukeboxScale}
              radius={25}
              speed={0.4}
              rotationSpeed={0.02}
              initialAngle={120}
            />
            <JukeboxDisc
              scale={sizes.jukeboxScale}
              radius={25}
              speed={0.4}
              rotationSpeed={0.02}
              initialAngle={180}
            />
            <PPcase
              scale={sizes.jukeboxScale}
              radius={25}
              speed={0.4}
              rotationSpeed={0.02}
              initialAngle={240}
            />
            <PPslide
              scale={sizes.jukeboxScale}
              radius={20}
              speed={0.4}
              rotationSpeed={0.02}
              initialAngle={300}
            />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};
export default Hero;

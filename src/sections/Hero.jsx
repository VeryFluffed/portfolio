import React from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import Plane from '../components/Plane.jsx';
import Penguin from '../components/Penguin.jsx';
import CanvasLoader from '../components/CanvasLoader.jsx';
import { Suspense } from 'react';
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import JukeboxCase from "../components/JukeboxCase.jsx";
import JukeboxDisc from "../components/JukeboxDisc.jsx";
import PPcase from "../components/PPcase.jsx";
import PPslide from "../components/PPslide.jsx";

const Hero = () => {

    const isSmall = useMediaQuery({ query: '(max-width: 440px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1024px)' });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="min-h-screen w-full flex flex-col relative bg-white">
            <div
                className={`
    h-screen flex items-center justify-center absolute
    ${isMobile ? "w-full left-0" : "w-1/2 right-0"}
  `}
            >
                <div className="flex flex-col items-center justify-center gap-2 px-4">
                    <p className="hero_tag text-black text-6xl font-light text-center">
                        DANH CHI TRAN
                    </p>
                    <p className="hero_tag text-black text-2xl font-thin text-center">
                        MECHATRONICS ENGINEER PORTFOLIO
                    </p>
                </div>
            </div>
            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full flex flex-col relative">
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[-10, -5, 25]} />
                        <Penguin
                            scale={sizes.planeScale}
                            radius={25} speed={2} rotationSpeed={0.5} initialAngle={0}
                        />
                        <Plane
                            scale={sizes.planeScale}
                            radius={25} speed={0.4} rotationSpeed={0.02} initialAngle={0}
                        />
                        <JukeboxCase
                            scale={sizes.jukeboxScale}
                            radius={25} speed={0.5} rotationSpeed={0.02} initialAngle={0}
                        />
                        <JukeboxDisc
                            scale={sizes.jukeboxScale}
                            radius={25} speed={0.8} rotationSpeed={0.02} initialAngle={0}
                        />
                        <PPcase
                            scale={sizes.jukeboxScale}
                            radius={25} speed={0.3} rotationSpeed={0.02} initialAngle={0}
                        />
                        <PPslide
                            scale={sizes.jukeboxScale}
                            radius={20} speed={0.4} rotationSpeed={0.02} initialAngle={0}
                        />
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}
export default Hero

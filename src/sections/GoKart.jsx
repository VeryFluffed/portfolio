import React from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import SpinningGoKart from '../components/SpinningGoKart.jsx';
import CanvasLoader from '../components/CanvasLoader.jsx';
import { Suspense } from 'react';
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";

const GoKart = () => {

    const isSmall = useMediaQuery({ query: '(max-width: 440px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1024px)' });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="min-h-screen border-2 border-gray-300 w-full flex flex-col relative bg-black-200">
            <div className="w-1/2 h-screen flex items-center justify-center absolute right-0">
                <div className="flex flex-col items-center justify-center gap-2">
                    <p className="hero_tag text-black text-6xl font-light text-center">DANH CHI TRAN</p>
                    <p className="hero_tag text-black text-2xl font-thin text-center">MECHATRONICS ENGINEER PORTFOLIO</p>
                </div>
            </div>
            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full flex flex-col relative">
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                        <SpinningGoKart
                            position={sizes.planePosition}
                            rotation={[0.6, 0, 0]}
                            scale={sizes.planeScale}
                        />
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}
export default GoKart
// src/components/Penguin.jsx
import React from 'react'
import { useGLTF } from '@react-three/drei'
import SpinOrbit from '../wrappers/SpinOrbit.jsx'

export default function Penguin({
                                    center = [2, -7, 0],
                                    radius = 25,
                                    speed = 2,
                                    rotationSpeed = 0.5,
                                    initialAngle = 0,
                                    scale = 1,
                                }) {
    const { scene } = useGLTF('/models/penguin.glb') // adjust path if needed

    // Render the raw GLTF scene as a child of SpinOrbit.
    // Do NOT give the primitive a position — SpinOrbit controls position.
    return (
        <SpinOrbit
            center={center}
            radius={radius}
            speed={speed}
            rotationSpeed={rotationSpeed}
            initialAngle={initialAngle}
        >
            <primitive object={scene} scale={Array.isArray(scale) ? scale : [scale, scale, scale]} />
        </SpinOrbit>
    )
}

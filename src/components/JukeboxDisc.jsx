import React, { useMemo } from 'react'
import { useGLTF, Edges } from '@react-three/drei'
import SpinOrbit from '../wrappers/SpinOrbit.jsx'
import * as THREE from 'three'

export default function JukeboxDisc({
                                        center = [2, -7, 0],
                                        radius = 25,
                                        speed = 2,
                                        rotationSpeed = 0.5,
                                        initialAngle = 0,
                                        scale = 1,
                                    }) {
    const { nodes } = useGLTF('/models/JukeboxDisc.glb')

    // Create a shared transparent material
    const transparentMat = useMemo(() => (
        new THREE.MeshStandardMaterial({
            color: 'white',
            transparent: true,
            opacity: 0.1,    // adjust transparency
        })
    ), [])

    return (
        <SpinOrbit
            center={center}
            radius={radius}
            speed={speed}
            rotationSpeed={rotationSpeed}
            initialAngle={initialAngle}
        >
            <group scale={Array.isArray(scale) ? scale : [scale, scale, scale]}>
                {Object.values(nodes).map((node, i) =>
                    node.geometry ? (
                        <mesh key={i} geometry={node.geometry} material={transparentMat}>
                            {/* Edge overlay for CAD-like outlines */}
                            <Edges
                                scale={1}
                                threshold={15}
                                color="black"
                            />
                        </mesh>
                    ) : null
                )}
            </group>
        </SpinOrbit>
    )
}

useGLTF.preload('/models/JukeboxDisc.glb')

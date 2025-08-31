import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, useScroll } from '@react-three/drei'

const Penguin = () => {
    const modelRef = useRef()
    const scroll = useScroll()
    const { nodes, materials } = useGLTF('/models/penguin.glb')

    useFrame(() => {
        const r = scroll.offset * 2 * Math.PI
        if (modelRef.current) {
            modelRef.current.rotation.y = r
            modelRef.current.rotation.x = r / 2
        }
    })

    return (
        <group ref={modelRef} scale={1.5} position={[0, -1.5, 0]}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Penguin_0.geometry}
                material={materials.Penguin}
            />
        </group>
    )
}

useGLTF.preload('/models/penguin.glb')

export default Penguin

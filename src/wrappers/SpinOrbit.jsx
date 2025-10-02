// src/wrappers/SpinOrbit.jsx
import React, { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

/*
 Props:
  - center: [x,y,z] world coordinate center of the orbit
  - radius: distance from center (in world units)
  - speed: how fast the object orbits (radians / second)
  - rotationSpeed: how fast the object spins in place (radians / frame)
  - initialAngle: starting angle in radians
*/
const SpinOrbit = ({
                       children,
                       center = [0, 0, 0],
                       radius = 5,
                       speed = 1,
                       rotationSpeed = 0.02,
                       initialAngle = 0,
                   }) => {
    const ref = useRef()
    const angleRef = useRef(initialAngle)
    const { camera } = useThree()
    const u = useRef(new THREE.Vector3()) // basis vector 1 (screen right)
    const v = useRef(new THREE.Vector3()) // basis vector 2 (screen up)

    // compute the camera-plane basis once (recompute if camera changes)
    useEffect(() => {
        const dir = new THREE.Vector3()
        camera.getWorldDirection(dir) // direction camera looks (points forward)
        // choose an up vector (world up), but if camera is nearly aligned with world up adjust it
        let worldUp = new THREE.Vector3(0, 1, 0)
        if (Math.abs(dir.dot(worldUp)) > 0.999) {
            worldUp = new THREE.Vector3(1, 0, 0) // fallback
        }
        // u = right vector in camera plane
        u.current.copy(new THREE.Vector3().crossVectors(worldUp, dir).normalize())
        // v = up in camera plane
        v.current.copy(new THREE.Vector3().crossVectors(dir, u.current).normalize())

        // keep these normalized
    }, [camera])

    useFrame((state, delta) => {
        // update orbit angle
        angleRef.current += speed * delta

        // compute orbit position: center + (u * cos(angle) + v * sin(angle)) * radius
        const a = angleRef.current
        const pos = new THREE.Vector3()
        pos.copy(u.current).multiplyScalar(Math.cos(a) * radius)
        pos.addScaledVector(v.current, Math.sin(a) * radius)
        pos.add(new THREE.Vector3(center[0], center[1], center[2]))

        if (ref.current) {
            ref.current.position.copy(pos)

            // in-place rotation of the object (local rotation)
            // adjust axis if you want roll/pitch instead of yaw
            ref.current.rotation.y += rotationSpeed
        }
    })

    return <group ref={ref}>{children}</group>
}

export default SpinOrbit

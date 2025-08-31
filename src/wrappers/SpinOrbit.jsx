import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

const SpinOrbit = ({ children, center = [0, 0, 0], radius = 2.5, speed = 1, rotateSpeed = [0.005, 0.01, 0] }) => {
    const groupRef = useRef();
    const [angle, setAngle] = useState(0);

    useFrame((_, delta) => {
        console.log('SpinOrbit useFrame running');

        const newAngle = angle + speed * delta;
        setAngle(newAngle);

        const x = center[0] + radius * Math.cos(newAngle);
        const z = center[2] + radius * Math.sin(newAngle);
        const y = center[1];

        console.log('Spinning to', x, y, z);

        if (groupRef.current) {
            groupRef.current.position.set(x, y, z);
            groupRef.current.rotation.x += rotateSpeed[0];
            groupRef.current.rotation.y += rotateSpeed[1];
            groupRef.current.rotation.z += rotateSpeed[2];
        }
    });

    return <group ref={groupRef}>{children}</group>;
};

export default SpinOrbit;

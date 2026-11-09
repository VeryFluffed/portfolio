import { useEffect, useMemo, useRef, type FC } from "react";
import { useFrame } from "@react-three/fiber";
import { Edges, useGLTF } from "@react-three/drei";
import { Mesh, MeshStandardMaterial, type Group } from "three";

const MODEL_PATH = "/models/penguin.glb";

// Raw mesh bounds: x ≈ -4.57..3.94, y ≈ -0.16..13.03 (Y-up). Recentre it so it
// spins about its own vertical axis instead of orbiting an off-centre pivot.
const CENTER_OFFSET: [number, number, number] = [0.31, -6.43, 0];
const SCALE = 0.4;
const SPIN_SPEED = 0.6; // rad/s
const BOB_AMPLITUDE = 0.15;
const BOB_SPEED = 1.2;

export const Penguin3D: FC = () => {
  const { nodes } = useGLTF(MODEL_PATH);
  const spinRef = useRef<Group>(null);

  const transparentMat = useMemo(
    () => new MeshStandardMaterial({ color: "white", transparent: true, opacity: 0 }),
    [],
  );
  useEffect(() => () => transparentMat.dispose(), [transparentMat]);

  useFrame(({ clock }, delta) => {
    if (!spinRef.current) return;
    spinRef.current.rotation.y += SPIN_SPEED * delta;
    spinRef.current.position.y = Math.sin(clock.elapsedTime * BOB_SPEED) * BOB_AMPLITUDE;
  });

  return (
    <group rotation={[0.15, 0, 0]}>
      <group ref={spinRef}>
        <group scale={SCALE}>
          {Object.values(nodes).map((node) =>
            node instanceof Mesh && node.geometry ? (
              <mesh
                key={node.uuid}
                geometry={node.geometry}
                material={transparentMat}
                position={CENTER_OFFSET}
              >
                <Edges threshold={12} color="currentColor" transparent opacity={0.75} />
              </mesh>
            ) : null,
          )}
        </group>
      </group>
    </group>
  );
};

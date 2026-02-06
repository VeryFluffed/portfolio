import SpinOrbit from "@/components/Home/Hero/SpinOrbit";
import { Edges, useGLTF } from "@react-three/drei";
import { type FC } from "react";
import { Mesh, MeshStandardMaterial } from "three";

interface CanvasItemProps {
  center?: [number, number, number];
  radius?: number;
  speed?: number;
  rotationSpeed?: number;
  initialAngle?: number;
  mesh?: boolean;
  scale?: number | [number, number, number];
  itemPath: string;
}

export const CanvasItem: FC<CanvasItemProps> = ({
  itemPath,
  scale = 1,
  mesh,
  ...props
}) => {
  const { scene, nodes } = useGLTF(itemPath);

  const transparentMat = new MeshStandardMaterial({
    color: "white",
    transparent: true,
    opacity: 0.1,
  });

  const scaleArray: [number, number, number] = Array.isArray(scale)
    ? scale
    : [scale, scale, scale];

  return (
    <SpinOrbit {...props}>
      {mesh ? (
        <group scale={scaleArray}>
          {Object.values(nodes).map((node, index) => {
            if (node instanceof Mesh && node.geometry) {
              return (
                <mesh
                  key={index}
                  geometry={node.geometry}
                  material={transparentMat}
                >
                  <Edges scale={1} threshold={15} color="black" />
                </mesh>
              );
            }

            return null;
          })}
        </group>
      ) : (
        <primitive
          object={scene}
          scale={Array.isArray(scale) ? scale : [scale, scale, scale]}
        />
      )}
    </SpinOrbit>
  );
};

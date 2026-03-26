import Rock from "@/components/Home/Hero/Rock";
import { Edges, useGLTF } from "@react-three/drei";
import { type FC } from "react";
import { Mesh, MeshStandardMaterial } from "three";

interface CanvasItemProps {
  position?: [number, number, number];
  rockAmplitudeX?: number;
  rockAmplitudeY?: number;
  rockSpeedX?: number;
  rockSpeedY?: number;
  phaseOffset?: number;
  mesh?: boolean;
  scale?: number | [number, number, number];
  itemPath: string;
  edgeColor?: string;
  edgeOpacity?: number;
}

export const CanvasItem: FC<CanvasItemProps> = ({
  itemPath,
  scale = 1,
  mesh,
  edgeColor = "currentColor",
  edgeOpacity = 0.75,
  ...props
}) => {
  const { scene, nodes } = useGLTF(itemPath);

  const transparentMat = new MeshStandardMaterial({
    color: "white",
    transparent: true,
    opacity: 0,
  });

  const scaleArray: [number, number, number] = Array.isArray(scale)
    ? scale
    : [scale, scale, scale];

  return (
    <Rock {...props}>
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
                  <Edges
                    scale={1}
                    threshold={12}
                    color={edgeColor}
                    transparent
                    opacity={edgeOpacity}
                  />
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
    </Rock>
  );
};
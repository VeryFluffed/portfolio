import { useRef, type ComponentProps, type FC } from "react";
import { useFrame } from "@react-three/fiber";
import { type Group } from "three";

interface RockProps extends ComponentProps<"group"> {
  position?: [number, number, number];
  rockAmplitudeX?: number;
  rockAmplitudeY?: number;
  rockSpeedX?: number;
  rockSpeedY?: number;
  phaseOffset?: number;
}

const Rock: FC<RockProps> = ({
  position = [0, 0, 0],
  rockAmplitudeX = 0.08,
  rockAmplitudeY = 0.06,
  rockSpeedX = 0.4,
  rockSpeedY = 0.31,
  phaseOffset = 0,
  children,
  ...props
}) => {
  const ref = useRef<Group | null>(null);
  const timeRef = useRef(phaseOffset);

  useFrame((_state, delta) => {
    timeRef.current += delta;
    const t = timeRef.current;

    if (ref.current) {
      // Gentle dual-axis rocking — different frequencies so it never exactly repeats
      ref.current.rotation.x = Math.sin(t * rockSpeedX) * rockAmplitudeX;
      ref.current.rotation.y = Math.sin(t * rockSpeedY + 0.7) * rockAmplitudeY;
      // Slight Z wobble for organic feel
      ref.current.rotation.z = Math.sin(t * rockSpeedX * 0.6 + 1.2) * (rockAmplitudeX * 0.3);
    }
  });

  return (
    <group ref={ref} position={position} {...props}>
      {children}
    </group>
  );
};

export default Rock;
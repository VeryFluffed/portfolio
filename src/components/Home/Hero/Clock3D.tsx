import { useEffect, useRef, useState, type FC } from "react";
import { useFrame } from "@react-three/fiber";
import { Edges, Text } from "@react-three/drei";
import { type Group } from "three";

// ── Clock geometry constants ───────────────────────────────────────
const R      = 2.5;   // clock face radius
const RIM    = 0.22;  // rim thickness
const FACE_T = 0.15;  // face disc thickness
const FZ     = FACE_T / 2; // front face Z offset

// Gear constants
const BG_R  = 3.0;   // background escapement wheel
const GA_R  = 1.05;  // side gear A
const GB_R  = 0.70;  // side gear B
const GC_R  = 0.50;  // small corner gear

const C   = "currentColor";
const OP  = 0.78;
const THR = 12;

// ── Helpers ────────────────────────────────────────────────────────
const RX90: [number, number, number] = [Math.PI / 2, 0, 0];

function GearDisc({
  radius, teeth, depth = 0.28, opacity = OP, spokes = 4,
}: {
  radius: number; teeth: number; depth?: number; opacity?: number; spokes?: number;
}) {
  return (
    <>
      {/* Outer rim */}
      <mesh rotation={RX90}>
        <cylinderGeometry args={[radius, radius, depth, teeth * 2]} />
        <meshStandardMaterial transparent opacity={0} />
        <Edges color={C} opacity={opacity} transparent threshold={8} />
      </mesh>
      {/* Inner ring */}
      <mesh rotation={RX90}>
        <cylinderGeometry args={[radius * 0.88, radius * 0.88, depth + 0.02, teeth * 2]} />
        <meshStandardMaterial transparent opacity={0} />
        <Edges color={C} opacity={opacity * 0.45} transparent threshold={8} />
      </mesh>
      {/* Hub */}
      <mesh rotation={RX90}>
        <cylinderGeometry args={[radius * 0.18, radius * 0.18, depth + 0.04, 12]} />
        <meshStandardMaterial transparent opacity={0} />
        <Edges color={C} opacity={opacity * 0.6} transparent threshold={THR} />
      </mesh>
      {/* Spokes */}
      {Array.from({ length: spokes }, (_, i) => {
        const a = (i / spokes) * Math.PI * 2;
        return (
          <mesh key={i} position={[radius * 0.53 * Math.cos(a), radius * 0.53 * Math.sin(a), 0]}
                rotation={[0, 0, a]}>
            <boxGeometry args={[radius * 1.0, 0.11, 0.11]} />
            <meshStandardMaterial transparent opacity={0} />
            <Edges color={C} opacity={opacity * 0.55} transparent threshold={THR} />
          </mesh>
        );
      })}
    </>
  );
}

// ── Clock hand helper ──────────────────────────────────────────────
function Hand({
  length, width, counterLen, thick, zOffset,
}: {
  length: number; width: number; counterLen: number; thick: number; zOffset: number;
}) {
  return (
    <>
      {/* Main hand body */}
      <mesh position={[0, length / 2, zOffset]}>
        <boxGeometry args={[width, length, thick]} />
        <meshStandardMaterial transparent opacity={0} />
        <Edges color={C} opacity={0.9} transparent threshold={THR} />
      </mesh>
      {/* Counterweight */}
      <mesh position={[0, -counterLen / 2, zOffset]}>
        <boxGeometry args={[width * 1.5, counterLen, thick]} />
        <meshStandardMaterial transparent opacity={0} />
        <Edges color={C} opacity={0.9} transparent threshold={THR} />
      </mesh>
    </>
  );
}

// ── Main Clock component ───────────────────────────────────────────
export const Clock3D: FC = () => {
  const hourRef   = useRef<Group>(null);
  const minuteRef = useRef<Group>(null);
  const secondRef = useRef<Group>(null);
  const bgRef     = useRef<Group>(null);
  const gARef     = useRef<Group>(null);
  const gBRef     = useRef<Group>(null);
  const gCRef     = useRef<Group>(null);

  // Detect dark mode for Text color (Three.js can't read currentColor)
  const [textColor, setTextColor] = useState(() =>
    document.documentElement.classList.contains("dark") ? "#cccccc" : "#1a1a1a"
  );
  useEffect(() => {
    const obs = new MutationObserver(() =>
      setTextColor(document.documentElement.classList.contains("dark") ? "#cccccc" : "#1a1a1a")
    );
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  useFrame(() => {
    const now  = new Date();
    const h    = now.getHours() % 12;
    const m    = now.getMinutes();
    const s    = now.getSeconds();
    const ms   = now.getMilliseconds();

    // Smooth sub-second interpolation
    const ss = s + ms / 1000;
    const sm = m + ss / 60;
    const sh = h + sm / 60;

    // Clockwise = negative Z rotation in right-hand system
    if (secondRef.current) secondRef.current.rotation.z = -(ss / 60) * Math.PI * 2;
    if (minuteRef.current) minuteRef.current.rotation.z = -(sm / 60) * Math.PI * 2;
    if (hourRef.current)   hourRef.current.rotation.z   = -(sh / 12) * Math.PI * 2;

    // Gears: bg gear tied to seconds, others chain off it
    const bgAngle = (ss / 60) * Math.PI * 2 * 3;
    if (bgRef.current) bgRef.current.rotation.z =  bgAngle;
    if (gARef.current) gARef.current.rotation.z = -bgAngle * (BG_R / GA_R);
    if (gBRef.current) gBRef.current.rotation.z =  bgAngle * (BG_R / GA_R) * (GA_R / GB_R);
    if (gCRef.current) gCRef.current.rotation.z = -bgAngle * (BG_R / GA_R) * (GA_R / GB_R) * (GB_R / GC_R);
  });

  // Hour numbers (1–12)
  const numbers = Array.from({ length: 12 }, (_, i) => {
    const n = i + 1;
    // 12 at top (π/2), going clockwise (negative angle increment)
    const a = -(n / 12) * Math.PI * 2 + Math.PI / 2;
    return { n, x: R * 0.76 * Math.cos(a), y: R * 0.76 * Math.sin(a) };
  });

  // Tick marks (60 total)
  const ticks = Array.from({ length: 60 }, (_, i) => {
    const a     = -(i / 60) * Math.PI * 2 + Math.PI / 2;
    const major = i % 5 === 0;
    const r1    = R * (major ? 0.84 : 0.89);
    const r2    = R * 0.94;
    const mx    = ((r1 + r2) / 2) * Math.cos(a);
    const my    = ((r1 + r2) / 2) * Math.sin(a);
    return { a, mx, my, r1, r2, major };
  });

  return (
    <group position={[0, 0, 0]}>

      {/* ── Background gears (z < 0, visible through wireframe face) ── */}

      {/* Main escapement wheel — centered behind clock */}
      <group ref={bgRef} position={[0, 0, -0.45]}>
        <GearDisc radius={BG_R} teeth={32} opacity={0.32} spokes={6} />
      </group>

      {/* Gear A — lower left */}
      <group ref={gARef} position={[-3.0, -2.8, -0.55]}>
        <GearDisc radius={GA_R} teeth={18} opacity={0.52} spokes={4} />
      </group>

      {/* Gear B — lower right */}
      <group ref={gBRef} position={[2.6, -3.0, -0.5]}>
        <GearDisc radius={GB_R} teeth={12} opacity={0.52} spokes={3} />
      </group>

      {/* Gear C — upper right */}
      <group ref={gCRef} position={[3.2, 1.8, -0.45]}>
        <GearDisc radius={GC_R} teeth={8} opacity={0.52} spokes={3} depth={0.22} />
      </group>

      {/* ── Clock face disc ──────────────────────────────────────── */}
      {/* Outer rim */}
      <mesh rotation={RX90}>
        <cylinderGeometry args={[R + RIM, R + RIM, RIM * 2.8, 72]} />
        <meshStandardMaterial transparent opacity={0} />
        <Edges color={C} opacity={0.80} transparent threshold={4} />
      </mesh>
      {/* Inner rim bead */}
      <mesh rotation={RX90}>
        <cylinderGeometry args={[R + 0.04, R + 0.04, FACE_T + 0.02, 72]} />
        <meshStandardMaterial transparent opacity={0} />
        <Edges color={C} opacity={0.28} transparent threshold={4} />
      </mesh>
      {/* Face disc */}
      <mesh rotation={RX90}>
        <cylinderGeometry args={[R, R, FACE_T, 72]} />
        <meshStandardMaterial transparent opacity={0} />
        <Edges color={C} opacity={0.40} transparent threshold={4} />
      </mesh>

      {/* ── Tick marks (on front face) ──────────────────────────── */}
      {ticks.map(({ a, mx, my, r1, r2, major }, i) => (
        <mesh key={i} position={[mx, my, FZ + 0.02]} rotation={[0, 0, a - Math.PI / 2]}>
          <boxGeometry args={[major ? 0.055 : 0.028, r2 - r1, 0.04]} />
          <meshStandardMaterial transparent opacity={0} />
          <Edges color={C} opacity={major ? 0.72 : 0.38} transparent threshold={THR} />
        </mesh>
      ))}

      {/* ── Hour numbers ────────────────────────────────────────── */}
      {numbers.map(({ n, x, y }) => (
        <Text
          key={n}
          position={[x, y, FZ + 0.07]}
          fontSize={R * 0.145}
          color={textColor}
          anchorX="center"
          anchorY="middle"
          font={undefined}
        >
          {String(n)}
        </Text>
      ))}

      {/* ── Center boss (shaft bearing) ─────────────────────────── */}
      <mesh rotation={RX90} position={[0, 0, 0]}>
        <cylinderGeometry args={[0.13, 0.13, 0.55, 14]} />
        <meshStandardMaterial transparent opacity={0} />
        <Edges color={C} opacity={0.75} transparent threshold={THR} />
      </mesh>

      {/* ── Hour hand ────────────────────────────────────────────── */}
      <group ref={hourRef} position={[0, 0, FZ + 0.14]}>
        <Hand length={R * 0.50} width={0.19} counterLen={R * 0.17} thick={0.10} zOffset={0} />
      </group>

      {/* ── Minute hand ──────────────────────────────────────────── */}
      <group ref={minuteRef} position={[0, 0, FZ + 0.24]}>
        <Hand length={R * 0.68} width={0.11} counterLen={R * 0.13} thick={0.08} zOffset={0} />
      </group>

      {/* ── Second hand ──────────────────────────────────────────── */}
      <group ref={secondRef} position={[0, 0, FZ + 0.33]}>
        {/* Main long arm */}
        <mesh position={[0, R * 0.37, 0]}>
          <boxGeometry args={[0.042, R * 0.75, 0.06]} />
          <meshStandardMaterial transparent opacity={0} />
          <Edges color={C} opacity={0.82} transparent threshold={THR} />
        </mesh>
        {/* Short counterweight */}
        <mesh position={[0, -R * 0.16, 0]}>
          <boxGeometry args={[0.06, R * 0.22, 0.06]} />
          <meshStandardMaterial transparent opacity={0} />
          <Edges color={C} opacity={0.82} transparent threshold={THR} />
        </mesh>
        {/* Center circle on second hand */}
        <mesh rotation={RX90} position={[0, 0, 0]}>
          <cylinderGeometry args={[0.09, 0.09, 0.06, 10]} />
          <meshStandardMaterial transparent opacity={0} />
          <Edges color={C} opacity={0.82} transparent threshold={THR} />
        </mesh>
      </group>

      {/* Cap pin (covers hand stack) */}
      <mesh rotation={RX90} position={[0, 0, FZ + 0.40]}>
        <cylinderGeometry args={[0.08, 0.08, 0.06, 12]} />
        <meshStandardMaterial transparent opacity={0} />
        <Edges color={C} opacity={0.88} transparent threshold={THR} />
      </mesh>

      {/* ── Decorative mounting lugs (top & bottom of rim) ───────── */}
      {([1, -1] as const).map((sign) => (
        <mesh key={sign} position={[0, sign * (R + RIM + 0.18), 0]} rotation={RX90}>
          <cylinderGeometry args={[0.22, 0.22, 0.38, 10]} />
          <meshStandardMaterial transparent opacity={0} />
          <Edges color={C} opacity={0.55} transparent threshold={THR} />
        </mesh>
      ))}
    </group>
  );
};

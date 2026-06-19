import { useMemo, useRef, type FC } from "react";

import { useFrame } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import {
  BoxGeometry,
  CylinderGeometry,
  Quaternion,
  Vector3,
  type Group,
} from "three";

// ── Engine geometry constants ──────────────────────────────────────
const CRANK_R = 0.9;          // crank throw
const ROD_L   = 2.1;          // connecting rod length
const PISTON_R = 0.52;        // piston / bore radius
const PISTON_H = 0.72;        // piston height
const FLYWHEEL_R = 1.55;      // flywheel radius

// Gear train (left of engine)
const G1_X = -3.1, G1_Y = 0, G1_R = 1.15;
const G2_X = G1_X, G2_Y = G1_R + 0.82, G2_R = 0.82;

const C = "currentColor";     // edge colour string
const OP = 0.78;              // default edge opacity
const THR = 12;               // edge threshold

// ── Pre-build static geometries (module-level, created once) ───────
const GEO = {
  // engine block outer shell
  block:   new CylinderGeometry(0, 0, 0, 0),   // placeholder — built in component
  shaft:   new CylinderGeometry(0.09, 0.09, 4,  12),
  mainBrg: new CylinderGeometry(0.22, 0.22, 1.5, 16),
  flyOuter:new CylinderGeometry(FLYWHEEL_R, FLYWHEEL_R, 0.28, 30),
  flyInner:new CylinderGeometry(FLYWHEEL_R * 0.55, FLYWHEEL_R * 0.55, 0.30, 16),
  crankWeb:new BoxGeometry(0.38, CRANK_R + 0.15, 0.38),
  crankPin:new CylinderGeometry(0.13, 0.13, 0.95, 12),
  rodBody: new CylinderGeometry(0.09, 0.09, ROD_L, 10),
  rodBig:  new CylinderGeometry(0.21, 0.21, 0.60, 14),
  rodSmall:new CylinderGeometry(0.14, 0.14, 0.55, 14),
  piston:  new CylinderGeometry(PISTON_R, PISTON_R, PISTON_H, 22),
  ring:    new CylinderGeometry(PISTON_R + 0.04, PISTON_R + 0.04, 0.06, 22),
  wristPin:new CylinderGeometry(0.08, 0.08, 1.2, 10),
  bore:    new CylinderGeometry(PISTON_R + 0.06, PISTON_R + 0.06, 3.6, 22, 1, true),
  blockBox:new BoxGeometry(1.6, 5.2, 1.4),
  headBox: new BoxGeometry(1.6, 0.75, 1.4),
  g1Outer: new CylinderGeometry(G1_R, G1_R, 0.32, 24),
  g1Inner: new CylinderGeometry(G1_R * 0.3, G1_R * 0.3, 0.34, 12),
  g1Spoke: new BoxGeometry(G1_R * 1.15, 0.12, 0.14),
  g2Outer: new CylinderGeometry(G2_R, G2_R, 0.32, 18),
  g2Inner: new CylinderGeometry(G2_R * 0.3, G2_R * 0.3, 0.34, 10),
  g2Spoke: new BoxGeometry(G2_R * 1.1, 0.11, 0.12),
  camDisc: new CylinderGeometry(0.38, 0.38, 0.32, 18),
  camLobe: new CylinderGeometry(0.16, 0.16, 0.34, 12),
  linkShft:new CylinderGeometry(0.08, 0.08, 1.9, 10),
};

// half-turn rotation constants
const RX90 = [Math.PI / 2, 0, 0] as [number, number, number];
const RZ90 = [0, 0, Math.PI / 2] as [number, number, number];

export const Engine3D: FC = () => {
  const crankRef = useRef<Group>(null);
  const pistonRef = useRef<Group>(null);
  const rodRef = useRef<Group>(null);
  const g1Ref = useRef<Group>(null);
  const g2Ref = useRef<Group>(null);
  const camRef = useRef<Group>(null);

  // scratch objects — allocated once
  const _up  = useMemo(() => new Vector3(0, 1, 0), []);
  const _dir = useMemo(() => new Vector3(), []);
  const _q   = useMemo(() => new Quaternion(), []);

  useFrame(({ clock }) => {
    const theta = clock.getElapsedTime() * 2.2;

    // ── Crankshaft ────────────────────────────────────────────────
    if (crankRef.current) crankRef.current.rotation.z = -theta;

    // ── Slider-crank kinematics ───────────────────────────────────
    const sinT = Math.sin(theta);
    const cosT = Math.cos(theta);
    const cpX = CRANK_R * sinT;          // crankpin world X
    const cpY = CRANK_R * cosT;          // crankpin world Y
    const ppY = cpY + Math.sqrt(ROD_L ** 2 - cpX ** 2);  // piston-pin world Y

    // Piston (pin at bottom of piston → piston center = ppY - PISTON_H/2)
    if (pistonRef.current) pistonRef.current.position.y = ppY - PISTON_H / 2;

    // Connecting rod (mid-point + orientation)
    if (rodRef.current) {
      rodRef.current.position.set(cpX / 2, (cpY + ppY) / 2, 0);
      _dir.set(-cpX, ppY - cpY, 0).normalize();
      _q.setFromUnitVectors(_up, _dir);
      rodRef.current.quaternion.copy(_q);
    }

    // ── Gears ─────────────────────────────────────────────────────
    if (g1Ref.current) g1Ref.current.rotation.z =  theta * (FLYWHEEL_R / G1_R);
    if (g2Ref.current) g2Ref.current.rotation.z = -theta * (FLYWHEEL_R / G1_R) * (G1_R / G2_R);
    if (camRef.current) camRef.current.rotation.z = theta * 0.5;
  });

  const SPOKE_ANGLES = [0, 120, 240] as const;

  // Group offset: camera looks at [2,2,0]; engine intrinsic center ≈ [-1,2,0]
  // so position [3,-0.5,0] lands engine center near viewport center-right
  return (
    <group position={[3, -0.5, 0]}>

      {/* ── Engine block (static wireframe) ─────────────────────── */}
      {/* Main block */}
      <mesh geometry={GEO.blockBox} position={[0, 2.0, 0]}>
        <meshStandardMaterial transparent opacity={0} />
        <Edges color={C} opacity={0.55} transparent threshold={THR} />
      </mesh>
      {/* Head */}
      <mesh geometry={GEO.headBox} position={[0, 4.98, 0]}>
        <meshStandardMaterial transparent opacity={0} />
        <Edges color={C} opacity={0.65} transparent threshold={THR} />
      </mesh>
      {/* Cylinder bore walls (open-ended cylinder, DoubleSide so interior shows) */}
      <mesh geometry={GEO.bore} position={[0, 2.6, 0]}>
        <meshStandardMaterial transparent opacity={0} side={2} />
        <Edges color={C} opacity={0.35} transparent threshold={4} />
      </mesh>
      {/* Main bearing housing */}
      <mesh geometry={GEO.mainBrg} position={[0, 0, 0]} rotation={RX90}>
        <meshStandardMaterial transparent opacity={0} />
        <Edges color={C} opacity={0.50} transparent threshold={THR} />
      </mesh>

      {/* ── Crankshaft group (rotates) ───────────────────────────── */}
      <group ref={crankRef}>
        {/* Main shaft (along Z) */}
        <mesh geometry={GEO.shaft} rotation={RX90}>
          <meshStandardMaterial transparent opacity={0} />
          <Edges color={C} opacity={0.45} transparent threshold={THR} />
        </mesh>
        {/* Flywheel disc */}
        <mesh geometry={GEO.flyOuter} position={[0, 0, 1.5]} rotation={RX90}>
          <meshStandardMaterial transparent opacity={0} />
          <Edges color={C} opacity={OP} transparent threshold={9} />
        </mesh>
        <mesh geometry={GEO.flyInner} position={[0, 0, 1.5]} rotation={RX90}>
          <meshStandardMaterial transparent opacity={0} />
          <Edges color={C} opacity={0.40} transparent threshold={THR} />
        </mesh>
        {/* Flywheel spokes */}
        {SPOKE_ANGLES.map((deg) => {
          const a = (deg * Math.PI) / 180;
          return (
            <mesh
              key={deg}
              position={[
                FLYWHEEL_R * 0.55 * Math.cos(a),
                FLYWHEEL_R * 0.55 * Math.sin(a),
                1.5,
              ]}
              rotation={[0, 0, a]}
            >
              <boxGeometry args={[FLYWHEEL_R * 1.05, 0.12, 0.12]} />
              <meshStandardMaterial transparent opacity={0} />
              <Edges color={C} opacity={0.50} transparent threshold={THR} />
            </mesh>
          );
        })}
        {/* Crank web */}
        <mesh geometry={GEO.crankWeb} position={[0, CRANK_R / 2, 0]}>
          <meshStandardMaterial transparent opacity={0} />
          <Edges color={C} opacity={OP} transparent threshold={THR} />
        </mesh>
        {/* Crankpin */}
        <mesh geometry={GEO.crankPin} position={[0, CRANK_R, 0]} rotation={RX90}>
          <meshStandardMaterial transparent opacity={0} />
          <Edges color={C} opacity={OP} transparent threshold={THR} />
        </mesh>
      </group>

      {/* ── Connecting rod (position + rotation updated in useFrame) ─ */}
      <group ref={rodRef} position={[0, CRANK_R + ROD_L / 2, 0]}>
        {/* Rod body */}
        <mesh geometry={GEO.rodBody}>
          <meshStandardMaterial transparent opacity={0} />
          <Edges color={C} opacity={OP} transparent threshold={THR} />
        </mesh>
        {/* Big end (crankpin end, at local -Y) */}
        <mesh geometry={GEO.rodBig} position={[0, -ROD_L / 2, 0]} rotation={RX90}>
          <meshStandardMaterial transparent opacity={0} />
          <Edges color={C} opacity={OP} transparent threshold={THR} />
        </mesh>
        {/* Small end (piston-pin end, at local +Y) */}
        <mesh geometry={GEO.rodSmall} position={[0, ROD_L / 2, 0]} rotation={RX90}>
          <meshStandardMaterial transparent opacity={0} />
          <Edges color={C} opacity={OP} transparent threshold={THR} />
        </mesh>
      </group>

      {/* ── Piston (Y position updated in useFrame) ──────────────── */}
      <group ref={pistonRef} position={[0, CRANK_R + ROD_L - PISTON_H / 2, 0]}>
        <mesh geometry={GEO.piston}>
          <meshStandardMaterial transparent opacity={0} />
          <Edges color={C} opacity={OP} transparent threshold={THR} />
        </mesh>
        {/* Piston rings */}
        {([-0.24, -0.07, 0.10] as const).map((y, i) => (
          <mesh key={i} geometry={GEO.ring} position={[0, y, 0]}>
            <meshStandardMaterial transparent opacity={0} />
            <Edges color={C} opacity={0.55} transparent threshold={8} />
          </mesh>
        ))}
        {/* Wrist pin (horizontal, along X) */}
        <mesh geometry={GEO.wristPin} position={[0, -PISTON_H / 2, 0]} rotation={RZ90}>
          <meshStandardMaterial transparent opacity={0} />
          <Edges color={C} opacity={0.60} transparent threshold={THR} />
        </mesh>
      </group>

      {/* ── Shaft stub connecting crank to left gear ─────────────── */}
      <mesh
        geometry={GEO.linkShft}
        position={[-1.45, 0, 0]}
        rotation={RZ90}
      >
        <meshStandardMaterial transparent opacity={0} />
        <Edges color={C} opacity={0.45} transparent threshold={THR} />
      </mesh>

      {/* ── Gear 1 — large, driven by crankshaft ─────────────────── */}
      <group ref={g1Ref} position={[G1_X, G1_Y, 0]}>
        <mesh geometry={GEO.g1Outer} rotation={RX90}>
          <meshStandardMaterial transparent opacity={0} />
          <Edges color={C} opacity={OP} transparent threshold={9} />
        </mesh>
        <mesh geometry={GEO.g1Inner} rotation={RX90}>
          <meshStandardMaterial transparent opacity={0} />
          <Edges color={C} opacity={0.45} transparent threshold={THR} />
        </mesh>
        {SPOKE_ANGLES.map((deg) => {
          const a = (deg * Math.PI) / 180;
          return (
            <mesh
              key={deg}
              position={[G1_R * 0.6 * Math.cos(a), G1_R * 0.6 * Math.sin(a), 0]}
              rotation={[0, 0, a]}
            >
              <primitive object={GEO.g1Spoke} attach="geometry" />
              <meshStandardMaterial transparent opacity={0} />
              <Edges color={C} opacity={0.48} transparent threshold={THR} />
            </mesh>
          );
        })}
      </group>

      {/* ── Gear 2 — smaller, meshes above Gear 1 ───────────────── */}
      <group ref={g2Ref} position={[G2_X, G2_Y, 0]}>
        <mesh geometry={GEO.g2Outer} rotation={RX90}>
          <meshStandardMaterial transparent opacity={0} />
          <Edges color={C} opacity={OP} transparent threshold={9} />
        </mesh>
        <mesh geometry={GEO.g2Inner} rotation={RX90}>
          <meshStandardMaterial transparent opacity={0} />
          <Edges color={C} opacity={0.45} transparent threshold={THR} />
        </mesh>
        {[0, 180].map((deg) => {
          const a = (deg * Math.PI) / 180;
          return (
            <mesh
              key={deg}
              position={[G2_R * 0.55 * Math.cos(a), G2_R * 0.55 * Math.sin(a), 0]}
              rotation={[0, 0, a]}
            >
              <primitive object={GEO.g2Spoke} attach="geometry" />
              <meshStandardMaterial transparent opacity={0} />
              <Edges color={C} opacity={0.48} transparent threshold={THR} />
            </mesh>
          );
        })}
      </group>

      {/* ── Camshaft (at top, half crank speed) ──────────────────── */}
      <group ref={camRef} position={[0, 5.1, 0]}>
        <mesh geometry={GEO.camDisc} rotation={RX90}>
          <meshStandardMaterial transparent opacity={0} />
          <Edges color={C} opacity={0.65} transparent threshold={THR} />
        </mesh>
        {/* Cam lobe */}
        <mesh geometry={GEO.camLobe} position={[0, 0.44, 0]} rotation={RX90}>
          <meshStandardMaterial transparent opacity={0} />
          <Edges color={C} opacity={0.65} transparent threshold={THR} />
        </mesh>
      </group>
    </group>
  );
};

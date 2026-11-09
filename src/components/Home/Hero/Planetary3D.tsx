import { useMemo, useRef, type FC } from "react";
import { useFrame } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import { ExtrudeGeometry, Path, Shape, type Group } from "three";

// ── Planetary gearset: fixed ring, driven sun, 3 planets on a carrier ──
// Tooth counts satisfy Nr = Ns + 2·Np and (Ns + Nr) / planets ∈ ℤ, so all
// three planets mesh with both the sun and the ring.
const M  = 0.17;          // module (pitch radius = M·N/2)
const NS = 16;            // sun teeth
const NP = 8;             // planet teeth
const NR = NS + 2 * NP;   // ring teeth (32)
const PLANETS = 3;

const RS = (M * NS) / 2;  // sun pitch radius
const RP = (M * NP) / 2;  // planet pitch radius
const RR = (M * NR) / 2;  // ring pitch radius
const ORBIT = RS + RP;    // carrier arm length

const CARRIER_SPEED = 0.35; // rad/s
const DEPTH = 0.35;
const C = "currentColor";
const THR = 15;

// ── Geometry helpers ───────────────────────────────────────────────

/** Trapezoidal tooth outline; ra < rf gives inward-pointing (internal) teeth. */
function toothProfile(target: Shape | Path, n: number, ra: number, rf: number) {
  const p = (Math.PI * 2) / n;
  const pt = (r: number, a: number) => [r * Math.cos(a), r * Math.sin(a)] as const;
  for (let k = 0; k < n; k++) {
    const c = k * p;
    const pts = [
      pt(rf, c - 0.5 * p),
      pt(rf, c - 0.28 * p),
      pt(ra, c - 0.14 * p),
      pt(ra, c + 0.14 * p),
      pt(rf, c + 0.28 * p),
    ];
    pts.forEach(([x, y], i) =>
      k === 0 && i === 0 ? target.moveTo(x, y) : target.lineTo(x, y),
    );
  }
  target.closePath();
}

function spurGear(n: number, rp: number, bore: number, windows = 0) {
  const shape = new Shape();
  toothProfile(shape, n, rp + M, rp - 1.25 * M);

  const hole = new Path();
  hole.absarc(0, 0, bore, 0, Math.PI * 2, true);
  shape.holes.push(hole);

  // Lightening holes between hub and rim
  for (let i = 0; i < windows; i++) {
    const a = (i / windows) * Math.PI * 2;
    const r = (bore + rp - 1.25 * M) / 2;
    const w = new Path();
    w.absarc(r * Math.cos(a), r * Math.sin(a), (rp - 1.25 * M - bore) * 0.32, 0, Math.PI * 2, true);
    shape.holes.push(w);
  }
  return extrude(shape);
}

function ringGear() {
  const shape = new Shape();
  shape.absarc(0, 0, RR + 3 * M, 0, Math.PI * 2, false);
  const inner = new Path();
  toothProfile(inner, NR, RR - M, RR + 1.25 * M);
  shape.holes.push(inner);
  return extrude(shape);
}

function extrude(shape: Shape) {
  const g = new ExtrudeGeometry(shape, { depth: DEPTH, bevelEnabled: false, curveSegments: 32 });
  g.translate(0, 0, -DEPTH / 2);
  return g;
}

function Part({ geometry, opacity = 0.75 }: { geometry: ExtrudeGeometry; opacity?: number }) {
  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial transparent opacity={0} />
      <Edges color={C} transparent opacity={opacity} threshold={THR} />
    </mesh>
  );
}

// ── Main component ─────────────────────────────────────────────────
export const Planetary3D: FC = () => {
  const rootRef    = useRef<Group>(null);
  const sunRef     = useRef<Group>(null);
  const carrierRef = useRef<Group>(null);
  const planetRefs = useRef<(Group | null)[]>([]);

  const geo = useMemo(
    () => ({
      sun: spurGear(NS, RS, 0.18, 4),
      planet: spurGear(NP, RP, 0.12),
      ring: ringGear(),
    }),
    [],
  );

  // Planet centre angles and initial spin phase so each tooth sits in a ring gap.
  const planets = useMemo(
    () =>
      Array.from({ length: PLANETS }, (_, i) => {
        const alpha = (i / PLANETS) * Math.PI * 2;
        const phase = alpha - ((NR * alpha) / (Math.PI * 2) + 0.5) * ((Math.PI * 2) / NP);
        return { alpha, phase };
      }),
    [],
  );

  useFrame(({ clock }) => {
    const t  = clock.elapsedTime;
    const th = t * CARRIER_SPEED;                 // carrier angle

    if (carrierRef.current) carrierRef.current.rotation.z = th;
    // Fixed ring ⇒ ω_sun = ω_carrier · (1 + Nr/Ns)
    if (sunRef.current) sunRef.current.rotation.z = th * (1 + NR / NS);

    planets.forEach(({ alpha, phase }, i) => {
      const g = planetRefs.current[i];
      if (!g) return;
      const a = alpha + th;
      g.position.set(ORBIT * Math.cos(a), ORBIT * Math.sin(a), 0);
      // Rolling inside the fixed ring ⇒ φ = φ₀ + (1 − Nr/Np)·θ
      g.rotation.z = phase + (1 - NR / NP) * th;
    });

    // Slow 3D sway so the gear faces read as solid objects
    if (rootRef.current) {
      rootRef.current.rotation.x = -0.45 + Math.sin(t * 0.3) * 0.08;
      rootRef.current.rotation.y = 0.35 + Math.sin(t * 0.22) * 0.15;
    }
  });

  return (
    <group ref={rootRef}>
      {/* Fixed ring gear with mounting bolts */}
      <Part geometry={geo.ring} opacity={0.6} />
      {Array.from({ length: 6 }, (_, i) => {
        const a = (i / 6) * Math.PI * 2 + Math.PI / 6;
        const r = RR + 1.9 * M;
        return (
          <mesh key={i} position={[r * Math.cos(a), r * Math.sin(a), DEPTH / 2 + 0.05]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.09, 0.09, 0.1, 6]} />
            <meshStandardMaterial transparent opacity={0} />
            <Edges color={C} transparent opacity={0.6} threshold={THR} />
          </mesh>
        );
      })}

      {/* Sun gear + input shaft */}
      <group ref={sunRef}>
        <Part geometry={geo.sun} opacity={0.85} />
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -0.9]}>
          <cylinderGeometry args={[0.18, 0.18, 1.5, 12]} />
          <meshStandardMaterial transparent opacity={0} />
          <Edges color={C} transparent opacity={0.5} threshold={THR} />
        </mesh>
      </group>

      {/* Planets (positioned per frame) */}
      {planets.map((_, i) => (
        <group key={i} ref={(el) => { planetRefs.current[i] = el; }}>
          <Part geometry={geo.planet} opacity={0.8} />
        </group>
      ))}

      {/* Carrier plate in front: hub, three arms, pins, output shaft */}
      <group ref={carrierRef} position={[0, 0, DEPTH / 2 + 0.15]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.32, 0.32, 0.12, 16]} />
          <meshStandardMaterial transparent opacity={0} />
          <Edges color={C} transparent opacity={0.85} threshold={THR} />
        </mesh>
        {planets.map(({ alpha }, i) => (
          <group key={i} rotation={[0, 0, alpha]}>
            <mesh position={[ORBIT / 2, 0, 0]}>
              <boxGeometry args={[ORBIT, 0.22, 0.1]} />
              <meshStandardMaterial transparent opacity={0} />
              <Edges color={C} transparent opacity={0.85} threshold={THR} />
            </mesh>
            <mesh position={[ORBIT, 0, -0.15]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.1, 0.1, 0.45, 10]} />
              <meshStandardMaterial transparent opacity={0} />
              <Edges color={C} transparent opacity={0.85} threshold={THR} />
            </mesh>
          </group>
        ))}
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.55]}>
          <cylinderGeometry args={[0.2, 0.2, 1.0, 12]} />
          <meshStandardMaterial transparent opacity={0} />
          <Edges color={C} transparent opacity={0.7} threshold={THR} />
        </mesh>
      </group>
    </group>
  );
};

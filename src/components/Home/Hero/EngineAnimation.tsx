import { useEffect, useRef, type FC } from "react";

// ── Layout constants ───────────────────────────────────────────────
const CX = 345;        // crankshaft / cylinder center X
const CY = 500;        // crankshaft center Y
const CRANK_R = 55;    // crank throw (px)
const ROD_L = 133;     // connecting rod length
const P_W = 60;        // piston width
const P_H = 36;        // piston height (also = wrist-pin local Y offset)

// Engine block
const BLK_L = 232, BLK_R = 458, BLK_T = 78, BLK_B = 580;
const HEAD_H = 54;       // head section height
const BORE_L = CX - P_W / 2;
const BORE_R = CX + P_W / 2;

// Left gear train (outside block)
const G1X = 103, G1Y = CY, G1R = 60;   // large driven gear
const G2X = 168, G2Y = 408, G2R = 38;  // smaller idler (meshes with G1)

// Cam
const CAM_X = CX, CAM_Y = BLK_T + HEAD_H / 2;

const DEG = 180 / Math.PI;

export const EngineAnimation: FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const tick = (ts: number) => {
      const theta = ts * 0.0018;   // ~103°/s — moderate engine speed

      // ── Crankshaft rotation ──────────────────────────────────
      svg.getElementById("crank-g")?.setAttribute(
        "transform", `rotate(${(theta * DEG).toFixed(2)},${CX},${CY})`
      );

      // ── Piston / connecting-rod kinematics ───────────────────
      const sinT = Math.sin(theta);
      const cosT = Math.cos(theta);
      const crankPinX = CX + CRANK_R * sinT;
      const crankPinY = CY - CRANK_R * cosT;
      const pistonPinY = CY - CRANK_R * cosT
        - Math.sqrt(ROD_L ** 2 - (CRANK_R * sinT) ** 2);

      // Piston group: wrist-pin local Y = P_H → set group so pin lands on pistonPinY
      svg.getElementById("piston-g")?.setAttribute(
        "transform", `translate(0,${(pistonPinY - P_H).toFixed(2)})`
      );

      // Con-rod: from crankpin to wrist pin
      const rod = svg.getElementById("con-rod");
      if (rod) {
        rod.setAttribute("x1", crankPinX.toFixed(2));
        rod.setAttribute("y1", crankPinY.toFixed(2));
        rod.setAttribute("x2", CX.toFixed(2));
        rod.setAttribute("y2", pistonPinY.toFixed(2));
      }

      // ── Left gear G1 (counter-rotates, speed ∝ flywheel/G1 radii) ──
      const fwR = 70;
      svg.getElementById("g1-g")?.setAttribute(
        "transform",
        `rotate(${(-theta * (fwR / G1R) * DEG).toFixed(2)},${G1X},${G1Y})`
      );

      // ── Left gear G2 (driven by G1, same dir as flywheel) ──────────
      svg.getElementById("g2-g")?.setAttribute(
        "transform",
        `rotate(${(theta * (fwR / G1R) * (G1R / G2R) * DEG).toFixed(2)},${G2X},${G2Y})`
      );

      // ── Cam (half crank speed, opposite direction) ───────────────────
      svg.getElementById("cam-g")?.setAttribute(
        "transform",
        `rotate(${(-theta * 0.5 * DEG).toFixed(2)},${CAM_X},${CAM_Y})`
      );

      // ── Cam sprocket on timing chain ────────────────────────────────
      svg.getElementById("cam-sprocket")?.setAttribute(
        "transform", `rotate(${(-theta * 0.5 * DEG).toFixed(2)},${CX - 28},${BLK_T + HEAD_H / 2})`
      );

      // ── Valves (intake opens at TDC, exhaust near BDC) ─────────────
      const camAngle = theta * 0.5;
      const intakeLift = Math.max(0, Math.sin(camAngle)) * 9;
      const exhaustLift = Math.max(0, Math.sin(camAngle + Math.PI)) * 9;
      svg.getElementById("v-in")?.setAttribute("transform", `translate(0,${intakeLift.toFixed(2)})`);
      svg.getElementById("v-ex")?.setAttribute("transform", `translate(0,${exhaustLift.toFixed(2)})`);

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const s = "currentColor";

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 580 700"
      fill="none"
      stroke={s}
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-full w-full"
      aria-label="Animated engine cross-section diagram"
    >
      {/* ── Engine block outline ────────────────────────────────── */}
      <rect x={BLK_L} y={BLK_T} width={BLK_R - BLK_L} height={BLK_B - BLK_T} strokeWidth={1.5} />

      {/* Cylinder head ─────────────────────────────────────────── */}
      <rect x={BLK_L} y={BLK_T} width={BLK_R - BLK_L} height={HEAD_H} strokeWidth={1.4} />
      {/* Head port cutouts */}
      <rect x={BORE_L - 22} y={BLK_T + 6} width={18} height={9} rx={1} opacity={0.55} />
      <rect x={BORE_R + 4} y={BLK_T + 6} width={18} height={9} rx={1} opacity={0.55} />

      {/* Cylinder bore walls ───────────────────────────────────── */}
      <line x1={BORE_L} y1={BLK_T + HEAD_H} x2={BORE_L} y2={CY - 26} strokeWidth={1.3} />
      <line x1={BORE_R} y1={BLK_T + HEAD_H} x2={BORE_R} y2={CY - 26} strokeWidth={1.3} />

      {/* Crankcase arch ────────────────────────────────────────── */}
      <path d={`M${BLK_L} ${CY - 26} Q${CX} ${CY + 30} ${BLK_R} ${CY - 26}`}
            opacity={0.45} />

      {/* Main bearing housing ──────────────────────────────────── */}
      <circle cx={CX} cy={CY} r={22} strokeWidth={1.3} />

      {/* ── Timing chain (inside block, left of bore) ──────────── */}
      <circle id="cam-sprocket" cx={CX - 28} cy={BLK_T + HEAD_H / 2} r={10} />
      <circle cx={CX - 28} cy={CY} r={22} strokeWidth={0.8} opacity={0.4} />
      {/* Chain strands */}
      <line x1={CX - 38} y1={BLK_T + HEAD_H / 2} x2={CX - 50} y2={CY}
            strokeDasharray="4 3" opacity={0.5} />
      <line x1={CX - 18} y1={BLK_T + HEAD_H / 2} x2={CX - 6} y2={CY}
            strokeDasharray="4 3" opacity={0.5} />

      {/* ── STATIC: Valves ─────────────────────────────────────── */}
      {/* Intake valve */}
      <g id="v-in">
        <rect x={BORE_L - 10} y={BLK_T + HEAD_H - 22} width={9} height={22} rx={1} />
        <line x1={BORE_L - 6} y1={BLK_T + HEAD_H - 22} x2={BORE_L - 6} y2={BLK_T + 6} strokeWidth={0.8} opacity={0.6} />
      </g>
      {/* Exhaust valve */}
      <g id="v-ex">
        <rect x={BORE_R + 1} y={BLK_T + HEAD_H - 22} width={9} height={22} rx={1} />
        <line x1={BORE_R + 5} y1={BLK_T + HEAD_H - 22} x2={BORE_R + 5} y2={BLK_T + 6} strokeWidth={0.8} opacity={0.6} />
      </g>

      {/* ── ANIMATED: Cam ──────────────────────────────────────── */}
      <g id="cam-g">
        <circle cx={CAM_X} cy={CAM_Y} r={14} />
        <ellipse cx={CAM_X} cy={CAM_Y - 16} rx={6} ry={9} />
        <line x1={CAM_X} y1={CAM_Y} x2={CAM_X} y2={CAM_Y - 14} strokeWidth={0.9} />
      </g>
      {/* Cam bearing housing */}
      <circle cx={CAM_X} cy={CAM_Y} r={18} opacity={0.35} />

      {/* ── ANIMATED: Crankshaft group ─────────────────────────── */}
      <g id="crank-g">
        {/* Flywheel outer */}
        <circle cx={CX} cy={CY} r={70} strokeWidth={1.2} />
        <circle cx={CX} cy={CY} r={63} strokeWidth={0.5} opacity={0.4} />
        {/* Tooth marks on flywheel rim */}
        {Array.from({ length: 24 }, (_, i) => {
          const a = (i / 24) * 2 * Math.PI;
          const x1 = CX + 63 * Math.cos(a), y1 = CY + 63 * Math.sin(a);
          const x2 = CX + 70 * Math.cos(a), y2 = CY + 70 * Math.sin(a);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth={0.8} />;
        })}
        {/* Spokes */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
          const r = a * Math.PI / 180;
          return (
            <line key={a}
              x1={CX + 15 * Math.cos(r)} y1={CY + 15 * Math.sin(r)}
              x2={CX + 60 * Math.cos(r)} y2={CY + 60 * Math.sin(r)}
              strokeWidth={0.9}
            />
          );
        })}
        {/* Hub */}
        <circle cx={CX} cy={CY} r={15} />
        <circle cx={CX} cy={CY} r={5} />
        {/* Crank web (arm) */}
        <line x1={CX} y1={CY} x2={CX} y2={CY - CRANK_R} strokeWidth={4} />
        {/* Crankpin */}
        <circle cx={CX} cy={CY - CRANK_R} r={9} strokeWidth={1.4} />
      </g>

      {/* ── ANIMATED: Connecting rod ───────────────────────────── */}
      <line id="con-rod" x1={CX} y1={CY - CRANK_R} x2={CX} y2={CY - CRANK_R - ROD_L}
            strokeWidth={2.4} />

      {/* ── ANIMATED: Piston group ─────────────────────────────── */}
      <g id="piston-g">
        {/* Body — top at local y=0, wrist pin at y=P_H */}
        <rect x={BORE_L + 1} y={0} width={P_W - 2} height={P_H} strokeWidth={1.3} />
        {/* Compression rings */}
        <line x1={BORE_L + 4} y1={8}  x2={BORE_R - 4} y2={8}  strokeWidth={0.85} opacity={0.75} />
        <line x1={BORE_L + 4} y1={16} x2={BORE_R - 4} y2={16} strokeWidth={0.85} opacity={0.75} />
        <line x1={BORE_L + 4} y1={24} x2={BORE_R - 4} y2={24} strokeWidth={0.85} opacity={0.75} />
        {/* Wrist pin */}
        <circle cx={CX} cy={P_H} r={5} strokeWidth={1.1} />
      </g>

      {/* ── Crankshaft shaft exiting left through block wall ──── */}
      <line x1={BLK_L} y1={CY} x2={G1X + G1R + 2} y2={G1Y} strokeWidth={2.4} />

      {/* ── ANIMATED: Left gear G1 ─────────────────────────────── */}
      <g id="g1-g">
        <circle cx={G1X} cy={G1Y} r={G1R} strokeWidth={1.2} />
        <circle cx={G1X} cy={G1Y} r={G1R * 0.85} strokeWidth={0.5} opacity={0.35} />
        {/* Teeth marks */}
        {Array.from({ length: 18 }, (_, i) => {
          const a = (i / 18) * 2 * Math.PI;
          return (
            <line key={i}
              x1={G1X + G1R * 0.85 * Math.cos(a)} y1={G1Y + G1R * 0.85 * Math.sin(a)}
              x2={G1X + G1R * Math.cos(a)} y2={G1Y + G1R * Math.sin(a)}
              strokeWidth={0.9}
            />
          );
        })}
        {/* Hub + spokes */}
        <circle cx={G1X} cy={G1Y} r={G1R * 0.28} />
        <circle cx={G1X} cy={G1Y} r={5} />
        {[0, 60, 120, 180, 240, 300].map((a) => {
          const r = a * Math.PI / 180;
          return (
            <line key={a}
              x1={G1X + 6 * Math.cos(r)} y1={G1Y + 6 * Math.sin(r)}
              x2={G1X + G1R * 0.82 * Math.cos(r)} y2={G1Y + G1R * 0.82 * Math.sin(r)}
            />
          );
        })}
      </g>

      {/* ── ANIMATED: Left gear G2 ─────────────────────────────── */}
      <g id="g2-g">
        <circle cx={G2X} cy={G2Y} r={G2R} strokeWidth={1.1} />
        <circle cx={G2X} cy={G2Y} r={G2R * 0.82} strokeWidth={0.5} opacity={0.35} />
        {Array.from({ length: 11 }, (_, i) => {
          const a = (i / 11) * 2 * Math.PI;
          return (
            <line key={i}
              x1={G2X + G2R * 0.82 * Math.cos(a)} y1={G2Y + G2R * 0.82 * Math.sin(a)}
              x2={G2X + G2R * Math.cos(a)} y2={G2Y + G2R * Math.sin(a)}
              strokeWidth={0.9}
            />
          );
        })}
        <circle cx={G2X} cy={G2Y} r={G2R * 0.28} />
        <circle cx={G2X} cy={G2Y} r={4} />
        {[0, 120, 240].map((a) => {
          const r = a * Math.PI / 180;
          return (
            <line key={a}
              x1={G2X + 5 * Math.cos(r)} y1={G2Y + 5 * Math.sin(r)}
              x2={G2X + G2R * 0.8 * Math.cos(r)} y2={G2Y + G2R * 0.8 * Math.sin(r)}
            />
          );
        })}
      </g>

      {/* Mesh line between G1 and G2 (visual) */}
      <line
        x1={G1X + G1R * Math.cos(-0.64)} y1={G1Y + G1R * Math.sin(-0.64)}
        x2={G2X + G2R * Math.cos(Math.PI - 0.64)} y2={G2Y + G2R * Math.sin(Math.PI - 0.64)}
        strokeWidth={0.5} opacity={0.3}
      />

      {/* ── Annotation / dimension lines ────────────────────────── */}
      {/* Bore dimension bracket */}
      <line x1={BLK_L - 18} y1={BLK_T + HEAD_H} x2={BLK_L - 18} y2={CY}
            strokeWidth={0.6} opacity={0.3} strokeDasharray="3 3" />
      <line x1={BLK_L - 22} y1={BLK_T + HEAD_H} x2={BLK_L - 14} y2={BLK_T + HEAD_H}
            strokeWidth={0.6} opacity={0.3} />
      <line x1={BLK_L - 22} y1={CY} x2={BLK_L - 14} y2={CY}
            strokeWidth={0.6} opacity={0.3} />

      {/* TDC / BDC markers */}
      <line x1={BLK_R + 8} y1={CY - CRANK_R - ROD_L}
            x2={BLK_R + 22} y2={CY - CRANK_R - ROD_L}
            strokeWidth={0.6} opacity={0.35} />
      <line x1={BLK_R + 8} y1={CY + CRANK_R - ROD_L + 6}
            x2={BLK_R + 22} y2={CY + CRANK_R - ROD_L + 6}
            strokeWidth={0.6} opacity={0.35} />
      <text x={BLK_R + 25} y={CY - CRANK_R - ROD_L + 4}
            fontSize={8} opacity={0.4} fill="currentColor" stroke="none"
            fontFamily="monospace">TDC</text>
      <text x={BLK_R + 25} y={CY + CRANK_R - ROD_L + 10}
            fontSize={8} opacity={0.4} fill="currentColor" stroke="none"
            fontFamily="monospace">BDC</text>

      {/* Cylinder centerline */}
      <line x1={CX} y1={BLK_T - 16} x2={CX} y2={BLK_T}
            strokeDasharray="5 4" opacity={0.22} strokeWidth={0.8} />

      {/* Crankshaft center mark */}
      <line x1={CX - 8} y1={CY} x2={CX + 8} y2={CY} opacity={0.2} strokeWidth={0.6} />
      <line x1={CX} y1={CY - 8} x2={CX} y2={CY + 8} opacity={0.2} strokeWidth={0.6} />
    </svg>
  );
};

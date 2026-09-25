---
title: MODULAR UAV FRAME
description: A fully 3D-printed, modular hexacopter frame from my CREST-MECIS summer research fellowship at UT Rio Grande Valley, where I owned the frame and arm attachments. Generative design cut the center plate from 0.25 kg to 0.076 kg and the whole frame by ~60%. At full motor throttle the arm deflected only ~5 mm, and a broken part costs about $2 (leg) or $5 (arm) to reprint.
image: /images/uav-built.jpg
alt: Modular 3D-Printed UAV Frame
collaborators: [Darren Espinoza]
contributions:
  [
    Generative-design center plate (Fusion),
    Modular arm attachment clamps,
    FEA stress testing,
    PETG print process (orientation and infill),
    Full-throttle deflection test rig,
  ]
---

## Motivation

I spent summer 2026 at the CREST-MECIS Center at UT Rio Grande Valley on an \$8,200 research fellowship. The lab was building an autonomous UAV to carry a structural crack-detection sensor for infrastructure inspection. I owned the frame and the arm attachment system. Darren Espinoza handled the rest.

Drones that do real fieldwork crash. On a typical frame, one bad landing can crack an arm, and then you're waiting on a replacement part. I wanted a frame where a crash costs a few dollars and one overnight print, and I wanted to find out whether generative design could make a printed frame light enough to be worth flying.

![Assembled UAV](/images/uav-built.jpg)

## Why Modular and Printed

The frame is split into parts that bolt together: a center plate, six arms, and two landing legs. I designed the attachment system so each arm clamps into the hub on its own. A broken arm comes off without taking the rest of the drone apart, and the clamp is the only interface a new arm has to match.

Everything prints in-house on a Bambu Lab X1 Carbon, which is what makes the repair cost so low:

| Part | Reprint cost | Print time |
| ---- | ------------ | ---------- |
| Landing leg | ~\$2 | 2 hours |
| Arm | ~\$5 | 5 hours |

A replacement arms and legs are not even listed for most drone frames. Likely, you would have to buy the entire frame again, costing hundreds of dollars.

![CAD Assembly](/images/uav-cad.png)

## Generative Design

Instead of drawing the center plate by hand and cutting holes to save weight, I set up the loads and let Fusion's generative solver decide where material was needed. The setup had four parts:

- **Preserve geometry:** motor mounts, arm clamp faces, and bolt holes. These had to exist exactly as drawn.
- **Obstacle geometry:** space kept clear for the battery, flight controller, and wiring.
- **Loads:** full motor thrust at each arm, plus the payload and landing loads.
- **Manufacturing constraint:** additive, in PETG, so the solver only returned shapes that could print.

The load that sizes an arm is thrust acting at the end of a cantilever:

$$M_{root} = T_{max} \, L$$

- $M_{root}$ = bending moment where the arm meets the hub
- $T_{max}$ = maximum thrust of one motor (12 N for the SunnySky V4008-17)
- $L$ = distance from the hub to the motor axis (50 mm)

The solver returned a set of organic, branching shapes like the plate below: material follows the load paths from each motor mount to the hub, and everything else is gone.

![Generative Center Plate](/images/uav-plate.png)

The most important thing I learned: **generative design hands you geometry, not judgment.** Many outcomes may look good, but they might be not be suitable in application compared to CAD. Constraining the study by what we could actually manufacture, and then choosing and cleaning up an outcome, was the real engineering work. The final outcome was picked because of its consistent volume spread with a lowest mass safety factor of 5.

The generative center plate went from **0.25 kg to 0.076 kg**, about **70% lighter**. Across the whole frame, the weight dropped by about **60%**.

$$\text{Reduction} = \frac{m_{before} - m_{after}}{m_{before}} = \frac{0.25 - 0.076}{0.25} \approx 0.70$$

- $m_{before}$ = center plate mass before generative design
- $m_{after}$ = center plate mass after

## Printing for Strength

Generative parts are thin, so small printing choices change how strong they actually are.

- **PETG instead of PLA.** PETG is tougher and less brittle. In a crash it tends to bend instead of shattering, and it bonds between layers better than PLA.
- **100% infill.** The FEA assumes the part is solid. A thin generative member printed at partial infill is mostly walls around a hollow core, which is weaker than what was simulated. At 100% infill, the printed part matches the part we analyzed.
- **Printed diagonally.** FDM parts are weakest between layers, where one layer has to hold onto the next. Printing flat or upright lines those weak interfaces up with the directions the arm gets loaded in. Printing on a diagonal puts the layer lines at an angle to the load, so no single weak seam carries it, and the part comes out stronger.

## Testing

**Simulation.** I stress-tested the parts in Fusion's FEA before printing. Minimum safety factor was 5.

**Full throttle.** Before trusting the frame in the air, I wanted to see how an arm behaved at the motor's maximum thrust. I built a bench rig to find out:

- The arm mounted to the frame through the **same clamp system used on the drone**, so the test loaded the real interface.
- The frame was clamped to a heavy box. These clamps were test fixtures, not part of the drone.
- A laptop drove the SunnySky V4008-17 motor up to maximum throttle.
- A laser displacement sensor tracked the arm tip the whole way up.

At full throttle, the arm tip deflected about **5 mm upward**. The arm, the clamp, and the frame came through with no damage.

That number also gives the arm's effective stiffness:

$$k = \frac{T_{max}}{\delta}$$

- $k$ = effective stiffness of the arm and clamp together
- $T_{max}$ = maximum thrust of one motor (12 N)
- $\delta$ = measured tip deflection (~5 mm)

**Flight.** The full UAV carried a validated **15 lb payload** and flew **20–30 minutes unloaded**.

## What I'd Do Next

- **Close the loop between simulation and test.** Match the 5 mm measurement against the FEA directly, then use the difference to tune the material model for PETG.
- **Test for fatigue.** Motor vibration is a repeated load, and PETG can creep and fatigue in ways a single full-throttle test won't show.

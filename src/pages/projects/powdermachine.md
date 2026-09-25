---
title: AUTOMATED POWDER BLENDER
description: A USC researcher asked me to motorize a $400 manual rotary powder blender instead of buying a $1,200 motorized one. I built a chain drive that spins the ~9 kg loaded drum at 30 RPM. My worst-case analysis said it needed ~16 N·m of torque, but a ~0.6 N·m motor ran it fine, and working out why taught me more than the build did.
image: /images/powderblender.png
alt: Automated Powder Blender
contributions:
  [
    Chain-drive transmission design,
    Torque and inertia analysis,
    3D-printed housing and sprockets (CAD),
    Motor and power wiring,
    Physical load testing,
  ]
buttons:
  [{ label: "CAD Files", url: "https://drive.google.com/drive/folders/123t2meJtXi8lv8tLReUv_GgiFayxFU8v?usp=sharing" }]
---

## Motivation

Motorized rotary powder blenders cost upwards of \$1,200, mostly for the integrated drive and enclosure. A researcher I know at USC had already bought a \$400 manual blender and asked whether I could motorize it for less than the difference.

I'd never designed a chain drive, and this was a chance to do it on a real system with a real user, where "it works in CAD" wasn't the finish line.

## System Architecture

### Mechanical

- **Housing** (3D printed): holds the motor, electronics, and drive
- **Sprockets** (3D printed): one on the motor shaft, one on the drum's rod
- **Bearing**: doubles as a simple chain tensioner

![physicalComponents](/images/powderPhysical.png)

### Electrical

- **24 V DC gearmotor**, rated 30 RPM: drives the chain
- **DC motor driver**: switches the motor and controls speed
- **24 V power adapter**: converts wall power (100–240 V AC) to 24 V DC

![electricalComponents](/images/powderElectrical.png)

At 30 RPM I didn't need a speed change, so I ran a **1:1 drive** (same tooth count on both sprockets). The chain just moves the motor's output over to the drum's axis.

## Sizing the Motor: Two Models That Disagreed

- $m$ = loaded drum mass ≈ 9 kg
- $r$ = offset from the rotation axis to the powder's center of mass ≈ 0.18 m (worst case)
- $\omega$ = target speed = 30 RPM = $\pi$ rad/s

### Model 1: Spin-up torque

If the drum reaches full speed in about 2 s:

$$\alpha = \frac{\omega}{t} = \frac{\pi}{2} \approx 1.57 \text{ rad/s}^2$$

$$\tau_{accel} = I\alpha$$

- $\alpha$ = angular acceleration
- $t$ = spin-up time
- $I$ = moment of inertia
- $\tau_{accel}$ = torque needed to accelerate the drum

As an upper bound, I treated all 9 kg as a point mass at 0.18 m, so $I = mr^2 \approx 0.29$ kg·m². That gives $\tau_{accel} \approx 0.46$ N·m. Inertia isn't the problem.

### Model 2: Holding the load off-center

If the powder's center of mass sits 0.18 m to the side of the axis, the motor has to hold it up against gravity:

$$\tau = mgr = (9)(9.81)(0.18) \approx 15.9 \text{ N·m}$$

- $g$ = gravitational acceleration (9.81 m/s²)

This is the number that should size the motor. Add a safety factor for friction and imbalance, and it points to about **20–25 N·m** at the drum.

## The Result That Didn't Match

Before buying a big motor, I tested the cheap one: a gearmotor with about **0.6 N·m** on the 1:1 drive. It spun the loaded drum smoothly at 30 RPM.

<video
  src="/videos/powder-spinning.mov"
  autoPlay
  loop
  muted
  playsInline
  controls
  style="display:block; margin:1rem auto; height:40vh; width:auto; border-radius:8px;"
/>

That's roughly **26× less torque** than Model 2 said I needed. So Model 2 was wrong about the physical situation, not just a little conservative.

My best explanation is that the 0.18 m offset was never real. The powder doesn't sit as a lump at the drum wall. As the drum turns, the powder rides up the wall to its angle of repose and avalanches back down, so its center of mass stays close to the axis. The real gravitational torque is $mg$ times that small offset, not times 0.18 m. The drum shell is roughly symmetric, so it adds almost no imbalance. What the motor actually fights is bearing friction, chain losses, and a small, constantly sliding powder load.

I haven't measured this yet. **Next step:** log the motor's current draw while it runs and convert it to torque with the motor constant. That would show how far off-center the powder really sits.

## If It Needed More Torque

If the load had needed the full 20–25 N·m, I'd have used a 5:1 chain reduction (12-tooth motor sprocket, 60-tooth drum sprocket):

$$\tau_{out} = \tau_{motor} \times G \times \eta, \qquad \omega_{out} = \frac{\omega_{motor}}{G}$$

- $\tau_{out}$ = torque at the drum
- $\tau_{motor}$ = motor torque
- $G$ = gear ratio (5)
- $\eta$ = chain efficiency (~0.85)
- $\omega_{out}, \omega_{motor}$ = drum and motor speeds

To get 20–25 N·m at the drum, the motor would need $\tau_{motor} \approx$ **4.7–5.9 N·m** at **150 RPM** to keep the drum at 30 RPM. That motor costs more, but it would still fit well inside the gap between the manual and motorized blenders.

The chain tension in that design would be:

$$F = \frac{\tau}{r_{sprocket}}$$

- $F$ = chain tension
- $r_{sprocket}$ = pitch radius of the sprocket carrying torque $\tau$

![tensioner](/images/powderTension.png)

To be safe, I replaced the original **0.6 N·m** with a **5 N·m** motor.

## Takeaway

The worst-case model was the right place to *start*, because it told me what could go wrong. It was the wrong model to *buy parts from*. Testing the cheap option first kept the build to \$600, replacing a system that costs about \$1,200 new.
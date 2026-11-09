---
title: AUTOMATED POWDER BLENDER
description: A USC researcher asked me to motorize a $400 manual rotary powder blender instead of buying a $1,200 motorized one. I sized the drive for the worst case, with the full ~9 kg load shifted to the drum wall, which takes ~16 N·m to turn. A $65 closed-loop stepper (3.5 N·m) meets that through a 6:1 chain reduction.
image: /images/powderblender.png
alt: Automated Powder Blender
contributions:
  [
    Worst-case torque analysis,
    Chain-drive reduction design,
    3D-printed housing and sprockets (CAD),
    Motor selection and wiring,
    Physical load testing,
  ]
buttons:
  [{ label: "CAD Files", url: "https://drive.google.com/drive/folders/123t2meJtXi8lv8tLReUv_GgiFayxFU8v?usp=sharing" }]
---

## Motivation

Motorized rotary powder blenders cost upwards of \$1,200, mostly for the integrated drive and enclosure. In the spring of my freshman year, a family friend who is a researcher at USC had already bought a \$400 manual blender, and he asked whether I could motorize it for less than the difference.

Spinning a drum sounds simple. The catch is that the load moves. The empty drum weighs only about 1 kg, but a full load adds about 8 kg of powder, and that powder tumbles as the drum turns. The torque the motor feels changes every revolution. I wanted a drive that would still turn the drum on the worst revolution, not just the average one.

## System Architecture

### Mechanical

- **Housing** (3D printed): holds the motor, electronics, and drive
- **Sprockets** (3D printed): a 10-tooth sprocket on the motor and a 60-tooth sprocket on the drum's rod, for a 6:1 reduction
- **Bearing**: doubles as a simple chain tensioner

![physicalComponents](/images/powderPhysical.png)

### Electrical

- **NEMA 24 integrated closed-loop stepper motor** (3.5 N·m rated, 24–50 V): the motor, driver, and a 1,000-line encoder in one housing. It takes standard step and direction signals.
- **Step/direction controller**: [FILL IN: what sends the step pulses, e.g. an Arduino]
- **24 V power adapter**: converts wall power (100–240 V AC) to 24 V DC

![electricalComponents](/images/powderElectrical.png)

The closed loop matters for this load. An ordinary stepper that gets hit with more torque than it can deliver skips steps without knowing it. A shifting powder load is exactly the kind of torque spike that causes that. Here, the encoder reports the shaft's real position, and the built-in driver corrects for any missed steps.

## Sizing the Motor

- $m$ = drum plus powder ≈ 9 kg (about 1 kg of drum, 8 kg of powder)
- $r$ = drum radius ≈ 0.18 m
- $\omega$ = target speed = 30 RPM = $\pi$ rad/s

### Why the powder sets the torque

If the drum were empty, it would be nearly balanced about its axis, and the motor would only fight friction. The powder changes that. As the drum turns, the powder gets carried up the wall and falls back under gravity, so its weight sits off to one side of the axis. Torque from gravity is weight times horizontal distance from the axis, so the farther out the powder sits, the harder the motor has to work.

I sized the drive for the **worst case**: the entire load at the drum wall, at its farthest horizontal distance from the axis.

### Spin-up torque

If the drum reaches full speed in about 2 s:

$$\alpha = \frac{\omega}{t} = \frac{\pi}{2} \approx 1.57 \text{ rad/s}^2$$

$$\tau_{accel} = I\alpha$$

- $\alpha$ = angular acceleration
- $t$ = spin-up time
- $I$ = moment of inertia
- $\tau_{accel}$ = torque needed to accelerate the drum

Treating all 9 kg as a point mass at the wall gives $I = mr^2 \approx 0.29$ kg·m² and $\tau_{accel} \approx 0.46$ N·m.

### Holding torque

With the full load at the wall, the motor has to lift it against gravity:

$$\tau_{hold} = mgr = (9)(9.81)(0.18) \approx 15.9 \text{ N·m}$$

- $\tau_{hold}$ = torque needed to hold the shifted load
- $g$ = gravitational acceleration (9.81 m/s²)

That's about **35× the spin-up torque**, so the motor is sized by the shifting powder, not by acceleration. It's also deliberately conservative. It puts all 9 kg at the wall, including the drum shell, which actually stays centered. Counting only the 8 kg of powder gives about 14.1 N·m.

## Chain Reduction

A 3.5 N·m motor can't turn the drum directly, so a chain reduction multiplies its torque:

$$\tau_{out} = \tau_{motor} \times G \times \eta, \qquad \omega_{out} = \frac{\omega_{motor}}{G}$$

- $\tau_{out}$ = torque at the drum
- $\tau_{motor}$ = motor torque (3.5 N·m)
- $G$ = reduction ratio (drum teeth ÷ motor teeth = 60 ÷ 10 = 6)
- $\eta$ = chain efficiency (~0.85)
- $\omega_{out}, \omega_{motor}$ = drum and motor speeds

Rearranging gives the minimum ratio for the worst case:

$$G \geq \frac{\tau_{hold}}{\tau_{motor} \, \eta} = \frac{15.9}{(3.5)(0.85)} \approx 5.3$$

At **6:1**, the drive puts about **17.9 N·m** at the drum. That's 12% above the conservative 15.9 N·m worst case, and about 27% above the powder-only 14.1 N·m.

The cost is speed. Every bit of torque the reduction adds comes out of rotation speed, so the drum turns at **[FILL IN] RPM** instead of the 30 RPM I first targeted. [FILL IN: why that speed is fine for mixing.] A stepper's torque also falls as it spins faster. Keeping the motor at a moderate speed ([FILL IN: drum RPM × 6] RPM) keeps it near its rated torque.

### Chain and sprocket load

$$F = \frac{\tau_{out}}{r_{sprocket}} = \frac{17.9}{0.04} \approx 450 \text{ N}$$

- $F$ = chain tension
- $r_{sprocket}$ = pitch radius of the drum sprocket (0.04 m)

The steel chain handles 450 N easily. The 3D-printed sprockets are the weak link, so I printed them at 50% infill.

![tensioner](/images/powderTension.png)

## Result

[FILL IN: how you tested it, e.g. full powder load for X minutes.] The drive turns the fully loaded drum steadily.

<video
  src="/videos/powder-spinning.mov"
  autoPlay
  loop
  muted
  playsInline
  controls
  style="display:block; margin:1rem auto; height:40vh; width:auto; border-radius:8px;"
/>

## Takeaway

With a moving load, the average revolution doesn't break a drive; the worst one does. The drum itself is only 1 kg. What sizes everything is the 8 kg of powder sliding around inside it. Designing to the powder sitting at the drum wall, then giving up speed only as far as the torque margin allowed, is what made this work. The motor cost \$65, and the whole system came to about \$500, compared with about \$1,200 for a commercial unit.
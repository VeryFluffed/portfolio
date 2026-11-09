---
title: PICKLEBALL MACHINE
description: A pickleball launcher I'm designing with guidance from a professional engineer. Two stacked wheels fire the ball, and 3D-printed capstan cable drives (5.2:1 tilt, 6:1 sweep) aim the shooter on both axes with no backlash. I derived the capstan equation myself to size them, and a lighter, more compact shooter cuts the worst-case aiming torque from ~18 N·m on a commercial machine to ~4 N·m, small enough for a NEMA 17.
image: /images/pickleball-cad.png
alt: Pickleball Machine Project
contributions:
  [
    Capstan Cable Drive Design and Derivation,
    Aiming Torque Analysis,
    Shooter and Feeder CAD (SolidWorks),
    ESP32 Wheel Control Over Bluetooth,
  ]
buttons:
  [{ label: "CAD Files", url: "#" }]
---

## Motivation

After my mentor, a professional engineer, helped me with my RFID Jukebox, he invited me onto a bigger project: a pickleball machine. Pickleball is growing fast, but good ball machines are expensive [FILL IN: typical price]. [FILL IN: one line on what's missing from cheaper machines, if you want it.]

I played tennis for three years, so I know what a good machine has to do. It can't just throw balls. It has to put them in different places on the court, quickly and repeatably. That made the aiming drive the part I cared about most, and the part this page focuses on.

![Assembly](/images/pickleball-cad.png)

## How It Works

- **Hopper and dispenser:** balls sit in a hopper above a rotating four-slot wheel. A low-RPM motor turns the wheel to drop one ball at a time into a chute.
- **Shooter:** the chute feeds the ball between two stacked wheels spinning in opposite directions. Their speed sets how hard the ball leaves. A speed difference between the top and bottom wheels adds topspin or backspin.
- **Aiming:** two capstan cable drives, each driven by a NEMA 17 stepper, aim the shooter. One tilts it up and down, and the other swings it across the court. The design targets a **110° sweep** at up to **55°/s**.

![Dispenser Sketch](/images/pickleball-dispenser.jpg)

## How Far the Shooter Has to Sweep

Before sizing any drive, I needed to know how far the shooter actually has to turn. A ball machine should be able to put a ball anywhere across the court, and the hardest targets are the two points where the net meets the sidelines. They're the widest targets and the closest ones.

Seen from above, with the machine centered on the court, the machine, the middle of the net, and one sideline post form a right triangle:

$$\tan\left(\frac{\theta}{2}\right) = \frac{W/2}{d} \quad\Rightarrow\quad \theta_{max} = 2\arctan\left(\frac{W}{2d}\right)$$

- $\theta_{max}$ = total sweep needed to reach both sidelines at the net
- $W$ = court width (20 ft)
- $d$ = distance from the machine to the net

The closer the machine sits to the net, the wider it has to swing:

| Machine position | $d$ | $\theta_{max}$ |
| ---------------- | --- | -------------- |
| Baseline | 22 ft | 48.9° |
| Mid-court | 15 ft | 67.4° |
| Kitchen line | 7 ft | 110.0° |

The closest sensible place to set the machine is the kitchen (non-volley zone) line, 7 ft from the net:

$$\theta_{max} = 2\arctan\left(\frac{10}{7}\right) \approx 110°$$

Designing for **110°** means the machine can reach both sidelines from anywhere on its half of the court, from the kitchen line back to the baseline. That number became the travel requirement for the sweep drive.

![Sweep Angle Geometry](/images/pickleball-sweep.svg)

## Choosing the Drive: Gears vs. Rope

Gears were the obvious first choice, but for aiming they come with problems:

- **Backlash.** The gap between meshing teeth means the shooter can wobble a little in place, so aim is never exact.
- **Cost and wear.** Good gears are expensive, and printed gears wear down quickly.
- **Noise.**

A capstan drive replaces the teeth with a cable wrapped around a small motor-driven capstan and anchored to a larger drum. The cable is cheap, quiet, and has no backlash, because there's no gap to take up.

I also sketched a swivel base and a **cycloidal drive**. The cycloidal drive is very compact but slow, and changing the aim quickly matters for a ball machine. I went with capstan drives on both axes.

## The Capstan Equation

A cable drive only works if the cable doesn't slip on the capstan. To understand when it slips, I derived the capstan equation from a force balance on a tiny piece of cable wrapped around the capstan.

![Capstan Derivation](/images/pickleball-capstan-derivation.jpg)

For a small slice of wrap angle $d\theta$, the cable's tension changes from $T$ to $T + dT$. Friction makes up the difference, and the normal force from the capstan is what creates that friction. For small angles, $\sin(d\theta/2) \approx d\theta/2$ and $\cos(d\theta/2) \approx 1$, so the force balance reduces to:

$$\frac{dT}{T} = \mu \, d\theta$$

Integrating over the full wrap gives:

$$T_{tight} = T_{slack} \, e^{\mu \varphi}$$

- $T_{tight}$ = tension on the loaded side of the cable
- $T_{slack}$ = tension on the other side
- $\mu$ = coefficient of friction between cable and capstan (~0.3)
- $\varphi$ = total wrap angle in radians

The key is that grip grows **exponentially** with wrap angle. With $\mu = 0.3$ and two full wraps ($\varphi = 4\pi$):

$$e^{(0.3)(4\pi)} \approx 43$$

So the tight side can carry **43×** the tension on the slack side before the cable slips. A small preload on the slack side holds a large working load. Adding a wrap is much cheaper than adding friction, so I wrapped twice and cut grooves into the capstan to keep the turns from riding over each other.

The geometry matters too. When the cable wraps fully around the capstan and leaves level, all of the tension goes into grip. When it leaves at an angle, the wrap angle shrinks and the cable pulls the capstan sideways.

![Wrap Angle Notes](/images/pickleball-wrap-angle.jpg)

## How Much Torque Aiming Takes

The worst case for tilting the shooter is when its weight acts at 90° to the arm:

$$\tau_{max} = m g d \sin\theta, \qquad \theta = 90°$$

- $\tau_{max}$ = worst-case torque at the tilt axis
- $m$ = mass of the moving shooter assembly
- $g$ = gravitational acceleration (9.81 m/s²)
- $d$ = distance from the pivot to the shooter's center of mass
- $\theta$ = angle between the arm and gravity

I compared my layout against the Titan, a commercial ball machine that tilts a heavier shooter on a longer arm:

| Layout | $m$ | $d$ | $\tau_{max}$ |
| ------ | --- | --- | ------------ |
| Titan (commercial) | 6 kg | 0.3 m | ~18 N·m |
| My layout | 2 kg | 0.2 m | ~4 N·m |

Keeping the moving mass light and close to the pivot cuts the worst-case aiming torque by about **4.5×**. That's the biggest lever in the whole design: every N·m saved here means a smaller motor, a smaller drive, and faster aiming.

![Tilt Sizing Notes](/images/pickleball-tilt-sizing.jpg)

The capstan drive's reduction comes from the ratio of drum radius to capstan radius:

$$G = \frac{R_{drum}}{r_{capstan}}, \qquad \tau_{motor} = \frac{\tau_{max}}{G}$$

- $G$ = reduction ratio
- $R_{drum}$ = radius of the drum the cable is anchored to
- $r_{capstan}$ = radius of the grooved capstan on the motor (2.5 cm on both axes)
- $\tau_{motor}$ = torque the motor must supply

![Capstan](/images/pickleball-capstan.png)

| Axis | $R_{drum}$ | $r_{capstan}$ | $G$ |
| ---- | ---------- | ------------- | --- |
| Tilt | 12.94 cm | 2.5 cm | 5.2:1 |
| Sweep | 15 cm | 2.5 cm | 6:1 |

### The tilt axis

![Tilt Drum](/images/pickleball-tilt-drum.png)

The tilt drum gives a **5.2:1 reduction**, so at the worst-case angle the tilt motor needs:

$$\tau_{motor} = \frac{3.9}{5.18} \approx 0.76 \text{ N·m}$$

[FILL IN: your NEMA 17's rated holding torque, and the margin over 0.76 N·m.]

The two halves of the analysis connect here. At the drum, the cable carries:

$$T_{tight} = \frac{\tau_{max}}{R_{drum}} = \frac{3.9}{0.1294} \approx 30 \text{ N}$$

With 43× grip from two wraps, the slack side only needs about **0.7 N** of preload to keep the cable from slipping. A light spring or a hand-tightened anchor is plenty.

### The sweep axis

![Sweep Drum](/images/pickleball-sweep-drum.png)

The sweep drum is larger, for a **6:1 reduction**. It turns about a vertical axis, so gravity doesn't load it. The motor only fights inertia and friction. Speed is the check that matters there. At 55°/s at the shooter:

$$\omega_{motor} = G \, \omega_{out} = 6 \times 55°/\text{s} = 330°/\text{s} \approx 55 \text{ RPM}$$

That's slow and easy for a stepper. Over the full 110° sweep, the drum's edge pays out about 29 cm of cable, which is about 1.8 turns of the capstan. The capstan has more than enough grooves for that plus the two wraps of grip.

## Electronics (In Progress)

So far I've wired the two shooter-wheel motors to an **L298N dual H-bridge** driven by an **ESP32**. From my phone, the nRF Connect app sends commands over Bluetooth to set each wheel's speed and direction independently. That's enough to test launch speed, and to test spin by running the wheels at different speeds.

| ESP32 Pin     | L298N Pin | Function            |
| ------------- | --------- | ------------------- |
| GPIO 18 / 19  | IN1 / IN2 | Motor A direction   |
| GPIO 21 / 22  | IN3 / IN4 | Motor B direction   |
| GPIO 25 (PWM) | ENA       | Motor A speed       |
| GPIO 26 (PWM) | ENB       | Motor B speed       |

## Next Steps

- Print and assemble the capstan drive, then measure its backlash and slip under load.
- Wire the aiming and dispenser motors into the ESP32 alongside the wheels.
- Add an encoder to the shooter wheels for closed-loop speed control, so launch speed stays consistent when a ball hits the wheels.
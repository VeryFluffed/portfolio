---
title: PICKLEBALL MACHINE
description: My current engineering project focuses on building a fully automated pickleball launcher. I programmed an ESP32 to act as the dual-motor controller for the machine and began modeling the capstan drive system to replace traditional gears. This project combines embedded programming, applied physics, and mechanical engineering principles to design a system capable of delivering consistent, adjustable shots for practice.
image: /images/pickleball.webp
alt: Pickleball Machine Project
contributions:
  [
    ESP32 Programming for Dual-Motor Control,
    Capstan Drive Mathematical Modeling,
    CAD Modeling of Mechanical Components,
    Circuit Design for Motor Drivers,
    Embedded Hardware/Software Integration,
  ]
buttons:
  [{ label: "Testing Results", url: "#" }, { label: "CAD Files", url: "#" }]
---

## Motivation

Pickleball is one of the fastest-growing sports, but affordable and effective training equipment is limited. This is exactly what my mentor said. After he helped me with my RFID Jukebox, teaching me the basics, he invited me to start on a new project. I wanted to apply my engineering knowledge to design a machine that could not only throw balls consistently but also be adaptable for different speeds and spins. As a tennis player, I knew how important a competitive machine would be for the pickleball community. By combining motor control, mechanics, and math modeling, I'm developing a practical system with both recreational and competitive training applications.

## Electrical & Control System

At the heart of the system is the ESP32-WROOM module, chosen for its built-in Bluetooth (for wireless control) and dual-core processor (for multitasking between motor control and communication). To drive the motors, I used the L298N Dual H-Bridge Motor Driver, which allows independent forward/reverse and speed control of two DC motors.

**Why ESP32?**

It is small, powerful, and easy to integrate with wireless controls for a future mobile app.

**Why L298N?**

It handles higher current (up to ~2A per channel with heat sinking), perfect for driving the dual launch wheels.

Each motor has two direction pins and one enable pin (PWM). By combining HIGH/LOW logic on the direction pins and sending a PWM duty cycle to the enable pin, I can control both the rotation direction and speed of each motor independently.

| ESP32 Pin         | L298N Pin | Function            |
| ----------------- | --------- | ------------------- |
| GPIO 18           | IN1       | Motor A Direction 1 |
| GPIO 19           | IN2       | Motor A Direction 2 |
| GPIO 21           | IN3       | Motor B Direction 1 |
| GPIO 22           | IN4       | Motor B Direction 2 |
| GPIO 25 (PWM)     | ENA       | Motor A Speed (PWM) |
| GPIO 26 (PWM)     | ENB       | Motor B Speed (PWM) |
| 5V                | +5V       | Logic Power         |
| GND               | GND       | Shared Ground       |
| VIN / Ext. Supply | +12V      | Motor Power         |

This framework gives me full independent control over both wheels, which is crucial for adjusting ball speed and spin. By changing the PWM duty cycle, I can fine-tune launch velocity; by offsetting the motor speeds, I can generate topspin, backspin, or sidespin.

## Mechanical Design & Capstan Drive

The capstan (or friction) drive is ideal for a ball launcher because it uses wrap angle and surface friction to transmit torque to a rope/belt or directly to a wheel surface with minimal backlash. Below is a practical, engineering-focused breakdown: the key equations, worked numeric examples, and clear rules for design optimization (what to increase vs. decrease) plus prototyping tips.

### 1. Core capstan equation

The capstan (friction) equation describes how tension is amplified around a wrapped drum:

```
T_out = T_in * e^(μ * θ)

Where:
  - T_out = higher tension side (after wrap)
  - T_in  = lower tension side (before wrap)
  - μ     = coefficient of friction (unitless)
  - θ     = wrap angle in radians (e.g. 180° = π rad)
```

Interpretation: increasing either the friction coefficient (μ) or the wrap angle (θ) increases transmitted tension exponentially, which helps eliminate slip without oversizing motors.

### 2. From tension → torque → rim speed

If the capstan provides a tangential force _F_ to a wheel of radius _r_:

```
τ = F * r          (torque)
v = ω * r          (linear rim speed)
ω = 2π * RPM / 60  (convert RPM to rad/s)
P = τ * ω = F * v  (power)
```

If the rim speed ≈ ball exit speed (good grip assumption), then choosing rim radius sets the RPM needed for a target ball speed.

### 3. Worked example (numeric)

Design target: ball exit speed **v_ball = 12 m/s**, wheel radius **r = 0.06 m**.

```
ω = v / r = 12 / 0.06 = 200 rad/s
RPM = ω * 60 / (2π) ≈ 1910 RPM

Assume conservative tangential force F = 8 N (depends on desired acceleration)
τ = F * r = 8 * 0.06 = 0.48 N·m
P = F * v = 8 * 12 = 96 W (instantaneous power during launch)
Energy per shot (pickleball mass ≈ 0.025 kg):
E = 0.5 * m * v^2 = 0.5 * 0.025 * 12^2 = 1.8 J
If firing at 0.2 Hz (1 shot every 5 s), average power ≈ 0.36 W (peak >> average)
```

**Insight:** average power is tiny for low shot rates, but motors must supply peak torque and handle rapid acceleration without dropping RPM.

### 4. How the capstan equation helps

Example: μ = 0.5 (rubber-on-rubber), wrap θ = 180° = π rad → amplification factor = `e^(0.5 * π)` ≈ 4.8. That means a small preload tension T_in becomes ~4.8× larger on the driven side, reducing slip dramatically.

Use pre-tensioning, grippy surfaces, and larger wrap angles to achieve reliable traction without oversizing the motor for torque.

### 5. Practical trade-offs — what to increase vs. decrease

**Increase (good)**

- Wrap angle (θ): aim for ≥ 180°; 270° is even better.
- Friction coefficient (μ): use rubber/polyurethane wheel covers.
- Preload/tension: spring-loaded idler to maintain contact force.
- Contact width: wider contact reduces local wear and improves repeatability.
- Wheel radius (where practical): increases rim linear speed for lower RPM (but increases inertia).

**Decrease / avoid (bad)**

- Slip: leads to inconsistent exit velocity — mitigate with wrap & preload.
- Excess compliance/stretch in belts: causes lost energy and poor repeatability.
- Too-small drum radius if targeting high rim speed — motor RPM becomes impractical.
- Overly soft covers that deform too much, reducing effective linear speed.

### 6. Control & sensing recommendations

Use an encoder on at least one wheel for closed-loop speed control (PID). The ESP32 can run a PID loop: measure RPM, compute error against target, update PWM duty cycle to maintain rim speed under load (when ball contacts wheel). For high repeatability, calibrate the feed-forward term to reduce large initial errors at launch.

- Motor encoder or hall-effect sensor for wheel RPM measurement
- Current sensing on motor supply to detect stalls or jams
- Spring-loaded idler with a travel-stop to prevent over-compression

### 7. Prototyping tips & common pitfalls

- **Start slow:** validate grip at low RPM before increasing speed.
- **Measure slip:** compare rim RPM to recorded ball exit speed (photogate or high-speed video).
- **Tensioner:** implement a small spring-loaded idler as early as possible — it fixes many grip issues.
- **Thermal:** friction surfaces heat over long runs — choose adhesives and materials rated for the temp range.
- **Safety:** include e-stop and current-limiting fuses for the motor supply.
- **Test variants:** try different cover durometers, wrap angles, and cord materials to find the best tradeoff.

### 8. Quick parameter reference

| Parameter                | Recommended Range / Notes                            |
| ------------------------ | ---------------------------------------------------- |
| Wrap angle (θ)           | ≥ 180° (π rad); 180–270° recommended                 |
| Friction coefficient (μ) | ~0.3–0.6 for rubber; higher μ increases grip         |
| Wheel radius (r)         | 0.04–0.08 m typical for hobby systems                |
| Typical RPM target       | 1k–4k RPM depending on r and v_target                |
| Motor power (peak)       | 50–300 W depending on speed & throughput             |
| Tensioner                | Spring-loaded idler recommended for constant preload |

### 9. Next steps / experiment plan

1. Prototype single-wheel capstan with encoder and measure slip at several RPMs and preload settings.
2. Test different cover materials (PU, rubber) and measure μ empirically using simple tension test.
3. Add spring-loaded idler and re-measure repeatability across 50+ launches.
4. Implement closed-loop speed control (ESP32 PID) and tune for minimal overshoot on launch.
5. Scale to dual-wheel pinch configuration and measure spin control (topspin/backspin) by differential speeds.

## Conclusion

The capstan drive gives a high degree of traction and repeatability when the wrap angle, friction surface, and preload are chosen well. The key design levers are wrap angle, surface friction, wheel radius, and closed-loop control. Focus on eliminating slip with preload and encoder-based closed-loop control — that delivers the most consistent, high-performance results for a pickleball launcher.

## Next Steps

I plan to refine the CAD model, build a working prototype of the dual-motor launch system, and integrate a feeding mechanism to automate ball loading. Future upgrades include 3D printing custom housings, testing different cord materials for the capstan drive, and implementing a Bluetooth app interface for real-time control.

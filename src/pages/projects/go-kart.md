---
title: ELECTRIC GO-KART
description: A 4-person team turned a friend's old steel bed frame into an electric go-kart on a ~$1.2k budget. It hit 15 mph carrying a 200+ lb rider on a 48 V LiFePO₄ pack. The drivetrain and electrical system held up, but the frame didn't, and rebuilding it welded is the next version.
image: /images/project.webp
alt: Go-Kart Project
collaborators: [Aiden Tran, Jayden Thieu, Nathan Pham]
contributions:
  [
    Project lead and budget management,
    48 V electrical system design and wiring,
    Drivetrain and chain alignment,
    Frame fabrication (cut and bolted steel),
    Troubleshooting checklists,
  ]
---

## Motivation

It started as a joke: a rideable Minecraft pig that only moves when you dangle a carrot on a stick in front of it. A friend was throwing out an old steel bed frame, and I wanted to build something on it. Once I recruited friends, the idea grew into a full go-kart.

I quit tennis after three years of high school and got a job to pay for parts. I wanted to see whether what I was learning in physics and circuits would hold up once real current and real weight were involved.

![bedframe](/images/bedframe.webp)

## System Breakdown

We split the kart into three systems:

- **Chassis:** the bed frame, cut down and reinforced
- **Drivetrain:** motor sprocket, chain, and axle sprocket on bearings
- **Electrical:** battery pack, motor controller, motor, wiring, and fusing

![kartsketch](/images/kartsketch.webp)

![kartsketch2](/images/kartsketch2.webp)

## Electrical System

This was my part of the build, and my favorite.

**Battery.** We used four 12 V LiFePO₄ batteries. As high schoolers, we picked LiFePO₄ because it's lighter than lead-acid, lasts far more charge cycles, and is much more forgiving thermally than other lithium chemistries. We wired them in **series**:

$$V_{total} = 4 \times 12 \text{ V} = 48 \text{ V}$$

![batteries](/images/batteries.webp)

**Why 48 V.** For the same power, higher voltage means lower current:

$$I = \frac{P}{V}, \qquad P_{loss} = I^2 R$$

- $I$ = current
- $P$ = motor power
- $V$ = pack voltage
- $P_{loss}$ = heat lost in the wiring
- $R$ = wire and connection resistance

Resistive loss grows with the *square* of current, so halving the current cuts wiring heat by 4×. With our **1,600 W** motor at 48 V, full-throttle current is about **33 A**. At 24 V it would have been about 67 A, with four times the heating in the same wires.

**Wiring and protection.** That 33 A figure set our wire gauge ([FILL IN] AWG) and inline fuse ([FILL IN] A). I led the wiring and crimped every connection with proper terminals instead of twisting and taping. A loose, high-resistance joint at 33 A becomes a hot spot:

$$V_{drop} = IR$$

- $V_{drop}$ = voltage lost across the connection

## Drivetrain

The motor drives the rear axle through a chain. [FILL IN: sprocket tooth counts, motor RPM, wheel diameter.] The predicted top speed is:

$$v = \frac{\omega_{motor}}{G} \, r_{wheel}$$

- $v$ = kart speed
- $\omega_{motor}$ = motor speed (rad/s)
- $G$ = sprocket ratio (axle teeth ÷ motor teeth)
- $r_{wheel}$ = wheel radius

That predicts [FILL IN] mph, compared with the **15 mph** we measured. [FILL IN: one line on the gap, e.g. rider weight, rolling resistance, battery sag.]

## Frame and Fabrication

None of us had welded, so we sketched the frame, cut the galvanized square steel with an angle grinder, and **bolted** it together, reinforcing corners and load-bearing joints. Working in steel taught us quickly how much alignment and tolerance matter.

## What Broke

A lot:

- **Chains derailing:** fixed by realigning the sprockets and adding a tension check
- **Wires overheating:** fixed with [FILL IN: heavier gauge / better crimps]
- **Frame flexing:** not fixed

The drivetrain and electrical system eventually held up. **The frame was the real limit.** Under the motor's torque, the bolted galvanized tubing kept bending. Bolted joints in thin tube just can't carry that load the way welded joints can.

To keep us moving, we made a pre-run checklist for wiring, chain alignment, and battery health. It turned random failures into ones we could catch before driving.

## Leading on a Budget

I managed the budget, split up the work, and made sure everyone learned each system, not just their own piece. We stayed around \$1.2k by buying secondhand parts and negotiating prices.

## Next Version

We're rebuilding the frame **welded** from heavier tube, keeping the same 48 V electrical design, and cleaning up wire routing. [FILL IN: timeline, e.g. "next summer."]
---
title: AUTOMATED POWDER BLENDER
description: A USC researcher gave me a powder blender, and he asked me to motorize it because he wanted to save money. Thus, I was tasked with engineering a motorized drive system capable of rotating a ~9 kg loaded drum at around 30 RPM. This project includes calculating chain drive transmissions and uses a custom 3D-printed housing, ultimately saving at least $600.
image: /images/powderblender.png
alt: Automated Powder Blender
contributions:
  [
    CAD Modeling of Mechanical Components,
    Physical Testing,
    Torque Analysis,
    Electrical Wiring,
  ]
buttons:
  [{ label: "CAD Files", url: "#" }]
---

## Motivation

Commercial motorized powder blenders can cost upwards of \$1200, largely due to integrated drive systems and safety enclosures. To reduce cost while maintaining functionality, a close USC researcher bought a \$400 manual rotary blender and asked me to motorize it. It was also a great learning opportunity for me to learn chain drive transmissions, helping me become a knowledgeable and reliable engineer.

## System Architecture

### Physical

I decided to design a chain drive transmission to power the motorized blender machine. A chain drive transmission tends to need a tensioner, so these are what I need:

- **Housing:** Holds all electrical and physical components
- **Sprockets:** Mounted on the motor and the rod of the drum to attach to the chain
- **Bearing:** Acts as a simple tensioner

![physicalComponents](/images/powderPhysical.png)

### Electrical

The electrical architecture is very simple. Because its only task is to turn a motor on and off, we only need:

- **24V DC gearmotor (30 RPM rated):** Spins the chain at 30 RPM
- **DC Motor Driver:** Controls the power and speed of the motor
- **24V Power Supply Adapter:** Converts 100–240 V from the outlet to 24 V

![electricalComponents](/images/powderElectrical.png)

## Physics of Rotation

To model the torque required, I had to find the mass of the drum with powder, which is about 9 kg. The effective radius of rotation (drum center to mass center) is about 0.18 m, and the target is 30 RPM. Because the powder shifts dynamically, the system behaves closer to an unbalanced rotating mass rather than a perfectly uniform cylinder. Also, I have to consider the chain efficiency of 0.85. Thus…

- $m$ = Mass = 9 kg
- $r$ = Radius = 0.18 m
- $\omega$ = Rotational speed = 30 RPM or $\pi$ rad/s
- $\eta$ = Chain efficiency = 0.85

### Inertia

We can use this to find the moment of inertia using the equation: 

$$I = \frac{1}{2}mr^2$$

After plugging in the variables, we get…

$$I = \frac{1}{2}(9)(0.18^2) = 0.1458 \text{ kg·m}^2$$

This represents the resistance of the drum to angular acceleration. Next, we can convert the rotational speed to rotational acceleration. Assuming the drum reaches full speed in ~2 seconds:

$$\alpha = \frac{\omega}{t} = \frac{3.14}{2} = 1.57 \text{ rad/s}^2$$

Using this, we can find the torque needed to spin the drum.

$$\tau_{accel} = I\alpha$$
 
$$\tau_{accel} = (0.1458)(1.57) \approx 0.23 \text{ N·m}$$

This is relatively small, so it is good to know that startup inertia is not a limiting factor.

I wanted to test if this was true or not, so I got a motor that produced a ~0.6 N · m torque and used a 1:1 chain drive reduction system to keep the listed 30 RPM (this means that the sprocket on the motor and the rod have the same number of teeth, thus not amplifying the torque and maintaining the speed), and it was able to spin the blender perfectly.

<video
  src="/videos/powder-spinning.mov"
  autoPlay
  loop
  muted
  playsInline
  controls
  style="display:block; margin:1rem auto; height:40vh; width:auto; border-radius:8px;"
/>

### Potential Future Designs

For future designs, here are some other topics I did not cover because of the unexpected initial success. If I were to create another one in industry standards, I would have other concerns, mainly the powder redistribution inside the drum, which creates a shifting center of mass. I thought I would have to. In the worst case, the mass behaves as if offset from the axis:

$$\tau = mgr$$
 
$$\tau = (9)(9.81)(0.18) \approx 15.9 \text{ N·m}$$

Applying a safety factor (accounting for friction, inefficiencies, and dynamic imbalance), I’ll say:

$$\tau_{required} \approx 20 - 25 \text{ N·m}$$

This is the critical design constraint. To meet torque requirements, I would have theoretically applied a chain drive reduction system.

### Gear Ratio

- Motor sprocket: ~12 teeth
- Drum sprocket: ~60 teeth


This made the gear ratio 5:1, meaning that I would be able to amplify the torque needed by 5 times at the cost of reducing the speed.

$$T_{out} = T_{motor} \times \text{Gear Ratio} \times \eta$$

Because we have the torque required, gear ratio, and efficiency…

$$T_{out} = T_{motor} \times \text{Gear Ratio} \times \eta$$

The torque required from the motor will be ~5.88 N · m to 4.71 N · m. If we wanted to keep the speed at 30 RPM, we would need to find a motor that can spin 150 RPM because of the gear ratio, reducing the speed by a factor of 5.

$$\omega_{out} = \frac{\omega_{motor}}{\text{Gear Ratio}} = \frac{150}{5} = 30 \text{ RPM}$$

This means I would have gotten a 150 RPM-rated motor with ~20 to 25N*m of torque. Although much more expensive, it would still fit under the $800 gap between the motorized powder blender and a manual powder blender.

### Tension and Load

The chain transmits force based on torque. It can be calculated by…

$$F = \frac{\tau}{r_{sprocket}}$$

Because the sprocket radius is 0.04m

$$F = \frac{20}{0.04} = 500 \text{ N}$$

This means that the chain and the sprocket will experience a force of 500N. The chain is metal and will be able to handle the force fine, but the sprocket is 3D printed. So, I made it 50% infill to be stronger. 

![tensioner](/images/powderTension.png)

## Conclusion

I found this project to be particularly successful because I was able to save real money by modifying a manual powder blender into a motorized one. I applied fundamental principles of rotational dynamics, torque analysis, and mechanical power transmission to design a system that meets real-world performance requirements while saving money. I was able to learn a ton of theoretical chain transmission ideas, but I also find that ideal physics rarely ever governs real systems. Initial calculations suggested very high torque requirements for acceleration, the dominant factor being the gravitational imbalance from shifting power. However, when I tested it, it worked very well. It really strengthened my chain drive design, such as functional 3D-printed components that can withstand real mechanical loads. On a broader perspective, I was able to demonstrate how engineering can create cost-effective solutions without sacrificing performance, ultimately replicating the functionality of a \$1200 system for about \$500, saving \$700.
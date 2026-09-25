---
title: ACOUSTIC ATTENUATION DEVICE
description: A 3D-printed, support-free baffle suppressor for a Glock airsoft replica, designed from compressible-flow and wave-physics first principles. In a 12-shot A/B test it cut the measured sound level by 3.9 dB, about 59% less acoustic intensity, with the whole part printing in ABS with zero supports.
image: /images/acoustic.png
alt: Acoustic Attenuation Device Project
collaborators: [Thomas Vu]
contributions:
  [
    Expansion-volume and chamber-count modeling,
    Baffle and chamber geometry,
    Support-free print design (45° overhang limit),
    A/B acoustic testing and data analysis,
  ]
buttons:
  [{ label: "CAD Files", url: "https://drive.google.com/drive/folders/1OsKyjXnB9v2AB9BeqtNgJKADfKizzOq_?usp=drive_link" }]
---

## Motivation
 
After a few too many rounds of Ready or Not, my friend Thomas started upgrading his airsoft replicas and pulled me in. He's a civil engineering student who works with water systems, so he came at it from fluid flow; I came at it from mechanical design. Thomas owned the gas flow analysis and testing. I owned the CAD, print design, and materials testing.
 
What hooked me was that this wasn't a structures problem. Most of my builds are about forces and motion. This one was about pressure, wave propagation, and where energy goes when you stop it from leaving all at once. I wanted to see how far lecture-level thermodynamics could actually get us before we had to guess.
 
## Where the Noise Comes From
 
When the replica fires, gas trapped in the barrel at high pressure suddenly meets the open atmosphere and expands. For a fast expansion with little time for heat transfer, the gas follows the adiabatic relation:
 
$$PV^\gamma = \text{constant}$$
 
- $P$ = gas pressure
- $V$ = gas volume
- $\gamma$ = heat capacity ratio (~1.4 for air)
That sudden pressure drop at the muzzle launches a sharp pressure wave: the "pop." The energy available to make that pop is the internal energy of the compressed gas:
 
$$E = \frac{PV}{\gamma - 1}$$
 
- $E$ = internal energy of the gas
A suppressor can't make that energy disappear. What it can do is **spread the release out in time**, so the same energy leaves as a longer, lower-amplitude pulse instead of one sharp spike. Every decision below comes back to one goal: lower the peak pressure at the exit.
 
## Traditional vs. Flow-Through Baffles
 
There are two main architectures. A **traditional baffle** stack traps gas in a series of chambers and lets it bleed out. A **flow-through** design routes gas along longer internal paths to slow it down without trapping it.
 
![Suppressor Designs](/images/suppressor-designs.png)
 
Flow-through designs have less backpressure and heat buildup, but more gas leaves per unit time, so they're usually louder. Traditional baffles are quieter; the cost is backpressure. Trapped gas churns in each chamber, and that turbulence dissipates energy as heat. On a real firearm, that heat and blowback is a serious problem. On an airsoft replica the gas energy is small, so the downside barely matters. We went with traditional baffles.
 
## Why Quarter-Wave Tuning Didn't Fit
 
My first plan was to tune the chamber length to cancel the dominant frequency. A chamber about a quarter-wavelength long reflects a wave back 180° out of phase, so it destructively interferes with itself:
 
$$L_c \approx \frac{\lambda}{4}, \qquad \lambda = \frac{c}{f}$$
 
- $L_c$ = chamber length
- $\lambda$ = wavelength of the dominant tone
- $c$ = speed of sound (~343 m/s)
- $f$ = dominant frequency
Our replica's dominant frequency is about 330 Hz. That gives $\lambda \approx 1.04$ m and $L_c \approx 26$ cm, which is longer than the entire replica.
 
![Chamber Spacing](/images/chamber-length.png)
 
So pure quarter-wave tuning was never going to work at this scale. Low frequencies have long wavelengths, and a pistol-sized suppressor can't be long enough to cancel them. That pushed us to design around **expansion volume** instead, which works at any size, and to size the chambers for the most volume that still printed cleanly. Each chamber ended up 12 mm long with 0.1mm tolerance.
 
## Expansion Volume and Chamber Count
 
If the gas expands adiabatically from the barrel into the suppressor's internal volume, the pressure it reaches is:
 
$$\frac{P_2}{P_1} = \left(\frac{V_1}{V_2}\right)^\gamma$$
 
- $P_1, V_1$ = pressure and volume of the gas in the barrel
- $P_2$ = pressure after expanding into the suppressor
- $V_2$ = total volume the gas can expand into (barrel + chambers)
More internal volume means a lower pressure by the time the gas reaches the exit, and a weaker pop. There are two ways to add volume:
 
- **Diameter.** Chamber volume scales with $D^2$, so diameter is the most efficient lever. It also lowers exit velocity, which reduces turbulent noise. The limit is that a fat suppressor looks and handles wrong on a pistol replica.
- **Chamber count.** Each added chamber adds volume, but with diminishing returns: the first few do most of the work, and the gains flatten out around 6–8. We used **10 chambers**. That was where the benefits of having more chambers lowered significantly.

![Chamber Length](/images/chamber-total-length.png)
 
![Chamber Diameter](/images/chamber-diameter.png)
 
The cost of each extra chamber is length and weight hanging off the front of the replica, which matters for handling in a game.
 
## Designing for a Support-Free Print
 
Baffle angle is a trade-off. A steeper baffle redirects more gas into each chamber and dissipates more energy; a shallower one gives smoother flow and less backpressure. Most designs sit between 30° and 60°.
 
**45°** satisfies both constraints at once. It's in the middle of that range, and it's the steepest overhang an FDM printer can handle cleanly without supports. That second part matters more than it sounds. Supports inside a baffle stack are nearly impossible to remove, and the scars they leave roughen the baffle faces. A rough surface trips the boundary layer into turbulence earlier, which adds broadband noise. A support-free print keeps the internal surfaces clean without post-processing.
 
![Baffle Angle (45°)](/images/baffle-angle.png)
 
Other print decisions:
 
- **Material: ABS.** Tougher and more heat-tolerant than PLA, and it survives drops and knocks in the field.
- **Wall: 1.6 mm** (four perimeters on a 0.4 mm nozzle) at **100% infill.** The part is small, so full infill barely adds print time.
- **Threads: ±0.2 mm tolerance** so it screws onto the replica without binding.
- **Bore clearance:** the center hole through each baffle is 6.1 mm, leaving 0.1 mm around the 6 mm BB so the projectile never clips a baffle.
![Half Section](/images/half-can.png)
 
## Results
 
We fired 12 shots with the device and 12 without, measuring peak sound level with [FILL IN: microphone/app] at 1 inch away.
 
| Condition      | Mean (dB) | Std. dev. (dB) | n   |
| -------------- | --------- | -------------- | --- |
| Without device | 83.2      | 1.5            | 12  |
| With device    | 79.4      | 2.3            | 12  |
 
![Noise Results](/images/accoustic-stats.png)
 
The difference is **3.9 dB**, and it's statistically solid (Welch's t-test, p < 0.001). Because decibels are logarithmic, "how much quieter" depends on what you measure:
 
$$\text{Reduction} = 1 - 10^{-\Delta L / 10}$$
 
- $\Delta L$ = drop in sound level (dB)
- **Acoustic intensity** (energy per area): $1 - 10^{-0.389} \approx$ **59% lower**
- **Pressure amplitude**: $1 - 10^{-0.389/2} \approx$ **36% lower**
- **Perceived loudness** (rule of thumb: 10 dB ≈ half as loud): about **24% quieter**
The device is doing real physical work, cutting the energy in the pop by more than half. To a listener, it sounds noticeably quieter, not silent. That's about what I'd expect from a small suppressor that can't touch the low-frequency content.
 
## What I'd Do Next
 
- **Measure the spectrum, not just the level.** An FFT of the recordings would show whether the reduction comes from high frequencies (turbulence) while the ~330 Hz content passes through, which is what the quarter-wave math predicts.
- **Build the flow-through version** and run the same A/B test, so the comparison is measured instead of argued.
- **Test chamber count directly.** Print 4-, 7-, and 10-chamber versions and see whether the diminishing-returns curve actually shows up.
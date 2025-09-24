import React from "react";
import { Link } from "react-router-dom";

const Pickleball = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16">
            <Link
                to="/projects"
                className="mt-5 mb-10 inline-block text-gray-600 hover:underline text-lg"
            >
                ← Back to Projects
            </Link>
            {/* Layout: image left, content right */}
            <div className="grid md:grid-cols-2 gap-12 items-start">

                {/* Project Image */}
                <div>
                    <img
                        src="/images/pickleball.png" // replace with your go-kart image path
                        alt="Go-Kart Project"
                        className="rounded-lg shadow-lg object-cover w-full h-full"
                    />
                </div>

                {/* Project Content */}
                <div>
                    {/* Title */}
                    <h1 className="text-3xl font-bold mb-6 tracking-wide">
                        PICKLEBALL MACHINE
                    </h1>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed mb-6">
                        My current engineering project focuses on building a fully automated pickleball launcher. I
                        programmed an ESP32 to act as the dual-motor controller for the machine and began modeling the
                        capstan drive system to replace traditional gears. This project combines embedded programming,
                        applied physics, and mechanical engineering principles to design a system capable of delivering
                        consistent, adjustable shots for practice.
                    </p>

                    {/* Contributions & Collaborators */}
                    <div className="grid grid-cols-2 gap-8 mb-10">
                        <div>
                            <h3 className="text-sm font-semibold tracking-wider text-gray-500 mb-3">
                                CONTRIBUTIONS
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>ESP32 Programming for Dual-Motor Control</li>
                                <li>Capstan Drive Mathematical Modeling</li>
                                <li>CAD Modeling of Mechanical Components</li>
                                <li>Circuit Design for Motor Drivers</li>
                                <li>Embedded Hardware/Software Integration</li>
                            </ul>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="px-4 py-2 rounded bg-gray-800 text-white hover:bg-gray-700 transition"
                        >
                            Testing Results
                        </a>
                        <a
                            href="#"
                            className="px-4 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
                        >
                            CAD Files
                        </a>
                    </div>
                </div>
            </div>
            <h1 className="text-2xl font-bold mb-6 tracking-wide mt-10">
                Motivation
            </h1>
            <p className="text-gray-700 leading-relaxed mb-6">
                Pickleball is one of the fastest-growing sports, but affordable and effective training equipment is
                limited. This is exactly what my mentor said. After he helped me with my RFID Jukebox, teaching me the
                basics, he invited me to start on a new project. I wanted to apply my engineering knowledge to design a
                machine that could not only throw balls consistently but also be adaptable for different speeds and
                spins. As a tennis player, I knew how important a competitive machine would be for the pickleball
                community. By combining motor control, mechanics, and math modeling, I’m developing a practical system
                with both recreational and competitive training applications.
            </p>
            <h1 className="text-2xl font-bold mb-6 tracking-wide mt-10">
                Electrical & Control System
            </h1>
            <p className="text-gray-700 leading-relaxed mb-6">
                At the heart of the system is the ESP32-WROOM module, chosen for its built-in Bluetooth (for wireless
                control) and dual-core processor (for multitasking between motor control and communication). To drive
                the motors, I used the L298N Dual H-Bridge Motor Driver, which allows independent forward/reverse and
                speed control of two DC motors.
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
                <li className="font-bold">Why ESP32?</li>
                <p>It is small, powerful, and easy to integrate with wireless controls for a future mobile app.</p>
                <li className="font-bold">Why L298N?</li>
                <p>It handles higher current (up to ~2A per channel with heat sinking), perfect for driving the dual
                    launch wheels.</p>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
                Each motor has two direction pins and one enable pin (PWM). By combining HIGH/LOW logic on the direction
                pins and sending a PWM duty cycle to the enable pin, I can control both the rotation direction and speed
                of each motor independently.
            </p>
            <table className="table-auto border-collapse border border-gray-300 w-full text-left text-sm mb-6">
                <thead className="bg-gray-100">
                <tr>
                    <th className="border border-gray-300 px-4 py-2">ESP32 Pin</th>
                    <th className="border border-gray-300 px-4 py-2">L298N Pin</th>
                    <th className="border border-gray-300 px-4 py-2">Function</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">GPIO 18</td>
                    <td className="border border-gray-300 px-4 py-2">IN1</td>
                    <td className="border border-gray-300 px-4 py-2">Motor A Direction 1</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">GPIO 19</td>
                    <td className="border border-gray-300 px-4 py-2">IN2</td>
                    <td className="border border-gray-300 px-4 py-2">Motor A Direction 2</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">GPIO 21</td>
                    <td className="border border-gray-300 px-4 py-2">IN3</td>
                    <td className="border border-gray-300 px-4 py-2">Motor B Direction 1</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">GPIO 22</td>
                    <td className="border border-gray-300 px-4 py-2">IN4</td>
                    <td className="border border-gray-300 px-4 py-2">Motor B Direction 2</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">GPIO 25 (PWM)</td>
                    <td className="border border-gray-300 px-4 py-2">ENA</td>
                    <td className="border border-gray-300 px-4 py-2">Motor A Speed (PWM)</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">GPIO 26 (PWM)</td>
                    <td className="border border-gray-300 px-4 py-2">ENB</td>
                    <td className="border border-gray-300 px-4 py-2">Motor B Speed (PWM)</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">5V</td>
                    <td className="border border-gray-300 px-4 py-2">+5V</td>
                    <td className="border border-gray-300 px-4 py-2">Logic Power</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">GND</td>
                    <td className="border border-gray-300 px-4 py-2">GND</td>
                    <td className="border border-gray-300 px-4 py-2">Shared Ground</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 px-4 py-2">VIN / Ext. Supply</td>
                    <td className="border border-gray-300 px-4 py-2">+12V</td>
                    <td className="border border-gray-300 px-4 py-2">Motor Power</td>
                </tr>
                </tbody>
            </table>

            <p className="text-gray-700 leading-relaxed mb-6">
                This framework gives me full independent control over both wheels, which is crucial for adjusting ball
                speed and spin. By changing the PWM duty cycle, I can fine-tune launch velocity; by offsetting the motor
                speeds, I can generate topspin, backspin, or sidespin.
            </p>
            <h1 className="text-2xl font-bold mb-6 tracking-wide mt-10">
                Mechanical Design & Capstan Drive
            </h1>

            {/* Overview */}
            <div className="mb-8">
                <p className="text-gray-700 leading-relaxed">
                    The capstan (or friction) drive is ideal for a ball launcher because it uses wrap angle and surface friction
                    to transmit torque to a rope/belt or directly to a wheel surface with minimal backlash. Below is a
                    practical, engineering-focused breakdown: the key equations, worked numeric examples, and clear rules for
                    design optimization (what to increase vs. decrease) plus prototyping tips.
                </p>
            </div>

            {/* Core equation */}
            <div className="mb-8">
                <p className="font-bold">1. Core capstan equation</p>
                <p className="text-gray-700 mb-3">
                    The capstan (friction) equation describes how tension is amplified around a wrapped drum:
                </p>
                <div className="bg-gray-100 p-4 rounded mb-4">
            <pre className="whitespace-pre-wrap text-sm">
{`T_out = T_in * e^(μ * θ)

Where:
  - T_out = higher tension side (after wrap)
  - T_in  = lower tension side (before wrap)
  - μ     = coefficient of friction (unitless)
  - θ     = wrap angle in radians (e.g. 180° = π rad)
`}
            </pre>
                </div>
                <p className="text-gray-700">
                    Interpretation: increasing either the friction coefficient (μ) or the wrap angle (θ) increases transmitted
                    tension exponentially, which helps eliminate slip without oversizing motors.
                </p>
            </div>

            {/* From tension to torque & speed */}
            <div className="mb-8">
                <p className="font-bold">2. From tension → torque → rim speed</p>
                <p className="text-gray-700 mb-3">
                    If the capstan provides a tangential force <em>F</em> to a wheel of radius <em>r</em>:
                </p>
                <div className="bg-gray-100 p-4 rounded mb-4">
            <pre className="whitespace-pre-wrap text-sm">
{`τ = F * r          (torque)
v = ω * r          (linear rim speed)
ω = 2π * RPM / 60  (convert RPM to rad/s)
P = τ * ω = F * v  (power)
`}
            </pre>
                </div>
                <p className="text-gray-700">
                    If the rim speed ≈ ball exit speed (good grip assumption), then choosing rim radius sets the RPM needed for
                    a target ball speed.
                </p>
            </div>

            {/* Worked numeric example */}
            <div className="mb-8">
                <p className="font-bold">3. Worked example (numeric)</p>
                <p className="text-gray-700 mb-2">
                    Design target: ball exit speed <strong>v<sub>ball</sub> = 12 m/s</strong>, wheel radius <strong>r = 0.06 m</strong>.
                </p>
                <div className="bg-gray-100 p-4 rounded mb-4">
            <pre className="whitespace-pre-wrap text-sm">
{`ω = v / r = 12 / 0.06 = 200 rad/s
RPM = ω * 60 / (2π) ≈ 1910 RPM

Assume conservative tangential force F = 8 N (depends on desired acceleration)
τ = F * r = 8 * 0.06 = 0.48 N·m
P = F * v = 8 * 12 = 96 W (instantaneous power during launch)
Energy per shot (pickleball mass ≈ 0.025 kg):
E = 0.5 * m * v^2 = 0.5 * 0.025 * 12^2 = 1.8 J
If firing at 0.2 Hz (1 shot every 5 s), average power ≈ 0.36 W (peak >> average)
`}
            </pre>
                </div>
                <p className="text-gray-700">
                    <strong>Insight:</strong> average power is tiny for low shot rates, but motors must supply peak torque and
                    handle rapid acceleration without dropping RPM.
                </p>
            </div>

            {/* Capstan math application */}
            <div className="mb-8">
                <p className="font-bold">4. How the capstan equation helps</p>
                <p className="text-gray-700 mb-3">
                    Example: μ = 0.5 (rubber-on-rubber), wrap θ = 180° = π rad → amplification factor = <code>e^(0.5 * π)</code> ≈ 4.8.
                    That means a small preload tension T_in becomes ~4.8× larger on the driven side, reducing slip dramatically.
                </p>
                <p className="text-gray-700">
                    Use pre-tensioning, grippy surfaces, and larger wrap angles to achieve reliable traction without oversizing the
                    motor for torque.
                </p>
            </div>

            {/* Design trade-offs */}
            <div className="mb-8">
                <p className="font-bold">5. Practical trade-offs — what to increase vs. decrease</p>

                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-semibold mb-2">Increase (good)</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Wrap angle (θ): aim for ≥ 180°; 270° is even better.</li>
                            <li>Friction coefficient (μ): use rubber/polyurethane wheel covers.</li>
                            <li>Preload/tension: spring-loaded idler to maintain contact force.</li>
                            <li>Contact width: wider contact reduces local wear and improves repeatability.</li>
                            <li>Wheel radius (where practical): increases rim linear speed for lower RPM (but increases inertia).</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2">Decrease / avoid (bad)</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Slip: leads to inconsistent exit velocity — mitigate with wrap & preload.</li>
                            <li>Excess compliance/stretch in belts: causes lost energy and poor repeatability.</li>
                            <li>Too-small drum radius if targeting high rim speed — motor RPM becomes impractical.</li>
                            <li>Overly soft covers that deform too much, reducing effective linear speed.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Encoder & control recommendation */}
            <div className="mb-8">
                <p className="font-bold">6. Control & sensing recommendations</p>
                <p className="text-gray-700 mb-3">
                    Use an encoder on at least one wheel for closed-loop speed control (PID). The ESP32 can run a PID loop:
                    measure RPM, compute error against target, update PWM duty cycle to maintain rim speed under load (when ball contacts wheel).
                    For high repeatability, calibrate the feed-forward term to reduce large initial errors at launch.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Motor encoder or hall-effect sensor for wheel RPM measurement</li>
                    <li>Current sensing on motor supply to detect stalls or jams</li>
                    <li>Spring-loaded idler with a travel-stop to prevent over-compression</li>
                </ul>
            </div>

            {/* Prototyping tips */}
            <div className="mb-8">
                <p className="font-bold">7. Prototyping tips & common pitfalls</p>
                <ul className="list-disc list-inside text-gray-700">
                    <li><strong>Start slow:</strong> validate grip at low RPM before increasing speed.</li>
                    <li><strong>Measure slip:</strong> compare rim RPM to recorded ball exit speed (photogate or high-speed video).</li>
                    <li><strong>Tensioner:</strong> implement a small spring-loaded idler as early as possible — it fixes many grip issues.</li>
                    <li><strong>Thermal:</strong> friction surfaces heat over long runs — choose adhesives and materials rated for the temp range.</li>
                    <li><strong>Safety:</strong> include e-stop and current-limiting fuses for the motor supply.</li>
                    <li><strong>Test variants:</strong> try different cover durometers, wrap angles, and cord materials to find the best tradeoff.</li>
                </ul>
            </div>

            {/* Quick parameter table */}
            <div className="mb-8">
                <p className="font-bold">8. Quick parameter reference</p>
                <div className="overflow-x-auto">
                    <table className="table-auto border-collapse border border-gray-300 w-full text-left text-sm">
                        <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">Parameter</th>
                            <th className="border border-gray-300 px-4 py-2">Recommended Range / Notes</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">Wrap angle (θ)</td>
                            <td className="border border-gray-300 px-4 py-2">≥ 180° (π rad); 180–270° recommended</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">Friction coefficient (μ)</td>
                            <td className="border border-gray-300 px-4 py-2">~0.3–0.6 for rubber; higher μ increases grip</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">Wheel radius (r)</td>
                            <td className="border border-gray-300 px-4 py-2">0.04–0.08 m typical for hobby systems</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">Typical RPM target</td>
                            <td className="border border-gray-300 px-4 py-2">1k–4k RPM depending on r and v_target</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">Motor power (peak)</td>
                            <td className="border border-gray-300 px-4 py-2">50–300 W depending on speed & throughput</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">Tensioner</td>
                            <td className="border border-gray-300 px-4 py-2">Spring-loaded idler recommended for constant preload</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Next steps */}
            <div className="mb-8">
                <p className="font-bold">9. Next steps / experiment plan</p>
                <ol className="list-decimal list-inside text-gray-700">
                    <li>Prototype single-wheel capstan with encoder and measure slip at several RPMs and preload settings.</li>
                    <li>Test different cover materials (PU, rubber) and measure μ empirically using simple tension test.</li>
                    <li>Add spring-loaded idler and re-measure repeatability across 50+ launches.</li>
                    <li>Implement closed-loop speed control (ESP32 PID) and tune for minimal overshoot on launch.</li>
                    <li>Scale to dual-wheel pinch configuration and measure spin control (topspin/backspin) by differential speeds.</li>
                </ol>
            </div>

            {/* Conclusion */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold mb-6 tracking-wide mt-10">Conclusion</h1>
                <p className="text-gray-700">
                    The capstan drive gives a high degree of traction and repeatability when the wrap angle, friction surface, and
                    preload are chosen well. The key design levers are wrap angle, surface friction, wheel radius, and closed-loop
                    control. Focus on eliminating slip with preload and encoder-based closed-loop control — that delivers the most
                    consistent, high-performance results for a pickleball launcher.
                </p>
            </div>
            <h1 className="text-2xl font-bold mb-6 tracking-wide mt-10">
                Next Steps
            </h1>
            <p className="text-gray-700 leading-relaxed mb-6">
                I plan to refine the CAD model, build a working prototype of the dual-motor launch system, and integrate
                a feeding mechanism to automate ball loading. Future upgrades include 3D printing custom housings,
                testing different cord materials for the capstan drive, and implementing a Bluetooth app interface for
                real-time control.
            </p>
            <Link
                to="/projects"
                className="mt-5 mb-10 inline-block text-gray-600 hover:underline text-lg"
            >
                ← Back to Projects
            </Link>
        </section>
    );
};

export default Pickleball;

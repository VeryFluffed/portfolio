import React from "react";
import { Link } from "react-router-dom";

const GoKart = () => {
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
                        src="/images/project.jpg" // replace with your go-kart image path
                        alt="Go-Kart Project"
                        className="rounded-lg shadow-lg object-cover w-full h-full"
                    />
                </div>

                {/* Project Content */}
                <div>
                    {/* Title */}
                    <h1 className="text-3xl font-bold mb-6 tracking-wide">
                        ELECTRIC GO-KART
                    </h1>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed mb-6">
                        We engineered a fully functional electric go-kart from a repurposed
                        bed frame, integrating structural fabrication, electrical wiring,
                        and drivetrain design. I managed a ~$1.2k budget and led a 3-member
                        team through design, fabrication, and troubleshooting. We applied
                        torque and friction analysis to optimize performance and wired a
                        heavy-duty electrical system capable of handling sustained loads.
                        The kart reached 15 mph in testing, validating our drivetrain and
                        safety assumptions. This project was our first time applying
                        classroom theory to real materials like galvanized square steel,
                        which required cutting, welding, and reinforcement for load-bearing
                        applications.
                    </p>

                    {/* Contributions & Collaborators */}
                    <div className="grid grid-cols-2 gap-8 mb-10">
                        <div>
                            <h3 className="text-sm font-semibold tracking-wider text-gray-500 mb-3">
                                CONTRIBUTIONS
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>Budget Management</li>
                                <li>Team Leadership</li>
                                <li>Drivetrain Analysis</li>
                                <li>Electrical Wiring</li>
                                <li>Fabrication & Welding</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold tracking-wider text-gray-500 mb-3">
                                COLLABORATORS
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <div>
                                    <a
                                        href="https://aidentran.dev/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-black transition-colors"
                                    >
                                        Aiden Tran
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="www.linkedin.com/in/jayden-thieu-3654a3328"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-black transition-colors"
                                    >
                                        Jayden Thieu
                                    </a>
                                </div>
                                <li>Nathan Pham</li>
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
            <div className="grid grid-cols-1 md:grid-cols-[80%_20%] gap-12 items-center mt-10">

                <div>
                    <h1 className="text-2xl font-bold mb-6 tracking-wide mt-10">
                        Motivation
                    </h1>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        At first, I saw a really cool Minecraft Pig that a person could ride, and it would only start
                        moving after the person put a carrot on a stick in front of the Minecraft Pig. I quit tennis, a
                        sport I played for three years in high school, and got a job to afford materials for this
                        project. I wanted to do the same thing using my friend’s old bedframe. It was perfectly fine,
                        and they were just getting a new one. So, I thought I could repurpose it. However, as I
                        recruited some of my friends onto the project, we became more ambitious and decided to make an
                        entire go-kart instead. I wanted to learn how to connect classroom knowledge from physics and
                        electrical circuits with practical hands-on fabrication, and it was one of the best decisions I
                        ever made.
                    </p>
                </div>
                <div className="flex justify-center mb-6">
                    <img
                        src="/images/bedframe.png"
                        alt="bedframe"
                        className="rounded-lg shadow-lg object-cover max-w-sm w-full h-auto"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[60%_20%_20%] gap-12 items-center mt-10">

                <div>
                    <h1 className="text-2xl font-bold mb-6 tracking-wide mt-10">
                        The Idea
                    </h1>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        We broke the go-kart into three main systems: chassis, drivetrain, and electrical powertrain.
                        The chassis needed to be strong enough to handle weight and stress. Luckily, we had the old
                        bedframe to be our base. For the drivetrain, our team researched and found sprockets, a chain
                        system, and bearings to translate motor torque into wheel rotation. For the powertrain, we wired
                        together a motor, controller, and battery system capable of sustaining high current without
                        overheating or failing.
                    </p>
                </div>
                <div className="flex justify-center mb-6">
                    <img
                        src="/images/kartsketch.png"
                        alt="kartsketch"
                        className="rounded-lg shadow-lg object-cover max-w-sm w-full h-auto"
                    />
                </div>
                <div className="flex justify-center mb-6">
                    <img
                        src="/images/kartsketch2.png"
                        alt="kartsketch2"
                        className="rounded-lg shadow-lg object-cover max-w-sm w-full h-auto"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[80%_20%] gap-12 items-center mt-10">

                <div>
                    <h1 className="text-2xl font-bold mb-6 tracking-wide mt-10">
                        Fabrication & Welding
                    </h1>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        None of us had welded before, so learning to cut and measure. We designed the kart frame in
                        simple sketches, then cut the steel to size with an angle grinder and joined it with screws. We
                        reinforced stress points like corners and load-bearing joints. Working with steel taught us how
                        to respect tolerances, alignments, and the strength limitations of materials. With the new,
                        upcoming model, we are planning on also learning how to weld with stronger metals. There will be
                        more of this next summer when we reunite from college to work on this again.
                    </p>
                </div>
                <div className="flex justify-center mb-6">
                    <img
                        src="/images/bedframe.png"
                        alt="bedframe"
                        className="rounded-lg shadow-lg object-cover max-w-sm w-full h-auto"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[80%_20%] gap-12 items-center mt-10">

                <div>
                    <h1 className="text-2xl font-bold mb-6 tracking-wide mt-10">
                        Electrical System
                    </h1>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        The electrical system was my favorite part. The motor controller and battery pack were truly the
                        heart of the go-kart, supplying the energy and regulation needed to bring the mechanical system
                        to life. For our build, we selected four LiFePO₄ (Lithium Iron Phosphate) batteries. These were
                        the most practical options for us as high school students because they provided a safe balance
                        of affordability, energy density, and long-term reliability. Unlike traditional lead-acid
                        batteries, LiFePO₄ batteries are lighter, recharge faster, and have a much longer cycle
                        life—traits that made them ideal for a project where both performance and durability mattered.
                    </p>
                </div>
                <div className="flex justify-center mb-6">
                    <img
                        src="/images/batteries.jpg"
                        alt="bedframe"
                        className="rounded-lg shadow-lg object-cover max-w-sm w-full h-auto"
                    />
                </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
                We configured the four cells in series, which meant connecting the positive terminal of one
                battery to the negative terminal of the next. By wiring them this way, the individual voltages
                of each battery were added together to reach a total system voltage of approximately 48 volts.
            </p>
            <pre className="bg-gray-100 p-2 rounded-lg text-sm overflow-x-auto mb-6">
  <code>V_total = V₁ + V₂ + V₃ + V₄ ≈ 4 × 12V = 48V</code>
</pre>
            <p className="text-gray-700 leading-relaxed mb-6">
                The choice of a series connection was deliberate: while connecting batteries in parallel
                increases total capacity (and therefore runtime), connecting in series increases voltage, which
                is what we needed to achieve higher speeds. Since electric motors generally spin faster when
                supplied with higher voltage, this arrangement allowed the motor to reach its potential
                performance without drawing unnecessarily high current. Drawing less current for the same amount
                of power is important because lower current reduces resistive heating in the wires and
                components, which improves efficiency and reduces the chance of damage or wasted energy.
            </p>
            <pre className="bg-gray-100 p-2 rounded-lg text-sm overflow-x-auto mb-6">
  <code>P = V × I</code>
</pre>
            <pre className="bg-gray-100 p-2 rounded-lg text-sm overflow-x-auto mb-6">
  <code>P_loss = I² × R</code>
</pre>

            <p className="text-gray-700 leading-relaxed mb-6">
                To safely handle the electrical load, we used heavy-gauge wiring rated for the high currents
                that would flow through the system during acceleration. Choosing the correct wire gauge was
                critical; undersized wires could overheat, creating a fire hazard or significant voltage drop
                that would sap performance. For safety and reliability, we installed inline fuses as protective
                devices. These fuses acted as fail-safes, ensuring that if the system ever experienced a short
                circuit or an overload, the circuit would break before damaging expensive components or causing
                unsafe conditions.
            </p>
            <pre className="bg-gray-100 p-2 rounded-lg text-sm overflow-x-auto mb-6">
  <code>I = P / V</code>
</pre>
            <p className="text-gray-700 leading-relaxed mb-6">
                For example, if our motor demanded 2400W at full throttle, then with 48V we would expect roughly
                I ≈ 2400 ÷ 48 ≈ 50A. This estimate guided our wiring and fuse sizing.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
                Reliability also depended heavily on the quality of our connections. Instead of relying on
                simple twists or electrical tape, we used proper crimping tools and connectors to secure every
                joint. A poor connection can cause resistance, leading to localized heating, power loss, or even
                catastrophic failure if a wire were to come loose while the kart was in motion. Every connection
                point was carefully inspected and tested, and I personally took the lead in managing the wiring
                process. This involved not only physically running the cables and crimping the terminals but
                also applying what I had learned about Ohm’s law, resistance, and power distribution to minimize
                inefficiencies across the system.
            </p>
            <pre className="bg-gray-100 p-2 rounded-lg text-sm overflow-x-auto mb-6">
  <code>V_drop = I × R</code>
</pre>

            <p className="text-gray-700 leading-relaxed mb-6">
                Ultimately, the electrical system we designed proved to be effective, delivering stable power to
                the motor and controller while keeping safety a priority. Because of its success, we plan to
                keep much of the same design for our next-generation go-kart, which we’ll begin developing next
                summer. However, we’re also leaving room for refinement—such as improving wire management,
                exploring higher-capacity cells for longer run times, and possibly upgrading the motor
                controller to allow for finer tuning of performance. This foundation not only powered the kart
                but also powered our understanding of what it means to design a reliable, efficient, and safe
                electrical system.
            </p>

            <h1 className="text-2xl font-bold mb-6 tracking-wide mt-10">
                Troubleshooting
            </h1>
            <p className="text-gray-700 leading-relaxed mb-6">
                Failures were constant: chains derailing, wires overheating, frame flexing. Each issue forced us
                to pause, analyze, and fix. We created a checklist system for wiring tests, chain alignment, and
                battery health. The process was slow, but every fix made the kart more reliable and safe.
                However, the motor was simply too strong for the galvanized square steel, and it kept bending.
                Thus, we are planning on continuing this project next summer when all of us reunite from college
                to look at this project with a fresh pair of eyes.
            </p>

            <h1 className="text-2xl font-bold mb-6 tracking-wide mt-10">
                Troubleshooting
            </h1>
            <p className="text-gray-700 leading-relaxed mb-6">
                Failures were constant: chains derailing, wires overheating, frame flexing. Each issue forced us
                to pause, analyze, and fix. We created a checklist system for wiring tests, chain alignment, and
                battery health. The process was slow, but every fix made the kart more reliable and safe.
                However, the motor was simply too strong for the galvanized square steel, and it kept bending.
                Thus, we are planning on continuing this project next summer when all of us reunite from college
                to look at this project with a fresh pair of eyes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-12 items-center mt-10">

                <div>
                    <h1 className="text-2xl font-bold mb-6 tracking-wide mt-10">
                        Leadership & Teamwork
                    </h1>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        As project lead, I balanced managing our budget, delegating tasks, and making sure everyone
                        learned something along the way. None of us had prior experience with cutting or high-current
                        wiring, so I encouraged us to learn together by researching, testing, and documenting every
                        step. I also stretched the budget by sourcing secondhand parts and negotiating material prices,
                        which allowed us to build a competitive system for under $1.2k.
                    </p>
                </div>
                <div className="flex justify-center mb-6">
                    <img
                        src="/images/budget.png"
                        alt="budget sheets"
                        className="rounded-lg shadow-lg object-cover max-w-sm w-full h-auto"
                    />
                </div>
            </div>
            <h1 className="text-2xl font-bold mb-6 tracking-wide mt-10">
                Conclusion
            </h1>
            <p className="text-gray-700 leading-relaxed mb-6">
                This project was proof that a small team with determination and curiosity could turn scrap metal
                and spare parts into an engineered system. It tested our skills in physics, fabrication, and
                wiring while showing me how much I enjoy leading projects where technical knowledge and teamwork
                meet. Reaching 15 mph wasn’t just a win for speed—it was a milestone that showed us how far we
                could go with limited resources and unlimited determination. We will come back to this project
                next summer, and we will definitely be much better!
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

export default GoKart;

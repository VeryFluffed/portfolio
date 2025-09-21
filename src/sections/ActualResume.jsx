import React from "react";

export default function ActualResume() {
    return (
        <div className="max-w-4xl mx-auto font-serif text-black text-sm mb-12">
            {/* Download */}
            <div className="text-right mt-20">
                <a
                    href="/images/Danh_Tran_Resume.pdf"
                    download
                    className="inline-block mt-2 px-3 py-1 bg-gray-200 text-black rounded shadow hover:bg-gray-300 text-xs"
                >
                    Download Resume
                </a>
            </div>

            {/* Header */}
            <div className="text-center mb-4">
                <h1 className="text-xl font-bold">Danh Tran</h1>
                <p className="text-xs">
                    (714) 837 - 5323 |{" "}
                    <a
                        href="mailto:danhtraannc@gmail.com"
                        className="text-blue-600"
                    >
                        danhtraannc@gmail.com
                    </a>{" "}
                    | 16678 Mt. Cachuma Cir. FV
                </p>
            </div>

            {/* Summary */}
            <div className="mb-4">
                <h2 className="font-bold border-b border-black mb-1 text-sm">
                    SUMMARY
                </h2>
                <p>
                    Electromechanical engineering student aspiring to specialize in
                    mechatronics. Experienced in hands-on projects integrating
                    mechanical, electrical, and software systems. Strong leadership
                    background in team-based engineering and technical problem-solving.
                    Seeking an engineering internship to apply skills in circuit design,
                    prototyping, and embedded systems.
                </p>
            </div>

            {/* Education */}
            <div className="mb-4">
                <h2 className="font-bold border-b border-black mb-1 text-sm">
                    EDUCATION
                </h2>
                <div className="mb-2">
                    <div className="flex justify-between text-sm">
                        <p className="font-semibold">
                            California State Polytechnic University, Pomona
                        </p>
                        <p className="">August 2025 - Present</p>
                    </div>
                    <p className="italic text-sm">
                        Electromechanical Systems Engineer Freshman
                    </p>
                    <ul className="list-disc list-inside">
                        <li>GPA: 4.0/4.0</li>
                        <li>
                            Planned Coursework: Electrical Networks, Instrumentation &
                            Control, Robotics Control & Applications, Applied Statics &
                            Dynamics, Strength of Materials, Machine Elements,
                            Thermodynamics, Fluid Mechanics, Manufacturing Systems,
                            C/C++ Programming
                        </li>
                    </ul>
                </div>
            </div>

            {/* Experience */}
            <div className="mb-4">
                <h2 className="font-bold border-b border-black mb-1 text-sm">
                    EXPERIENCE
                </h2>
                <div className="mb-2">
                    <div className="flex justify-between text-sm">
                        <p className="">
                            <a className="font-semibold"> Teaching </a> | <a className="italic"> Tutoring, Lesson Planning, Communication, Curriculum
                            Design </a>
                        </p>
                        <p className="">August 2021 - May 2025</p>
                    </div>
                    <div className="flex justify-between text-sm">
                        <p className="italic">
                            Co-Teacher, Tutor, Teacher Assistant                        </p>
                        <p className="text-sm">Westminster & Santa Ana, CA</p>
                    </div>
                    <ul className="list-disc list-inside">
                        <li>
                            Tutored ~8 middle school students daily; supported ~80 students
                            over 4 years
                        </li>
                        <li>
                            Co-taught digital design for runs in Vietnam, bridging
                            English/Vietnamese communication
                        </li>
                        <li>
                            Led confirmation classes and retreats for 20+ high school
                            students
                        </li>
                    </ul>
                </div>

                <div>
                    <div className="flex justify-between text-sm">
                        <p className="">
                            <a className="font-semibold"> CyberPatriot </a> | <a className="italic"> Linux, Bash Scripting, Networking, Cybersecurity, Leadership </a>
                        </p>
                        <p className="">September 2023 - Present</p>
                    </div>
                    <div className="flex justify-between text-sm">
                        <p className="italic">
                            Coach                        </p>
                        <p className="text-sm">Westminster, CA</p>
                    </div>
                    <ul className="list-disc list-inside">
                        <li>
                            Mentored 9 teams (~54 students) national CyberPatriot competition
                        </li>
                        <li>
                            Scripted ~2k lines of Bash for Linux hardening and security
                            automation
                        </li>
                        <li>
                            Coached teams to Top 100 National Platinum Tier (twice) and grew
                            placements by 200%
                        </li>
                    </ul>
                </div>
            </div>

            {/* Projects */}
            <div className="mb-4">
                <h2 className="font-bold border-b border-black mb-1 text-sm">
                    PROJECTS
                </h2>

                <div className="mb-2">
                    <div className="flex justify-between text-sm">
                        <p className="">
                            <p className="">
                                <a className="font-semibold"> Go-Kart Engineering Project </a> | <a className="italic"> Physics/Mechanics, Wiring, Altium
                                PCB Design, Team Leadership </a>
                            </p>
                        </p>
                        <p className="">August 2024 - July 2025</p>
                    </div>
                    <div className="flex justify-between text-sm">
                        <p className="italic">
                            Team Leader                        </p>
                    </div>

                    <ul className="list-disc list-inside">
                        <li>
                            Engineered a go-kart from a repurposed bed frame; reached 15 mph
                            in testing
                        </li>
                        <li>
                            Managed ~$1.2k budget and 3-member team for design, fabrication,
                            and testing
                        </li>
                        <li>
                            Applied torque/friction analysis, drivetrain troubleshooting,
                            and electrical wiring
                        </li>
                    </ul>
                </div>

                <div className="mb-2">
                    <div className="flex justify-between text-sm">
                        <p className="">
                            <p className="">
                                <a className="font-semibold"> Pickleball Launcher Project </a> | <a className="italic"> Raspberry Pi, Circuits, Python, 3D
                                Printing, Motor Control </a>
                            </p>
                        </p>
                        <p className="">February 2025 - Present</p>
                    </div>
                    <div className="flex justify-between text-sm">
                        <p className="italic">
                            Engineering Intern (informal)                        </p>
                    </div>
                    <ul className="list-disc list-inside">
                        <li>
                            Guided by a professional engineer to apply
                            mechanical/electrical design principles
                        </li>
                        <li>
                            Designing motorized ball launcher with capstan drive mechanics
                        </li>
                        <li>
                            Implementing H-bridge motor control and Python-based motion
                            calibration
                        </li>
                        <li>
                            Integrating 3D-printed parts with electronics for testing and
                            iteration
                        </li>
                    </ul>
                </div>

                <div>
                    <div className="flex justify-between text-sm">
                        <p className="">
                            <p className="">
                                <a className="font-semibold"> Jukebox </a> | <a className="italic"> Raspberry Pi, Python, GPIO Wiring, Embedded Systems </a>
                            </p>
                        </p>
                        <p className="">February 2025 - Present</p>
                    </div>
                    <div className="flex justify-between text-sm">
                        <p className="italic">
                            Solo Developer                        </p>
                    </div>
                    <ul className="list-disc list-inside">
                        <li>
                            Built a functioning Raspberry Pi music player with custom circuit
                            wiring
                        </li>
                        <li>Programmed GPIO button controls for audio playback</li>
                        <li>
                            Strengthened embedded systems and hardware-software integration
                            skills
                        </li>
                    </ul>
                </div>
            </div>

            {/* Skills */}
            <div className="mb-4">
                <h2 className="font-bold border-b border-black mb-1 text-sm">
                    SKILLS
                </h2>
                <p>
                    <span className="font-semibold">
                        Engineering & Technical Tools:
                    </span>{" "}
                    Circuit Design, PCB Design (Altium), 3D Printing, Mechanical
                    Prototyping, SolidWorks CAD, Raspberry Pi, Arduino, Embedded Systems
                </p>
                <p>
                    <span className="font-semibold">Programming & Software:</span> Python,
                    Bash, C++, Java, HTML/CSS, JavaScript, OpenGL, Git/GitHub
                </p>
                <p>
                    <span className="font-semibold">Certifications:</span> Virtual Intern
                    Simulation @ Johnson & Johnson Medtech, State Seal of Civic Engagement,
                    Seal of Biliteracy, Computer Science & Cyber Security CTE Pathway
                </p>
            </div>
        </div>
    );
}

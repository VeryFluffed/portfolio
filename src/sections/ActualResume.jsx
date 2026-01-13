import React from "react";

export default function ActualResume() {
    return (
        <div className="max-w-4xl mx-auto font-serif text-black text-sm mb-12 px-2">
            {/* Download */}
            <div className="text-right mt-20">
                <a
                    href="/images/Danh%20Tran%20Resume.pdf"
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
                    | Fountain Valley, CA
                </p>
                <p className="text-xs">
                    <a
                        href="https://danhtran.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600"
                    >
                        danhtran.org
                    </a>{" "}
                    |
                    <a
                        href="https://www.linkedin.com/in/danhctran"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600"
                    >
                        linkedin.com/in/danhctran
                    </a>{" "}
                    |
                    <a
                        href="https://github.com/VeryFluffed"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600"
                    >
                        github.com/VeryFluffed
                    </a>{" "}
                </p>
            </div>

            {/* CAREER PROFILE */}
            <div className="mb-4">
                <h2 className="font-bold border-b border-black mb-1 text-sm">
                    CAREER PROFILE
                </h2>
                <p>
                    Electromechanical engineering student focused on mechatronics and robotics with hands-on experience
                    in embedded systems, CAN communication, and robotic manipulation research. Skilled in integrating
                    electronics, control algorithms, and mechanical design through lab research and complex engineering
                    projects. Currently contributing to NSF-funded robotics research and autonomous vehicle development.
                </p>
            </div>

            {/* Skills */}
            <div className="mb-4">
                <h2 className="font-bold border-b border-black mb-1 text-sm">
                    SKILLS
                </h2>
                <p>
                    <span className="font-semibold">
                        Electrical:
                    </span>{" "}
                    PCB Design (Altium),   Raspberry Pi,   Arduino,   ESP32
                </p>
                <p>
                    <span className="font-semibold">
                        Embedded Systems:
                    </span>{" "}
                    I2C,   SPI,   UART,   BLE,   RFID,   encoders,   basic vision sensors
                </p>
                <p>
                    <span className="font-semibold">
                        Programming:
                    </span>{" "}
                    Python,   C++,   Bash,   Java,   HTML/CSS,   JavaScript,   Git/GitHub,  Linux
                </p>
                <p>
                    <span className="font-semibold">
                        Mechanical:
                    </span>{" "}
                    3D Printing,   SolidWorks CAD
                </p>
            </div>

            {/* Experience */}
            <div className="mb-4">
                <h2 className="font-bold border-b border-black mb-1 text-sm">
                    EXPERIENCE
                </h2>
                <div className="mb-2">
                    <div className="flex justify-between text-sm">
                        <p className="">
                            <a className="font-semibold"> CREST Grant Robotics Research Lab </a> | <a className="italic"> Robotics, Motion Planning, AI/ML, Control Systems</a>
                        </p>
                        <p className="">January 2026 - Present</p>
                    </div>
                    <div className="flex justify-between text-sm">
                        <p className="italic">
                            Undergraduate Research Student Assistant                        </p>
                        <p className="text-sm">Pomona, CA</p>
                    </div>
                    <ul className="list-disc list-inside">
                        <li>
                            Research motion, grasp, and regrasp planning for manipulator robots in agile manufacturing and assembly
                        </li>
                        <li>
                            Design and evaluate algorithms for autonomous grasping and regrasping of moving and stationary objects
                        </li>
                        <li>
                            Support development of AI/ML models for robotic training and decision-making
                        </li>
                        <li>
                            Collaborate with graduate and undergraduate researchers while maintaining ~10 hrs/week during academic semesters
                        </li>
                    </ul>
                </div>

                <div>
                    <div className="flex justify-between text-sm">
                        <p className="">
                            <a className="font-semibold"> Autonomous Vehicle Laboratory </a> | <a className="italic"> C++, Git/Github, I2C, SPI, UART, BLE </a>
                        </p>
                        <p className="">November 2025 - Present</p>
                    </div>
                    <div className="flex justify-between text-sm">
                        <p className="italic">
                            Mechatronics Subteam                        </p>
                        <p className="text-sm">Pomona, CA</p>
                    </div>
                    <ul className="list-disc list-inside">
                        <li>
                            Develop embedded CAN bus infrastructure for an autonomous ground vehicle
                        </li>
                        <li>
                            Implement master CAN node logic to query real-time actuator feedback (steering, throttle, brake)
                        </li>
                        <li>
                            Build vehicle state dictionaries to support higher-level control algorithms
                        </li>
                        <li>
                            Debug CAN message frames, arbitration IDs, and request/response timing between subsystems
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
                            Designed capstan-driven launcher using ESP32, H-bridge drivers, and closed-loop motor control                        </li>
                        <li>
                            Integrated BLE for wireless testing and motion tuning
                        </li>
                        <li>
                            Modeled and 3D-printed assemblies; validated tolerances through iterative testing
                        </li>
                        <li>
                            Conducting capstan vs. gear drive performance research toward planned ASME publication
                        </li>
                    </ul>
                </div>

                <div>
                    <div className="flex justify-between text-sm">
                        <p className="">
                            <p className="">
                                <a className="font-semibold"> RFID-Jukebox </a> | <a className="italic"> Raspberry Pi, Python, Arduino, C++, SolidWorks Cad, 3D Printing </a>
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
                            Designed and built a spring-loaded push-push mechanism in SolidWorks; 3D printed and mechanically tested
                        </li>
                        <li>
                            Integrated Arduino-based RFID scanner, custom button circuitry, and GPIO-based interaction logic
                        </li>
                        <li>
                            Combined embedded firmware with mechanical constraints to create a fully physical–digital interactive device
                        </li>
                    </ul>
                </div>
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
                        <p className="">August 2025 - December 2027</p>
                    </div>
                    <p className="italic text-sm">
                        Electromechanical Systems Engineer Freshman
                    </p>
                    <ul className="list-disc list-inside">
                        <li>CPP GPA: 4.0/4.0</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

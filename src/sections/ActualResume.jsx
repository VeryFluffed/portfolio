import React from "react";

export default function ActualResume() {
    return (
        <div className="max-w-5xl mx-auto font-serif text-black px-16">
            {/* Download */}
            <div className="text-right mt-20">
                <a
                    href="/Danh_Tran_Resume.pdf"
                    download
                    className="inline-block mt-4 px-4 py-2 bg-white-800 text-black rounded-lg shadow hover:bg-white-700"
                >
                    Download Resume
                </a>
            </div>
            {/* Header */}
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold">Danh Tran</h1>
                <p>(714) 837 - 5323 | <a href="mailto:danhtraannc@gmail.com" className="text-blue-600">danhtraannc@gmail.com</a> | 16678 Mt. Cachuma Cir. FV</p>
            </div>

            {/* Summary */}
            <div className="mb-6">
                <h2 className="font-bold border-b border-black mb-2">SUMMARY</h2>
                <p>
                    Electromechanical engineering student aspiring to specialize in mechatronics. Experienced in hands-on projects integrating
                    mechanical, electrical, and software systems. Strong leadership background in team-based engineering and technical problem-solving.
                    Seeking an engineering internship to apply skills in circuit design, prototyping, and embedded systems.
                </p>
            </div>

            {/* Education */}
            <div className="mb-6">
                <h2 className="font-bold border-b border-black mb-2">EDUCATION</h2>
                <div className="mb-4">
                    <div className="flex justify-between">
                        <p className="font-semibold">California State Polytechnic University, Pomona</p>
                        <p className="italic">August 2025 - Present</p>
                    </div>
                    <p className="italic">Electromechanical Systems Engineer Freshman</p>
                    <ul className="list-disc list-inside">
                        <li>GPA: 4.0/4.0</li>
                        <li>Planned Coursework: Electrical Networks, Instrumentation & Control, Robotics Control & Applications, Applied Statics & Dynamics, Strength of Materials, Machine Elements, Thermodynamics, Fluid Mechanics, Manufacturing Systems, C/C++ Programming</li>
                    </ul>
                </div>
            </div>

            {/* Experience */}
            <div className="mb-6">
                <h2 className="font-bold border-b border-black mb-2">EXPERIENCE</h2>
                <div className="mb-4">
                    <div className="flex justify-between">
                        <p className="font-semibold">Teaching | Tutoring, Lesson Planning, Communication, Curriculum Design</p>
                        <p className="italic">August 2021 - May 2025</p>
                    </div>
                    <p className="italic">Westminster & Santa Ana, CA</p>
                    <ul className="list-disc list-inside">
                        <li>Tutored ~8 middle school students daily; supported ~80 students over 4 years</li>
                        <li>Co-taught digital design for runs in Vietnam, bridging English/Vietnamese communication</li>
                        <li>Led confirmation classes and retreats for 20+ high school students</li>
                    </ul>
                </div>

                <div>
                    <div className="flex justify-between">
                        <p className="font-semibold">CyberPatriot | Linux, Bash Scripting, Networking, Cybersecurity, Leadership</p>
                        <p className="italic">September 2023 - Present</p>
                    </div>
                    <p className="italic">Westminster, CA</p>
                    <ul className="list-disc list-inside">
                        <li>Mentored 9 teams (~54 students) national CyberPatriot competition</li>
                        <li>Scripted ~2k lines of Bash for Linux hardening and security automation</li>
                        <li>Coached teams to Top 100 National Platinum Tier (twice) and grew placements by 200%</li>
                    </ul>
                </div>
            </div>

            {/* Projects */}
            <div className="mb-6">
                <h2 className="font-bold border-b border-black mb-2">PROJECTS</h2>

                <div className="mb-4">
                    <div className="flex justify-between">
                        <p className="font-semibold">Go-Kart Engineering Project | Physics/Mechanics, Wiring, Altium PCB Design, Team Leadership</p>
                        <p className="italic">August 2024 - July 2025</p>
                    </div>
                    <ul className="list-disc list-inside">
                        <li>Engineered a go-kart from a repurposed bed frame; reached 15 mph in testing</li>
                        <li>Managed ~$1.2k budget and 3-member team for design, fabrication, and testing</li>
                        <li>Applied torque/friction analysis, drivetrain troubleshooting, and electrical wiring</li>
                    </ul>
                </div>

                <div className="mb-4">
                    <div className="flex justify-between">
                        <p className="font-semibold">Pickleball Launcher Project | Raspberry Pi, Circuits, Python, 3D Printing, Motor Control</p>
                        <p className="italic">February 2025 - Present</p>
                    </div>
                    <ul className="list-disc list-inside">
                        <li>Guided by a professional engineer to apply mechanical/electrical design principles</li>
                        <li>Designing motorized ball launcher with capstan drive mechanics</li>
                        <li>Implementing H-bridge motor control and Python-based motion calibration</li>
                        <li>Integrating 3D-printed parts with electronics for testing and iteration</li>
                    </ul>
                </div>

                <div>
                    <div className="flex justify-between">
                        <p className="font-semibold">Jukebox | Raspberry Pi, Python, GPIO Wiring, Embedded Systems</p>
                        <p className="italic">February 2025 - Present</p>
                    </div>
                    <ul className="list-disc list-inside">
                        <li>Built a functioning Raspberry Pi music player with custom circuit wiring</li>
                        <li>Programmed GPIO button controls for audio playback</li>
                        <li>Strengthened embedded systems and hardware-software integration skills</li>
                    </ul>
                </div>
            </div>

            {/* Skills */}
            <div className={"mb-6"}>
                <h2 className="font-bold border-b border-black mb-2">SKILLS</h2>
                <p>
                    <span className="font-semibold">Engineering & Technical Tools:</span> Circuit Design, PCB Design (Altium), 3D Printing, Mechanical Prototyping, SolidWorks CAD, Raspberry Pi, Arduino, Embedded Systems
                </p>
                <p>
                    <span className="font-semibold">Programming & Software:</span> Python, Bash, C++, Java, HTML/CSS, JavaScript, OpenGL, Git/GitHub
                </p>
                <p>
                    <span className="font-semibold">Certifications:</span> Virtual Intern Simulation @ Johnson & Johnson Medtech, State Seal of Civic Engagement, Seal of Biliteracy, Computer Science & Cyber Security CTE Pathway
                </p>
            </div>
        </div>
    );
}

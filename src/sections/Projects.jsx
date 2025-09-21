import React from "react";
import { Link } from "react-router-dom";

const projects = [
    {
        title: "Electrical Go-Kart (2024)",
        role: "Team Lead",
        description:
            "My team and I engineered a go-kart from a repurposed bed frame. I managed our ~1.2k " +
            "budget and our 3-member team for design, fabrication, and testing. This was our first time " +
            "working with real galvanized square steel, heavy-duty electrical wiring, and applying theory " +
            "to real life. We reached 15 mph in testing, applied torque/friction analysis, and drivetrain " +
            "troubleshooting.",
        video: "/videos/test.mp4",
        tech: [
            { name: "Altium", icon: "/icons/altium.png" },
            { name: "Solidworks", icon: "/icons/solidworks.png" },
            { name: "Excel", icon: "/icons/excel.png" },
            { name: "3d Printing", icon: "/icons/3dprinter.png" },
        ],
        link: "/projects/go-kart",
    },
    {
        title: "Pickleball Machine (2025)",
        role: "Intern",
        description:
            "I was guided by a professional engineer to apply mechanical/electrical design principles. " +
            "I worked out the individual mechanisms within the overall system, such as python programming " +
            "an ESP32 to remotely control the speed and spin of the motors with the implementation of H-bridges. " +
            "I also researched, designed, and optimized a motorized capstan drive to be 3D-printed with electronics " +
            "testing and iteration.",
        video: null, // no video available
        tech: [
            { name: "Solidworks", icon: "/icons/solidworks.png" },
            { name: "3D Printing", icon: "/icons/3dprinter.png" },
            { name: "Raspberry Pi", icon: "/icons/raspberrypi.png" },
            { name: "Python", icon: "/icons/python.png" },
            { name: "Arduino", icon: "/icons/arduino.png" },
            { name: "GitHub", icon: "/icons/github.png" },
        ],
        link: "/projects/pickleball",
    },
    {
        title: "RFID-Jukebox",
        role: "Solo Developer",
        description:
            "Inspired by a Minecrat Jukebox, I built a functioning Raspberry Pi music player with custom circuit " +
            "wiring. I also programmed GPIO button controls for audio playbacks, all to apply my theoretical " +
            "knowledge and strengthen my embedded systems and hardware-software integration skills. I plan to use my " +
            "recently learned 3D printing skills to print out the Minecraft Jukebox model.",
        video: null, // no video available
        tech: [
            { name: "Raspberry Pi", icon: "/icons/raspberrypi.png" },
            { name: "Arduino", icon: "/icons/arduino.png" },
            { name: "C++", icon: "/icons/c++.png" },
            { name: "3D Printing", icon: "/icons/3dprinter.png" },
        ],
        link: "/projects/jukebox",
    },
    {
        title: "CyberPatriot Bash Script",
        role: "Team Captain",
        description:
            "After competitively securing Linux systems and servers for 3 years, I decided to write a Bash Script " +
            "specifically tailored towards Linux harding in CyberPatriot competitions. This required deep understanding " +
            "of file systems, permissions, system variables, redirection, command-line arguments, etc. We reached top " +
            "100 Nationals Platinum Tier twice.",
        video: null, // no video available
        tech: [
            { name: "Linux", icon: "/icons/linux.png" },
            { name: "C++", icon: "/icons/c++.png" },
            { name: "GitHub", icon: "/icons/github.png" },
        ],
        link: "/projects/cyberpatriot",
    },
];

export default function Projects() {
    return (
        <section className="bg-white text-gray-900 mb-8 px-16">
            <div className="h-[.5px] bg-black w-full mb-10"/>
            <div className="px-16">
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                    {projects.map((p, i) => (
                        <Link
                            key={i}
                            to={p.link}
                            className="bg-gray-100 rounded-2xl shadow-lg overflow-hidden flex flex-col hover:scale-[1.02] transition-transform"
                        >
                            <div
                                key={i}
                                className=""
                            >
                                <div className="h-60 bg-black flex items-center justify-center">
                                    {p.video ? (
                                        <video
                                            src={p.video}
                                            autoPlay
                                            loop
                                            muted
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <span className="text-white text-xl">No Video Available</span>
                                    )}
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-base font-extrabold mb-1">{p.title}</h3>
                                    <p className="text-xs uppercase font-semibold text-gray-500 mb-4">
                                        {p.role}
                                    </p>
                                    <hr className="border-gray-300 mb-4" />
                                    <p className="text-gray-600 mb-6 text-xs">{p.description}</p>
                                    <div>
                                        <h4 className="font-bold mb-2 text-sm">Software/Languages/Frameworks</h4>
                                        <div className="flex flex-wrap gap-4">
                                            {p.tech.map((t, j) => (
                                                <div key={j} className="flex items-center gap-2">
                                                    <img
                                                        src={t.icon}
                                                        alt={t.name}
                                                        className="w-6 h-6 object-contain"
                                                    />
                                                    <span className="text-sm">{t.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
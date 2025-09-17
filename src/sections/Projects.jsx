// src/sections/Projects.jsx
import React from "react";

const projects = [
    {
        title: "Project (2024)",
        role: "Lead",
        description:
            "idk lol",
        video: "./public/videos/test.mp4", // "/videos/example.mp4"
        tech: [
            { name: "ThreeJS", icon: "./public/icons/threejs.png" },
            { name: "IDK", icon: "/icons/example.png" },
            { name: "heheheha", icon: "/icons/example.png" },
            { name: "me too", icon: "/icons/example.png" },
        ],
    },
    {
        title: "Project (2025)",
        role: "Me",
        description:
            "Summary",
        video: null, // no video available
        tech: [
            { name: "something", icon: "/icons/example.png" },
        ],
    },
];

export default function Projects() {
    return (
        <section className="bg-white text-gray-900 mb-8 px-16">
            <div className="h-[1px] bg-black w-full mb-10"/>
            <div className="grid md:grid-cols-2 gap-8 mb-10">
                {projects.map((p, i) => (
                    <div
                        key={i}
                        className="bg-gray-100 rounded-2xl shadow-lg overflow-hidden flex flex-col"
                    >
                        <div className="h-80 bg-black flex items-center justify-center">
                            {p.video ? (
                                <video
                                    src={p.video}
                                    autoPlay
                                    loop
                                    muted
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <span className="text-white text-sm">No Video Available</span>
                            )}
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-xl font-extrabold mb-1">{p.title}</h3>
                            <p className="uppercase text-sm font-semibold text-gray-500 mb-4">
                                {p.role}
                            </p>
                            <hr className="border-gray-300 mb-4" />
                            <p className="text-gray-700 mb-6 flex-1">{p.description}</p>
                            <div>
                                <h4 className="font-bold mb-2">Languages/Frameworks</h4>
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
                ))}
            </div>
        </section>
    );
}
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
                        src="/images/go-kart.jpg" // replace with your go-kart image path
                        alt="Go-Kart Project"
                        className="rounded-lg shadow-lg object-cover w-full h-full"
                    />
                </div>

                {/* Project Content */}
                <div>
                    {/* Title */}
                    <h1 className="text-3xl font-bold mb-6 tracking-wide">
                        RFID-JUKEBOX
                    </h1>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Inspired by a Minecraft Jukebox, I built a functioning Raspberry Pi music player with custom
                        circuit wiring. I also programmed GPIO button controls for audio playbacks, all to apply my
                        theoretical knowledge and strengthen my embedded systems and hardware-software integration
                        skills. I plan to use my recently learned 3D printing skills to print out the Minecraft Jukebox
                        model and disc. I also plan to downgrade the hardware to Arduino to have a permanent Minecraft
                        Jukebox.
                    </p>

                    {/* Contributions & Collaborators */}
                    <div className="grid grid-cols-2 gap-8 mb-10">
                        <div>
                            <h3 className="text-sm font-semibold tracking-wider text-gray-500 mb-3">
                                CONTRIBUTIONS
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>Raspberry Pi System Setup & Integration</li>
                                <li>GPIO Button Circuit Design</li>
                                <li>Python Programming</li>
                                <li>Custom Circuit Wiring & Testing</li>
                                <li>3D Printing</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold tracking-wider text-gray-500 mb-3">
                                COLLABORATORS
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>Thomas Vu</li>
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
        </section>
    );
};

export default GoKart;

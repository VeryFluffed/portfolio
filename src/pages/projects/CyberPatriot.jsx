import React from "react";
import { Link } from "react-router-dom";

const CyberPatriot = () => {
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
                        CyberPatriot
                    </h1>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed mb-6">
                        After competitively securing Linux systems and servers for 3 years, I decided to write a Bash
                        Script specifically tailored towards Linux hardening in CyberPatriot competitions. This required
                        a deep understanding of file systems, permissions, system variables, redirection, command-line
                        arguments, etc. We reached the top 100 Nationals Platinum Tier twice.
                    </p>

                    {/* Contributions & Collaborators */}
                    <div className="grid grid-cols-2 gap-8 mb-10">
                        <div>
                            <h3 className="text-sm font-semibold tracking-wider text-gray-500 mb-3">
                                CONTRIBUTIONS
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>Bash Scripting for System Hardening</li>
                                <li>Linux File System & Permissions Analysis</li>
                                <li>Command-Line Automation & Argument Handling</li>
                                <li>Security Policy Development</li>
                                <li>Competition Leadership & Training</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold tracking-wider text-gray-500 mb-3">
                                COLLABORATORS
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>Nathan Pham</li>
                                <li>Brian Vu</li>
                                <div>
                                    <a
                                        href="https://aidentran.dev/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 hover:text-black transition-colors"
                                    >
                                        Aiden Tran
                                    </a>
                                </div>
                                <li>Bryan Nguyen</li>
                                <li>Ayaan Qureshi</li>
                                <li>James Nguyen</li>
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
            <Link
                to="/projects"
                className="mt-5 mb-10 inline-block text-gray-600 hover:underline text-lg"
            >
                ← Back to Projects
            </Link>
        </section>
    );
};

export default CyberPatriot;

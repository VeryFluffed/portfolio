import React from "react";
import { Link } from "react-router-dom";

const GoKart = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16">
            <Link
                to="/"
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
                                <li>Teammate A</li>
                                <li>Teammate B</li>
                                <li>Teammate C</li>
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

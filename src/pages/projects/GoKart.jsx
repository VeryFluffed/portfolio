import React from "react";
import { Link } from "react-router-dom";

const GoKart = () => {
    return (
        <section className="max-w-5xl mx-auto py-16 px-6">
            <Link
                to="/"
                className="mt-12 inline-block text-gray-600 hover:underline text-lg mb-12"
            >
                ← Back to Projects
            </Link>

            <h1 className="text-4xl font-bold mb-6">Electrical Go-Kart (2024)</h1>

            <img
                src="/images/gokart.png"
                alt="Go-Kart"
                className="w-full h-80 object-cover rounded-lg shadow mb-8"
            />

            <div className="space-y-8">
                {/* Overview */}
                <div>
                    <h2 className="text-2xl font-semibold mb-3">Overview</h2>
                    <p className="text-gray-700 leading-relaxed">
                        My team and I engineered a go-kart from a repurposed bed frame. I managed our ~$1.2k
                        budget and our 3-member team for design, fabrication, and testing. This was our first time
                        working with galvanized square steel, heavy-duty electrical wiring, and applying physics theory
                        to real life. We reached 15 mph in testing, applied torque/friction analysis, and drivetrain
                        troubleshooting.
                    </p>
                </div>

                {/* Technical Details */}
                <div>
                    <h2 className="text-2xl font-semibold mb-3">Technical Details</h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>Frame constructed from a repurposed steel bed frame.</li>
                        <li>Battery-powered DC motor system with chain drive.</li>
                        <li>Top speed of ~15 mph achieved during tests.</li>
                        <li>Applied AP Physics 2 principles for torque/friction analysis.</li>
                    </ul>
                </div>

                {/* Lessons Learned */}
                <div>
                    <h2 className="text-2xl font-semibold mb-3">Lessons Learned</h2>
                    <p className="text-gray-700 leading-relaxed">
                        This project taught me the technical side of mechanical design as well as leadership.
                        Coordinating a small team with limited resources pushed us to think creatively and adapt quickly.
                    </p>
                </div>
            </div>

            <Link
                to="/"
                className="mt-12 inline-block text-gray-600 hover:underline text-lg"
            >
                ← Back to Projects
            </Link>
        </section>
    );
};

export default GoKart;

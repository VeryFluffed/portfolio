import React from "react";

const AboutMe = () => {
    return (
        <section className="w-full bg-white border-t border-b border-gray-400 py-8">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 px-4">
                {/* Profile image */}
                <div className="flex-shrink-0 w-40 h-40 md:w-56 md:h-56">
                    <img
                        src="/images/profile.jpg" // put your image in /public/images/profile.jpg
                        alt="Profile"
                        className="w-full h-full object-cover rounded"
                    />
                </div>

                {/* Text content */}
                <div className="text-gray-900 leading-relaxed">
                    <p className="mb-4">
                        Hello, I’m <span className="font-semibold">Danh!</span> I discovered my
                        passion for Mechatronics Engineering through late-night projects that started as wild
                        ideas and turned into real builds. Now, I’m pursuing my Electromechanical Systems Engineering
                        degree at {" "}
                        <a
                            href="https://www.cpp.edu/"
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Cal Poly Pomona
                        </a>
                        , with a focus on Mechatronics. Along the way, I’ve built go-karts, Raspberry Pi systems, and
                        PCBs, while sharpening my problem-solving, teamwork, and leadership skills.
                    </p>
                    <p className="mb-4">
                        I love working across software and hardware to solve everyday challenges. I get excited about
                        projects that blend technical challenges with real-world impact, and I will keep pushing into
                        robotics and sustainable automation. Beyond the technical side, I’m driven to inspire those
                        around me—showing that ambitions often feel further away than they really are.
                    </p>
                    <p>
                        Outside of engineering, I enjoy gaming, mentoring students, and hiking. Scroll down to see some
                        of my projects—or feel free to reach out if you’d like to connect!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
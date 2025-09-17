import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const AboutMe = () => {
    return (
        <section className="w-full px-16 bg-gray-100">
            <div className="h-[1.2px] bg-black w-full mb-10"/>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 py-10">
                {/* Profile image */}
                <div className="flex-shrink-0 w-40 h-40 md:w-1/3 md:h-full mr-16">
                    <img
                        src="/images/profile.jpg" // put your image in /public/images/profile.jpg
                        alt="Profile"
                        className="w-full h-full object-cover rounded"
                    />
                </div>

                {/* Text content */}
                <div className="text-gray-900 leading-relaxed">
                    <p className={" text-3xl mb-5 tracking-widest"}>
                        HELLO, I’M DANH!
                    </p>
                    <p className="mb-4 text-xl about_tag text-gray-700 leading-relaxed text-justify">
                        I discovered my passion for <a className="bold">Mechatronics Engineering</a> through
                        late-night projects that started as wild ideas and turned into real builds. Now, I’m pursuing
                        my Electromechanical Systems Engineering degree at {" "}
                        <a
                            href="https://www.cpp.edu/"
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Cal Poly Pomona
                        </a>
                        , with a focus on Mechatronics. Along the way, I’ve built <a className="bold">go-karts,
                        Raspberry Pi systems, and PCBs, while sharpening my problem-solving, teamwork, and leadership
                        skills.</a>
                    </p>
                    <p className="mb-4 text-xl about_tag text-gray-700 leading-relaxed text-justify">
                        I love working across <a className="bold">software and hardware</a> to solve everyday challenges.
                        I get excited about
                        projects that blend technical challenges with real-world impact, and I will keep pushing into
                        <a className="bold"> robotics and sustainable automation.</a> Beyond the technical side, I’m
                        driven to inspire those
                        around me—showing that ambitions often feel further away than they really are.
                    </p>
                    <p className="about_tag text-xl mb-4 text-gray-700 leading-relaxed text-justify">
                        Outside of engineering, I enjoy gaming, mentoring students, and hiking. Scroll down to see some
                        of my projects—or feel free to reach out if you’d like to connect!
                    </p>
                    {/* Social icons (beneath text) */}
                    <div className="flex gap-6 mt-2 mb-10">
                        <a
                            href="https://github.com/VeryFluffed"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-black text-2xl"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/danh-tran-9b657a362/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 hover:text-blue-900 text-2xl"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="mailto:danhcorps@gmail.com"
                            className="text-red-600 hover:text-red-800 text-2xl"
                        >
                            <FaEnvelope />
                        </a>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default AboutMe;
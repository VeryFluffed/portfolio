import React from "react";
import {FaEnvelope, FaGithub, FaLinkedin} from "react-icons/fa";

const Introduction = () => {
    return (
        <section className="w-full bg-white px-16">
            <div className="h-[1px] bg-black w-full mb-6"/>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-36">

                {/* image */}
                <div className="flex-shrink-0 size-72 flex items-center justify-center md:h-full">
                    <img
                        src="/images/profile.jpg"
                        alt="Picture of Danh"
                        className="w-full h-full object-cover rounded"
                    />
                </div>

                <div className="flex-1 p-8 bg-white flex flex-col justify-center">

                    <div className="text-gray-900 leading-relaxed">
                        <p className={" text-2xl mb-4 tracking-widest"}>
                            HELLO, I’M DANH!
                        </p>
                        <p className="mb-4 text-base about_tag text-gray-700 leading-relaxed text-justify">
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
                        <p className="mb-4 text-base about_tag text-gray-700 leading-relaxed text-justify">
                            I love working across <a className="bold">software and hardware</a> to solve everyday challenges.
                            I get excited about
                            projects that blend technical challenges with real-world impact, and I will keep pushing into
                            <a className="bold"> robotics and sustainable automation.</a> Beyond the technical side, I’m
                            driven to inspire those
                            around me—showing that ambitions often feel further away than they really are.
                        </p>
                        <p className="about_tag text-base mb-4 text-gray-700 leading-relaxed text-justify">
                            Outside of engineering, I enjoy gaming, mentoring students, and hiking. Scroll down to see some
                            of my projects—or feel free to reach out if you’d like to connect!
                        </p>
                        {/* Social icons (beneath text) */}
                        <div className="flex gap-6 mt-2 mb-10">
                            <a
                                href="mailto:danhcorps@gmail.com"
                                className="text-red-600 hover:text-red-800 text-2xl"
                            >
                                <FaEnvelope />
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
                                href="https://github.com/VeryFluffed"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-black text-2xl"
                            >
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;

import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Life = () => {
    return (
        <section className="w-full px-16 bg-white">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 px-4 py-10 mt-20">

                {/* Text content */}
                <div className="text-grazy-900 leading-relaxed">
                    <p className={"text-4xl mb-5 tracking-widest about_tag"}>
                        I HAVE A LIFE AS WELL
                    </p>
                    <p className="mb-4 about_tag text-xl tracking-wider">
                        Outside of engineering, I enjoy gaming, hiking, and mentoring students. Whether I’m helping
                        middle schoolers through homework or scripting videos that reach thousands online, I find
                        purpose in inspiring others to believe their ambitious goals are achievable.
                    </p>
                    <p className="mb-4 about_tag text-xl tracking-wider mt-4">
                        If you’d like to collaborate, chat about engineering projects, or just swap ideas, I’d love to
                        connect!
                    </p>
                </div>

                {/* Profile image */}
                <div className="flex-shrink-0 w-40 h-40 md:w-1/3 md:h-full mr-16">
                    <img
                        src="/images/profile.jpg" // put your image in /public/images/profile.jpg
                        alt="Profile"
                        className="w-full h-full object-cover rounded"
                    />
                </div>
            </div>
        </section>
    );
};

export default Life;
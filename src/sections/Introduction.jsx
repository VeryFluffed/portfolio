import React from "react";

const Introduction = () => {
    return (
        <section className="w-full bg-white">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-12 py-16 mt-20">
                {/* Profile image */}
                <div className="flex-shrink-0 md:w-1/5">
                    <img
                        src="/images/profile.jpg" // Place your image in /public/images/profile.jpg
                        alt="Profile"
                        className="w-full h-full object-cover rounded"
                    />
                </div>

                {/* Text content */}
                <div className="flex-1 p-8 bg-white flex flex-col justify-center">
                    <h2 className="text-4xl font-serif font-semibold mb-6 tracking-widest about_tag">
                        HI, I’M DANH
                    </h2>
                    <p className="text-xl about_tag text-gray-700 leading-relaxed text-justify">
                        Danh (Yah-n) is a Vietnamese name, meaning reputation, prestige, courage,
                        and funnily enough, name. Born and raised in an immigrant Vietnamese
                        household in Orange County, California, I have been instilled with <a className="bold"> hard
                        work and persistence.</a> I have since lived in Fountain Valley, where I
                        spend most of my days working on projects that blend software, hardware,
                        and mechanical design into complete systems.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Introduction;

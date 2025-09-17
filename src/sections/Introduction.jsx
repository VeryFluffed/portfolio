import React from "react";

const Introduction = () => {
    return (
        <section className="w-full bg-white mb-16">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-36 mt-36">

                {/* image */}
                <div className="flex-shrink-0 size-72 flex items-center justify-center">
                    <img
                        src="/images/profile.jpg"
                        alt="Picture of Danh"
                        className="w-full h-full object-cover rounded"
                    />
                </div>

                <div className="flex-1 p-8 bg-white flex flex-col justify-center">
                    <h2 className="text-3xl font-serif font-semibold mb-6 tracking-widest about_tag">
                        HI, I’M DANH
                    </h2>
                    <p className="text-base about_tag text-gray-700 leading-relaxed text-justify">
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

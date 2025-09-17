import React from "react";

const Introduction = () => {
    return (
        <section className="w-full bg-white mb-16">
            <div className="h-[1px] bg-black w-1/3 mb-10 mx-auto"/>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-12 mt-20">
                {/* Profile image */}
                <div className="flex-shrink-0 md:w-1/4">
                    <img
                        src="/images/project.jpg" // Place your image in /public/images/profile.jpg
                        alt="Danh working on Go-Kart"
                        className="w-full h-full object-cover rounded"
                    />
                </div>

                {/* Text content */}
                <div className="flex-1 p-8 bg-white flex flex-col justify-center">
                    <h2 className="text-4xl font-serif font-semibold mb-6 tracking-widest about_tag">
                        FROM IMAGINATION TO PROJECTS
                    </h2>
                    <p className="text-xl about_tag text-gray-700 leading-relaxed text-justify">
                        What began as redstone contraptions and teamwork online evolved into real-world engineering
                        challenges. I first took my skills from Minecraft and translated it to real life with art.
                        Since then, I started working on larger projects, such as building an <a className="bold"> electric go-kart</a> out of a
                        bed frame, designing a competitive <a className="bold"> pickleball machine</a> as a tennis player, and
                        <a className="bold"> 3D printing</a> to
                        bring a Minecraft jukebox to life. Like my initial interest in Minecraft, I’ve naturally chased
                        projects that forced me to learn new skills, adapt to limitations (budget :C), and communicate
                        to professionals.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Introduction;

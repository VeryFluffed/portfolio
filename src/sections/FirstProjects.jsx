import React from "react";

const Introduction = () => {
    return (
        <section className="w-full bg-white mb-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-16">

                {/* image */}
                <div className="flex-shrink-0 size-72 flex items-center justify-center">
                    <img
                        src="/images/project.jpg"
                        alt="Danh doing project"
                        className="w-full h-full object-cover rounded"
                    />
                </div>

                <div className="flex-1 p-8 bg-white flex flex-col justify-center">
                    <h2 className="text-3xl font-serif font-semibold mb-6 tracking-widest about_tag">
                        FROM IMAGINATION TO PROJECTS
                    </h2>
                    <p className="text-base about_tag text-gray-700 leading-relaxed text-justify">
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

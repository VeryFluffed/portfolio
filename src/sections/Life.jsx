import React from "react";

const Introduction = () => {
    return (
        <section className="w-full bg-white">
            <div className="h-[1px] bg-black w-1/3 mb-10 mx-auto"/>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-12 mb-16 mt-14 px-36">

                {/* Text content */}
                <div className="flex-1 p-8 bg-white flex flex-col justify-center">
                    <h2 className="text-3xl font-serif font-semibold mb-6 tracking-widest about_tag">
                        I HAVE A LIFE AS WELL
                    </h2>
                    <p className="text-base about_tag text-gray-700 leading-relaxed text-justify">
                        Outside of engineering, I enjoy <a className="bold"> gaming, hiking, and mentoring students.</a>
                        Whether I’m helping
                        middle schoolers through homework or scripting videos that reach thousands online, I find
                        purpose in inspiring others to believe their ambitious goals are achievable.
                    </p>
                    <p className="text-base about_tag text-gray-700 leading-relaxed text-justify mt-4">
                        If you’d like to collaborate, chat about engineering projects, or just swap ideas, I’d love to
                        connect!
                    </p>
                </div>

                {/* Profile image */}
                <div className="flex-shrink-0 md:w-1/4">
                    <img
                        src="/images/life.jpg" // Place your image in /public/images/profile.jpg
                        alt="Danh having a life"
                        className="w-full h-full object-cover rounded"
                    />
                </div>
            </div>
        </section>
    );
};

export default Introduction;

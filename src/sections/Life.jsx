import React from "react";

const Introduction = () => {
    return (
        <section className="w-full bg-white mb-16">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 sm:px-6 md:px-12 lg:px-16">
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
                <div className="flex-shrink-0 size-72 flex items-center justify-center">
                    <img
                        src="/images/life.jpg"
                        alt="Danh has a life"
                        className="w-full h-full object-cover rounded"
                    />
                </div>
            </div>
        </section>
    );
};

export default Introduction;

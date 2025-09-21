import React from "react";

const Introduction = () => {
    return (
        <section className="w-full bg-white mb-12">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 sm:px-6 md:px-12 lg:px-16">

                {/* image */}
                <div className="flex-shrink-0 size-72 flex items-center justify-center">
                    <img
                        src="/images/study.jpg"
                        alt="Danh studying"
                        className="w-full h-full object-cover rounded"
                    />
                </div>

                <div className="flex-1 p-8 bg-white flex flex-col justify-center">
                    <h2 className="text-3xl font-serif font-semibold mb-6 tracking-widest about_tag">
                        I AM STUDYING VERY HARD
                    </h2>
                    <p className="text-base about_tag text-gray-700 leading-relaxed text-justify">
                        Right now, my focus is mastering the intersection of hardware and software while building
                        projects that are both technically challenging and impactful. I am planning on taking as many
                        <a className="bold"> advanced mechanical and electrical courses</a> available at Cal Poly Pomona.
                        Long-term, I plan to pursue an<a className="bold"> MBA</a> to pair business strategy with
                        engineering, with the goal of working at the intersection of startups, innovation, and motorsport.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Introduction;

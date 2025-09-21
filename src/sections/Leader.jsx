import React from "react";

const Introduction = () => {
    return (
        <section className="w-full bg-white mb-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 sm:px-6 md:px-12 lg:px-16">
                {/* Text content */}
                <div className="flex-1 p-8 bg-white flex flex-col justify-center">
                    <h2 className="text-3xl font-serif font-semibold mb-6 tracking-widest about_tag">
                        I BECAME A NATURAL LEADER
                    </h2>
                    <p className="text-base about_tag text-gray-700 leading-relaxed text-justify">
                        Through these projects, I’ve developed more than just technical skills. I’ve learned <a className="bold"> leadership</a>
                        by guiding friends and club members, <a className="bold"> problem-solving</a> through trial and error, and <a className="bold"> persistence</a>
                        when the first design doesn’t quite work out. These experiences eventually pushed me into roles
                        like becoming the team leader among my friends when working on our go-kart in my garage. I also
                        became my school’s <a className="bold"> Robotics Club President</a>, where I started and managed a 4-club collaboration
                        of our school’s first school-wide robotics competitions. I also was CyberPatriot competitor
                        (Top 1%) and naturally became our school’s first dedicated <a className="bold"> CyberPatriot coach.</a>
                    </p>
                </div>

                {/* Profile image */}
                <div className="flex-shrink-0 size-72 flex items-center justify-center">
                    <img
                        src="/images/mobshot.jpg"
                        alt="Mobshot of Robotics Club"
                        className="w-full h-full object-cover rounded"
                    />
                </div>
            </div>
        </section>
    );
};

export default Introduction;

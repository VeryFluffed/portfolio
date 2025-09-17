import React from "react";

const Introduction = () => {
    return (
        <section className="w-full bg-white mb-16">
            <div className="h-[1px] bg-black w-1/3 mb-10 mx-auto"/>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-12">

                {/* Text content */}
                <div className="flex-1 p-8 bg-white flex flex-col justify-center">
                    <h2 className="text-4xl font-serif font-semibold mb-6 tracking-widest about_tag">
                        IT ALL STARTED WITH MINECRAFT
                    </h2>
                    <p className="text-xl about_tag text-gray-700 leading-relaxed text-justify">
                        I first got <a className="bold"> Minecraft</a> when I was 4 years old. Since I was a curious kid, I played around in
                        creative mode and fell in love with the immense amount of creativity with such limited blocks.
                        Since then, it became a fundamental part of my life. I played with arts and crafts in class,
                        imagining myself to be in Minecraft creating anything I could with a limited amount of materials.
                        I was amazed with what I could do, so I pushed my creations further by implementing electricals
                        to bring my pieces to life, just as I did in Minecraft. Ever since, I have never stopped viewing
                        imaginations as something to be built, pushing my creativity.
                    </p>
                </div>

                {/* Profile image */}
                <div className="flex-shrink-0 md:x-full md:y-full size-72">
                    <img
                        src="/images/minecraft.png" // Place your image in /public/images/profile.jpg
                        alt="Minecraft Logo"
                        className="w-full h-full object-cover rounded"
                    />
                </div>
            </div>
        </section>
    );
};

export default Introduction;

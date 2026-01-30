const Introduction = () => {
  return (
    <section className="mb-8 w-full bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 sm:px-6 md:flex-row md:px-12 lg:px-16">
        {/* Text content */}
        <div className="flex flex-1 flex-col justify-center bg-white p-8">
          <h2 className="about_tag mb-6 font-serif text-3xl font-semibold tracking-widest">
            IT ALL STARTED WITH MINECRAFT
          </h2>
          <p className="about_tag text-justify text-base leading-relaxed text-gray-700">
            I first got <span className="font-bold">Minecraft</span> when I was
            4 years old. Since I was a curious kid, I played around in creative
            mode and fell in love with the immense amount of creativity with
            such limited blocks. Since then, it became a fundamental part of my
            life. I played with arts and crafts in class, imagining myself to be
            in Minecraft creating anything I could with a limited amount of
            materials. I was amazed with what I could do, so I pushed my
            creations further by implementing electricals to bring my pieces to
            life, just as I did in Minecraft. Ever since, I have never stopped
            viewing imaginations as something to be built, pushing my
            creativity.
          </p>
        </div>

        {/* Profile image */}
        <div className="flex size-72 flex-shrink-0 items-center justify-center">
          <img
            src="/images/minecraft.png"
            alt="Minecraft Logo"
            className="h-full w-full rounded object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Introduction;

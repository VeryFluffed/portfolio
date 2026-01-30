const Introduction = () => {
  return (
    <section className="mb-8 w-full bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 sm:px-6 md:flex-row md:px-12 lg:px-16">
        {/* image */}
        <div className="flex size-72 flex-shrink-0 items-center justify-center">
          <img
            src="/images/project.jpg"
            alt="Danh doing project"
            className="h-full w-full rounded object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-center bg-white p-8">
          <h2 className="about_tag mb-6 font-serif text-3xl font-semibold tracking-widest">
            FROM IMAGINATION TO PROJECTS
          </h2>
          <p className="about_tag text-justify text-base leading-relaxed text-gray-700">
            What began as redstone contraptions and teamwork online evolved into
            real-world engineering challenges. I first took my skills from
            Minecraft and translated it to real life with art. Since then, I
            started working on larger projects, such as building an{" "}
            <a className="bold"> electric go-kart</a> out of a bed frame,
            designing a competitive <a className="bold"> pickleball machine</a>{" "}
            as a tennis player, and
            <a className="bold"> 3D printing</a> to bring a Minecraft jukebox to
            life. Like my initial interest in Minecraft, I’ve naturally chased
            projects that forced me to learn new skills, adapt to limitations
            (budget :C), and communicate to professionals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

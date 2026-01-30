const Introduction = () => {
  return (
    <section className="mb-12 w-full bg-white">
      <div className="mx-auto mt-36 flex max-w-6xl flex-col items-center gap-12 sm:px-6 md:flex-row md:px-12 lg:px-16">
        {/* image */}
        <div className="flex size-72 flex-shrink-0 items-center justify-center">
          <img
            src="/images/profile.jpg"
            alt="Picture of Danh"
            className="h-full w-full rounded object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-center bg-white p-8">
          <h2 className="about_tag mb-6 font-serif text-3xl font-semibold tracking-widest">
            HI, I’M DANH
          </h2>
          <p className="about_tag text-justify text-base leading-relaxed text-gray-700">
            Danh (Yah-n) is a Vietnamese name, meaning reputation, prestige,
            courage, and funnily enough, name. Born and raised in an immigrant
            Vietnamese household in Orange County, California, I have been
            instilled with <a className="bold"> hard work and persistence.</a> I
            have since lived in Fountain Valley, where I spend most of my days
            working on projects that blend software, hardware, and mechanical
            design into complete systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

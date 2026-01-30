const Introduction = () => {
  return (
    <section className="mb-12 w-full bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 sm:px-6 md:flex-row md:px-12 lg:px-16">
        {/* image */}
        <div className="flex size-72 flex-shrink-0 items-center justify-center">
          <img
            src="/images/study.jpg"
            alt="Danh studying"
            className="h-full w-full rounded object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-center bg-white p-8">
          <h2 className="about_tag mb-6 font-serif text-3xl font-semibold tracking-widest">
            I AM STUDYING VERY HARD
          </h2>
          <p className="about_tag text-justify text-base leading-relaxed text-gray-700">
            Right now, my focus is mastering the intersection of hardware and
            software while building projects that are both technically
            challenging and impactful. I am planning on taking as many
            <a className="bold">
              {" "}
              advanced mechanical and electrical courses
            </a>{" "}
            available at Cal Poly Pomona. Long-term, I plan to pursue an
            <a className="bold"> MBA</a> to pair business strategy with
            engineering, with the goal of working at the intersection of
            startups, innovation, and motorsport.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

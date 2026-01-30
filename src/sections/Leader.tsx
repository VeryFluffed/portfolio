const Introduction = () => {
  return (
    <section className="mb-8 w-full bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 sm:px-6 md:flex-row md:px-12 lg:px-16">
        {/* Text content */}
        <div className="flex flex-1 flex-col justify-center bg-white p-8">
          <h2 className="about_tag mb-6 font-serif text-3xl font-semibold tracking-widest">
            I BECAME A NATURAL LEADER
          </h2>
          <p className="about_tag text-justify text-base leading-relaxed text-gray-700">
            Through these projects, I’ve developed more than just technical
            skills. I’ve learned <a className="bold"> leadership</a>
            by guiding friends and club members,{" "}
            <a className="bold"> problem-solving</a> through trial and error,
            and <a className="bold"> persistence</a>
            when the first design doesn’t quite work out. These experiences
            eventually pushed me into roles like becoming the team leader among
            my friends when working on our go-kart in my garage. I also became
            my school’s <a className="bold"> Robotics Club President</a>, where
            I started and managed a 4-club collaboration of our school’s first
            school-wide robotics competitions. I also was CyberPatriot
            competitor (Top 1%) and naturally became our school’s first
            dedicated <a className="bold"> CyberPatriot coach.</a>
          </p>
        </div>

        {/* Profile image */}
        <div className="flex size-72 flex-shrink-0 items-center justify-center">
          <img
            src="/images/mobshot.jpg"
            alt="Mobshot of Robotics Club"
            className="h-full w-full rounded object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Introduction;

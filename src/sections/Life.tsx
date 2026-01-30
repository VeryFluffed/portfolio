const Introduction = () => {
  return (
    <section className="mb-16 w-full bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 sm:px-6 md:flex-row md:px-12 lg:px-16">
        {/* Text content */}
        <div className="flex flex-1 flex-col justify-center bg-white p-8">
          <h2 className="about_tag mb-6 font-serif text-3xl font-semibold tracking-widest">
            I HAVE A LIFE AS WELL
          </h2>
          <p className="about_tag text-justify text-base leading-relaxed text-gray-700">
            Outside of engineering, I enjoy{" "}
            <a className="bold"> gaming, hiking, and mentoring students.</a>
            Whether I’m helping middle schoolers through homework or scripting
            videos that reach thousands online, I find purpose in inspiring
            others to believe their ambitious goals are achievable.
          </p>
          <p className="about_tag mt-4 text-justify text-base leading-relaxed text-gray-700">
            If you’d like to collaborate, chat about engineering projects, or
            just swap ideas, I’d love to connect!
          </p>
        </div>

        {/* Profile image */}
        <div className="flex size-72 flex-shrink-0 items-center justify-center">
          <img
            src="/images/life.jpg"
            alt="Danh has a life"
            className="h-full w-full rounded object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Introduction;

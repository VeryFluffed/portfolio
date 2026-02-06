import { Canvas } from "@/components/Home/Hero/Canvas";

export const Hero = () => {
  return (
    <section className="bg-background relative flex min-h-screen w-full flex-col">
      <div
        className={`absolute left-0 flex h-screen w-full items-center justify-center md:right-0 md:left-auto md:w-1/2`}
      >
        <div className="flex flex-col items-center justify-center gap-2 px-4">
          <p className="hero_tag text-foreground text-center text-6xl font-light">
            DANH CHI TRAN
          </p>
          <p className="hero_tag text-foreground text-center text-2xl font-thin">
            MECHATRONICS ENGINEER PORTFOLIO
          </p>
        </div>
      </div>
      <div className="absolute inset-0 h-full w-full">
        <Canvas />
      </div>
    </section>
  );
};

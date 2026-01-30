import Link from "@/components/Link";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { LinkedinIcon, MailIcon } from "lucide-react";

const AboutMe = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-2 sm:px-6 md:flex-row md:px-12 lg:px-20">
        {/* image */}
        <div className="flex size-72 shrink-0 items-center justify-center md:h-full">
          <img
            src="/images/profile.jpg"
            alt="Picture of Danh"
            className="h-full w-full rounded object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-center bg-white p-8">
          <div className="leading-relaxed text-gray-900">
            <p className={"mb-4 text-2xl tracking-widest"}>HELLO, I’M DANH!</p>
            <p className="about_tag mb-4 text-justify text-base leading-relaxed text-gray-700">
              I discovered my passion for <b>Mechatronics Engineering</b>{" "}
              through late-night projects that started as wild ideas and turned
              into real builds. Now, I’m pursuing my Electromechanical Systems
              Engineering degree at{" "}
              <Link to="https://www.cpp.edu/" external>
                Cal Poly Pomona
              </Link>
              , with a focus on Mechatronics. Along the way, I’ve built{" "}
              <b>
                go-karts, Raspberry Pi systems, and PCBs, while sharpening my
                problem-solving, teamwork, and leadership skills.
              </b>
            </p>
            <p className="about_tag mb-4 text-justify text-base leading-relaxed text-gray-700">
              I love working across <b>software and hardware</b> to solve
              everyday challenges. I get excited about projects that blend
              technical challenges with real-world impact, and I will keep
              pushing into
              <b> robotics and sustainable automation.</b> Beyond the technical
              side, I’m driven to inspire those around me—showing that ambitions
              often feel further away than they really are.
            </p>
            <p className="about_tag mb-4 text-justify text-base leading-relaxed text-gray-700">
              Outside of engineering, I enjoy gaming, mentoring students, and
              hiking. Scroll down to see some of my projects—or feel free to
              reach out if you’d like to connect!
            </p>
            {/* Social icons (beneath text) */}
            <div className="mt-2 mb-10 flex gap-6">
              <Link to="mailto:danhcorps@gmail.com" external>
                <MailIcon />
              </Link>
              <Link
                to="https://www.linkedin.com/in/danh-tran-9b657a362/"
                external
              >
                <LinkedinIcon />
              </Link>
              <Link to="https://github.com/VeryFluffed" external>
                <SiGithub />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

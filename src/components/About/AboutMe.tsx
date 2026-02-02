import Link from "@/components/Link";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { LinkedinIcon, MailIcon } from "lucide-react";
import { Markdown } from "@/components/Markdown";
import { aboutMeText } from "@/data/about";

export const AboutMe = () => {
  return (
    <section className="main flex flex-col items-center gap-12 md:flex-row">
      <div className="flex size-72 shrink-0 items-center justify-center md:h-full">
        <img
          src="/images/profile.jpg"
          alt="Picture of Danh"
          className="h-full w-full rounded object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center p-8">
        <div className="grid gap-4 not-first:mb-4 not-first:text-justify not-first:text-base not-first:leading-relaxed">
          <h2 className="mb-4 text-2xl tracking-widest">HELLO, I’M DANH!</h2>
          <Markdown>{aboutMeText}</Markdown>
          <div className="mt-2 mb-10 flex gap-6">
            <Link variant="icon" to="mailto:danhcorps@gmail.com" external>
              <MailIcon />
            </Link>
            <Link
              variant="icon"
              to="https://www.linkedin.com/in/danh-tran-9b657a362/"
              external
            >
              <LinkedinIcon />
            </Link>
            <Link variant="icon" to="https://github.com/VeryFluffed" external>
              <SiGithub />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

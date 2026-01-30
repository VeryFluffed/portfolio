import { Link } from "react-router-dom";

const projects = [
  {
    title: "Pickleball Machine (2025)",
    role: "Intern",
    description:
      "I was guided by a professional engineer to apply mechanical/electrical design principles. " +
      "I worked out the individual mechanisms within the overall system, such as python programming " +
      "an ESP32 to remotely control the speed and spin of the motors with the implementation of H-bridges. " +
      "I also researched, designed, and optimized a motorized capstan drive to be 3D-printed with electronics " +
      "testing and iteration.",
    video: null,
    tech: [
      { name: "SolidWorks", icon: "/icons/solidworks.png" },
      { name: "3D Printing", icon: "/icons/3dprinter.png" },
      { name: "Raspberry Pi", icon: "/icons/raspberrypi.png" },
      { name: "Python", icon: "/icons/python.png" },
      { name: "Arduino", icon: "/icons/arduino.png" },
      { name: "GitHub", icon: "/icons/github.png" },
    ],
    link: "/projects/pickleball",
  },
  {
    title: "Electrical Go-Kart (2024)",
    role: "Team Lead",
    description:
      "My team and I engineered a go-kart from a repurposed bed frame. I managed our ~1.2k " +
      "budget and our 3-member team for design, fabrication, and testing. This was our first time " +
      "working with real galvanized square steel, heavy-duty electrical wiring, and applying theory " +
      "to real life. We reached 15 mph in testing, applied torque/friction analysis, and drivetrain " +
      "troubleshooting.",
    video: "/videos/go-kart3.mp4",
    tech: [
      { name: "Altium", icon: "/icons/altium.png" },
      { name: "SolidWorks", icon: "/icons/solidworks.png" },
      { name: "Excel", icon: "/icons/excel.png" },
      { name: "3d Printing", icon: "/icons/3dprinter.png" },
    ],
    link: "/projects/go-kart",
  },
  {
    title: "RFID-Jukebox (2025)",
    role: "Solo Developer",
    description:
      "Inspired by a Minecrat Jukebox, I built a functioning Raspberry Pi music player with custom circuit " +
      "wiring. I also programmed GPIO button controls for audio playbacks, all to apply my theoretical " +
      "knowledge and strengthen my embedded systems and hardware-software integration skills. I plan to use my " +
      "recently learned 3D printing skills to print out the Minecraft Jukebox model.",
    video: "/videos/rfid-jukebox3.mp4",
    tech: [
      { name: "Raspberry Pi", icon: "/icons/raspberrypi.png" },
      { name: "Arduino", icon: "/icons/arduino.png" },
      { name: "C++", icon: "/icons/c++.png" },
      { name: "3D Printing", icon: "/icons/3dprinter.png" },
    ],
    link: "/projects/jukebox",
  },
  {
    title: "CyberPatriot Bash Script (2024)",
    role: "Team Captain",
    description:
      "After competitively securing Linux systems and servers for 3 years, I decided to write a Bash Script " +
      "specifically tailored towards Linux harding in CyberPatriot competitions. This required deep understanding " +
      "of file systems, permissions, system variables, redirection, command-line arguments, etc. We reached top " +
      "100 Nationals Platinum Tier twice.",
    video: "/videos/cyberpatriot.mp4",
    tech: [
      { name: "Linux", icon: "/icons/linux.png" },
      { name: "C++", icon: "/icons/c++.png" },
      { name: "GitHub", icon: "/icons/github.png" },
    ],
    link: "/projects/cyberpatriot",
  },
  {
    title: "Interactive Portfolio Website (2025)",
    role: "Solo Developer",
    description:
      "I designed and built this portfolio website from scratch to showcase my engineering projects in a way that " +
      "blends aesthetic design with technical depth. Instead of a static website, I wanted it to feel interactive " +
      "and immersive, so I incorporated 3D graphics, animations, and smooth navigation powered by modern React " +
      "frameworks.",
    video: null,
    tech: [
      { name: "React", icon: "/icons/react.png" },
      { name: "ThreeJS", icon: "/icons/threejs.png" },
      { name: "HTML", icon: "/icons/html.png" },
      { name: "CSS", icon: "/icons/css.png" },
      { name: "SolidWorks", icon: "/icons/solidworks.png" },
      { name: "GitHub", icon: "/icons/github.png" },
    ],
    link: "/projects/portfolio",
  },
];

const Projects = () => {
  return (
    <section className="mt-32 bg-white text-gray-900 sm:px-20 md:px-28 lg:px-32">
      <div className="px-12">
        <div className="mb-10 grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <Link
              key={i}
              to={p.link}
              className="flex flex-col overflow-hidden rounded-2xl bg-gray-100 shadow-lg transition-transform hover:scale-[1.02]"
            >
              <div key={i} className="">
                <div className="flex h-60 items-center justify-center bg-black">
                  {p.video ? (
                    <video
                      src={p.video}
                      autoPlay
                      loop
                      muted
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-xl text-white">
                      No Video Available
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-1 text-base font-extrabold">{p.title}</h3>
                  <p className="mb-4 text-xs font-semibold text-gray-500 uppercase">
                    {p.role}
                  </p>
                  <hr className="mb-4 border-gray-300" />
                  <p className="mb-6 text-xs text-gray-600">{p.description}</p>
                  <div>
                    <h4 className="mb-2 text-sm font-bold">
                      Software/Languages/Frameworks
                    </h4>
                    <div className="flex flex-wrap gap-4">
                      {p.tech.map((t, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <img
                            src={t.icon}
                            alt={t.name}
                            className="h-6 w-6 object-contain"
                          />
                          <span className="text-sm">{t.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

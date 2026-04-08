import { type IconType } from "@icons-pack/react-simple-icons";

export interface Project {
  title: string;
  role: string;
  description: string;
  video: string | null;
  tech: { name: string; icon: string | IconType }[];
  link: string;
}

export const projects = [
  {
    title: "Motorized Powder Blender (2026)",
    role: "Mechanical Engineer",
    description:
      "A USC researcher gave me a powder blender, and he asked me to motorize it because he wanted to save money. Thus, I was tasked with engineering a motorized drive system capable of rotating a ~9 kg loaded drum at around 30 RPM. This project includes calculating chain drive transmissions and uses a custom 3D-printed housing, ultimately saving at least $600.",
    video: null,
    tech: [
      { name: "SolidWorks", icon: "/icons/solidworks.webp" },
      { name: "3D Printing", icon: "/icons/3dprinter.webp" },
    ],
    link: "/projects/powdermachine",
  },
  {
    title: "Acoustic Attenuation Device (2026)",
    role: "Mechanical Engineer",
    description:
      "This project explores the design and optimization of a passive acoustic attenuation system for a low-pressure pneumatic launcher (airsoft platform). The goal is to minimize the acoustic signature generated during discharge by controlling compressible airflow expansion, turbulence dissipation, and wave interference inside a confined cylindrical structure.",
    video: null,
    tech: [
      { name: "SolidWorks", icon: "/icons/solidworks.webp" },
      { name: "3D Printing", icon: "/icons/3dprinter.webp" },
    ],
    link: "/projects/suppressor",
  },
  {
    title: "Pickleball Machine (2025)",
    role: "Robotics Engineer Intern",
    description:
      "I was guided by a professional engineer to apply mechanical/electrical design principles. " +
      "I worked out the individual mechanisms within the overall system, such as python programming " +
      "an ESP32 to remotely control the speed and spin of the motors with the implementation of H-bridges. " +
      "I also researched, designed, and optimized a motorized capstan drive to be 3D-printed with electronics " +
      "testing and iteration.",
    video: null,
    tech: [
      { name: "SolidWorks", icon: "/icons/solidworks.webp" },
      { name: "3D Printing", icon: "/icons/3dprinter.webp" },
      { name: "Raspberry Pi", icon: "/icons/raspberrypi.webp" },
      { name: "Python", icon: "/icons/python.webp" },
      { name: "Arduino", icon: "/icons/arduino.webp" },
      { name: "GitHub", icon: "/icons/github.webp" },
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
    video: "/videos/go-kart.mp4",
    tech: [
      { name: "Altium", icon: "/icons/altium.webp" },
      { name: "SolidWorks", icon: "/icons/solidworks.webp" },
      { name: "Excel", icon: "/icons/excel.webp" },
      { name: "3d Printing", icon: "/icons/3dprinter.webp" },
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
    video: "/videos/rfid-jukebox.mp4",
    tech: [
      { name: "Raspberry Pi", icon: "/icons/raspberrypi.webp" },
      { name: "Arduino", icon: "/icons/arduino.webp" },
      { name: "C++", icon: "/icons/c++.webp" },
      { name: "3D Printing", icon: "/icons/3dprinter.webp" },
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
      { name: "Linux", icon: "/icons/linux.webp" },
      { name: "C++", icon: "/icons/c++.webp" },
      { name: "GitHub", icon: "/icons/github.webp" },
    ],
    link: "/projects/cyberpatriot",
  },
] satisfies Project[];

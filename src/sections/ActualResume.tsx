export default function ActualResume() {
  return (
    <div className="mx-auto mb-12 max-w-4xl px-2 font-serif text-sm text-black">
      {/* Download */}
      <div className="mt-20 text-right">
        <a
          href="/images/Danh%20Tran%20Resume.pdf"
          download
          className="mt-2 inline-block rounded bg-gray-200 px-3 py-1 text-xs text-black shadow hover:bg-gray-300"
        >
          Download Resume
        </a>
      </div>

      {/* Header */}
      <div className="mb-4 text-center">
        <h1 className="text-xl font-bold">Danh Tran</h1>
        <p className="text-xs">
          (714) 837 - 5323 |{" "}
          <a href="mailto:danhtraannc@gmail.com" className="text-blue-600">
            danhtraannc@gmail.com
          </a>{" "}
          | Fountain Valley, CA
        </p>
        <p className="text-xs">
          <ago
            href="https://danhtran.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            danhtran.org
          </ago>{" "}
          |
          <a
            href="https://www.linkedin.com/in/danhctran"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            linkedin.com/in/danhctran
          </a>{" "}
          |
          <a
            href="https://github.com/VeryFluffed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            github.com/VeryFluffed
          </a>{" "}
        </p>
      </div>

      {/* Skills */}
      <div className="mb-4">
        <h2 className="mb-1 border-b border-black text-sm font-bold">SKILLS</h2>
        <p>
          <span className="font-semibold">Electrical:</span> PCB Design
          (Altium), ESP32, Arduino, Raspberry Pi, CAN Bus, I2C, SPI, UART, BLE,
          RFID
        </p>
        <p>
          <span className="font-semibold">Programming:</span> Python, C++, Bash,
          Java, HTML/CSS, Javascript, Git/GitHub, Linux, MATLAB, Excel
        </p>
        <p>
          <span className="font-semibold">Mechanical:</span> 3D Printing,
          SolidWorks CAD, Electromechanical Integration
        </p>
      </div>

      {/* Experience */}
      <div className="mb-4">
        <h2 className="mb-1 border-b border-black text-sm font-bold">
          EXPERIENCE
        </h2>
        <div className="mb-2">
          <div className="flex justify-between text-sm">
            <p className="">
              <a className="font-semibold">
                {" "}
                CREST Grant Robotics Research Lab{" "}
              </a>{" "}
              | <a className="italic"> Robotics, Motion Planning, AI/ML, C++</a>
            </p>
            <p className="">December 2025 - Present</p>
          </div>
          <div className="flex justify-between text-sm">
            <p className="italic">Robotics Engineer Intern </p>
            <p className="text-sm">Pomona, CA</p>
          </div>
          <ul className="list-inside list-disc">
            <li>
              Designed and fabricated 5-fingered robotic manipulator for agile
              manufacturing research, integrating AI and robotics in
              manufacturing setting with CREST Grant Robotics Research Lab
            </li>
            <li>
              Researched reliable physical architecture by comparing (DoF)
              actuators with compliant mechanisms and analyzing string tension
              forces with MATLAB: reduced distal mass and optimized electricity
            </li>
            <li>
              Integrated electromechanical hardware by researching electronic
              datasheets like CAN/UART communication and sizes on SolidWorks:
              developed functioning electromechanical system easy to modify for
              future researchers
            </li>
            <li>
              Developed grasp selection by evaluating AI/ML-based grasping, such
              as researching and comparing tactile sensors (force, pressure,
              slip) and cameras with point clouds: created a manufacturing
              system capable of working with direct raw sensor input,
              generalizing unseen objects, and improving vision quality with
              lenses and reflections
            </li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between text-sm">
            <p className="">
              <a className="font-semibold"> Autonomous Vehicle Laboratory </a> |{" "}
              <a className="italic">
                {" "}
                C++, Git/Github, I2C, SPI, UART, BLE, CAN Bus, Altium{" "}
              </a>
            </p>
            <p className="">November 2025 - Present</p>
          </div>
          <div className="flex justify-between text-sm">
            <p className="italic">Mechatronics Engineer Subteam Member </p>
            <p className="text-sm">Pomona, CA</p>
          </div>
          <ul className="list-inside list-disc">
            <li>
              Teamed up with senior engineering students to improve the old
              autonomous vehicle design and develop a smarter AI camera to
              create a level 5 autonomous vehicle
            </li>
            <li>
              Optimized Arduino/PCB (Altium) communication by rewriting the
              existing code in C++ to replace an unoptimized communication
              system (I2C, SPI, UART, BLE) with a CAN bus infrastructure:
              enabled reliable inter-module communication and improved
              electronic communication speed
            </li>
            <li>
              Improved data collection for the software team by implementing
              master CAN node logic to actively request and store real-time
              actuator feedback: increasing steering, throttle, and brakes data
              by 130%
            </li>
          </ul>
        </div>
      </div>

      {/* Projects */}
      <div className="mb-4">
        <h2 className="mb-1 border-b border-black text-sm font-bold">
          PROJECTS
        </h2>

        <div className="mb-2">
          <div className="flex justify-between text-sm">
            <p className="">
              <p className="">
                <a className="font-semibold"> Pickleball Launcher </a> |{" "}
                <a className="italic">
                  {" "}
                  Raspberry Pi, ESP32, Python, 3D Printing, C++, BLE{" "}
                </a>
              </p>
            </p>
            <p className="">February 2025 - August 2025</p>
          </div>
          <div className="flex justify-between text-sm">
            <p className="italic">Robotics Engineer Apprentice </p>
          </div>
          <ul className="list-inside list-disc">
            <li>
              Talked to a current professional engineer to start a pickleball
              launcher for pickleball training with AI cameras to detect players
              and adjust shooting difficulty to the player{" "}
            </li>
            <li>
              Developed physical architecture by modeling on Solidworks and
              comparing 3D printed gears and capstan drives, in turn optimizing
              the flow rate of pickleballs feeding the machine: saved energy
              usage and increased physical durability of internal mechanisms
            </li>
            <li>
              Programmed a dual motor shooter for pickleball, first using a
              Raspberry Pi (Python & Linux) as the main computer and eventually
              evolving to ESP32 (C++) with H-bridge drivers to control the
              motors: saved energy by switching and gained remote control using
              BLE for wireless connection on nRFConnect on iPhone
            </li>
          </ul>
        </div>

        <div>
          <div className="flex justify-between text-sm">
            <p className="">
              <p className="">
                <a className="font-semibold"> RFID-Jukebox </a> |{" "}
                <a className="italic">
                  {" "}
                  Raspberry Pi, Python, Arduino, C++, SolidWorks Cad, 3D
                  Printing, Linux{" "}
                </a>
              </p>
            </p>
            <p className="">February 2025 - November 2025</p>
          </div>
          <div className="flex justify-between text-sm">
            <p className="italic">Solo Developer </p>
          </div>
          <ul className="list-inside list-disc">
            <li>
              Recreated a Minecraft jukebox to work in real life, including
              designing, programming, and printing to play music
            </li>
            <li>
              Created physical architecture by comparing different push-push
              mechanisms and improving existing models on SolidWorks to 3D
              print: created a 50% thinner modular system, increased success of
              high-speed disc ejection by 150%
            </li>
            <li>
              Created a music system by comparing Raspberry Pi (Python & Linux)
              and Arduino (C++), and using RFID components: decreased cost by
              $40 choosing Arduinos, created individual music discs by logging
              each RFID ID with .mp4 to play on 2 speakers
            </li>
          </ul>
        </div>
      </div>

      {/* Education */}
      <div className="mb-4">
        <h2 className="mb-1 border-b border-black text-sm font-bold">
          EDUCATION
        </h2>
        <div className="mb-2">
          <div className="flex justify-between text-sm">
            <p className="font-semibold">
              California State Polytechnic University, Pomona
            </p>
            <p className="">Expected December 2027</p>
          </div>
          <p className="text-sm italic">
            Bachelor’s of Science in Electromechanical Systems Engineer
          </p>
          <ul className="list-inside list-disc">
            <li>CPP GPA: 4.0/4.0</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

const Jukebox = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16">
            <Link
                to="/projects"
                className="mt-5 mb-10 inline-block text-gray-600 hover:underline text-lg"
            >
                ← Back to Projects
            </Link>
            {/* Layout: image left, content right */}
            <div className="grid md:grid-cols-2 gap-12 items-start">

                {/* Project Image */}
                <div>
                    <img
                        src="/images/rfid-jukebox.png"
                        alt="Go-Kart Project"
                        className="rounded-lg shadow-lg object-cover w-full h-full"
                    />
                </div>

                {/* Project Content */}
                <div>
                    {/* Title */}
                    <h1 className="text-3xl font-bold mb-6 tracking-wide">
                        RFID-JUKEBOX
                    </h1>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Inspired by a Minecraft Jukebox, I built a functioning Raspberry Pi music player with custom
                        circuit wiring. I also programmed GPIO button controls for audio playbacks, all to apply my
                        theoretical knowledge and strengthen my embedded systems and hardware-software integration
                        skills. I plan to use my recently learned 3D printing skills to print out the Minecraft Jukebox
                        model and disc. I also plan to downgrade the hardware to Arduino to have a permanent Minecraft
                        Jukebox.
                    </p>

                    {/* Contributions & Collaborators */}
                    <div className="grid grid-cols-2 gap-8 mb-10">
                        <div>
                            <h3 className="text-sm font-semibold tracking-wider text-gray-500 mb-3">
                                CONTRIBUTIONS
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>Raspberry Pi System Setup & Integration</li>
                                <li>GPIO Button Circuit Design</li>
                                <li>Python Programming</li>
                                <li>Custom Circuit Wiring & Testing</li>
                                <li>3D Printing</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold tracking-wider text-gray-500 mb-3">
                                COLLABORATORS
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>Thomas Vu</li>
                            </ul>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="px-4 py-2 rounded bg-gray-800 text-white hover:bg-gray-700 transition"
                        >
                            Testing Results
                        </a>
                        <a
                            href="#"
                            className="px-4 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
                        >
                            CAD Files
                        </a>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[80%_20%] gap-12 items-center mt-10">
                {/* Motivation text */}
                <div>
                    <h1 className="text-2xl font-bold mb-6 tracking-wide">
                        Motivation
                    </h1>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        This project began as a simple gift—a wooden Minecraft flower pot—but I wanted to challenge myself by
                        blending creativity with engineering. Inspired by topics from my AP Physics 2 class, I transformed the
                        idea into a functioning Minecraft Jukebox that applied concepts of electricity and sound waves tangibly.
                        Building it during the busiest part of midterms and AP exams taught me how to manage time under pressure,
                        while also showing me how deeply I enjoy bringing theory into reality. It became my first solo engineering
                        project outside the classroom, sparking the foundation for my future in embedded systems and hands-on design.
                    </p>
                </div>

                {/* Flower image */}
                <div className="flex justify-center">
                    <img
                        src="/images/flower.png"
                        alt="Minecraft Flower Pot"
                        className="rounded-lg shadow-lg object-cover w-full h-auto"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[85%_15%] gap-12 items-center mt-10">

                <div>
                    {/* The Idea */}
                    <h1 className="text-2xl font-bold mb-6 tracking-wide mt-10">
                        The Idea
                    </h1>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        The jukebox needed to be able to read a chip embedded inside a 3D-printed Minecraft disc. Naturally, my
                        first step was to use either RFID or NFC. I found RFID to be generally easier for me, and I did not mind
                        the one-way communication in RFID. Each disc would contain a different RFID (RC522) scanner for a unique
                        ID for every music disc in the game. I would have to create a hole inside the jukebox to insert the
                        disc, and the RFID reader will be mounted next to the disc hole to read the disc every time it is inserted.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Next, I need to connect the RFID reader to a computer to program it to receive inputs from the RFID
                        scanner. With the unique ID, I would store them in a file to connect to a specific song, meaning each
                        disc would have its own dedicated MP3 file. Once I connect each ID to a song, the computer would play
                        the MP3 file on speakers that I would connect to the computer.
                    </p>
                </div>
                {/* RC522 image */}
                <div className="flex justify-center mb-6">
                    <img
                        src="/images/RC522.png"
                        alt="RC522"
                        className="rounded-lg shadow-lg object-cover max-w-sm w-full h-auto"
                    />
                </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
                For the physical design, I would have to 3D print the jukebox and disc. The discs would be easy since
                they are flat, solid pieces with no texture. I would simply add paper overlays to distinguish each disc
                and for visual accuracy. The jukebox itself was a little more complex. It required layered modeling to
                replicate its textured appearance and a carefully measured slot to align with the RFID sensor.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-[80%_20%] gap-12 items-center mt-10">

                <div>
                    {/* Electrical Architecture */}
                    <h1 className="text-2xl font-bold mb-6 tracking-wide mt-10">
                        Electrical Architecture
                    </h1>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        At the heart of the system was the Raspberry Pi 4, which acts as the computer to handle both RFID
                        reading and audio playback. It would be much easier to learn because of its UI and comparatively easier
                        wiring. Although a powerful tool, that is exactly why I would eventually want to downgrade to purely
                        Arduino. That way, I could effectively learn how to use a Raspberry Pi and utilize it in other projects
                        while keeping the Arduino inside.
                    </p>
                </div>
                {/*  RC522 image */}
                <div className="flex justify-center mb-6">
                    <img
                        src="/images/raspberrypi4Pack.png"
                        alt="some stuff I got lol"
                        className="rounded-lg shadow-lg object-cover max-w-sm w-full h-auto"
                    />
                </div>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
                To detect each disc, I used the RC522 RFID module, which communicates with the Pi using the SPI (Serial
                Peripheral Interface) protocol. SPI is a fast communication standard where one device acts as the master
                (in this case, the Raspberry Pi) and the other acts as the slave (the RC522). The master controls the
                timing and flow of data, while the slave responds when selected.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
                The RC522 RFID module was connected to the Pi using the SPI protocol. Here’s the exact wiring:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-12 items-center mb-10">
                <div className="overflow-x-auto">
                    <table className="table-auto border-collapse border border-gray-300 w-full text-left text-sm">
                        <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">RC522 Pin</th>
                            <th className="border border-gray-300 px-4 py-2">Raspberry Pi Pin</th>
                            <th className="border border-gray-300 px-4 py-2">Function</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">VCC</td>
                            <td className="border border-gray-300 px-4 py-2">Pin 1 (3.3V)</td>
                            <td className="border border-gray-300 px-4 py-2">Power Supply</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">RST</td>
                            <td className="border border-gray-300 px-4 py-2">Pin 22 (GPIO 25)</td>
                            <td className="border border-gray-300 px-4 py-2">Reset</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">GND</td>
                            <td className="border border-gray-300 px-4 py-2">Pin 6 (Ground)</td>
                            <td className="border border-gray-300 px-4 py-2">Ground</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">MISO</td>
                            <td className="border border-gray-300 px-4 py-2">Pin 21 (GPIO 9)</td>
                            <td className="border border-gray-300 px-4 py-2">SPI MISO (Master In Slave Out)</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">MOSI</td>
                            <td className="border border-gray-300 px-4 py-2">Pin 19 (GPIO 10)</td>
                            <td className="border border-gray-300 px-4 py-2">SPI MOSI (Master Out Slave In)</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">SCK</td>
                            <td className="border border-gray-300 px-4 py-2">Pin 23 (GPIO 11)</td>
                            <td className="border border-gray-300 px-4 py-2">SPI Clock</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">SDA</td>
                            <td className="border border-gray-300 px-4 py-2">Pin 24 (GPIO 8)</td>
                            <td className="border border-gray-300 px-4 py-2">SPI Chip Select (CE0)</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-center">
                    <img
                        src="/images/PiToRC522.png"
                        alt="silly wiring"
                        className="rounded-lg shadow-lg object-cover max-w-sm w-full h-auto"
                    />
                </div>
            </div>

            <ul className="space-y-2 text-gray-700 mb-6">
                <li className="font-bold">3.3V (RC522 VCC → Pi Pin 1)</li>
                <p>Electronics are powered by different voltages, but they are most commonly run on 3.3V, including the
                    RC522. So, it’s powered directly from the Pi’s 3.3V pin. Using 5V would damage the reader.</p>
                <li className="font-bold">GND (RC522 GND → Pi Pin 6)</li>
                <p>GND means ground. This provides the shared reference ground so the Pi and RC522 “speak the same
                    electrical language.” Without a common ground, data signals wouldn’t be reliable.</p>
                <li className="font-bold">SCK (RC522 SCK → Pi Pin 23, GPIO11)</li>
                <p>This is the clock line. Since SPI is synchronous, the Pi (master) generates clock pulses on SCK, and
                    the RC522 (slave) only reads or writes data when the clock ticks. This ensures both devices are
                    always in sync.</p>
                <li className="font-bold">MOSI (RC522 MOSI → Pi Pin 19, GPIO10)</li>
                <p>MOSI stands for Master Out, Slave In. It’s the line where the Raspberry Pi sends commands and data to
                    the RC522, such as “read the UID” or “write to this register.”</p>
                <li className="font-bold">MISO (RC522 MISO → Pi Pin 21, GPIO9)</li>
                <p>MISO stands for Master In, Slave Out. This is the line where the RC522 sends data back to the
                    Raspberry Pi, like the unique identifier (UID) from a scanned RFID tag.</p>
                <li className="font-bold">SDA / NSS (RC522 SDA → Pi Pin 24, GPIO8, CE0)</li>
                <p>This is the chip select (sometimes called slave select). In SPI, multiple slaves can be connected to
                    the same bus. The Raspberry Pi uses this pin to select which slave it’s currently communicating
                    with. When the Pi pulls this line low, it tells the RC522: “You’re the one I want to communicate
                    with now.”</p>
                <li className="font-bold">RST (RC522 RST → Pi Pin 22, GPIO25)</li>
                <p>This reset pin allows the Raspberry Pi to restart the RFID module if needed. It ensures the module
                    can be re-initialized in software without power cycling the whole system.</p>
                <li className="font-bold">IRQ (not connected)</li>
                <p>The RC522 has an interrupt pin that could notify the Pi when a card is detected, but for simplicity,
                    I left it unused. Instead, the software polls (repeatedly checks) for new cards.</p>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
                Because SPI is a hardware-level protocol, each pin must connect to its exact corresponding pin on the
                Raspberry Pi’s GPIO. These are not arbitrary: the Pi has dedicated hardware SPI pins (GPIO8, GPIO9,
                GPIO10, GPIO11), and only those can handle the timing and data transfer for SPI communication. That’s
                why the RC522 wiring is strict—if MOSI or SCK were connected to the wrong pins, the Pi wouldn’t be able
                to talk to the reader at all.
            </p>

            {/* Software & Code */}
            <h1 className="text-2xl font-bold mb-6 tracking-wide mt-10">
                Software & Code
            </h1>
            <p className="text-gray-700 leading-relaxed mb-6">
                Before any code could run, I had to get the Raspberry Pi up and running. Unlike a laptop, there’s no
                power button. I turned it on by plugging in the USB-C power cable (for Raspberry Pi 4) into a power
                supply that provides at least 5V at 3A. Once it’s plugged in, the Pi immediately begins to boot.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
                To make development easier, I first flashed a microSD card with Raspberry Pi OS using the Raspberry Pi
                Imager tool on my computer. After inserting the microSD into the Pi and powering it on, the system
                booted into the desktop environment. From there, I could either connect a monitor, keyboard, and mouse
                directly or run the Pi headless over SSH to control it from my laptop.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
                Before connecting the RFID module, I had to enable the SPI interface on the Raspberry Pi, since SPI is
                disabled by default. To do this, I had to use the Raspberry Pi’s terminal, which is a Linux operating
                system. Luckily for me, I had extensive amounts of experience with Linux from Cyberpatriot. I did this
                using the configuration tool: sudo raspi-config
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
                Then I navigated to Interfacing Options → SPI → Enable. After rebooting, the Pi was ready to communicate
                with the RC522. With the hardware powered and SPI enabled, I installed the necessary Python libraries.
                These included:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
                <li className="font-bold">pip install RPi.GPIO</li>
                <li className="font-bold">pip install spidev</li>
                <li className="font-bold">pip install mfrc522</li>
                <li className="font-bold">pip install pygame</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
                At this point, the Pi was fully ready: powered up, connected to the RFID reader, and loaded with the
                libraries needed to read RFID tags and play music. Only then could I move on to writing the actual
                jukebox logic in Python, where the RFID chip’s unique ID is matched to a song and the GPIO buttons
                control playback.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
                The jukebox software was written in Python 3, using three main libraries:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
                <li className="font-bold">mfrc522 → communicates with the RC522 RFID reader via SPI</li>
                <li className="font-bold">Pygame.mixer → manages audio playback for MP3 files</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
                The program runs continuously in a loop and listens for two types of input. First, the RFID Tag
                Detection. When the RFID chip is inserted, the RC522 module detects it and sends the chip’s unique
                identifier (UID) to the Raspberry Pi. The UID is looked up in a dictionary stored in the program that
                maps each ID to a specific MP3. For example, a tag with the UID 123456789 might play “cat.mp3”. The
                second is the playback management. The pygame.mixer library is responsible for loading, playing, pausing,
                and stopping MP3 files. Songs are stored in a dedicated /songs folder on the Pi, and each file
                corresponds to a Minecraft disc. By separating the song mapping into a Python dictionary, new discs
                (RFID tags) can be easily added in the future if new songs are released.
            </p>

            {/* Downgrading to Arduino */}
            <h1 className="text-2xl font-bold mb-6 tracking-wide mt-10">
                Downgrading to Arduino
            </h1>

            <p className="text-gray-700 leading-relaxed mb-6">
                I started by choosing which computer I would replace the Raspberry Pi with. I looked for my Arduino Uno,
                which I had received as a gift, but I couldn’t find it. So, I decided to treat myself to an Arduino Nano,
                which was only $5. That meant I saved $40 and could keep my Raspberry Pi for other projects in the future.
                However, Arduinos and Pis are two completely different systems. Although they both have power, ground,
                and various GPIO pins, the Pi runs a full operating system (Linux) and can execute Python scripts
                directly, while the Arduino runs pre-compiled C++ code uploaded through the Arduino IDE. This means that
                everything—from how code is written to how the devices communicate—is fundamentally different.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
                The biggest difference was that the Arduino doesn’t have an operating system or filesystem. It can’t directly play MP3 files because it lacks the hardware to process audio. That meant I couldn’t just reuse my Python program that used Pygame for music playback. Instead, I had to use an <span className="font-bold">external MP3 decoding module</span>—the <span className="font-bold">DFPlayer Mini</span>. The DFPlayer Mini can play audio files stored on a microSD card, and it communicates with the Arduino via a serial (UART) connection. So now, instead of having the Raspberry Pi do both the RFID reading and audio playback in software, I split the job into two hardware modules: the <span className="font-bold">RC522 RFID Reader</span> for detecting discs, and the <span className="font-bold">DFPlayer Mini</span> for playing the matching songs.
            </p>
            <div className="flex justify-center">
                <img
                    src="/images/ArduinoNano.webp"
                    alt="Arduino Nano"
                    className="rounded-lg shadow-lg object-cover max-w-sm w-full h-auto m-6"
                />
                <img
                    src="/images/DFPlayer.jpg"
                    alt="DFPlayer"
                    className="rounded-lg shadow-lg object-cover max-w-sm w-full h-auto m-6"
                />
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
                Once I had both modules, I needed to wire them correctly to the Arduino Nano. Both the RC522 and DFPlayer require 3.3–5V power, but each communicates using a different protocol—SPI for the RFID reader, and UART for the DFPlayer. Here’s how I wired everything together:
            </p>

            <div className="overflow-x-auto mb-8">
                <table className="table-auto border-collapse border border-gray-300 w-full text-left text-sm">
                    <thead className="bg-gray-100">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">Component</th>
                        <th className="border border-gray-300 px-4 py-2">Pin</th>
                        <th className="border border-gray-300 px-4 py-2">Arduino Nano Pin</th>
                        <th className="border border-gray-300 px-4 py-2">Function</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2" rowSpan="7">RC522 RFID Reader</td>
                        <td className="border border-gray-300 px-4 py-2">VCC</td>
                        <td className="border border-gray-300 px-4 py-2">3.3V</td>
                        <td className="border border-gray-300 px-4 py-2">Power Supply</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">RST</td>
                        <td className="border border-gray-300 px-4 py-2">D9</td>
                        <td className="border border-gray-300 px-4 py-2">Reset Pin</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">GND</td>
                        <td className="border border-gray-300 px-4 py-2">GND</td>
                        <td className="border border-gray-300 px-4 py-2">Ground</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">MISO</td>
                        <td className="border border-gray-300 px-4 py-2">D12</td>
                        <td className="border border-gray-300 px-4 py-2">SPI MISO (Master In Slave Out)</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">MOSI</td>
                        <td className="border border-gray-300 px-4 py-2">D11</td>
                        <td className="border border-gray-300 px-4 py-2">SPI MOSI (Master Out Slave In)</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">SCK</td>
                        <td className="border border-gray-300 px-4 py-2">D13</td>
                        <td className="border border-gray-300 px-4 py-2">SPI Clock</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">SDA</td>
                        <td className="border border-gray-300 px-4 py-2">D10</td>
                        <td className="border border-gray-300 px-4 py-2">SPI Chip Select</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2" rowSpan="4">DFPlayer Mini</td>
                        <td className="border border-gray-300 px-4 py-2">VCC</td>
                        <td className="border border-gray-300 px-4 py-2">5V</td>
                        <td className="border border-gray-300 px-4 py-2">Power Supply</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">GND</td>
                        <td className="border border-gray-300 px-4 py-2">GND</td>
                        <td className="border border-gray-300 px-4 py-2">Ground</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">TX</td>
                        <td className="border border-gray-300 px-4 py-2">D2 (Software RX)</td>
                        <td className="border border-gray-300 px-4 py-2">Serial Receive</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">RX</td>
                        <td className="border border-gray-300 px-4 py-2">D3 (Software TX)</td>
                        <td className="border border-gray-300 px-4 py-2">Serial Transmit</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
                Unlike the Raspberry Pi, where the SPI interface was enabled through Linux configuration, the Arduino’s SPI is built directly into the hardware. As long as you import the correct library and use the proper pins (D10–D13 on the Nano), it will automatically handle SPI communication. The same goes for the serial connection to the DFPlayer Mini, which uses a “software serial” library since the Nano’s hardware serial (pins 0 and 1) are reserved for uploading programs and debugging.
            </p>

            <h2 className="text-xl font-semibold mb-4">1. Software & Code</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
                The Arduino version of the Jukebox was written in C++, which is a compiled, statically-typed language—very different from Python. Instead of using dynamic imports and dictionaries, everything had to be explicitly declared in setup() and loop(). I used two main libraries:
            </p>

            <ul className="space-y-2 text-gray-700 mb-6">
                <li className="font-bold">MFRC522.h — for controlling the RFID reader via SPI</li>
                <li className="font-bold">DFRobotDFPlayerMini.h — for controlling the DFPlayer Mini over serial</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
                The structure of the program followed the standard Arduino format:
            </p>

            <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg overflow-x-auto text-sm mb-6">
{`#include <SPI.h>
#include <MFRC522.h>
#include <SoftwareSerial.h>
#include <DFRobotDFPlayerMini.h>

#define RST_PIN 9
#define SS_PIN 10

MFRC522 rfid(SS_PIN, RST_PIN);
SoftwareSerial mySerial(2, 3); // RX, TX
DFRobotDFPlayerMini player;

void setup() {
  SPI.begin();
  rfid.PCD_Init();
  mySerial.begin(9600);
  Serial.begin(9600);
  if (!player.begin(mySerial)) {
    Serial.println("DFPlayer not detected!");
    while(true);
  }
  player.volume(20); // Set volume level (0–30)
  Serial.println("System ready.");
}

void loop() {
  if (!rfid.PICC_IsNewCardPresent() || !rfid.PICC_ReadCardSerial()) return;

  String uid = "";
  for (byte i = 0; i < rfid.uid.size; i++) {
    uid += String(rfid.uid.uidByte[i]);
  }

  Serial.print("Card detected: ");
  Serial.println(uid);

  if (uid == "11223344") {
    player.play(1); // Play first song on SD
  } else if (uid == "55667788") {
    player.play(2);
  }

  rfid.PICC_HaltA();
  delay(500);
}`}
</pre>

            <p className="text-gray-700 leading-relaxed mb-6">
                Each RFID tag has a unique 4-byte identifier (UID), just like in the Raspberry Pi version. However, instead of using a Python dictionary to map UIDs to songs, I used simple <span className="font-bold">if statements</span> because of the Arduino’s limited memory. The DFPlayer Mini automatically plays MP3 files stored on the SD card in numerical order (001.mp3, 002.mp3, etc.), so each UID corresponds to a specific file number.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
                Uploading the code was done through the Arduino IDE. Once the Nano was connected to my computer, I selected the proper board and COM port, hit “Upload,” and waited for the program to compile and transfer via USB. When powered, the RFID reader lights up, and the serial monitor shows each card’s UID. As soon as a tagged disc is detected, the DFPlayer immediately plays the associated song.
            </p>

            <h2 className="text-xl font-semibold mb-4">2. Testing & Improvements</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
                The Arduino version turned out to be more efficient and compact than the Raspberry Pi one. It booted instantly (no OS required), used far less power, and required only a 5V USB source. However, debugging was harder—since there’s no real console output except through the serial monitor. In the future, I plan to add LED indicators that light up based on the current disc playing, and even physical playback buttons that connect to digital pins with debounce code.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
                This transition from Raspberry Pi to Arduino taught me the fundamental differences between microcontrollers and microcomputers. The Pi is excellent for prototyping and software-heavy projects, while the Arduino excels in real-time control with direct hardware integration. With this downgrade, I not only built a more permanent jukebox system but also gained a deeper understanding of low-level hardware communication, digital protocols like SPI and UART, and the inner workings of embedded C++ programming.
            </p>


            {/* 3D Printing */}
            <h1 className="text-2xl font-bold mb-6 tracking-wide mt-10">
                3D Printing
            </h1>
            <p className="text-gray-700 leading-relaxed mb-6">
                Coming soon…
            </p>

            {/* Conclusion */}
            <h1 className="text-2xl font-bold mb-6 tracking-wide mt-10">
                Conclusion
            </h1>
            <p className="text-gray-700 leading-relaxed mb-6">
                The RFID Jukebox turned out to be one of my most rewarding projects. It started off with just a simple
                idea and a love for arts and crafts. Then, it evolved into a system that blended skills across hardware
                wiring and embedded software. I wired the Raspberry Pi and RFID reader pin by pin, coded the logic to
                map RFID tags to MP3 songs, and Thomas and I designed the physical jukebox body so everything fit
                together. I truly loved working on this project. More importantly, I proved to myself that I could learn
                entirely new skills, software, and hardware because of my love for engineering, even if it simply
                started as an inspiration from both Minecraft and physics class.
            </p>
            <Link
                to="/projects"
                className="mt-5 mb-10 inline-block text-gray-600 hover:underline text-lg"
            >
                ← Back to Projects
            </Link>
        </section>
    );
};

export default Jukebox;

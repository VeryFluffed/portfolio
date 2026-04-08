---
title: RFID-JUKEBOX
description: Inspired by a Minecraft Jukebox, I built a functioning Raspberry Pi music player with custom circuit wiring. I programmed GPIO button controls for audio playbacks, all to apply my theoretical knowledge and strengthen my embedded systems and hardware-software integration skills. I plan to use my recently learned 3D printing skills to print out the Minecraft Jukebox model and disc.
image: /images/rfid-hero.webp
alt: RFID-Jukebox Project
collaborators: [Thomas Vu]
contributions:
  [
    Raspberry Pi System Setup & Integration,
    GPIO Button Circuit Design,
    Python Programming,
    Custom Circuit Wiring & Testing,
    3D Printing,
  ]
buttons:
  [
    { label: "Code", url: "https://github.com/VeryFluffed/RFID-Jukebox" },
    {
      label: "CAD Files",
      url: "https://drive.google.com/drive/folders/1hfMqkzi2uWiy0Mkr-TCJY92aNP8Y7IjQ?usp=sharing",
    },
  ]
---

## Motivation

This project began as a simple gift—a wooden Minecraft flower pot—but I wanted to challenge myself by blending creativity with engineering. Inspired by topics from my AP Physics 2 class, I transformed the idea into a functioning Minecraft Jukebox that applied concepts of electricity and sound waves tangibly. Building it during the busiest part of midterms and AP exams taught me how to manage time under pressure, while also showing me how deeply I enjoy bringing theory into reality. It became my first solo engineering project outside the classroom, sparking the foundation for my future in embedded systems and hands-on design.

![Minecraft Flower Pot](/images/flower.webp)

## The Idea

The jukebox needed to be able to read a chip embedded inside a 3D-printed Minecraft disc. Naturally, my first step was to use either RFID or NFC. I found RFID to be generally easier for me, and I did not mind the one-way communication in RFID. Each disc would contain a different RFID (RC522) scanner for a unique ID for every music disc in the game. I would have to create a hole inside the jukebox to insert the disc, and the RFID reader will be mounted next to the disc hole to read the disc every time it is inserted.

Next, I need to connect the RFID reader to a computer to program it to receive inputs from the RFID scanner. With the unique ID, I would store them in a file to connect to a specific song, meaning each disc would have its own dedicated MP3 file. Once I connect each ID to a song, the computer would play the MP3 file on speakers that I would connect to the computer.

![RC522](/images/RC522.webp)

For the physical design, I would have to 3D print the jukebox and disc. The discs would be easy since they are flat, solid pieces with no texture. I would simply add paper overlays to distinguish each disc and for visual accuracy. The jukebox itself was a little more complex. It required layered modeling to replicate its textured appearance and a carefully measured slot to align with the RFID sensor.

## Electrical Architecture

At the heart of the system was the Raspberry Pi 4, which acts as the computer to handle both RFID reading and audio playback. It would be much easier to learn because of its UI and comparatively easier wiring. Although a powerful tool, that is exactly why I would eventually want to downgrade to purely Arduino. That way, I could effectively learn how to use a Raspberry Pi and utilize it in other projects while keeping the Arduino inside.

![Raspberry Pi 4 Pack](/images/raspberrypi4Pack.webp)

To detect each disc, I used the RC522 RFID module, which communicates with the Pi using the SPI (Serial Peripheral Interface) protocol. SPI is a fast communication standard where one device acts as the master (in this case, the Raspberry Pi) and the other acts as the slave (the RC522). The master controls the timing and flow of data, while the slave responds when selected.

The RC522 RFID module was connected to the Pi using the SPI protocol. Here's the exact wiring:

| RC522 Pin | Raspberry Pi Pin | Function                       |
| --------- | ---------------- | ------------------------------ |
| VCC       | Pin 1 (3.3V)     | Power Supply                   |
| RST       | Pin 22 (GPIO 25) | Reset                          |
| GND       | Pin 6 (Ground)   | Ground                         |
| MISO      | Pin 21 (GPIO 9)  | SPI MISO (Master In Slave Out) |
| MOSI      | Pin 19 (GPIO 10) | SPI MOSI (Master Out Slave In) |
| SCK       | Pin 23 (GPIO 11) | SPI Clock                      |
| SDA       | Pin 24 (GPIO 8)  | SPI Chip Select (CE0)          |

![Wiring Diagram](/images/PiToRC522.webp)

**3.3V (RC522 VCC → Pi Pin 1)**

Electronics are powered by different voltages, but they are most commonly run on 3.3V, including the RC522. So, it's powered directly from the Pi's 3.3V pin. Using 5V would damage the reader.

**GND (RC522 GND → Pi Pin 6)**

GND means ground. This provides the shared reference ground so the Pi and RC522 "speak the same electrical language." Without a common ground, data signals wouldn't be reliable.

**SCK (RC522 SCK → Pi Pin 23, GPIO11)**

This is the clock line. Since SPI is synchronous, the Pi (master) generates clock pulses on SCK, and the RC522 (slave) only reads or writes data when the clock ticks. This ensures both devices are always in sync.

**MOSI (RC522 MOSI → Pi Pin 19, GPIO10)**

MOSI stands for Master Out, Slave In. It's the line where the Raspberry Pi sends commands and data to the RC522, such as "read the UID" or "write to this register."

**MISO (RC522 MISO → Pi Pin 21, GPIO9)**

MISO stands for Master In, Slave Out. This is the line where the RC522 sends data back to the Raspberry Pi, like the unique identifier (UID) from a scanned RFID tag.

**SDA / NSS (RC522 SDA → Pi Pin 24, GPIO8, CE0)**

This is the chip select (sometimes called slave select). In SPI, multiple slaves can be connected to the same bus. The Raspberry Pi uses this pin to select which slave it's currently communicating with. When the Pi pulls this line low, it tells the RC522: "You're the one I want to communicate with now."

**RST (RC522 RST → Pi Pin 22, GPIO25)**

This reset pin allows the Raspberry Pi to restart the RFID module if needed. It ensures the module can be re-initialized in software without power cycling the whole system.

**IRQ (not connected)**

The RC522 has an interrupt pin that could notify the Pi when a card is detected, but for simplicity, I left it unused. Instead, the software polls (repeatedly checks) for new cards.

Because SPI is a hardware-level protocol, each pin must connect to its exact corresponding pin on the Raspberry Pi's GPIO. These are not arbitrary: the Pi has dedicated hardware SPI pins (GPIO8, GPIO9, GPIO10, GPIO11), and only those can handle the timing and data transfer for SPI communication. That's why the RC522 wiring is strict—if MOSI or SCK were connected to the wrong pins, the Pi wouldn't be able to talk to the reader at all.

![Connected Wires](/images/rfid-jukebox.webp)

## Software & Code

Before any code could run, I had to get the Raspberry Pi up and running. Unlike a laptop, there's no power button. I turned it on by plugging in the USB-C power cable (for Raspberry Pi 4) into a power supply that provides at least 5V at 3A. Once it's plugged in, the Pi immediately begins to boot.

To make development easier, I first flashed a microSD card with Raspberry Pi OS using the Raspberry Pi Imager tool on my computer. After inserting the microSD into the Pi and powering it on, the system booted into the desktop environment. From there, I could either connect a monitor, keyboard, and mouse directly or run the Pi headless over SSH to control it from my laptop.

Before connecting the RFID module, I had to enable the SPI interface on the Raspberry Pi, since SPI is disabled by default. To do this, I had to use the Raspberry Pi's terminal, which is a Linux operating system. Luckily for me, I had extensive amounts of experience with Linux from Cyberpatriot. I did this using the configuration tool: sudo raspi-config

Then I navigated to Interfacing Options → SPI → Enable. After rebooting, the Pi was ready to communicate with the RC522. With the hardware powered and SPI enabled, I installed the necessary Python libraries. These included:

```
pip install RPi.GPIO
pip install spidev
pip install mfrc522
pip install pygame
```

At this point, the Pi was fully ready: powered up, connected to the RFID reader, and loaded with the libraries needed to read RFID tags and play music. Only then could I move on to writing the actual jukebox logic in Python, where the RFID chip's unique ID is matched to a song and the GPIO buttons control playback.

The jukebox software was written in Python 3, using three main libraries:

- **mfrc522** → communicates with the RC522 RFID reader via SPI
- **Pygame.mixer** → manages audio playback for MP3 files

The program runs continuously in a loop and listens for two types of input. First, the RFID Tag Detection. When the RFID chip is inserted, the RC522 module detects it and sends the chip's unique identifier (UID) to the Raspberry Pi. The UID is looked up in a dictionary stored in the program that maps each ID to a specific MP3. For example, a tag with the UID 123456789 might play "cat.mp3". The second is the playback management. The pygame.mixer library is responsible for loading, playing, pausing, and stopping MP3 files. Songs are stored in a dedicated /songs folder on the Pi, and each file corresponds to a Minecraft disc. By separating the song mapping into a Python dictionary, new discs (RFID tags) can be easily added in the future if new songs are released.

## Downgrading to Arduino

I started by choosing which computer I would replace the Raspberry Pi with. I looked for my Arduino Uno, which I had received as a gift, but I couldn't find it. So, I decided to treat myself to an Arduino Nano, which was only $5. That meant I saved $40 and could keep my Raspberry Pi for other projects in the future. However, Arduinos and Pis are two completely different systems. Although they both have power, ground, and various GPIO pins, the Pi runs a full operating system (Linux) and can execute Python scripts directly, while the Arduino runs pre-compiled C++ code uploaded through the Arduino IDE. This means that everything—from how code is written to how the devices communicate—is fundamentally different.

The biggest difference was that the Arduino doesn't have an operating system or filesystem. It can't directly play MP3 files because it lacks the hardware to process audio. That meant I couldn't just reuse my Python program that used Pygame for music playback. Instead, I had to use an **external MP3 decoding module**—the **DFPlayer Mini**. The DFPlayer Mini can play audio files stored on a microSD card, and it communicates with the Arduino via a serial (UART) connection. So now, instead of having the Raspberry Pi do both the RFID reading and audio playback in software, I split the job into two hardware modules: the **RC522 RFID Reader** for detecting discs, and the **DFPlayer Mini** for playing the matching songs.

![Arduino Nano](/images/ArduinoNano.webp)

![DFPlayer](/images/DFPlayer.webp)

Once I had both modules, I needed to wire them correctly to the Arduino Nano. Both the RC522 and DFPlayer require 3.3–5V power, but each communicates using a different protocol—SPI for the RFID reader, and UART for the DFPlayer. Here's how I wired everything together:

| Component         | Pin  | Arduino Nano Pin | Function                       |
| ----------------- | ---- | ---------------- | ------------------------------ |
| RC522 RFID Reader | VCC  | 3.3V             | Power Supply                   |
|                   | RST  | D9               | Reset Pin                      |
|                   | GND  | GND              | Ground                         |
|                   | MISO | D12              | SPI MISO (Master In Slave Out) |
|                   | MOSI | D11              | SPI MOSI (Master Out Slave In) |
|                   | SCK  | D13              | SPI Clock                      |
|                   | SDA  | D10              | SPI Chip Select                |
| DFPlayer Mini     | VCC  | 5V               | Power Supply                   |
|                   | GND  | GND              | Ground                         |
|                   | TX   | D2 (Software RX) | Serial Receive                 |
|                   | RX   | D3 (Software TX) | Serial Transmit                |

Unlike the Raspberry Pi, where the SPI interface was enabled through Linux configuration, the Arduino's SPI is built directly into the hardware. As long as you import the correct library and use the proper pins (D10–D13 on the Nano), it will automatically handle SPI communication. The same goes for the serial connection to the DFPlayer Mini, which uses a "software serial" library since the Nano's hardware serial (pins 0 and 1) are reserved for uploading programs and debugging.

### Arduino Software & Code

The Arduino version of the Jukebox was written in C++, which is a compiled, statically-typed language—very different from Python. Instead of using dynamic imports and dictionaries, everything had to be explicitly declared in setup() and loop(). I used two main libraries:

- **MFRC522.h** — for controlling the RFID reader via SPI
- **DFRobotDFPlayerMini.h** — for controlling the DFPlayer Mini over serial

The structure of the program followed the standard Arduino format:

```cpp
#include <SPI.h>
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
}
```

Each RFID tag has a unique 4-byte identifier (UID), just like in the Raspberry Pi version. However, instead of using a Python dictionary to map UIDs to songs, I used simple **if statements** because of the Arduino's limited memory. The DFPlayer Mini automatically plays MP3 files stored on the SD card in numerical order (001.mp3, 002.mp3, etc.), so each UID corresponds to a specific file number.

Uploading the code was done through the Arduino IDE. Once the Nano was connected to my computer, I selected the proper board and COM port, hit "Upload," and waited for the program to compile and transfer via USB. When powered, the RFID reader lights up, and the serial monitor shows each card's UID. As soon as a tagged disc is detected, the DFPlayer immediately plays the associated song.

### Physical Architecture

I knew I wanted to have the disc jump up just like it does in Minecraft, so I decided to go for a push-push mechanism. Just like the Nintendo cartridges, when inserting the game, I want to push the disc into the jukebox, then push it again to eject it.

<video
  src="/videos/push-push-mechanism.mp4"
  autoPlay
  loop
  muted
  playsInline
  controls
  style="display:block; margin:1rem auto; height:40vh; width:auto; border-radius:8px;"
/>

After some online research, I found a model by Aaron Medina on YouTube. A spring would push a sliding component upward in a case, and another stick that limits how high the slider goes. His version had an inclined space that bent a piece of the push-push mechanism. Instead of doing that, I revised it to push it to the side to reset the mechanism reliably without bending it.

Because I planned to have 1 pixel of the jukebox be 1cm in real life, I had to plan out how to affect the height of the push-push mechanism. Based on the image, the slider must have a gap between where it must stop (blue mark) and where it hangs loose (red mark).

On the spring holders, I later added fillets and chamfers so that when compressed, the two parts would slide into each other seamlessly. Before the fix, it would have an error rate of upwards of 60% on the lateral side, depending on where the normal force comes from. Afterwards, the lateral side had an error rate of 0%. The longitudinal error rate was much less, at 30%, because of the normal force of the stick. To fix this, I added a few blockers on top to stop the slider from moving, now having a longitudinal error rate of 0%.

![embeddedTag](/images/embeddedTag.png)

The disc, although not perfectly replicated in size in Minecraft as a floating item, was very easy and designed to optimally fit into the 2cm x 10cm wide gap on the jukebox to easily apply pressure without having the disc flip around. The RFID tag is placed in a tag-shaped hole on the disc. The MFRC522 scanner is mounted on the sides of the gap to read the disc as it enters. The rest of the electronics are stored inside the 16cm^3 jukebox. 

## 3D Printing

This was my first time using a 3D printer. Originally, I planned to learn and use the 3D printers provided at my school. However, they were always being used by other people. And there is a reason why I quit tennis to get employed in my last year of high school. Thus, in a random spur of events, I ended up buying a Centauri Carbon Elegoo 3D printer at Microcenter. After a quick Google search, I am now using OrcaSlicer. I learned a lot of troubleshooting with 3D printing after some printing. I learned that high nozzle temp → stringing, oozing, blobs, rough corners, and warping. Low nozzle temp → underextrusion.

## Conclusion

This project bridged my theoretical knowledge in circuits and embedded systems with hands-on hardware deployment. Starting with a Raspberry Pi gave me time to learn Linux and Python debugging, while transitioning to Arduino taught me the constraints and efficiency gains of bare-metal embedded programming. The combination of RFID detection, audio playback, and 3D printing proved that even a small team can build something creative and functional that brings a beloved game mechanic to life.

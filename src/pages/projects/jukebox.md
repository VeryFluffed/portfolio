---
title: RFID-JUKEBOX
description: A working, 3D-printed Minecraft jukebox. Push an RFID-tagged disc into the slot and it plays that disc's song; push again and it pops back out. I prototyped it on a Raspberry Pi in Python, ported it to a $5 Arduino Nano with a DFPlayer Mini, and reworked the push-push eject mechanism from a 60% failure rate to 0%.
image: /images/rfid-hero.webp
alt: RFID-Jukebox Project
collaborators: [Thomas Vu]
contributions:
  [
    Push-push eject mechanism redesign,
    Raspberry Pi prototype in Python,
    Arduino Nano and DFPlayer Mini port (C++),
    RC522 and DFPlayer wiring,
    3D-printed enclosure and discs,
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

This started as a gift: a wooden Minecraft flower pot. I wanted to push it further and build something that actually used what I was learning in AP Physics 2 about circuits and sound. I built it during midterms and AP exams, and it became my first engineering project outside a classroom. Thomas helped with 3D printing.

![Minecraft Flower Pot](/images/flower.webp)

## How It Works

Each printed disc has an **RFID tag** in a pocket. An **RC522 reader** mounted beside the slot reads the tag's unique ID (UID) as the disc slides in, and the controller plays the MP3 matched to that UID. I chose RFID over NFC because it was simpler to get running, and I only needed one-way communication.

Everything is scaled so **one Minecraft pixel = 1 cm**, which makes the jukebox a 16 cm cube with a 2 cm × 10 cm disc slot.

## The Hard Part: Push-Push Eject

In Minecraft, the disc pops up out of the jukebox. To get that, I used a **push-push mechanism**, the same idea as an old cartridge slot: push to lock, push again to release.

<video
  src="/videos/push-push-mechanism.mp4"
  autoPlay
  loop
  muted
  playsInline
  controls
  style="display:block; margin:1rem auto; height:40vh; width:auto; border-radius:8px;"
/>

I started from a design by Aaron Medina on YouTube. A spring pushes a slider up inside a case, and a pin riding in a track stops it at the locked position. His version resets by *bending* a flexible piece on an incline. I didn't trust a printed flexure to survive repeated cycles, so I changed the reset to push the pin *sideways* instead.

Getting it reliable took two fixes:

1. **Lateral jams (60% → 0%).** 61 out of 100 trials, the spring holders caught on each other when the push came in off-center. Adding fillets and chamfers let the two parts slide into each other no matter where the force came from.
2. **Longitudinal jams (30% → 0%).** 30 out of 100 trials, the pin's normal force let the slider shift forward and back and miss the lock. A few blockers on top constrained that motion.

Scaling to 1 px = 1 cm meant I didn't get to choose the height. The slider's travel, between where it locks (blue mark) and where it hangs loose (red mark), had to fit the jukebox's fixed proportions.

![embeddedTag](/images/embeddedTag.png)

## Prototype on Raspberry Pi

I started on a **Raspberry Pi 4** because it runs Linux and Python, so I could debug interactively. Linux was already familiar from CyberPatriot.

The RC522 talks to the Pi over **SPI**, which has to be enabled in `raspi-config`. It connects to the Pi's dedicated hardware SPI pins (GPIO 8–11) and is powered from the 3.3 V rail, since the RC522 is a 3.3 V part. I left the IRQ pin unconnected and had the code **poll** for new cards, which is simpler and fast enough for a jukebox.

![Connected Wires](/images/rfid-jukebox.webp)

The Python program uses two libraries: **mfrc522** reads the UID over SPI, and **pygame.mixer** plays the MP3. UIDs map to song files in a dictionary, so adding a new disc means adding one line.

## Porting to Arduino

A Pi is overkill for a jukebox, and I wanted it free for other projects. So I moved the build to an **Arduino Nano**. It cost \$5, which saved about \$40 compared with leaving the Pi inside.

The catch is that an Arduino has no operating system, no filesystem, and no way to decode MP3s. So the one-computer design became two modules:

- **RC522** on the Nano's hardware SPI pins (D10–D13)
- **DFPlayer Mini**, which decodes MP3s from its own microSD card and takes commands over **UART**. I used SoftwareSerial on D2/D3 so the Nano's hardware serial stays free for uploading and debugging.

| Component     | Pin                   | Nano Pin   | Function          |
| ------------- | --------------------- | ---------- | ----------------- |
| RC522         | VCC                   | 3.3V       | Power             |
|               | SDA / SCK / MOSI / MISO | D10 / D13 / D11 / D12 | SPI     |
|               | RST                   | D9         | Reset             |
| DFPlayer Mini | VCC                   | 5V         | Power             |
|               | TX / RX               | D2 / D3    | Software serial   |

The C++ version replaces the dictionary with a short `if`/`else` chain, since there are only a few discs and memory is tight. The DFPlayer plays files by number (`001.mp3`, `002.mp3`…), so each UID maps to a track number:

```cpp
void loop() {
  if (!rfid.PICC_IsNewCardPresent() || !rfid.PICC_ReadCardSerial()) return;

  String uid = "";
  for (byte i = 0; i < rfid.uid.size; i++) uid += String(rfid.uid.uidByte[i]);

  if (uid == "11223344")      player.play(1);
  else if (uid == "55667788") player.play(2);

  rfid.PICC_HaltA();
  delay(500);
}
```

## Printing

This was my first 3D printing project. The school printers were always booked, so I bought an Elegoo Centauri Carbon and learned OrcaSlicer on it. The discs are flat and simple, with paper overlays for the art. The jukebox body took layered modeling to get the pixel texture, and the slot had to line up precisely with the reader.

## What I'd Do Differently

- **Fix the logic levels.** The RC522 is a 3.3 V part. I powered it from the Nano's 3.3 V pin, but the Nano's SPI lines swing 5 V, so the reader's inputs are driven above their rating. It works, but it's out of spec and could shorten the reader's life. A \$1 level shifter on SDA, SCK, MOSI, and RST would fix it.
- **Use the IRQ pin** instead of polling for cards.
---
title: CYBERPATRIOT
description: Three years as Linux lead and captain of a CyberPatriot team, a national competition where teams secure deliberately broken Windows and Linux machines against the clock. I turned an 11-page hardening checklist into a modular Bash script that saved our Linux section at least an hour of each 4-hour round. We made the Platinum Tier National Semifinals twice.
image: /images/cyberpatriotintro.webp
alt: CyberPatriot Project
collaborators:
  [Nathan Pham, Brian Vu, Aiden Tran, Bryan Nguyen, Ayaan Qureshi, James Nguyen]
contributions:
  [
    Modular Bash hardening script,
    11-page Linux hardening checklist,
    Linux lead and team captain,
    Mentoring and Bash scripting workshop,
  ]
buttons:
  [
    { label: "Checklist", url: "https://drive.google.com/drive/folders/1L0PMlrh_ZSt16w6MNULW1TF_0dv77UjW?usp=drive_link" },
    { label: "Bash Script", url: "https://github.com/VeryFluffed/bashscript" },
  ]
---

## Motivation

At club rush my sophomore year, I found out the Robotics Club also ran CyberPatriot. Everyone told me it was boring. I started a team anyway with a few close friends, partly out of curiosity and partly because I wanted to learn Linux properly. I figured it would matter later when I worked on embedded and integrated systems. It did.

## The First Year

Only one of our six members, Aiden, had competed before, and none of us knew Linux. Aiden taught us the rules and scoring. I volunteered for Linux and spent the first round googling every command, breaking more than I fixed.

What changed things was realizing it isn't really a hacking competition. It's a **pattern-recognition** game. The same kinds of vulnerabilities show up round after round, so the skill is anticipating where they'll be and fixing them before you go looking. By the end of that year we were one of the top Gold Tier teams in the nation.

## How a Round Works

Each team gets virtual machine images (Windows desktop, Windows Server, and Linux) plus a Cisco networking challenge. Every image comes with a scenario README and is seeded with misconfigurations: unauthorized users, weak password policy, unnecessary services, bad file permissions, prohibited software. A scoring engine awards points in real time as you fix things and **takes points away if you break a required service**. Rounds are 4 hours.

That last rule shapes the whole strategy. Speed matters, but so does knowing what *not* to touch.

![score report](/images/scorereport.webp)

## From Checklist to Script

Over my first two years I built an **11-page Linux checklist** covering forensics, updates, users and groups, firewall, PAM password policy, services, SSH, permissions, and prohibited software. It worked, but I was typing the same commands every round.

So I turned it into a Bash script. The first version was a straight list of commands, and it broke on the first round with a different scenario. One image requires SSH and says to remove nginx; the next is the opposite. A script that blindly hardens everything loses points.

The fix was to make it **modular**. Each area of the checklist became its own function:

```
manage_packages          configure_openssh_server
security_policies        configure_mysql_server
configure_networking     configure_apache_server
audit_cron               manage_kernel
miscellaneous_security
```

**Command-line arguments** choose which functions run. After reading the README, I call only the modules that fit that scenario and leave the services it requires alone.

[FILL IN: short excerpt of your argument handling, 5–10 lines]

Building it pushed me into the parts of Bash I'd been avoiding: `find`, `grep`, `awk`, and `sed` for searching files, piping and redirection for chaining checks, and system variables so the same script works across Ubuntu, Debian, and Mint images.

The script saved the Linux section **at least one hour of every four-hour round**. [FILL IN: how it saved time for the Windows teammates, or cut this claim.]

One rule never changed: **forensics questions come first, before any script runs**. They often ask about files that hardening deletes.

![forensic question](/images/forensic.webp)

## Results

- Platinum Tier National Semifinalist, twice
- #1 in California, Gold Tier, before moving up to Platinum
- [FILL IN: "25th nationally in [round / tier]" from the scoreboard, if that's what it shows]

![top scoring report](/images/topscore.webp)

## Coaching

Our school had no dedicated CyberPatriot coach, and most of what I learned came from past competitors' write-ups and practice images. By my third year I was running practice sessions, sharing my checklist and script, and teaching a Bash workshop. I tried to explain *why* each fix works, not just what to type, because the scenarios change and memorized commands don't transfer.

Watching members go from zero Linux experience to carrying their own images was as satisfying as competing. [FILL IN: one concrete outcome, e.g. "X of the members I trained now lead the team."]
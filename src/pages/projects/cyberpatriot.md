---
title: CYBERPATRIOTS
description: After competitively securing Linux systems and servers for 3 years, I decided to write a Bash Script specifically tailored towards Linux hardening in CyberPatriot competitions. This required a deep understanding of file systems, permissions, system variables, redirection, command-line arguments, etc. We reached the top 100 Nationals Platinum Tier twice.
image: /images/cyberpatriotintro.jpg
alt: Go-Kart Project
collaborators:
  [Nathan Pham, Brian Vu, Aiden Tran, Bryan Nguyen, Ayaan Qureshi, James Nguyen]
contributions:
  [
    Bash Scripting for System Hardening,
    Linux File System & Permissions Analysis,
    Command-Line Automation & Argument Handling,
    Security Policy Development,
    Competition Leadership & Training,
  ]
buttons:
  [
    { label: "Checklist", url: "/images/The%20Better%20Linux%20Checklist.pdf" },
    { label: "Bash Script", url: "https://github.com/VeryFluffed/bashscript" },
  ]
---

## Motivation

During club rush my sophomore year of high school, I saw that the Robotics Club hosted CyberPatriots competitions. I was already joining the Robotics Club, and I asked my friends what CyberPatriots was. I was given the description that it was a boring competition, but I was still very curious and created a team just to try it out and to get closer to the members of the Robotics Club. I decided to create a team anyway, pulling in a few of my close friends because I’ve always preferred working with small, efficient groups. I also had a personal motivation: I wanted to finally learn Linux from the inside out because I thought it would be a vital skill when learning integrated systems in engineering.

## Getting Started

Our first year was very scuffed. Out of our team of 6, only one, Aiden Tran, had previous experience in a CyberPatriot competition. Worst of all, none of us had any experience in Linux or Packet Tracing (Cisco) at all. Aiden had to teach us the rules, scoring engine, and best practices for hardening an operating system. I volunteered to learn Linux and spent most of the first round googling every command I could, breaking more systems than I fixed. Although really funny and mentally breaking, I quickly adapted to the competitions, learning that it wasn’t about learning commands and hacking. Rather, it was more of a scenario game, picking up competition patterns to anticipate where vulnerabilities would exist and preemptively patching them. By the end of our first year, we placed in one of the top gold teams in the nation.

## Competition Basics

The competition was comprised of 4 different operating systems:

**Windows Personal (Windows 10/11)**

These images simulate a regular desktop computer, the one almost everyone has. The focus is on user security: removing unauthorized accounts, setting strong password policies, disabling risky startup programs, checking Windows Defender/firewall settings, uninstalling insecure software, and applying updates. They are also responsible for setting up any changes and securities in accordance with the competition scenario.

**Windows Server (Server 2016/2019/2022)**

These simulate enterprise-level servers that manage networks. The focus is on administrative security: configuring Group Policy, securing Active Directory accounts, managing roles (like DNS or IIS), restricting remote access, and ensuring server services aren’t misconfigured. They also have to manage competition scenario software and policies.

**Linux (Ubuntu/Debian-based)**

Linux images test command-line skills. Competitions mostly use Ubuntu, but they change to Debian or Mint in later rounds. The focus is on system administration and scripting: managing users/groups, fixing file permissions, patching software, auditing services (SSH, Apache, etc.), configuring firewalls, and applying security scripts. Similarly, they must adhere to competition scenarios.

**Cisco (Packet Tracer)**

MOSI stands for Master Out, Slave In. It’s the line where the Raspberry Pi sends commands and data to the RC522, such as “read the UID” or “write to this register.”

CyberPatriot provides competitors with virtual machine images of Windows and Linux systems, and competitors use VMWare to open these virtual machine images. Each image has its own competition scenario, highlighting what needs to be secured. It is also deliberately riddled with security misconfigurations—weak passwords, unnecessary services, mis-set permissions, etc. The competition engine automatically scores us in real time whenever we fix a vulnerability. Points are deducted if we break functionality, which means every decision and second mattered in the 4-hour competition. Success required a blend of technical accuracy and quick googling since each round had strict time limits.

## Linux Security

Over three years, I kept the same role:

**Linux Lead:**

I was mastering user/group management, file permissions, SSH security, cron jobs, and service hardening.

**Team Captain:**

I was organizing group studies, researching different resources, and finding practice images.

The Linux OS had a steep learning curve. I had to learn an entirely new language to navigate the system around using the Terminal. This language is Shell Scripting, usually using Bash. I needed to do this just to learn how to do simple tasks, such as opening certain files, listing out users and groups, etc. I also needed to learn the different types of services and policies, so knowing how to use the terminal was necessary. Here are some of the basics I learned:

<img src="/images/scorereport.jpg" alt="score report" width="220" height="294" />

**Forensics Questions**

These you should ALWAYS DO BEFORE DELETING ANY FILES. Forensics questions could require you to explore files that are downloaded on the computer, including malware or unauthorized files. In common competitions, especially early competitions, they would ask you to find the direct path to unauthorized .mp3 files or a backdoor, which you can find by typing:

```
sudo locate *.mp3
```

It is also very important to delete these prohibited files after getting the forensic questions. It is also very common to decrypt a message left on the computer somewhere. When this happens, I like to use BitDecoder64 to decrypt it.

![forensic question](/images/forensic.png)

**Update and Upgrades**

I like to update immediately after I complete the forensic questions because of the risk of removing software. You can do this by typing:

```
sudo apt-get upgrade
```

Afterwards, type:

```
sudo apt-get update
```

Make sure you type “y” when asked. I know there is a command to do all of this at once, but it breaks for me sometimes, which is:

```
sudo apt-get upgrade && apt-get update
```

**User & Group Management**

In the README file, there is a list of authorized users and admins. We have to compare that list to the users who are actually on the computer. You can list out all the users in the file `/etc/passwd` to see all the users. Another option I recommend for beginners is to use the UI. Since the competition mainly uses Ubuntu 22, you can see a list of users in the settings, which you can access but searching settings in the “show applications” on the bottom left or by clicking the top right.

To create a group, type:

```
sudo groupadd (groupname)
```

To add a user to a group, type:

```
sudo usermod -aG (groupname) (username)
```

**Firewall**

Linux either uses UFW or GUFW for its firewall. You can check it in the README file. If it isn’t installed, type:

```
sudo apt install (g)ufw
```

To enable it, type:

```
sudo (g)ufw enable
```

Make sure the firewall is denying incoming and allowing SSH. Type:

```
sudo (g)ufw allow ssh
```

**PAM (Password Policies)**

Linux uses PAM files as its password policies. First is
`/etc/pam.d/common-password`. To open it, type:

```
sudo gedit /etc/pam.d/common-password
```

Add `minlen=10` on the line that contains `password [success=2 default=ignore] pam_unix.so`. You can also make sure every user requires a password by checking `/etc/pam.d/common-auth` does not have `nullok`.

**SystemCTL (Services)**

To check active services, type:

```
sudo systemctl list-units --type=service --state=active
```

To stop a service, type:

```
sudo stop (service)
```

Then disable it with:

```
sudo disable (service)
```

**SSH Security**

To secure SSH, type:

```
sudo gedit /etc/ssh/sshd_config
```

Find `PermitRootLogin yes` and change it to `PermitRootLogin no`.

**File Permissions**

To secure sensitive files, type:

```
sudo chmod 640 /etc/shadow
sudo chmod 640 /etc/passwd
```

**Applications and Software**

To delete common prohibited apps, for example Ophcrack, type:

```
sudo apt-get remove ophcrack
```

There are still many more ways to secure a Linux image, but these are the basics that should always be on your team’s checklist.

## Scripting

After repeating the same tasks over and over again, I began writing a custom Bash script to automate repetitive hardening tasks. I added everything from my 11-page checklist into this script. Instead of manually auditing multiple files, my script could scan for insecure permissions, reset password policies, disable unused services, and apply baseline firewall rules in seconds. Writing the script was very easy. Simply put, the bash script contains commands a person would typically put on terminal. However, they must add this at the top of the .sh file of the bash script:

```
#!/bin/bash
```

Then, just put down all the lines of code you want. However, I knew that the many competitions will have different scenarios. For example, one competition will require removing SSH for points and updating nginx, while another competition could be the other way around. Thus, I grouped the commands into different functions. In my bash script, I have:

- manage_packages
- security_policies
- configure_networking
- configure_openssh_server
- configure_mysql_server
- configure_apache_server
- audit_cron
- manage_kernel
- miscellaneous_security

Similar to many languages, you can define a function like:

```
function_name() {...code...}
```

And you can call the function by typing out the name of the function like:

```
function_name()
```

And function_name will run. This pushed me deeper into:

- File system traversal (find, grep, awk, sed)
- Redirection & piping to chain commands
- Command-line arguments to make the script reusable across rounds
- System variables for dynamic configuration

The script alone saved the Linux section at least 1 hour of the 4 competition hours. For my Windows teammates, it saved them even more time. Not only did this save us precious competition time, but it also gave me experience in writing production-like code that interacted with a live system under constraints, reaching my goals to become experienced in a Linux environment.

## Personal Achievements

Throughout the three years of competition, here are some achievements I received:

- Top 100 Platinum Tier National Semifinalist (twice) — ranking in the top 1% of competitors nationwide
- #1 in California Gold Tier before advancing to Platinum
- Recognized as the Linux specialist on the team, often tasked with the most technically demanding fixes
- Gained a reputation for scripting efficiency, which shaved hours off our team’s workflow

![top scoring report](/images/topscore.png)

## Coaching

By my third year, I was no longer just a competitor. My growth was successful largely due to vlog posts from previous competitors and practice images online. Our school did not have a coach dedicated to Cyberpatriots. Thus, I started mentoring younger members, teaching them both Linux fundamentals and competition strategies. I monitored live practice sessions, shared all of my resources, and also ran a Bash Scripting workshop. Even after high school, I still wanted to remain as a mentor, eventually a coach, for those who came up to me, especially thanking me for helping them achieve their dream of becoming a Cybersecurity specialist in their career. I ran live demos and broke down why commands worked instead of just how to type them. Watching rookies go from zero Linux experience to becoming valuable team members was as rewarding as competing myself.

## Conclusion

CyberPatriot started as “that boring competition my friends told me about,” but it ended up being a defining experience in my high school journey. I learned how to dissect an operating system, automate its hardening, and work under pressure with a team. More importantly, it built the foundation for my passion in cybersecurity, automation, and systems engineering, skills that continue to carry into every project I build.

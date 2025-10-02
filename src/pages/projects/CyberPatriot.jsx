import React from "react";
import { Link } from "react-router-dom";

const CyberPatriot = () => {
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
                        src="/images/cyberpatriotintro.jpg"
                        alt="Go-Kart Project"
                        className="rounded-lg shadow-lg object-cover w-full h-full"
                    />
                </div>

                {/* Project Content */}
                <div>
                    {/* Title */}
                    <h1 className="text-3xl font-bold mb-6 tracking-wide">
                        CyberPatriot
                    </h1>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed mb-6">
                        After competitively securing Linux systems and servers for 3 years, I decided to write a Bash
                        Script specifically tailored towards Linux hardening in CyberPatriot competitions. This required
                        a deep understanding of file systems, permissions, system variables, redirection, command-line
                        arguments, etc. We reached the top 100 Nationals Platinum Tier twice.
                    </p>

                    {/* Contributions & Collaborators */}
                    <div className="grid grid-cols-2 gap-8 mb-10">
                        <div>
                            <h3 className="text-sm font-semibold tracking-wider text-gray-500 mb-3">
                                CONTRIBUTIONS
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>Bash Scripting for System Hardening</li>
                                <li>Linux File System & Permissions Analysis</li>
                                <li>Command-Line Automation & Argument Handling</li>
                                <li>Security Policy Development</li>
                                <li>Competition Leadership & Training</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold tracking-wider text-gray-500 mb-3">
                                COLLABORATORS
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>Nathan Pham</li>
                                <li>Brian Vu</li>
                                <div>
                                    <a
                                        href="https://aidentran.dev/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-black transition-colors"
                                    >
                                        Aiden Tran
                                    </a>
                                </div>
                                <li>Bryan Nguyen</li>
                                <li>Ayaan Qureshi</li>
                                <li>James Nguyen</li>
                            </ul>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4">
                        <a
                            href="/public/images/The Better Linux Checklist.pdf"
                            className="px-4 py-2 rounded bg-gray-800 text-white hover:bg-gray-700 transition"
                        >
                            Checklist
                        </a>
                        <a
                            href="https://github.com/VeryFluffed/bashscript"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
                        >
                            Bash Script
                        </a>
                    </div>
                </div>
            </div>
            <h1 className="text-2xl font-bold mb-6 tracking-wide mt-10">
                Motivation
            </h1>
            <p className="text-gray-700 leading-relaxed mb-6">
                During club rush my sophomore year of high school, I saw that the Robotics Club hosted CyberPatriots
                competitions. I was already joining the Robotics Club, and I asked my friends what CyberPatriots was. I
                was given the description that it was a boring competition, but I was still very curious and created a
                team just to try it out and to get closer to the members of the Robotics Club. I decided to create a
                team anyway, pulling in a few of my close friends because I’ve always preferred working with small,
                efficient groups. I also had a personal motivation: I wanted to finally learn Linux from the inside out
                because I thought it would be a vital skill when learning integrated systems in engineering.
            </p>
            <h1 className="text-2xl font-bold mb-6 tracking-wide">
                Getting Started
            </h1>
            <p className="text-gray-700 leading-relaxed mb-6">
                Our first year was very scuffed. Out of our team of 6, only one, Aiden Tran, had previous experience in
                a CyberPatriot competition. Worst of all, none of us had any experience in Linux or Packet Tracing
                (Cisco) at all. Aiden had to teach us the rules, scoring engine, and best practices for hardening an
                operating system. I volunteered to learn Linux and spent most of the first round googling every command
                I could, breaking more systems than I fixed. Although really funny and mentally breaking, I quickly
                adapted to the competitions, learning that it wasn’t about learning commands and hacking. Rather, it
                was more of a scenario game, picking up competition patterns to anticipate where vulnerabilities would
                exist and preemptively patching them. By the end of our first year, we placed in one of the top gold
                teams in the nation.
            </p>
            <h1 className="text-2xl font-bold mb-6 tracking-wide">
                Competition Basics
            </h1>
            <p className="text-gray-700 leading-relaxed mb-6">
                The competition was comprised of 4 different operating systems:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
                <li className="font-bold">Windows Personal (Windows 10/11)</li>
                <p>These images simulate a regular desktop computer, the one almost everyone has. The focus is on user
                    security: removing unauthorized accounts, setting strong password policies, disabling risky startup
                    programs, checking Windows Defender/firewall settings, uninstalling insecure software, and applying
                    updates. They are also responsible for setting up any changes and securities in accordance with the
                    competition scenario.
                </p>
                <li className="font-bold">Windows Server (Server 2016/2019/2022)</li>
                <p>These simulate enterprise-level servers that manage networks. The focus is on administrative
                    security: configuring Group Policy, securing Active Directory accounts, managing roles (like DNS or
                    IIS), restricting remote access, and ensuring server services aren’t misconfigured. They also have
                    to manage competition scenario software and policies.</p>
                <li className="font-bold">Linux (Ubuntu/Debian-based)</li>
                <p>Linux images test command-line skills. Competitions mostly use Ubuntu, but they change to Debian or
                    Mint in later rounds. The focus is on system administration and scripting: managing users/groups,
                    fixing file permissions, patching software, auditing services (SSH, Apache, etc.), configuring
                    firewalls, and applying security scripts. Similarly, they must adhere to competition scenarios.</p>
                <li className="font-bold">Cisco (Packet Tracer)</li>
                <p>MOSI stands for Master Out, Slave In. It’s the line where the Raspberry Pi sends commands and data to
                    the RC522, such as “read the UID” or “write to this register.”</p>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
                CyberPatriot provides competitors with virtual machine images of Windows and Linux systems, and
                competitors use VMWare to open these virtual machine images. Each image has its own competition
                scenario, highlighting what needs to be secured. It is also deliberately riddled with security
                misconfigurations—weak passwords, unnecessary services, mis-set permissions, etc. The competition
                engine automatically scores us in real time whenever we fix a vulnerability. Points are deducted if we
                break functionality, which means every decision and second mattered in the 4-hour competition. Success
                required a blend of technical accuracy and quick googling since each round had strict time limits.
            </p>
            <h1 className="text-2xl font-bold mb-6 tracking-wide">
                Linux Security
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-[80%_20%] gap-12 items-center mt-10">

                <div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Over three years, I kept the same role:
                    </p>
                    <ul className="space-y-2 text-gray-700 mb-6">
                        <li className="font-bold">Linux Lead:</li>
                        <p>I was mastering user/group management, file permissions, SSH security, cron jobs, and service
                            hardening.
                        </p>
                        <li className="font-bold">Team Captain:</li>
                        <p>I was organizing group studies, researching different resources, and finding practice images.</p>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        The Linux OS had a steep learning curve. I had to learn an entirely new language to navigate the system
                        around using the Terminal. This language is Shell Scripting, usually using Bash. I needed to do this
                        just to learn how to do simple tasks, such as opening certain files, listing out users and groups, etc.
                        I also needed to learn the different types of services and policies, so knowing how to use the terminal
                        was necessary. Here are some of the basics I learned:
                    </p>
                </div>
                {/*  RC522 image */}
                <div className="flex justify-center mb-6">
                    <img
                        src="/images/scorereport.jpg"
                        alt="score report"
                        className="rounded-lg shadow-lg object-cover max-w-sm w-full h-auto"
                    />
                </div>
            </div>
            <ul className="space-y-2 text-gray-700 mb-6">
                <li className="font-bold">Forensics Questions</li>
                <p>
                    These you should ALWAYS DO BEFORE DELETING ANY FILES. Forensics questions could
                    require you to explore files that are downloaded on the computer, including malware
                    or unauthorized files. In common competitions, especially early competitions, they
                    would ask you to find the direct path to unauthorized .mp3 files or a backdoor,
                    which you can find by typing:
                </p>
                <pre className="bg-gray-100 p-2 rounded-lg text-sm overflow-x-auto">
    <code>sudo locate *.mp3</code>
  </pre>
                <p>
                    It is also very important to delete these prohibited files after getting the forensic
                    questions. It is also very common to decrypt a message left on the computer somewhere.
                    When this happens, I like to use BitDecoder64 to decrypt it.
                </p>

                <div className="flex justify-center mb-6">
                    <img
                        src="/images/forensic.png"
                        alt="forensic question"
                        className="rounded-lg shadow-lg object-cover max-w-sm w-full h-auto"
                    />
                </div>

                <li className="font-bold">Update and Upgrades</li>
                <p>
                    I like to update immediately after I complete the forensic questions because of the risk
                    of removing software. You can do this by typing:
                </p>
                <pre className="bg-gray-100 p-2 rounded-lg text-sm overflow-x-auto">
    <code>sudo apt-get upgrade</code>
  </pre>
                <p>Afterwards, type:</p>
                <pre className="bg-gray-100 p-2 rounded-lg text-sm overflow-x-auto">
    <code>sudo apt-get update</code>
  </pre>
                <p>
                    Make sure you type “y” when asked. I know there is a command to do all of this at once,
                    but it breaks for me sometimes, which is:
                </p>
                <pre className="bg-gray-100 p-2 rounded-lg text-sm overflow-x-auto">
    <code>sudo apt-get upgrade && apt-get update</code>
  </pre>

                <li className="font-bold">User & Group Management</li>
                <p>
                    In the README file, there is a list of authorized users and admins. We have to compare
                    that list to the users who are actually on the computer. You can list out all the users
                    in the file <code>/etc/passwd</code> to see all the users. Another option I recommend for
                    beginners is to use the UI. Since the competition mainly uses Ubuntu 22, you can see a
                    list of users in the settings, which you can access but searching settings in the “show
                    applications” on the bottom left or by clicking the top right.
                </p>
                <p>
                    To create a group, type:
                </p>
                <pre className="bg-gray-100 p-2 rounded-lg text-sm overflow-x-auto">
    <code>sudo groupadd (groupname)</code>
  </pre>
                <p>
                    To add a user to a group, type:
                </p>
                <pre className="bg-gray-100 p-2 rounded-lg text-sm overflow-x-auto">
    <code>sudo usermod -aG (groupname) (username)</code>
  </pre>

                <li className="font-bold">Firewall</li>
                <p>
                    Linux either uses UFW or GUFW for its firewall. You can check it in the README file. If it
                    isn’t installed, type:
                </p>
                <pre className="bg-gray-100 p-2 rounded-lg text-sm overflow-x-auto">
    <code>sudo apt install (g)ufw</code>
  </pre>
                <p>To enable it, type:</p>
                <pre className="bg-gray-100 p-2 rounded-lg text-sm overflow-x-auto">
    <code>sudo (g)ufw enable</code>
  </pre>
                <p>Make sure the firewall is denying incoming and allowing SSH. Type:</p>
                <pre className="bg-gray-100 p-2 rounded-lg text-sm overflow-x-auto">
    <code>sudo (g)ufw allow ssh</code>
  </pre>

                <li className="font-bold">PAM (Password Policies)</li>
                <p>
                    Linux uses PAM files as its password policies. First is{" "}
                    <code>/etc/pam.d/common-password</code>. To open it, type:
                </p>
                <pre className="bg-gray-100 p-2 rounded-lg text-sm overflow-x-auto">
    <code>sudo gedit /etc/pam.d/common-password</code>
  </pre>
                <p>
                    Add <code>minlen=10</code> on the line that contains{" "}
                    <code>password [success=2 default=ignore] pam_unix.so</code>. You can also make sure every
                    user requires a password by checking <code>/etc/pam.d/common-auth</code> does not have{" "}
                    <code>nullok</code>.
                </p>

                <li className="font-bold">SystemCTL (Services)</li>
                <p>To check active services, type:</p>
                <pre className="bg-gray-100 p-2 rounded-lg text-sm overflow-x-auto">
    <code>sudo systemctl list-units --type=service --state=active</code>
  </pre>
                <p>
                    To stop a service, type:
                </p>
                <pre className="bg-gray-100 p-2 rounded-lg text-sm overflow-x-auto">
    <code>sudo stop (service)</code>
  </pre>
                <p>
                    Then disable it with:
                </p>
                <pre className="bg-gray-100 p-2 rounded-lg text-sm overflow-x-auto">
    <code>sudo disable (service)</code>
  </pre>

                <li className="font-bold">SSH Security</li>
                <p>
                    To secure SSH, type:
                </p>
                <pre className="bg-gray-100 p-2 rounded-lg text-sm overflow-x-auto">
    <code>sudo gedit /etc/ssh/sshd_config</code>
  </pre>
                <p>
                    Find <code>PermitRootLogin yes</code> and change it to{" "}
                    <code>PermitRootLogin no</code>.
                </p>

                <li className="font-bold">File Permissions</li>
                <p>To secure sensitive files, type:</p>
                <pre className="bg-gray-100 p-2 rounded-lg text-sm overflow-x-auto">
    <code>sudo chmod 640 /etc/shadow</code>
  </pre>
                <pre className="bg-gray-100 p-2 rounded-lg text-sm overflow-x-auto">
    <code>sudo chmod 640 /etc/passwd</code>
  </pre>

                <li className="font-bold">Applications and Software</li>
                <p>To delete common prohibited apps, for example Ophcrack, type:</p>
                <pre className="bg-gray-100 p-2 rounded-lg text-sm overflow-x-auto">
    <code>sudo apt-get remove ophcrack</code>
  </pre>

                <p>
                    There are still many more ways to secure a Linux image, but these are the basics that
                    should always be on your team’s checklist.
                </p>
            </ul>
            <h1 className="text-2xl font-bold mb-6 tracking-wide">
                Scripting
            </h1>
            <p className="text-gray-700 leading-relaxed mb-6">
                After repeating the same tasks over and over again, I began writing a custom Bash script to automate
                repetitive hardening tasks. I added everything from my 11-page checklist into this script. Instead of
                manually auditing multiple files, my script could scan for insecure permissions, reset password
                policies, disable unused services, and apply baseline firewall rules in seconds. Writing the script was
                very easy. Simply put, the bash script contains commands a person would typically put on terminal.
                However, they must add this at the top of the .sh file of the bash script:
            </p>
            <pre className="bg-gray-100 p-2 rounded-lg text-sm overflow-x-auto">
    <code>#!/bin/bash
</code>
  </pre>
            <p className="text-gray-700 leading-relaxed mb-6 mt-6">
                Then, just put down all the lines of code you want. However, I knew that the many competitions will have
                different scenarios. For example, one competition will require removing SSH for points and updating
                nginx, while another competition could be the other way around. Thus, I grouped the commands into different
                functions. In my bash script, I have:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
                <li className="font-bold">manage_packages</li>
                <li className="font-bold">security_policies</li>
                <li className="font-bold">configure_networking</li>
                <li className="font-bold">configure_openssh_server</li>
                <li className="font-bold">configure_mysql_server</li>
                <li className="font-bold">configure_apache_server</li>
                <li className="font-bold">audit_cron</li>
                <li className="font-bold">manage_kernel</li>
                <li className="font-bold">miscellaneous_security</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
                Similar to many languages, you can define a function like:
            </p>
            <pre className="bg-gray-100 p-2 rounded-lg text-sm overflow-x-auto">
    <code>function_name() &#123;...code...&#125;
</code>
  </pre>
            <p className="text-gray-700 leading-relaxed mb-6 mt-6">
                And you can call the function by typing out the name of the function like:
            </p>
            <pre className="bg-gray-100 p-2 rounded-lg text-sm overflow-x-auto">
    <code>function_name()
</code>
  </pre>
            <p className="text-gray-700 leading-relaxed mb-6 mt-6">
                And function_name will run. This pushed me deeper into:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
                <li className="font-bold">File system traversal (find, grep, awk, sed)</li>
                <li className="font-bold">Redirection & piping to chain commands</li>
                <li className="font-bold">Command-line arguments to make the script reusable across rounds</li>
                <li className="font-bold">System variables for dynamic configuration</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
                The script alone saved the Linux section at least 1 hour of the 4 competition hours. For my Windows
                teammates, it saved them even more time. Not only did this save us precious competition time, but it
                also gave me experience in writing production-like code that interacted with a live system under
                constraints, reaching my goals to become experienced in a Linux environment.
            </p>
            <h1 className="text-2xl font-bold mb-6 tracking-wide">
                Personal Achievements
            </h1>
            <p className="text-gray-700 leading-relaxed mb-6">
                Throughout the three years of competition, here are some achievements I received:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
                <li className="font-bold">Top 100 Platinum Tier National Semifinalist (twice) — ranking in the top 1% of competitors nationwide</li>
                <li className="font-bold">#1 in California Gold Tier before advancing to Platinum</li>
                <li className="font-bold">Recognized as the Linux specialist on the team, often tasked with the most technically demanding fixes</li>
                <li className="font-bold">Gained a reputation for scripting efficiency, which shaved hours off our team’s workflow</li>
            </ul>
            <div className="flex justify-center mb-6">
                <img
                    src="/images/topscore.png"
                    alt="top scoring report"
                    className="rounded-lg shadow-lg object-cover max-w-sm w-full h-auto"
                />
            </div>
            <h1 className="text-2xl font-bold mb-6 tracking-wide">
                Coaching
            </h1>
            <p className="text-gray-700 leading-relaxed mb-6">
                By my third year, I was no longer just a competitor. My growth was successful largely due to vlog posts
                from previous competitors and practice images online. Our school did not have a coach dedicated to
                Cyberpatriots. Thus, I started mentoring younger members, teaching them both Linux fundamentals and
                competition strategies. I monitored live practice sessions, shared all of my resources, and also ran a
                Bash Scripting workshop. Even after high school, I still wanted to remain as a mentor, eventually a
                coach, for those who came up to me, especially thanking me for helping them achieve their dream of
                becoming a Cybersecurity specialist in their career. I ran live demos and broke down why commands worked
                instead of just how to type them. Watching rookies go from zero Linux experience to becoming valuable
                team members was as rewarding as competing myself.
            </p>
            <h1 className="text-2xl font-bold mb-6 tracking-wide">
                Conclusion
            </h1>
            <p className="text-gray-700 leading-relaxed mb-6">
                CyberPatriot started as “that boring competition my friends told me about,” but it ended up being a
                defining experience in my high school journey. I learned how to dissect an operating system, automate
                its hardening, and work under pressure with a team. More importantly, it built the foundation for my
                passion in cybersecurity, automation, and systems engineering, skills that continue to carry into every
                project I build.
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

export default CyberPatriot;

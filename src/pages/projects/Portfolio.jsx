import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
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

                {/* Project Screenshot */}
                <div>
                    <img
                        src="/images/portfolio-preview.png" // PLACEHOLDER: Add screenshot of homepage or hero section
                        alt="Interactive Portfolio Website"
                        className="rounded-lg shadow-lg object-cover w-full h-full"
                    />
                </div>

                {/* Project Content */}
                <div>
                    {/* Title */}
                    <h1 className="text-3xl font-bold mb-6 tracking-wide">
                        Interactive Portfolio Website
                    </h1>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed mb-6">
                        I designed and built this portfolio website from scratch to showcase my engineering projects in
                        a way that blends aesthetic design with technical depth. Instead of a static layout, I wanted it
                        to feel interactive and immersive — integrating real 3D graphics, animations, and smooth transitions
                        powered by React, React Three Fiber, and TailwindCSS.
                    </p>

                    {/* Contributions & Tech Stack */}
                    <div className="grid grid-cols-2 gap-8 mb-10">
                        <div>
                            <h3 className="text-sm font-semibold tracking-wider text-gray-500 mb-3">
                                CONTRIBUTIONS
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>Frontend Development with React.js</li>
                                <li>3D Rendering with React Three Fiber (R3F) + Three.js</li>
                                <li>Scroll-Based & Motion Animations</li>
                                <li>Responsive Navigation (Desktop + Mobile)</li>
                                <li>Cloud Hosting with Cloudflare Pages</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold tracking-wider text-gray-500 mb-3">
                                TECHNOLOGIES
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>React.js + TailwindCSS</li>
                                <li>React Three Fiber + Drei</li>
                                <li>Framer Motion</li>
                                <li>Cloudflare Pages</li>
                                <li>GLTF / SolidWorks Models</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Motivation Section */}
            <div className="grid grid-cols-1 md:grid-cols-[80%_20%] gap-12 items-center mt-10">
                <div>
                    <h1 className="text-2xl font-bold mb-6 tracking-wide">Motivation</h1>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        I’ve always believed that **presentation matters** just as much as technical execution. Being a
                        visual learner, I wanted a portfolio that didn’t just tell people about my projects — it would
                        let them experience them. After discovering Taili Zhuang’s architecture portfolio, I was inspired
                        to take my engineering mindset into frontend design. This portfolio became my way of learning
                        modern web development tools while turning my creativity into code.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        I treated this site as both a **software and design project** — experimenting with React Three Fiber
                        and Framer Motion to make every scroll feel alive. Building this website taught me how frontend
                        engineering could also be a creative art form — where storytelling, animation, and user experience
                        all blend with software logic.
                    </p>
                </div>
                <div className="flex justify-center">
                    <img
                        src="/images/portfolio-inspiration.png" // PLACEHOLDER: Taili Zhuang’s architecture portfolio reference
                        alt="Inspiration Reference"
                        className="rounded-lg shadow-lg object-cover w-full h-auto"
                    />
                </div>
            </div>

            {/* 3D Models & Animations */}
            <div className="grid grid-cols-1 md:grid-cols-[80%_20%] gap-12 items-center mt-10">
                <div>
                    <h1 className="text-2xl font-bold mb-6 tracking-wide">3D Models & Animations</h1>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        The highlight of this portfolio lies in its **3D model integration**. Using React Three Fiber (R3F)
                        — a React renderer for Three.js — I rendered SolidWorks models directly onto the website.
                        Each project page (like my Go-Kart or RFID Jukebox) can feature interactive 3D elements that
                        users can rotate or explore, adding a level of immersion that flat images can’t replicate.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        R3F uses <code>&lt;Canvas&gt;</code> as the 3D rendering context. Within that, models imported
                        via <code>useGLTF()</code> are positioned, scaled, and lit with ambient and directional lighting
                        for visual clarity. Since 3D scenes are dark by default, adding the right light setup was key
                        for creating contrast and readability — something I learned through testing and iteration.
                    </p>
                </div>
                <div className="flex justify-center">
                    <img
                        src="/images/3d-model-scene.png" // PLACEHOLDER: R3F 3D scene screenshot
                        alt="React Three Fiber Scene"
                        className="rounded-lg shadow-lg object-cover max-w-sm w-full h-auto"
                    />
                </div>
            </div>

            {/* Animations Section */}
            <h1 className="text-2xl font-bold mb-6 tracking-wide mt-10">Animations</h1>
            <p className="text-gray-700 leading-relaxed mb-6">
                I implemented **scroll-driven animations** by linking R3F’s <code>useFrame()</code> with React state tied
                to scroll position. For example, the 3D Go-Kart model smoothly orbits the screen as you scroll — inspired
                by Dogstudio’s cinematic scroll showcases. For text and UI, I used **Framer Motion** to add soft
                transitions, fades, and slide-ins, ensuring the visual flow between 2D and 3D elements feels seamless.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
                These motion techniques made the site feel alive rather than static. Each project reveal feels like
                part of a story — not just a list of achievements.
            </p>

            <div className="flex justify-center mt-6 mb-10">
                <img
                    src="/images/scroll-animation.png" // PLACEHOLDER: Screenshot of scroll animation section
                    alt="Scroll-based Animation"
                    className="rounded-lg shadow-lg object-cover w-full max-w-2xl"
                />
            </div>

            {/* Navigation & Responsiveness */}
            <h1 className="text-2xl font-bold mb-6 tracking-wide mt-10">Navigation & Responsiveness</h1>
            <p className="text-gray-700 leading-relaxed mb-6">
                The site features a **responsive navigation bar** that adapts fluidly between desktop and mobile. On
                desktop, it’s a simple horizontal bar with quick access to my projects and resume. On mobile, it transforms
                into a full dropdown overlay via a hamburger icon. Built entirely with **TailwindCSS**, the design focuses
                on minimalism, clarity, and ease of navigation.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
                I also implemented scroll reset behavior using React Router’s <code>useEffect</code> to ensure that each
                page begins at the top when navigated to — small touches that elevate the user experience.
            </p>

            <div className="flex justify-center mt-6 mb-10">
                <img
                    src="/images/mobile-navbar.png" // PLACEHOLDER: Screenshot of mobile navigation
                    alt="Responsive Navigation"
                    className="rounded-lg shadow-lg object-cover w-full max-w-xs"
                />
            </div>

            {/* Hosting & Deployment */}
            <h1 className="text-2xl font-bold mb-6 tracking-wide mt-10">Hosting & Deployment</h1>
            <p className="text-gray-700 leading-relaxed mb-6">
                The website is deployed via **Cloudflare Pages**, which connects directly to my GitHub repository. Each
                commit to the main branch triggers an automatic build and global deployment. Cloudflare’s CDN ensures
                near-instant load times, while assets like images, 3D models, and PDFs are cached at edge nodes.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
                I chose Cloudflare over Netlify and Vercel for its **free-tier performance**, built-in DNS management,
                and automatic HTTPS configuration — making it both reliable and developer-friendly.
            </p>

            <div className="flex justify-center mt-6 mb-10">
                <img
                    src="/images/cloudflare-dashboard.png" // PLACEHOLDER: Cloudflare dashboard screenshot
                    alt="Cloudflare Deployment Dashboard"
                    className="rounded-lg shadow-lg object-cover w-full max-w-lg"
                />
            </div>

            {/* Conclusion */}
            <h1 className="text-2xl font-bold mb-6 tracking-wide mt-10">Conclusion</h1>
            <p className="text-gray-700 leading-relaxed mb-6">
                This project became more than a personal portfolio — it became a **proof of concept** that engineering
                and design can coexist. I merged frontend engineering, 3D rendering, and DevOps into one cohesive
                system. It’s a living platform that evolves alongside my skills, and I plan to continuously improve it
                with more interactive 3D models, motion-based storytelling, and backend integrations in the future.
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

export default Portfolio;

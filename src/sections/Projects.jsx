import React from "react";
import { projects } from "../constants/index.js";

const Projects = () => {
    return (
        <div className="px-6 py-10">
            <h2 className="text-2xl font-bold mb-6 text-center">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <a
                        key={project.id}
                        href={project.href}
                        className="relative group overflow-hidden rounded-xl shadow-md"
                    >
                        <img
                            src={project.img}
                            alt={project.title}
                            className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {/* Dark overlay on hover */}
                        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <p className="text-white text-lg font-semibold">{project.title}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
export default Projects;
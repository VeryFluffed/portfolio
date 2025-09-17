// src/pages/ProjectDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";

export default function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="p-10">
                <h1 className="text-2xl font-bold">Project not found</h1>
                <Link to="/projects" className="text-blue-500 underline">
                    Back to Projects
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-white text-gray-900 min-h-screen px-10 py-16">
            <Link to="/projects" className="text-blue-500 underline mb-6 inline-block">
                ← Back to Projects
            </Link>
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            <p className="text-gray-500 font-semibold mb-6">{project.role}</p>

            {project.video && (
                <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    controls
                    className="w-full h-96 object-cover rounded-xl mb-6"
                />
            )}

            <p className="text-lg text-gray-700 mb-8">{project.description}</p>

            <h2 className="font-bold text-xl mb-4">Software/Languages/Frameworks</h2>
            <div className="flex flex-wrap gap-6">
                {project.tech.map((t, i) => (
                    <div key={i} className="flex items-center gap-2">
                        <img src={t.icon} alt={t.name} className="w-10 h-10 object-contain" />
                        <span className="text-base">{t.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

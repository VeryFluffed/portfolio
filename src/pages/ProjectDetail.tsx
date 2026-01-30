// src/pages/ProjectDetail.jsx

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
    <div className="min-h-screen bg-white px-10 py-16 text-gray-900">
      <Link
        to="/projects"
        className="mb-6 inline-block text-blue-500 underline"
      >
        ← Back to Projects
      </Link>
      <h1 className="mb-4 text-3xl font-bold">{project.title}</h1>
      <p className="mb-6 font-semibold text-gray-500">{project.role}</p>

      {project.video && (
        <video
          src={project.video}
          autoPlay
          loop
          muted
          controls
          className="mb-6 h-96 w-full rounded-xl object-cover"
        />
      )}

      <p className="mb-8 text-lg text-gray-700">{project.description}</p>

      <h2 className="mb-4 text-xl font-bold">Software/Languages/Frameworks</h2>
      <div className="flex flex-wrap gap-6">
        {project.tech.map((t, i) => (
          <div key={i} className="flex items-center gap-2">
            <img
              src={t.icon}
              alt={t.name}
              className="h-10 w-10 object-contain"
            />
            <span className="text-base">{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

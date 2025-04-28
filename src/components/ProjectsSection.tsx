"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Github, ExternalLink, Info, X } from "lucide-react";
import { projects as projectsData } from "@/data/portfolio-data";

type Project = {
  title: string;
  date: string;
  description: string;
  image: string;
  video?: string;  // Video field
  technologies: string[];
  links: {
    github?: string;
    website?: string;
    demo?: string;
  };
  detailedDescription?: string;
};

export function ProjectsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  useEffect(() => {
    setFilteredProjects(
      projectsData.filter((project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech =>
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    );
  }, [searchTerm]);

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Search projects by title, description or technology..."
          className="w-full rounded-md border border-zinc-200 dark:border-zinc-800 bg-transparent px-4 py-3 outline-none focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-700 pl-4 pr-20 transition-all"
          aria-label="Search projects"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="absolute right-4 top-2.5 text-sm">
          <span className="px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 transition-colors">
            {filteredProjects.length} Projects
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onViewDetails={() => handleOpenModal(project)}
          />
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-zinc-900 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white dark:bg-zinc-900 z-10 flex justify-between items-center p-6 border-b border-zinc-200 dark:border-zinc-800">
              <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
              <button
                onClick={handleCloseModal}
                className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              <div className="aspect-video w-full mb-6 rounded-lg overflow-hidden relative">
                {selectedProject.video ? (
                  <video
                    src={selectedProject.video}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500 dark:text-zinc-400">{selectedProject.date}</span>
                  <div className="flex space-x-3">
                    {selectedProject.links.github && (
                      <Link
                        href={selectedProject.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white bg-zinc-100 dark:bg-zinc-800 px-3 py-2 rounded-md transition-colors"
                      >
                        <Github size={18} />
                        <span>GitHub</span>
                      </Link>
                    )}
                    {selectedProject.links.website && (
                      <Link
                        href={selectedProject.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white bg-zinc-100 dark:bg-zinc-800 px-3 py-2 rounded-md transition-colors"
                      >
                        <ExternalLink size={18} />
                        <span>Website</span>
                      </Link>
                    )}
                    {selectedProject.links.demo && (
                      <Link
                        href={selectedProject.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white bg-zinc-100 dark:bg-zinc-800 px-3 py-2 rounded-md transition-colors"
                      >
                        <ExternalLink size={18} />
                        <span>Demo</span>
                      </Link>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={`${selectedProject.title}-modal-tech-${tech}`}
                      className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-lg mt-4 text-zinc-700 dark:text-zinc-300">
                  {selectedProject.detailedDescription || selectedProject.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project, onViewDetails }: { project: Project, onViewDetails: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div
      className="group border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden transition-all hover:shadow-xl hover:border-zinc-300 dark:hover:border-zinc-700 hover:scale-[1.02] cursor-pointer"
      onClick={onViewDetails}
    >
      <div className="h-64 overflow-hidden relative">
        {project.video ? (
          <video
            ref={videoRef}
            src={project.video}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
          <div className="p-4 text-white">
            <div className="flex gap-2">
              {project.links.github && (
                <Link
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  aria-label="GitHub"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={16} />
                </Link>
              )}
              {project.links.website && (
                <Link
                  href={project.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  aria-label="Website"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={16} />
                </Link>
              )}
              {project.links.demo && (
                <Link
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                  aria-label="Demo"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={16} />
                </Link>
              )}
              <button
                className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                aria-label="View details"
                onClick={onViewDetails}
              >
                <Info size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            {project.date}
          </span>
        </div>

        <p className="text-zinc-700 dark:text-zinc-300 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={`${project.title}-tech-${tech}`}
              className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-xs">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

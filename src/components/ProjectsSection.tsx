"use client";

import Link from "next/link";
import { Github } from "lucide-react";
import { projects as projectsData } from "@/data/portfolio-data";

type Project = {
  title: string;
  date: string;
  description: string;
  image: string;
  technologies: string[];
  links: {
    github?: string;
    website?: string;
  };
};

export function ProjectsSection() {
  return (
    <div className="space-y-6">
      <div className="relative">
        <input
          type="text"
          placeholder="search projects"
          className="w-full rounded-md border border-zinc-200 dark:border-zinc-800 bg-transparent px-4 py-2 outline-none focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-700"
          aria-label="Search projects"
        />
        <div className="absolute right-4 top-2.5 text-sm">
          <span className="px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800">
            Featured
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            {project.date}
          </span>
        </div>

        <p className="text-zinc-700 dark:text-zinc-300">{project.description}</p>

        <div className="flex flex-wrap">
          {project.technologies.map((tech) => (
            <span key={`${project.title}-tech-${tech}`} className="technology-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center space-x-4 pt-2">
          {project.links.github && (
            <Link
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
              aria-label="Project GitHub"
            >
              <Github size={20} />
            </Link>
          )}
          {project.links.website && (
            <Link
              href={project.links.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
              aria-label="Project Website"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </Link>
          )}
        </div>
      </div>
      <div className="h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  );
}

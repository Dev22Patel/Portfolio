"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-transition"
import { Github, Twitter, Mail, Linkedin } from "lucide-react"

type TechnologyItem = {
  name: string
  icon: string
}

type SidebarProps = {
  technologies: Record<string, TechnologyItem[]>
  name: string
  tagline: string
  email: string
  social: {
    github?: string
    twitter?: string
    linkedin?: string
  }
  websiteName: string
}

export function Sidebar({ technologies, name, tagline, email, social, websiteName }: SidebarProps) {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <Link
            href="/"
            className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            {websiteName}
          </Link>
        </div>
        {/* <ThemeToggle /> */}
      </div>

      <div className="space-y-2">
        <h1 className="text-4xl font-bold">{name}</h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400">{tagline}</p>
      </div>

      <div className="space-y-4">
        <Link
          href={`mailto:${email}`}
          className="inline-flex items-center px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
        >
          Schedule a call
        </Link>

        <Link
          href="/resume"
          className="ml-2 inline-flex items-center px-4 py-2 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
        >
          Resume
        </Link>

        <div className="flex space-x-4 mt-4">
          {social.github && (
            <Link
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </Link>
          )}
          {social.twitter && (
            <Link
              href={social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </Link>
          )}
          <Link
            href={`mailto:${email}`}
            className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
            aria-label="Mail"
          >
            <Mail size={20} />
          </Link>
          {social.linkedin && (
            <Link
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
          )}
        </div>
      </div>

      {/* Technology sections */}
      {Object.entries(technologies).map(([sectionName, items]) => (
        <div key={sectionName} className="space-y-2">
          <h2 className="text-lg font-medium">{sectionName}:</h2>
          <div className="flex flex-wrap gap-2">
            {items.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-1 px-2 py-1 text-sm bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md"
              >
                <span>{tech.icon}</span> {tech.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

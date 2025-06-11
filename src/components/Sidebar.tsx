"use client"

import Link from "next/link"
import { useState } from "react"
import { ThemeToggle } from "@/components/theme-transition"
import { Github, Twitter, Mail, Linkedin, X, MessageCircle, Phone } from "lucide-react"

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
    discord?: string
  }
  websiteName: string
}

export function Sidebar({ technologies, name, tagline, email, social, websiteName }: SidebarProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const openContactModal = () => setIsContactModalOpen(true)
  const closeContactModal = () => setIsContactModalOpen(false)

  return (
    <>
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
          <button
            onClick={openContactModal}
            className="inline-flex items-center px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
          >
            Contact me
          </button>

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

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 max-w-md w-full mx-4 relative">
            <button
              onClick={closeContactModal}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
            >
              <X size={20} />
            </button>

            <h3 className="text-xl font-semibold mb-4">Get in touch</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              Choose your preferred way to contact me:
            </p>

            <div className="space-y-3">
              {/* Email Option */}
              <Link
                href={`mailto:${email}`}
                className="flex items-center gap-3 p-3 rounded-md border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors w-full"
                onClick={closeContactModal}
              >
                <Mail size={20} className="text-zinc-600 dark:text-zinc-400" />
                <div>
                  <div className="font-medium">Send me an email</div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400">{email}</div>
                </div>
              </Link>

              {/* Discord Option */}
              {social.discord && (
                <Link
                  href={social.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-md border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors w-full"
                  onClick={closeContactModal}
                >
                  <MessageCircle size={20} className="text-zinc-600 dark:text-zinc-400" />
                  <div>
                    <div className="font-medium">Message on Discord</div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">Quick response</div>
                  </div>
                </Link>
              )}

              {/* Phone/WhatsApp Option */}
              <Link
                href="https://wa.me/919328622845"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-md border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors w-full"
                onClick={closeContactModal}
              >
                <Phone size={20} className="text-zinc-600 dark:text-zinc-400" />
                <div>
                  <div className="font-medium">WhatsApp me</div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400">+91 9328622845</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

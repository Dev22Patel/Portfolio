"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { useState, useEffect } from "react"

const navigationItems = [
  { path: "/", label: "Projects" },
  { path: "/experience", label: "Experience" },
  { path: "/blogs", label: "Blogs" },
  { path: "/uiforge", label: "UIForge" },
]

export function Navigation() {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState(pathname || "/")

  // Update active tab when path changes
  useEffect(() => {
    setActiveTab(pathname)
  }, [pathname])

  return (
    <div className="inline-flex items-center rounded-lg border-2 border-zinc-200 dark:border-zinc-800 p-1.5 text-sm bg-zinc-50 dark:bg-zinc-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]">
      {navigationItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={`relative px-4 py-2 rounded-md transition-all duration-200 font-medium ${
            activeTab === item.path
              ? "bg-white dark:bg-zinc-800 shadow-[inset_2px_2px_0px_rgba(0,0,0,0.1)] dark:shadow-[inset_2px_2px_0px_rgba(255,255,255,0.1)] transform translate-y-[1px] translate-x-[1px]"
              : "hover:bg-zinc-100 dark:hover:bg-zinc-800/50 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.1)]"
          }`}
          aria-current={activeTab === item.path ? "page" : undefined}
          onClick={() => setActiveTab(item.path)}
        >
          {item.label}
          {activeTab === item.path && (
            <span className="absolute inset-0 rounded-md border border-zinc-200 dark:border-zinc-700 pointer-events-none"></span>
          )}
        </Link>
      ))}
    </div>
  )
}

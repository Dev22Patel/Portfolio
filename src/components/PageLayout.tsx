"use client"

import type React from "react"
import { useState, useEffect, Suspense } from "react"
import { Sidebar } from "@/components/Sidebar"
import { Navigation } from "@/components/Navigation"
import { personalInfo, technologies, navigationItems } from "@/data/portfolio-data"

type PageLayoutProps = {
  children: React.ReactNode
  contentShouldAnimate?: boolean
}

export function PageLayout({ children, contentShouldAnimate = true }: PageLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile when component mounts and when window resizes
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
      // Close mobile menu when resizing to desktop
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    // Set initial state
    checkIfMobile()

    // Add event listener
    window.addEventListener('resize', checkIfMobile)

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row">
        {/* Mobile hamburger menu button */}
        {isMobile && (
          <button
            onClick={toggleMobileMenu}
            className="fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        )}

        {/* Sidebar - mobile: full-screen overlay when open, desktop: fixed */}
        <div
          className={`
            ${isMobile ? 'fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out' : 'md:w-1/3 lg:w-1/3 md:fixed md:top-0 md:bottom-0 md:left-0'}
            ${isMobile && !isMobileMenuOpen ? '-translate-x-full' : 'translate-x-0'}
            bg-white border-r border-gray-200 overflow-y-auto
          `}
        >
          <div className="p-6 md:p-8 md:w-full md:max-w-full lg:max-w-full">
            {isMobile && (
              <div className="h-12"></div> // Space for hamburger button
            )}
            <Sidebar
              technologies={technologies}
              name={personalInfo.name}
              tagline={personalInfo.tagline}
              email={personalInfo.email}
              social={personalInfo.social}
              websiteName={personalInfo.websiteName}
            />
          </div>
        </div>

        {/* Main content area */}
        <div className="w-full md:w-2/3 lg:w-2/3 md:ml-[35%] lg:ml-[35%] bg-white min-h-screen overflow-y-auto scrollbar-hide">
          {/* Top navigation bar - adjusted for mobile */}
          <div className={`z-10 bg-white ${isMobile ? ' mt-20 pl-6' : 'md:ml-32 md:mt-10'} pt-4 pb-2`}>
            <Navigation />
          </div>

          <div className="p-4 mt-[-32px] md:p-8">
            <Suspense fallback={<div>Loading...</div>}>
              <div
                className={
                  contentShouldAnimate
                  ? "page-content mt-6 md:mt-[-58px] p-4 md:p-24"
                  : "mt-6"
                }
              >
                {children}
              </div>
            </Suspense>
          </div>
        </div>

        {/* Overlay for when mobile menu is open */}
        {isMobile && isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </div>
    </main>
  )
}

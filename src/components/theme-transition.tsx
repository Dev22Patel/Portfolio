"use client";

import { useTheme } from "@/lib/theme-provider";
import { useEffect, useState } from "react";

export function ThemeTransition() {
  const { isTransitioning, theme } = useTheme();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial window size
    handleResize();

    // Update on resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isTransitioning && (
        <div
          className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden"
          style={{
            clipPath: `circle(${
              Math.max(windowSize.width, windowSize.height) * 2
            }px at ${position.x}px ${position.y}px)`,
          }}
        >
          <div
            className={`absolute inset-0 transition-colors duration-500 ${
              theme === "dark" ? "bg-zinc-950" : "bg-white"
            }`}
          />
        </div>
      )}
    </>
  );
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { toggleTheme, theme, isTransitioning } = useTheme();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleClick = (e: React.MouseEvent) => {
    // Get click position for animation center
    setPosition({ x: e.clientX, y: e.clientY });
    toggleTheme();
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`relative p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors ${
          isTransitioning ? "pointer-events-none" : ""
        } ${className}`}
        aria-label="Toggle theme"
        disabled={isTransitioning}
      >
        {theme === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </button>
      {isTransitioning && (
        <div
          className="fixed inset-0 z-[-1] pointer-events-none"
          style={{
            // Create the animation with CSS variables to make it more dynamic
            "--x": `${position.x}px`,
            "--y": `${position.y}px`,
            animation: "themeTransition 800ms cubic-bezier(0.4, 0, 0.2, 1) forwards",
          } as React.CSSProperties}
        >
          <div
            className={`absolute inset-0 ${
              theme === "light" ? "bg-zinc-950" : "bg-white"
            }`}
          />
        </div>
      )}
      <style jsx global>{`
        @keyframes themeTransition {
          0% {
            clip-path: circle(0% at var(--x) var(--y));
          }
          100% {
            clip-path: circle(150% at var(--x) var(--y));
          }
        }
      `}</style>
    </>
  );
}

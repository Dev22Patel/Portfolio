"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-transition";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-sm hover:underline">
          yourportfolio.com
        </Link>
        <ThemeToggle />
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <div className="space-y-6 max-w-md page-content">
          <div className="flex justify-center">
            <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 to-zinc-900 dark:from-zinc-300 dark:to-zinc-600">
              404
            </div>
          </div>

          <h1 className="text-2xl font-bold">Page Not Found</h1>

          <p className="text-zinc-600 dark:text-zinc-400">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild>
              <Link href="/">Go to Home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/experience">View Experience</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

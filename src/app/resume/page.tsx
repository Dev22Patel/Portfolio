"use client";

import { ThemeToggle } from "@/components/theme-transition";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

export default function ResumePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              <ArrowLeft size={16} />
              <span>Back</span>
            </Link>
            <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800" />
            <h1 className="text-xl font-medium">Resume</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button size="sm" asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Download PDF
              </a>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="flex-1 container mx-auto px-4 py-8 max-w-4xl page-content">
        <div className="flex flex-col items-center justify-center h-full p-8 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg bg-zinc-50 dark:bg-zinc-900/50">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold">Resume Not Available</h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-md">
              This is a placeholder for {personalInfo.name}&apos;s resume. You can upload a PDF file or
              create an HTML version of your resume here.
            </p>
            <div className="pt-4">
              <Button variant="outline" asChild>
                <Link href="/">Return to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

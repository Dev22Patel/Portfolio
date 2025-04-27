"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function BlogsSection() {
  return (
    <div className="mt-8 flex flex-col items-center justify-center space-y-6 text-center">
      <div className="rounded-full bg-zinc-100 dark:bg-zinc-800 p-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold">Blog Coming Soon</h3>
      <p className="text-zinc-600 dark:text-zinc-400 max-w-md">
        I'm currently working on some interesting articles to share with you.
        Check back soon for blog posts about my experience in web development,
        tech tutorials, and more.
      </p>
      <Button variant="outline" asChild>
        <Link href="/">Return to Projects</Link>
      </Button>
    </div>
  );
}

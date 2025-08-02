"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function BlogsSection() {
  return (
    <div className="mt-8 flex flex-col items-center justify-center space-y-8 text-center">
      {/* Featured Article Card */}
      <div className="w-full max-w-2xl">
        <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5 dark:opacity-10">
            <div className="absolute top-4 left-4 w-32 h-32 border border-zinc-300 dark:border-zinc-700 rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-24 h-24 border border-zinc-300 dark:border-zinc-700 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-zinc-200 dark:border-zinc-800 rounded-full"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Redis Icon */}
            <div className="mx-auto mb-6 w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-xl flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-zinc-700 dark:text-zinc-300"
              >
                <path d="M22.5 12.5c0 .4-.8.8-2.2 1.1-.1 0-.1 0-.2.1-1.1.2-2.6.4-4.1.4s-3-.1-4.1-.4c-.1 0-.1 0-.2-.1-1.4-.3-2.2-.7-2.2-1.1s.8-.8 2.2-1.1c.1 0 .1 0 .2-.1 1.1-.2 2.6-.4 4.1-.4s3 .1 4.1.4c.1 0 .1 0 .2.1 1.4.3 2.2.7 2.2 1.1zm0-3c0 .4-.8.8-2.2 1.1-.1 0-.1 0-.2.1-1.1.2-2.6.4-4.1.4s-3-.1-4.1-.4c-.1 0-.1 0-.2-.1-1.4-.3-2.2-.7-2.2-1.1s.8-.8 2.2-1.1c.1 0 .1 0 .2-.1 1.1-.2 2.6-.4 4.1-.4s3 .1 4.1.4c.1 0 .1 0 .2.1 1.4.3 2.2.7 2.2 1.1zm0 6c0 .4-.8.8-2.2 1.1-.1 0-.1 0-.2.1-1.1.2-2.6.4-4.1.4s-3-.1-4.1-.4c-.1 0-.1 0-.2-.1-1.4-.3-2.2-.7-2.2-1.1s.8-.8 2.2-1.1c.1 0 .1 0 .2-.1 1.1-.2 2.6-.4 4.1-.4s3 .1 4.1.4c.1 0 .1 0 .2.1 1.4.3 2.2.7 2.2 1.1zm-13.5-3c0 .4-.8.8-2.2 1.1-.1 0-.1 0-.2.1-1.1.2-2.6.4-4.1.4s-3-.1-4.1-.4c-.1 0-.1 0-.2-.1C.8 13.3 0 12.9 0 12.5s.8-.8 2.2-1.1c.1 0 .1 0 .2-.1 1.1-.2 2.6-.4 4.1-.4s3 .1 4.1.4c.1 0 .1 0 .2.1 1.4.3 2.2.7 2.2 1.1zm0-3c0 .4-.8.8-2.2 1.1-.1 0-.1 0-.2.1-1.1.2-2.6.4-4.1.4s-3-.1-4.1-.4c-.1 0-.1 0-.2-.1C.8 10.3 0 9.9 0 9.5s.8-.8 2.2-1.1c.1 0 .1 0 .2-.1 1.1-.2 2.6-.4 4.1-.4s3 .1 4.1.4c.1 0 .1 0 .2.1 1.4.3 2.2.7 2.2 1.1z"/>
              </svg>
            </div>

            {/* Article Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-4">
              Building a Real-Time Leaderboard
            </h2>
            <h3 className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 mb-6 font-medium">
              with Redis Sorted Sets
            </h3>

            {/* Description */}
            <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed max-w-lg mx-auto">
              Learn how to implement a high-performance real-time leaderboard system using Redis Sorted Sets.
              Discover the power of Redis for ranking and scoring in modern applications.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm text-zinc-700 dark:text-zinc-300 font-medium">
                Redis
              </span>
              <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm text-zinc-700 dark:text-zinc-300 font-medium">
                Real-time
              </span>
              <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm text-zinc-700 dark:text-zinc-300 font-medium">
                Backend
              </span>
              <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm text-zinc-700 dark:text-zinc-300 font-medium">
                Performance
              </span>
            </div>

            {/* Read Article Button */}
            <Button
              asChild
              className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100 font-semibold px-8 py-3 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
            >
              <Link
                href="https://medium.com/@notrealdev2211/building-a-real-time-leaderboard-with-redis-sorted-sets-83998c87b6db"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Read on Medium
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full max-w-4xl mt-16 mb-12">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-zinc-200 dark:border-zinc-800"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-6 bg-white dark:bg-zinc-950 text-zinc-500 dark:text-zinc-400 font-medium">
              More content on the way
            </span>
          </div>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="w-full max-w-4xl">

          {/* Upcoming Article 2 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 transition-all duration-300 group-hover:shadow-md">
              <h4 className="font-semibold text-zinc-900 dark:text-white mb-2">React Performance Tips</h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">Advanced techniques to optimize React applications for better performance.</p>
              <div className="flex items-center justify-center text-xs text-zinc-500 dark:text-zinc-500">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
                Coming soon
              </div>
            </div>
          </div>


        {/* Return to Projects Button */}
        <div className="mt-12 text-center">
          <Button variant="outline" asChild className="px-8 py-3">
            <Link href="/" className="inline-flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Return to Projects
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

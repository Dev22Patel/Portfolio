"use client";

import { ThemeToggle } from "@/components/theme-transition";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";
import { useState, useEffect } from "react";

export default function ResumePage() {
  const [pdfLoaded, setPdfLoaded] = useState(false);
  const resumePath = "/document/22CEUOS151_Dev_Patel.pdf"; // Path to your PDF file

  // Handle PDF loading status
  const handlePdfLoad = () => {
    setPdfLoaded(true);
  };

  const handlePdfError = () => {
    setPdfLoaded(false);
  };

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
              <a href={resumePath} download>
                <Download className="mr-2 h-4 w-4" /> Download PDF
              </a>
            </Button>
          </div>
        </div>
      </header>

      <div className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <div className="h-full rounded-lg bg-white dark:bg-zinc-900 shadow-sm border border-zinc-200 dark:border-zinc-800 overflow-hidden">
          {/* PDF Viewer */}
          <object
            data={resumePath}
            type="application/pdf"
            className="w-full h-screen max-h-[800px]"
            onLoad={handlePdfLoad}
            onError={handlePdfError}
          >
            <div className="flex flex-col items-center justify-center h-full p-8 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg bg-zinc-50 dark:bg-zinc-900/50">
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-semibold">Unable to Display PDF</h2>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-md">
                  It looks like the PDF couldn't be displayed in your browser. You can download the PDF directly.
                </p>
                <div className="pt-4">
                  <Button asChild>
                    <a href={resumePath} download>
                      <Download className="mr-2 h-4 w-4" /> Download PDF
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </object>
        </div>
      </div>
    </main>
  );
}

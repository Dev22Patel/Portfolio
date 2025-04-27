// Technology definitions
export const technologies = {
  frontend: [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "TS" },
    { name: "TailwindCSS", icon: "🌊" },
    { name: "ShadCN UI", icon: "🧩" },
  ],
  backend: [
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚂" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
  ],
  tools: [
    { name: "Git", icon: "🔄" },
    { name: "GitHub", icon: "🐙" },
    { name: "VS Code", icon: "📝" },
    { name: "Docker", icon: "🐳" },
  ],
};

// Personal information
export const personalInfo = {
  name: "Dev Patel",
  tagline: "Full Time Legend.",
  email: "pateldev22.com",
  websiteName: "DevPatel.com",
  social: {
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
  }
};

// Navigation items
export const navigationItems = [
  {
    path: "/",
    label: "Projects",
  },
  {
    path: "/experience",
    label: "Experience",
  },
  {
    path: "/blogs",
    label: "Blogs",
  },
];

// Project data
export const projects = [
  {
    title: "Portfolio Website",
    date: "April 25, 2025",
    description:
      "A personal portfolio website to showcase my projects, experience, and skills. Built with Next.js, React, and TailwindCSS.",
    image: "https://placehold.co/600x400/21bef9/ffffff",
    technologies: ["React.js", "Next.js", "TailwindCSS", "TypeScript"],
    links: {
      github: "https://github.com",
      website: "https://example.com",
    },
  },
  {
    title: "E-commerce Platform",
    date: "March 15, 2025",
    description:
      "A full-featured e-commerce platform with product catalog, shopping cart, and secure checkout. Integrated with Stripe for payment processing.",
    image: "https://placehold.co/600x400/9a57c5/ffffff",
    technologies: ["React.js", "Node.js", "MongoDB", "Express", "Stripe"],
    links: {
      github: "https://github.com",
      website: "https://example.com",
    },
  },
];

// Experience data
export const experiences = [
  {
    company: "Tech Company",
    position: "Software Engineer",
    type: "Full-time",
    location: "Remote | San Francisco, CA",
    period: "December 2024 - Present",
    responsibilities: [
      "Developed and maintained full-stack web applications using React, Next.js, and Node.js.",
      "Optimized application performance by implementing efficient algorithms and database queries.",
      "Collaborated with cross-functional teams to define, design, and ship new features.",
      "Implemented responsive design principles to ensure compatibility across devices.",
      "Worked with RESTful APIs and GraphQL to integrate various services.",
      "Contributed to microservice architecture following Agile methodologies and managed CI/CD pipelines on GitLab.",
      "Wrote Kubernetes cron-job scripts for executing periodic tasks on deployed pods.",
    ],
  },
  {
    company: "Startup Inc.",
    position: "Frontend Developer Intern",
    type: "Part-time",
    location: "Remote | New York, NY",
    period: "May 2024 - October 2024",
    responsibilities: [
      "Assisted in developing user interfaces using React and TypeScript.",
      "Created reusable components and implemented state management with Redux.",
      "Fixed bugs and improved application stability and performance.",
      "Participated in code reviews and implemented feedback from senior developers.",
      "Developed a migration package to streamline the transition from other software to the company's platform.",
    ],
  },
];

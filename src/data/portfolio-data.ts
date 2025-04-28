// Technology definitions
// Technology definitions
export const technologies = {
    frontend: [
      { name: "React", icon: "⚛" },
      { name: "Next.js", icon: "△" },
      { name: "TypeScript", icon: "TS" },
      { name: "TailwindCSS", icon: "≈" },
      { name: "ShadCN UI", icon: "■" },
      { name: "Vue.js", icon: "V" },
      { name: "Angular", icon: "◯" },
      { name: "Redux", icon: "↺" },
      { name: "HTML5", icon: "◊" },
      { name: "CSS3", icon: "✧" },
      { name: "JavaScript", icon: "JS" },
      { name: "SASS/SCSS", icon: "§" },
      { name: "Material UI", icon: "▣" },
      { name: "Chakra UI", icon: "○" },
      { name: "Framer Motion", icon: "⟳" },
    ],
    backend: [
      { name: "Node.js", icon: "◉" },
      { name: "Express.js", icon: "E" },
      { name: "MongoDB", icon: "☰" },
      { name: "PostgreSQL", icon: "◎" },
      { name: "MySQL", icon: "▦" },
      { name: "Firebase", icon: "▲" },
      { name: "GraphQL", icon: "◬" },
      { name: "REST API", icon: "⦿" },
      { name: "Prisma", icon: "⬡" },
      { name: "Supabase", icon: "⊡" },
      { name: "Django", icon: "D" },
      { name: "Flask", icon: "F" },
      { name: "AWS", icon: "⎔" },
      { name: "Vercel", icon: "◥" },
    ],
    tools: [
      { name: "Git", icon: "↺" },
      { name: "GitHub", icon: "⎈" },
      { name: "VS Code", icon: "⬚" },
      { name: "Docker", icon: "◘" },
      { name: "Figma", icon: "⬝" },
      { name: "Postman", icon: "↹" },
      { name: "Jest", icon: "✓" },
      { name: "Webpack", icon: "▣" },
      { name: "NPM", icon: "⬡" },
      { name: "Yarn", icon: "➰" },
      { name: "Babel", icon: "⦾" },
      { name: "ESLint", icon: "E" },
      { name: "Jira", icon: "◇" },
      { name: "Notion", icon: "⧉" },
    ]
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
    video: "videos/stp.mp4",
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
      company: "Google Developer Student Club (GDSC)",
      position: "Tech Lead",
      type: "Web Team",
      location: "Dharmsinh Desai University",
      period: "November 2024 - Present",
      achievements: [
        "Led technical infrastructure development for DUHACKS 4.0 hackathon including the official website.",
        "Conducted 'Tech Winter Break' workshop on WebRTC technology and UDP protocol advantages.",
        "Mentored junior team members on web development best practices and modern technologies."
      ],
      responsibilities: {
        "Technical Leadership": [
          "Oversaw end-to-end development of the DUHACKS platform (duhacks.tech) for registration and event management.",
          "Implemented responsive design principles ensuring cross-device compatibility for optimal user experience."
        ]
      }
    },
    {
      company: "Hackathon Participation",
      position: "Developer & Innovator",
      type: "Competition",
      location: "Gujarat, India",
      period: "2023 - 2025",
      achievements: [
        "Developed 'AgroAdvice', an agricultural advisory application at Hackout @ DAIICT.",
        "Built 'Barter Pay', a Flutter-based mobile application for cashless bartering at OdooXCharusat."
      ],
      responsibilities: {
        "Hackout @ DAIICT": [
          "Created intuitive UI/UX design optimized for farmers with varying technical proficiency.",
          "Implemented core functionality connecting frontend interface with backend services.",
          "Project repository: github.com/Dev22Patel/AgroAdvice"
        ],
        "OdooXCharusat": [
          "Developed RESTful APIs using Node.js to connect mobile frontend with backend services.",
          "Applied agile methodologies to rapidly develop within tight hackathon deadlines."
        ]
      }
    }
  ];

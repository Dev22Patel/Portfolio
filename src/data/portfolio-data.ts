// Technology definitions
// Technology definitions
export const technologies = {
  languages: [
    { name: "C++", icon: "" },
    { name: "Java", icon: "☕" },
    { name: "JavaScript", icon: "JS" },
    { name: "TypeScript", icon: "TS" },
    { name: "Python", icon: "🐍" },
  ],
  frontend: [
    { name: "React", icon: "⚛" },
    { name: "Next.js", icon: "△" },
    { name: "HTML5", icon: "◊" },
    { name: "CSS3", icon: "✧" },
    { name: "TailwindCSS", icon: "≈" },
    { name: "ShadCN UI", icon: "■" },
    { name: "Redux", icon: "↺" },
  ],
  backend: [
    { name: "Node.js", icon: "◉" },
    { name: "Express.js", icon: "E" },
    { name: "Spring Boot", icon: "🍃" },
    { name: "Spring", icon: "♨" },
    { name: ".NET Core Web API", icon: "⧇" },
    { name: "REST API", icon: "⦿" },
    { name: "Hibernate", icon: "◐" },
    { name: "JPA", icon: "⋈" },
  ],
  databases: [
    { name: "MongoDB", icon: "☰" },
    { name: "PostgreSQL", icon: "◎" },
    { name: "MySQL", icon: "▦" },
    { name: "Redis", icon: "⚡" },
    { name: "Firebase", icon: "▲" },
  ],
  devops: [
    { name: "AWS", icon: "⎔" },
    { name: "Vercel", icon: "◥" },
    { name: "Docker", icon: "◘" },
  ],
  tools: [
    { name: "Git", icon: "↺" },
    { name: "GitHub", icon: "⎈" },
    { name: "VS Code", icon: "⬚" },
    { name: "Postman", icon: "↹" },
  ],
  design: [
    { name: "System Design", icon: "⬣" },
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
    title: "Smart Trip Planner",
    date: "April 25, 2025",
    description:
      "A MERN Stack + FastAPI application that helps users select destinations and retrieve top-rated places based on Google reviews. Features interactive maps with distance and travel time calculations.",
    image: "https://placehold.co/600x400/21bef9/ffffff",
    video: "videos/stp.mp4",
    technologies: ["React", "MongoDB", "Express", "Node.js", "FastAPI", "Tailwind CSS", "Google Places API", "Vite"],
    features: [
      "Destination-based place recommendations",
      "Google reviews integration",
      "FastAPI backend for data processing",
      "MERN stack frontend",
      "Interactive map visualization",
      "Distance and travel time estimation"
    ],
    structure: {
      frontend: "React + Vite with Tailwind CSS",
      backend: "FastAPI, Node.js, Express.js",
      database: "MongoDB",
      apis: "Google Places API"
    },
   links: {
      github: "https://github.com/Dev22Patel/SmartTripPlanner",
      website: "https://smart-trip-planner-v1.vercel.app/",
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
      github: "https://github.com/Dev22Patel/SmartTripPlanner",
      website: "https://smart-trip-planner-v1.vercel.app/",
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

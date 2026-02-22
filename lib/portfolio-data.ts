export const profile = {
  name: "Hrvoje Mlinarević",
  title: "Full-Stack Developer",
  location: "Zagreb, Croatia",
  email: "hrvoje@millify.dev",
  tagline:
    "Building web applications from frontend interfaces to backend systems.",
  bio: "I like building things that matter — from backend systems and servers to interfaces that people actually enjoy using. My goal is to help make the web a bit more approachable for everyone.",
};

export const experience = [
  {
    company: "KNB",
    role: "Full-Stack Developer",
    description: "Software development agency",
    tech: ["React", "React Native", "Nest.js", "Node.js", "MySQL", "Docker"],
    period: "Oct 2024 — Present",
    location: "Croatia (On site)",
    highlights: [
      "Building APIs that connect web and mobile apps",
      "Debugging and optimizing code across the full stack",
      "Taking features from development through to deployment",
      "Contributing to code reviews and QA to keep quality high",
    ],
  },
  {
    company: "Appliment",
    role: "Full-Stack Developer",
    description: "CRM & custom app development",
    tech: ["Vue.js", "PHP", "Laravel"],
    period: "Feb 2024 — Jul 2024",
    location: "Croatia (On site)",
    highlights: [
      "Developed features for custom applications and CRM systems",
      "Deployed applications to production environments",
      "Participated in code reviews and handled post-launch bug fixes",
    ],
  },
  {
    company: "Aspirations",
    role: "Backend Developer",
    description: "AI-powered newsletters",
    tech: ["Node.js", "AWS", "ChatGPT"],
    period: "Jul 2023 — Jan 2024",
    location: "USA (Freelance)",
    highlights: [
      "Built automated newsletter system with AI-curated content",
      "Developed web scraping on AWS serverless architecture",
      "Integrated ChatGPT for data analysis and correlation",
      "Set up scheduled AWS Lambda functions and DynamoDB storage",
    ],
  },
];

export type Project = {
  name: string;
  description?: string;
  url?: string;
  logo?: string;
  logoSymbol?: "square";
};

export const projects: Project[] = [
  {
    name: "Sessions",
    description: "Portfolio project",
    logoSymbol: "square",
    url: "/projects/sessions",
  },
];

const DEVICON = (name: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`;

export const skillsByCategory = {
  frontend: [
    { name: "HTML", icon: DEVICON("html5") },
    { name: "CSS", icon: DEVICON("css3") },
    { name: "JavaScript", icon: DEVICON("javascript") },
    { name: "TypeScript", icon: DEVICON("typescript") },
    { name: "React", icon: DEVICON("react") },
    { name: "Next.js", icon: DEVICON("nextjs") },
    { name: "Vue.js", icon: DEVICON("vuejs") },
    { name: "Tailwind CSS", icon: DEVICON("tailwindcss") },
  ],
  backend: [
    { name: "Node.js", icon: DEVICON("nodejs") },
    { name: "Nest.js", icon: DEVICON("nestjs") },
    { name: "MySQL", icon: DEVICON("mysql") },
    { name: "Docker", icon: DEVICON("docker") },
    { name: "Shell", icon: DEVICON("bash") },
  ],
};

export const education = {
  selfTaught: {
    intro:
      "In 2020, I started learning JavaScript through courses on Udemy and spent a lot of time practicing algorithmic problems on platforms like Codewars. That experience helped me better understand problem-solving and how to write efficient code. By building my own projects along the way, I developed a good technical foundation and became comfortable working with various libraries and frameworks within the JavaScript ecosystem.",
  },
};

export const interests = [
  "Swimming",
  "Reading",
  "Making great coffee",
  "Salsa Dancing",
];

export const languages = [
  { name: "Croatian", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Spanish", level: "Conversational" },
];

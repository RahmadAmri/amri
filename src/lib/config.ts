import { EducationItem, ExperienceItem, Project } from "./types";

export const PROJECTS: Project[] = [
  {
    title: "Padeltix",
    period: "Jul 2026 – Oct 2026",
    description:
      "Full-stack padel tournament platform for players and organizers.",
    highlights: [
      "Player and organizer dashboards with team registration, invitations, and eligibility checks.",
      "Round-robin and knockout brackets, standings, court scheduling, and match scoring.",
      "JWT role-based access, payment verification, and bank-transfer proof uploads.",
    ],
    link: "https://padeltix.id/",
    tags: ["Next.js", "PostgreSQL", "Express", "JWT"],
  },
  {
    title: "Hebronstar",
    period: "Jan 2026 – Present",
    description:
      "Multilingual corporate website and content dashboard for a strategy consulting company.",
    highlights: [
      "React pages and admin dashboard with six-language support and localized routing.",
      "Content editing, articles, webinars, rich text, uploads, vacancies, and applicant workflows.",
      "Axios and TanStack Query integrations with caching, filtering, and role-based access.",
    ],
    tags: ["React", "TypeScript", "i18next", "TanStack Query"],
  },
  {
    title: "FaoTour",
    period: "Oct 2025",
    description:
      "Full-stack trip and passport management with AI extraction and cloud storage.",
    highlights: [
      "Gemini API passport OCR to automate structured data extraction from images.",
      "Sharp image compression, AWS S3 storage, MD5 caching, and Excel/CSV ZIP exports.",
      "Mobile-first Next.js interfaces with PostgreSQL, JWT, and bcrypt authentication.",
    ],
    tags: ["Next.js", "Gemini API", "AWS S3", "PostgreSQL"],
  },
  {
    title: "Reddit",
    period: "Jun 2025",
    description:
      "React Native and Expo social app with posts, comments, likes, and user following.",
    highlights: [
      "GraphQL APIs with JWT sessions and MongoDB persistence.",
      "Redis caching and Apollo Client integration for responsive social interactions.",
    ],
    link: "https://github.com/RahmadAmri/Reddit",
    image: "Reddit.png",
    tags: ["React Native", "GraphQL", "MongoDB", "Redis"],
  },
  {
    title: "FoxQuiz",
    period: "May 2025",
    description:
      "Real-time multiplayer quiz application with AI-generated questions.",
    highlights: [
      "Socket.IO rooms with host controls, synchronized game state, messaging, and reconnection.",
      "Gemini API question generation across seven categories with timed scoring.",
      "PostgreSQL and Sequelize persistence for quiz results.",
    ],
    link: "https://gp-dio.web.app/",
    image: "FoxQuiz.png",
    tags: ["Socket.IO", "Gemini API", "PostgreSQL", "Sequelize"],
  },
  {
    title: "Latako",
    period: "2025",
    description:
      "Construction marketplace with product listings and content sections.",
    highlights: [
      "Responsive marketplace experience for construction products and services.",
      "Clear content structure for browsing products and learning about the company.",
    ],
    link: "https://latako.id/",
    image: "Latako-logo.jpg",
    tags: ["Next.js", "Tailwind CSS", "Responsive UI"],
  },
];

export const SKILLS = [
  {
    label: "Programming Languages",
    skill: ["JavaScript", "TypeScript", "SQL"],
  },
  {
    label: "Front-End",
    skill: [
      "React",
      "Next.js",
      "React Native",
      "Redux Toolkit",
      "TanStack Query",
      "Apollo Client",
      "React Context API",
      "shadcn/ui",
      "i18next",
      "Axios",
      "HTML",
      "CSS",
    ],
  },
  {
    label: "Back-End",
    skill: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Apollo Server",
      "GraphQL",
      "Socket.IO",
      "JWT",
      "bcrypt",
      "OAuth 2.0",
      "Multer",
      "sharp",
    ],
  },
  {
    label: "Data",
    skill: [
      "PostgreSQL",
      "MongoDB",
      "Sequelize",
      "Prisma",
      "Redis",
      "IndexedDB",
      "Supabase",
    ],
  },
  {
    label: "Cloud & Tools",
    skill: [
      "AWS (EC2, S3)",
      "Vercel",
      "Gemini API",
      "GitHub",
      "Postman",
      "Jira",
    ],
  },
  {
    label: "Languages",
    skill: [
      "Indonesian (Native)",
      "English (Fluent)",
      "Russian (Professional Working Proficiency)",
    ],
  },
];

export const THEMES_OPTION = [
  { value: "system", label: "System", icon: "sun-moon" },
  { value: "light", label: "Light", icon: "sun" },
  { value: "dark", label: "Dark", icon: "moon" },
];

export const CERTIFICATIONS = [
  {
    title: "Frontend Developer (React)",
    provider: "HackerRank",
    link: "https://www.hackerrank.com/certificates/iframe/48a6aa289176",
    date: "June 2025",
  },
  {
    title: "JavaScript (Intermediate)",
    provider: "HackerRank",
    link: "https://www.hackerrank.com/certificates/iframe/1bc2e98c0cc3",
    date: "June 2025",
  },
  {
    title: "CSS (Basic)",
    provider: "HackerRank",
    link: "https://www.hackerrank.com/certificates/iframe/a00089cfab74",
    date: "June 2025",
  },
  {
    title: "SQL (Intermediate)",
    provider: "HackerRank",
    link: "https://www.hackerrank.com/certificates/iframe/a0dbbb4da1f1",
    date: "June 2025",
  },
  {
    title: "Node.js (Intermediate)",
    provider: "HackerRank",
    link: "https://www.hackerrank.com/certificates/iframe/5698a69285a0",
    date: "September 2025",
  },
  {
    title: "Problem Solving (Intermediate)",
    provider: "HackerRank",
    link: "https://www.hackerrank.com/certificates/iframe/ebd60b2fc7cf",
    date: "September 2025",
  },
];

export const EDUCATIONS: EducationItem[] = [
  {
    school: "Hacktiv8",
    program: "Full Stack JavaScript Immersive Program",
    location: "Jakarta, Indonesia",
    start: "Jan 2025",
    end: "Jul 2025",
    bullets: [
      "Full‑time immersive training in modern JavaScript (frontend & backend).",
    ],
    logo: "Hacktiv8.png",
    link: "https://hacktiv8.com",
    extraLinks: [
      {
        label: "Transcript",
        url: "https://job-portal-manual.s3.us-east-1.amazonaws.com/Transcript+-+HCK-83+-+2025+-+Rahmad+Maulidi+Amri.pdf",
      },
    ],
  },
  {
    school: "Kazan Aviation Institute",
    program: "Bachelor of Aircraft Engineering",
    location: "Kazan, Russia",
    start: "Sep 2020",
    end: "Aug 2024",
    bullets: [],
    logo: "kai.png",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Frontend Developer",
    type: "Contract",
    company: "AIG Nusa Hub",
    location: "Bogor, Indonesia",
    start: "Dec 2025",
    end: "Jun 2026",
    bullets: [
      "Built a React and TypeScript POS with a product catalog, Redux Toolkit cart, and cash, QRIS, and credit payment flows, including validation and change calculation.",
      "Implemented offline cashier, stock, and order workflows with IndexedDB, queued REST API sync, sequential processing, per-item error handling, and retries on reconnection.",
      "Created Next.js receipt pages with html2canvas PNG export and WhatsApp sharing, and translated Figma designs into mobile-first Tailwind CSS interfaces.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "IndexedDB",
      "Next.js",
      "Tailwind CSS",
    ],
    logo: "AIGNusaHubLogo.png",
    link: "https://aignusahub.com/en",
  },
  {
    role: "Full-Stack Developer",
    type: "Freelance",
    company: "PT Laa Tansa Konsulindo",
    location: "Jakarta Selatan, Indonesia",
    start: "Sep 2025",
    end: "Dec 2025",
    bullets: [
      "Built a six-step member registration form with Next.js, TypeScript, and Tailwind CSS, including validation, local draft persistence, and image/PDF uploads.",
      "Developed Node.js and Express REST APIs with PostgreSQL and Sequelize, JWT admin authentication, and a searchable, paginated member dashboard.",
      "Created a searchable public flipbook and PDFKit directory exports; automated business card PDFs and birthday banners in PNG/JPEG from member data.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "PDFKit",
    ],
    website: "https://ebooknetworth.com/",
  },
  {
    role: "Frontend Developer",
    type: "Freelance",
    company: "FaoTech",
    location: "Kazan, Russia",
    start: "Jul 2024",
    end: "Jan 2025",
    bullets: [
      "Built responsive Next.js 15 applications and admin panels with TypeScript and Tailwind CSS, collaborating with UI/UX designers.",
      "Integrated REST APIs and CRUD workflows with backend developers, transformed API data for UI display, and added loading feedback.",
      "Implemented Redux Toolkit state management, login, registration, and password recovery with JWT, bcrypt, and PostgreSQL; integrated EmailJS.",
      "Added multilingual support and optimized key content pages for SEO.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Next.js",
      "JWT",
      "PostgreSQL",
      "EmailJS",
      "i18next",
    ],
    logo: "FaoTech.png",
    link: "https://faotech.dev",
  },
  {
    role: "Full-Stack Developer",
    type: "Project",
    company: "Latako",
    start: "Project",
    end: "",
    bullets: [
      "Built a responsive construction marketplace experience for browsing products and services.",
      "Created a clear content structure for product discovery and company information.",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Responsive UI"],
    logo: "Latako-logo.jpg",
    link: "https://latako.id/",
  },
];

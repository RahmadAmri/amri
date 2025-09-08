import Link from "next/link";

const PROJECTS = [
  {
    title: "iCircle",
    description:
      "A modern e-commerce platform specializing in Apple products with comprehensive product catalog, user authentication, and wishlist functionality.",
    link: "https://i-circle.vercel.app/",
  },
  {
    title: "Reddit",
    description:
      "A social media platform built with React Native featuring user authentication, post creation, and real-time interactions with comprehensive user management functionality",
    link: "https://github.com/RahmadAmri/Reddit",
  },
  {
    title: "SportMate",
    description:
      "A comprehensive fitness tracking and sports recommendation platform featuring AI-powered workout suggestions, progress logging, and personal trainer booking integration.",
    link: "https://ip-rahmadamri.web.app/login",
  },
  {
    title: "FoxQuiz",
    description:
      "A sophisticated real-time multiplayer quiz application featuring AI-powered question generation, live gameplay mechanics, and comprehensive user management systems built with modern full-stack technologies.",
    link: "https://gp-dio.web.app/",
  },
  {
    title: "FlightHub",
    description:
      "A comprehensive flight booking management system featuring real-time seat availability tracking, transaction processing, and automated PDF report generation built with modern full-stack technologies.",
    link: "https://github.com/RahmadAmri/FlightHub",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col gap-2">
      <p className="border-b border-foreground">
        <strong>Projects</strong>
      </p>
      <ul className="flex flex-col gap-2">
        {PROJECTS.map((e) => {
          return (
            <li key={e.title} className="flex flex-col">
              <Link
                className="text-link font-medium hover:underline"
                href={e.link}
                target="_blank"
              >
                {e.title}
              </Link>
              <p>{e.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

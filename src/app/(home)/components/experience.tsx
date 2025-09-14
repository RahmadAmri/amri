"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type ExperienceItem = {
  role: string;
  company: string;
  location?: string;
  start: string;
  end: string;
  bullets: string[];
  technologies?: string[];
  logo: string;
  link?: string;
};

const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Frontend Developer",
    company: "FaoTech",
    location: "Kazan, Rusia",
    start: "Jan 2024",
    end: "Jan 2025",
    bullets: [
      "Developed fully responsive web applications compatible with all devices.",
      "Collaborated with UI/UX designers to implement visually compelling and intuitive interfaces.",
      "Enhanced the user experience by incorporating various loading animations during data and image loading on webpages.",
      "Collaborated with Backend developers to integrate the API, ensuring accurate and relevant data presentation within the user interface.",
      "Proficient in implementing Create, Read, Update, and Delete (CRUD) operations integrated with Backend APIs.",
      "Proficient in manipulating and transforming data received from the Backend for seamless communication and integration with Backend systems.",
      "Utilized Redux Toolkit for efficient state management, facilitating predictable state transitions and bolstering application scalability and maintainability.",
      "Implemented essential authorization functionalities, such as login, registration, and password recovery.",
      "Integrated email services, such as Email.js, into the system.",
      "Created user interface for the admin panels and implemented their full range of functionalities.",
      "Implemented a multi-language functionality with support for multiple diverse languages, utilizing the i18n internationalization framework.",
    ],
    technologies: [
      "React",
      "Redux Toolkit",
      "i18n",
      "EmailJS",
      "Tailwind CSS",
      "Next.js",
      "Zustand",
      "HTML",
    ],
    logo: "FaoTech.png",
    link: "https://faotech.dev",
  },
];

export default function Experience() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-2">
      <p className="border-b border-foreground">
        <strong>Experience</strong>
      </p>

      <div className="flex flex-col gap-4">
        {EXPERIENCES.map((exp, idx) => (
          <div
            key={exp.company + exp.role}
            className="group flex gap-4 rounded-lg border p-3 hover:bg-muted/30 transition-colors"
          >
            {/* Logo (hover target) */}
            <div
              className="relative h-16 w-16 md:h-20 md:w-20 shrink-0 overflow-hidden rounded-lg ring-1 ring-border"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              onFocus={() => setHoveredIdx(idx)}
              onBlur={() => setHoveredIdx(null)}
            >
              {exp.link ? (
                <Link
                  href={exp.link}
                  target="_blank"
                  className="block h-full w-full"
                >
                  <Image
                    src={`/assets/${exp.logo}`}
                    alt={`${exp.company} logo`}
                    fill
                    className="object-contain bg-white"
                    sizes="80px"
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="pointer-events-none absolute bottom-1 right-1 text-[10px] px-1.5 py-0.5 rounded bg-white/90 text-black/80 opacity-0 group-hover:opacity-100 transition-opacity">
                    Visit
                  </span>
                </Link>
              ) : (
                <Image
                  src={`/assets/${exp.logo}`}
                  alt={`${exp.company} logo`}
                  fill
                  className="object-contain bg-white"
                  sizes="80px"
                />
              )}
            </div>

            {/* Details */}
            <div className="flex-1 space-y-2">
              <div className="flex flex-wrap items-center gap-x-2 text-sm">
                <span className="font-medium">{exp.role}</span>
                <span className="text-muted-foreground">· {exp.company}</span>
                {exp.location && (
                  <span className="text-muted-foreground">
                    · {exp.location}
                  </span>
                )}
              </div>

              <p className="text-xs text-muted-foreground">
                {exp.start} – {exp.end}
              </p>

              {/* Bullets: visible only when hovering the logo */}
              <ul
                className={[
                  "ml-5 list-disc text-sm space-y-1 transition-all duration-200",
                  hoveredIdx === idx
                    ? "opacity-100 max-h-[600px]"
                    : "opacity-0 max-h-0 overflow-hidden pointer-events-none",
                ].join(" ")}
              >
                {exp.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              {exp.technologies && exp.technologies.length > 0 && (
                <ul className="flex flex-wrap gap-2">
                  {exp.technologies.map((t) => (
                    <li
                      key={t}
                      className="bg-muted px-2 py-1 rounded text-[10px] tracking-wide"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

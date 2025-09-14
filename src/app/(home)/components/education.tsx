"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type EducationItem = {
  school: string;
  program: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
  logo?: string;
  link?: string;
  extraLinks?: { label: string; url: string }[];
};

const EDUCATIONS: EducationItem[] = [
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
    school: "MAN 2 Pekanbaru",
    program: "Science",
    location: "Pekanbaru, Indonesia",
    start: "Jul 2017",
    end: "May 2020",
    logo: "Man2.jpeg",
    bullets: ["Science track."],
  },
];

export default function Education() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-2">
      <p className="border-b border-foreground">
        <strong>Education</strong>
      </p>

      <div className="flex flex-col gap-4">
        {EDUCATIONS.map((ed, idx) => {
          const open = hoveredIdx === idx;
          return (
            <div
              key={ed.school + ed.program}
              className="group flex gap-4 rounded-lg border p-3 hover:bg-muted/30 transition-colors"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              onFocusCapture={() => setHoveredIdx(idx)}
              onBlurCapture={(e) => {
                if (!e.currentTarget.contains(document.activeElement)) {
                  setHoveredIdx(null);
                }
              }}
            >
              {/* Logo */}
              <div className="relative h-16 w-16 md:h-20 md:w-20 shrink-0 overflow-hidden rounded-lg ring-1 ring-border bg-white">
                {ed.logo && (
                  <>
                    {ed.link ? (
                      <Link
                        href={ed.link}
                        target="_blank"
                        className="block h-full w-full"
                      >
                        <Image
                          src={`/assets/${ed.logo}`}
                          alt={`${ed.school} logo`}
                          fill
                          sizes="80px"
                          className="object-contain"
                          priority={idx === 0}
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="pointer-events-none absolute bottom-1 right-1 text-[10px] px-1.5 py-0.5 rounded bg-white/90 text-black/80 opacity-0 group-hover:opacity-100 transition-opacity">
                          Visit
                        </span>
                      </Link>
                    ) : (
                      <Image
                        src={`/assets/${ed.logo}`}
                        alt={`${ed.school} logo`}
                        fill
                        sizes="80px"
                        className="object-contain"
                      />
                    )}
                  </>
                )}
              </div>

              {/* Details */}
              <div className="flex-1 space-y-2">
                <div className="flex flex-wrap items-center gap-x-2 text-sm">
                  <span className="font-medium">{ed.program}</span>
                  <span className="text-muted-foreground">· {ed.school}</span>
                  <span className="text-muted-foreground">· {ed.location}</span>
                </div>

                <p className="text-xs text-muted-foreground">
                  {ed.start} – {ed.end}
                </p>

                {/* Bullets + extra links */}
                <ul
                  className={[
                    "ml-5 list-disc text-sm space-y-1 transition-all duration-200",
                    open
                      ? "opacity-100 max-h-[300px]"
                      : "opacity-0 max-h-0 overflow-hidden pointer-events-none",
                  ].join(" ")}
                >
                  {ed.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                  {ed.extraLinks?.length ? (
                    <li className="space-x-2">
                      {ed.extraLinks.map((l) => (
                        <Link
                          key={l.url}
                          href={l.url}
                          target="_blank"
                          className="underline underline-offset-2"
                        >
                          {l.label}
                        </Link>
                      ))}
                    </li>
                  ) : null}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

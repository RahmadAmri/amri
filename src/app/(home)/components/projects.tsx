"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  link: string;
  image: string; // from /public/assets
  tags?: string[];
};

const PROJECTS: Project[] = [
  {
    title: "iCircle",
    description:
      "E‑commerce platform for Apple products with catalog, auth, and wishlist.",
    link: "https://i-circle.vercel.app/",
    image: "iCircle.png",
    tags: ["Next.js", "Stripe", "Auth"],
  },
  {
    title: "Latako",
    description:
      "Construction marketplace with modern landing, product listing, and content sections.",
    link: "https://latako.id/",
    image: "Latako.png",
    tags: ["Next.js", "Tailwind CSS", "Lucide React"],
  },
  {
    title: "SportMate",
    description:
      "Fitness tracking & sports recommendation app with AI suggestions and trainer booking.",
    link: "https://ip-rahmadamri.web.app/login",
    image: "SportMate.png",
    tags: ["AI", "Firebase", "Scheduling"],
  },
  {
    title: "FoxQuiz",
    description:
      "Real‑time multiplayer quiz with AI question generation and user management.",
    link: "https://gp-dio.web.app/",
    image: "FoxQuiz.png",
    tags: ["Realtime", "AI", "Full‑stack"],
  },
  {
    title: "FlightHub",
    description:
      "Flight booking system with seat availability, transactions, and PDF reporting.",
    link: "https://github.com/RahmadAmri/FlightHub",
    image: "FlightHub.png",
    tags: ["Node.js", "Reports", "Transactions"],
  },
  {
    title: "Reddit",
    description:
      "React Native social platform with auth, post creation and real‑time interactions.",
    link: "https://github.com/RahmadAmri/Reddit",
    image: "Reddit.png",
    tags: ["React Native", "Realtime", "Auth"],
  },
];

export default function Projects() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-project-card]");
    const width = card ? card.offsetWidth + 24 : 320;
    el.scrollBy({ left: dir === "left" ? -width : width, behavior: "smooth" });
  };

  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-center justify-between border-b border-foreground pb-1">
        <p className="font-semibold">Projects</p>
        <div className="flex gap-1">
          <button
            aria-label="Scroll left"
            onClick={() => scroll("left")}
            className="h-7 w-7 rounded border text-xs hover:bg-muted"
          >
            ←
          </button>
          <button
            aria-label="Scroll right"
            onClick={() => scroll("right")}
            className="h-7 w-7 rounded border text-xs hover:bg-muted"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="relative -mx-6 md:-mx-12 px-6 md:px-12 overflow-x-auto"
      >
        <ul className="flex gap-6 py-2 snap-x snap-mandatory">
          {PROJECTS.map((p, i) => (
            <li
              key={p.title}
              data-project-card
              className="group relative snap-start w-[250px] sm:w-[300px] md:w-[340px] flex-shrink-0"
            >
              <Link
                href={p.link}
                target="_blank"
                className="block relative h-[360px] rounded-lg overflow-hidden ring-1 ring-border"
              >
                {/* Image */}
                <Image
                  src={`/assets/${p.image}`}
                  alt={p.title}
                  fill
                  sizes="(max-width:768px) 250px, 340px"
                  className="object-cover"
                  priority={i === 0}
                />

                {/* Always-visible title badge (top-left) */}
                <span className="absolute top-2 left-2 z-10 text-[11px] font-medium px-2 py-1 rounded bg-black/60 text-white/90 border border-white/10">
                  {p.title}
                </span>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

                {/* Hover content */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-4 opacity-0 translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
                  <p className="text-[11px] leading-snug text-white/90">
                    {p.description}
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    {p.tags?.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-white/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1 rounded bg-white/90 text-black text-xs font-medium px-3 py-1">
                    Visit Project
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="opacity-80"
                    >
                      <path
                        d="M7 17L17 7M17 7H9M17 7v8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/config";

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
      <div className="section-title flex items-center justify-between border-b border-foreground pb-1">
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
        <ul className="flex snap-x snap-mandatory gap-4 py-2">
          {PROJECTS.map((p, i) => (
            <li
              key={p.title}
              data-project-card
              className="group relative w-[290px] flex-shrink-0 snap-start sm:w-[360px]"
            >
              <div className="card-hover flex min-h-[360px] flex-col overflow-hidden rounded-xl border bg-card/60">
                <div className="relative h-36 overflow-hidden border-b bg-muted/40">
                  {p.image ? (
                    <Image
                      src={`/assets/${p.image}`}
                      alt={`${p.title} preview`}
                      fill
                      sizes="(max-width:768px) 290px, 360px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority={i === 0}
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-linear-to-br from-blue-500/20 via-background to-cyan-400/20">
                      <span className="text-4xl font-semibold tracking-tighter text-foreground/70">
                        {p.title.slice(0, 2)}
                      </span>
                    </div>
                  )}
                  <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/60 px-2.5 py-1 text-[10px] font-medium text-white">
                    {p.period}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <div>
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                  </div>
                  <ul className="mt-3 flex-1 space-y-1.5 text-xs leading-relaxed text-muted-foreground">
                    {p.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-500" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-muted px-2.5 py-1 text-[10px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {p.link ? (
                    <Link
                      href={p.link}
                      target="_blank"
                      className="mt-4 inline-flex w-fit items-center gap-1 text-xs font-medium text-link hover:underline"
                    >
                      View project
                      <span aria-hidden="true">↗</span>
                    </Link>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

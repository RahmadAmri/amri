import { EXPERIENCES } from "@/lib/config";
import Image from "next/image";
import Link from "next/link";

export default function Experience() {
  return (
    <div className="flex flex-col gap-3">
      <p className="section-title border-b border-foreground pb-1">
        <strong>Experience</strong>
      </p>

      <div className="flex flex-col gap-3">
        {EXPERIENCES.map((exp, idx) => (
          <div
            key={exp.company + exp.role}
            className="card-hover group flex flex-col gap-4 rounded-xl border bg-card/60 p-4 sm:flex-row sm:p-5"
          >
            <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border bg-white sm:h-16 sm:w-16">
              {exp.link ? (
                <Link
                  href={exp.link}
                  target="_blank"
                  className="relative block h-full w-full"
                >
                  <Image
                    src={`/assets/${exp.logo}`}
                    alt={`${exp.company} logo`}
                    fill
                    className="object-contain bg-white"
                    sizes="80px"
                    priority={idx === 0}
                  />
                </Link>
              ) : exp.logo ? (
                <Image
                  src={`/assets/${exp.logo}`}
                  alt={`${exp.company} logo`}
                  fill
                  className="object-contain"
                  sizes="64px"
                />
              ) : (
                <span className="text-sm font-semibold text-muted-foreground">
                  {exp.company
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 3)}
                </span>
              )}
            </div>

            <div className="flex-1 space-y-2">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-semibold">{exp.role}</p>
                  <p className="text-sm text-muted-foreground">
                    {exp.company} · {exp.type}
                    {exp.website ? (
                      <>
                        {" · "}
                        <Link
                          href={exp.website}
                          target="_blank"
                          className="text-link hover:underline"
                        >
                          Website
                        </Link>
                      </>
                    ) : null}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground sm:text-right">
                  {exp.end ? `${exp.start} – ${exp.end}` : exp.start}
                  {exp.location ? (
                    <>
                      <br />
                      {exp.location}
                    </>
                  ) : null}
                </p>
              </div>

              <ul className="ml-4 list-disc space-y-1.5 text-sm text-muted-foreground">
                {exp.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <ul className="flex flex-wrap gap-1.5 pt-1">
                {exp.technologies.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-muted px-2.5 py-1 text-[10px] tracking-wide"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

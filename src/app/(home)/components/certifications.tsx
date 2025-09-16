import Link from "next/link";

const CERTIFICATIONS = [
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

export default function Certifications() {
  return (
    <div className="flex flex-col gap-2">
      <p className="border-b border-foreground">
        <strong>Certifications</strong>
      </p>
      <ul className="mt-1 flex flex-col gap-2">
        {CERTIFICATIONS.map((e) => (
          <li
            key={e.title}
            className="rounded-md px-2 py-1.5 hover:bg-muted/30 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <Link
                target="_blank"
                className="text-link hover:underline leading-snug break-words text-sm"
                href={e.link}
              >
                {e.provider} - {e.title}
              </Link>
              <span className="text-xs sm:text-sm text-muted-foreground sm:pl-4 sm:text-right sm:whitespace-nowrap">
                {e.date}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

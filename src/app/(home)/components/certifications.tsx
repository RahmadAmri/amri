import Link from "next/link";

const CERTIFICATIONS = [
  {
    title: "Frontend Developer (React)",
    provider: "HackerRank",
    link: "https://www.hackerrank.com/certificates/48a6aa289176",
    date: "June 2025",
  },
  {
    title: "JavaScript (Intermediate)",
    provider: "HackerRank",
    link: "https://www.hackerrank.com/certificates/1bc2c98c0cc3",
    date: "June 2025",
  },
  {
    title: "CSS (Basic)",
    provider: "HackerRank",
    link: "https://www.hackerrank.com/certificates/a00089cfab74",
    date: "June 2025",
  },
  {
    title: "SQL (Intermediate)",
    provider: "HackerRank",
    link: "https://www.hackerrank.com/certificates/a0dbbb4da1f1",
    date: "June 2025",
  },
];

export default function Certifications() {
  return (
    <div className="flex flex-col gap-2">
      <p className="border-b border-foreground">
        <strong>Certifications</strong>
      </p>
      <ul>
        {CERTIFICATIONS.map((e) => {
          return (
            <li key={e.title} className="flex justify-between">
              <Link
                target="_blank"
                className="text-link hover:underline"
                href={e.link}
              >{`${e.provider} - ${e.title}`}</Link>
              <p>{e.date}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

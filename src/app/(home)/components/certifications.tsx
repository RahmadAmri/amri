import { CERTIFICATIONS } from "@/lib/config";
import Link from "next/link";

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

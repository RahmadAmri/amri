import Link from "next/link";
import LangSwitcher from "./lang-switcher";

export default function Header() {
  return (
    <div className="flex justify-between">
      <header>
        <h1>
          <strong>Rahmad Amri</strong>
        </h1>
        <h2>Software Engineer</h2>
        <div className="flex gap-2 text-muted-foreground">
          <Link className="hover:underline" target="_blank" href="/cv.pdf">
            CV
          </Link>
          <Link
            className="hover:underline"
            target="_blank"
            href="mailto:rahmadamri3@gmail.com"
          >
            Email
          </Link>
        </div>
      </header>
      <LangSwitcher />
    </div>
  );
}

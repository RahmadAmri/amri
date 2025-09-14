import About from "./components/about";
import Certifications from "./components/certifications";
import Education from "./components/education";
import Experience from "./components/experience";
import Header from "./components/header";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-4 p-6 md:p-12 max-w-[700px] mx-auto">
      <div className="flex items-start gap-4 sm:gap-6">
        <div className="relative h-16 w-16 sm:h-20 sm:w-20 overflow-hidden rounded-xl ring-1 ring-border bg-muted/10 shadow-sm shrink-0">
          <Image
            src="/assets/amri.jpg"
            alt="Rahmad Amri"
            fill
            sizes="(min-width: 640px) 80px, 64px"
            className="object-cover"
            priority
          />
        </div>
        <div className="flex-1 min-w-0">
          <Header />
        </div>
      </div>

      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
    </main>
  );
}

import About from "./components/about";
import { AvatarImage } from "./components/avatar-image";
import Certifications from "./components/certifications";
import Education from "./components/education";
import Experience from "./components/experience";
import Header from "./components/header";
import Projects from "./components/projects";
import Skills from "./components/skills";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-4 p-6 md:p-12 max-w-[700px] mx-auto">
      <div className="flex items-start gap-4 sm:gap-6">
        <AvatarImage />
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

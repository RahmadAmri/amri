import About from "./components/about";
import { AvatarImage } from "./components/avatar-image";
import Certifications from "./components/certifications";
import Education from "./components/education";
import Experience from "./components/experience";
import Header from "./components/header";
import Projects from "./components/projects";
import Skills from "./components/skills";
import { AnimateIn } from "@/components/animate-in";

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-[900px] flex-col gap-8 px-5 pb-16 pt-6 sm:px-8 md:gap-10 md:px-12 md:pt-12">
      <AnimateIn delay={0}>
        <div className="flex items-start gap-4 sm:gap-6">
          <AvatarImage />
          <div className="flex-1 min-w-0">
            <Header />
          </div>
        </div>
      </AnimateIn>

      <AnimateIn delay={80}>
        <About />
      </AnimateIn>

      <AnimateIn delay={120}>
        <Education />
      </AnimateIn>

      <AnimateIn delay={0}>
        <Experience />
      </AnimateIn>

      <AnimateIn delay={0}>
        <Projects />
      </AnimateIn>

      <AnimateIn delay={0}>
        <Skills />
      </AnimateIn>

      <AnimateIn delay={0}>
        <Certifications />
      </AnimateIn>

      <AnimateIn delay={0}>
        <footer className="pt-4">
          <div className="footer-gradient mb-4" />
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Rahmad Amri. Built with Next.js
            &amp; Tailwind CSS.
          </p>
        </footer>
      </AnimateIn>
    </main>
  );
}

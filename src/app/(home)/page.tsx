import About from "./components/about";
import Certifications from "./components/certifications";
import Header from "./components/header";
import Projects from "./components/projects";
import Skills from "./components/skills";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-4 p-6 md:p-12 max-w-[700px] mx-auto">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Certifications />
    </main>
  );
}

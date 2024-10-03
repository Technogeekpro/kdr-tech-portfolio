import Image from "next/image";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import About from "@/components/main/About";
import Team from "@/components/main/Team";
import Encryption from "@/components/main/Encryption";
import Projects from "@/components/main/Projects";
import ProjectsSection from "@/components/main/ProjectSection";
import AchievementsSection from "@/components/main/AchievementsSection";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="container px-0 py-10 flex flex-col gap-10">
        <Hero />
        <AchievementsSection />
        <Skills />
        <About />
        <Team />
        <Encryption />
        <ProjectsSection />
        <Projects />
      </div>
    </main>
  );
}

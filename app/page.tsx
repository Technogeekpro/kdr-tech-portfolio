import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import About from "@/components/main/About";
import Team from "@/components/main/Team";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-10">
        <Hero />
        <Skills />
        <About/>
        <Team />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}

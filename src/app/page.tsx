import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="bg-gray-900 min-h-screen">
        <Navbar />
        <main className="container mx-auto px-6 md:px-10 lg:px-20 max-w-5xl">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
        </main>
    </div>
    </>
  );
}

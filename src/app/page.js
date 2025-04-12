import AboutMe from "@/componenets/AboutMe/AboutMe";
import Banner from "@/componenets/Banner/Banner";
import Contact from "@/componenets/Contact/Contact";
import Education from "@/componenets/Education/Education";
import Experience from "@/componenets/Experience/Experience";
import Footer from "@/componenets/Footer/Footer";
import Projects from "@/componenets/Projects/Projects";
import Skills from "@/componenets/Skills/Skills";

export default function Home() {
  return (
    <div className="grid min-h-screen sm:pt-[4.6rem] sm:px-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 text-white items-center sm:items-start">
        <Banner />
        <AboutMe />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

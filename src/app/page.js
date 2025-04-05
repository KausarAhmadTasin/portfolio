import AboutMe from "@/componenets/AboutMe/AboutMe";
import Banner from "@/componenets/Banner/Banner";
import Contact from "@/componenets/Contact/Contact";
import Education from "@/componenets/Education/Education";
import Footer from "@/componenets/Footer/Footer";
import Projects from "@/componenets/Projects/Projects";
import Skills from "@/componenets/Skills/Skills";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr] items-center justify-items-center min-h-screen gap-16 sm:pt-20 sm:px-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 text-white items-center sm:items-start">
        <Banner />
        <AboutMe />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

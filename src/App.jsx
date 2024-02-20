import "./App.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Education from "./components/education/Education";

function App() {
  return (
    <>
      <Header />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

import { FaArrowRight } from "react-icons/fa6";
import "./Navbar.css";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
const Navbar = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = [
        "about",
        "skills",
        "projects",
        "education",
        "contact",
      ];

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 0 && rect.bottom > 0) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/#about">
          {" "}
          Kausar<span className="last-name">Ahmad Tasin</span>
        </a>
      </div>
      <ul className="section-list">
        <li>
          <a
            href="/#about"
            className={activeSection === "about" ? "active" : ""}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/#skills"
            className={activeSection === "skills" ? "active" : ""}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="/#projects"
            className={activeSection === "projects" ? "active" : ""}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="/#education"
            className={activeSection === "education" ? "active" : ""}
          >
            Education
          </a>
        </li>
        <li>
          <a
            href="/#contact"
            className={activeSection === "contact" ? "active" : ""}
          >
            Contact
          </a>
        </li>
        <button className="primary-btn">
          <a
            className="link-btn"
            href="https://drive.google.com/file/d/1sr7vEQUZsPsup_Caz5tNvZWaAvnYRZnr/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume <FaArrowRight />
          </a>
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;

import { FaArrowRight } from "react-icons/fa6";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        Kausar<span className="last-name">Ahmad Tasin</span>
      </div>
      <ul className="section-list">
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Education</li>
        <li>Contact</li>
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

import { FaArrowRight } from "react-icons/fa6";
import "./Navbar.css";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/#about">
          {" "}
          Kausar<span className="last-name">Ahmad Tasin</span>
        </a>
      </div>
      <ul className="section-list">
        <a href="/#about">
          <li>About </li>
        </a>

        <a href="/#skills">
          <li>Skills </li>
        </a>

        <a href="/#projects">
          {" "}
          <li>Projects</li>
        </a>

        <a href="/#education">
          <li>Education</li>
        </a>

        <a href="/#contact">
          <li>Contact</li>
        </a>
        <a
          className="link-btn"
          href="https://drive.google.com/file/d/1sr7vEQUZsPsup_Caz5tNvZWaAvnYRZnr/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="primary-btn">
            Resume <FaArrowRight />
          </button>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;

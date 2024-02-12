import "./HeroSection.css";
import { FaArrowRight } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-greetings">
          Hello, <span className="name-span">I'm Kausar,</span>
        </h1>
        <h2 className="hero-job">Front-End Web Developer</h2>
        <p className="hero-description">
          I am a web developer with proficiency in React JS, JavaScript, HTML,
          and CSS. I thrive on turning creative ideas into innovative and
          user-friendly web applications.
        </p>
        <button className="resume-btn">
          Resume <FaArrowRight />
        </button>
      </div>
      <div className="hero-img-container  ">
        <img
          className="hero-img bubble-border"
          src="../../../public/h-img.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;

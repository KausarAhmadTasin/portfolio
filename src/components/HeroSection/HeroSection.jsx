import "./HeroSection.css";
import { FaArrowRight } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { VscGithub } from "react-icons/vsc";

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
        <button className="primary-btn">Hire Me</button>
        <div className="skill-icons">
          <div className="react" title="React JS">
            <FaReact />
          </div>
          <div className="javascript" title="JavaScript">
            <SiJavascript />
          </div>
          <div className="css" title="CSS">
            {" "}
            <SiCss3 />
          </div>
          <div className="html" title="HTML">
            <ImHtmlFive />
          </div>
          <div className="github" title="Github">
            {" "}
            <VscGithub />
          </div>
        </div>
      </div>
      <div className="hero-img-container  ">
        <img
          className="hero-img bubble-border"
          src="https://i.ibb.co/cFWhLbk/h-img.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;

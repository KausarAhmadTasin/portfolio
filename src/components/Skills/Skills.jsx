import "./Skill.css";
import { FaBootstrap } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiCss3 } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { VscGithub } from "react-icons/vsc";
import { RxVercelLogo } from "react-icons/rx";
import { TbBrandVscode } from "react-icons/tb";
import { IoCodeSlashSharp } from "react-icons/io5";
import { SiNetlify } from "react-icons/si";
const Skills = () => {
  return (
    <div className="skill-container">
      <h1 className="name-span skill-title">Skills</h1>
      <div className="skill-content">
        <div className="skill-group">
          <h3>Expertise:</h3>
          <ul className="skill-flex">
            <li>
              <div className="react-skill-container">
                <div className="react-skill skill-icon" title="React JS">
                  <FaReact />
                </div>
              </div>
              React.js
            </li>
            <li>
              <div className="javascript-skill skill-icon" title="JavaScript">
                <SiJavascript />
              </div>
              JavaScript + ES6
            </li>
            <li>
              <div className="css-skill  skill-icon" title="CSS">
                {" "}
                <SiCss3 />
              </div>
              CSS
            </li>
            <li>
              <div className="html-skill skill-icon" title="HTML">
                <ImHtmlFive />
              </div>
              HTML
            </li>
            <li>
              {" "}
              <div>
                <img src="../../../public/api.png" alt="" />
              </div>
              Handling REST APIs
            </li>
          </ul>
        </div>
        <div className="skill-group">
          <h3>Comfortable:</h3>
          <ul className="skill-flex">
            <li>
              {" "}
              <div>
                <img src="../../../public/firebase.png" alt="" />
              </div>{" "}
              Firebase
            </li>

            <li>
              <div className="tailwind-skill skill-icon">
                <SiTailwindcss />
              </div>
              Tailwind
            </li>
          </ul>
        </div>
        <div className="skill-group">
          <h3>Familiar:</h3>
          <ul className="skill-flex">
            <li>
              <div className="bootsrap-skill skill-icon">
                {" "}
                <FaBootstrap />
              </div>
              Bootsrap
            </li>
          </ul>
        </div>
        <div className="skill-group ">
          <h3>Tools:</h3>
          <ul className="skill-flex">
            <li>
              <div className="github skill-icon" title="Github">
                {" "}
                <VscGithub />
              </div>
              GitHub
            </li>

            <li>
              <div className="vscode-skill skill-icon">
                {" "}
                <TbBrandVscode />
              </div>
              VS Code
            </li>

            <li className="btd-skill">
              <div className=" skill-icon">
                {" "}
                <IoCodeSlashSharp />
              </div>
              Browser Developer Tools
            </li>

            <li>
              {" "}
              <img src="../../../public/figma.png" alt="" />
              Figma
            </li>

            <li>
              <div className="skill-icon">
                <RxVercelLogo />
              </div>
              Vercel
            </li>
            <li>
              <div className=" netlify-skill skill-icon">
                <SiNetlify />
              </div>
              Netlify
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;

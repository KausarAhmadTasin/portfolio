import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { MdKeyboardDoubleArrowUp, MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="first-row">
        <div className="quick-links">
          <h2>Quick Links</h2>
          <div className="footer-icons">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/kausar-ahmad-tasin/"
            >
              <div className="linkedIn-icon">
                <FaLinkedin />
              </div>
            </a>
            <a target="_blank" href="https://github.com/KausarAhmadTasin">
              <div className="git-icon">
                {" "}
                <FaGithub />
              </div>
            </a>
          </div>
        </div>
        <div className="footer-info">
          <div className="single-contact">
            <h3>
              <LuPhone />
            </h3>
            <p> +880-1521-541678</p>
          </div>
          <div className="single-contact">
            <h3>
              <MdOutlineMail />
            </h3>
            <a href="mailto:kausar.ahmad.tasin01@gmail.com">
              {" "}
              <p>kausar.ahmad.tasin01@gmail.com</p>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-rights">
        <p>&copy; Kausar Ahmad Tasin 2024.</p>{" "}
        <div className="back-top">{/* <MdKeyboardDoubleArrowUp /> */}</div>
      </div>
    </div>
  );
};

export default Footer;

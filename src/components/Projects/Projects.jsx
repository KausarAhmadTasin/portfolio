import { useState } from "react";
import "./Projects.css";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Projects = () => {
  const [isFullText, setIsFullText] = useState(false);
  const handleReadMore = () => {
    setIsFullText(!isFullText);
  };

  return (
    <div className="projects-container">
      <h1 className="skill-title name-span">Projects</h1>
      <div className="project-grid">
        <div className="proj-title">
          <h2>Works that I have done...</h2>
        </div>
        <div className="single-proj">
          <img src="../../../public/h-home.png" alt="" />
          <h2 className="proj-heading">Halal Jibika - Job finding react app</h2>
          <div className="proj-desc">
            <p className="proj-desc-text">
              Halal Jibika is a React.js-based web application that allows
              users...
              {/* Halal Jibika is a React.js-based web application that allows users
              to post job offers and manage their job posts. This app provides a
              seamless user experience with features such as job posting, job
              search, updating, deleting, and favoriting job posts. Users can
              also apply for jobs, and only logged-in users have access to view
              their favorite jobs and applied jobs. */}
              <div className="details">
                <span onClick={handleReadMore} className="proj-desc-more">
                  Details
                </span>
                <div className="arrow-icon">
                  <IoIosArrowDroprightCircle />
                </div>
              </div>
            </p>
          </div>
          <div className="proj-btns">
            <button
              className="primary-btn
            proj-git-btn"
            >
              GitHub Link
            </button>
            <button className="proj-live-btn">Live Link</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

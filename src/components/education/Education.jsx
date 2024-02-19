import "./Education.css";
import { FcGraduationCap } from "react-icons/fc";

const Education = () => {
  return (
    <div className="edu-container">
      <h1 className="skill-title name-span education-titile">Education</h1>
      <div className="single-edication">
        <p className="edu-title">
          <span className="edu-icon">
            <FcGraduationCap />
          </span>
          Bachelor of Science in Computer Science & Engineering
        </p>
        <p className="institute">
          <em>from </em>Pundra University of Science & Technology (2019-2023)
        </p>
        <ul>
          <li>
            <strong>Session:</strong> 2019-20
          </li>
          <li>
            <strong>CGPA –</strong> 3.78/4
          </li>
        </ul>
      </div>
      <div className="single-edication">
        <p className="edu-title">
          <span className="edu-icon">
            <FcGraduationCap />
          </span>
          HSC
        </p>
        <p className="institute">
          <em>from </em>Rajshahi Board (2017)
        </p>
        <ul>
          <li>
            <strong>Institute:</strong> Govt. Azizul Haque College, Bogura
          </li>
          <li>
            <strong>GPA –</strong> 4.67/5
          </li>
        </ul>
      </div>
      <div className="single-edication">
        <p className="edu-title">
          <span className="edu-icon">
            <FcGraduationCap />
          </span>
          Dakhil/SSC
        </p>
        <p className="institute">
          <em>from </em>Madrasah Board (2015)
        </p>
        <ul>
          <li>
            <strong>Institute:</strong> TNAN Fazil Madrasah
          </li>
          <li>
            <strong>GPA –</strong> 5.00 (All subjects)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;

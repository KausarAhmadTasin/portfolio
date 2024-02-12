import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        Kausar<span className="last-name">Ahmad Tasin</span>
      </div>
      <ul className="section-list">
        <button className="primary-btn">Hire Me</button>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Education</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;

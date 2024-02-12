import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Kausar Ahmad Tasin</div>
      <ul className="section-list">
        <button className="primary-btn">Hire Me</button>
        <li>About</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Education</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;

import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"></div>
      
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Experience</a></li>
        <li><a href="#organization">Organization</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
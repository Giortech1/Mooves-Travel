import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import logo from './assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Mooves Logo" />
        </Link>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/car-rent" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
            Car rents
          </NavLink>
        </li>
        <li>
          <NavLink to="/business-solution" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
            Business Solution
          </NavLink>
        </li>
        <li>
          <NavLink to="/flight-booking" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
            Flight Booking
          </NavLink>
        </li>
        <li>
          <NavLink to="/fleet" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
            Fleet
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')} onClick={closeMenu}>
            Contact
          </NavLink>
        </li>
        <li className="nav-auth-mobile">
          <Link to="/login" className="nav-login" onClick={closeMenu}>Login</Link>
          <Link to="/signup" className="nav-signup" onClick={closeMenu}>Signup</Link>
        </li>
      </ul>

      <div className="nav-auth">
        <Link to="/login" className="nav-login">Login</Link>
        <Link to="/signup" className="nav-signup">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;

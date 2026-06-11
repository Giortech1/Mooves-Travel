import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import logo from './assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="Mooves Logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/car-rent" className={({ isActive }) => (isActive ? 'active' : '')}>
            Car rents
          </NavLink>
        </li>
        <li>
          <NavLink to="/business-solution" className={({ isActive }) => (isActive ? 'active' : '')}>
            Business Solution
          </NavLink>
        </li>
        <li>
          <NavLink to="/flight-booking" className={({ isActive }) => (isActive ? 'active' : '')}>
            Flight Booking
          </NavLink>
        </li>
        <li>
          <NavLink to="/fleet" className={({ isActive }) => (isActive ? 'active' : '')}>
            Fleet
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
            Contact
          </NavLink>
        
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

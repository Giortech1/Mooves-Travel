import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from './hooks/useAuth.jsx';
import './Navbar.css';
import logo from './assets/logo.png';

const Navbar = () => {
  const { user, logout } = useAuth();

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
        {user ? (
          <div className="user-profile-nav" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span className="user-name" style={{ fontWeight: '600', color: '#333' }}>
              {user.displayName || user.email}
            </span>
            <div className="user-icon-container" style={{ width: '35px', height: '35px', borderRadius: '50%', backgroundColor: '#0068BB', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center', color: 'white', overflow: 'hidden' }}>
              {user.photoURL ? <img src={user.photoURL} alt="profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <span>{user.displayName?.charAt(0) || user.email?.charAt(0)}</span>}
            </div>
            <button onClick={logout} className="nav-logout-btn" style={{ background: 'none', border: '1px solid #ccc', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer', fontSize: '12px' }}>Logout</button>
          </div>
        ) : (
          <>
            <Link to="/login" className="nav-login">Login</Link>
            <Link to="/signup" className="nav-signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

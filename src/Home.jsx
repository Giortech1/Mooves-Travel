import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from './assets/logo.png';
import slide1 from './assets/img slide 1.png';
import slide2 from './assets/img slide 2.png';
import slide3 from './assets/img slide 3.png';
import slide4 from './assets/img slide 4.png';
import slide5 from './assets/img slide 5.png';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: slide1,
      title: "Drive Anywhere Across Cameroon & Beyond",
      subtitle: "Choose from luxury, business, SUV, and utility vehicles designed for comfort and reliability wherever your journey takes you.",
      cta: "Explore Fleet"
    },
    {
      image: slide2,
      title: "Book Flights Around the World in Minutes",
      subtitle: "Search destinations, compare travel options, and reserve flights for local and international journeys from one platform.",
      cta: "Book Flight"
    },
    {
      image: slide3,
      title: "Smart Mobility Solutions for Businesses",
      subtitle: "Corporate rentals, employee transportation, fleet management, and long-term leasing built for modern companies.",
      cta: "Business Solutions"
    },
    {
      image: slide4,
      title: "Travel with Experienced Professional Drivers",
      subtitle: "Enjoy convenient transportation with trained and trusted drivers for business trips, airport transfers, and personal travel.",
      cta: "Hire a Driver"
    },
    {
      image: slide5,
      title: "Premium Travel Starts Here",
      subtitle: "One platform for car rentals, travel booking, and mobility services designed around your journey.",
      cta: "View Services"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="Mooves Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#car-rents">Car rents</a></li>
          <li><a href="#business-solutions">business solutions</a></li>
          <li><a href="#flight-booking">flight booking</a></li>
          <li><a href="#fleet">fleet</a></li>
          <li><a href="#about">about Us</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
        <div className="nav-auth">
          <Link to="/login" className="nav-login">Login</Link>
          <Link to="/signup" className="nav-signup">Signup</Link>
        </div>
      </nav>

      <section className="hero">
        <div className="slider">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === 0 ? 'slide-1' : ''} ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url("${slide.image}")` }}
            >
              <div className="slide-content">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
                <button className="btn-explore">{slide.cta}</button>
              </div>
            </div>
          ))}
          <div className="slider-dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      <section className="search-section">
        <div className="search-bar">
          <div className="search-item">
            <label>Location</label>
            <input type="text" placeholder="Where are you going?" />
          </div>
          <div className="search-item">
            <label>Date</label>
            <input type="date" />
          </div>
          <div className="search-item">
            <label>Travelers</label>
            <input type="number" placeholder="How many?" />
          </div>
          <button className="btn-search">Search</button>
        </div>
      </section>

      <section className="featured">
        <div className="section-header">
          <h2>Top Destinations</h2>
          <p>Explore our most popular travel locations</p>
        </div>
        <div className="destinations-grid">
          {/* Placeholder for destinations */}
          <div className="dest-card">
            <div className="dest-image" style={{ backgroundImage: `url(${slide1})` }}></div>
            <div className="dest-info">
              <h3>Paris, France</h3>
              <p>The city of lights and romance.</p>
            </div>
          </div>
          <div className="dest-card">
            <div className="dest-image" style={{ backgroundImage: `url(${slide2})` }}></div>
            <div className="dest-info">
              <h3>Bali, Indonesia</h3>
              <p>A tropical paradise for nature lovers.</p>
            </div>
          </div>
          <div className="dest-card">
            <div className="dest-image" style={{ backgroundImage: `url(${slide3})` }}></div>
            <div className="dest-info">
              <h3>Tokyo, Japan</h3>
              <p>Where tradition meets technology.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="Mooves Logo" />
            <p>Mooves Travel - Your ultimate travel companion.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><a href="#destination">Destination</a></li>
              <li><a href="#packages">Packages</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>Email: info@moovestravel.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Mooves Travel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

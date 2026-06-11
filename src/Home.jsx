import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from './assets/logo.png';
import slide1 from './assets/img slide 1.png';
import slide2 from './assets/img slide 2.png';
import slide3 from './assets/img slide 3.png';
import img1 from './assets/Img 1.png';
import img2 from './assets/img 2.jfif';
import img3 from './assets/img 3.png';
import img4 from './assets/img 4.jfif';
import img5 from './assets/img 5.png';
import img6 from './assets/img 6.jfif';
import img7 from './assets/img 7.jfif';
import img8 from './assets/img 8.png';
import img9 from './assets/img 9.png';

// Fleet Assets
import mercedes from './assets/2020_Mercedes-Benz_AMG_S_65-removebg-preview.png';
import urus from './assets/ABT_Lamborghini_Urus_Scatenato_2024-removebg-preview.png';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeService, setActiveService] = useState('car'); // 'car' or 'flight'
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [showTravelers, setShowTravelers] = useState(false);
  const [flightClass, setFlightClass] = useState('Economy');
  const [showClassDropdown, setShowClassDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const slides = [
    { 
      image: slide1,
      title: "Premium Mobility Solutions",
      subtitle: "Experience comfort, reliability, and exceptional service on every journey.",
      cta: "Explore Fleet",
      link: "#fleet"
    },
    { image: slide2 },
    { image: slide3 },
    { image: "" },
    { image: "" }
  ];

  const fleetPreview = [
    { id: 1, name: "Mercedes-Benz AMG S 65", image: mercedes, price: "$200/day", type: "Luxury" },
    { id: 2, name: "Lamborghini Urus", image: urus, price: "$500/day", type: "Exotic" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const services = [
    {
      id: 1,
      title: "Car Rental",
      description: "Choose from a wide range of reliable, luxury, and utility vehicles designed to give you comfort, flexibility, and confidence on every journey.",
      image: img1,
      link: "/explore-fleet"
    },
    {
      id: 2,
      title: "Flight ticketing",
      description: "Book local and international flights with ease and enjoy a smooth travel experience supported by fast reservations and trusted service.",
      image: img2,
      link: "#"
    },
    {
      id: 3,
      title: "Chauffeur Service",
      description: "Travel in comfort with professional drivers dedicated to providing safe, punctual, and premium transportation experiences.",
      image: img3,
      link: "#"
    },
    {
      id: 4,
      title: "Corporate Vehicle Leasing",
      description: "Empower your business with flexible vehicle leasing solutions tailored to support company operations, executive travel, and staff mobility.",
      image: img4,
      link: "#"
    },
    {
      id: 5,
      title: "Airport Transfer Services",
      description: "Enjoy stress-free pickups and drop-offs with dependable airport transportation designed for comfort, convenience, and punctuality.",
      image: img5,
      link: "#"
    },
    {
      id: 6,
      title: "Utility & Pickup Vehicle Rental",
      description: "Get the power and durability you need with utility and pickup vehicles built to handle business operations, logistics, and demanding tasks.",
      image: img6,
      link: "#"
    },
    {
      id: 7,
      title: "Fleet Management Services",
      description: "Optimize your business transportation with professional fleet management solutions focused on efficiency, reliability, and operational control.",
      image: img7,
      link: "#"
    },
    {
      id: 8,
      title: "Executive / Luxury Transportation",
      description: "Experience premium mobility with luxury vehicles and first-class services designed for executives, VIP clients, and special occasions.",
      image: img8,
      link: "#"
    },
    {
      id: 9,
      title: "Business Mobility Solutions",
      description: "Simplify corporate transportation through smart mobility services designed to improve productivity, flexibility, and business performance.",
      image: img9,
      link: "#"
    }
  ];

  return (
    <div className="home-container">
      {/* ... navbar ... */}
      <nav className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="Mooves Logo" />
        </div>
        
        <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#home" className="active" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><Link to="/explore-fleet" onClick={() => setMenuOpen(false)}>Car rents</Link></li>
          <li><a href="#business-solutions" onClick={() => setMenuOpen(false)}>business solutions</a></li>
          <li><a href="#flight-booking" onClick={() => setMenuOpen(false)}>flight booking</a></li>
          <li><Link to="/explore-fleet" onClick={() => setMenuOpen(false)}>fleet</Link></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>about Us</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>contact</a></li>
          <li className="mobile-auth">
            <Link to="/login" className="nav-login" onClick={() => setMenuOpen(false)}>Login</Link>
            <Link to="/signup" className="nav-signup" onClick={() => setMenuOpen(false)}>Signup</Link>
          </li>
        </ul>
        
        <div className="nav-auth desktop-auth">
          <Link to="/login" className="nav-login">Login</Link>
          <Link to="/signup" className="nav-signup">Signup</Link>
        </div>
      </nav>

      <section className="hero">
        <div className="slider">
          <button className="slider-btn prev" onClick={prevSlide}>&#10094;</button>
          <button className="slider-btn next" onClick={nextSlide}>&#10095;</button>
          
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ 
                backgroundImage: slide.image ? `url("${slide.image}")` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {slide.title && (
                <div className="slide-content">
                  <h1>{slide.title}</h1>
                  <p>{slide.subtitle}</p>
                  {slide.cta && (
                    <a href={slide.link} className="slide-cta">
                      {slide.cta}
                    </a>
                  )}
                </div>
              )}
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
        <div className="service-tabs">
          <button 
            className={`tab-btn ${activeService === 'car' ? 'active' : ''}`}
            onClick={() => setActiveService('car')}
          >
            Car Rent
          </button>
          <button 
            className={`tab-btn ${activeService === 'flight' ? 'active' : ''}`}
            onClick={() => setActiveService('flight')}
          >
            Flight Ticketing
          </button>
        </div>
        <div className="search-bar">
          <div className="search-main">
            {activeService === 'flight' && (
              <div className="flight-options-top">
                <div className="class-selector">
                  <div 
                    className="class-trigger" 
                    onClick={() => setShowClassDropdown(!showClassDropdown)}
                  >
                    {flightClass} <span className="arrow-down">▼</span>
                  </div>
                  {showClassDropdown && (
                    <ul className="class-dropdown">
                      {['Economy', 'Premium Economy', 'Business', 'First Class'].map((cls) => (
                        <li 
                          key={cls} 
                          onClick={() => {
                            setFlightClass(cls);
                            setShowClassDropdown(false);
                          }}
                        >
                          {cls}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )}
            <div className="search-fields-row">
              {activeService === 'car' ? (
                <>
                  <div className="search-item">
                    <label>Pickup Location</label>
                    <input type="text" placeholder="Where are you picking up?" />
                  </div>
                  <div className="search-item">
                    <label>Drop Location</label>
                    <input type="text" placeholder="Where are you dropping off?" />
                  </div>
                  <div className="search-item">
                    <label>Pick-up Date</label>
                    <input type="date" />
                  </div>
                  <div className="search-item">
                    <label>Drop Date</label>
                    <input type="date" />
                  </div>
                </>
              ) : (
                <>
                  <div className="search-item">
                    <label>From</label>
                    <input type="text" placeholder="Departure City" />
                  </div>
                  <div className="search-item">
                    <label>To</label>
                    <input type="text" placeholder="Destination City" />
                  </div>
                  <div className="search-item">
                    <label>Departure</label>
                    <input type="date" />
                  </div>
                  <div className="search-item">
                    <label>Return</label>
                    <input type="date" />
                  </div>
                  <div className="search-item travelers-container">
                    <label>Travelers</label>
                    <div 
                      className="travelers-trigger" 
                      onClick={() => setShowTravelers(!showTravelers)}
                    >
                      {adults} Adult{adults > 1 ? 's' : ''}, {children} Child{children !== 1 ? 'ren' : ''}
                    </div>
                    {showTravelers && (
                      <div className="travelers-dropdown">
                        <div className="traveler-type">
                          <div className="type-info">
                            <span>Adults</span>
                            <small>Age 12+</small>
                          </div>
                          <div className="type-controls">
                            <button onClick={() => setAdults(Math.max(1, adults - 1))}>-</button>
                            <span>{adults}</span>
                            <button onClick={() => setAdults(adults + 1)}>+</button>
                          </div>
                        </div>
                        <div className="traveler-type">
                          <div className="type-info">
                            <span>Children</span>
                            <small>Age 2-11</small>
                          </div>
                          <div className="type-controls">
                            <button onClick={() => setChildren(Math.max(0, children - 1))}>-</button>
                            <span>{children}</span>
                            <button onClick={() => setChildren(children + 1)}>+</button>
                          </div>
                        </div>
                        <button className="done-btn" onClick={() => setShowTravelers(false)}>Done</button>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
          <button className="btn-search">Search</button>
        </div>
      </section>

      <section className="services-section">
        <div className="services-header">
          <h2>Our Services</h2>
          <p>With years of experience and a dedicated team, we provide <span className="highlight-text">Premium mobility solutions designed for comfort, reliability, and exceptional service.</span></p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image-container">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                {service.link.startsWith('/') ? (
                  <Link to={service.link} className="view-all-link">View all</Link>
                ) : (
                  <a href={service.link} className="view-all-link">View all</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="home-fleet-section" id="fleet">
        <div className="fleet-container-inner">
          <div className="fleet-header-left">
            <h2>Explore Our Premium Vehicle Collection</h2>
            <div className="fleet-divider"></div>
          </div>

          <div className="home-fleet-grid">
            {fleetPreview.map((car) => (
              <div key={car.id} className="home-car-card">
                <div className="home-car-image">
                  <img src={car.image} alt={car.name} />
                </div>
                <div className="home-car-info">
                  <span className="home-car-type">{car.type}</span>
                  <h3>{car.name}</h3>
                  <div className="home-car-footer">
                    <p className="home-car-price">{car.price}<span>/day</span></p>
                    <button className="home-book-btn">Rent Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="fleet-footer-link">
            <Link to="/explore-fleet" className="view-all-fleet">View all vehicles</Link>
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

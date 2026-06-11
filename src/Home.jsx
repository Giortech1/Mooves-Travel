import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Navbar from './Navbar';
import logo from './assets/logo.png';
import slide1 from './assets/img slide 1.png';
import slide2 from './assets/img slide 2.png';
import slide3 from './assets/img slide 3.png';
import slide4 from './assets/img slide 4.png';
import slide5 from './assets/img slide 5.png';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");
  const [vehiclePage, setVehiclePage] = useState(0);
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

  const vehicles = [
  { id: 1, name: "Cadillac Escalade", price: "$450/day", seats: 7, transmission: "Automatic", fuel: "Gasoline", category: ["all", "suv"],     image: slide1 },
  { id: 2, name: "Lamborghini Urus",  price: "$500/day", seats: 5, transmission: "Automatic", fuel: "Gasoline", category: ["all", "luxury"],  image: slide2 },
  { id: 3, name: "Mercedes S-Class",  price: "$380/day", seats: 5, transmission: "Automatic", fuel: "Gasoline", category: ["all", "luxury"],  image: slide3 },
  { id: 4, name: "Range Rover Sport", price: "$420/day", seats: 7, transmission: "Automatic", fuel: "Diesel",   category: ["all", "suv"],     image: slide4 },
  { id: 5, name: "Toyota Hilux",      price: "$180/day", seats: 5, transmission: "Manual",    fuel: "Diesel",   category: ["all", "pickup"],  image: slide5 },
  { id: 6, name: "Toyota Corolla",    price: "$90/day",  seats: 5, transmission: "Automatic", fuel: "Gasoline", category: ["all", "economy"], image: slide1 },
];

const filteredVehicles = vehicles.filter(v => v.category.includes(activeCategory));
const totalPages = Math.ceil(filteredVehicles.length / 2);
const visibleVehicles = filteredVehicles.slice(vehiclePage * 2, vehiclePage * 2 + 2);

  return (
    <div className="home-container">
      <Navbar />

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
          <h2 className="section-text">OUR SERVICES</h2>
          <p>With years of experience and a dedicated team, we provide <br /><strong className='s-strong'>Premium mobility</strong> solutions designed for <strong className='s-strong'>comfort, reliability, and exceptional service.</strong></p>
        </div>
        <div className="destinations-grid">
          {/* Placeholder for destinations */}
          <div className="dest-card">
            <div className="dest-image" style={{ backgroundImage: `url(${slide1})` }}></div>
            <div className="dest-info">
              <h3 className='section-text'>Car Rental</h3>
              <p>Choose from a wide range of reliable, luxury, and utility vehicles designed to give you comfort, flexibility, and confidence on every journey.</p>
            </div>
          </div>
          <div className="dest-card">
            <div className="dest-image" style={{ backgroundImage: `url(${slide2})` }}></div>
            <div className="dest-info">
              <h3 className='section-text'>Flight Ticketing</h3>
              <p>Book local and international flights with ease and enjoy a smooth travel experience supported by fast reservations and trusted service.</p>
            </div>
          </div>
          <div className="dest-card">
            <div className="dest-image" style={{ backgroundImage: `url(${slide3})` }}></div>
            <div className="dest-info">
              <h3 className='section-text'>Driver Services</h3>
              <p>Travel in comfort with professional drivers dedicated to providing safe, punctual, and premium transportation experiences.</p>
            </div>
          </div>
           <div className="dest-card">
            <div className="dest-image" style={{ backgroundImage: `url(${slide3})` }}></div>
            <div className="dest-info">
              <h3 className='section-text'>Corporate Vehicle Leasing</h3>
              <p>Empower your business with flexible vehicle leasing solutions tailored to support company operations, executive travel, and staff mobility.</p>
            </div>
          </div>
           <div className="dest-card">
            <div className="dest-image" style={{ backgroundImage: `url(${slide3})` }}></div>
            <div className="dest-info">
              <h3 className='section-text'>AirPort Transfer Service</h3>
              <p>Enjoy stress-free pickups and drop-offs with dependable airport transportation designed for comfort, convenience, and punctuality.</p>
            </div>
          </div>
           <div className="dest-card">
            <div className="dest-image" style={{ backgroundImage: `url(${slide3})` }}></div>
            <div className="dest-info">
              <h3 className='section-text'>Utility & Pickup Vehicle</h3>
              <p>Get the power and durability you need with utility and pickup vehicles built to handle business operations, logistics, and demanding tasks.</p>
            </div>
          </div>
           <div className="dest-card">
            <div className="dest-image" style={{ backgroundImage: `url(${slide3})` }}></div>
            <div className="dest-info">
              <h3 className='section-text'>Fleet Management Services</h3>
              <p>Optimize your business transportation with professional fleet management solutions focused on efficiency, reliability, and operational control.</p>
            </div>
          </div>
           <div className="dest-card">
            <div className="dest-image" style={{ backgroundImage: `url(${slide3})` }}></div>
            <div className="dest-info">
              <h3 className='section-text'>Tokyo, Japan</h3>
              <p>Where tradition meets technology.</p>
            </div>
          </div>
           <div className="dest-card">
            <div className="dest-image" style={{ backgroundImage: `url(${slide3})` }}></div>
            <div className="dest-info">
              <h3 className='section-text'>Executive/ Luxury Transportation</h3>
              <p>Experience premium mobility with luxury vehicles and first-class services designed for executives, VIP clients, and special occasions.</p>
            </div>
          </div>
           <div className="dest-card">
            <div className="dest-image" style={{ backgroundImage: `url(${slide3})` }}></div>
            <div className="dest-info">
              <h3 className='section-text'>Business Mobility Solutions</h3>
              <p>Simplify corporate transportation through smart mobility services designed to improve productivity, flexibility, and business performance.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="premium-content">
  <div className='premium-service'>
    <h2 className='premium-text'>Explore Our Premium Vehicle Collection</h2>
    <hr className='white-line'/>

    <div className='vehicle-categories'>
      {["all", "luxury", "suv", "economy", "pickup"].map(cat => (
        <button
          key={cat}
          className={activeCategory === cat ? "active-btn" : ""}
          onClick={() => { setActiveCategory(cat); setVehiclePage(0); }}
        >
          {cat === "all" ? "All" : cat === "suv" ? "SUVs" : cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>

    <div className='vehicle-grid'>
      {visibleVehicles.map(vehicle => (
        <div key={vehicle.id} className='vehicle-card'>
          <h3 className='vehicle-name'>{vehicle.name}</h3>
          <p className='vehicle-price'>{vehicle.price}</p>
          <div className='vehicle-img' style={{ backgroundImage: `url(${vehicle.image})` }}></div>
          <div className='vehicle-footer'>
            <div className='vehicle-specs'>
              <span>{vehicle.seats} seats</span>
              <span>{vehicle.transmission}</span>
              <span>{vehicle.fuel}</span>
            </div>
            <button className='rent-btn'>
              Rent Now <span className='rent-icon'>↗</span>
            </button>
          </div>
        </div>
      ))}
    </div>

    <div className='vehicle-nav'>
      <button
        className='nav-arrow'
        onClick={() => setVehiclePage(p => Math.max(0, p - 1))}
        disabled={vehiclePage === 0}
      >←</button>
      <button
        className='nav-arrow'
        onClick={() => setVehiclePage(p => Math.min(totalPages - 1, p + 1))}
        disabled={vehiclePage >= totalPages - 1}
      >→</button>
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

import "./Home.css";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import {
  FaFacebookF, FaInstagram, FaTwitter, FaYoutube,
  FaMapMarkerAlt, FaEnvelope, FaPhoneAlt,
  FaChevronLeft, FaChevronRight,
} from "react-icons/fa";
import heroSlide1 from "./assets/img slide 1.png";
import heroSlide2 from "./assets/img slide 5.png";
import heroSlide3 from "./assets/img slide 3.png";
import cadillac from "./assets/escalade-removebg-preview.png";
import lamborghini from "./assets/ABT_Lamborghini_Urus_Scatenato_2024-removebg-preview.png";
import client1 from "./assets/Avatar6.png";
import client2 from "./assets/ayesha.png";
import client3 from "./assets/mehak.png";
import logo from "./assets/logo.png";
import appStore from "./assets/foot1.png";
import googlePlay from "./assets/foot2.png";
import car from "./assets/corola toyota.png";
import visa from "./assets/visa.jpg";
import driver from "./assets/img 5.png";
import leasing from "./assets/busines_cooporate-removebg-preview.png";
import airport from "./assets/plane.jpg";
import pickup from "./assets/img 1.png";
import fleet from "./assets/Creative_Poster_Design-removebg-preview.png";
import luxury from "./assets/luxury.jpg";
import fleet1 from "./assets/fleet.jpg";
const slides = [
  {
    img: heroSlide1,
    title: "Drive Anywhere Across Cameroon & Beyond",
    text: "Choose from luxury, business, SUV and utility vehicles designed for comfort and adventure, anywhere life takes you.",
  },
  {
    img: heroSlide2,
    title: "Premium SUVs For Every Occasion",
    text: "From family trips to executive travel, our SUV fleet combines comfort, space, and reliability.",
  },
  {
    img: heroSlide3,
    title: "Comfort Meets Performance",
    text: "Discover our sedan collection, perfect for business travel and city driving in style.",
  },
];

const services = [
  {
    img: car,
    title: "Car Rental",
    text: "Choose from a wide range of reliable, luxury, and utility vehicles designed to give you comfort, flexibility, and confidence on every journey.",
  },
  {
    img: visa,
    title: "Flight Ticketing",
    text: "Book local and international flights with ease and enjoy a smooth travel experience supported by fast reservations and trusted service.",
  },
  {
    img: driver,
    title: "Chauffeur Services",
    text: "Travel in comfort with professional drivers dedicated to providing safe, punctual, and premium transportation experiences.",
  },
  {
    img: leasing,
    title: "Corporate Vehicle Leasing",
    text: "Empower your business with flexible vehicle leasing solutions tailored to support company operations, executive travel, and staff mobility.",
  },
  {
    img: airport,
    title: "Airport Transfer Services",
    text: "Enjoy stress-free pickups and drop-offs with dependable airport transportation designed for comfort, convenience, and punctuality.",
  },
  {
    img: pickup,
    title: "Utility & Pickup Vehicle Rental",
    text: "Get the power and durability you need with utility and pickup vehicles built to handle business operations, logistics, and demanding tasks.",
  },
  {
    img: fleet,
    title: "Fleet Management Services",
    text: "Optimize your business transportation with professional fleet management services focused on efficiency, reliability, and operational control.",
  },
  {
    img: luxury,
    title: "Executive / Luxury Transportation",
    text: "Experience premium mobility with luxury vehicles and first-class services designed for executives, VIP clients, and special occasions.",
  },
  {
    img: fleet1,
    title: "Business Mobility Solutions",
    text: "Simplify corporate transportation through smart mobility services designed to improve productivity, flexibility, and business performance.",
  },
];

const whyChoose = [
  {
    color: "#fde0e8",
    title: "Zero Deposit Required",
    text: "We know how vital cash flow is for growing businesses. Unlike traditional corporate leasing companies that require hefty upfront deposits, you can get started with a clean, lean and minimal entry fee. You can get your fleet on the road operationally ready, keeping your money right where it belongs - in your business.",
  },
  {
    color: "#dbe9ff",
    title: "Maintenance and Servicing are on Us",
    text: "Managing a fleet means dealing with unpredictable breakdowns, scheduling of garages, and being valuable time at the mechanic. With Mooves, we use completely forget about that burden. We handle all routine maintenance and scheduled servicing for you. If a car needs work, we take care of it, so you never have to worry about downtime.",
  },
  {
    color: "#d6f5ec",
    title: "Full Commercial Insurance Included",
    text: "Mooves operate up-front, fleet rates with comprehensive commercial insurance coverage. We've got you covered against unexpected, going-on and your drivers consistent peace of mind on every trip, with zero added insurance stress for your team to manage.",
  },
  {
    color: "#fdf0d6",
    title: "Flexi-Car Scaling",
    text: "Markets change quickly, and your fleet should be able to keep up with it. Our Flexi-Cut works lets you add or remove vehicles whenever your business needs change, giving you full control to scale up your fleet exactly when it's needed, or scale down without long-term contracts holding you back.",
  },
  {
    color: "#fde0e8",
    title: "High-Efficiency & Electric Options",
    text: "Whether you're trying to cut down on your operating fuel expenses or meet modern corporate sustainability standards, we have the fleet to match. Choose hybrid, fuel-efficient, or all-electric vehicles tailored to your needs, and help your team move with assurance while also reducing your overall operational carbon footprint.",
  },
  {
    color: "#e6f4d9",
    title: "A Clear Path to Asset Equity",
    text: "If you are looking for long-term growth, don't rent the Clean Drive-to-Own programs are an absolute game-changer. Instead of watching your monthly budget disappear, your payments can go toward eventual ownership when you decide it's time for your business to formally own its fleet vehicles.",
  },
];

const testimonials = [
  {
    img: client1,
    name: "Michael Tchoumi",
    role: "Business Traveler",
    text: "Mooves has turned out how we manage transportation for our team. Their fleet is always in excellent condition, and the booking process is simple and efficient. A dependable partner for any business.",
  },
  {
    img: client2,
    name: "Giorno Roman",
    role: "CEO, Bizlocate",
    text: "I rented an SUV for a week-long trip and was impressed by the vehicle quality and customer service. Everything went smoothly from booking to return, I would gladly choose Mooves again.",
  },
  {
    img: client3,
    name: "Sarah Nfor",
    role: "Entrepreneur",
    text: "Booking my flight and airport transfer through Mooves was effortless. From pickup to drop-off, the process was seamless and the support team was responsive throughout my journey.",
  },
];

function Home() {
  const [activeTab, setActiveTab] = useState("Car Rent");
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeService, setActiveService] = useState('car');
  const [showClassDropdown, setShowClassDropdown] = useState(false);
  const [flightClass, setFlightClass] = useState('Economy');
  const [showTravelers, setShowTravelers] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Auto-rotate every 5 seconds (use functional update to avoid re-creating interval)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      <Navbar />

      {/* HERO SLIDER */}
      <section className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? "active" : ""}`}
          >
            <img src={slide.img} alt={slide.title} className="hero-img" />

            <div className="hero-overlay">
              <h1>{slide.title}</h1>
              <p>{slide.text}</p>
              <button className="btn-explore">Explore Fleet</button>
            </div>
          </div>
        ))}

        <button className="slider-arrow left" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button className="slider-arrow right" onClick={nextSlide}>
          <FaChevronRight />
        </button>

        <div className="slider-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
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



      {/* SERVICES */}
      <section className="services-section">
        <h2>
          Our <span>Services</span>
        </h2>
        <p className="services-subtitle">
          With years of experience and a dedicated team, we provide{' '}
          <span className="highlight">Premium mobility</span> solutions
          designed for <span className="highlight">comfort, reliability, and exceptional service.</span>
        </p>

        <div className="services-grid">
  {services.map((s, i) => (
    <div className="service-card" key={i}>
      <img src={s.img} alt={s.title} className="service-img" />
      <div className="service-content">
        <h3>{s.title}</h3>
        <p>{s.text}</p>
        <a href="#" className="view-all">
          View All
        </a>
      </div>
    </div>
  ))}
</div>
      </section>

      {/* VEHICLE COLLECTION */}
      <section className="collection-section">
        <h2>Explore Our Premium Vehicle Collection</h2>

        <div className="collection-filters">
          {["All", "Luxury", "SUVs", "Economy", "Pickup"].map((f) => (
            <span
              key={f}
              className={activeFilter === f ? "active" : ""}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </span>
          ))}
        </div>

        <div className="collection-grid">
          <div className="collection-card">
            <img src={cadillac} alt="Cadillac Escalade" />
            <div className="collection-info">
              <div>
                <h4>Cadillac Escalade</h4>
                <span className="price">$450/day</span>
              </div>
              <div className="collection-meta">
                <span>5 seats</span>
                <span>Automatic</span>
                <span>Complete</span>
              </div>
              <button className="btn-rent">Rent Now</button>
            </div>
          </div>

          <div className="collection-card">
            <img src={lamborghini} alt="Lamborghini Urus" />
            <div className="collection-info">
              <div>
                <h4>Lamborghini Urus</h4>
                <span className="price">$590/day</span>
              </div>
              <div className="collection-meta">
                <span>5 seats</span>
                <span>Automatic</span>
                <span>Complete</span>
              </div>
              <button className="btn-rent">Rent Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-choose-section">
        <h2>Why Choose Us</h2>
        <p className="why-subtitle">
          Flexible mobility solutions designed to give you flexibility, and
          peace of mind whether you're renting a vehicle, managing
          transportation, or booking your next trip.
        </p>

        <div className="why-grid">
          {whyChoose.map((item, i) => (
            <div className="why-card" key={i}>
              <div
                className="why-icon"
                style={{ background: item.color }}
              ></div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <p className="testimonials-subtitle">
          Discover why individuals, professionals, and businesses trust
          Mooves for reliable mobility, vehicle rental, and travel solutions.
        </p>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <img src={t.img} alt={t.name} className="testimonial-avatar" />
              <h4>{t.name}</h4>
              <span className="testimonial-role">{t.role}</span>
              <p>{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={logo} alt="Mooves Logo" className="footer-logo" />
            <p>
              Premium mobility, vehicle rental, fleet management, and
              ticketing solutions designed to deliver comfort, flexibility,
              and reliability.
            </p>

            <h4>Download App</h4>
            <div className="app-buttons">
              <img src={appStore} alt="App Store" />
              <img src={googlePlay} alt="Google Play" />
            </div>

            <div className="social-icons">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaYoutube />
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">
              <FaMapMarkerAlt /> Address
            </h4>
            <p>BP 482 Douala - Makepe montée BM</p>

            <h4 className="footer-heading green">Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>Car Rents</li>
              <li>Business Solution</li>
              <li>Flight Booking</li>
              <li>Fleet</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">
              <FaEnvelope /> Email
            </h4>
            <p>business@moove-location.com</p>

            <h4 className="footer-heading green">Services</h4>
            <ul>
              <li>Car Rental</li>
              <li>Flight Ticketing</li>
              <li>Chauffeur Services</li>
              <li>Corporate Vehicle Leasing</li>
              <li>Airport Transfer Service</li>
              <li>Utility Pickup Vehicle Rental</li>
              <li>Fleet Management Service</li>
              <li>Executive/Luxury Transportation</li>
              <li>Business Mobility Solution</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">
              <FaPhoneAlt /> Phone
            </h4>
            <p>
              +237 653 1716 34 <br /> 692 38 29 17
            </p>

            <h4 className="footer-heading green">Support</h4>
            <ul>
              <li>Help Center</li>
              <li>FAQs</li>
              <li>Terms &amp; Conditions</li>
              <li>Privacy Policy</li>
              <li>Booking Policy</li>
              <li>Customer Support</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Mooves Travel and Location. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default Home;
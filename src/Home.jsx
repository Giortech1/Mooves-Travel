import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Navbar from './Navbar';
import { useAuth } from './hooks/useAuth.jsx';
import logo from './assets/logo.png';
import slide1 from './assets/img slide 1.png';
import slide2 from './assets/img slide 2.png';
import slide3 from './assets/img slide 3.png';
import slide4 from './assets/img slide 4.png';
import slide5 from './assets/img slide 5.png';
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

import rightArrow from './assets/right arrow.png';
const LOCATIONS = ["Douala Aéroport (DLA)", "Yaoundé Aéroport (NSI)", "Douala Akwa", "Yaoundé Centre-ville", "Bafoussam", "Kribi", "Limbe"];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");
  const [vehiclePage, setVehiclePage] = useState(0);
  const [activeService, setActiveService] = useState('car');
  const [showClassDropdown, setShowClassDropdown] = useState(false);
  const [flightClass, setFlightClass] = useState('Economy');
  const [showTravelers, setShowTravelers] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [flightResults, setFlightResults] = useState([]);
  const [isSearchingFlights, setIsSearchingFlights] = useState(false);
  const [flightSearch, setFlightSearch] = useState({
    from: '',
    to: '',
    departureDate: '',
    returnDate: ''
  });

  const { user } = useAuth();
  const [carBooking, setCarBooking] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    dropoffDate: '',
    carType: 'All'
  });
  const [pickupSearch, setPickupSearch] = useState('');
  const [dropoffSearch, setDropoffSearch] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null); // 'pickup' or 'dropoff'
  
  const pickupRef = useRef(null);
  const dropoffRef = useRef(null);

  // Fermer les dropdowns si on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickupRef.current && !pickupRef.current.contains(event.target) &&
          dropoffRef.current && !dropoffRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const slides = [
    { image: "" },
    { image: "" },
    { image: "" },
    { image: "" },
    { image: "" }
  ];

  const fleetRef = useRef(null);

  const scrollFleet = (direction) => {
    if (fleetRef.current) {
      const { scrollLeft, clientWidth } = fleetRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      fleetRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

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

  const vehicles = [
  { id: 1, name: "Cadillac Escalade", price: "$450/day", seats: 7, transmission: "Automatic", fuel: "Gasoline", category: ["all", "suv"],     image: slide1 },
  { id: 2, name: "Lamborghini Urus",  price: "$500/day", seats: 5, transmission: "Automatic", fuel: "Gasoline", category: ["all", "luxury"],  image: slide2 },
  { id: 3, name: "Mercedes S-Class",  price: "$380/day", seats: 5, transmission: "Automatic", fuel: "Gasoline", category: ["all", "luxury"],  image: slide3 },
  { id: 4, name: "Range Rover Sport", price: "$420/day", seats: 7, transmission: "Automatic", fuel: "Diesel",   category: ["all", "suv"],     image: slide4 },
  { id: 5, name: "Toyota Hilux",      price: "$180/day", seats: 5, transmission: "Manual",    fuel: "Diesel",   category: ["all", "pickup"],  image: slide5 },
  { id: 6, name: "Toyota Corolla",    price: "$90/day",  seats: 5, transmission: "Automatic", fuel: "Gasoline", category: ["all", "economy"], image: slide1 },
];

const handleCarBookingSubmit = async () => {
  if (!user) {
    alert("Veuillez vous connecter pour effectuer une réservation.");
    return;
  }
  if (!carBooking.pickupLocation || !carBooking.dropoffLocation || !carBooking.pickupDate || !carBooking.dropoffDate) {
    alert("Veuillez remplir tous les champs de location.");
    return;
  }

  const token = localStorage.getItem('authToken');
  console.log("Token envoyé pour la réservation:", token);

  console.log("Tentative d'envoi de la réservation:", carBooking);

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/car-rental/book`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(carBooking)
    });
    const data = await response.json();
    if (data.success) {
      alert("Votre demande de location a été enregistrée ! L'admin vous contactera.");
    } else {
      alert("Erreur: " + data.message);
    }
  } catch (error) {
    console.error("Booking error:", error);
    alert("Une erreur est survenue lors de l'envoi de la demande.");
  }
};

const handleFlightSearch = async () => {
  if (!flightSearch.from || !flightSearch.to || !flightSearch.departureDate) {
    alert("Veuillez remplir au moins le départ, l'arrivée et la date de départ.");
    return;
  }

  setIsSearchingFlights(true);
  try {
    // Simulation ou appel API réel vers ton backend
    const queryParams = new URLSearchParams({
      from: flightSearch.from,
      to: flightSearch.to,
      date: flightSearch.departureDate,
      class: flightClass
    });
    const response = await fetch(`${import.meta.env.VITE_API_URL}/flights/search?${queryParams}`);
    const data = await response.json();
    setFlightResults(data.success ? data.flights : []);
  } catch (error) {
    console.error("Flight search error:", error);
  } finally {
    setIsSearchingFlights(false);
  }
};

const filteredVehicles = vehicles.filter(v => v.category.includes(activeCategory));
const totalPages = Math.ceil(filteredVehicles.length / 2);
const visibleVehicles = filteredVehicles.slice(vehiclePage * 2, vehiclePage * 2 + 2);

  return (
    <div className="home-container">
      <Navbar />

      <section className="hero">
        <div className="slider">
          <button className="slider-btn prev" onClick={prevSlide}>&#10094;</button>
          <button className="slider-btn next" onClick={nextSlide}>&#10095;</button>
          
          {slides.map((_, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
            >
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
                  <div className="search-item" style={{ position: 'relative' }} ref={pickupRef}>
                    <label>Pickup Location</label>
                    <input 
                      type="text" 
                      placeholder="Select city..." 
                      value={pickupSearch}
                      onChange={(e) => { setPickupSearch(e.target.value); setActiveDropdown('pickup'); }}
                      onFocus={() => setActiveDropdown('pickup')}
                    />
                    {activeDropdown === 'pickup' && (
                      <ul className="autocomplete-dropdown">
                        {LOCATIONS.filter(l => l.toLowerCase().includes(pickupSearch.toLowerCase())).map(loc => (
                          <li key={loc} onClick={() => {
                            setCarBooking({...carBooking, pickupLocation: loc});
                            setPickupSearch(loc);
                            setActiveDropdown(null);
                          }}>{loc}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="search-item" style={{ position: 'relative' }} ref={dropoffRef}>
                    <label>Drop Location</label>
                    <input 
                      type="text" 
                      placeholder="Select city..." 
                      value={dropoffSearch}
                      onChange={(e) => { setDropoffSearch(e.target.value); setActiveDropdown('dropoff'); }}
                      onFocus={() => setActiveDropdown('dropoff')}
                    />
                    {activeDropdown === 'dropoff' && (
                      <ul className="autocomplete-dropdown">
                        {LOCATIONS.filter(l => l.toLowerCase().includes(dropoffSearch.toLowerCase())).map(loc => (
                          <li key={loc} onClick={() => {
                            setCarBooking({...carBooking, dropoffLocation: loc});
                            setDropoffSearch(loc);
                            setActiveDropdown(null);
                          }}>{loc}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="search-item">
                    <label>Pick-up Date</label>
                    <input 
                      type="date" 
                      value={carBooking.pickupDate}
                      onChange={(e) => setCarBooking({...carBooking, pickupDate: e.target.value})}
                    />
                  </div>
                  <div className="search-item">
                    <label>Drop Date</label>
                    <input 
                      type="date" 
                      value={carBooking.dropoffDate}
                      onChange={(e) => setCarBooking({...carBooking, dropoffDate: e.target.value})}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="search-item">
                    <label>From</label>
                    <input 
                      type="text" 
                      placeholder="Departure City" 
                      value={flightSearch.from}
                      onChange={(e) => setFlightSearch({...flightSearch, from: e.target.value})}
                    />
                  </div>
                  <div className="search-item">
                    <label>To</label>
                    <input 
                      type="text" 
                      placeholder="Destination City" 
                      value={flightSearch.to}
                      onChange={(e) => setFlightSearch({...flightSearch, to: e.target.value})}
                    />
                  </div>
                  <div className="search-item">
                    <label>Departure</label>
                    <input 
                      type="date" 
                      value={flightSearch.departureDate}
                      onChange={(e) => setFlightSearch({...flightSearch, departureDate: e.target.value})}
                    />
                  </div>
                  <div className="search-item">
                    <label>Return</label>
                    <input 
                      type="date" 
                      value={flightSearch.returnDate}
                      onChange={(e) => setFlightSearch({...flightSearch, returnDate: e.target.value})}
                    />
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
          <button 
            className="btn-search" 
            onClick={activeService === 'car' ? handleCarBookingSubmit : handleFlightSearch}
            disabled={isSearchingFlights}
          >
            {isSearchingFlights ? 'Searching...' : 'Search'}
          </button>
        </div>
      </section>

      {activeService === 'flight' && flightResults.length > 0 && (
        <section className="flight-results-container" style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className='section-text'>Available Tickets</h2>
          <div className="flight-results-grid">
            {flightResults.map(flight => (
              <div key={flight.id} className="flight-ticket-card" style={{ background: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', marginBottom: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="flight-info">
                  <h4 style={{ color: '#0068BB', margin: '0' }}>{flight.airline}</h4>
                  <p style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: '5px 0' }}>{flight.departureTime} ✈ {flight.arrivalTime}</p>
                  <p style={{ color: '#666', margin: '0' }}>{flight.from} to {flight.to}</p>
                </div>
                <div className="flight-price-action" style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2ecc71', margin: '0' }}>{flight.price} €</p>
                  <button className="rent-btn" style={{ marginTop: '10px' }}>Select Ticket</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="featured">
        <div className="section-header">
          <h2 className="section-text">OUR SERVICES</h2>
          <p>With years of experience and a dedicated team, we provide <br /><strong className='s-strong'>Premium mobility</strong> solutions designed for <strong className='s-strong'>comfort, reliability, and exceptional service.</strong></p>
        </div>
          <div className="destinations-grid">
          {services.slice(0, 4).map((service) => (
            <div key={service.id} className="dest-card">
              <div className="dest-image" style={{ backgroundImage: `url(${service.image})` }}></div>
              <div className="dest-info">
                <h3 className='section-text'>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>))}
        </div>
      </section>

      <section className="home-fleet-section">
        <div className="fleet-container-inner" ref={fleetRef}>
          <div className="fleet-header-right">
            <h2>Explore Our Premium Vehicle Collection</h2>
            <div className="fleet-divider"></div>
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

            <button className="fleet-arrow next" onClick={() => scrollFleet('right')}>
              <img src={rightArrow} alt="Next" />
            </button>
          </div>
          
          <div className="fleet-footer-link">
            <Link to="/explore-fleet" className="view-all-fleet">View all vehicles</Link>
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

import './CarRent.css';
import Navbar from './Navbar';
import img1 from './assets/img slide 1.png';
import img2 from './assets/logo.png';
import img3 from './assets/foot1.png';
import img4 from './assets/foot2.png';
import img5 from './assets/foot3.png';
import img6 from './assets/foot4.png';
import img7 from './assets/foot5.png';


// ── Icons (inline SVG helpers) ──────────────────────────────────────
const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

const GearIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
  </svg>
);

const FuelIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
    <path d="M3 22V8l4-4h8l4 4v14H3z"/><path d="M16 10h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2"/>
    <line x1="3" y1="11" x2="16" y2="11"/>
  </svg>
);

const AcIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
    <circle cx="12" cy="12" r="5"/>
  </svg>
);

const Minivan = () => (
  <svg viewBox="0 0 32 20" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="14">
    <rect x="1" y="6" width="30" height="10" rx="2"/>
    <path d="M5 6V3h14l4 3"/>
    <circle cx="7" cy="17" r="2"/><circle cx="25" cy="17" r="2"/>
  </svg>
);

const SedanIcon = () => (
  <svg viewBox="0 0 32 20" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="14">
    <rect x="1" y="9" width="30" height="8" rx="2"/>
    <path d="M5 9V7l5-4h12l5 4v2"/>
    <circle cx="8" cy="18" r="2"/><circle cx="24" cy="18" r="2"/>
  </svg>
);

const PickupIcon = () => (
  <svg viewBox="0 0 36 20" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="14">
    <rect x="1" y="8" width="34" height="9" rx="2"/>
    <path d="M4 8V5l4-3h10l3 3v3"/>
    <line x1="21" y1="8" x2="21" y2="17"/>
    <circle cx="8" cy="18" r="2"/><circle cx="28" cy="18" r="2"/>
  </svg>
);

const SuvIcon = () => (
  <svg viewBox="0 0 34 20" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="14">
    <rect x="1" y="7" width="32" height="10" rx="2"/>
    <path d="M4 7V4l4-2h18l4 2v3"/>
    <circle cx="8" cy="18" r="2"/><circle cx="26" cy="18" r="2"/>
  </svg>
);

// ── Car data ────────────────────────────────────────────────────────
const cars = [
  {
    id: 1,
    name: 'Mercedes',
    type: 'Sedan',
    price: 25,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Mercedes_S-Class_%28W222%29_in_Minsk_%2846776591891%29.jpg/800px-Mercedes_S-Class_%28W222%29_in_Minsk_%2846776591891%29.jpg',
    features: ['Automat', 'PB 95', 'Air Conditioner'],
  },
  {
    id: 2,
    name: 'Toyota Corola',
    type: 'SUV',
    price: 20,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2019_Toyota_RAV4_%28MXAA52R%29_GXL_5-door_wagon_%282021-08-26%29_01.jpg/800px-2019_Toyota_RAV4_%28MXAA52R%29_GXL_5-door_wagon_%282021-08-26%29_01.jpg',
    features: ['Automat', 'PB 95', 'Air Conditioner'],
  },
  {
    id: 3,
    name: 'Mercedes',
    type: 'Sedan',
    price: 30,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/2023_Mercedes-Benz_S-Class_%28Z223%29_S580e_sedan_%282023-11-09%29_01.jpg/800px-2023_Mercedes-Benz_S-Class_%28Z223%29_S580e_sedan_%282023-11-09%29_01.jpg',
    features: ['Automat', 'PB 95', 'Air Conditioner'],
  },
  {
    id: 4,
    name: 'Toyota',
    type: 'Pickup',
    price: 25,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/2022_Toyota_HiLux_SR5_HiRider_%28facelift%2C_silver%29%2C_front_8.27.23.jpg/800px-2022_Toyota_HiLux_SR5_HiRider_%28facelift%2C_silver%29%2C_front_8.27.23.jpg',
    features: ['Automat', 'PB 95', 'Air Conditioner'],
  },
  {
    id: 5,
    name: 'Toyota RAV 4',
    type: 'SUV',
    price: 25,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/2019_Toyota_RAV4_Adventure_2.5_Front.jpg/800px-2019_Toyota_RAV4_Adventure_2.5_Front.jpg',
    features: ['Automat', 'PB 95', 'Air Conditioner'],
  },
  {
    id: 6,
    name: 'Toyota',
    type: 'Pickup',
    price: 20,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/2023_Toyota_Hilux_GR_Sport_SR5_Double_Cab_%28Australia%2C_red%29%2C_front_8.26.23.jpg/800px-2023_Toyota_Hilux_GR_Sport_SR5_Double_Cab_%28Australia%2C_red%29%2C_front_8.26.23.jpg',
    features: ['Automat', 'PB 95', 'Air Conditioner'],
  },
];

const filterTabs = [
  { label: 'All vehicles', icon: null },
  { label: 'Minivan', icon: <Minivan /> },
  { label: 'Sedan', icon: <SedanIcon /> },
  { label: 'Cabriolet', icon: <SedanIcon /> },
  { label: 'Pickup', icon: <PickupIcon /> },
  { label: 'Suv', icon: <SuvIcon /> },
  { label: 'Economy', icon: <SedanIcon /> },
];

// ── Component ───────────────────────────────────────────────────────
const CarRent = () => {
  return (
    <div className="home-container">
      <Navbar />

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Find the Perfect Vehicle for Every Journey</h1>
          <p>Explore our diverse fleet of luxury, business, SUV, and utility vehicles designed to meet your personal and professional transportation needs.</p>
          <button className="hero-cta">View All Cars</button>
        </div>

        <div className="hero-car-image">
          <img
            src={img1}
            alt="Featured car"
          />
        </div>

        <div className="booking-card">
          <h3>Book your car</h3>

          <div className="booking-field">
            <select defaultValue="">
              <option value="" disabled>Car type</option>
              <option>Sedan</option>
              <option>SUV</option>
              <option>Minivan</option>
              <option>Pickup</option>
              <option>Economy</option>
              <option>Cabriolet</option>
            </select>
          </div>

          <div className="booking-field">
            <select defaultValue="">
              <option value="" disabled>Place of rental</option>
              <option>Yaoundé</option>
              <option>Douala</option>
              <option>Bafoussam</option>
            </select>
          </div>

          <div className="booking-field">
            <select defaultValue="">
              <option value="" disabled>Place of return</option>
              <option>Yaoundé</option>
              <option>Douala</option>
              <option>Bafoussam</option>
            </select>
          </div>

          <div className="booking-field">
            <input type="date" placeholder="Rental Date" />
          </div>

          <div className="booking-field">
            <input type="date" placeholder="Return Date" />
          </div>

          <button className="book-now-btn">Book now</button>
        </div>
      </section>

      {/* VEHICLES */}
      <section className="vehicles-section" id="car-rents">
        <div className="vehicles-header">
          <h2>Select a vehicle group</h2>
          <div className="search-bar">
            <SearchIcon />
            <input type="text" placeholder="Search your car" />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          {filterTabs.map((tab, i) => (
            <button
              key={tab.label}
              className={`filter-tab ${i === 0 ? 'active' : ''}`}
            >
              {tab.icon && tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Car Grid */}
        <div className="car-grid">
          {cars.map(car => (
            <div key={car.id} className="car-card">
              <img src={car.image} alt={car.name} />

              <div className="car-info">
                <div>
                  <div className="car-name">{car.name}</div>
                  <div className="car-type">{car.type}</div>
                </div>
                <div className="car-price">
                  <span className="price">${car.price}</span>
                  <span className="per-day">per day</span>
                </div>
              </div>

              <div className="car-features">
                <span className="car-feature"><GearIcon /> Automat</span>
                <span className="car-feature"><FuelIcon /> PB 95</span>
                <span className="car-feature"><AcIcon /> Air Conditioner</span>
              </div>

              <button className="view-details-btn">View Details</button>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
                <img src={img2} alt="Mooves Logo" />
            </div>
            <p>Premium mobility, vehicle rental, fleet management, and ticketing solutions designed to deliver comfort, flexibility, and reliability.</p>
            <div className="app-badges">
              <div className="app-badge">
                <img src={img3} alt="App Store" />
              </div>
              <div className="app-badge">
                <img src={img4} alt="Google Play" />
              </div>
            </div>
            <div className="social-links">
              <div className="social-icon">f</div>
              <div className="social-icon">in</div>
              <div className="social-icon">tw</div>
              <div className="social-icon">yt</div>
            </div>
          </div>

          {/* Address / Email / Phone */}
          <div className="footer-col">
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <img src={img5} alt="Address Icon" />
              </div>
              <div className="footer-contact-info">
                <h5>Address</h5>
                <p>BP 482 Douala - Makepe montée 8M</p>
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <img src={img6} alt="Email Icon" />
              </div>
              <div className="footer-contact-info">
                <h5>Email</h5>
                <p>business@moove-location.com</p>
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <img src={img7} alt="Phone Icon" />
              </div>
              <div className="footer-contact-info">
                <h5>Phone</h5>
                <p>+237 653 1716 34<br />692 38 29 17</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {['Home','Car Rents','Business Solution','Flight Booking','Fleet','About Us','Contact'].map(l => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Services + Support */}
          <div className="footer-services-support">
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                {['Car Rental','Flight Ticketing','Chauffeur Services','Corporate Vehicle Leasing',
                  'Airport Transfer Service','Utility Pickup Vehicle Rental','Fleet Management Service',
                  'Executive/Luxury Transportation','Business Mobility Solution'].map(s => (
                  <li key={s}><a href="#">{s}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Support</h4>
              <ul>
                {['Help Center','FAQs','Terms & Conditions','Privacy Policy','Booking Policy','Customer Support'].map(s => (
                  <li key={s}><a href="#">{s}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Mooves Travel and Location. All Rights Reserved.
        </div>
      </footer>

    </div>
  );
};

export default CarRent;
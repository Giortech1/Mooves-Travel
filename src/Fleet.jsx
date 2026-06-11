import "./Fleet.css";
import Navbar from "./Navbar";
import { FaCogs, FaUserFriends, FaSnowflake, FaCar, FaHeadset, FaShieldAlt } from "react-icons/fa";

import mercedes2020 from "./assets/2020_Mercedes-Benz_AMG_S_65-removebg-preview.png";
import urusABT from "./assets/ABT_Lamborghini_Urus_Scatenato_2024-removebg-preview.png";
import car1 from "./assets/car1.png";
import rav4 from "./assets/RAV4___TOYOTA_The_SUV__Redefined_-removebg-preview.png";
import img8 from "./assets/img 8.png";
import corolaToyota from "./assets/corola toyota.png";
import garageImg from "./assets/garage.jpg";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import img1 from "./assets/foot1.png";
import img2 from "./assets/foot2.png";
import img3 from "./assets/foot3.png";
import img4 from "./assets/foot4.png"
import img5 from "./assets/foot5.png";
import img6 from "./assets/logo.png";

const vehicles = [
  { name: "Mercedes", type: "Sedan", price: 25, img: mercedes2020 },
  { name: "Toyota Corola", type: "SUV", price: 20, img: urusABT },
  { name: "Mercedes", type: "Sedan", price: 30, img: car1 },
  { name: "Toyota", type: "Pickup", price: 25, img: rav4 },
  { name: "Toyota RAV 4", type: "SUV", price: 25, img: img8 },
  { name: "Toyota", type: "Pickup", price: 20, img: mercedes2020 },
];

const categories = ["All vehicles", "Economy", "Toyota", "SUV", "Luxury", "Van", "Group Transport"];

function Fleet() {
  return (
    <div className="fleet-page">
      <Navbar />

      {/* HERO */}
      <section className="fleet-hero">
        <div className="fleet-hero-text">
          <h1>
            A Fleet Designed <br /> For Every Journey
          </h1>
          <p>
            From economy vehicles and executive sedans to luxury SUVs and
            business transport solutions, discover a fleet built for comfort,
            safety, and reliability.
          </p>
          <div className="fleet-hero-buttons">
            <button className="btn-outline">Explore Fleet →</button>
            <button className="btn-white">Contact Fleet Team</button>
          </div>
        </div>

        <div className="fleet-hero-image">
          <img src={corolaToyota} alt="Fleet vehicle" />
        </div>
      </section>

      {/* FILTER BAR */}
      <div className="fleet-filter-wrapper">
        <div className="fleet-filter">
          {categories.map((cat, i) => (
            <span key={i} className={i === 0 ? "active" : ""}>
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* VEHICLE GRID */}
      <section className="fleet-grid">
        {vehicles.map((v, i) => (
          <div className="vehicle-card" key={i}>
            <img src={v.img} alt={v.name} className="vehicle-img" />
            <div className="vehicle-info">
              <div className="vehicle-title-row">
                <div>
                  <h3>{v.name}</h3>
                  <span className="vehicle-type">{v.type}</span>
                </div>
                <div className="vehicle-price">
                  ${v.price}
                  <span>per day</span>
                </div>
              </div>

              <div className="vehicle-specs">
                <span>
                  <FaCogs /> Automatic
                </span>
                <span>
                  <FaUserFriends /> PB 35
                </span>
                <span>
                  <FaSnowflake /> Air Conditioner
                </span>
              </div>

              <button className="btn-view">View Details</button>
            </div>
          </div>
        ))}
      </section>

      <div className="view-all-wrapper">
        <button className="btn-view-all">View all Vehicles</button>
      </div>

      {/* WHY OUR FLEET STANDS OUT */}
      <section className="fleet-why">
        <div className="why-title">
          <h2>WHY OUR FLEET STANDS OUT</h2>
        </div>

        <div className="why-item">
          <h4>Safety First</h4>
          <p>Regular inspections and maintenance for your peace of mind.</p>
        </div>

        <div className="why-item">
          <h4>Premium Comfort</h4>
          <p>Modern interiors and advanced features for a superior experience.</p>
        </div>

        <div className="why-item">
          <h4>Reliable Performance</h4>
          <p>
            Vehicles maintained to the highest standards for reliability.
          </p>
        </div>

        <div className="why-item">
          <h4>Flexible Rental Options</h4>
          <p>
            Daily, weekly, monthly, and long-term plans that fit your needs.
          </p>
        </div>
      </section>

      {/* FLEET MANAGEMENT EXCELLENCE */}
      <section className="fleet-management">
        <div className="management-image">
          <img src={garageImg} alt="Fleet management" />
        </div>

        <div className="management-content">
          <h3>FLEET MANAGEMENT EXCELLENCE</h3>
          <h2>Professionally Managed For Maximum Reliability</h2>
          <p>
            Our fleet undergoes regular maintenance, quality inspections, and
            performance monitoring to ensure every vehicle meets our premium
            service standards.
          </p>

          <div className="management-stats">
            <div className="stat">
              <div className="stat-icon"><FaCar /></div>
              <span>500+ Vehicles</span>
            </div>
            <div className="stat">
              <div className="stat-icon"><FaUserFriends /></div>
              <span>Availability Rate</span>
            </div>
            <div className="stat">
              <div className="stat-icon"><FaHeadset /></div>
              <span>24/7 Support</span>
            </div>
            <div className="stat">
              <div className="stat-icon"><FaShieldAlt /></div>
              <span>Insured Fleet</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
            <div className="footer-top">
                {/* Brand */}
                <div className="footer-brand">
                  <div className="footer-logo">
                      <img src={img6} alt="Mooves Logo" />
                  </div>
                  <p>Premium mobility, vehicle rental, fleet management, and ticketing solutions designed to deliver comfort, flexibility, and reliability.</p>
                  <div className="app-badges">
                    <div className="app-badge">
                      <img src={img1} alt="App Store" />
                    </div>
                    <div className="app-badge">
                      <img src={img2} alt="Google Play" />
                    </div>
                  </div>
                  <div className="social-links">
                    <div className="social-icon"><FaFacebook /></div>
                    <div className="social-icon"><FaInstagram /></div>
                    <div className="social-icon"><FaTwitter /></div>
                    <div className="social-icon"><FaYoutube /></div>
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
                      <img src={img4} alt="Email Icon" />
                    </div>
                    <div className="footer-contact-info">
                      <h5>Email</h5>
                      <p>business@moove-location.com</p>
                    </div>
                  </div>
                  <div className="footer-contact-item">
                    <div className="footer-contact-icon">
                      <img src={img3} alt="Phone Icon" />
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

export default Fleet;
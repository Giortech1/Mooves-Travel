import "./BusinessSolution.css";
import Navbar from "./Navbar";
import {
  FaMoneyBillWave,
  FaCar,
  FaClock,
  FaCog,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import logo from "./assets/logo.png";
import appStore from "./assets/foot1.png";
import googlePlay from "./assets/foot2.png";

function BusinessSolution() {
  return (
    <div className="business-page">
        <Navbar />

      {/* HERO SECTION */}
      <section className="hero-section">
        <h1>
          Smarter Mobility Solutions For
          <span> Modern Businesses</span>
        </h1>

        <p>
          Streamline employee transportation, executive travel,
          corporate leasing, airport transfers, and fleet management
          with flexible mobility solutions designed to help your
          business move efficiently.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">
            Get a Proposal
          </button>

          <button className="btn-secondary">
            Schedule Consultation
          </button>
        </div>
      </section>

      {/* CHALLENGES SECTION */}
      <section className="challenges-section">

        <div className="challenge-text">
          <small>Challenges Businesses Face</small>

          <h2>
            We help organizations eliminate common transportation
            inefficiencies.
          </h2>
        </div>

        <div className="challenge-cards">

          <div className="card">
            <div className="icon-box">
              <FaMoneyBillWave />
            </div>
            <h3>High Transportation Costs</h3>
            <p>
              Reduce unnecessary expenses with optimized mobility plans.
            </p>
          </div>

          <div className="card">
            <div className="icon-box">
              <FaCar />
            </div>
            <h3>Poor Fleet Utilization</h3>
            <p>
              Maximize vehicle usage and operational efficiency.
            </p>
          </div>

          <div className="card">
            <div className="icon-box">
              <FaClock />
            </div>
            <h3>Employee Travel Delays</h3>
            <p>
              Ensure reliable transportation for your workforce.
            </p>
          </div>

          <div className="card">
            <div className="icon-box">
              <FaCog />
            </div>
            <h3>Complex Mobility Management</h3>
            <p>
              Manage transportation from one centralized platform.
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-section">

        <h2>
          Tailored Mobility Services For Every Business
        </h2>

        <div className="services-grid">

          <div>
            <h3>Corporate Car Rentals</h3>
            <p>
              Flexible daily, weekly, and monthly vehicle rentals.
            </p>
          </div>

          <div>
            <h3>Executive Chauffeur Services</h3>
            <p>
              Professional drivers for executives and VIP guests.
            </p>
          </div>

          <div>
            <h3>Airport Transfers</h3>
            <p>
              Reliable airport pickups and drop-offs.
            </p>
          </div>

          <div>
            <h3>Corporate Leasing</h3>
            <p>
              Long-term vehicle leasing solutions.
            </p>
          </div>

          <div>
            <h3>Fleet Management</h3>
            <p>
              Vehicle monitoring, maintenance, and optimization.
            </p>
          </div>

          <div>
            <h3>Business Travel Booking</h3>
            <p>
              Flight reservations and travel coordination.
            </p>
          </div>

        </div>
      </section>

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
                  <h4>Address</h4>
                  <p>BP 482 Douala - Makepe montée BM</p>
      
                  <h4>Quick Links</h4>
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
                  <h4>Email</h4>
                  <p>business@moove-location.com</p>
      
                  <h4>Services</h4>
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
                  <h4>Phone</h4>
                  <p>
                    +237 653 1718 34 <br /> 692 38 29 17
                  </p>
      
                  <h4>Support</h4>
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
                © 2025 Mooves Travel and Location. All Rights Reserved.
              </div>
            </footer>

    </div>
  );
}

export default BusinessSolution;
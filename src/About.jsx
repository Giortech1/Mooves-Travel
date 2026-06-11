import "./About.css";
import Navbar from "./Navbar";
import { FaRocket, FaLightbulb, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import aboutBg from "./assets/img2.5.jpg";
import officeImg from "./assets/img 5.png";
import logo from "./assets/logo.png";
import appStore from "./assets/foot1.png";
import googlePlay from "./assets/foot2.png";

function About() {
  return (
    <div className="about-page">
      <Navbar />

      {/* HERO */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="about-hero-overlay">
          <h1>About Us</h1>
          <p>
            Mooves delivers premium mobility solutions across Cameroon,
            providing luxury car rentals, chauffeur services, airport
            transfers, and fleet management designed for comfort,
            reliability, and performance.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="who-we-are">
        <div className="who-content">
          <span className="badge">WHO WE ARE</span>
          <h2>We Help You Get Solutions</h2>
          <p>
            At Move, we understand the importance of reliable vehicles
            tailored to your business needs. That's why we're here to offer
            you customized car rental solutions, designed specifically to
            meet the demands of your business
          </p>

          <div className="who-features">
            <div className="who-feature">
              <FaRocket className="feature-icon" />
              <div>
                <h4>Premium Experience</h4>
                <p>Luxury and comfort in every journey.</p>
              </div>
            </div>

            <div className="who-feature">
              <FaLightbulb className="feature-icon" />
              <div>
                <h4>Reliability</h4>
                <p>Always available when you need us.</p>
              </div>
            </div>
          </div>

          <button className="btn-services">Services</button>
        </div>

        <div className="who-image">
          <img src={officeImg} alt="Mooves team member" />
          <div className="who-image-card">
            <p className="lorem">Our Mission is YOU</p>
            <h4>Professional Service</h4>
            <p className="card-text">Always available when you need us.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <h2>
          Hear what people are saying about Mooves Travel and Location
        </h2>

        <div className="testimonial-grid">
          {[1, 2, 3].map((item) => (
            <div className="testimonial-card" key={item}>
              <div className="testimonial-avatar"></div>
              <h4>Giorno Roman</h4>
              <p>
                you customized car rental solutions, designed specifically to
                meet the demands of your business
              </p>
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

export default About;
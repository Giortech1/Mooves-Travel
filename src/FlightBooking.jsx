import "./FlightBooking.css";
import Navbar from "./Navbar";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import planeBg from "./assets/img slide 2.png";
import logo from "./assets/logo.png";
import appStore from "./assets/foot1.png";
import googlePlay from "./assets/foot2.png";

function FlightBooking() {
  return (
    <div className="flight-page">
      <Navbar />

      {/* HERO */}
      <section
        className="flight-hero"
        style={{ backgroundImage: `url(${planeBg})` }}
      >
        <div className="flight-hero-overlay">
          <h1>Fly Anywhere With Confidence</h1>
          <p>
            Book domestic and international flights at competitive prices
            with a seamless travel experience.
          </p>

          {/* SEARCH CARD */}
          <div className="search-card">
            <div className="search-tabs">
              <select>
                <option>Class</option>
                <option>Economy</option>
                <option>Business</option>
                <option>First Class</option>
              </select>

              <select>
                <option>One way</option>
                <option>Round trip</option>
              </select>
            </div>

            <div className="search-fields">
              <div className="field">
                <label>From</label>
                <input type="text" placeholder="Country, city or airport" />
              </div>

              <div className="field">
                <label>To</label>
                <input type="text" placeholder="Country, city or airport" />
              </div>

              <div className="field">
                <label>Depart</label>
                <input type="text" placeholder="Add date" />
              </div>

              <div className="field">
                <label>Return</label>
                <input type="text" placeholder="Add date" />
              </div>

              <div className="field">
                <label>Travellers and cabin class</label>
                <input type="text" placeholder="1 Adult, Economy" />
              </div>

              <div className="search-btn-container">
                <button className="btn-search">Search</button>
              </div>
            </div>

            <div className="search-checkboxes">
              <label>
                <input type="checkbox" /> Add nearby Airports
              </label>
              <label>
                <input type="checkbox" /> Add nearby Airports
              </label>
              <label>
                <input type="checkbox" /> Direct Flight
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR DESTINATIONS */}
      <section className="popular-destinations">
        <h2>Popular Destinations</h2>

        <div className="destinations-grid">
          {[
            {
              id: 1,
              city: "Paris",
              country: "France",
              price: "$450",
              image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800",
            },
            {
              id: 2,
              city: "Dubai",
              country: "United Arab Emirates",
              price: "$600",
              image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800",
            },
            {
              id: 3,
              city: "New York",
              country: "USA",
              price: "$550",
              image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800",
            },
            {
              id: 4,
              city: "Tokyo",
              country: "Japan",
              price: "$750",
              image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=800",
            },
            {
              id: 5,
              city: "London",
              country: "United Kingdom",
              price: "$480",
              image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800",
            },
            {
              id: 6,
              city: "Rome",
              country: "Italy",
              price: "$420",
              image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=800",
            },
          ].map((dest) => (
            <div
              key={dest.id}
              className="destination-card"
              style={{ backgroundImage: `url(${dest.image})` }}
            >
              <div className="dest-overlay">
                <div className="dest-info">
                  <h3>{dest.city}</h3>
                  <p>{dest.country}</p>
                </div>
                <div className="dest-price">
                  <span>From</span>
                  <strong>{dest.price}</strong>
                </div>
              </div>
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

export default FlightBooking;

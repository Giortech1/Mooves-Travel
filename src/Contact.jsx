import "./Contact.css";
import Navbar from "./Navbar";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import logo from "./assets/logo.png";
import appStore from "./assets/foot1.png";
import googlePlay from "./assets/foot2.png";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!form.name || !form.email || !form.message) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/contact/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success) {
        alert("Votre message a été envoyé avec succès !");
        setForm({ name: "", email: "", message: "" }); // Réinitialise le formulaire
      } else {
        alert("Erreur: " + data.message);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du message:", error);
      alert("Une erreur est survenue. Veuillez réessayer plus tard.");
    }
  };

  return (
    <div className="contact-page">
      <Navbar />

      {/* HERO / FORM SECTION */}
      <section className="contact-hero">
        <h1>
          Contact <span>Us</span>
        </h1>

        <div className="contact-grid">
          {/* GET IN TOUCH CARD */}
          <div className="contact-info-card">
            <h2>
              Get <span>in Touch</span>
            </h2>

            <p className="info-line">BP 482 Douala - Makepe montée BM</p>
            <p className="info-line">business@moove-location.com</p>
            <p className="info-line bold">
              +237 653 1716 34 | 692 38 29 17
            </p>
            <p className="info-line bold">
              +237 653 1716 34 | 692 38 29 17
            </p>
          </div>

          {/* FORM */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <textarea
              name="message"
              placeholder="How can we help you?"
              rows="6"
              value={form.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit" className="btn-send">
              Send Message
            </button>
          </form>
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
              <li>flight Booking</li>
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
              <li>corporate Vehicle Leasing</li>
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
          © 2026 Mooves Travel and Location . All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default Contact;

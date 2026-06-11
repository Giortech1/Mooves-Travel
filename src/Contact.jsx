import './Contact.css';
import Navbar from './Navbar';

const Contact = () => {
  return (
    <div className="contact-container">
      <Navbar />
      <div style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h1>Contact Us</h1>
        <p>Get in touch with us for any inquiries.</p>
      </div>
    </div>
  );
};

export default Contact;

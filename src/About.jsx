import './About.css';
import Navbar from './Navbar';

const About = () => {
  return (
    <div className="about-container">
      <Navbar />
      <div style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h1>About Us</h1>
        <p>Welcome to Mooves Travel. We are dedicated to providing the best travel experience.</p>
      </div>
    </div>
  );
};

export default About;

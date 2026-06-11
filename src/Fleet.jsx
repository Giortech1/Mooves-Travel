import './Fleet.css';
import Navbar from './Navbar';

const Fleet = () => {
  return (
    <div className="fleet-container">
      <Navbar />
      <div style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h1>Our Fleet</h1>
        <p>Explore our wide range of vehicles.</p>
      </div>
    </div>
  );
};

export default Fleet;

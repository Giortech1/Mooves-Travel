import './FlightBooking.css';
import Navbar from './Navbar';

const FlightBooking = () => {
  return (
    <div className="flight-booking-container">
      <Navbar />
      <div style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h1>Flight Booking</h1>
        <p>Book your next flight with us.</p>
      </div>
    </div>
  );
};

export default FlightBooking;

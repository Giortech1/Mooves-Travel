import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import SuccessReset from './SuccessReset';
import Home from './Home';
import CarRent from './CarRent';
import BusinessSolution from './BusinessSolution';
import Fleet from './Fleet';
import FlightBooking from './FlightBooking';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/success-reset" element={<SuccessReset />} />
        <Route path="/car-rent" element={<CarRent />} />
        <Route path="/business-solution" element={<BusinessSolution />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/flight-booking" element={<FlightBooking />} />
      </Routes>
    </Router>
  );
}

export default App;

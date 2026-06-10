import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import SuccessReset from './SuccessReset';
import Home from './Home';
import CarRents from './CarRents';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/success-reset" element={<SuccessReset />} />
        <Route path="/explore-fleet" element={<CarRents />} />
      </Routes>
    </Router>
  );
}

export default App;

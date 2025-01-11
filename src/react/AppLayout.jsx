import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import RegisterPage from './Pages/RegistierPage/RegisterPage';
import Error404 from './Pages/Error/Error404';
import TrackingPage from './Pages/Tracking/TrackingPage';
import Homepage from './Pages/LandingPage/Homepage';
const AppLayout = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/tracking" element={<TrackingPage />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  </Router>
);

export default AppLayout
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingPage from '../Pages/LandingPage/LandingPage';
import LoginPage from '../Pages/LoginPage/LoginPage';

const RootRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  </Router>
);

export default RootRoutes;

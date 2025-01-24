import React from 'react'
import {
  BrowserRouter as Router, Route, Routes, Navigate
} from 'react-router-dom'
import LandingPage from './Pages/LandingPage/LandingPage'
import LoginPage from './Pages/LoginPage/LoginPage'
import RegisterPage from './Pages/RegisterPage/RegisterPage'
import Error404 from './Pages/Error/Error404'
import TrackingPage from './Pages/Tracking/TrackingPage'
import Homepage from './Pages/LandingPage/Homepage'
import ProfilePage from './Pages/Profile/Profile'
import FileUpload from './Components/UploadImage'
import auth from './Hooks/firebase'

const AppLayout = () => {
  const { user } = auth

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/home" /> : <LandingPage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/tracking" element={<TrackingPage />} />
        <Route path="/tracking/upload" element={<FileUpload />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  )
}

export default AppLayout

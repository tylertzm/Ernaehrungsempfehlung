import React from 'react'

import { Route, Routes, Navigate } from 'react-router-dom'

import { useAuth } from './Hooks/AuthProvider'

import InfoPage from './Pages/InfoPage'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Estimate from './Pages/Estimate'

import Profile from './Pages/Profile/Profile'

import Error404 from './Pages/Error404'

const AppRoutes = () => {
  const { user, loading } = useAuth() // Get the user and loading state

  // Show a loading indicator while the auth state is being resolved
  if (loading) {
    return <div>Loading...</div>
  }

  // Redirect all routes to Login if user is null
  if (!user) {
    return (
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<InfoPage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<Navigate to="/Login" replace />} />
      </Routes>
    )
  }

  // Render the authenticated routes
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Estimate" element={<Estimate />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}

export default AppRoutes
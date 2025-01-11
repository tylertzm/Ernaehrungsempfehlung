import React from 'react'
import { Navigate } from 'react-router-dom'
import auth from '../../Hooks/firebase' // Assuming this is where your auth state is

// ProtectedRoute Component to check user authentication
const ProtectedRoute = ({ element: Element, ...rest }) => {
  const { user } = auth // Use your custom hook to get the current user

  return user ? (
    <Element {...rest} />  // If user is authenticated, render the requested component
  ) : (
    <Navigate to="/login" />  // If not authenticated, redirect to login page
  )
}

export default ProtectedRoute
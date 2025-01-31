import React, { useState, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import {
  Stack, Typography, Paper, Avatar, Divider, Button
} from '@mui/material'
import { getAuth } from 'firebase/auth'
import SettingsIcon from '@mui/icons-material/Settings'

const Profile = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const navigate = useNavigate()// For navigation to settings page
  const auth = getAuth()
  const currentUser = auth.currentUser

  useEffect(() => {
    if (!currentUser) {
      setError('User is not authenticated.')
      setLoading(false)
    } else {
      setLoading(false)
    }
  }, [currentUser])

  if (loading) {
    return (
      <Stack
        sx={{
          width: '100%',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 2,
          backgroundColor: '#f9f9f9'
        }}
      >
        <Typography variant="h6" sx={{ color: '#000', textAlign: 'center' }}>
          Loading your profile...
        </Typography>
      </Stack>
    )
  }

  if (error) {
    return (
      <Stack
        sx={{
          width: '100%',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 2,
          backgroundColor: '#f9f9f9'
        }}
      >
        <Typography variant="h6" sx={{ color: '#f44336', textAlign: 'center' }}>
          {error}
        </Typography>
      </Stack>
    )
  }

  return (
    <Stack
      spacing={3}
      sx={{
        width: '100%',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        backgroundColor: '#f9f9f9'
      }}
    >

      <Paper
        sx={{
          width: '100%',
          maxWidth: 600,
          height: 'auto',
          padding: 4,
          borderRadius: 3,
          backgroundColor: '#fff',
          color: '#333',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          overflowY: 'auto'
        }}
      >
        <Avatar
          alt={currentUser.displayName || 'User'}
          src={currentUser.photoURL}
          sx={{
            width: 120,
            height: 120,
            border: '5px solid #fff',
            marginBottom: 3
          }}
        />

        {/* User Info */}
        <Typography variant="h5" sx={{ color: '#333', fontWeight: 'bold' }}>
          Email:
        </Typography>
        <Typography variant="h6" sx={{ color: '#555', marginBottom: 3 }}>
          {currentUser.email}
        </Typography>

        {/* Divider for style */}
        <Divider sx={{ width: '80%', marginBottom: 3 }} />

        {/* Fun About Section */}
        <Typography variant="body1" sx={{ color: '#777', fontStyle: 'italic', textAlign: 'center' }}>
          This still under development! ✨
        </Typography>
      </Paper>

      {/* Outlet for nested routes */}
      <Outlet />
    </Stack>
  )
}

export default Profile
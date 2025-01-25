import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { Typography, Button, TextField, Box } from '@mui/material'
import { ArrowBack as BackIcon } from '@mui/icons-material'

const ProfileSettings = () => {
  const navigate = useNavigate()

  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  // Handle the password change logic
  const handlePasswordChange = () => {
    if (newPassword !== confirmPassword) {
      setError('New password and confirm password do not match.')
      return
    }

    if (newPassword.length < 6) {
      setError('Password should be at least 6 characters.')
      return
    }

    // Simulate password change process (replace this with your actual logic)
    setSuccess('Password changed successfully!')
    setError('')
    setCurrentPassword('')
    setNewPassword('')
    setConfirmPassword('')
  }

  return (
    <>
      <Typography variant="h4">
        Here are your Settings
      </Typography>

      <Button
        variant="contained"
        startIcon={<BackIcon />}
        onClick={() => navigate('/profile')}
      >
        Go back to Profile Overview
      </Button>

      <Box sx={{ marginTop: 3 }}>
        <Typography variant="h6">Change Password</Typography>

        {/* Error Message */}
        {error && <Typography color="error">{error}</Typography>}

        {/* Success Message */}
        {success && <Typography color="success">{success}</Typography>}

        <TextField
          label="Current Password"
          type="password"
          fullWidth
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          sx={{ marginTop: 2 }}
        />
        <TextField
          label="New Password"
          type="password"
          fullWidth
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          sx={{ marginTop: 2 }}
        />
        <TextField
          label="Confirm New Password"
          type="password"
          fullWidth
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          sx={{ marginTop: 2 }}
        />

        <Button
          variant="contained"
          onClick={handlePasswordChange}
          sx={{ marginTop: 3 }}
        >
          Change Password
        </Button>
      </Box>
    </>
  )
}

export default ProfileSettings

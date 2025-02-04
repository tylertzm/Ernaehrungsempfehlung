import React, { useState } from 'react'
import { TextField, Button, Typography, Stack } from '@mui/material'
import { signInWithEmailAndPassword } from 'firebase/auth'
import auth from '../Hooks/firebase' // Import Firebase auth
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      // Firebase authentication
      await signInWithEmailAndPassword(auth, email, password)
      setError('')
      setLoading(false)
      alert('Login successful')

      // Navigate to the Home screen afterd successful login
      navigate('/')
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  }

  return (
    <Stack
      spacing={2}
      sx={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2
      }}
    >
      <Typography variant="h4">Login</Typography>
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <Typography color="error">{error}</Typography>}
      <Button variant="contained" onClick={handleLogin} disabled={loading}>
        {loading ? 'Logging In...' : 'Log In'}
      </Button>

      <Typography variant="h6">
        Don't have an account?
        <Button onClick={() => navigate('/Register')}>Register</Button>
      </Typography>
    </Stack>
  )
}

export default Login

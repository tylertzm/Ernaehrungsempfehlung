import * as React from 'react'
import { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import auth from '../Hooks/firebase'
import AppLogo from '../assets/favicon.svg'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [user, setUser] = useState(null) // State to track the user's authentication status
  const navigate = useNavigate()

  // Use useEffect to set up the onAuthStateChanged observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setUser(user)
      } else {
        // User is signed out
        setUser(null)
      }
    })

    // Clean up the observer when the component unmounts
    return () => unsubscribe()
  }, [])

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth)
      console.log('User signed out')
      navigate('/Login')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return (
    <Box sx={{ flexGrow: 1, width: '100%' }}>
      <AppBar 
        position="static" 
        sx={{
          backgroundColor: 'white',  // Set background color to white
          color: 'black',  // Set text color to black
          boxShadow: 'none',  // Remove shadow
        }}
      >
        <Toolbar 
          sx={{
            display: 'flex', 
            justifyContent: 'center',  // Center content horizontally
            alignItems: 'center',  // Align vertically in the center
            width: '100%'
          }}
        >
          <img
            src={AppLogo}
            alt="App Logo"
            style={{
              width: '100px',
              height: '100px'
            }}
          />
          {user ? (
            // If user is logged in, show a logout button
            <Button color="inherit" onClick={handleLogout} sx={{ position: 'absolute', right: 20 }}>
              Logout
            </Button>
          ) : (
            // If user is not logged in, show a login button
            <Button color="inherit" onClick={() => (window.location.href = '/login')} sx={{ position: 'absolute', right: 20 }}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
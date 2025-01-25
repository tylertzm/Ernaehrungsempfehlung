import * as React from 'react'
import { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
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

  // Handle menu icon click, navigate to /History
  const handleMenuClick = () => {
    navigate('/History')
  }

  return (
    <Box sx={{ flexGrow: 1, width: '100%', maxWidth: 'xs', margin: '0 auto' }}>
      <AppBar position="static" sx={{ borderRadius: 0 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuClick} // Add the click handler here
          >
            <MenuIcon />
          </IconButton>
          <img
            src={AppLogo}
            alt="App Logo"
            style={{
              width: '50px',
              height: '50px'
            }}
          />
          {user ? (
            // If user is logged in, show a logout button
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            // If user is not logged in, show a login button
            <Button color="inherit" onClick={() => (window.location.href = '/login')}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
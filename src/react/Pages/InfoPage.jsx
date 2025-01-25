import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Stack, Typography, Box, IconButton } from '@mui/material'
import { ArrowDownward } from '@mui/icons-material'
import { keyframes } from '@mui/system'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const slideUp = keyframes`
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

const InfoPage = () => {
  const [clickCount, setClickCount] = useState(0) // State to track the number of clicks
  const navigate = useNavigate()

  // Function to handle the click behavior
  const handleArrowClick = () => {
    setClickCount(prev => prev + 1) // Increment the click count
    if (clickCount === 1) {
      navigate('/login') // Navigate to login on second click
    }
  }

  return (
    <Stack
      sx={{
        width: '100%',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        background: '#ffffff',
        animation: `${fadeIn} 1s ease-in-out`,
        position: 'relative', // Ensures the positioning of the arrow is relative to the Stack
      }}
    >
      {/* Conditionally render original or updated text */}
      {clickCount === 0 ? (
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            animation: `${slideUp} 1s ease-in-out`,
          }}
        >
          Snaptrack is the app for casual nutrition trackers.
        </Typography>
      ) : (
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' },
            marginTop: 1,
            animation: `${slideUp} 1.5s ease-in-out`,
          }}
        >
          Snap and track your micronutritional intake now
        </Typography>
      )}

      <Box
        sx={{
          width: '100%',
          height: '100%',
          animation: `${slideUp} 1.2s ease-in-out`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 2,
        }}
      >
        <Outlet />
      </Box>

      {/* Always display the arrow */}
      <Box
        sx={{
          position: 'absolute',
          animation: `${slideUp} 1.5s ease-in-out`,
        }}
      >
        <IconButton onClick={handleArrowClick}>
          <ArrowDownward sx={{ fontSize: 40 }} />
        </IconButton>
      </Box>
    </Stack>
  )
}

export default InfoPage
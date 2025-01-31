import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  Stack,
  Container,
  Paper,
  BottomNavigation,
  BottomNavigationAction
} from '@mui/material'
import {
  HealthAndSafety as HomeIcon,
  Timeline,
  Person4 as ProfileIcon
} from '@mui/icons-material'
import AppRoutes from './AppRoutes'
import Navbar from './Components/Navbar'

const borderRadius = 6

const AppLayout = () => {
  const location = useLocation()
  const navigate = useNavigate()

  let navigationIndex = 0
  if (location.pathname.startsWith('/Estimate')) navigationIndex = 1
  if (location.pathname.startsWith('/profile')) navigationIndex = 2

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        paddingTop: 5,
        paddingBottom: 5,
        width: '100%',
        height: '100%', // Full viewport height
        background: (theme) => theme.palette.background.default,
        overflow: 'hidden'
      }}
    >
      <Container
        maxWidth="xs"
        disableGutters
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%', // Full viewport height
          width: '100%',
          borderRadius: (theme) => theme.spacing(5),
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)', // Slightly stronger shadow
          background: (theme) => theme.palette.background.paper,
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        <Navbar />

        <Paper
          elevation={0}
          sx={{
            flex: '1 1 auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 2,
            borderRadius: (theme) => theme.spacing(borderRadius),
            background: (theme) => theme.palette.background.default,
            overflowY: 'auto',
            boxShadow: '0 2px 5px rgba(255, 255, 255, 0.1)', // Soft shadow
          }}
        >
          <AppRoutes />
        </Paper>

        <BottomNavigation
          showLabels
          value={navigationIndex}
          sx={{
            width: '100%',
            height: 56, // Fixed height for BottomNavigation
            borderTop: '1px solid rgba(255, 255, 255, 0.1)', // Lighter border for a subtle effect
            flexShrink: 0, // Prevent BottomNavigation from shrinking
            backgroundColor: '#1f1f1f', // Dark background for BottomNavigation
          }}
        >
          <BottomNavigationAction
            label="Home"
            icon={<HomeIcon />}
            onClick={() => navigate('/')}
            sx={{
              color: 'white',
              '&.Mui-selected': {
                color: '#ff4081', // Vibrant pink accent on active
              },
            }}
          />
          <BottomNavigationAction
            label="Estimate"
            icon={<Timeline />}
            onClick={() => navigate('/Estimate')}
            sx={{
              color: 'white',
              '&.Mui-selected': {
                color: '#ff4081', // Vibrant pink accent on active
              },
            }}
          />
          <BottomNavigationAction
            label="Profile"
            icon={<ProfileIcon />}
            onClick={() => navigate('/profile')}
            sx={{
              color: 'white',
              '&.Mui-selected': {
                color: '#ff4081', // Vibrant pink accent on active
              },
            }}
          />
        </BottomNavigation>
      </Container>
    </Stack>
  )
}

export default AppLayout
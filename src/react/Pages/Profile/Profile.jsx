import React from 'react'
import LogoutButton from './SignOut'
import {
  Stack,
  Typography,
  Container,
  Paper,
  BottomNavigation,
  BottomNavigationAction
} from '@mui/material'
import {
  Home as HomeIcon,
  Timeline as TimelineIcon,
  Person4 as ProfileIcon
} from '@mui/icons-material'
import AppLogo from '../../assets/favicon.svg';
import auth from '../../Hooks/firebase' // Import your firebase auth

const borderRadius = 6

const ProfilePage = ({ userEmail }) => {
  const handleSignOut = async () => {
    try {
      await auth.signOut() // Reset the firebase auth
      window.location.href = '/' // Redirect to home
    } catch (error) {
      console.error("Sign out error", error)
    }
  };

  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{
        width: '100vw',
        height: '100vh',
        paddingTop: theme => theme.spacing(2),
        paddingBottom: theme => theme.spacing(2),
        overflow: 'hidden'
      }}
    >
      <Container
        disableGutters
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          maxWidth: '480px',
          margin: '0 auto',
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          marginBottom={2}
        >
          <img
            src={AppLogo}
            alt="Snaptrack Logo"
            style={{
              width: '40px',
              height: '40px',
            }}
          />
          <Typography variant="h5" sx={{ ml: 1 }}>
            Snaptrack
          </Typography>
        </Stack>
        <Paper
          elevation={6}
          sx={{
            flex: '1 1 auto',
            display: 'flex',
            flexDirection: 'column',
            padding: 2,
            overflow: 'hidden',
            borderRadius: theme => theme.spacing(borderRadius),
            background: theme => theme.palette.grey[900],
          }}
        >
          <Stack
            flex="1 1 auto"
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{
              overflow: 'hidden',
              borderRadius: theme => theme.spacing(borderRadius),
              background: theme => theme.palette.background.paper,
            }}
          >
            <Stack
              flex="1 1 auto"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h3">
                Profile
              </Typography>
              <Typography variant="h6">
                Email: {userEmail}
              </Typography>
              <LogoutButton></LogoutButton>
            </Stack>
            <BottomNavigation
              showLabels
              value={0}
              sx={{
                width: '100%',
                position: 'sticky',
                bottom: 0
              }}
            >
              <BottomNavigationAction
                label="Home"
                icon={<HomeIcon />}
                href="/home"
              />
              <BottomNavigationAction
                label="Timeline"
                icon={<TimelineIcon />}
                href="/tracking"
              />
              <BottomNavigationAction
                label="Profile"
                icon={<ProfileIcon />}
                href="/profile"
              />
            </BottomNavigation>
          </Stack>
        </Paper>
      </Container>
    </Stack>
  )
}

export default ProfilePage
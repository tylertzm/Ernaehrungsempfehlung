import React from 'react';
import {
  Stack,
  Typography,
  Container,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  Button,
} from '@mui/material';
import {
  Home as HomeIcon,
  Timeline as TimelineIcon,
  Person4 as ProfileIcon,
} from '@mui/icons-material';
import AppLogo from '../../assets/favicon.svg';
import { Link } from 'react-router-dom';

const borderRadius = 6;

const LandingPage = () => (
  <Stack
    direction="row"
    justifyContent="center"
    sx={{
      width: '100vw',
      height: '100vh',
      paddingTop: theme => theme.spacing(2),
      paddingBottom: theme => theme.spacing(2),
      overflow: 'hidden',
    }}
  >
    <Container
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        maxWidth: '480px', // Ensures it doesn’t look overly large on larger screens
        margin: '0 auto', // Centers the container for larger screens
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
          alt="App Logo"
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
              <Link to="/login">
                <Button>Login</Button>
              </Link>
              <Link to="/register">
                <Button>Register</Button>
              </Link>
            </Typography>
          </Stack>
          <BottomNavigation
            showLabels
            value={0}
            sx={{
              width: '100%',
              position: 'sticky',
              bottom: 0,
            }}
          >
            <BottomNavigationAction
              label="Home"
              icon={<HomeIcon />}
              href="/"
            />
            <BottomNavigationAction
              label="Tracking"
              icon={<TimelineIcon />}
              href="/tracking"
            />
            <BottomNavigationAction
              label="Profile"
              icon={<ProfileIcon />}
            />
          </BottomNavigation>
        </Stack>
      </Paper>
    </Container>
  </Stack>
);

export default LandingPage
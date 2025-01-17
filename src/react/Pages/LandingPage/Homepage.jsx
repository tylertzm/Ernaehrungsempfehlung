import React from 'react';
import {
  Stack,
  Typography,
  Container,
  Card,
  CardContent,
  BottomNavigation,
  BottomNavigationAction,
  Fab,
} from '@mui/material';
import {
  Home as HomeIcon,
  Timeline as TimelineIcon,
  Person4 as ProfileIcon,
  Add as AddIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; // Für Navigation
import AppLogo from '../../assets/favicon.svg';

const Homepage = ({ user }) => {
  const navigate = useNavigate(); // Navigation initialisieren

  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundImage: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)', // Schöner Hintergrundverlauf
        overflow: 'hidden',
      }}
    >
      {/* Header und Hauptinhalt */}
      <Container
        disableGutters
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Header */}
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          marginBottom={4}
        >
          <img
            src={AppLogo}
            alt="Snaptrack Logo"
            style={{
              width: '80px', // Kleinere Bildgröße
              height: 'auto',
            }}
          />
          <Typography
            variant="h5"
            sx={{
              ml: 1,
              color: 'white', // Text in Weiß für besseren Kontrast
              fontWeight: 'bold',
            }}
          >
            Snaptrack
          </Typography>
        </Stack>

        {/* Hauptinhalt */}
        <Card
          elevation={8}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: 3,
            borderRadius: 4, // Runde Ecken
            background: 'white',
            textAlign: 'center',
            width: '90%',
            maxWidth: '400px',
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                color: '#333',
                fontWeight: 'bold',
              }}
            >
              Welcome, {user?.email || 'Guest'}!
            </Typography>
            <Typography variant="body1" sx={{ color: '#555' }}>
              {user
                ? 'You are successfully logged in! Explore your features below.'
                : 'Please log in to access your data.'}
            </Typography>

            {/* Add Button */}
            {user && (
              <Fab
                color="primary"
                sx={{ mt: 4 }}
                onClick={() => navigate('/tracking/upload')}
              >
                <AddIcon />
              </Fab>
            )}
          </CardContent>
        </Card>
      </Container>

      {/* Bottom Navigation */}
      <BottomNavigation
        showLabels
        sx={{
          width: '100%',
          position: 'fixed',
          bottom: 0,
          left: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Transparenter Hintergrund
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          sx={{ color: 'white' }}
          onClick={() => navigate('/home')}
        />
        <BottomNavigationAction
          label="Timeline"
          icon={<TimelineIcon />}
          sx={{ color: 'white' }}
          onClick={() => navigate('/tracking')}
        />
        <BottomNavigationAction
          label="Profile"
          icon={<ProfileIcon />}
          sx={{ color: 'white' }}
          onClick={() => navigate('/profile')}
        />
      </BottomNavigation>
    </Stack>
  );
};

export default Homepage;

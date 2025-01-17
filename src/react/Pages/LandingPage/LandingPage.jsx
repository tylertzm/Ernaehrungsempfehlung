import React from 'react';
import {
  Stack,
  Typography,
  Container,
  Paper,
  Button,
} from '@mui/material';
import AppLogo from '../../assets/favicon.svg';
import { Link } from 'react-router-dom';

const borderRadius = 6;

const LandingPage = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        width: '100vw',
        height: '100vh',
        padding: (theme) => theme.spacing(2),
        overflow: 'hidden',
        backgroundColor: (theme) => theme.palette.grey[100], // Set a light background color
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
        <Paper
          elevation={6}
          sx={{
            flex: '1 1 auto',
            display: 'flex',
            flexDirection: 'column',
            padding: 2,
            overflow: 'hidden',
            borderRadius: (theme) => theme.spacing(borderRadius),
            background: (theme) => theme.palette.grey[900], // Dark background for paper
          }}
        >
          {/* Logo Section */}
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{
              overflow: 'hidden',
              padding: (theme) => theme.spacing(3),
              background: (theme) => theme.palette.background.paper,
              borderRadius: (theme) => theme.spacing(borderRadius),
            }}
          >
            <img
              src={AppLogo}
              alt="App Logo"
              style={{
                width: '200px', // Adjusted for responsive size
                height: 'auto', // Maintain aspect ratio
              }}
            />
            <Typography variant="h4" textAlign="center">
              Snaptrack
            </Typography>
          </Stack>

          {/* Buttons Section */}
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{ marginTop: 3 }}
          >
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ maxWidth: '200px' }}
              component={Link}
              to="/login"
            >
              Login
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              sx={{ maxWidth: '200px' }}
              component={Link}
              to="/register"
            >
              Register
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Stack>
  );
};

export default LandingPage;

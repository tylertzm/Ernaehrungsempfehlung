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
import auth from '../../Hooks/firebase';
const borderRadius = 6;


const LandingPage = () => {
  const { user } = auth; // Get user state from custom hook

  return (
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
        
        <img
          src={AppLogo}
          alt="App Logo"
          style={{
            width: '400px', // Adjusted for responsive size
            height: 'auto',  // Maintain aspect ratio
          }}
        />
              <>
                <Button variant="contained" component={Link} to="/home">Login</Button>
                <br />
                <Button variant="contained" component={Link} to="/register">Register</Button>
              </>

          </Stack>
        </Paper>
      </Container>
    </Stack>
  );
};

export default LandingPage
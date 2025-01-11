import React, { useState } from 'react';
import {
  Stack,
  Typography,
  Container,
  Paper,
  Button,
  TextField,
  Snackbar,
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material'; // Added BottomNavigation and BottomNavigationAction imports
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../Hooks/firebase';
import AppLogo from '../../assets/favicon.svg';
import HomeIcon from '@mui/icons-material/Home'; // Added HomeIcon import
import TimelineIcon from '@mui/icons-material/Timeline'; // Added TimelineIcon import
import ProfileIcon from '@mui/icons-material/Person'; // Added ProfileIcon import

const borderRadius = 6;

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect or perform additional actions on successful login
    } catch (err) {
      setError(err.message);
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
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
              <Typography variant="h3">Login</Typography>
              <TextField
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                margin="normal"
              />
              <Button variant="contained" onClick={handleLogin} sx={{ mt: 2 }}>
                Login
              </Button>
              <Typography variant="body2" sx={{ mt: 2 }}>
                Don't have an account? <Link to="/register">Register</Link>
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
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={error}
      />
    </Stack>
  );
};

export default LoginPage;
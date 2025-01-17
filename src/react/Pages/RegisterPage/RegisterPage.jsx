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
} from '@mui/material';
import AppLogo from '../../assets/favicon.svg';
import HomeIcon from '@mui/icons-material/Home';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Hooks/firebase';

const borderRadius = 6;

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleRegister = async () => {
    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
      setOpenSnackbar(true);
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      setOpenSnackbar(true);
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Successfully registered!');
      window.location.href = '/dashboard'; // Redirect to another page
    } catch (err) {
      setError('Registration failed: ' + err.message);
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
        paddingTop: (theme) => theme.spacing(2),
        paddingBottom: (theme) => theme.spacing(2),
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
            borderRadius: (theme) => theme.spacing(borderRadius),
            background: (theme) => theme.palette.grey[900],
          }}
        >
          <Stack
            flex="1 1 auto"
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{
              overflow: 'hidden',
              borderRadius: (theme) => theme.spacing(borderRadius),
              background: (theme) => theme.palette.background.paper,
            }}
          >
            <Typography variant="h3">Register</Typography>
            <TextField
              label="Email Address"
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
            <Button
              variant="contained"
              onClick={handleRegister}
              sx={{ mt: 2 }}
              disabled={!email || password.length < 8}
            >
              Register
            </Button>
          </Stack>
        </Paper>
      </Container>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        message={error}
      />
    </Stack>
  );
};

export default RegisterPage;

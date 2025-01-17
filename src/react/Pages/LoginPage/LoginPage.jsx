import React, { useState } from 'react';
import {
  Stack,
  Typography,
  Container,
  Paper,
  Button,
  TextField,
  Snackbar,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'; // Added navigation logic
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Hooks/firebase';
import AppLogo from '../../assets/favicon.svg';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const navigate = useNavigate(); // For navigation

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful:', userCredential.user);
      navigate('/home'); // Redirect to the homepage
    } catch (err) {
      setError('Login failed: ' + err.message);
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
        padding: (theme) => theme.spacing(2),
        overflow: 'hidden',
      }}
    >
      <Container
        disableGutters
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '400px',
          margin: 'auto',
        }}
      >
        {/* Logo */}
        <Stack direction="row" justifyContent="center" alignItems="center" mb={2}>
          <img src={AppLogo} alt="App Logo" style={{ width: '40px', height: '40px' }} />
          <Typography variant="h5" sx={{ ml: 1 }}>
            Snaptrack
          </Typography>
        </Stack>

        {/* Login Form */}
        <Paper
          elevation={3}
          sx={{
            padding: 3,
            borderRadius: 3,
          }}
        >
          <Typography variant="h4" textAlign="center" mb={3}>
            Login
          </Typography>

          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleLogin}
            disabled={!email || !password}
          >
            Sign In
          </Button>

          {/* Back Button */}
          <Button
            component={Link}
            to="/"
            variant="outlined"
            fullWidth
            sx={{ mt: 1 }}
          >
            Back to Home
          </Button>

          <Typography variant="body2" textAlign="center" sx={{ mt: 2 }}>
            Don't have an account? <Link to="/register">Register</Link>
          </Typography>
        </Paper>
      </Container>

      {/* Snackbar for Error Messages */}
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

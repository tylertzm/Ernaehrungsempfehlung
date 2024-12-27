import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const LoginPage = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => alert('Erfolgreich eingeloggt'))
      .catch((error) => alert(`Fehler: ${error.message}`));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField label="Email" name="email" fullWidth margin="normal" />
        <TextField label="Password" name="password" type="password" fullWidth margin="normal" />
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </Container>
  );
};


export default LoginPage;

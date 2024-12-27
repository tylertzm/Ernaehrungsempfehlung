import React from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; 

const RegisterPage = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert('Registrierung erfolgreich!');
      })
      .catch((error) => {
        alert(`Fehler: ${error.message}`);
      });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Registrierung
      </Typography>
      <form onSubmit={handleRegister}>
        <TextField label="Email" name="email" fullWidth margin="normal" />
        <TextField label="Password" name="password" type="password" fullWidth margin="normal" />
        <Button type="submit" variant="contained" color="primary">
          Registrieren
        </Button>
      </form>
    </Container>
  );
};

export default RegisterPage;

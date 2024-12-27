import React from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';

const LandingPage = () => (
  <Container maxWidth={false} disableGutters>
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Grid item>
        <Typography variant="h3" gutterBottom>
          Willkommen zur Ernährungs-App
        </Typography>
        <Button variant="contained" color="primary" href="/login">
          Jetzt starten
        </Button>
      </Grid>
    </Grid>
  </Container>
);

export default LandingPage;

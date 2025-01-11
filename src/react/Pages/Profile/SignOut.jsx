import React from 'react';
import  auth  from '../../Hooks/firebase';  // Import auth from firebase.js
import { signOut } from 'firebase/auth';
import { Button } from '@mui/material';  // Import the Button component from MUI

const LogoutButton = () => {

  const handleSignOut = async () => {
    try {
      // Sign the user out
      await signOut(auth);
      console.log('User signed out successfully');
      // Optionally redirect or update UI after signing out
      window.location.href = '/login';  // Example redirection to login page
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <Button 
      variant="contained" 
      color="primary" 
      onClick={handleSignOut} 
      style={{ marginTop: '20px' }}
    >
      Sign Out
    </Button>
  );
};

export default LogoutButton
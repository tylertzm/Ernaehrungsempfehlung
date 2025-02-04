<<<<<<< HEAD
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { CssBaseline } from '@mui/material';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Hooks/firebase"; // Import the configured Firebase auth instance
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppLayout from './AppLayout';
=======
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom' // Import Router
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import AppLayout from './AppLayout'
import { AuthProvider } from './Hooks/AuthProvider' // Import AuthProvider
>>>>>>> main

// Create a custom theme
const theme = createTheme({
  components: {
    MuiCssBaseline: {
<<<<<<< HEAD
      styleOverrides: (defaultTheme) => ({
=======
      styleOverrides: {
>>>>>>> main
        html: {
          width: '100%',
          height: '100%',
        },
        body: {
          width: '100%',
          height: '100%',
<<<<<<< HEAD
          background: defaultTheme.palette.grey[200],
        },
        '#app': {
          width: '100%',
          height: '100%',
        },
      }),
    },
  },
});

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user); // Update state when the auth status changes
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppLayout isLoggedIn={isLoggedIn} /> {/* Pass login state to AppLayout */}
    </ThemeProvider>
  );
};

// Render the app
const root = createRoot(document.getElementById('app'));
root.render(<App />);
=======
          background: '#f5f5f5'
        },
        '#app': {
          width: '100%',
          height: '100%'
        }
      }
    }
  }
})

// Main App component
const App = () => (
  <AuthProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppLayout />
      </Router>
    </ThemeProvider>
  </AuthProvider>
)
export default App
>>>>>>> main

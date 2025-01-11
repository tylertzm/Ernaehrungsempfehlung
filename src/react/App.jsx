/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'; // Added useState and useEffect
import { createRoot } from 'react-dom/client';

import { CssBaseline } from '@mui/material';
import { onAuthStateChanged } from "firebase/auth";
import auth from "./Hooks/firebase"; // Import the configured auth instance

import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppLayout from './AppLayout';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: defaultTheme => ({
        html: {
          width: '100%',
          height: '100%'
        },
        body: {
          width: '100%',
          height: '100%',
          background: defaultTheme.palette.grey[200]
        },
        '#app': {
          width: '100%',
          height: '100%'
        }
      })
    }
  }
});

export default App;

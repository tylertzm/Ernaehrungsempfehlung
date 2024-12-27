import React from 'react';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import RootRoutes from './Routes/RootRoutes';

// Theme Setup
const theme = createTheme({
  typography: {
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
  },
  palette: {
    primary: { main: "#05F782", gradient: "linear-gradient(to bottom, #05F782, #06C96B)" },
    secondary: { main: "#EA4A4A" },
    background: { default: "#05F782", primary: "#05F782" },
    text: { primary: "#000000", secondary: "#EA4A4A" },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { width: "100%", height: "100%" },
        body: { width: "100%", height: "100%", overflow: "hidden" },
        "#app": { display: "flex", width: "100%", height: "100%", overflow: "hidden" },
      },
    },
  },
});

// Export App as default
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RootRoutes />
    </ThemeProvider>
  );
}

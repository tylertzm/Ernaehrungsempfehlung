import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom' // Import Router
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import AppLayout from './AppLayout'
import { AuthProvider } from './Hooks/AuthProvider' // Import AuthProvider

// Create a custom theme
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          width: '100%',
          height: '100%'
        },
        body: {
          width: '100%',
          height: '100%',
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

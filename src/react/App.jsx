/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react' // Added useState and useEffect
import { createRoot } from 'react-dom/client'
import { create(theme), (theme)Provider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { onAuthStateChanged } from 'firebase/auth'
import auth from './Hooks/firebase' // Import the configured auth instance

import AppLayout from './AppLayout'

const (theme) = create(theme)({
  components: {
    MuiCssBaseline: {
      styleOverrides: default(theme) => ({
        html: {
          width: '100%',
          height: '100%'
        },
        body: {
          width: '100%',
          height: '100%',
          background: default(theme).palette.grey[200]
        },
        '#app': {
          width: '100%',
          height: '100%'
        }
      })
    }
  }
})

export default App

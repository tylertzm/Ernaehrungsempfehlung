import React from 'react'

import { Outlet } from 'react-router-dom'

import { Stack, Typography } from '@mui/material'

const InfoPage = () => (
  <Stack
    sx={{
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 2
    }}
  >
    <Typography
      variant="h4"
    >
      Snaptrack is the app for casual nutrition trackers.
    </Typography>
    <Stack
      width="100%"
      height="100%"
    >
      {/* Sub-Routes of /profile like /profile/settings will mount here */}
      <Outlet />
    </Stack>
  </Stack>
)

export default InfoPage

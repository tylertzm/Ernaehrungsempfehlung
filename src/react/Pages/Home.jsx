import React from 'react'

import { Stack, Typography } from '@mui/material'
import dayjs from 'dayjs'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'

const Home = () => (
  <Stack
    sx={{
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 2
    }}
  >

  <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoItem>
        <DateCalendar defaultValue={dayjs('2025-01-17')} />
      </DemoItem>
  </LocalizationProvider>

    <Typography
      variant="h4"
    >

    </Typography>
  </Stack>
)

export default Home

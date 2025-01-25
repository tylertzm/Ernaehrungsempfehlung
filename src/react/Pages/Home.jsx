import React, { useState } from 'react'

import { Stack, Typography } from '@mui/material'
import dayjs from 'dayjs'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'

const Home = () => {
  // State to store the selected date
  const [selectedDate, setSelectedDate] = useState(dayjs('2025-01-17'))

  // Handle the date change event
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate)
  }

  return (
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
        <DemoItem label="History">
          <DateCalendar
            defaultValue={selectedDate}
            onChange={handleDateChange} // Update state on date change
          />
        </DemoItem>
      </LocalizationProvider>

      {/* Display the selected date */}
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        {selectedDate.format('YYYY-MM-DD')}
      </Typography>
    </Stack>
  )
}

export default Home

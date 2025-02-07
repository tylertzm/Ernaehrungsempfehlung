import React, { useState, useEffect } from 'react'
import { Stack, Typography, IconButton, Box, Slider } from '@mui/material'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import { getFirestore, collection, query, where, getDocs, doc, deleteDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage, ref, deleteObject } from 'firebase/storage'
import { ArrowForward, Delete } from '@mui/icons-material'

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs())
  const [estimations, setEstimations] = useState([])
  const [error, setError] = useState(null)
  const [showEstimations, setShowEstimations] = useState(false)
  const [totalIron, setTotalIron] = useState(0)
  const [totalMg, setTotalMg] = useState(0)
  const [sliderIndex, setSliderIndex] = useState(0) // Index to control slider position

  const auth = getAuth()
  const userEmail = auth.currentUser?.email

  const fetchEstimations = async (date) => {
    if (!userEmail) {
      setError('User is not authenticated.')
      return
    }

    try {
      const db = getFirestore()
      const startOfDay = date.startOf('day').toISOString()
      const endOfDay = date.endOf('day').toISOString()

      const q = query(
        collection(db, 'estimations'),
        where('email', '==', userEmail),
        where('timestamp', '>=', startOfDay),
        where('timestamp', '<=', endOfDay)
      )

      const querySnapshot = await getDocs(q)

      const docsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))

      setEstimations(docsData)

      const totalIronConsumed = docsData.reduce((acc, doc) => acc + (doc.estimation[1] || 0), 0)
      const totalMgConsumed = docsData.reduce((acc, doc) => acc + (doc.estimation[2] || 0), 0)

      setTotalIron(totalIronConsumed)
      setTotalMg(totalMgConsumed)
    } catch (err) {
      console.error('Error fetching estimations:', err)
      setError('Error fetching estimations.')
    }
  }

  useEffect(() => {
    fetchEstimations(selectedDate)
  }, [selectedDate, userEmail])

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate)
    setShowEstimations(false)
  }

  const handleViewEstimations = () => {
    setShowEstimations(true)
  }

  const handleBackToCalendar = () => {
    setShowEstimations(false)
  }

  const handleDeleteEstimation = async (id, imageUrl) => {
    try {
      const db = getFirestore()
      const storage = getStorage()
      const imageRef = ref(storage, imageUrl)
      await deleteObject(imageRef)
      const estimationDoc = doc(db, 'estimations', id)
      await deleteDoc(estimationDoc)
      setEstimations(estimations.filter((estimation) => estimation.id !== id))
      alert('Estimation and image deleted successfully!')
    } catch (error) {
      console.error('Error deleting estimation or image:', error)
      alert('Failed to delete estimation or image.')
    }
  }

  // Handle slider change
  const handleSliderChange = (event, newValue) => {
    setSliderIndex(newValue)
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        backgroundColor: '#ffffff',
        boxSizing: 'border-box'
      }}
    >
      {/* Gallery Slider for Iron and Magnesium */}
      <Box sx={{ width: '80%', marginBottom: 4, position: 'relative', paddingTop: 2}}>
        <Slider
          value={sliderIndex}
          onChange={handleSliderChange}
          min={0}
          max={1}
          step={1}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => (value === 0 ? 'Iron' : 'Magnesium')}
          sx={{
            color: '#003366',
            '& .MuiSlider-rail': {
              backgroundColor: '#eeeeee',
            },
            '& .MuiSlider-thumb': {
              backgroundColor: '#003366',
            },
          }}
        />

        {/* Displaying Total Iron or Magnesium based on slider index */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {sliderIndex === 0 ? (
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                fontSize: '2rem',
                color: '#003366',
                background: 'linear-gradient(45deg, #003366, #000000)',
                WebkitBackgroundClip: 'text',
                padding: '10px 20px',
                borderRadius: '10px',
                textAlign: 'center',
              }}
            >
              {totalIron.toFixed(2)} mg of iron
            </Typography>
          ) : (
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                fontSize: '2rem',
                color: '#003366',
                background: 'linear-gradient(45deg, #003366, #000000)',
                WebkitBackgroundClip: 'text',
                padding: '10px 20px',
                borderRadius: '10px',
                textAlign: 'center',
              }}
            >
              {totalMg.toFixed(2)} mg of magnesium
            </Typography>
          )}
        </Box>
      </Box>

      {/* Calendar Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          height: 'calc(100% - 100px)',
          overflow: 'hidden',
        }}
      >
        {!showEstimations && (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              defaultValue={selectedDate}
              onChange={handleDateChange}
              sx={{
                backgroundColor: '#ffffff',
                color: '#000000',
                borderRadius: 2,
                '& .MuiDayPickerDay-root': {
                  color: '#000000',
                },
                '& .Mui-selected': {
                  backgroundColor: '#000000',
                  color: '#ffffff',
                },
                '& .MuiDayPickerDay-root:hover': {
                  backgroundColor: '#444444',
                },
                '& .MuiDayPickerDay-root.Mui-disabled': {
                  color: '#000000',
                },
              }}
            />
          </LocalizationProvider>
        )}

        {/* View Estimations Button */}
        {!showEstimations && (
          <Box
            sx={{
              marginTop: 2,
              padding: 2,
              backgroundColor: '#000000',
              color: '#fff',
              cursor: 'pointer',
              borderRadius: 2,
              boxShadow: 3,
              '&:hover': {
                boxShadow: 6,
                transform: 'scale(1.05)',
              },
            }}
            onClick={handleViewEstimations}
          >
            <Typography
              variant="body2"
              sx={{
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              View Estimations 📝
              <ArrowForward sx={{ marginLeft: 1 }} />
            </Typography>
          </Box>
        )}

        {/* Estimations */}
        {showEstimations && (
          <Box
            sx={{
              width: '100%',
              height: '100%',
              padding: 3,
              overflowY: 'auto',
              cursor: 'pointer',
              backgroundColor: '#ffffff',
              boxShadow: 3,
              borderRadius: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
            onClick={handleBackToCalendar}
          >
            <Typography
              variant="h6"
              sx={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: '1.25rem',
                marginBottom: 2,
              }}
            >
              back - {selectedDate.format('YYYY-MM-DD')}:
            </Typography>
            <Stack
              spacing={2}
              sx={{
                cursor: 'default',
                flexGrow: 1,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {estimations.length === 0 ? (
                <Typography sx={{ textAlign: 'center', color: '#777' }}>
                  No Estimations found for this date.
                </Typography>
              ) : (
                estimations.map((doc) => (
                  <Box
                    key={doc.id}
                    sx={{
                      padding: 2,
                      borderRadius: 2,
                      boxShadow: 3,
                      backgroundColor: '#f3f3f3',
                      textAlign: 'center',
                    }}
                  >
                    <img
                      src={doc.imageUrl}
                      alt="Uploaded Document"
                      style={{
                        width: '100%',
                        maxWidth: '300px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                        marginBottom: '1rem',
                      }}
                    />
                    <Typography variant="body2" sx={{ color: '#333' }}>
                      Weight (g): {doc.estimation[0]?.toFixed(2)}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#333' }}>
                      Iron (mg): {doc.estimation[1]?.toFixed(3)}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#333' }}>
                      Magnesium (mg): {doc.estimation[2]?.toFixed(3)}
                    </Typography>
                    <IconButton
                      onClick={() => handleDeleteEstimation(doc.id, doc.imageUrl)}
                      sx={{ color: 'red', marginTop: 1 }}
                    >
                      <Delete />
                    </IconButton>
                  </Box>
                ))
              )}
            </Stack>
          </Box>
        )}
      </Box>
    </Box>
    
  )
  
}

export default Home
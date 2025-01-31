import React, { useState, useEffect } from 'react'
import { Stack, Typography, IconButton } from '@mui/material'
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
  const [Estimations, setEstimations] = useState([])
  const [error, setError] = useState(null)
  const [showEstimations, setShowEstimations] = useState(false)
  const [totalIron, setTotalIron] = useState(0) // To store the total iron consumption

  const auth = getAuth()
  const userEmail = auth.currentUser?.email

  // Fetch Estimations based on the selected date
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
        collection(db, 'users'),
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

      // Calculate the total iron from all Estimations
      const totalIronConsumed = docsData.reduce((acc, doc) => acc + (doc.estimation[1] || 0), 0)
      setTotalIron(totalIronConsumed)
    } catch (err) {
      console.error('Error fetching Estimations:', err)
      setError('Error fetching Estimations.')
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

  // Delete an estimation from Firestore and its associated image from Firebase Storage
  const handleDeleteEstimation = async (id, imageUrl) => {
    try {
      const db = getFirestore()

      // Delete image from Firebase Storage
      const storage = getStorage()
      const imageRef = ref(storage, imageUrl) // Reference to the image in Firebase Storage
      await deleteObject(imageRef) // Delete the image

      // Now delete the document from Firestore
      const estimationDoc = doc(db, 'users', id) // Reference to the specific estimation document
      await deleteDoc(estimationDoc) // Delete the document
      setEstimations(Estimations.filter((estimation) => estimation.id !== id)) // Remove from the UI

      alert('Estimation and image deleted successfully!')
    } catch (error) {
      console.error('Error deleting estimation or image:', error)
      alert('Failed to delete estimation or image.')
    }
  }

  return (
    <Stack
      sx={{
        width: '100%',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        overflowY: 'auto',
        backgroundColor: '#ffffff' // Ensure the background is always white
      }}
    >
      {/* Display total iron consumption */}
      <Typography
        variant="h2"
        sx={{
          fontWeight: 'bold',
          fontSize: '1.5rem',
          color: '#003366', // Dark blue color
          WebkitBackgroundClip: 'text',
          padding: '10px 20px',
          borderRadius: '10px',
          marginBottom: 2
        }}
      >
        {totalIron.toFixed(2)}
        mg of iron tracked.
      </Typography>

      {/* Calendar Component */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          defaultValue={selectedDate}
          onChange={handleDateChange}
          sx={{
            backgroundColor: '#ffffff',
            color: '#000000',
            '& .MuiDayPickerDay-root': {
              color: '#000000'
            },
            '& .Mui-selected': {
              backgroundColor: '#000000',
              color: '#ffffff'
            },
            '& .MuiDayPickerDay-root:hover': {
              backgroundColor: '#444444'
            },
            '& .MuiDayPickerDay-root.Mui-disabled': {
              color: '#000000'
            }
          }}
        />
      </LocalizationProvider>

      {/* View Estimations Button */}
      {!showEstimations && (
        <Stack
          spacing={3}
          width="100%"
          maxWidth={400}
          textAlign="center"
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
              transform: 'scale(1.05)'
            }
          }}
          onClick={handleViewEstimations}
        >
          <Typography
            variant="body2"
            sx={{
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            View Estimations 📝
            <ArrowForward sx={{ marginLeft: 1 }} />
          </Typography>
        </Stack>
      )}

      {/* Estimations List */}
      {showEstimations && (
        <Stack
          spacing={3}
          width="100%"
          height="100%"
          onClick={handleBackToCalendar}
          sx={{
            padding: 3,
            overflowY: 'auto',
            cursor: 'pointer',
            backgroundColor: '#ffffff',
            boxShadow: 3,
            borderRadius: 2
          }}
        >
          <Typography variant="h6" sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.25rem' }}>
            Estimations for
            {selectedDate.format('YYYY-MM-DD')}
            :
          </Typography>
          <Stack
            spacing={2}
            sx={{
              cursor: 'default'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {Estimations.length === 0 ? (
              <Typography sx={{ textAlign: 'center', color: '#777' }}>
                No Estimations found for this date.
              </Typography>
            ) : (
              Estimations.map(() => (
                <Stack
                  key={doc.id}
                  spacing={2}
                  sx={{
                    padding: 2,
                    borderRadius: 2,
                    boxShadow: 2,
                    backgroundColor: '#f3f3f3',
                    textAlign: 'center'
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
                      marginBottom: '1rem'
                    }}
                  />
                  <Typography variant="body2" sx={{ color: '#333' }}>
                    Weight (g):
                    {
                    doc.estimation[0]?.toFixed(2)
                    }
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#333' }}>
                    Iron (mg):
                    {
                    doc.estimation[1]?.toFixed(3)
                    }
                  </Typography>

                  <IconButton
                    onClick={() => handleDeleteEstimation(doc.id, doc.imageUrl)}
                    sx={{ color: 'red', marginTop: 1 }}
                  >
                    <Delete />
                  </IconButton>
                </Stack>
              ))
            )}
          </Stack>
          <Typography
            variant="body2"
            sx={{
              marginTop: 2, textAlign: 'center', color: 'gray', cursor: 'pointer'
            }}
            onClick={handleBackToCalendar}
          >
            Click here to return to the calendar.
          </Typography>
        </Stack>
      )}
    </Stack>
  )
}

export default Home
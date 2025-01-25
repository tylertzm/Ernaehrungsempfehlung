import React, { useState, useEffect } from 'react';
import { Stack, Typography, Paper, IconButton } from '@mui/material';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // For the back arrow

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs()); // Set to current date
  const [documents, setDocuments] = useState([]);  // To store the fetched documents for the selected date
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showDocuments, setShowDocuments] = useState(false); // Track whether to show documents or calendar

  const auth = getAuth();
  const userEmail = auth.currentUser?.email; // Get the authenticated user's email

  // Fetch documents based on the selected date
  const fetchDocuments = async (date) => {
    if (!userEmail) {
      setError('User is not authenticated.');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const db = getFirestore();
      const startOfDay = date.startOf('day').toISOString();
      const endOfDay = date.endOf('day').toISOString();
      
      const q = query(
        collection(db, 'users'),
        where('email', '==', userEmail),
        where('timestamp', '>=', startOfDay),
        where('timestamp', '<=', endOfDay)
      );
      
      const querySnapshot = await getDocs(q);
      
      const docsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setDocuments(docsData);
    } catch (err) {
      console.error('Error fetching documents:', err);
      setError('Error fetching documents.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDocuments(selectedDate);  // Fetch documents when component mounts or selectedDate changes
  }, [selectedDate, userEmail]);

  // Handle date change
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);  // Update selected date
    setShowDocuments(false);   // Hide documents and go back to the calendar view
  };

  // Handle showing documents view
  const handleShowDocuments = () => {
    setShowDocuments(true);    // Show documents
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Stack
      sx={{
        width: '100%',
        height: '100vh',  // Full viewport height to enable scrolling
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        overflowY: 'auto',  // Allow scrolling if content exceeds the viewport
      }}
    >
      {showDocuments ? (
        // If we are showing documents, render the documents
        <Stack spacing={2} width="100%">
          <IconButton onClick={() => setShowDocuments(false)} sx={{ marginBottom: 2 }}>
            <ArrowBackIcon />
          </IconButton>

          <Typography variant="h6">Documents for {selectedDate.format('YYYY-MM-DD')}:</Typography>
          {documents.length === 0 ? (
            <Typography>No documents found for this date.</Typography>
          ) : (
            <Stack spacing={2}>
              {documents.map((doc) => (
                <Stack key={doc.id} direction="column" spacing={1}>
                  {/* Directly display the image with size restrictions */}
                  <Typography variant="body2">Image:</Typography>
                  <img
                    src={doc.imageUrl}
                    alt="Uploaded Document"
                    style={{
                      width: '70px',      // Fixed width of 70px
                      height: '70px',     // Fixed height of 70px
                      objectFit: 'cover', // Ensures the image fits within the specified dimensions without distorting
                      borderRadius: '8px' // Optional, if you want rounded corners
                    }}
                  />

                  {/* Display Estimation */}
                  <Typography variant="body2">Estimation:</Typography>
                  <pre>{JSON.stringify(doc.estimation, null, 2)}</pre>
                </Stack>
              ))}
            </Stack>
          )}
        </Stack>
      ) : (
        // If we are in calendar view, show the calendar
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            defaultValue={selectedDate}
            onChange={handleDateChange} // Update state on date change
          />
        </LocalizationProvider>
      )}

      {!showDocuments && (
        // Only show this if we are in calendar view
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          Selected Date: {selectedDate.format('YYYY-MM-DD')}
        </Typography>
      )}

      {/* Show button to show documents */}
      {!showDocuments && (
        <Paper
          sx={{
            marginTop: 2,
            padding: 2,
            width: '100%',
            maxHeight: 400,
            overflowY: 'auto',
            textAlign: 'center',
            backgroundColor: '#f5f5f5',
            cursor: 'pointer',
          }}
          onClick={handleShowDocuments}
        >
          <Typography variant="h6">Click here to view documents</Typography>
        </Paper>
      )}
    </Stack>
  );
};

export default Home;
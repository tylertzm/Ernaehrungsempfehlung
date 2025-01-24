import React, { useEffect, useState } from 'react'
import {
  Stack,
  Typography,
  Container,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material'
import {
  Home as HomeIcon,
  Timeline as TimelineIcon,
  Person4 as ProfileIcon,
} from '@mui/icons-material'
import AppLogo from '../../assets/favicon.svg'
import { Link } from 'react-router-dom'
import { getDownloadURL, listAll, ref } from 'firebase/storage'
import storage from '../../Hooks/storage' // Adjust the import path as needed

const borderRadius = 6

const TrackingPage = ({ userEmail }) => {
  const [imgUrls, setImgUrls] = useState([]) // State to store image URLs

  // Fetch images from Firebase Storage on component mount
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imagesRef = ref(storage, 'files') // Reference to the 'files' folder
        const res = await listAll(imagesRef) // List all files in the folder
        const urls = await Promise.all(
          res.items.map((item) => getDownloadURL(item)) // Get download URLs for each file
        )
        setImgUrls(urls) // Update state with the fetched URLs
      } catch (error) {
        console.error('Error fetching images:', error)
      }
    }

    fetchImages()
  }, [])

  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{
        width: '100vw',
        height: '100vh',
        paddingTop: (theme) => theme.spacing(2),
        paddingBottom: (theme) => theme.spacing(2),
        overflow: 'hidden',
      }}
    >
      <Container
        disableGutters
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          maxWidth: '480px',
          margin: '0 auto',
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          marginBottom={2}
        >
          <img
            src={AppLogo}
            alt="Snaptrack Logo"
            style={{
              width: '40px',
              height: '40px',
            }}
          />
          <Typography variant="h5" sx={{ ml: 1 }}>
            Snaptrack
          </Typography>
        </Stack>
        <Paper
          elevation={6}
          sx={{
            flex: '1 1 auto',
            display: 'flex',
            flexDirection: 'column',
            padding: 2,
            overflow: 'hidden',
            borderRadius: (theme) => theme.spacing(borderRadius),
            background: (theme) => theme.palette.grey[900],
          }}
        >
          <Stack
            flex="1 1 auto"
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{
              overflow: 'hidden',
              borderRadius: (theme) => theme.spacing(borderRadius),
              background: (theme) => theme.palette.background.paper,
            }}
          >
            <Stack
              flex="1 1 auto"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h3">Tracking History</Typography>

              <Link to="/tracking/upload" style={{ textDecoration: 'none' }}>
                <button
                  style={{
                    padding: '10px 20px',
                    backgroundColor: '#1976d2',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '4px',
                  }}
                >
                  Upload Image
                </button>
              </Link>
            </Stack>
            <Stack
              flex="1 1 auto"
              justifyContent="center"
              alignItems="center"
              sx={{ marginTop: 2 }}
            >
              <Typography variant="h6">Gallery</Typography>
              <Stack
                direction="row"
                spacing={1}
                sx={{ flexWrap: 'wrap', justifyContent: 'center', marginTop: 1 }}
              >
                {/* Render images from Firebase Storage */}
                {imgUrls.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`Uploaded ${index}`}
                    style={{
                      width: '100px',
                      height: '100px',
                      objectFit: 'cover',
                      borderRadius: '4px',
                    }}
                  />
                ))}
              </Stack>
            </Stack>
            <BottomNavigation
              showLabels
              value={0}
              sx={{
                width: '100%',
                position: 'sticky',
                bottom: 0,
              }}
            >
              <BottomNavigationAction
                label="Home"
                icon={<HomeIcon />}
                href="/home"
              />
              <BottomNavigationAction
                label="Timeline"
                icon={<TimelineIcon />}
                href="/tracking"
              />
              <BottomNavigationAction
                label="Profile"
                icon={<ProfileIcon />}
                href="/profile"
              />
            </BottomNavigation>
          </Stack>
        </Paper>
      </Container>
    </Stack>
  )
}

export default TrackingPage

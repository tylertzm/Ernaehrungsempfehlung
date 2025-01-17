import React, { useRef, useState } from 'react'
import {
  Stack,
  Typography,
  Container,
  Card,
  CardContent,
  BottomNavigation,
  BottomNavigationAction,
  Fab, // Importing Floating Action Button
  Link // Importing Link component
} from '@mui/material'
import {
  Home as HomeIcon,
  Timeline as TimelineIcon,
  Person4 as ProfileIcon,
  ArrowDropDown as ArrowDropDownIcon, // Importing the down arrow icon
  Add as AddIcon, // Importing the plus icon
  CloudUpload as UploadIcon,
} from '@mui/icons-material'
import AppLogo from '../../assets/favicon.svg'

const borderRadius = 6

const Homepage = ({ userEmail }) => {
  const galleryItems = [
    { id: 1, text: 'Post 1' },
    { id: 2, text: 'Post 2' },
    { id: 3, text: 'Post 3' }
  ] // Updated to include text for each post
  const scrollContainerRef = useRef(null)

  const handleUploadClick = () => {
    // Logic to open the FileUpload component can be added here
    console.log("Upload button clicked")
  }

  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{
        width: '100vw',
        height: '100vh',
        paddingTop: (theme) => theme.spacing(2),
        paddingBottom: (theme) => theme.spacing(2),
        overflow: 'hidden'
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
          margin: '0 auto'
        }}
      >
        {/* App Header */}
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
              height: '40px'
            }}
          />
          <Typography variant="h5" sx={{ ml: 1 }}>
            Snaptrack
          </Typography>
        </Stack>

        {/* Main Content */}
        <Card
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
          <CardContent
            sx={{
              flex: '1 1 auto',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
              borderRadius: (theme) => theme.spacing(borderRadius),
              background: (theme) => theme.palette.background.paper,
            }}
          >
            <Stack flex="1 1 auto" justifyContent="center" alignItems="center">
              <Typography variant="h5">
                Hello, {userEmail || 'Guest'}!
              </Typography>
            </Stack>

            {/* New Container for Iron Left Message */}
            <Container
              sx={{
                marginTop: 2,
                textAlign: 'center',
                border: '3px solid', // Added border
                padding: 1 // Added padding for better appearance
              }}
            >
              <Typography variant="h4">X g of iron left this week</Typography>
            </Container>
            {/* Down Arrow */}
            <Stack paddingTop={2} direction="row" alignItems="center" spacing={1}>
              <ArrowDropDownIcon sx={{ fontSize: 40 }} />
              <Typography variant="h6">Check My Goals</Typography>
            </Stack>

            {/* Gallery Section */}
            <Stack
              flex="1 1 auto"
              justifyContent="center"
              alignItems="center"
              sx={{
                marginTop: 2,
                width: '100%' // Make sure stack takes full width
              }}
            >
              {/* Gallery */}
              <Stack
                spacing={1}
                sx={{
                  marginTop: 1,
                  width: '100%', // Take full width of parent
                  maxWidth: '100%', // Ensure it doesn't overflow
                  px: 2 // Add some padding on the sides
                }}
              >
                {galleryItems.map((item) => (
                  <Card
                    key={item.id}
                    sx={{
                      width: '100%', // Take full width of parent stack
                      height: 80,
                      backgroundColor: 'grey.300',
                      margin: '5px 0',
                      boxSizing: 'border-box',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Typography>{item.text}</Typography>
                  </Card>
                ))}
              </Stack>
            </Stack>

            <Fab size="medium" color="primary" aria-label="add">
              <Link href="/tracking/upload" passHref style={{ display: 'flex', padding: 0, margin: 0 }}>
                <AddIcon style={{ color: 'white' }} />
              </Link>
            </Fab>
            {/* Bottom Navigation */}
            <BottomNavigation
              showLabels
              value={0}
              sx={{
                width: '100%',
                position: 'sticky',
                bottom: 0
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
          </CardContent>
        </Card>
      </Container>
    </Stack>
  )
}

export default Homepage
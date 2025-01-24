// src/components/Timeline.js
import React, { useState } from 'react'
import { Stack, Typography, Button, Input } from '@mui/material'
import uploadImageAndGetEstimation from '../Hooks/estimation' // Import the function

const Timeline = () => {
  const [image, setImage] = useState(null)
  const [estimation, setEstimation] = useState(null)
  const [error, setError] = useState('')

  // Handle file change
  const handleFileChange = (e) => {
    setImage(e.target.files[0])
  }

  // Handle file upload using fetch from estimate.js
  const handleUpload = async () => {
    if (!image) {
      setError('Please select an image to upload.')
      return
    }

    try {
      const result = await uploadImageAndGetEstimation(image)
      setEstimation(result)
      setError('')
    } catch (err) {
      setError(err.message)
      setEstimation(null)
    }
  }

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Upload an Image
      </Typography>

      {/* Hidden file input triggered by button */}
      <Input
        type="file"
        inputProps={{ accept: 'image/*' }}
        onChange={handleFileChange}
        sx={{ display: 'none' }}
        id="upload-file"
      />
      <label htmlFor="upload-file">
        <Button variant="contained" component="span">
          Choose File
        </Button>
      </label>

      <Button
        variant="contained"
        onClick={handleUpload}
        sx={{ marginTop: '10px' }}
      >
        Upload
      </Button>

      {error && <Typography color="error">{error}</Typography>}

      {estimation && (
        <div style={{ marginTop: '20px' }}>
          <Typography variant="h6">Estimation Results</Typography>
          <pre>{JSON.stringify(estimation, null, 2)}</pre>
        </div>
      )}
    </Stack>
  )
}

export default Timeline

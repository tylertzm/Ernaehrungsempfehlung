import React, { useState, useEffect } from 'react'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { collection, addDoc } from 'firebase/firestore'
import { Button, CircularProgress, Typography, Alert } from '@mui/material'
import { FileUpload, Error } from '@mui/icons-material'
import storage from '../Hooks/storage'
import firestore from '../Hooks/firestore'
import auth from '../Hooks/firebase'
import uploadImageAndGetEstimation from '../Hooks/estimation'

const Estimate = () => {
  const [image, setImage] = useState(null)
  const [estimation, setEstimation] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [imagePreview, setImagePreview] = useState(null) // New state for image preview

  const userEmail = auth.currentUser?.email

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0]

    // Validate file type (ensure it's an image)
    if (selectedImage && selectedImage.type.startsWith('image/')) {
      setImage(selectedImage)
      setImagePreview(URL.createObjectURL(selectedImage)) // Set the preview URL
    } else {
      alert("Please select a valid image file.")
      setImage(null) // Reset the image if it's not a valid image
      setImagePreview(null) // Reset the preview
    }
  }

  const handleUploadAndAddData = async (image, userEmail) => {
    try {
      if (!image || !userEmail) {
        throw new Error("No image selected or user is not authenticated")
      }

      setLoading(true)
      setError(null)

      const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
      const folderName = userEmail
      const imageName = `${timestamp}.jpg`
      const storageRef = ref(storage, `${folderName}/${imageName}`)

      // Upload image to Firebase storage
      await uploadBytes(storageRef, image)
      const downloadURL = await getDownloadURL(storageRef) // Get the download URL after uploading

      // Use the downloadURL for the image preview
      setImagePreview(downloadURL) // Set the downloadURL as the image preview

      // Get the estimation from the image (iron, calories, etc.)
      const result = await uploadImageAndGetEstimation(image)

      setEstimation(result)

      // Here we assume that the result contains the estimated iron value (in mg)
      const estimatedIron = result?.iron || 0

      // Save the data in Firestore
      await addDoc(collection(firestore, 'users'), {
        email: userEmail,
        imageUrl: downloadURL,
        timestamp,
        estimation: result,
        ironEstimation: estimatedIron,
      })
    } catch (error) {
      setError(error.message)
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (image && userEmail) {
      await handleUploadAndAddData(image, userEmail)
    } else {
      alert('Please select an image and make sure you are logged in.')
    }
  }

  useEffect(() => {
    if (!userEmail) {
      alert("User is not authenticated.")
    }
  }, [userEmail])

  return (
    <div style={{ padding: '40px', backgroundColor: '#ffffff', borderRadius: '15px', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)' }}>
      <Typography variant="h4" style={{ textAlign: 'center', marginBottom: '30px', color: '#333', fontWeight: 'bold' }}>
        Upload Image and Get Estimation
      </Typography>

      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        {imagePreview ? (
          <img
            src={imagePreview}
            alt="Preview"
            style={{
              width: '100%',
              maxHeight: '300px',
              objectFit: 'cover',
              borderRadius: '15px',
              boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)'
            }}
          />
        ) : (
          <Typography variant="h6" style={{ color: '#777', fontStyle: 'italic' }}>
            No Image Selected
          </Typography>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
            id="image-upload"
          />
          <label htmlFor="image-upload">
            <Button
              variant="contained"
              component="span"
              color="primary"
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'linear-gradient(145deg, #6e7fff, #4d5bff)',
                boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.2), -5px -5px 15px rgba(255, 255, 255, 0.5)',
                color: '#fff',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '7px 7px 20px rgba(0, 0, 0, 0.3), -7px -7px 20px rgba(255, 255, 255, 0.6)',
                }
              }}
            >
              <FileUpload style={{ fontSize: '2rem' }} />
            </Button>
          </label>

          <Button
            type="submit"
            variant="contained"
            color="secondary"
            disabled={loading}
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'linear-gradient(145deg, #ff8a00, #ff6e00)',
              boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.2), -5px -5px 15px rgba(255, 255, 255, 0.5)',
              color: '#fff',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '7px 7px 20px rgba(0, 0, 0, 0.3), -7px -7px 20px rgba(255, 255, 255, 0.6)',
              },
              '&.Mui-disabled': {
                background: 'linear-gradient(145deg, #f1f1f1, #dcdcdc)',
                color: '#888',
              }
            }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Upload'}
          </Button>
        </div>
      </form>

      {error && (
        <Alert severity="error" icon={<Error style={{ fontSize: 20 }} />}>
          {error}
        </Alert>
      )}

      {estimation && (
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <Typography variant="h6" style={{ marginBottom: '20px', color: '#333', fontWeight: 'bold' }}>
            Estimation Result:
          </Typography>

          <div style={{
            padding: '20px',
            borderRadius: '10px',
            backgroundColor: '#ffffff',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            display: 'inline-block',
          }}>
            <Typography variant="h5" style={{ marginBottom: '10px', color: '#2C6BC9', fontWeight: '500' }}>
              Weight: {estimation[0].toFixed(2)} g
            </Typography>

            <Typography variant="h5" style={{ color: '#FF7043', fontWeight: '500' }}>
              Iron: {estimation[1].toFixed(2)} mg
            </Typography>
          </div>
        </div>
      )}
    </div>
  )
}

export default Estimate
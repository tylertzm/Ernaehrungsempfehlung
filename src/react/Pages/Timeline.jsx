import React, { useState } from 'react';
import { Stack, Typography, Button, Input } from '@mui/material';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import storage from '../Hooks/storage';
import { useAuth } from '../Hooks/AuthProvider';
import uploadImageAndGetEstimation from '../Hooks/estimation'; // Import the function

const Timeline = () => {
  const { user } = useAuth(); // Correctly call the hook inside the component
  const [image, setImage] = useState(null);
  const [estimation, setEstimation] = useState(null);
  const [error, setError] = useState('');
  const [uploading, setUploading] = useState(false);

  // Handle file change
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle file upload to Firebase Storage and get estimation
  const handleUpload = async () => {
    if (!image) {
      setError('Please select an image to upload.');
      return;
    }

    if (!user) {
      setError('You must be logged in to upload an image.');
      return;
    }

    setUploading(true);
    setError('');

    try {
      // Upload image to Firebase Storage
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-'); // Format timestamp to be Firebase-friendly
      const folderName = user.email; // Use user's email as the folder name
      const imageName = `${timestamp}.jpg`; // Use timestamp as the filename
      const storageRef = ref(storage, `${folderName}/${imageName}`);
      await uploadBytes(storageRef, image);

      // Get the download URL of the uploaded image
      // const imageUrl = await getDownloadURL(storageRef);

      // Get estimation using the image URL
      const result = await uploadImageAndGetEstimation(image);
      setEstimation(result);
    } catch (err) {
      setError(err.message);
      setEstimation(null);
    } finally {
      setUploading(false);
    }
  };

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
        disabled={uploading}
      >
        {uploading ? 'Uploading...' : 'Upload'}
      </Button>

      {error && <Typography color="error">{error}</Typography>}

      {estimation && (
        <div style={{ marginTop: '20px' }}>
          <Typography variant="h6">Estimation Results</Typography>
          <pre>{JSON.stringify(estimation, null, 2)}</pre>
        </div>
      )}
    </Stack>
  );
};

export default Timeline;
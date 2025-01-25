import React, { useState, useEffect } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import storage from '../Hooks/storage';
import firestore from '../Hooks/firestore';
import auth from '../Hooks/firebase';
import uploadImageAndGetEstimation from '../Hooks/estimation';


const Timeline = () => {
  const [image, setImage] = useState(null);
  const [estimation, setEstimation] = useState(null);
  const [loading, setLoading] = useState(false);


  const userEmail = auth.currentUser?.email; // Get the user's email from Firebase Authentication

  // Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  // Handle the file upload and data addition to Firestore
  const handleUploadAndAddData = async (image, userEmail) => {
    try {
      if (!image || !userEmail) {
        throw new Error("No image selected or user is not authenticated");
      }

      setLoading(true);

      // Prepare file details
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const folderName = userEmail; // Using user's email as folder name
      const imageName = `${timestamp}.jpg`; // Name image with timestamp
      const storageRef = ref(storage, `${folderName}/${imageName}`);
      
      console.log(`Uploading to path: ${folderName}/${imageName}`);

      // Upload the image
      await uploadBytes(storageRef, image);

      // Get the download URL of the uploaded image
      const downloadURL = await getDownloadURL(storageRef);
      console.log('Download URL: ', downloadURL);

      // Get estimation using the image
      const result = await uploadImageAndGetEstimation(image);  // Pass image to estimation function
      console.log('Estimation Result:', result);
      setEstimation(result); // Set estimation result

      // Add data to Firestore
      const docRef = await addDoc(collection(firestore, 'users'), {
        email: userEmail,
        imageUrl: downloadURL,
        timestamp: timestamp,
        estimation: result, // Store estimation result as JSON
      });
      console.log('Document written with ID: ', docRef.id);

    } catch (error) {
      console.error('Error uploading image or adding document: ', error);
    } finally {
      setLoading(false);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (image && userEmail) {
      try {
        await handleUploadAndAddData(image, userEmail);
      } catch (error) {
        console.error('Error uploading data:', error);
      }
    } else {
      alert('Please select an image and make sure you are logged in.');
    }
  };

  useEffect(() => {
    if (!userEmail) {
      alert("User is not authenticated.");
    }
  }, [userEmail]);

  return (
    <div className="upload-page">
      <h1>Upload Image and Get Estimation</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Select Image:
            <input
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              required
            />
          </label>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Uploading...' : 'Upload'}
        </button>
      </form>

      {estimation && (
        <div>
          <h3>Estimation Result:</h3>
          <pre>{JSON.stringify(estimation, null, 2)}</pre> {/* Display the result as formatted JSON */}
        </div>
      )}
    </div>
  );
};

export default Timeline;
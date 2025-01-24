import React, { useState } from 'react'
import axios from 'axios'

const UploadImage = () => {
  const [progresspercent, setProgresspercent] = useState(0)

  const handleUpload = async (e) => {
    e.preventDefault()
    const file = e.target[0]?.files[0]

    if (!file) {
      alert('No file selected!')
      return
    }

    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await axios.post('http://localhost:5001/upload', formData, {
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100)
          setProgresspercent(progress)
        },
      })

      // Check if the server responded with a success status code (2xx)
      if (response.status >= 200 && response.status < 300) {
        // Redirect to /tracking/upload after upload
        window.location.href = '/tracking/upload'
      } else {
        throw new Error('Server responded with an error')
      }
    } catch (error) {
      console.error('Upload error:', error)
      alert('Failed to upload file.')
    }
  }

  return (
    <div>
      <form onSubmit={handleUpload}>
        <input type='file' />
        <button type='submit'>Upload</button>
      </form>

      {progresspercent > 0 && (
        <div>
          <p>Upload Progress: {progresspercent}%</p>
          <div
            style={{
              width: '100%',
              backgroundColor: '#f3f3f3',
              borderRadius: '5px',
              overflow: 'hidden',
              marginTop: '10px',
            }}
          >
            <div
              style={{
                width: `${progresspercent}%`,
                backgroundColor: 'green',
                height: '10px',
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default UploadImage
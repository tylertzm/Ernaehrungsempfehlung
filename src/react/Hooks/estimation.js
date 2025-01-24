const uploadImageAndGetEstimation = async (image) => {
  if (!image) {
    throw new Error('No image provided')
  }
  const formData = new FormData()
  formData.append('image', image)
  try {
    const response = await fetch('http://127.0.0.1:5000/upload', {
      method: 'POST',
      body: formData
    })
    if (!response.ok) {
      throw new Error('Error uploading image or processing it.')
    }
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(error.message)
  }
}
export default uploadImageAndGetEstimation

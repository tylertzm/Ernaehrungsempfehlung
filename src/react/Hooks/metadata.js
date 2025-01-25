import { getStorage, ref, getMetadata } from 'firebase/storage'

// Create a reference to the file whose metadata we want to retrieve
const storage = getStorage()
const forestRef = ref(storage, 'files')

// Get metadata properties
getMetadata(forestRef)
  .then((metadata) => {
  })
  .catch((error) => {
    // Uh-oh, an error occurred!
  })

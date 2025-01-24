// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth, setPersistence, browserSessionPersistence } from "firebase/auth"
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA253jVEP-57TL6ZIdgUk7k92m7IgUmXaE',
  authDomain: 'snaptrack-e5f4e.firebaseapp.com',
  projectId: 'snaptrack-e5f4e',
  storageBucket: "snaptrack-e5f4e.firebasestorage.app",
  messagingSenderId: '161907793048',
  appId: '1:161907793048:web:8c1e0155cdbf8e207dc4ed',
  measurementId: 'G-FBNL51015V'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app)
const auth = getAuth(app)

// Set session persistence
setPersistence(auth, browserSessionPersistence)
  .then(() => {
    console.log("Session persistence set.")
    // You can now call signIn methods
  })
  .catch((error) => {
    console.error("Error setting session persistence:", error)
  })

export default auth
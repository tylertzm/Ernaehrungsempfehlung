// firebase.js
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyA253jVEP-57TL6ZIdgUk7k92m7IgUmXaE',
  authDomain: 'snaptrack-e5f4e.firebaseapp.com',
  projectId: 'snaptrack-e5f4e',
  storageBucket: 'snaptrack-e5f4e.firebasestorage.app',
  messagingSenderId: '161907793048',
  appId: '1:161907793048:web:8c1e0155cdbf8e207dc4ed',
  measurementId: 'G-FBNL51015V'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication
const auth = getAuth(app)

export default auth

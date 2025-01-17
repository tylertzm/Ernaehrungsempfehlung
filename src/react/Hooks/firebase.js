// Importiere die benötigten Funktionen aus Firebase
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, setPersistence, browserSessionPersistence } from "firebase/auth";
import { getStorage } from 'firebase/storage'; // Für Firebase Storage hinzugefügt
import { getFirestore } from 'firebase/firestore'; // Optional: Firestore für Datenbank, falls benötigt

// TODO: Add SDKs for Firebase products that du verwenden möchtest
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase-Konfiguration
const firebaseConfig = {
  apiKey: 'AIzaSyA253jVEP-57TL6ZIdgUk7k92m7IgUmXaE',
  authDomain: 'snaptrack-e5f4e.firebaseapp.com',
  projectId: 'snaptrack-e5f4e',
  storageBucket: "snaptrack-e5f4e.appspot.com", // Überprüfen: Standard ist `.appspot.com`
  messagingSenderId: '161907793048',
  appId: '1:161907793048:web:8c1e0155cdbf8e207dc4ed',
  measurementId: 'G-FBNL51015V',
};

// Firebase initialisieren
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app); // Firebase Storage initialisiert
const db = getFirestore(app); // Firestore initialisiert, falls erforderlich

// Session-Persistenz festlegen
setPersistence(auth, browserSessionPersistence)
  .then(() => {
    console.log("Session persistence set.");
    // Du kannst jetzt die signIn-Methoden verwenden
  })
  .catch((error) => {
    console.error("Error setting session persistence:", error);
  });

// Exporte
export { auth, storage, db }; // Exportiere auth, storage und db für die Verwendung in der App

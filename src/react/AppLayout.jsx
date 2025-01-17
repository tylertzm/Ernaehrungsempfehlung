import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import Error404 from './Pages/Error/Error404';
import TrackingPage from './Pages/Tracking/TrackingPage';
import Homepage from './Pages/LandingPage/Homepage';
import ProfilePage from './Pages/Profile/Profile';
import FileUpload from './Components/UploadImage';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth'; // Firebase Auth listener
import { auth } from './Hooks/firebase'; // Importiere Firebase Auth-Instanz

const AppLayout = () => {
  const [user, setUser] = useState(null); // Zustand für den aktuellen Benutzer

  // Authentifizierungsstatus überwachen
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Speichere den Benutzer, wenn eingeloggt
      } else {
        setUser(null); // Setze auf null, wenn ausgeloggt
      }
    });

    return () => unsubscribe(); // Listener aufräumen
  }, []);

  return (
    <Router>
      <Routes>
        {/* LandingPage: Zeige diese Seite, wenn kein Benutzer eingeloggt ist */}
        <Route
          path="/"
          element={user ? <Navigate to="/home" /> : <LandingPage />}
        />

        {/* Homepage: Passiere Benutzerstatus an die Homepage-Komponente */}
        <Route
          path="/home"
          element={user ? <Homepage user={user} /> : <Navigate to="/" />}
        />

        {/* LoginPage: Umleitung auf /home, wenn Benutzer eingeloggt */}
        <Route
          path="/login"
          element={user ? <Navigate to="/home" /> : <LoginPage />}
        />

        {/* RegisterPage: Umleitung auf /home, wenn Benutzer eingeloggt */}
        <Route
          path="/register"
          element={user ? <Navigate to="/home" /> : <RegisterPage />}
        />

        {/* TrackingPage: Nur zugänglich, wenn Benutzer eingeloggt */}
        <Route
          path="/tracking"
          element={user ? <TrackingPage /> : <Navigate to="/login" />}
        />

        {/* FileUpload: Nur zugänglich, wenn Benutzer eingeloggt */}
        <Route
          path="/tracking/upload"
          element={user ? <FileUpload /> : <Navigate to="/login" />}
        />

        {/* ProfilePage: Nur zugänglich, wenn Benutzer eingeloggt */}
        <Route
          path="/profile"
          element={user ? <ProfilePage /> : <Navigate to="/login" />}
        />

        {/* Fallback für alle unbekannten Routen */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default AppLayout;

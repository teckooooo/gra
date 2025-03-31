import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ComercialPage from './pages/ComercialPage';
import GrillaCanalPage from './pages/GrillaCanalPage';

import Navbar from './components/Common/Navbar';
import { AuthProvider, AuthContext } from './contexts/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div style={styles.appContainer}>
          <Navbar />
          <div style={styles.pageContent}>
            <AppRoutes />
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

// Rutas protegidas usando contexto
function AppRoutes() {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={user ? <Navigate to="/dashboard" /> : <LoginPage />} />
      <Route path="/dashboard" element={user ? <DashboardPage /> : <Navigate to="/" />} />
      <Route path="/comercial" element={user ? <ComercialPage /> : <Navigate to="/" />} />
      <Route path="/grilla" element={user ? <GrillaCanalPage /> : <Navigate to="/" />} />
    </Routes>
  );
}

const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  pageContent: {
    padding: '1rem',
    width: '100%',
  },
};

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ComercialPage from './pages/ComercialPage';
import GrillaCanalPage from './pages/GrillaCanalPage';

import Navbar from './components/Common/Navbar';
import Sidebar from './components/Common/Sidebar';

export default function App() {
  return (
    <Router>
      <div style={styles.appContainer}>
        <Sidebar />
        <div style={styles.contentContainer}>
          <Navbar />
          <div style={styles.pageContent}>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/comercial" element={<ComercialPage />} />
              <Route path="/grilla" element={<GrillaCanalPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

const styles = {
  appContainer: {
    display: 'flex',
  },
  contentContainer: {
    flex: 1,
    marginLeft: '220px', // Espacio reservado para el sidebar
  },
  pageContent: {
    padding: '1rem',
  },
};

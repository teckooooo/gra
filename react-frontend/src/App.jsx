import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ComercialPage from './pages/ComercialPage';
import GrillaCanalPage from './pages/GrillaCanalPage';

import Navbar from './components/Common/Navbar';

export default function App() {
  return (
    <Router>
      <div style={styles.appContainer}>
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
    </Router>
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

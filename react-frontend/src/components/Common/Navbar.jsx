import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // Si no hay usuario logueado, no mostrar el navbar
  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <span style={styles.logo}>Gestor de Reportes Automático</span>
        <ul style={styles.navItems}>
          <li><Link to="/dashboard" style={styles.link}>Dashboard</Link></li>
          <li><Link to="/comercial" style={styles.link}>Comercial</Link></li>
          <li><Link to="/grilla" style={styles.link}>Grilla Canal</Link></li>
          <li><button onClick={handleLogout} style={{ ...styles.link, background: 'none', border: 'none', cursor: 'pointer' }}>Salir</button></li>
        </ul>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#1e293b',
    padding: '1rem',
    color: '#fff',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
  navItems: {
    display: 'flex',
    gap: '1rem',
    listStyle: 'none',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
};

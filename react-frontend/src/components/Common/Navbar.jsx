import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <span style={styles.logo}>Gestor de Reportes Automático </span>
        <ul style={styles.navItems}>
          <li><Link to="/dashboard" style={styles.link}>Dashboard</Link></li>
          <li><Link to="/comercial" style={styles.link}>Comercial</Link></li>
          <li><Link to="/grilla" style={styles.link}>Grilla Canal</Link></li>
          <li><Link to="/" style={styles.link}>Salir</Link></li>
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

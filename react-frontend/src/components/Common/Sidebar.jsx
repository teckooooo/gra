import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside style={styles.sidebar}>
      <nav>
        <ul style={styles.navList}>
          <li><Link to="/dashboard" style={styles.link}>📊 Dashboard</Link></li>
          <li><Link to="/comercial" style={styles.link}>💼 Comercial</Link></li>
          <li><Link to="/grilla" style={styles.link}>📺 Grilla Canal</Link></li>
          <li><Link to="/" style={styles.link}>🚪 Salir</Link></li>
        </ul>
      </nav>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: '220px',
    height: '100vh',
    backgroundColor: '#f8fafc',
    padding: '1rem',
    borderRight: '1px solid #e2e8f0',
    position: 'fixed',
    top: 0,
    left: 0,
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  link: {
    textDecoration: 'none',
    color: '#1e293b',
    fontWeight: '500',
  },
};

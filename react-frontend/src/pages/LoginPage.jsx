import React from 'react';
import Login from '../components/Auth/Login';

export default function LoginPage() {
  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h1 style={styles.title}>Iniciar sesión</h1>
        <Login />
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
  },
  box: {
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    minWidth: '300px',
  },
  title: {
    marginBottom: '1rem',
    fontSize: '1.5rem',
    textAlign: 'center',
  },
};

import React, { useEffect, useState } from 'react';
import api from '../services/api';

export default function DashboardPage() {
  const [datos, setDatos] = useState({
    totalVentas: 0,
    totalContratos: 0,
    totalPostventas: 0,
  });

  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [ventas, contratos, postventa] = await Promise.all([
          api.get('/ventas'),
          api.get('/contratos'),
          api.get('/postventa'),
        ]);

        setDatos({
          totalVentas: ventas.data.length,
          totalContratos: contratos.data.length,
          totalPostventas: postventa.data.length,
        });
      } catch (error) {
        setMensaje('Error al cargar datos del dashboard');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>
      {mensaje && <p>{mensaje}</p>}
      <div style={styles.cardsContainer}>
        <div style={styles.card}>
          <h3>Total Ventas</h3>
          <p>{datos.totalVentas}</p>
        </div>
        <div style={styles.card}>
          <h3>Total Contratos</h3>
          <p>{datos.totalContratos}</p>
        </div>
        <div style={styles.card}>
          <h3>Total Postventas</h3>
          <p>{datos.totalPostventas}</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  cardsContainer: {
    display: 'flex',
    gap: '2rem',
    marginTop: '2rem',
  },
  card: {
    flex: 1,
    backgroundColor: '#f9fafb',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.05)',
    textAlign: 'center',
  },
};

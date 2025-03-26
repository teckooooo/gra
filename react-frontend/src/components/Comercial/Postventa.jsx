import React, { useEffect, useState } from 'react';
import api from '../../services/api';

export default function Postventa() {
  const [registros, setRegistros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    const fetchPostventa = async () => {
      try {
        const res = await api.get('/postventa');
        setRegistros(res.data);
      } catch (error) {
        setMensaje('Error al cargar registros de postventa');
      } finally {
        setLoading(false);
      }
    };

    fetchPostventa();
  }, []);

  if (loading) return <p>Cargando postventa...</p>;

  return (
    <div>
      <h2>Postventa</h2>
      {mensaje && <p>{mensaje}</p>}
      {registros.length === 0 ? (
        <p>No hay registros de postventa.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Estado</th>
              <th>Reporte</th>
            </tr>
          </thead>
          <tbody>
            {registros.map((item) => (
              <tr key={item.id}>
                <td>{item.cliente}</td>
                <td>{item.estado}</td>
                <td>{item.reporte}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

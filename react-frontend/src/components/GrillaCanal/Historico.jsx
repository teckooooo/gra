import React, { useEffect, useState } from 'react';
import api from '../../services/api';

export default function Historico() {
  const [historico, setHistorico] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    const fetchHistorico = async () => {
      try {
        const res = await api.get('/grillas/historico'); // Asegúrate de tener esta ruta en el backend
        setHistorico(res.data);
      } catch (error) {
        setMensaje('Error al cargar el historial de grillas');
      } finally {
        setLoading(false);
      }
    };

    fetchHistorico();
  }, []);

  if (loading) return <p>Cargando historial...</p>;

  return (
    <div>
      <h2>Historial de Grillas</h2>
      {mensaje && <p>{mensaje}</p>}
      {historico.length === 0 ? (
        <p>No hay registros históricos disponibles.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {historico.map((item) => (
              <tr key={item.id}>
                <td>{item.nombre}</td>
                <td>{item.descripcion}</td>
                <td>{item.fecha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

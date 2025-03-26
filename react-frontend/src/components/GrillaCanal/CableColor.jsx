import React, { useEffect, useState } from 'react';
import api from '../../services/api';

export default function CableColor() {
  const [grilla, setGrilla] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    const fetchGrilla = async () => {
      try {
        const res = await api.get('/grillas/cablecolor');
        setGrilla(res.data);
      } catch (error) {
        setMensaje('Error al cargar la grilla de CableColor');
      } finally {
        setLoading(false);
      }
    };

    fetchGrilla();
  }, []);

  if (loading) return <p>Cargando grilla CableColor...</p>;

  return (
    <div>
      <h2>Grilla Canal CableColor</h2>
      {mensaje && <p>{mensaje}</p>}
      {grilla.length === 0 ? (
        <p>No hay programación disponible.</p>
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
            {grilla.map((item) => (
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

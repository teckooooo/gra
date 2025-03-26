import React, { useEffect, useState } from 'react';
import api from '../../services/api';

export default function Contratos() {
  const [contratos, setContratos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    const fetchContratos = async () => {
      try {
        const res = await api.get('/contratos');
        setContratos(res.data);
      } catch (error) {
        setMensaje('Error al cargar contratos');
      } finally {
        setLoading(false);
      }
    };

    fetchContratos();
  }, []);

  if (loading) return <p>Cargando contratos...</p>;

  return (
    <div>
      <h2>Contratos</h2>
      {mensaje && <p>{mensaje}</p>}
      {contratos.length === 0 ? (
        <p>No hay contratos disponibles.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Tipo</th>
              <th>Inicio</th>
              <th>Fin</th>
            </tr>
          </thead>
          <tbody>
            {contratos.map((contrato) => (
              <tr key={contrato.id}>
                <td>{contrato.cliente}</td>
                <td>{contrato.tipo}</td>
                <td>{contrato.fecha_inicio}</td>
                <td>{contrato.fecha_fin}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

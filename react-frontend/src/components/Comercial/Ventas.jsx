import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { formatCurrency } from '../../utils/helpers';

export default function Ventas() {
  const [ventas, setVentas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    const fetchVentas = async () => {
      try {
        const res = await api.get('/ventas');
        setVentas(res.data);
      } catch (error) {
        setMensaje('Error al cargar ventas');
      } finally {
        setLoading(false);
      }
    };

    fetchVentas();
  }, []);

  if (loading) return <p>Cargando ventas...</p>;

  return (
    <div>
      <h2>Ventas</h2>
      {mensaje && <p>{mensaje}</p>}
      {ventas.length === 0 ? (
        <p>No hay registros de ventas.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {ventas.map((venta) => (
              <tr key={venta.id}>
                <td>{venta.producto}</td>
                <td>{venta.cantidad}</td>
                <td>{formatCurrency(venta.precio)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

import React, { useState } from 'react';
import api from '../../services/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/login', {
        email,
        password,
      });

      const { token } = response.data;
      localStorage.setItem('token', token);
      setMensaje('Inicio de sesión exitoso');
      // Redirigir o cargar datos si es necesario
    } catch (error) {
      setMensaje('Credenciales incorrectas');
    }
  };

  return (
    <div className="login-form">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Entrar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

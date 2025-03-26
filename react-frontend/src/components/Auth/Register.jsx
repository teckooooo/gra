import React, { useState } from 'react';
import api from '../../services/api';

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post('/register', form);
      setMensaje('Usuario registrado con éxito');
      setForm({ name: '', email: '', password: '' });
    } catch (error) {
      setMensaje('Error al registrar usuario');
    }
  };

  return (
    <div className="register-form">
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Registrarse</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

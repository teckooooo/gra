import React from 'react';
import Ventas from '../components/Comercial/Ventas';
import Contratos from '../components/Comercial/Contratos';
import Postventa from '../components/Comercial/Postventa';

export default function ComercialPage() {
  return (
    <div className="comercial-page">
      <h1>Módulo Comercial</h1>

      <section style={styles.section}>
        <h2>Ventas</h2>
        <Ventas />
      </section>

      <section style={styles.section}>
        <h2>Contratos</h2>
        <Contratos />
      </section>

      <section style={styles.section}>
        <h2>Postventa</h2>
        <Postventa />
      </section>
    </div>
  );
}

const styles = {
  section: {
    marginTop: '2rem',
    marginBottom: '2rem',
  },
};

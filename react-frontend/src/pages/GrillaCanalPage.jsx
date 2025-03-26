import React from 'react';
import TVRED from '../components/GrillaCanal/TVRED';
import CableColor from '../components/GrillaCanal/CableColor';
import Historico from '../components/GrillaCanal/Historico';

export default function GrillaCanalPage() {
  return (
    <div className="grilla-canal-page">
      <h1>Grillas de Canales</h1>

      <section style={styles.section}>
        <h2>TVRED</h2>
        <TVRED />
      </section>

      <section style={styles.section}>
        <h2>CableColor</h2>
        <CableColor />
      </section>

      <section style={styles.section}>
        <h2>Histórico</h2>
        <Historico />
      </section>
    </div>
  );
}

const styles = {
  section: {
    marginBottom: '2rem',
  },
};

import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <p>© {year} Mi Empresa. Todos los derechos reservados.</p>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: '2rem',
    padding: '1rem',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    borderTop: '1px solid #e0e0e0',
    color: '#555',
  },
};

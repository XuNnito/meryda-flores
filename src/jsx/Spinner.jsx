import React from 'react';
import '../css/Spinner.css';

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <p>Esperando conexión...</p>
    </div>
  );
};

export default Spinner;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Você pode criar este arquivo para adicionar estilos globais se necessário.
import App from './App'; // Importa o componente principal

// Renderiza o componente <App /> dentro do elemento com id 'root' no HTML
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './react/App'; // Import App

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

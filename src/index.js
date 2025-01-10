import React from 'react';
import ReactDOM from 'react-dom/client';
import AppLayout from './react/AppLayout';

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <AppLayout />
  </React.StrictMode>
);



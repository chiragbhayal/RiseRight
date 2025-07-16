// 📁 src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Tailwind CSS
import './index.css';

// React 18 root API
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

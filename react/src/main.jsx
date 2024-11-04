/*import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
) */

  import { StrictMode } from 'react';
  import { createRoot } from 'react-dom/client';
  import { BrowserRouter as Router } from 'react-router-dom'; // Importa Router
  import App from './App.jsx';
  import './index.css';
  
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Router>
        <App />
      </Router>
    </StrictMode>
  );
  

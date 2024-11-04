import { useState } from 'react';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import App2 from './App2';
import LogoDeRev from './LogoDeRev.jpg';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main-container">
        {" "}
        {/* Contenedor principal */}
        <div>
          <img src={LogoDeRev} className="logo" alt="My Logo" />
        </div>
        <Link to="/App2">
          <button>Launch App</button>
        </Link>
      </div>
      <p className="read-the-docs">
        Click <Link to="/clients">here</Link> to get your content advertised.
      </p>
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* Ruta para la página principal */}
      <Route path="/" element={<Home />} />
      {/* Ruta para la segunda página */}
      <Route path="/app2/*" element={<App2 />} />
    </Routes>
  );
}

export default App;

import React, { useState } from 'react';
import { Link, Route, Routes, Navigate } from 'react-router-dom';
import logo from './LogoDeRev2.jpg'; // Asegúrate de que el logo esté en la carpeta correcta
import { ethers } from 'ethers';

// Componentes placeholder para cada pestaña

function Dashboard() {
  return (
    <div>
      <h2 style={{ color: 'white' }}>Dashboard</h2>
      <div>
        <h2 style={{ color: 'white' }}>User</h2>
        <h2 style={{ color: 'white' }}>Level</h2>
        <h2 style={{ color: 'white' }}>Tokens</h2>
        <h2 style={{ color: 'white' }}>Ads available</h2>
        <h2 style={{ color: 'white' }}>Time to new ads</h2>
        <h2 style={{ color: 'white' }}>Surveys Available aaaaaaaaaaa</h2>
      </div>
    </div>
  );
}

function Ads() {
  return <h2 style={{ color: 'white' }}>Ads</h2>;
}

function Surveys() {
  return <h2 style={{ color: 'white' }}>Surveys</h2>;
}

function Withdraw() {
  return <h2 style={{ color: 'white' }}>Withdraw</h2>;
}

function App2() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [account, setAccount] = useState(null);
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setAccount(accounts[0]);
      } catch (error) {
        console.error("Error connecting to wallet:", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <div style={pageStyle}>
      {" "}
      {/* Asegurarse de que el contenedor principal ocupe el 100% */}
      {/* Header fijo con el logo y las pestañas */}
      <header style={headerStyle}>
        <img src={logo} alt="Company Logo" style={logoStyle} />
        <nav style={navStyle}>
          <Link
            to="/app2/dashboard"
            style={getTabStyle(activeTab === "dashboard")}
            onClick={() => setActiveTab("dashboard")}
          >
            Dashboard
          </Link>
          <Link
            to="/app2/ads"
            style={getTabStyle(activeTab === "ads")}
            onClick={() => setActiveTab("ads")}
          >
            Ads
          </Link>
          <Link
            to="/app2/surveys"
            style={getTabStyle(activeTab === "surveys")}
            onClick={() => setActiveTab("surveys")}
          >
            Surveys
          </Link>
          <Link
            to="/app2/withdraw"
            style={getTabStyle(activeTab === "withdraw")}
            onClick={() => setActiveTab("withdraw")}
          >
            Withdraw
          </Link>
        </nav>
        {/* Botón para conectar la wallet */}
        <button onClick={connectWallet} style={connectButtonStyle}>
          {account
            ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}`
            : "Connect Wallet"}
        </button>
      </header>
      {/* Contenido de las pestañas */}
      <main style={mainStyle}>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="ads" element={<Ads />} />
          <Route path="surveys" element={<Surveys />} />
          <Route path="withdraw" element={<Withdraw />} />
          {/* Ruta por defecto que redirige a Dashboard */}
          <Route path="*" element={<Navigate to="/app2/dashboard" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App2;

// Estilos básicos
const pageStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '90vh', // Asegurar que ocupe todo el alto
  backgroundColor: '#222', // Fondo gris
  color: 'white', // Texto blanco
  justifyContent: 'flex-start', // Asegurar que el main y header se distribuyen bien
  alignItems: 'center', // Centrar horizontalmente
  boxSizing: 'border-box',
};

const headerStyle = {
  position: 'fixed',
  top: 0,
  width: '100%',
  backgroundColor: '#000', // Fondo del header
  color: '#fff',
  padding: '1rem',
  display: 'flex',
  justifyContent: 'flex-start', // Logo a la izquierda
  alignItems: 'center',
  zIndex: 1000,
};

const logoStyle = {
  height: '50px',
  marginRight: '8rem', // Espacio entre el logo y las pestañas
  marginLeft: '1rem',
};

const navStyle = {
  display: 'flex',
  gap: '2rem', // Espacio entre las pestañas
};

const getTabStyle = (isActive) => ({
  color: isActive ? '#8A2BE2' : '#F0F8FF', // Colores de las pestañas
  textDecoration: 'none',
  padding: '0.5rem',
  cursor: 'pointer',
  borderBottom: isActive ? '2px solid #8A2BE2' : 'none', // Subrayar la pestaña activa
});

const mainStyle = {
  marginTop: '100px', // Espacio debajo del header fijo
  padding: '2rem',
  color: 'white', // Texto en blanco
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  alignItems: 'center', // Centrar contenido horizontalmente
  //border: '1px solid grey', // Borde temporal para verificar el main
  width: '600%', // Asegurar que ocupe todo el ancho disponible
};

const connectButtonStyle = {
  backgroundColor: "#8A2BE2",
  color: "white",
  border: "none",
  borderRadius: "5px",
  padding: "0.5rem 1rem",
  cursor: "pointer",
  right: 10,
  top: 10,
  position: 'fixed',
};


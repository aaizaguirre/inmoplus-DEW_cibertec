import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { getPropiedades } from './services/propiedadesService.js';

import './App.css';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/Home/Home.jsx';
import Comprar from './pages/Comprar/Comprar.jsx';
import Alquilar from './pages/alquilar/Alquilar.jsx';
import Vender from './pages/vender/vender.jsx';
import Confirmacion from './pages/vender/Confirmacion.jsx';
import Nosotros from './pages/Nosotros/Nosotros.jsx';


function App() { 

  const [todasLasPropiedades, setTodasLasPropiedades] = useState([]);

  useEffect(() => {
  getPropiedades()
    .then(setTodasLasPropiedades)
    .catch((err) => console.error('Error al cargar propiedades:', err));
}, []);
  
  return (
      <>
      <Navbar />

      <Routes>
  <Route
    path="/"
    element={<Home todasLasPropiedades={todasLasPropiedades} />}
  />

  <Route
    path="/comprar"
    element={<Comprar propiedades={todasLasPropiedades} />}
  />
  
  <Route
    path="/alquilar"
    element={<Alquilar propiedades={todasLasPropiedades} />}
  />

  <Route path="/vender" element={<Vender />} />
  <Route path="/confirmacion" element={<Confirmacion />} />
  <Route path="/nosotros" element={<Nosotros />} />
</Routes>

      <Footer />
    </>
    );
}

export default App;
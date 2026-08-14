import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getPropiedades, filtrarPropiedades } from '../src/services/propiedadesService.js';
import './App.css';

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/Home/Home.jsx'
import Vender from './pages/vender/vender.jsx';
import Confirmacion from './pages/vender/Confirmacion.jsx';
<<<<<<< HEAD
import Nosotros from './pages/Nosotros/Nosotros.jsx';
=======
import Busquedas from './pages/Alquilar/Busqueda.jsx';
import Tarjetas from './pages/Alquilar/Tarjetas.jsx';
import Paginacion from './pages/Alquilar/Paginacion.jsx';
>>>>>>> 45bd299 (Primer avance en la seccion Alquilar)

function App() { 

  const [todasLasPropiedades, setTodasLasPropiedades] = useState([]);

  useEffect(() => {
    getPropiedades()
      .then(setTodasLasPropiedades)
      .catch((err) => console.error("Error al cargar propiedades:", err));
  }, []);
  
<<<<<<< HEAD
  return (
      <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home todasLasPropiedades={todasLasPropiedades} />} />
        <Route path="/vender" element={<Vender />} />
        <Route path="/confirmacion" element={<Confirmacion />} />
        <Route path = "/nosotros" element = {<Nosotros/>}/>
      </Routes>
=======
  const buscarPropiedades = (filtros) => { 
    const filtrados = filtrarPropiedades(todasLasPropiedades, filtros);
    setResultados(filtrados); 
  };
  
return (
    <>
      <Navbar
        vista={vista}
        onInicio={() => setVista("inicio")}
        onVender={() => setVista("vender")}
        onAlquilar={()=> setVista("alquilar")}
      />

      {vista === "vender" ? (
        <Vender onConfirmar={() => setVista("confirmacion")} />
      ) : vista === "confirmacion" ? (
        <Confirmacion />
      ) : vista === "alquilar" ? <><Busquedas/><Tarjetas/><Paginacion/></> : (
        <>
          <Hero />
          <SeccionFiltro onBuscar={buscarPropiedades} />
          {resultados ? (
            <SeccionPropiedades propiedades={resultados} />
          ) : (
            <SeccionNosotros />
          )}
          <DepartamentosDestacados />
          <SeccionTestimonios />
        </>
      )}
>>>>>>> 45bd299 (Primer avance en la seccion Alquilar)

      <Footer />
    </>
    );
}

export default App;
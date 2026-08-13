import { useState, useEffect } from 'react';
import { getPropiedades, filtrarPropiedades } from '../src/services/propiedadesService.js';
import './App.css';

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import SeccionFiltro from './pages/Home/SeccionFiltro.jsx'
import SeccionNosotros from './pages/Home/SeccionNosotros.jsx'
import SeccionPropiedades from './pages/Home/SeccionPropiedades.jsx'
import SeccionTestimonios from './components/SeccionTestimonios.jsx';
import Footer from './components/Footer.jsx'
import DepartamentosDestacados from './pages/Home/DepartamentosDestacados.jsx';
import Vender from './pages/vender/vender.jsx';
import Confirmacion from './pages/vender/Confirmacion.jsx';

function App() { 

  const [vista, setVista] = useState("inicio");
  const [todasLasPropiedades, setTodasLasPropiedades] = useState([]);
  const [resultados, setResultados] = useState(null);

  useEffect(() => {
    getPropiedades()
      .then(setTodasLasPropiedades)
      .catch((err) => console.error("Error al cargar propiedades:", err));
  }, []);
  
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
      />

      {vista === "vender" ? (
        <Vender onConfirmar={() => setVista("confirmacion")} />
      ) : vista === "confirmacion" ? (
        <Confirmacion />
      ) : (
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

      <Footer />
    </>
  );
}


export default App;
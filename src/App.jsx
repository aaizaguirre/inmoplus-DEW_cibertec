import { useState } from 'react'

import './App.css'
import { propiedades } from '../src/data/propiedades.jsx';

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
  
  const [buscando, setBuscando] = useState(false); 
  const [resultados, setResultados] = useState([]); 
  const buscarPropiedades = (filtros) => { 
    const resultadosFiltrados = propiedades.filter((propiedad) => { 

      const coincideEstado = 
      !filtros.tipoOperacion || propiedad.estado === filtros.tipoOperacion;

      const coincideDistrito = 
      filtros.distrito === "" || 
      propiedad.distrito === filtros.distrito; 
      
      const coincidePrecioMin = 
      filtros.precioMin === "" || 
      propiedad.precio >= Number(filtros.precioMin); 
      
      const coincidePrecioMax = 
      filtros.precioMax === "" || 
      propiedad.precio <= Number(filtros.precioMax); 
      
      return ( 
        coincideEstado &&
        coincideDistrito && 
        coincidePrecioMin && 
        coincidePrecioMax 
      ); 
    }); 
    
    setResultados(resultadosFiltrados); 
    setBuscando(true); 
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
          {!buscando && <SeccionNosotros />}
          {buscando && (
            <SeccionPropiedades propiedades={resultados} />
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
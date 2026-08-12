import { useState } from 'react'

import './App.css'
import { propiedades } from '../src/data/propiedades.jsx';

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Filtro from './Filtro.jsx'
import SeccionNosotros from './components/SeccionNosotros.jsx'
import SeccionPropiedades from './components/SeccionPropiedades.jsx'
import Footer from '../src/components/Footer.jsx'

function App() { 
  
  const [buscando, setBuscando] = useState(false); 
  const [resultados, setResultados] = useState([]); 
  const buscarPropiedades = (filtros) => { 
    const resultadosFiltrados = propiedades.filter((propiedad) => { 
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
      <Navbar/> 
      <Hero/> 
      <Filtro onBuscar={buscarPropiedades}/> 
      {!buscando && <SeccionNosotros />} 
      {buscando && ( <SeccionPropiedades propiedades={resultados}/> 
      )} 
      <Footer/>
    </> 
  ); 
} 

export default App;
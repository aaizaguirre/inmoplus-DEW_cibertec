import { useState } from 'react';
import Hero from '../../components/Hero.jsx';
import SeccionFiltro from './SeccionFiltro.jsx';
import SeccionNosotros from './SeccionNosotros.jsx';
import SeccionPropiedades from './SeccionPropiedades.jsx';
import DepartamentosDestacados from './DepartamentosDestacados.jsx';
import SeccionTestimonios from '../../components/SeccionTestimonios.jsx';
import { filtrarPropiedades } from '../../services/propiedadesService.js';

function Home({ todasLasPropiedades}){

    const [resultados, setResultados] = useState(null);
    const buscarPropiedades = (filtros) => { 
        const filtrados = filtrarPropiedades(todasLasPropiedades, filtros);
        setResultados(filtrados); 
    };

    return (
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
    );
}

export default Home;

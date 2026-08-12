import React from 'react';
import PropiedadCard from '../../components/PropiedadCard';
import './DepartamentosDestacados.css';
import { propiedades } from '../../data/propiedades';

function DepartamentosDestacados(){

    const destacados = propiedades.filter(propiedad => propiedad.destacado)

    return(

        <section className = "contenedor-destacados">
            <h2>Departamentos destacados</h2>
            <div className = "grid-propiedades">
                {destacados.map((prop) => (
                    <PropiedadCard
                        key = {prop.id}
                        propiedad = {prop}
                    />
                ))}
            </div>
        </section>
    )
}

export default DepartamentosDestacados;
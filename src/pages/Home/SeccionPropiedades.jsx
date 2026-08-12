import React from 'react';
import PropiedadCard from '../../components/PropiedadCard';
import './SeccionPropiedades.css';

function SeccionPropiedades({ propiedades }) {

    return (
        <section id="seccionPropiedades">
            <div id="encabezado-propiedades">
                <h2>Propiedades encontradas</h2>
                <p>{propiedades.length} propiedades encontradas</p>
            </div>
            {propiedades.length === 0 ? (
                <p id="sin-resultados">No encontramos propiedades con esos criterios.</p>
            ) : (
                <div id="contenedor-propiedades">
                    {propiedades.map((propiedad) => (
                        <PropiedadCard 
                            key={propiedad.id} 
                            propiedad={propiedad}
                            onVerDetalle={(id) => console.log("Ir a detalle de:", id)}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}

export default SeccionPropiedades;

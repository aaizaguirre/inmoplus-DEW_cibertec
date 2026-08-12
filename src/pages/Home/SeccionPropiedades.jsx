import React from 'react';
import './SeccionPropiedades.css'

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
                        <article className="tarjeta-propiedad" key={propiedad.id}>
                            <img src={propiedad.imagen} alt={propiedad.titulo}/>
                            <h3>{propiedad.titulo}</h3>
                            <p>{propiedad.estado}</p>
                            <p>
                                {propiedad.caracteristicas}
                            </p>
                            <p>
                                S/. {propiedad.precio.toLocaleString("es-PE", {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })}
                            </p>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
}

export default SeccionPropiedades;

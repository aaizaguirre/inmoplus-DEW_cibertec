import React from 'react';
import './PropiedadCard.css';

function PropiedadCard({propiedad}){

    const {id, titulo, distrito, estado, precio, caracteristicas, imagen, destacado} = propiedad;

    return(
        <article className = "card-propiedad">
            <img src = {imagen} alt = {titulo} />
            <div className = "texto">
                <h3 className = "titulo">{titulo}</h3>
                <p className = "estado">{estado}</p>
                <p className = "distrito">{distrito}</p>
                <p className = "caracteristicas">{caracteristicas}</p>
                <p className = "precio">S/. <span>{precio.toLocaleString()}</span></p>
            </div>
        </article>
    )
}

export default PropiedadCard;
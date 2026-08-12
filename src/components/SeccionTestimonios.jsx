import React, { useState, useEffect } from 'react';
import { testimonios } from '../data/Testimonios';
import './SeccionTestimonios.css';

function SeccionTestimonios(){

    const cantTarjetas = 3;

    const [indiceActual, setIndiceActual] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndiceActual((prevIndice) => {
                if (prevIndice + cantTarjetas >= testimonios.length){
                    return 0;
                }
                return prevIndice + 1;
            });
        }, 5000);

        return () => clearInterval(intervalo);
    }, []);

    const testimoniosVisibles = testimonios.slice(indiceActual, indiceActual + cantTarjetas);

    return(

        <section className = "contenedor-testimonios">
            <div className = "testimonios-titulo">
                <h2>Testimonios</h2>
                <p>Conoce la opinión de nuestros clientes</p>
            </div>
            
            <div className = "grid-testimonios">
                {testimoniosVisibles.map((item) => (
                    <article key = {item.id} className = "card-testimonio">
                        <p className = "comentario">
                            "{item.comentario}"
                        </p>
                        <div className = "info">
                            <h4 className = "nombre">{item.nombre}</h4>
                            <p className = "cargo">{item.cargo}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default SeccionTestimonios;
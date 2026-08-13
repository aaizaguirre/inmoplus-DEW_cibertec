import React, { useState, useEffect } from 'react';
import { getTestimonios } from '../services/testimoniosService';
import './SeccionTestimonios.css';

function SeccionTestimonios(){

    const cantTarjetas = 3;

    const [testimonios, setTestimonios] = useState([]);
    const [indiceActual, setIndiceActual] = useState(0);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        getTestimonios()
        .then((data) => {
            setTestimonios(data);
            setCargando(false);
        })
        .catch((err) => {
            console.error("Error cargando testimonios:", err);
            setCargando(false);
        });
    }, []);

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
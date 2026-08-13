import {React, useState} from "react";
import './Hero.css';

import departamento1 from '../assets/departamento1.jpg'
import departamento2 from '../assets/departamento2.jpg'
import departamento3 from '../assets/departamento3.jpg'
import departamento4 from '../assets/departamento4.jpg'

const imagenesHome = [departamento1, departamento2, departamento3, departamento4];

function Hero({imagenes = imagenesHome, titulo = "Tu próxima casa, hoy", subtitulo = ""}){

    const [actual, setActual] = useState(0);
    
    const anterior = () => {
        setActual(prev => (prev - 1 + imagenes.length) % imagenes.length);
    };

    const siguiente = () => {
        setActual(prev => (prev + 1) % imagenes.length);
    };
    
    return(
        <section className = "hero">
            <div className = "hero-imagen" style = {{backgroundImage: `url(${imagenes[actual]})` }}
            ></div>
        
            <button className="flecha izquierda" onClick={anterior}>
                ❮
            </button>
            <div className = "hero-contenido">
                <h2>{titulo}</h2>
                <p>{subtitulo}</p>
            </div>
            <button className="flecha derecha" onClick={siguiente}>
                ❯
            </button>
        </section>
    )
}

export default Hero;
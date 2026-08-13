import React from 'react';
import './Navbar.css';
import logoInmoPlus from '../assets/logo-InmoPlus.PNG';

function Navbar({ vista, onInicio, onVender }){

    return(
        <header>
            <div id = "contenedor-logo">
                <img id = "logo-img" src = {logoInmoPlus} alt = "Logo InmoPlus" />
                <p id = "logo-titulo">INMOPLUS PERÚ</p>
            </div>

            <ul id = "navbar">
                <li>
        <a
            className={vista === "inicio" ? "active" : ""}
            href="#"
            onClick={(e) => {
                e.preventDefault();
                onInicio();
            }}
        >
            INICIO
        </a>
    </li>

    <li>
        <a href="#">COMPRAR</a>
    </li>

    <li>
        <a href="#">ALQUILAR</a>
    </li>

    <li>
        <a
            href="#"
            onClick={(e) => {
                e.preventDefault();
                onVender();
            }}
        >
            VENDER
        </a>
    </li>

    <li>
        <a href="#">NOSOTROS</a>
    </li>
            </ul>
        </header>
    )
}

export default Navbar;
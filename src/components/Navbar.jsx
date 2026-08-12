import React from 'react';
import './Navbar.css';
import logoInmoPlus from '../assets/logo-InmoPlus.PNG';

function Navbar(){

    return(
        <header>
            <div id = "contenedor-logo">
                <img id = "logo-img" src = {logoInmoPlus} alt = "Logo InmoPlus" />
                <p id = "logo-titulo">INMOPLUS PERÚ</p>
            </div>

            <ul id = "navbar">
                {/* TODO: Actualizar los 'href' luego de implementar las páginas */}
                <li><a className = "active" href = "#">INICIO</a></li>
                <li><a href = "#">COMPRAR</a></li>
                <li><a href = "#">ALQUILAR</a></li>
                <li><a href = "#">VENDER</a></li>
                <li><a href = "#">NOSOTROS</a></li>
            </ul>
        </header>
    )
}

export default Navbar;
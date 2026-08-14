import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logoInmoPlus from '../assets/logo-InmoPlus.PNG';
import './Navbar.css';

function Navbar({ vista, onInicio, onVender, onAlquilar }) {

    return (
        <header>
            <Link to="/" id="contenedor-logo">
                <img id="logo-img" src={logoInmoPlus} alt="Logo InmoPlus" />
                <p id="logo-titulo">INMOPLUS PERÚ</p>
            </Link>

            <ul id="navbar">
                <li>
                    <NavLink to="/" end>
                    INICIO
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/comprar">
                        COMPRAR
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/alquilar">
                        ALQUILAR
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/vender">
                        VENDER
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/nosotros">
                        NOSOTROS
                    </NavLink>
                </li>
            </ul>
        </header>
    )
}

export default Navbar;
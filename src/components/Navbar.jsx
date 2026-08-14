import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logoInmoPlus from '../assets/logo-InmoPlus.PNG';
import './Navbar.css';

<<<<<<< HEAD
function Navbar(){
=======
function Navbar({ vista, onInicio, onVender, onAlquilar }) {
>>>>>>> 45bd299 (Primer avance en la seccion Alquilar)

    return (
        <header>
<<<<<<< HEAD
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
=======
            <div id="contenedor-logo">
                <img id="logo-img" src={logoInmoPlus} alt="Logo InmoPlus" />
                <p id="logo-titulo">INMOPLUS PERÚ</p>
            </div>

            <ul id="navbar">
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
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            onAlquilar();
                        }}
                    >
                        ALQUILAR
                    </a>
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
>>>>>>> 45bd299 (Primer avance en la seccion Alquilar)
                </li>
            </ul>
        </header>
    )
}

export default Navbar;
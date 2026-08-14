import React, { useState, useEffect } from 'react';
import PropiedadCard from '../../components/PropiedadCard';
import './DepartamentosDestacados.css';
import { getPropiedades } from '../../services/propiedadesService';

function DepartamentosDestacados(){

    const [propiedades, setPropiedades] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        getPropiedades()
            .then((data) => {
                setPropiedades(data);
                setCargando(false);
            })
            .catch((error) => {
                console.error("Error al cargar departamentos destacados:", error);
                setCargando(false);
            });
    }, []);

    const destacados = propiedades.filter(propiedad => propiedad.destacado);

    return(

        <section className = "contenedor-destacados">
            <h2>Departamentos destacados</h2>
            <div className = "grid-propiedades">
                {destacados.map((prop) => (
                    <PropiedadCard
                        key = {prop.id}
                        propiedad = {prop}
                    />
                ))}
            </div>
        </section>
    )
}

export default DepartamentosDestacados;
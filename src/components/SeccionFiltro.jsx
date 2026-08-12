import { useState } from 'react';
import Button from './Button';
import './SeccionFiltro.css';
import { distritos } from '../data/propiedades';


function SeccionFiltro({onBuscar}){
    
    const [tipoOperacion, setTipoOperacion] = useState("");
    const [distrito, setDistrito] = useState("");
    const [precioMin, setPrecioMin] = useState(""); 
    const [precioMax, setPrecioMax] = useState("");

    const manejarBusqueda = (e) => {
        e.preventDefault();
        onBuscar({
            tipoOperacion,
            distrito,
            precioMin,
            precioMax
        });
    };

    return(
        <form onSubmit = {manejarBusqueda}>
            <div id="contenedor-btns">
                <Button 
                    texto = "Alquilar" 
                    accion = {() => setTipoOperacion("En alquiler")}
                    className = {tipoOperacion === "En alquiler" ? "activo" : ""}
                />
                <Button
                    texto = "Comprar"
                    accion = {() => setTipoOperacion("En venta")}
                    className = {tipoOperacion === "En venta" ? "activo" : ""}
                />
            </div>

            <div id="contenedor-filtros">
                <select 
                    name="distritos" 
                    id="select-distritos" 
                    value ={distrito} 
                    onChange={(e) => setDistrito(e.target.value)}>
                        <option 
                        value="">Selecciona un distrito</option>

                        {distritos.map((distrito) => (
                            <option key={distrito} value={distrito}>
                                {distrito}
                            </option>
                        ))}
                </select>

                <div id="rango-precio">
                    <span>S/. </span>
                    <input
                        type="number"
                        name="precioMin"
                        placeholder="Precio mínimo" 
                        value = {precioMin} 
                        onChange = {(e) => setPrecioMin(e.target.value)}
                    />

                    <span> - </span>

                    <span>S/. </span>
                    <input
                        type="number"
                        name="precioMax"
                        placeholder="Precio máximo" 
                        value = {precioMax}
                        onChange = {(e) => setPrecioMax(e.target.value)}
                    />
                </div>
                <Button 
                    texto = "Buscar" 
                    type = "submit"
                    className = "btn-buscar"/>
            </div>
        </form>
    )
}

export default SeccionFiltro;
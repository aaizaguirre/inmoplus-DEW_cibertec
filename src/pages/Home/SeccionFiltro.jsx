import { useState, useEffect } from 'react';
import Button from '../../components/Button';
import './SeccionFiltro.css';
import { getPropiedades } from '../../services/propiedadesService';


function SeccionFiltro({onBuscar}){
    
    const [tipoOperacion, setTipoOperacion] = useState("");
    const [distrito, setDistrito] = useState("");
    const [precioMin, setPrecioMin] = useState(""); 
    const [precioMax, setPrecioMax] = useState("");

    const [distritosLista, setDistritosLista] = useState([]);

    useEffect(() => {
        getPropiedades()
            .then((data) => {
                const distritosLimpios = data
                .map((p) => p.distrito)
                .filter((distrito) => distrito && distrito.trim() !== "");

                const distritosUnicos = [...new Set(distritosLimpios)].sort();
                setDistritosLista(distritosUnicos);
            })
            .catch((error) => console.error("Error al cargar distritos:", error));
    }, []);

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

                        {distritosLista.map((itemDistrito, index) => (
                            <option key={`${itemDistrito}-${index}`} value={itemDistrito}>
                                {itemDistrito}
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
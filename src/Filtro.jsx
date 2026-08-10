import { useState } from 'react';


function Filtro({onBuscar}){
    const distritos = [
        "Barranco",
        "Jesús María",
        "La Molina",
        "Lince",
        "Los Olivos",
        "Magdalena del Mar",
        "Miraflores",
        "Pueblo Libre",
        "San Isidro",
        "San Borja",
        "Surco", 
        "Surquillo",  
    ];

    const [distrito, setDistrito] = useState("");
    const [precioMin, setPrecioMin] = useState(""); 
    const [precioMax, setPrecioMax] = useState("");

    const manejarBusqueda = (e) => {
        e.preventDefault();
        onBuscar({
            distrito,
            precioMin,
            precioMax
        });
    };

    return(
        <form onSubmit = {manejarBusqueda}>
            <div id="contenedor-btns">
                <button type = "button">Alquilar</button>
                <button type = "button">Comprar</button>
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
                <button type = "submit">Buscar</button>
            </div>
        </form>
    )
}

export default Filtro;
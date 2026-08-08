import React from 'react';


function Filtro(){
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
    return(
        <form>
            <div id="contenedor-btns">
                <button>Alquilar</button>
                <button>Comprar</button>
            </div>

            <div id="contenedor-filtros">
                <select name="distritos" id="select-distritos">
                    <option value="">Selecciona un distrito</option>

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
                        name="precio-min"
                        placeholder="Precio mínimo"
                    />

                    <span> - </span>

                    <span>S/. </span>
                    <input
                        type="number"
                        name="precio-max"
                        placeholder="Precio máximo"
                    />
                </div>
                <button>Buscar</button>
            </div>
        </form>
    )
}

export default Filtro;
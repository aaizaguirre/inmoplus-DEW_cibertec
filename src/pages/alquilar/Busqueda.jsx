import './Busqueda.css';
function Paginacion() {
    return (
        <>
            <form action="">
                <div id='FiltrosMayores'>
                    <input
                        type="text"
                        name='busqUbicacion'
                        placeholder='Ubicación'
                        value={ }
                        onChange={ }
                    />
                    <select
                        name="operacion"
                        id="operacion"
                        value={ }
                        onChange={ }>
                    </select>
                    <select
                        name="propiedad"
                        id="propiedad"
                        value={ }
                        onChange={ }>
                    </select>
                    <select
                        name="precio"
                        id="precio"
                        value={ }
                        onChange={ }>
                    </select>
                    <select
                        name="filtros"
                        id="filtros"
                        value={ }
                        onChange={ }>
                    </select>
                </div>
                <div id='Filtros Menores'>
                    <p></p>
                    <select
                        name="ordenar"
                        id="ordenar"
                        value={ }
                        onChange={ }>
                    </select>
                </div>
            </form>
        </>
    )
}
export default Paginacion;
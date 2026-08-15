import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Busqueda.css';

function RangeSlider({ label, unidad, min, max, step, valorMin, valorMax, onChangeMin, onChangeMax }) {
    return (
        <div className='GrupoSlider'>
            <p className='EtiquetaSlider'>{label}</p>
            <div className='ValoresSlider'>
                <span>{valorMin}{unidad}</span>
                <span>{valorMax}{unidad}</span>
            </div>
            <div className='PistaSlider'>
                <div
                    className='RangoActivo'
                    style={{
                        left: `${((valorMin - min) / (max - min)) * 100}%`,
                        right: `${100 - ((valorMax - min) / (max - min)) * 100}%`
                    }}
                />
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={valorMin}
                    onChange={(e) => {
                        const nuevo = Math.min(Number(e.target.value), valorMax - step);
                        onChangeMin(nuevo);
                    }}
                    className='InputRango InputRangoMin'
                />
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={valorMax}
                    onChange={(e) => {
                        const nuevo = Math.max(Number(e.target.value), valorMin + step);
                        onChangeMax(nuevo);
                    }}
                    className='InputRango InputRangoMax'
                />
            </div>
        </div>
    );
}

function Busqueda() {
    const navigate = useNavigate();
    const [filtrosAbiertos, setFiltrosAbiertos] = useState(false);

    const manejarCambioOperacion = (e) => {
        const operacion = e.target.value;
        if (operacion === 'comprar') {
            navigate('/comprar');
        } else if (operacion === 'vender') {
            navigate('/vender');
        }
    };

    const [metrosMin, setMetrosMin] = useState(5);
    const [metrosMax, setMetrosMax] = useState(100);

    const [dormMin, setDormMin] = useState(1);
    const [dormMax, setDormMax] = useState(4);

    const [banoMin, setBanoMin] = useState(1);
    const [banoMax, setBanoMax] = useState(4);

    return (
        <form id='BarraBusqueda'>
            <div id='FiltrosMayores'>
                <div className='CampoFiltro' id='CampoUbicacion'>
                    <svg className='IconoCampo' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
                        <line x1="16.65" y1="16.65" x2="21" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <input
                        type="text"
                        name='busqUbicacion'
                        placeholder='Ubicación'
                    />
                </div>

                <div className='CampoFiltro'>
                    <select
                        name="operacion"
                        id="operacion"
                        defaultValue="alquilar"
                        onChange={manejarCambioOperacion}
                    >
                        <option value="alquilar">Alquilar</option>
                        <option value="comprar">Comprar</option>
                        <option value="vender">Vender</option>
                    </select>
                </div>

                <div className='CampoFiltro'>
                    <select
                        name="propiedad"
                        id="propiedad"
                        defaultValue=""
                    >
                        <option value="" disabled>Propiedad</option>
                        <option value="departamento">Departamento</option>
                        <option value="casa">Casa</option>
                        <option value="mansion">Mansión</option>
                        <option value="hotel">Hotel</option>
                    </select>
                </div>

                <div className='CampoFiltro'>
                    <select
                        name="precio"
                        id="precio"
                        defaultValue=""
                    >
                        <option value="" disabled>Precio</option>
                        <option value="0-2000">Hasta S/2,000</option>
                        <option value="2000-5000">S/2,000 - S/5,000</option>
                        <option value="5000-10000">S/5,000 - S/10,000</option>
                        <option value="10000+">Más de S/10,000</option>
                    </select>
                </div>

                <div id='ContenedorFiltros'>
                    <button
                        type="button"
                        id='BotonFiltros'
                        onClick={() => setFiltrosAbiertos(!filtrosAbiertos)}
                        aria-expanded={filtrosAbiertos}
                    >
                        <svg className='IconoCampo' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="4" y1="6" x2="20" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            <line x1="4" y1="18" x2="20" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            <circle cx="9" cy="6" r="2" fill="currentColor"/>
                            <circle cx="15" cy="12" r="2" fill="currentColor"/>
                            <circle cx="9" cy="18" r="2" fill="currentColor"/>
                        </svg>
                        Filtros
                    </button>

                    {filtrosAbiertos && (
                        <div id='PanelFiltros'>
                            <RangeSlider
                                label="Tamaño"
                                unidad=" m²"
                                min={5}
                                max={100}
                                step={1}
                                valorMin={metrosMin}
                                valorMax={metrosMax}
                                onChangeMin={setMetrosMin}
                                onChangeMax={setMetrosMax}
                            />

                            <RangeSlider
                                label="Dormitorios"
                                unidad=""
                                min={1}
                                max={4}
                                step={1}
                                valorMin={dormMin}
                                valorMax={dormMax}
                                onChangeMin={setDormMin}
                                onChangeMax={setDormMax}
                            />

                            <RangeSlider
                                label="Baños"
                                unidad=""
                                min={1}
                                max={4}
                                step={1}
                                valorMin={banoMin}
                                valorMax={banoMax}
                                onChangeMin={setBanoMin}
                                onChangeMax={setBanoMax}
                            />

                            <div id='AccionesPanelFiltros'>
                                <button
                                    type="button"
                                    id='BotonLimpiar'
                                    onClick={() => {
                                        setMetrosMin(5); setMetrosMax(100);
                                        setDormMin(1); setDormMax(4);
                                        setBanoMin(1); setBanoMax(4);
                                    }}
                                >
                                    Limpiar
                                </button>
                                <button
                                    type="button"
                                    id='BotonAplicar'
                                    onClick={() => setFiltrosAbiertos(false)}
                                >
                                    Aplicar
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div id='FiltrosMenores'>
                <p id='ContadorResultados'></p>
                <select
                    name="ordenar"
                    id="ordenar"
                    defaultValue=""
                >
                    <option value="" disabled>Ordenar</option>
                    <option value="recientes">Más recientes</option>
                    <option value="precio-asc">Precio: menor a mayor</option>
                    <option value="precio-desc">Precio: mayor a menor</option>
                </select>
            </div>
        </form>
    )
}
export default Busqueda;
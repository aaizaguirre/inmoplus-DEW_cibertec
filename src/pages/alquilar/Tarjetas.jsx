import './Tarjetas.css';

// Todos los íconos viven incrustados aquí mismo, como componentes SVG.
// Así el proyecto no depende de archivos externos en /assets, y se
// elimina cualquier posibilidad de conflicto de tamaño con CSS global
// o de referencias rotas dentro del propio archivo .svg.

function IconoCasa({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            width="18" height="18" className={className} aria-hidden="true">
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </svg>
    );
}

function IconoBano({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            width="18" height="18" className={className} aria-hidden="true">
            <path d="M10 4 8 6" />
            <path d="M17 19v2" />
            <path d="M2 12h20" />
            <path d="M7 19v2" />
            <path d="M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
        </svg>
    );
}

function IconoCama({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            width="18" height="18" className={className} aria-hidden="true">
            <path d="M2 4v16" />
            <path d="M2 8h18a2 2 0 0 1 2 2v10" />
            <path d="M2 17h20" />
            <path d="M6 8v9" />
        </svg>
    );
}

function IconoReloj({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            width="16" height="16" className={className} aria-hidden="true">
            <path d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
    );
}

function IconoTelefono({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            width="20" height="20" className={className} aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" />
        </svg>
    );
}

function IconoCorreo({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            width="20" height="20" className={className} aria-hidden="true">
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
        </svg>
    );
}

// Extrae m², dormitorios y baños del string "caracteristicas" del db.json
// Ej: "150 m2 3 dorm. 2 baños estacionamiento"
function parsearCaracteristicas(texto = '') {
    const metros = texto.match(/(\d+)\s*m2/i);
    const dormitorios = texto.match(/(\d+)\s*dorm/i);
    const banos = texto.match(/(\d+)\s*baño/i);

    return {
        metros: metros ? `${metros[1]} m²` : null,
        dormitorios: dormitorios ? `${dormitorios[1]} dorm.` : null,
        banos: banos ? `${banos[1]} baño${banos[1] === '1' ? '' : 's'}` : null,
    };
}

function Tarjetas({ propiedades }) {

    // Datos dinámicos de tarjetas según búsqueda
    // Datos dinámicos de tarjetas según paginación
    // Enlace de Whatsapp y Telefóno

    if (!propiedades || propiedades.length === 0) {
        return (
            <section>
                <div id='Bloques'>
                    <p>No hay propiedades disponibles.</p>
                </div>
            </section>
        );
    }

    return (
        <section>
            <div id='Bloques'>
                {propiedades.map((p) => {
                    const { metros, dormitorios, banos } = parsearCaracteristicas(p.caracteristicas);

                    return (
                        <div className='Bloque' key={p.id}>
                            <img src={p.imagen} alt={p.titulo} />
                            <article>
                                <div className='DetallesGenerales'>
                                    <div className='DetallesEspec1'>
                                        <p className='Precio'>S/{p.precio.toLocaleString()}</p>
                                        <p className='Ubicacion'>{p.titulo}</p>
                                        <div className='DetallesNumericos'>
                                            {metros && (
                                                <div className='GrupoEspec'>
                                                    <IconoCasa className='IconoEspec' />
                                                    <p>{metros}</p>
                                                </div>
                                            )}
                                            {banos && (
                                                <div className='GrupoEspec'>
                                                    <IconoBano className='IconoEspec' />
                                                    <p>{banos}</p>
                                                </div>
                                            )}
                                            {dormitorios && (
                                                <div className='GrupoEspec'>
                                                    <IconoCama className='IconoEspec' />
                                                    <p>{dormitorios}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className='Iconos'>
                                        <a href="tel:980245029" aria-label="Llamar">
                                            <IconoTelefono className='IconoSocial' />
                                        </a>
                                        <a href="mailto:contact@inmoplus.com" aria-label="Enviar correo">
                                            <IconoCorreo className='IconoSocial' />
                                        </a>
                                    </div>
                                </div>
                                <div className='DetallesEspec2'>
                                    <p className='DetEspec'>{p.distrito}</p>
                                    <IconoReloj className='IconosEspecc' />
                                    <p className='DetEspec'>{p.estado}</p>
                                </div>
                            </article>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}
export default Tarjetas;
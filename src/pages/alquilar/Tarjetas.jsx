import './Tarjetas.css';
/*
import telefono from '../../assets/telefono.jpg';
import email from '../../assets/email.jpg';
import iconoCasa from '../../assets/iconoCasa.jpg';
import iconoBano from '../../assets/iconoBano.jpg';
import iconoCama from '../../assets/iconoCama.jpg';
import fechaPub from '../../assets/fechaPub.jpg';
*/

function Tarjetas() {

    // Datos dinámicos de tarjetas según búsqueda
    // Datos dinámicos de tarjetas según paginación
    // Enlace de Whatsapp y Telefóno

    return (
        <>
            <section>
                <div id='Bloques'>
                    <div className='Bloque'>
                        <img src=""/>
                        <article>
                            <div className='DetallesGenerales'>
                                <div className='DetallesEspec1'>
                                    <p className='Precio'>S/10,000</p>
                                    <p className='Ubicacion'>Chacarilla, San Borja</p>
                                    <div className='DetallesNumericos'>
                                        <img className='IconoEspec' src="{iconoCasa}" />
                                        <p>3,000 m²</p>
                                        <img className='IconoEspec' src="{iconoBano}" />
                                        <p>2 baños</p>
                                        <img className='IconoEspec' src="{iconoCama}" />
                                        <p>2 dormitorios</p>
                                    </div>
                                </div>
                                <div className='Iconos'>
                                    <a href="tel:980245029">
                                        <img className='IconoSocial' src={telefono} alt="" />
                                    </a>
                                    <a href="mailto:contact@inmoplus.com" >
                                        <img className='IconoSocial' src={email} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className='DetallesEspec2'>
                                <img className='IconosEspecc' src=""/>
                                <p className='DetEspec'>Jessica Bienes Raíces</p>
                                <img className='IconosEspecc' src="{fechaPub}"/>
                                <p className='DetEspec'>Publicado 18 julio, 2026</p>
                            </div>
                        </article>
                    </div>
                    <div className='Bloque'>
                        <img src="" alt="" />
                        <article>
                            <div className='DetallesGenerales'>
                                <div className='DetallesEspec1'>
                                    <p>S/10,000</p>
                                    <p>Monterrico Norte, San Borja</p>
                                    <div className='DetallesNumericos'>
                                        <img className='IconoEspec' src="{iconoCasa}" />
                                        <p>2,500 m²</p>
                                        <img className='IconoEspec' src="{iconoBano}" />
                                        <p>1 baño</p>
                                        <img className='IconoEspec' src="{iconoCama}" />
                                        <p>2 dormitorios</p>
                                    </div>
                                </div>
                                <div className='Iconos'>
                                    <a href="tel:980245029">
                                        <img className='IconoSocial' src={telefono} alt="" />
                                    </a>
                                    <a href="mailto:contact@inmoplus.com" >
                                        <img className='IconoSocial' src={email} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className='DetallesEspec2'>
                                <img src=""/>
                                <p>Viva en el campo</p>
                                <img src="{fechaPub}"/>
                                <p>Publicado 18 julio, 2026</p>
                            </div>
                        </article>
                    </div>
                    <div className='Bloque'>
                        <img src="" alt="" />
                        <article>
                            <div className='DetallesGenerales'>
                                <div className='DetallesEspec1'>
                                    <p>S/21,000</p>
                                    <p>Corpac, San Borja</p>
                                    <div className='DetallesNumericos'>
                                        <img className='IconoEspec' src="{iconoCasa}" />
                                        <p>5,000 m²</p>
                                        <img className='IconoEspec' src="{iconoBano}" />
                                        <p>3 baños</p>
                                        <img className='IconoEspec' src="{iconoCama}" />
                                        <p>2 dormitorios</p>
                                    </div>
                                </div>
                                <div className='Iconos'>
                                    <a href="tel:980245029">
                                        <img className='IconoSocial' src={telefono} alt="" />
                                    </a>
                                    <a href="mailto:contact@inmoplus.com" >
                                        <img className='IconoSocial' src={email} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className='DetallesEspec2'>
                                <img src=""/>
                                <p>Viviaria Properties</p>
                                <img src="{fechaPub}"/>
                                <p>Publicado 18 julio, 2026</p>
                            </div>
                        </article>
                    </div>
                    <div className='Bloque'>
                        <img src="" alt="" />
                        <article>
                            <div className='DetallesGenerales'>
                                <div className='DetallesEspec1'>
                                    <p>S/30,000</p>
                                    <p>Corpac, San Borja</p>
                                    <div className='DetallesNumericos'>
                                        <img className='IconoEspec' src="{iconoCasa}" />
                                        <p>10,000 m²</p>
                                        <img className='IconoEspec' src="{iconoBano}" />
                                        <p>3 baños</p>
                                        <img className='IconoEspec' src="{iconoCama}" />
                                        <p>3 dormitorios</p>
                                    </div>
                                </div>
                                <div className='Iconos'>
                                    <a href="tel:980245029">
                                        <img className='IconoSocial' src={telefono} alt="" />
                                    </a>
                                    <a href="mailto:contact@inmoplus.com" >
                                        <img className='IconoSocial' src={email} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className='DetallesEspec2'>
                                <img src=""/>
                                <p>Properties</p>
                                <img src="{fechaPub}"/>
                                <p>Publicado 18 julio, 2026</p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Tarjetas;
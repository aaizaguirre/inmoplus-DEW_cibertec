import './vender.css';

function Vender({ onConfirmar }) {
    return (
        <section id="vender">

            {/* HERO DE VENDER */}
            <div className="vender-hero">

                <div className="vender-hero-contenido">
                    <h1>
                        VENDA SU INMUEBLE CON SEGURIDAD,
                        RAPIDEZ Y AL PRECIO QUE CORRESPONDE.
                    </h1>

                    <button onClick={() => {
                        document.getElementById("contacto-inmueble").scrollIntoView({
                             behavior: "smooth"
                             });
                    }}>
                        QUIERO SABER, ¿CUÁNTO VALE MI PROPIEDAD?
                    </button>

                    <p>
                        *Evaluación gratuita y orientación profesional
                        para la venta de tu inmueble.
                    </p>
                </div>

            </div>

            {/*EXPERIENCIA CERTIFICADA*/}
            <section className="experiencia">
                <h2>EXPERIENCIA CERTIFICADA</h2>

                <div className="experiencia-grid">

                    <div className="experiencia-card">
                        <h3>+500 PROPIEDADES</h3>
                        <p>
                            Más de 500 propiedades vendidas satisfactoriamente
                            en los últimos 30 días
                            y contamos con más de 20 años de experiencia.
                        </p>
            </div>

            <div className="experiencia-card">
                <h3>LOCALIZACIÓN ESTRATÉGICA</h3>
                <p>
                    Localizados en áreas estratégicas de Lima Metropolitana
                    y Lima Provincia, aparte de contar con sucursales a nivel nacional.
                </p>
            </div>

            <div className="experiencia-card">
                <h3>VENTAS ACELERADAS</h3>
                <p>
                    Con ventas Express: Menos de 60 días,
                    gracias a nuestro enfoque en el uso de
                    sistemas de redes avanzadas.
                </p>
            </div>

            <div className="experiencia-card">
                <h3>CERTIFICACIÓN ESTATAL</h3>
                <p>
                    Autorizado por el Ministerio de Vivienda,
                    Construcción y Saneamiento, con certificado
                    ISO 9001 a nivel inmobiliario.
                </p>
            </div>

        </div>
     </section>

     {/* VENTAS CONCRETADAS */}
<section className="ventas-concretadas">

    <h2>VENTAS CONCRETADAS</h2>

    <div className="ventas-grid">

        <div className="venta-card">
            <img src="/src/assets/venta-lamolina.webp" alt="Departamento en La Molina" />
            <h3>Departamento en La Molina - La Planicie</h3>
            <strong>Vendido en 25 días</strong>
            <p>
                Departamento de 145 mts. en La Planicie, La Molina -
                3er piso, vendido en US $ 800,000 al contado.
            </p>
        </div>

        <div className="venta-card">
            <img src="/src/assets/venta-sanborja.jpg" alt="Departamento en San Borja" />
            <h3>Departamento en San Borja - Chacarilla</h3>
            <strong>Vendido en 30 días</strong>
            <p>
                Departamento de 150 mts. en Chacarilla, San Borja -
                1er piso, vendido en US $ 400,000 con crédito hipotecario.
            </p>
        </div>

        <div className="venta-card">
            <img src="/src/assets/venta-surco.jpg" alt="Departamento en Surco" />
            <h3>Departamento en Surco - Precursores</h3>
            <strong>Vendido en 37 días</strong>
            <p>
                Departamento de 90 mts. en Precursores, Santiago de Surco -
                2do piso, vendido en US $ 280,000 con crédito hipotecario.
            </p>
        </div>

        <div className="venta-card">
            <img src="/src/assets/venta-sanisidro.jpg" alt="Departamento en San Isidro" />
            <h3>Departamento en San Isidro - Orrantia</h3>
            <strong>Vendido en 45 días</strong>
            <p>
                Departamento de 200 mts. en Orrantia, San Isidro -
                5to piso, vendido en US $ 600,000 al contado.
            </p>
        </div>

    </div>

    <button
     className="boton-tasar"
     onClick={() => {
        document.getElementById("contacto-inmueble").scrollIntoView({
             behavior: "smooth"
        });
    }}
     >
        NECESITO TASAR MI PROPIEDAD
    </button>

</section>
{/* CONVERSEMOS SOBRE TU INMUEBLE */}
<section id="contacto-inmueble" className="contacto-inmueble">

    <h2>CONVERSEMOS SOBRE TU INMUEBLE</h2>

    <p>
        Completa los siguientes datos para brindarte información,
        orientación y asesoramiento para la próxima venta de su propiedad.
    </p>

    <label>Nombres:</label>
    <input type="text" />

    <label>Celular:</label>
    <input type="text" />

    <label>Provincia:</label>
    <input type="text" />

    <label>Distrito:</label>
    <input type="text" />

    <label>Tipo de propiedad (dpto, casa, etc.):</label>
    <input type="text" />

    <button onClick={onConfirmar}>
        ENVIAR MI SOLICITUD GRATUITA
    </button>

</section>

            

</section>
    );
}

export default Vender;
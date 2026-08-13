import './SeccionMisionYVision.css';

function SeccionMisionYVision(){

    return(
        <>
            <section className = "contenedor-mision-vision">
                <div className = "card-mision-vision">
                    <h2>MISIÓN</h2>
                    <p>
                        Proporcionar un asesoramiento integral, a personas y empresas, que permita solucionar todas sus necesidades relacionadas con el mercado inmobiliario. Aportándoles una mayor rentabilidad basada en la responsabilidad y la trasparencia.
                    </p>
                </div>
                <div className = "card-mision-vision">
                    <h2>VISIÓN</h2>
                    <p>
                        Convertirnos en la empresa de referencia del sector inmobiliario en Lima, con objeto de que las personas que intervienen en este mercado piensen en nosotros como primera opción en el momento de vender, comprar o alquilar una vivienda.
                    </p>
                </div>
            </section>
            <section className = "contenedor-valores">
                <div class = "valores-header">
                    <h2>VALORES</h2>
                    <h3>¿Por qué confiar en nosotros?</h3>
                </div>
                <div className = "valores-grid">
                    <div className="valor-columna">
                        <h4>PASIÓN POR NUESTRA GENTE</h4>
                        
                        <div className="valor">
                            <span className="check">☑</span>
                            <p>Identifico oportunidades y me adelanto a las necesidades del cliente interno y externo.</p>
                        </div>

                        <div className="valor">
                            <span className="check">☑</span>
                            <p>Afronto los conflictos de manera proactiva, promoviendo el trabajo en equipo y aprovechándolos como oportunidades de aprendizaje y mejora.</p>
                        </div>

                        <div className="valor">
                            <span className="check">☑</span>
                            <p>Soy muy cuidadoso con los costos y los recursos de mi empresa. Propongo soluciones innovadoras basadas en datos y permito el cambio constante.</p>
                        </div>
                    </div>
                    <div className="valor-columna">
                        <h4>EXCELENCIA OPERACIONAL</h4>
                        
                        <div className="valor">
                            <span className="check">☑</span>
                            <p>Me comunico con sinceridad y respeto creando relaciones de confianza.</p>
                        </div>

                        <div className="valor">
                            <span className="check">☑</span>
                            <p>Soy ejemplo constante de colaboración y solidaridad dentro y fuera del equipo.</p>
                        </div>
                    </div>

                    <div className="valor-columna">
                        <h4>INTEGRIDAD</h4>
                        
                        <div className="valor">
                            <span className="check">☑</span>
                            <p>Soy valiente para enfrentar los retos, hacer lo correcto y decir las cosas como son. Actúo pensando en lo mejor para mi empresa, no sólo para mi área.</p>
                        </div>

                        <div className="valor">
                            <span className="check">☑</span>
                            <p>Soy ejemplo constante de colaboración y solidaridad dentro y fuera del equipo.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SeccionMisionYVision;

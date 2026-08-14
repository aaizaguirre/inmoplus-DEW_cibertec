import './confirmacion.css';

function Confirmacion() {
    return (
        <section className="confirmacion">

            <div className="confirmacion-contenido">

                <div className="check-circulo">
                    <span className="check">✓</span>
                </div>

                <h1>
                    TU SOLICITUD HA SIDO
                    <br />
                    REGISTRADA SATISFACTORIAMENTE
                </h1>

                <p>
                    Hemos recibido tu solicitud correctamente.
                </p>

            </div>

        </section>
    );
}

export default Confirmacion;
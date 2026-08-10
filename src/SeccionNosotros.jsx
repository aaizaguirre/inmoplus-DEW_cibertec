import equipoInmobiliaria from './assets/equipo-inmobiliaria.jpg'

function SeccionNosotros(){

    return(
        <section id= "seccionNosotros">
            <div id = "contenedor-frase">
                <h2>Te acompañamos en cada paso</h2>
                <p>Conoce más sobre nuestro equipo.</p>
                {/* TODO: ACTUALIZAR ENLACE DEL BUTTON */}
                <a href="#">
                    <button id = "btn-nosotros" href>Nosotros -❯</button>
                </a>
            </div>
            <div id = "contenedor-imagen">
                <img src={equipoInmobiliaria} alt="Equipo de trabajo de Inmobiliara InmoPlus Perú" />
            </div>
        </section>
    )
}

export default SeccionNosotros;
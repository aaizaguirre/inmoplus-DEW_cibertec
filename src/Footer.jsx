import logoInmoPlus from './assets/logo-InmoPlus.PNG' 

function Footer(){

    return(
        <footer>
            <div id = "contenedor-logo">
            <img id = "logo-img" src = {logoInmoPlus} alt = "Logo InmoPlus" />
            <p id = "logo-titulo">INMOPLUS PERÚ</p>
        </div>
        <div id = "contenedor-direccion">
            <h3>Dirección</h3>
            <p>Pasaje Velarde 188 - Cercado de Lima</p>
            <p>Horario: L - V 9:00 AM - 6:00 PM</p>
        </div>
        <div id = "contenedor-contacto">
            <h3>Contacto</h3>
            <p>+51 901 988 569</p>
            <p>contacto@inmoplus.com</p>
        </div>
        <div id = "contenedor-redes-sociales">

        </div>
        </footer>
    )
}

export default Footer
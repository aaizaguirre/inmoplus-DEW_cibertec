import logoInmoPlus from '../assets/logo-InmoPlus.PNG' 
import './Footer.css'

function Footer(){

    return(
        <footer>
            <div id = "contenedor-logo-footer">
                <img id = "logo-img-footer" src = {logoInmoPlus} alt = "Logo InmoPlus" />
                <p id = "logo-titulo">INMOPLUS PERÚ</p>
            </div>
            <div id = "contenedor-direccion">
                <h3>Dirección</h3>
                <p>Pasaje Velarde 188 - Cercado de Lima</p>
                <p>Horario: L - V 9:00 AM - 6:00 PM</p>
            </div>
            <div id = "contenedor-contacto">
                <h3>Contacto</h3>
                <a  href = "https://www.whatsapp.com/" target = "_blank" rel = "noopener noreferrer" aria-label = "Contactar por Whatsapp">
                    <i className="fa-brands fa-square-whatsapp"></i>
                    <span>+51 980 168 985</span>
                </a>
                <a href = "https://www.gmail.com/" target = "_blank" rel = "noopener noreferrer" aria-label = "Contactar por correo electrónico">
                    <i className="fa-solid fa-envelope"></i>
                    <span>contacto@inmoplus.com</span>
                </a>
            </div>
            <div id = "contenedor-redes-sociales">
                <h3>Síguenos en nuestras redes sociales</h3>
                <div className = "redes-iconos">
                    <a className = "social-button facebook" href = "https://www.facebook.com/" target = "_blank" rel = "noopener noreferrer" aria-label = "Visitar perfil de Facebook">
                        <i className="fab fa-facebook-f" aria-hidden="true"></i>
                    </a>
                    <a className = "social-button twitter" href = "https://www.twitter.com/" target = "_blank" rel = "noopener noreferrer" aria-label = "Visitar perfil de Twitter">
                        <i className = "fab fa-twitter" aria-hidden = "true"></i>
                    </a>
                    <a className = "social-button tiktok" href = "https://www.tiktok.com/" target = "_blank" rel = "noopener noreferrer" aria-label = "Visitar perfil de TikTok">
                        <i className = "fab fa-tiktok" aria-hidden = "true"></i>
                    </a>
                    <a className = "social-button youtube" href = "https://www.youtube.com/" target = "_blank" rel = "noopener noreferrer" aria-label = "Visitar canal de YouTube">
                        <i className = "fab fa-youtube" aria-hidden = "true"></i>
                    </a>
                    <a className = "social-button instagram" href = "https://www.instagram.com/" target = "_blank" rel = "noopener noreferrer" aria-label = "Visitar perfil de Instagram">
                        <i className = "fab fa-instagram" aria-hidden = "true"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
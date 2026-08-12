import Button from './Button';
import './SeccionNosotros.css';
import equipoInmobiliaria from '../assets/equipo-inmobiliaria.jpg';

function SeccionNosotros(){

    return(
        <section id= "seccionNosotros">
            <div id = "contenedor-frase">
                <h2>Te acompañamos en cada paso</h2>
                <p>Conoce más sobre nuestro equipo.</p>
                {/* TODO: ACTUALIZAR ENLACE DEL BUTTON */}
                <Button texto = "Nosotros"></Button> 
            </div>
            <div id = "contenedor-imagen">
                <img src={equipoInmobiliaria} alt="Equipo de trabajo de Inmobiliara InmoPlus Perú" />
            </div>
        </section>
    )
}

export default SeccionNosotros;
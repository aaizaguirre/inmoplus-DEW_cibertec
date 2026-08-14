import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import './SeccionNosotros.css';
import equipoInmobiliaria from '../../assets/equipo-inmobiliaria.jpg';

function SeccionNosotros({mostrarBoton = true, titulo = "Te acompañamos en cada paso", parrafo = "Conoce más sobre nuestro equipo."}){
        
    return(
        <section id= "seccionNosotros">
            <div id = "contenedor-frase">
                <h2>{titulo}</h2>
                <p>{parrafo}</p>
                {mostrarBoton && (
                    <Link to="/nosotros">
                        <Button texto="Nosotros" />
                    </Link>
                )}
            </div>
            <div id = "contenedor-imagen">
                <img src={equipoInmobiliaria} alt="Equipo de trabajo de Inmobiliara InmoPlus Perú" />
            </div>
        </section>
    )
}

export default SeccionNosotros;
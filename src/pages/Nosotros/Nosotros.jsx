import Hero from '../../components/Hero';
import SeccionNosotros from '../Home/SeccionNosotros';
import SeccionMisionYVision from '../Nosotros/SeccionMisionYVision';

import nosotros1 from '../../assets/equipo-inmobiliaria.jpg';
import nosotros2 from '../../assets/equipo-inmobiliaria2.jpg';
import nosotros3 from '../../assets/equipo-inmobiliaria3.avif';
import nosotros4 from '../../assets/equipo-inmobiliaria4.jpg';

function Nosotros(){

    const imagenesNosotros = [nosotros2, nosotros3, nosotros4];

    return(
        <>
            <Hero
                imagenes = {imagenesNosotros}
                titulo = "Conoce a InmoPlus Perú"
                subtitulo = "Construyendo sueños para familias peruanas"
            />
            <SeccionNosotros 
                mostrarBoton = {false}
                titulo = "¿Quíénes somos?"
                parrafo = "Somos una agencia inmobiliaria comprometida en brindar asesoría integral y personalizada. Nuestro equipo de profesionales cuenta con más de 20 años de experiencia guiando a familias e inversionistas a tomar la mejor decisión, garantizando seguridad jurídica, transparencia y acompañamiento desde la primera consulta hasta la entrega de llaves."
            />
            <SeccionMisionYVision/>
        </>
    )
}

export default Nosotros;
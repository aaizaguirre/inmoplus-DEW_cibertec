import { useNavigate } from 'react-router-dom';
import Busqueda from './Busqueda';
import Tarjetas from './Tarjetas';
import Paginacion from './Paginacion';

function Alquilar({propiedades}) {
    return(
        <>
            <Busqueda/>
            <Tarjetas propiedades={propiedades}/>
            <Paginacion/>
        </>
    )
}
export default Alquilar;
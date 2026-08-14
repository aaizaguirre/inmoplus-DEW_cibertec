import './Paginacion.css';
function Paginacion() {
    return (
        <>
            <div id='Paginacion'>
                <button className='PagFlecha'>❮</button>
                <button className='PagNumero'>1</button>
                <button className='PagNumero'>2</button>
                <button className='PagNumero'>3</button>
                <button className='PagFlecha'>❯</button>
            </div>
            <p></p>
        </>
    )
}
export default Paginacion;
import "./Paginacion.css";

function Paginacion() {
  return (
    <>
      <div id="PaginacionContenedor">
        <div id="Paginacion">
          <button className="PagFlecha">❮</button>

          <button className="PagNumero Activa">1</button>
          <button className="PagNumero">2</button>
          <button className="PagNumero">3</button>

          <button className="PagFlecha">❯</button>
        </div>

        <p className="PagTexto">
          1/4 de 1,000 publicaciones
        </p>
      </div>
    </>
  );
}

export default Paginacion;

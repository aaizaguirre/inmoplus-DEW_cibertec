import { useMemo, useState } from 'react';
import './Comprar.css';
import compraMiraflores from '../../assets/compra-miraflores.jpg';
import compraSurco from '../../assets/compra-surco.jpg';
import compraBarranco from '../../assets/compra-barranco.jpg';
import compraSanIsidro from '../../assets/compra-san-isidro.jpg';
import compraSanBorja from '../../assets/compra-san-borja.jpg';
import compraLaMolina from '../../assets/compra-lamolina.jpg';
const propiedadesCompra = [
  {
    id: 'compra-1',
    titulo: 'Departamento moderno en Miraflores',
    distrito: 'Miraflores',
    precio: 420000,
    dormitorios: 3,
    banos: 2,
    area: 95,
    imagen: compraMiraflores
  },
  {
    id: 'compra-2',
    titulo: 'Departamento familiar en Surco',
    distrito: 'Surco',
    precio: 510000,
    dormitorios: 3,
    banos: 3,
    area: 110,
    imagen: compraSurco
  },
  {
    id: 'compra-3',
    titulo: 'Departamento con terraza en Barranco',
    distrito: 'Barranco',
    precio: 620000,
    dormitorios: 2,
    banos: 2,
    area: 88,
    imagen: compraBarranco
  },
  {
    id: 'compra-4',
    titulo: 'Departamento exclusivo en San Isidro',
    distrito: 'San Isidro',
    precio: 680000,
    dormitorios: 3,
    banos: 2,
    area: 120,
    imagen: compraSanIsidro
  },
  {
    id: 'compra-5',
    titulo: 'Departamento acogedor en San Borja',
    distrito: 'San Borja',
    precio: 560000,
    dormitorios: 2,
    banos: 2,
    area: 82,
    imagen: compraSanBorja
  },
  {
    id: 'compra-6',
    titulo: 'Casa contemporánea en La Molina',
    distrito: 'La Molina',
    precio: 720000,
    dormitorios: 4,
    banos: 3,
    area: 150,
    imagen: compraLaMolina
  }
];

function Comprar() {
  const propiedades = propiedadesCompra;
  
  const [distrito, setDistrito] = useState('');
  const [precioMaximo, setPrecioMaximo] = useState('');
  const [dormitorios, setDormitorios] = useState('');

  const propiedadesFiltradas = useMemo(() => {
    return propiedades.filter((propiedad) => {
      const distritoPropiedad = String(
        propiedad.distrito || propiedad.Distrito || ''
      ).toLowerCase();

      const precioPropiedad = Number(
        propiedad.precio ||
        propiedad.precioVenta ||
        propiedad.monto ||
        propiedad.Monto ||
        0
      );

      const dormitoriosPropiedad = Number(
        propiedad.dormitorios ||
        propiedad.habitaciones ||
        propiedad.numDormitorios ||
        0
      );

      const coincideDistrito = distrito
        ? distritoPropiedad.includes(distrito.toLowerCase())
        : true;

      const coincidePrecio = precioMaximo
        ? precioPropiedad <= Number(precioMaximo)
        : true;

      const coincideDormitorios = dormitorios
        ? dormitoriosPropiedad === Number(dormitorios)
        : true;

      return (
        coincideDistrito &&
        coincidePrecio &&
        coincideDormitorios
      );
    });
  }, [propiedades, distrito, precioMaximo, dormitorios]);

  const limpiarFiltros = () => {
    setDistrito('');
    setPrecioMaximo('');
    setDormitorios('');
  };

  return (
    <main className="comprar">
      <section className="comprar__hero">
        <p className="comprar__eyebrow">INMOPLUS PERÚ</p>

        <h1>Encuentra tu próximo hogar</h1>

        <p>
          Explora departamentos disponibles y encuentra una propiedad que se
          adapte a tus necesidades.
        </p>
      </section>

      <section className="comprar__buscador">
        <label>
          Distrito
          <input
            type="text"
            placeholder="Ej. Miraflores"
            value={distrito}
            onChange={(event) => setDistrito(event.target.value)}
          />
        </label>

        <label>
          Precio máximo
          <input
            type="number"
            placeholder="Ej. 500000"
            value={precioMaximo}
            onChange={(event) => setPrecioMaximo(event.target.value)}
          />
        </label>

        <label>
          Dormitorios
          <select
            value={dormitorios}
            onChange={(event) => setDormitorios(event.target.value)}
          >
            <option value="">Todos</option>
            <option value="1">1 dormitorio</option>
            <option value="2">2 dormitorios</option>
            <option value="3">3 dormitorios</option>
            <option value="4">4 dormitorios</option>
          </select>
        </label>

        <button
          type="button"
          className="comprar__button"
          onClick={limpiarFiltros}
        >
          Limpiar
        </button>
      </section>

      <section className="comprar__contenido">
        <aside className="comprar__filtros">
          <h2>Filtros</h2>

          <p>
            Personaliza tu búsqueda según tus preferencias.
          </p>

          <p className="comprar__contador">
            Resultados: <strong>{propiedadesFiltradas.length}</strong>
          </p>
        </aside>

        <section className="comprar__resultados-lista">
          <div className="comprar__encabezado">
            <p className="comprar__eyebrow">
              PROPIEDADES DISPONIBLES
            </p>

            <h2>Departamentos en venta</h2>
          </div>

          {propiedadesFiltradas.length === 0 ? (
            <div className="comprar__vacio">
              <h3>No encontramos propiedades</h3>
              <p>Prueba cambiando los filtros de búsqueda.</p>
            </div>
          ) : (
            <div className="comprar__grid">
              {propiedadesFiltradas.map((propiedad, index) => {
                const titulo =
                  propiedad.titulo ||
                  propiedad.nombre ||
                  propiedad.tipo ||
                  'Departamento disponible';

                const distritoTexto =
                  propiedad.distrito ||
                  propiedad.Distrito ||
                  'Distrito no especificado';

                const precio =
                  propiedad.precio ||
                  propiedad.precioVenta ||
                  propiedad.monto ||
                  propiedad.Monto ||
                  0;

                const dormitoriosTexto =
                  propiedad.dormitorios ||
                  propiedad.habitaciones ||
                  propiedad.numDormitorios ||
                  '-';

                const banos =
                  propiedad.banos ||
                  propiedad.baños ||
                  propiedad.numeroBanos ||
                  '-';

                const area =
                  propiedad.area ||
                  propiedad.metrosCuadrados ||
                  propiedad.tamano ||
                  '-';

                return (
                  <article
                    className="propiedad-card"
                    key={propiedad.id || index}
                  >
                    <div className="propiedad-card__imagen">
                      {propiedad.imagen ? (
                        <img
                          src={propiedad.imagen}
                          alt={titulo}
                        />
                      ) : (
                        <span>Imagen de propiedad</span>
                      )}
                    </div>

                    <div className="propiedad-card__contenido">
                      <p className="propiedad-card__precio">
                        S/ {Number(precio).toLocaleString('es-PE')}
                      </p>

                      <h3>{titulo}</h3>
                      <p>{distritoTexto}</p>

                      <div className="propiedad-card__datos">
                        <span>{dormitoriosTexto} dorm.</span>
                        <span>{banos} baños</span>
                        <span>{area} m²</span>
                      </div>

                      <button type="button">
                        Ver detalle
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </section>

      <section className="comprar__destacados">
        <div>
          <p className="comprar__eyebrow">
            SELECCIÓN INMOPLUS
          </p>

          <h2>Propiedades destacadas</h2>
        </div>

        <p>
          Conoce departamentos seleccionados por ubicación, distribución y
          valor.
        </p>
      </section>
    </main>
  );
}

export default Comprar;
const API_URL = "http://127.0.0.1:3000/propiedades";

export async function getPropiedades(){
    const res = await fetch(API_URL);
    if(!res.ok) throw new Error("Error al obtener las propiedades");
    return await res.json();
}

export async function getPropiedadById(id){
    const res = await fetch(`${API_URL}/${id}`);
    if(!res.ok) throw new Error("Propiedad no encontrada");
    return await res.json();
}

export async function deletePropiedad(id) {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });
    return await res.json();
}

export const filtrarPropiedades = (lista, filtros) => {
    const { tipoOperacion, distrito, precioMin, precioMax } = filtros;

    return lista.filter((p) => {
        const coincideEstado = !tipoOperacion || p.estado === tipoOperacion;
        const coincideDistrito = !distrito || p.distrito === distrito;
        const coincideMin = !precioMin || p.precio >= Number(precioMin);
        const coincideMax = !precioMax || p.precio <= Number(precioMax);

        return coincideEstado && coincideDistrito && coincideMin && coincideMax;
    });
};
const API_URL = "http://127.0.0.1:3000/testimonios"

export async function getTestimonios() {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Error al obtener los testimonios");
    return await res.json();
}
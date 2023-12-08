
//? Fetch para obtener las preguntas de la API
export async function obtenerDatosPreguntas() {
    const respuesta = await fetch(import.meta.env.VITE_API_URL)
    const resultado = await respuesta.json()
    // console.log(resultado)
    return resultado //exportamos los resultado para darles manejo
}
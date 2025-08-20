export const api = async (limit=3 ,busqueda) => {
    const key = "Ku0TjSYEDGKWtL7O49U5muNHIev98r4z";

    const url = `https://api.giphy.com/v1/stickers/search?api_key=${key}&q=${busqueda}&limit=${limit}&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

    try {
        const respuesta = await fetch(url);
        const json = await respuesta.json(); 
        const data = json.data;

        // Transformar los datos obtenidos en un formato más manejable
        const gifs = data.map(gif =>({
            id: gif.id,
            title: gif.title,
            url: gif.images.original.url,
        }))

        console.log(gifs); // Aquí puedes ver los GIFs obtenidos
        return gifs; 
    } catch (error) {
        console.error("Error al realizar la llamada a la API:", error);
    }
};
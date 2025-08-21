import { useState, useEffect } from "react"
import { Tarjetagif } from "./Tarjetagif"
import './Secciongif.css'
import { api } from "../utils/api"



export const Secciongif = ({ busqueda }) => {
    console.log(busqueda)
    const [offset, setOffset] = useState(0)
    const [gifs, setGifs] = useState([]);

    const eliminarGif = (id) => {
    const nuevosGifs = gifs.filter(gif => gif.id !== id)
    setGifs(nuevosGifs);
    console.log(`Gif con id ${id} a sido eliminado `)
}
const cargarmasgifs = async () => {
    const nuevoOffset = offset + 6;
    const nuevosGifs = await api(6,busqueda, nuevoOffset);
    setGifs([...gifs,...nuevosGifs]);
    setOffset(nuevoOffset);
}

    useEffect(() => {
        const obtenerGifs = async () => {
            const resultado = await api(6, busqueda);
            setGifs(resultado || [])
        };
        obtenerGifs();
    }, [busqueda])

    return (

        <>
            <div className="secciongif1">
                {gifs.map(gif => (<Tarjetagif
                    key={gif.id}
                    titulo={gif.title}
                    img={gif.url}
                    eliminarGif={() => eliminarGif(gif.id)}
                />)
                )
                }
            </div>
            <button onClick={cargarmasgifs}>mas</button>
        </>
    )
}
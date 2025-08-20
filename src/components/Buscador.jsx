
import { useState } from "react"
import './buscador.css'
export const Buscador = ({setBusqueda}) => {

    
    const [valortemporal, setValortemporal] = useState('')
    return (<>




        <input type="text"
            placeholder="encuentra tu gif"
            value={valortemporal}
            onChange={(e) => setValortemporal(e.target.value)
            }
            onKeyDown={(e) => {
                if (e.key === 'Enter' && valortemporal.trim() !== '') { setBusqueda(valortemporal) }

            }}
        />

    </>)
}
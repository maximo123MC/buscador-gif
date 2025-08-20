import './Tarjetagif.css'
import { FiAirplay } from "react-icons/fi";
export const Tarjetagif = ({ img, titulo, eliminarGif}) => {

    return (
        <>
            <div className='tarjetagif'>

                <img src={img} alt="" />
               <div className='junto'>
                <p>{titulo}</p>
                <FiAirplay onClick={eliminarGif}/>
                </div>
            </div>
        </>



    )
}
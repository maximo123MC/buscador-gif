import { useState } from "react";
import { Buscador } from "./components/Buscador.jsx";
import './App.css'
import { Secciongif } from "./components/secciongif.jsx";
import { Tarjetagif } from "./components/Tarjetagif.jsx";

function App() {
    const [busqueda, setBusqueda] = useState('')
    return (
        <>
            <header>
                <h1>Buscador gif ☼</h1>
            </header>

            <main>
                <Buscador setBusqueda={setBusqueda}/>
                <Secciongif busqueda={busqueda}/>
            </main>

            <footer></footer>


        </>
    )

}
export default App
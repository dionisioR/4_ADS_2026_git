
import Contador from "@/app/components/contador/Contador"

import styles from "./contadorsimples.module.css"
import Titulo from "@/app/components/Titulo/Titulo"
import NavBar from "@/app/components/NavBar/NavBar"

export default function ContadorSimples() {

    return (
        <div>
            <NavBar />
            <div className="container mt-3">
                <Titulo titulo="Contador Simples" nivel={1} />
                <Contador />
            </div>
        </div>
    )
}
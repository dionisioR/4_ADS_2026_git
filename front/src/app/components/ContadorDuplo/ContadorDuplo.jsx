"use client"
import { useState } from "react"

export default function ContadorDuplo() {

    const [contA, setContA] = useState(0)
    const [contB, setContB] = useState(10)

    function incrementarA() {
        setContA(contA + 1)
    }
    function incrementarB() {
        setContB(contB + 1)
    }
    function decrementarA() {
        setContA(contA - 1)
    }
    function decrementarB() {
        setContB(contB - 1)
    }

    function resetarA() {
        setContA(0)
    }
    function resetarB() {
        setContB(10)
    }

    function zerarTudo(){
        setContA(0)
        setContB(0)
    }

    return (
        <>
            <div className="text-center alert alert-danger py-5">
                <h2>Contador A</h2>
                <p className="display-3">{contA}</p>

                <button className="btn btn-primary" onClick={incrementarA}>+1</button>

                <button className="btn btn-success mx-2" onClick={decrementarA}>-1</button>

                <button className="btn btn-warning" onClick={resetarA}>Resetar</button>
            </div>

            <div className="text-center alert alert-primary py-5">
                <h2>Contador B</h2>
                <p className="display-3">{contB}</p>
                <button className="btn btn-primary" onClick={incrementarB}>+1</button>
                <button className="btn btn-success mx-2" onClick={decrementarB}>-1</button>

                <button className="btn btn-warning" onClick={resetarB}>Resetar</button>
            </div>


            <div className="text-center mb-5">
                <button className="btn btn-danger" onClick={zerarTudo}>Zerar Tudo</button>
            </div>

        </>
    )
}
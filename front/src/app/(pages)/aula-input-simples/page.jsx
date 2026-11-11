"use client"
import NavBar from "@/app/components/NavBar/NavBar";
import Titulo from "@/app/components/Titulo/Titulo";
import { useState } from "react";

export default function AulaInput() {

    const [texto, setTexto] = useState('');

    return (
        <>
            <NavBar />
            <div className="container mt-3">
                <Titulo nivel={1} titulo="Input Simples" />

                <div className="row mt-5">
                    <div className="col-12 col-md-6">

                        <h3>Input</h3>

                        <input
                            type="text"
                            placeholder="Digite um texto" className="form-control"
                            value={texto}
                            onChange={(e) => setTexto(e.target.value)}
                        />

                    </div>

                    <div className="col-12 col-md-6">
                        <div className="text-center">
                            <h3>Texto digitado</h3>

                            <h5>
                                {texto}
                            </h5>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
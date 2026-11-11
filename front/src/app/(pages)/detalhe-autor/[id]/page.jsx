"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";

import NavBar from "@/app/components/NavBar/NavBar";
import Titulo from "@/app/components/Titulo/Titulo";

export default function DetalheAutor() {

    const { id } = useParams();
    const [autor, setAutor] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState('');

    useEffect(

        () => {
            async function buscarAutor() {
                try {
                    const resposta = await axios.get(`http://localhost:3001/autores/${id}`);
                    setAutor(resposta.data);
                } catch (erro) {
                    setErro('Opps!!!! Não foi possível encontrar o autor');
                } finally {
                    setCarregando(false);
                }
            }
            buscarAutor()

        }, [id])

    return (
        <>
            <NavBar />
            <div className="container mt-4">
                <Titulo titulo="Detalhe do Autor" nivel={1} />

                {
                    carregando ? (<p className="alert alert-dark mt-">Carregando...</p>) : erro ? (<p className="alert alert-danger mt-"> {erro} </p>) : (
                        <section className="card mt-3">
                            <div className="card-body">
                                <h2 className="card-title">{autor.nome}</h2>

                                <p className="card-text">
                                    {autor.nacionalidade}
                                </p>
                                <p className="card-text">
                                    {autor.dataNascimento}
                                </p>
                            </div>
                        </section>
                    )
                }

                <Link href="/listar-autores" className="btn btn-primary mt-3">Voltar</Link>

            </div>
        </>
    )
}
"use client";
import NavBar from "@/app/components/NavBar/NavBar";
import Titulo from "@/app/components/Titulo/Titulo";

import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ListarAutores() {

    const [autores, setAutores] = useState([]); // Guardar a lista de autores
    const [carregando, setCarregando] = useState(true);

    const [erro, setErro] = useState('');
    const [msg, setMsg] = useState('');

    const [exclusao, setExclusao] = useState({
        autor: null,
        excluindo: false,
        erro: "",
        sucesso: ""
    });


    useEffect(

        // lógica de consumo da API
        () => {
            async function buscarAutores() {
                try {
                    const resposta = await axios.get('http://localhost:3001/autores');
                    setAutores(resposta.data);
                } catch (erro) {
                    setErro('Não foi possível carregar os dados dos autores');
                } finally {
                    setCarregando(false);
                }
            }
            buscarAutores()
        }, []
    )






    // inicio deletar
    useEffect(() => {
        if (!exclusao.sucesso) { return; }

        const temporizador = setTimeout(() => {
            setExclusao((estadoAtual) => ({
                ...estadoAtual,
                sucesso: ""
            }));
        }, 5000);

        return () => clearTimeout(temporizador);
    }, [exclusao.sucesso]);
    // fim deletar

    // enviar a exclusão para a API
    async function excluirAutor() {
        if (!exclusao.autor) { return; }

        setExclusao(
            (estadoAtual) => ({
                ...estadoAtual,
                excluindo: true,
                erro: "",
            })
        );

        try {
            // deleta o autor na API
            await axios.delete(`http://localhost:3001/autores/${exclusao.autor.id}`);

            // atualiza a lista de autores removendo o autor excluído
            setAutores(
                (autoresAtuais) => autoresAtuais.filter((autor) => autor.id !== exclusao.autor.id)
            )

            setExclusao(
                (estadoAtual) => ({
                    ...estadoAtual,
                    autor: null,
                    sucesso: "Autor excluído com sucesso!",
                })
            );

            // fecha o modal
            document.querySelector("#exampleModal[data-bs-dismiss='modal']")?.click();

            //---------------------------
            // const modal = document.querySelector("#exampleModal");
            // if(modal){
            //     const modalInstance = window.bootstrap.Modal.getInstance(modal);
            //     modalInstance?.hide();
            // }
            // //---------------------------

        } catch {

            setExclusao(
                (estadoAtual) => ({
                    ...estadoAtual,
                    erro: "Não foi possível excluir o autor. Tente novamente mais tarde.",
                })
            );

        } finally {
            setExclusao(
                (estadoAtual) => ({
                    ...estadoAtual,
                    excluindo: false,
                })
            )
        }

    }





    return (
        <>
            <NavBar />
            <div className="container mt-4">
                <Titulo nivel={1} titulo="Lista de autores" />

                {
                    exclusao.sucesso && (
                        <div className="alert alert-success mt-3">{exclusao.sucesso}</div>
                    )
                }

                {
                    carregando ? (
                        <p className="mt-3 alert alert-dark">Carregando autores...</p>
                    ) : erro ? (
                        <div className="alert alert-danger mt-3">{erro}</div>
                    ) : (
                        <table className="table table-hover table-striped">
                            <thead>
                                <tr>
                                    <td>Nome</td>
                                    <td>Nacionalidade</td>
                                    <td>Data de Nascimento</td>
                                    <td>Ações</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    autores.map((autor) => (
                                        <tr key={autor.id}>
                                            <td>{autor.nome}</td>
                                            <td>{autor.nacionalidade}</td>
                                            <td>{autor.dataNascimento}</td>
                                            <td>

                                                <Link href={`/detalhe-autor/${autor.id}`} className="btn btn-primary" title="Detalhes">Detalhes</Link>

                                                <a href="#" className="btn btn-warning mx-2" title="Editar">Editar</a>

                                                <a href="#"
                                                    className="btn btn-danger"
                                                    title="Excluir"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal"
                                                    data-bs-dismiss="modal"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setExclusao((estadoAtual) => ({
                                                            ...estadoAtual,
                                                            autor: autor,
                                                            erro: ""
                                                        }))
                                                    }}
                                                >
                                                    Excluir
                                                </a>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>

                        </table>
                    )
                }




            </div>


            {/* ********** inicio modal bootstrap ********** */}

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Confirmar Exclusão</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
                        </div>
                        <div className="modal-body">
                            {/* ------------------------------- */}
                            <p>
                                Tem certeza que deseja excluir o autor?
                            </p>
                            {
                                exclusao.autor && (
                                    <>
                                        <p>
                                            <strong>Nome:</strong>   {exclusao.autor.nome}
                                            <br />
                                            <strong>Nacionalidade:</strong> {exclusao.autor.nacionalidade}
                                            <br />
                                            <strong>Data de Nascimento:</strong> {exclusao.autor.dataNascimento}
                                        </p>
                                    </>
                                )
                            }

                            {
                                exclusao.erro && (
                                    <div className="alert alert-danger mt-3">   
                                        {exclusao.erro}
                                    </div>
                                )
                            }

                            {/* ------------------------------- */}


                        </div>
                        <div className="modal-footer">
                            <button 
                                type="button" 
                                className="btn btn-secondary" data-bs-dismiss="modal"
                                disabled={exclusao.excluindo}
                            >
                            Cancelar
                            </button>
                            {/* -------------------------------- */}




                            <button 
                                type="button" 
                                className="btn btn-danger"
                                onClick={excluirAutor}
                                disabled={exclusao.excluindo || !exclusao.autor}
                            >
                            {exclusao.excluindo ? "Excluindo..." : "Excluir"}
                            </button>



                            {/* -------------------------------- */}
                        </div>
                    </div>
                </div>
            </div>
            {/* ********** fim modal bootstrap ********** */}
        </>
    )
}
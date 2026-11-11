"use client"

import { useState } from "react";

import NavBar from "@/app/components/NavBar/NavBar";
import Titulo from "@/app/components/Titulo/Titulo";

export default function AulaForm() {

    // guardar os valores do formulário
    const [nome, setNome] = useState('')  // input nome
    const [preco, setPreco] = useState('')  // input preco
    const [descricao, setDescricao] = useState('') // input descricao

    // Guardar os dados do produto cadastrado
    const [produtos, setProdutos] = useState([])

    function adicionarProdutos(event) {
        event.preventDefault()

        // cria o objeto produto
        const novoProduto = {
            nome: nome,
            descricao: descricao,
            preco: preco
        }

        // adiciona um novo produto ao array
        setProdutos([...produtos, novoProduto])

        setNome("")
        setPreco("")
        setDescricao("")
    }


    return (
        <>
            <NavBar />
            <div className="container mt-3">

                <div className="row">
                    <div className="col-12 col-md-4">
                        <Titulo nivel={1} titulo="Formulário" />

                        <form onSubmit={adicionarProdutos}>
                            <div className="mb-3">
                                <label>Nome do produto</label>
                                <input
                                    type="text"
                                    placeholder="Digite o nome do produto"
                                    className="form-control"
                                    value={nome}
                                    onChange={(event) => setNome(event.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                <label>Preco do produto</label>
                                <input
                                    type="number"
                                    step="0.1"
                                    placeholder="Digite o preço do produto"
                                    className="form-control"
                                    value={preco}
                                    onChange={(event) => setPreco(event.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                <label>Descrição do produto</label>
                                <textarea
                                    placeholder="Digite a descrição do produto"
                                    className="form-control"
                                    rows="4"
                                    value={descricao}
                                    onChange={(event) => setDescricao(event.target.value)}
                                ></textarea>
                            </div>

                            <div className="mb-3">
                                <button className="btn btn-outline-dark" type="submit">
                                    Adicionar Produto
                                </button>
                            </div>
                        </form>


                    </div>
                    <div className="col-12 col-md-8">
                        <Titulo nivel={1} titulo="Dados cadastrados" />
                        <table className="table table-hover table-striped">
                            <thead>
                                <tr>
                                    <td>Nome</td>
                                    <td>Preço</td>
                                    <td>Descrição</td>
                                </tr>
                            </thead>

                            <tbody>
                                {/* aqui entram os dados */}

                                {
                                    produtos.map((produto, index) => (
                                        <tr key={index}>
                                            <td>{produto.nome}</td>
                                            <td>{produto.preco}</td>
                                            <td>{produto.descricao}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
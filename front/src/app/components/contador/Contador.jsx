'use client'

import { useState } from 'react'
import styles from './contador.module.css'

export default function Contador() {
    const [contador, setContador] = useState(100)

    // let cont = 0;
    // function incrementarLet() {
    //     cont++;
    //      console.log(cont);
    // }
    // function decrementarLet() {
    //     cont--;
    //      console.log(cont);
    // }

    function incrementar() {
        setContador(contador + 1)
    }

    function decrementar() {
        setContador(contador - 1)

    }
           
    return (
        <div className={styles.container}>

            <button className="btn btn-outline-warning" onClick={decrementar}>Decrementar</button>

            <div className={styles.h1}>{contador}</div>


            <button className="btn btn-outline-primary" onClick={incrementar}>Incrementar</button>
        </div>
    )
}


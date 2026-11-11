// export default function Alert(props) {

//     return (
//         <div className={props.className}>
//             <h3>{props.titulo}</h3>
//             <hr/>
//             <p>
//                 {props.texto}
//             </p>
//         </div>

//     )
// }


export default function Alert({ className, titulo, texto }) {

    return (
        <div className={className}>
            <h3>{titulo}</h3>
            <hr/>
            <p>
                {texto}
            </p>
        </div>

    )
}
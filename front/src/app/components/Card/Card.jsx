export default function Card({titulo, texto, urlImagem}) {
    return (
        <div className="col-6 col-md-4">

            <div className="card mb-3">
                <img src={urlImagem} className="card-img-top" alt={titulo} />

                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">{texto}</p>

                </div>
            </div>
        </div>
    )
}
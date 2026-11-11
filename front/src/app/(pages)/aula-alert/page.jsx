import Alert from "@/app/components/Alert/Alert";
import NavBar from "@/app/components/NavBar/NavBar";
import Titulo from "@/app/components/Titulo/Titulo";

export default function AulaAlert() {
    return (
        <>
            <NavBar />
            <div className="container mt-3">
             
             <Titulo titulo="Aula de Alertas" nivel={1} />
               

                <div className="row">

                    <div className="col-6 col-md-3">

                        <Alert 
                            className="alert alert-danger"
                            titulo="Alerta 1" 
                            texto="Este é o primeiro alerta." />

                    </div>
                    <div className="col-6 col-md-3">

                           <Alert 
                            className="alert alert-primary"
                            titulo="Alerta 2" 
                            texto="Este é o segundo alerta." />

                    </div>
                    <div className="col-6 col-md-3">

                           <Alert 
                            className="alert alert-success"
                            titulo="Alerta 3" 
                            texto="Este é o terceiro alerta." />

                    </div>
                    <div className="col-6 col-md-3">
                           <Alert 
                            className="alert alert-dark"
                            titulo="Alerta 4" 
                            texto="Este é o quarto alerta." />
                    </div>

                </div>

            </div>
        </>
    )
}
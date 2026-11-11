
import ContadorDuplo from "@/app/components/ContadorDuplo/ContadorDuplo";
import NavBar from "@/app/components/NavBar/NavBar";
import Titulo from "@/app/components/Titulo/Titulo";

export default function ContadorComposto() {
    return (
        <>
            <NavBar />
            <div className="container mt-3">
                <Titulo titulo="Contador Composto" nivel={1} />
                <ContadorDuplo />
            </div>
        </>
    )
}
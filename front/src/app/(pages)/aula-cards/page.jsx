
import NavBar from "@/app/components/NavBar/NavBar";
import Titulo from "@/app/components/Titulo/Titulo";
import Card from "@/app/components/Card/Card";



const listaDeCards = [
    {
        id: 1, urlImagem: "https://picsum.photos/300/150", titulo: "Explorando as Montanhas", texto: "Descubra as trilhas mais desafiadoras e as vistas mais impressionantes da cordilheira central.",
    }, {
        id: 2, urlImagem: "https://picsum.photos/300/151", titulo: "O Segredo dos Oceanos", texto: "Uma viagem profunda pela vida marinha e os mistérios que se escondemnas fossas abissais.",
    }, {
        id: 3,
        urlImagem: "https://picsum.photos/300/152", titulo: "Tecnologia do Futuro", texto: "Como a inteligência artificial e a automação estão moldando as novas cidades inteligentes.",
    }, {
        id: 4, urlImagem: "https://picsum.photos/300/153", titulo: "Fotografia Urbana", texto: "Dicas essenciais para capturar a essência das grandes metrópoles através das lentes da sua câmera.",
    }, {
        id: 5, urlImagem: "https://picsum.photos/300/154", titulo: "Culinária Saudável", texto: "Receitas práticas e nutritivas para transformar sua rotina alimentar semperder o sabor.",
    }, {
        id: 6, urlImagem: "https://picsum.photos/300/155", titulo: "Arquitetura Moderna", texto: "Um olhar detalhado sobre as estruturas minimalistas e sustentáveis que definem a nova era do design.",
    }, {
        id: 7, urlImagem: "https://picsum.photos/300/156", titulo: "A Jornada do Café", texto: "Do grão colhido na fazenda até a xícara perfeita: conheça a história por trás dasua bebida favorita.",
    }, {
        id: 8, urlImagem: "https://picsum.photos/300/157", titulo: "Destinos Paradisíacos", texto: "Um guia completo com as praias mais isoladas e paradisíacas para planejar suas próximas férias.",
    }, {
        id: 9, urlImagem: "https://picsum.photos/300/158", titulo: "Astronomia para Iniciantes", texto: "Aprenda a identificar constelações, planetas e os principais eventos astronômicos visíveis a olho nu.",
    }, {
        id: 10, urlImagem: "https://picsum.photos/300/159", titulo: "Minimalismo no Dia a Dia", texto: "Como o desapego e a organização pessoal podem trazer mais foco, produtividade e paz mental.",
    },];

export default function AulaCards() {
    return (
        <>
            <NavBar />
            <div className="container mt-4">
                <Titulo titulo="Aula Cards" nivel={1} />

                <div className="row">
                    {
                        listaDeCards.map((item) => (

                            <Card 
                                key={item.id}
                                titulo={item.titulo} 
                                urlImagem={item.urlImagem} 
                                texto={item.texto} />

                        ))
                    }
                </div>
            </div>

        </>
    )
}
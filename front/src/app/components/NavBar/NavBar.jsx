import Link from 'next/link';
import styles from './navbar.module.css';

export default function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Aulas
                                </a>
                                <ul className="dropdown-menu">

                                    <li><Link className="dropdown-item" href="/contador-simples">Contador Simples</Link></li>

                                    <li><Link className="dropdown-item" href="/contador-composto">Contador Composto</Link></li>

                                    <li><Link className="dropdown-item" href="/aula-alert">Aula Alert</Link></li>

                                    <li><Link className="dropdown-item" href="/aula-cards">Aula Cards</Link></li>

                                    <li><Link className="dropdown-item" href="/aula-input-simples">Aula Input Simples</Link></li>

                                    <li><Link className="dropdown-item" href="/aula-form">Aula Formulário</Link></li>

                                     <li><Link className="dropdown-item" href="/listar-autores">Listar Autores</Link></li>

                                </ul>
                            </li>
                            
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>


        
        </>
    );
}

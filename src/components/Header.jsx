import React from "react";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                <nav className="navbar bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" href="#">
                    <img src="https://cdn.pixabay.com/photo/2017/07/24/15/01/vector-2534950_1280.png" alt="Bootstrap" width="30" height="24"/>
                    </a>
                </div>
                </nav>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Genero
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Hombre</a></li>
                                <li><a className="dropdown-item" href="#">Mujer</a></li>
                                <li><a className="dropdown-item" href="#">Unisex</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                             Indumentaria
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Calzado</a></li>
                                <li><a className="dropdown-item" href="#">Deportivo</a></li>
                                <li><a className="dropdown-item" href="#">Abrigo</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                             Edad
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Adulto</a></li>
                                <li><a className="dropdown-item" href="#">Niños</a></li>
                            </ul>
                        </li>

                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="buscador..." aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header

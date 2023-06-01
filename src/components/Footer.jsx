import React from "react";

const Footer = ({redsocial}) => {
    //acá el js
    // const fecha = new Date().getFullYear();

    return (
        <div className = 'footer'>
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Volver</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://www.instagram.com/">@Instagram</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://www.facebook.com/">{redsocial}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled">visitanos en mercadolibre:</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="https://www.mercadolibre.com.ar/">Nosotros</a>
                </li>
            </ul>
        </div>
    );
}

export default Footer